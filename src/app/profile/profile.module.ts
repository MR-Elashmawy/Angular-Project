import { ProfileComponent } from './components/profile.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { ProfileOrdersComponent } from './components/profile-orders/profile-orders.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProfileComponent,
    UpdateProfileComponent,
    ProfileOrdersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class ProfileModule { }
