import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface IAuthResponse {
  statusCode?: number;
  message?: string;
  token?: string;
  userId: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public authenticate(username: string, password: string) {
    return this.handleResponse(this.http.post(environment.serverURL + '/auth', {
      username,
      password
    }) as Observable<IAuthResponse>);
  }

  public register(username: string, password: string) {
    return this.handleResponse(this.http.post(environment.serverURL + '/auth/register', {
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
          localStorage.setItem('token', authResponse.token);
          localStorage.setItem('userId', authResponse.userId);
          return { success: true, message: '' };
        }
      })
    );
  }
}
