import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterRequest } from '../models/register-request';
import { AuthenticationResponse } from '../models/authentication-response';
import { AuthenticationRequest } from '../models/authentication-request';
import { VerificationRequest } from '../models/verification-request';

@Injectable({
 providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/v1/auth'

 constructor(private http: HttpClient) { }

 register(registerRequest: RegisterRequest) {
  console.log("in the register angular")
  return this.http.post<AuthenticationResponse>(`${this.baseUrl}/register`, registerRequest);
}

login(authRequest: AuthenticationRequest) {
  console.log(authRequest);
  return this.http.post<AuthenticationResponse>(`${this.baseUrl}/authenticate`, authRequest);
}
verifyCode(verificationRequest: VerificationRequest) {
  return this.http.post<AuthenticationResponse>(`${this.baseUrl}/verify`, verificationRequest);
}
}