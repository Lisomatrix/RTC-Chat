import { Injectable } from '@angular/core';
import { SignalingService } from './signaling.service';

@Injectable({
  providedIn: 'root'
})
export class RTCService {

  private peerConnection: RTCPeerConnection;

  private offerOptions: RTCOfferOptions = {
    offerToReceiveAudio: true,
    offerToReceiveVideo: true
  };

  private localStream: MediaStream;
  private remoteStream: MediaStream;

  private streaming = false;

  constructor(private signalingService: SignalingService) {
    this.signalingService.listenToOffer().subscribe(this.setOffer);
    this.signalingService.listenToAnswer().subscribe(this.setAnswer);
  }

  public async getLocalStream(): Promise<MediaStream> {
    if (!this.localStream) {
      this.localStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false
      });
    }
    const devices = await navigator.mediaDevices.enumerateDevices();

    devices.forEach(device => console.log(device));

    return this.localStream;
  }

  public getRemoteStream(): MediaStream {
    return this.remoteStream;
  }

  private async setOffer(offer: RTCSessionDescriptionInit) {
    if (!this.peerConnection) {
      await this.createRTCPeerConnection();
    }

    this.localStream.getTracks().forEach(track => {
      try {
        this.peerConnection.addTrack(track, this.localStream);
      } catch (ex) { }
    });

    (await this.peerConnection.setRemoteDescription(offer));

    const answer = await this.peerConnection.createAnswer(this.offerOptions);

    this.peerConnection.setLocalDescription(answer);

    this.signalingService.sendAnswer(answer);

    this.findIceCandidate();

    // this.iceSubject.subscribe(ice =>
    //   this.signaling.emit({ event: "send_ice", data: ice })
    // );

    return answer;
  }

  private async setAnswer(answer) {
    this.peerConnection.setRemoteDescription(answer);
  }

  private async createRTCPeerConnection() {
    await this.getLocalStream();

    const configurations: RTCConfiguration = {
      iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
    };

    this.peerConnection = new RTCPeerConnection(configurations);

    this.peerConnection.ontrack = event => {
      this.remoteStream = event.streams[0];
    };

    // if (this.offerSide) {
    //   this.createDataChannel();
    // } else {
    //   this.waitForDataChannel();
    // }

    this.peerConnection.onicegatheringstatechange = event => {
      if (this.peerConnection.iceGatheringState === 'gathering') {
        this.signalingService.listenToIce().subscribe(ice => this.peerConnection.addIceCandidate(ice));
      }
    };

    this.peerConnection.oniceconnectionstatechange = event => {
      if (this.peerConnection.iceConnectionState === 'connected') {
        if (!this.streaming) {
          this.sendStream();
        }

        // this.connectedSubject.next(true);
      }
    };
  }

  private findIceCandidate() {
    this.peerConnection.onicecandidate = ice => {
      if (ice.candidate) {
        // this.iceSubject.next(ice.candidate);
        this.signalingService.sendIce(ice.candidate);

        return ice.candidate;
      }
    };
  }

  private async sendStream() {
    (await this.getLocalStream()).getTracks().forEach(track => {
      try {
        this.peerConnection.addTrack(track, this.localStream);
      } catch (ex) { }
    });

    this.streaming = true;
  }

}
