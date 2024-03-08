import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'student-form';
  constructor(private router: Router) {}

  logoutWithDelay(): void {
    setTimeout(() => {
      window.location.href = 'http://localhost:8080/logout';
    }); // 3000 milliseconds = 3 seconds
  }
}
