import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../../../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedIn = false;
  userID:any;
  constructor(public authentication:AuthService,private myActivated: ActivatedRoute, private router:Router) {
    if(sessionStorage.getItem('user')){
      this.loggedIn = true;
      this.userID=JSON.parse(sessionStorage.getItem('user')!).id;
    }
  }// check of user logged in or not

  logout(){
    this.authentication.isLoggedIn = false;
    sessionStorage.setItem('user','');

  } //end of logout

  ngOnInit(): void {
  }

}
