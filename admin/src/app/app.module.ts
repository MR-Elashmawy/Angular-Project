import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SharedModule } from './shared/shared.module';
import { AuthService } from './auth/auth.service'
import { AuthGuard } from './auth/auth.guard'
import { OrdersService } from './Services/admin/orders.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { HomeComponent } from './Components/user/U.home/home.component';
import { AdminHomeComponent } from './Components/admin/admin-home/admin-home.component';
import { DashboardHeaderComponent } from './Components/admin/dashboard-header/dashboard-header.component';
import { OrdersRoutesComponent } from './Components/admin/orders/orders-routes/orders-routes.component';
import { AllOrdersComponent } from './Components/admin/orders/all-orders/all-orders.component';
import { OrderItemComponent } from './Components/admin/orders/order-item/order-item.component';
import { OrdersPendingComponent } from './Components/admin/orders/orders-pending/orders-pending.component';
import { OrdersRejectedComponent } from './Components/admin/orders/orders-rejected/orders-rejected.component';
import { OrdersAcceptedComponent } from './Components/admin/orders/orders-accepted/orders-accepted.component';
import { LoginComponent } from './Components/login/login.component';
import { AllRestaurantsComponent } from './Components/admin/restaurants/all-restaurants/all-restaurants.component';
import { AddRestaurantComponent } from './Components/admin/restaurants/add-restaurant/add-restaurant.component';
import { ErrorComponent } from './Components/error/error.component';
import { RestaurantItemComponent } from './Components/admin/restaurants/restaurant-item/restaurant-item.component';
import { ProductHeaderComponent } from './Components/admin/products/product-header/product-header.component';
import { ProductsComponent } from './Components/admin/products/products/products.component';
import { ProductAddComponent } from './Components/admin/products/product-add/product-add.component';
import { ProductUpdateComponent } from './Components/admin/products/product-update/product-update.component';
import { ProductItemComponent } from './Components/admin/products/product-item/product-item.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminHomeComponent,
    AllOrdersComponent,
    DashboardHeaderComponent,
    OrderItemComponent,
    OrdersPendingComponent,
    OrdersRejectedComponent,
    OrdersAcceptedComponent,
    OrdersRoutesComponent,
    AllOrdersComponent,
    LoginComponent,
    ErrorComponent,
    AllRestaurantsComponent,
    AddRestaurantComponent,
    RestaurantItemComponent,
    ProductHeaderComponent,
    ProductsComponent,
    ProductAddComponent,
    ProductUpdateComponent,
    ProductItemComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    Ng2SearchPipeModule,


  ],
  providers: [
    OrdersService, [AuthService, AuthGuard],

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
