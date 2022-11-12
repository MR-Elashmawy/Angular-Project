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


  ngOnInit(): void {    

  }


  logout(){
    this.authentication.isLoggedIn = false;
    sessionStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
