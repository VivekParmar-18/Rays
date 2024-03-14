import { Component } from '@angular/core';
import { RegisterRequest } from '../../models/register-request';
import { Router } from '@angular/router';
import { AuthenticationResponse } from '../../models/authentication-response';
import { AuthService } from '../../service/auth.service';
import { VerificationRequest } from '../../models/verification-request';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerRequest: RegisterRequest = {};
  authResponse: AuthenticationResponse = {};

  message = '';
  otpCode = '';
  errorMessage2!:String;
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  registerUser() {
    this.message = '';
    this.authService.register(this.registerRequest)
      .subscribe({
        next: (response) => {
          if (response) {
            this.authResponse = response;
          } else {
            // inform the user
            this.message = 'Account created successfully\nYou will be redirected to the Login page in 3 seconds';
            setTimeout(() => {
              this.router.navigate(['login']);
            }, 3000)
          }
        }
      });

  }
  verifyTfa() {
    this.message = '';
    
    const verifyRequest: VerificationRequest = {
      email: this.registerRequest.email,
      code: this.otpCode
    };
    this.authService.verifyCode(verifyRequest)
      .subscribe({
        next: (response) => {
          this.message = 'Account created successfully\nYou will be redirected to the Welcome page in 3 seconds';
          setTimeout(() => {
            localStorage.setItem('token', response.accessToken as string);
            this.router.navigate(['welcome']);
          }, 3000);
        },
        error: (error) => {
          console.error('An error occurred during authentication:', error);
          // Assuming there's an error message in the error object
          this.errorMessage2 = "Invalid Authentication code. Please try again.";
        }}
        );
  }
}
