import { Injectable } from '@angular/core';
import { WebSocketService } from '../websocket/web-socket.service';
import { Observable, Observer } from 'rxjs';
import { map } from 'rxjs/operators';

export interface RTCData {
  userId: string;
  data: any;
  sender?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SignalingService {

  constructor(private webSocketService: WebSocketService) { }

  public sendIce(ice: RTCData) {
    this.webSocketService.emit({ event: 'send_ice', data: ice });
  }

  public sendOffer(offer: RTCData) {
    this.webSocketService.emit({ event: 'send_offer', data: offer });
  }

  public sendAnswer(answer: RTCData) {
    this.webSocketService.emit({ event: 'send_answer', data: answer });
  }

  public listenToIce(): Observable<any> {
    return this.webSocketService.onEvent('receive_ice');
  }

  public listenToOffer() {
    return this.webSocketService.onEvent('receive_offer');
  }

  public listenToAnswer() {
    return this.webSocketService.onEvent('receive_answer');
  }
}
