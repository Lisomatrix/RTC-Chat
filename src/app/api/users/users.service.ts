import { Injectable } from '@angular/core';
import { WebSocketService } from '../websocket/web-socket.service';
import { Observable } from 'rxjs';

export interface User {
  id: string;
  name?: string;
  password?: string;
  sessionId?: string;
  friends?: Array<string>;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private webSocketService: WebSocketService) {
    this.webSocketService.connect();
  }

  public changeUsername(name: string) {
    this.webSocketService.emit({ event: 'change_username', data: { name }});
  }

  public listenToChangeUsername() {
    return this.webSocketService.onEvent('change_username');
  }

  public getUser() {
    this.webSocketService.emit({ event: 'get_user', data: undefined });
    return this.webSocketService.onEvent('get_user');
  }

  public getUsers() {
    this.webSocketService.emit({ event: 'get_users', data: undefined });
    return this.webSocketService.onEvent('users');
  }

  public addFriend(userId: string) {
    this.webSocketService.emit({ event: 'add_friendship', data: { userId }});
  }

  public listenToUserSearch(): Observable<User[] | User> {
    return this.webSocketService.onEvent('user_search');
  }

  public listenToNewFriend(): Observable<User> {
    return this.webSocketService.onEvent('new_user');
  }

  public searchUsers(query) {
    this.webSocketService.emit({ event: 'search_user', data: query });
  }
}
