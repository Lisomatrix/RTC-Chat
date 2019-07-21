import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable, Observer } from 'rxjs';

const URL = 'http://localhost:3000';

export interface Event {
  event: string;
  data: object;
}

@Injectable({
  providedIn: 'root'
})
export class SignalingService {

  private socket: SocketIOClient.Socket;

  private connected = false;

  constructor() { }

  public connect() {
    if (!this.connected) {
      this.socket = io(URL, {
        query: {
          token: localStorage.getItem('token')
        },
        transports: [ 'websocket' ]
      });

      this.socket.on('connect', () => {
        this.socket.emit('authenticate', localStorage.getItem('token'));
      })
      // this.socket.emit('authenticate', localStorage.getItem('token'));
      this.connected = true;
    } 
  }

  public emit(event: Event) {
    this.socket.emit(event.event, JSON.stringify(event.data));
  }

  public onEvent(eventName: string): Observable<any> {
    return Observable.create((observer: Observer<any>) => {
      this.socket.on(eventName, (data) => observer.next(data));
    });
  }
}
