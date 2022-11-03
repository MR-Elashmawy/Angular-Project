import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './Components/user/U.home/home.component';
import { AdminHomeComponent } from './Components/admin/admin-home/admin-home.component';
import { AddRestoComponent } from './Components/admin/add-resto/add-resto.component';
import { ListRestoComponent } from './Components/admin/list-resto/list-resto.component';
import { UpdateRestoComponent } from './Components/admin/update-resto/update-resto.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminHomeComponent,
    AddRestoComponent,
    ListRestoComponent,
    UpdateRestoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
