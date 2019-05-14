import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginResult} from '../Entities/frontend/login/login.result';
import {ErrorResult} from '../Entities/results/error.result';

@Injectable()
export class SessionService {
  readonly URL = '/api/login';
  constructor(private http: HttpClient) {  }

  login(credentials: {username: string, password: string}): Observable<LoginResult|ErrorResult> {
    return this.http.post<LoginResult|ErrorResult>(this.URL, credentials);
  }
}
