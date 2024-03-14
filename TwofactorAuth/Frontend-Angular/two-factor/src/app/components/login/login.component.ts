import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationResponse } from '../../models/authentication-response';
import { AuthenticationRequest } from '../../models/authentication-request';
import { AuthService } from '../../service/auth.service';
import { VerificationRequest } from '../../models/verification-request';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  authRequest: AuthenticationRequest = {};
  otpCode = '';
  authResponse: AuthenticationResponse = {};
  errorMessage!: string; 
  errorMessage2!: string; 

  constructor( private authService: AuthService,    private router: Router) { }

  authenticate() {
    this.authService.login(this.authRequest)
      .subscribe({
        next: (response) => {
          this.authResponse = response;
          if (!this.authResponse.mfaEnabled) {
            localStorage.setItem('token', response.accessToken as string);
            this.router.navigate(['welcome']);
          }
        },
        error: (error) => {
          console.error('An error occurred during authentication:', error);
          // Assuming there's an error message in the error object
          this.errorMessage = "Invalid Credentials";
          // Resetting the authResponse since authentication failed
          this.authResponse = {};
        }
      });
  }
  

  verifyCode() {
    const verifyRequest: VerificationRequest = {
      email: this.authRequest.email,
      code: this.otpCode
    };
    this.authService.verifyCode(verifyRequest)
      .subscribe({
        next: (response) => {
          localStorage.setItem('token', response.accessToken as string);
          this.router.navigate(['welcome']);
        },
        error: (error) => {
          console.error('An error occurred during verification:', error);
          // Assuming there's an error message in the error object
          this.errorMessage2 ="Invalid OTP";
          // Clear OTP code if verification fails
          this.otpCode = '';
        }
      });
  }
}

