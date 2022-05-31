import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {LoginCredentials} from "../models/dtos/login-credentials";
import {SignUpCredentials} from "../models/dtos/sign-up-credentials";
import {AuthenticationToken} from "../models/dtos/authentication-token";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly client: HttpClient) { }

  login(credentials: LoginCredentials): Observable<AuthenticationToken> {
    return this.client.post<AuthenticationToken>(environment.gatewayApiUrl + '/auth/login', credentials);
  }

  signUp(credentials: SignUpCredentials): Observable<AuthenticationToken> {
    return this.client.post<AuthenticationToken>(environment.gatewayApiUrl + '/auth/sign-up', credentials);
  }
}
