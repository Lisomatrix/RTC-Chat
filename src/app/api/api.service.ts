import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './users/users.service';
import { UsersService } from './users/users.service';
import { RoomService } from './room/room.service';
import { IMessage, MessagesService } from './messages/messages.service';
import { RTCService } from './rtc/rtc.service';
import { SignalingService } from '../signaling/signaling.service';
import { WebSocketService } from './websocket/web-socket.service';
import { map } from 'rxjs/operators';

export interface ISettings {
  isSoundActivated: boolean;
  isNotificationActivated: boolean;
  name?: string;
}

export interface IConversation {
  user: User;
  messages: Array<IMessage>;
}

interface ConversationsMap {
  [key: string]: IConversation;
}

export interface ICall {
  id: string;
  callerId: string;
  receiverId: string;
  user?: User;
}

interface CallOptions {
  audio: boolean;
  video: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private user = JSON.parse(localStorage.getItem('user')) as User;

  private usersSubject = new BehaviorSubject<User[]>([]);

  private conversationsSubject = new BehaviorSubject<IConversation[]>([]);

  private conversations: ConversationsMap = {};

  private currentConversation: BehaviorSubject<IConversation>;

  private messageReceivedSubject = new BehaviorSubject<boolean>(false);

  private peerUserId = '';

  private initialUsersFetch = true;

  private isReceivingCall = false;
  private currentCall: ICall;

  constructor(private usersService: UsersService, private roomsService: RoomService, private signalingService: SignalingService,
              private messagesService: MessagesService, private rtcService: RTCService, private webSocketService: WebSocketService) {

    this.usersService.getUsers().subscribe(users => {
      this.initialUsersFetch = false;

      users.forEach(user => {
        this.conversations[user.id] = {
          user,
          messages: []
        };
      });

      const temp = [];

      Object.entries(this.conversations).forEach(([key, value]) => {
        temp.push(value);
      });

      this.conversationsSubject.next(temp);
      this.usersSubject.next(users);
    });

    this.messagesService.getMessages().subscribe(messages => this.handleGetMessages(messages));
    this.messagesService.listenToMessages().subscribe(message => this.handleNewMessage(message));

    this.currentConversation = new BehaviorSubject<IConversation>({
      user: { id: localStorage.getItem('userId') },
      messages: []
    });

    this.usersService.listenToNewFriend().subscribe(user => {
      const users = this.usersSubject.getValue();

      this.conversations[user.id] = {
        user,
        messages: []
      };

      users.push(user);

      const temp = [];

      Object.entries(this.conversations).forEach(([key, value]) => {
        temp.push(value);
      });

      this.usersSubject.next(users);
      this.conversationsSubject.next(temp);
    });

    this.usersService.getUser().subscribe(user => {
      this.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    });
  }

  public respondToCall(response: string) {
    if (response === 'refuse') {
      this.webSocketService.emit({ event: 'refuse_call', data: { callId: this.currentCall.id } });
    } else {
      this.webSocketService.emit({ event: 'accept_call', data: { callId: this.currentCall.id } });
    }
  }

  public listenToCalls() {
    return this.webSocketService.onEvent('start_call').pipe(
      map((call: ICall) => {
        if (!this.isReceivingCall) {
          this.isReceivingCall = true;

          this.currentCall = call;

          this.currentCall.user = this.findUserById(call.callerId);

          return this.currentCall;
        }
      }));
  }

  public getSavedSettings() {
    const settingsJson = localStorage.getItem('settings');

    if (settingsJson) {
      return JSON.parse(settingsJson) as ISettings;
    } else {
      return { isSoundActivated: true, isNotificationActivated: false };
    }
  }

  public getUser() {
    return this.user;
  }

  public changeNameConfirm(name: string) {
    this.user.name = name;
  }

  public listenToUserSearch() {
    return this.usersService.listenToUserSearch();
  }

  public listenToUsernameChange() {
    return this.usersService.listenToChangeUsername();
  }

  public changeUsername(name: string) {
    this.usersService.changeUsername(name);
  }

  public searchUser(query) {
    this.usersService.searchUsers(query);
  }

  public addFriend(userId: string) {
    this.usersService.addFriend(userId);
  }

  public isConnectedToPeer() {
    return this.rtcService.getConnected();
  }

  public sendMessage(message: string) {
    const userId = localStorage.getItem('userId');

    const messageObject = { destinyId: this.peerUserId, authorId: userId, message };

    this.messagesService.sendMessage(messageObject);
  }

  public getConversation() {
    return this.currentConversation.asObservable();
  }

  public setPeerId(userId: string) {
    this.peerUserId = userId;

    if (!this.conversations[userId]) {
      const user = this.findUserById(userId);

      const conversation: IConversation = {
        user,
        messages: []
      };

      this.conversations[userId] = conversation;
    }

    this.currentConversation.next(this.conversations[userId]);
  }

  public listenToMessageReceived() {
    return this.messageReceivedSubject.asObservable();
  }

  public listenToConversationsChange() {
    return this.conversationsSubject.asObservable().pipe(
      map((conversations: Array<IConversation>) => {
        console.log(this.removeEmptyConversations(conversations));
        return this.removeEmptyConversations(conversations);
      })
    );
  }

  public getUsers() {
    return this.usersSubject.asObservable();
  }

  public listenToCallAccept() {
    return this.webSocketService.onEvent('call_accepted').pipe(
      map(() => {
        this.rtcService.setCallOptions(true, true);
        this.rtcService.sendOffer(this.peerUserId);
      }),
    );
  }

  public startCall(options: CallOptions) {
    this.webSocketService.emit({
      event: 'start_call', data: {
        userId: this.currentConversation.getValue().user.id
      }
    });

    this.rtcService.setCallOptions(options.video, options.audio);
  }

  public toggleVideoOrAudio(options: CallOptions) {
    if (options.video) {
      this.rtcService.toggleVideo();
    }

    if (options.audio) {
      this.rtcService.toggleAudio();
    }
  }

  public async getStreams() {
    return {
      local: await this.rtcService.getLocalStream(),
      remote: this.rtcService.getRemoteStream(),
    };
  }

  private removeEmptyConversations(conversations: Array<IConversation>) {
    for (let i = 0; i < conversations.length; i++) {
      if (!conversations[i].user || !conversations[i].user.id) {
        conversations = conversations.splice(i, 1);
      }
    }

    return conversations;
  }

  private createConversation(userId: string, message: IMessage) {
    const user = this.findUserById(userId);

    if (!user) {
      return;
    }

    const conversation: IConversation = {
      user,
      messages: [message]
    };

    this.conversations[userId] = conversation;
  }

  private addMessageDependingOnAuthor(userId: string, message: IMessage) {
    const thisUserId = localStorage.getItem('userId');

    this.conversations[userId].messages.push(message);
    this.currentConversation.next(this.conversations[userId]);
    // if (message.authorId === thisUserId && !this.conversations[message.destinyId]) {
    //   this.createConversation(message.destinyId, message);
    //   this.currentConversation.next(this.conversations[message.destinyId]);
    // } else {
    //   this.conversations[userId].messages.push(message);
    //   this.currentConversation.next(this.conversations[userId]);
    // }
  }

  private addMessageToConversation(userId: string, message: IMessage) {
    if (this.usersSubject.getValue().length > 0) {
      if (!this.conversations[userId]) {
        return;
      } else {
        this.addMessageDependingOnAuthor(userId, message);
      }
    }
  }

  private findUserById(userId: string) {
    const users = this.usersSubject.getValue();

    for (let i = 0, n = users.length; i < n; i++) {
      if (users[i].id === userId) {
        return users[i];
      }
    }
  }

  private handleGetMessages(messages: IMessage[]) {
    const userId = localStorage.getItem('userId');
    messages.forEach(message => {
      if (userId === message.authorId) {
        this.addMessageToConversation(message.destinyId, message);
      } else {
        this.addMessageToConversation(message.authorId, message);
      }
    });
  }

  private handleNewMessage(message: IMessage) {
    if (message.authorId === localStorage.getItem('userId')) {
      this.addMessageToConversation(message.destinyId, message);
    } else {
      this.addMessageToConversation(message.authorId, message);
      this.messageReceivedSubject.next(true);
    }
  }
}
