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

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"dashboard", component:AdminHomeComponent, canActivate:[AuthGuard]},
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
