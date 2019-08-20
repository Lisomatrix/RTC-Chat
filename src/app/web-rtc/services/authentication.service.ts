import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

const URL = 'http://localhost:3000';

interface IAuthResponse {
  statusCode?: number;
  message?: string;
  token?: string;
  userId: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private token: string;

  constructor(private http: HttpClient) {}

  public authenticate(username: string, password: string) {
    return this.handleResponse(this.http.post(URL + '/auth', {
      username,
      password
    }) as Observable<IAuthResponse>);
  }

  public register(username: string, password: string) {
    return this.handleResponse(this.http.post(URL + '/auth/register', {
      username,
      password
    }) as Observable<IAuthResponse>);
  }

  private handleResponse(result: Observable<IAuthResponse>) {
    return result.pipe(
      map((authResponse: IAuthResponse) => {
        if (authResponse.statusCode) {
          return { success: false, message: authResponse.message };
        } else {
          this.token = authResponse.token;
          localStorage.setItem('token', this.token);
          localStorage.setItem('userId', authResponse.userId);
          return { success: true, message: '' };
        }
      })
    );
  }
}
