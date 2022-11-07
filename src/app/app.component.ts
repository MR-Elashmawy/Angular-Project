import { AuthService } from './auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'E-Commerce-Project';

  constructor(private authentication: AuthService) {
    if (sessionStorage.getItem('user')) {
      authentication.isLoggedIn = true;
    }
  }
}

