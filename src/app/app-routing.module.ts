import { AddRestaurantComponent } from './Components/admin/restaurants/add-restaurant/add-restaurant.component';
import { RestaurantItemComponent } from './Components/admin/restaurants/restaurant-item/restaurant-item.component';
import { AllRestaurantsComponent } from './Components/admin/restaurants/all-restaurants/all-restaurants.component';
import { AllProductsComponent } from './Components/admin/products/all-products/all-products.component';
import { ErrorComponent } from './Components/error/error.component';
import { LoginComponent } from './Components/login/login.component';
import { OrderItemComponent } from './Components/admin/orders/order-item/order-item.component';
import { AdminHomeComponent } from './Components/admin/admin-home/admin-home.component';
import { AllOrdersComponent } from './Components/admin/orders/all-orders/all-orders.component';
import { OrdersPendingComponent } from './Components/admin/orders/orders-pending/orders-pending.component';
import { OrdersAcceptedComponent } from './Components/admin/orders/orders-accepted/orders-accepted.component';
import { OrdersRejectedComponent } from './Components/admin/orders/orders-rejected/orders-rejected.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './Components/user/U.home/home.component';
import { ProductDetailsComponent } from './Components/admin/products/product-details/product-details.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"dashboard", component:AdminHomeComponent, canActivate:[AuthGuard]},
  {path:"dashboard/products", component:AllProductsComponent, canActivate:[AuthGuard]},
  {path:"dashboard/products/restaurants", component:AllRestaurantsComponent, canActivate:[AuthGuard]},
  {path:"dashboard/products/restaurants/edit/:id", component:RestaurantItemComponent, canActivate:[AuthGuard]},
  {path:"dashboard/products/restaurants/add", component:AddRestaurantComponent, canActivate:[AuthGuard]},
  {path:"dashboard/products/details", component:ProductDetailsComponent, canActivate:[AuthGuard]},
  {path:"dashboard/orders", component:AllOrdersComponent, canActivate:[AuthGuard]},
  {path:"dashboard/orders/pending", component:OrdersPendingComponent, canActivate:[AuthGuard]},
  {path:"dashboard/orders/accepted", component:OrdersAcceptedComponent, canActivate:[AuthGuard]},
  {path:"dashboard/orders/rejected", component:OrdersRejectedComponent, canActivate:[AuthGuard]},
  {path:"dashboard/orders/:id", component:OrderItemComponent, canActivate:[AuthGuard]},
  {path:"**", component: ErrorComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
