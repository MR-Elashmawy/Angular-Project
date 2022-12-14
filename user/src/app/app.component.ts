import { AuthService } from './auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome To Talabat';

  constructor(private authentication: AuthService) {
    if (sessionStorage.getItem('user')) {
      authentication.isLoggedIn = true;
    }
  }
}

