import { Injectable } from "@angular/core";
import { SignalingService } from "./signaling.service";
import { Subject } from "rxjs";
import { RoomService } from "./room.service";
import { EncryptionService } from "./encryption.service";
import { isObject } from "util";
import { encodeBase64, decodeBase64 } from 'tweetnacl-ts';

export interface PeerMessage {
  message: any;
}

export interface IMessage {
  authorId: string;
  destinyId: string;
  message: any;
  sent?: boolean;
}

@Injectable({
  providedIn: "root"
})
export class RTCService {
  private connectedSubject = new Subject<boolean>();

  private iceSubject = new Subject<any>();

  private inboundIceSubject = new Subject<RTCIceCandidate>();

  private peerConnection: RTCPeerConnection;
  private dataChannel: RTCDataChannel;

  private peerConnectionMessageSubject = new Subject<PeerMessage>();

  private localStream: MediaStream;
  private remoteStream: MediaStream;

  private streaming = false;

  private offerSide = false;

  private offerOptions: RTCOfferOptions = {
    offerToReceiveAudio: true,
    offerToReceiveVideo: true
  };

  constructor(
    private encryptionService: EncryptionService,
    private rooms: RoomService,
    private signaling: SignalingService
  ) {
    this.signaling.connect();

    this.signaling.onEvent("new_room").subscribe(data => {});

    this.rooms.getRooms().subscribe(rooms => {});

    this.signaling.onEvent("user_joined").subscribe(() => this.sendOffer());
    this.signaling.onEvent("receive_offer").subscribe(offer => {
      const receivedOffer = new RTCSessionDescription(JSON.parse(offer));

      this.setOffer(receivedOffer);
    });

    this.signaling.onEvent("receive_answer").subscribe(answer => {
      const receivedAnswer = new RTCSessionDescription(JSON.parse(answer));

      this.setAnswer(receivedAnswer);
    });

    this.signaling
      .onEvent("receive_ice")
      .subscribe(ice =>
        this.inboundIceSubject.next(new RTCIceCandidate(JSON.parse(ice)))
      );
  }

  public sendPeerMessage(message: PeerMessage) {
    var encMessage;

    if (hasSymetric) {
      encMessage = this.encryptionService.symetricEncrypt(
        JSON.stringify(message)
      );
    } else {
      encMessage = this.encryptionService.encryptMessage(JSON.stringify(message));
    }

    const encoder = new TextEncoder();

    const json = JSON.stringify(encMessage);
    const binary = encoder.encode(json);
    this.dataChannel.send(binary);

    const data: IMessage = {
      destinyId: "b62546c0-aaf0-11e9-85e6-ffe785e7d468",
      authorId: '0',
      message: binary
    };

    this.signaling.emit({ event: 'new_message', data })
  }

  public getConnectedObservable() {
    return this.connectedSubject.asObservable();
  }

  public async showVideo(local: HTMLVideoElement, remote: HTMLVideoElement) {
    local.srcObject = this.localStream;
    remote.srcObject = this.remoteStream;
  }

  public async setOffer(offer: RTCSessionDescriptionInit) {
    if (!this.peerConnection) {
      await this.createRTCPeerConnection();
    }

    this.localStream.getTracks().forEach(track => {
      try {
        this.peerConnection.addTrack(track, this.localStream);
      } catch (ex) {}
    });

    await this.peerConnection.setRemoteDescription(offer);

    const answer = await this.peerConnection.createAnswer(this.offerOptions);

    this.peerConnection.setLocalDescription(answer);

    this.signaling.emit({ event: "send_answer", data: answer });

    this.findIceCandidate();

    this.iceSubject.subscribe(ice =>
      this.signaling.emit({ event: "send_ice", data: ice })
    );

    return answer;
  }

  public async sendOffer() {
    this.offerSide = true;

    if (!this.peerConnection) {
      await this.createRTCPeerConnection();
    }

    this.localStream.getTracks().forEach(track => {
      try {
        this.peerConnection.addTrack(track, this.localStream);
      } catch (ex) {}
    });

    const offer = await this.peerConnection.createOffer(this.offerOptions);
    this.peerConnection.setLocalDescription(offer);

    this.signaling.emit({ event: "send_offer", data: offer });

    this.findIceCandidate();

    this.iceSubject.subscribe(ice =>
      this.signaling.emit({ event: "send_ice", data: ice })
    );

    return offer;
  }

  public async getLocalStream(): Promise<MediaStream> {
    if (!this.localStream)
      this.localStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false
      });

    const devices = await navigator.mediaDevices.enumerateDevices();

    devices.forEach(device => console.log(device));

    return this.localStream;
  }

  public listenToIceCandidates() {
    return this.iceSubject.asObservable();
  }

  public addIce(ice) {
    this.inboundIceSubject.next(ice);
  }

  public async setAnswer(answer) {
    this.peerConnection.setRemoteDescription(answer);
  }

  public async sendMessage(message) {
    if (this.dataChannel && this.dataChannel.readyState === "open") {
      this.dataChannel.send(message);
    }
  }

  public async sendStream() {
    (await this.getLocalStream()).getTracks().forEach(track => {
      try {
        this.peerConnection.addTrack(track, this.localStream);
      } catch (ex) {}
    });

    this.streaming = true;
  }

  public toggleVideo() {
    this.localStream.getTracks().forEach(track => {
      if (track.kind === "video") {
        track.enabled = !track.enabled;
      }
    });
  }

  public toggleAudio() {
    this.localStream.getTracks().forEach(track => {
      if (track.kind === "audio") {
        track.enabled = !track.enabled;
      }
    });
  }

  public getPeerMessages() {
    return this.peerConnectionMessageSubject.asObservable();
  }

  private findIceCandidate() {
    this.peerConnection.onicecandidate = ice => {
      if (ice.candidate) {
        this.iceSubject.next(ice.candidate);

        return ice.candidate;
      }
    };
  }

  private createDataChannel() {
    this.dataChannel = this.peerConnection.createDataChannel("sendChannel");

    this.dataChannel.onopen = e => {
      this.dataChannel.binaryType = "arraybuffer";

      this.dataChannel.send(this.encryptionService.getPublicKey());
    };
    this.dataChannel.onclose = () => {};
    this.dataChannel.onmessage = e => {
      this.handleNewMessage(e.data);
    };
  }

  private waitForDataChannel() {
    this.peerConnection.ondatachannel = event => {
      this.dataChannel = event.channel;
      this.dataChannel.onopen = e => {
        this.dataChannel.binaryType = "arraybuffer";

        this.dataChannel.send(this.encryptionService.getPublicKey());
      };
      this.dataChannel.onclose = () => {};
      this.dataChannel.onmessage = e => {
        this.handleNewMessage(e.data);
      };
    };
  }

  private async createRTCPeerConnection() {
    await this.getLocalStream();

    const configurations: RTCConfiguration = {
      iceServers: [{ urls: "stun:stun.l.google.com:19302" }]
    };

    this.peerConnection = new RTCPeerConnection(configurations);

    this.peerConnection.ontrack = event => {
      this.remoteStream = event.streams[0];
    };

    if (this.offerSide) {
      this.createDataChannel();
    } else {
      this.waitForDataChannel();
    }

    this.peerConnection.onicegatheringstatechange = event => {
      if (this.peerConnection.iceGatheringState === "gathering") {
        this.inboundIceSubject.subscribe(ice => {
          this.peerConnection.addIceCandidate(ice);
        });
      }
    };

    this.peerConnection.oniceconnectionstatechange = event => {
      if (this.peerConnection.iceConnectionState === "connected") {
        if (!this.streaming) {
          this.sendStream();
        }

        this.connectedSubject.next(true);
      }
    };
  }

  private handleNewMessage(data) {
    if (firstMessage) {
      const peerPublicKey = new Uint8Array(data);
      this.encryptionService.setPeerPublicKey(peerPublicKey);

      if (this.offerSide) {
        this.sendPeerMessage({ message: this.encryptionService.getKeys() });
        hasSymetric = true;
      }

      firstMessage = false;
    } else {
      const decoder = new TextDecoder();

      const decodedData = decoder.decode(data);
      const message = JSON.parse(decodedData);
      
      var decMessage;

      if (hasSymetric) {
        decMessage = this.encryptionService.symetricDecrypt(message);
      } else {
        decMessage = this.encryptionService.decryptMessage(message);
      }
      
      const messageObject = JSON.parse(decMessage);

      if (!this.offerSide && !hasSymetric) {
        if (
          isObject(messageObject.message) &&
          (messageObject.message as Object).hasOwnProperty("secret")
        ) {
          this.encryptionService.setSymetricKey(
            messageObject.message.secret,
            messageObject.message.nonce
          );
          hasSymetric = true;
          return;
        }
      }

      this.peerConnectionMessageSubject.next(messageObject);
    }
  }
}
var firstMessage = true;
var hasSymetric = false;
