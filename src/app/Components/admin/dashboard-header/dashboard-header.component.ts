import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css']
})
export class DashboardHeaderComponent implements OnInit {
  constructor(private authentication: AuthService, private router: Router) {
    
   }

   loggedINAdmin:any;

  ngOnInit(): void {    
    this.loggedINAdmin = sessionStorage.getItem('admin');
    console.log(this.loggedINAdmin);

  }


  logout(){
    this.authentication.isLoggedIn = false;
    sessionStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
