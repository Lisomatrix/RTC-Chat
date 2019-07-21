import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SignalingService } from './signaling.service';
import { HttpClient } from '@angular/common/http';

const URL = "http://localhost:3000";

export interface User {
  id: string;
  name: string;
  sessionId?: string;
  password?: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user = new BehaviorSubject<User | null>(null);
  private users = new BehaviorSubject<Array<User>>([]);

  constructor(private http: HttpClient, private signaling: SignalingService) {
    // this.signaling.connect();
    // this.signaling.onEvent('new_user').subscribe((data: User) => this.user.next(data));
    this.http.get(URL + '/user/').subscribe((users) => this.users.next(users as Array<User>));
  }

  public getUser(): Observable<User> {
    return this.user.asObservable();
  }

  public getUsers(): Observable<Array<User>> {
    return this.users.asObservable();
  }

  public createUser(name: string, password: string) {
    this.signaling.emit({ event: 'new_user', data: { } });
  }
}
