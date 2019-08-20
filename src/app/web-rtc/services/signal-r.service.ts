import { Injectable } from '@angular/core';
import * as signalR from "@aspnet/signalr";
import { MessagePackHubProtocol } from '@aspnet/signalr-protocol-msgpack';
import { RTCService } from './rtc.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from './user.service';

export interface IRTCExchange {
  Username: string;
  Data: any;
}

const URL = 'https://localhost:5001';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {

  private connection: signalR.HubConnection;

  private peerUsername: string;

  private users = new Array<User>();

  constructor(private http: HttpClient, private rtcService: RTCService) { }

  public connect() {

    if (this.connection && this.connection.state) {
      console.log(this.connection.state);
      return;
    }

    console.log('connecting');
    this.connection = new signalR.HubConnectionBuilder()
    .withUrl(URL + '/messages',  { accessTokenFactory: () => localStorage.getItem('token') })
    .withHubProtocol(new MessagePackHubProtocol())
    .build();

    this.connection.on('ReceiveMessage', message => console.log(message));

    this.connection.start().then(() => {
      this.connection.send('AddGroup').then();
      this.connection.send('SendMessage', 'lisomatrix').then();
      this.setListeners();
      console.log(this.connection);
    });
  }

  public setUsername(username) {
    this.peerUsername = username;
  }

  public sendOffer(offer: IRTCExchange) {
    this.connection.send('SendOffer', offer);
  }

  public sendAnswer(answer: IRTCExchange) {
    this.connection.send('SendAnswer', answer);
  }

  public sendIce(ice: IRTCExchange) {
    this.connection.send('SendIce', ice);
  }

  public getUsers() {
    console.log('calling');
    return this.http.get(URL + '/api/users', { headers: new HttpHeaders({ 'authorization': 'Bearer ' + localStorage.getItem('token')})})
    .pipe(
      map(users => {
        this.users = users as Array<User>;
        return this.users;
      })
    );
  }

  private setListeners() {
    this.connection.on('ReceiveOffer', (offer) => {
      this.rtcService.setOffer(offer).then((val) => {
        this.connection.send('SendAnswer', { Username: this.peerUsername, Data: val });
      })
    });

    this.connection.on('ReceiveAnswer', (answer) => {
      this.rtcService.setAnswer(answer).then();
    });

    this.connection.on('ReceiveIce', (ice) => {
      this.rtcService.addIce(ice);
    });

    this.rtcService.listenToIceCandidates()
    .subscribe((ice) => this.connection.send('SendIce', { Username: this.peerUsername, Data: ice }));
  }
}
