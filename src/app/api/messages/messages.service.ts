import { Injectable } from '@angular/core';
import { WebSocketService } from '../websocket/web-socket.service';

export interface IMessage {
    authorId: string;
    destinyId: string;
    message: any;
    sent?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private webSocketService: WebSocketService) {
    this.webSocketService.connect();
  }

  public getUnreadMessages() {
    this.webSocketService.emit({ event: 'get_new_messages', data: undefined });

    return this.webSocketService.onEvent('get_new_messages');
  }

  public sendMessage(message: IMessage) {
    this.webSocketService.emit({ event: 'new_message', data: message });
  }

  public getMessages() {
    this.webSocketService.emit({ event: 'get_messages', data: undefined });
    return this.webSocketService.onEvent('get_messages');
  }

  public listenToMessages() {
    return this.webSocketService.onEvent('message');
  }
}
