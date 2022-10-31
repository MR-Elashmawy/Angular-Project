import { Router } from '@angular/router';
import { AdminsService } from './../../Services/admin/admins.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  errorMsg = "";
  admin:any;
  email = "";
  password = "";

  constructor(private AdminsService: AdminsService, private authentication: AuthService, private router: Router) { 
      
  }

  ngOnInit(): void {
    this.AdminsService.getAdmin(this.email).subscribe(
      (data)=>{           
        this.admin = data;
      }
      );
  }

  login(){
        if( this.email == this.admin.id && this.password == this.admin.password){
          sessionStorage.setItem('admin', JSON.stringify(this.admin));
          this.authentication.isLoggedIn = true;
          this.router.navigateByUrl('/dashboard');
      }else {
        this.errorMsg = "Wrong email or password";
      }
  }

}
