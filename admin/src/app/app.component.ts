import { AuthService } from './auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularProject';

  loggedOut = false;
  constructor(authentication:AuthService){
    if(sessionStorage.getItem('admin')){
      authentication.isLoggedIn = true;
    }
  }
}
