import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from 'src/app/api/users/users.service';

const URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user = new BehaviorSubject<User | null>(null);
  private users = new BehaviorSubject<Array<User>>([]);

  constructor(private http: HttpClient) {

  }

  public getUser(): Observable<User> {
    return this.user.asObservable();
  }

  public getUsers(): Observable<Array<User>> {

    if (this.users.getValue().length < 1) {
      this.getUsersFromServer().subscribe();
    }

    return this.users.asObservable();
  }

  public createUser(name: string, password: string) {
    // this.signaling.emit({ event: 'new_user', data: { } });
  }

  private getUsersFromServer(): Observable<Array<User>> {

    return this.http.get(URL + '/user/').pipe(
      map((users: Array<User>) => {
        this.users.next(users);

        return users;
      })
    );
  }
}
