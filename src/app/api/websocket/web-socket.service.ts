import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, Observer } from 'rxjs';
import * as io from 'socket.io-client';
import * as ioc from 'socket.io-msgpack-parser';

export interface IWebSocketEvent {
  event: string;
  data: object;
}

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  private socket: SocketIOClient.Socket;
  private isConnecting = false;

  constructor() { }

  public connect() {
    if ((!this.socket || !this.socket.connected) && !this.isConnecting) {
      this.isConnecting = true;
      this.socket = io(environment.serverURL, {
        query: {
          token: localStorage.getItem('token')
        },
        // @ts-ignore
        parser: ioc,
        // transports: ['websocket']
      });

      this.socket.once('connect', () => {
        this.socket.emit('auth');
      });

      this.socket.on('exception', (data) => {
        console.error(data);
      });
    }
  }

  public emit(event: IWebSocketEvent) {
    this.socket.emit(event.event, JSON.stringify(event.data));
  }

  public onEvent(eventName: string): Observable<any> {
    return new Observable((observer: Observer<any>) => {
      this.socket.on(eventName, (data: any) => observer.next(data));
    });
  }
}
