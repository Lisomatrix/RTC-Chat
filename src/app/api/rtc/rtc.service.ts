import { Injectable } from '@angular/core';
import { SignalingService, RTCData } from '../signaling/signaling.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RTCService {

  private peerId: string;

  private peerConnection: RTCPeerConnection;

  private offerOptions: RTCOfferOptions = {
    offerToReceiveAudio: true,
    offerToReceiveVideo: true
  };

  private localStream: MediaStream;
  private remoteStream: MediaStream;

  private streaming = false;
  private connectedSubject = new BehaviorSubject<boolean>(false);

  constructor(private signalingService: SignalingService) {
    this.signalingService.listenToOffer().subscribe(offer => this.setOffer(offer));
    this.signalingService.listenToAnswer().subscribe(answer => this.setAnswer(answer));
  }

  public toggleVideo() {
    this.localStream.getTracks().forEach(track => {
      if (track.kind === 'video') {
        track.enabled = !track.enabled;
      }
    });
  }

  public toggleAudio() {
    this.localStream.getTracks().forEach(track => {
      if (track.kind === 'audio') {
        track.enabled = !track.enabled;
      }
    });
  }

  public setCallOptions(video: boolean, audio: boolean) {
    this.offerOptions.offerToReceiveAudio = audio;
    this.offerOptions.offerToReceiveVideo = video;
  }

  public getConnected() {
    return this.connectedSubject.asObservable();
  }

  public async getLocalStream(): Promise<MediaStream> {
    if (!this.localStream) {
      this.localStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false
      });
    }
    const devices = await navigator.mediaDevices.enumerateDevices();

    // devices.forEach(device => console.log(device));

    return this.localStream;
  }

  public getRemoteStream(): MediaStream {
    return this.remoteStream;
  }

  public async sendOffer(userId: string) {
    if (!this.peerConnection) {
      await this.createRTCPeerConnection();
    }

    this.peerId = userId;

    this.localStream.getTracks().forEach(track => {
      try {
        this.peerConnection.addTrack(track, this.localStream);
      } catch (ex) {}
    });

    const offer = await this.peerConnection.createOffer(this.offerOptions);
    this.peerConnection.setLocalDescription(offer);

    this.findIceCandidate();

    this.signalingService.sendOffer({ userId, data: offer, sender: localStorage.getItem('userId') });
  }

  private async setOffer(offer: RTCData) {
    if (!this.peerConnection) {
      await this.createRTCPeerConnection();
    }

    this.peerId = offer.userId;

    this.localStream.getTracks().forEach(track => {
      try {
        this.peerConnection.addTrack(track, this.localStream);
      } catch (ex) { }
    });

    (await this.peerConnection.setRemoteDescription(offer.data));

    const answer = await this.peerConnection.createAnswer(this.offerOptions);

    this.peerConnection.setLocalDescription(answer);

    this.signalingService.sendAnswer({ userId: offer.userId, data: answer });

    this.findIceCandidate();
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

    this.signalingService.listenToIce().subscribe(ice => this.peerConnection.addIceCandidate(ice));

    this.peerConnection.oniceconnectionstatechange = event => {
      if (this.peerConnection.iceConnectionState === 'connected') {
        if (!this.streaming) {
          this.sendStream();
        }

        this.connectedSubject.next(true);
      }
    };
  }

  private findIceCandidate() {
    this.peerConnection.onicecandidate = ice => {
      if (ice.candidate) {
        this.signalingService.sendIce({ userId: this.peerId, data: ice.candidate });

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
