import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { environment } from '../../environments/environment';
import { Observable, Observer } from 'rxjs';

export interface IWebSocketEvent {
  event: string;
  data: object;
}

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  private socket: SocketIOClient.Socket;

  constructor() { }

  public connect() {
    if (!this.socket || !this.socket.connected) {
      // this.socket = io(environment.serverURL, {
      //   query: {
      //     token: localStorage.getItem('token')
      //   },
      // });
    }
  }

  public emit(event: IWebSocketEvent) {
    // this.socket.emit(event.event, JSON.stringify(event.data));
  }

  public onEvent(eventName: string): Observable<any> {
    return new Observable((observer: Observer<any>) => {
      // this.socket.on(eventName, (data) => observer.next(data));
    });
  }
}
