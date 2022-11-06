import { Router } from '@angular/router';
import { AuthService } from './../../../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedIn = false;
  constructor(private authentication:AuthService, private router:Router) { 
    if(sessionStorage.getItem('user')){
      this.loggedIn = true;
    }

  }// check of user logged in or not

  logout(){
    this.authentication.isLoggedIn = false;
    sessionStorage.clear();

  } //end of logout

  ngOnInit(): void {
  }

}
