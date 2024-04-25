import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { UserCredentials } from '../shared/interfaces/user-credentials';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private url:string = environment.endpoint;

  constructor(private http: HttpClient) { }

  getToken(credentials: UserCredentials): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${this.url}Token`, credentials);
  }

  register(data: any): Observable<any> {
    return this.http.post(`${this.url}Security/Register`, data);
  }
}

  