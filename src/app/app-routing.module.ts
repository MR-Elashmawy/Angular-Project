import { AdminHomeComponent } from './Components/admin/admin-home/admin-home.component';
import { AllOrdersComponent } from './Components/admin/orders/all-orders/all-orders.component';
import { OrdersPendingComponent } from './Components/admin/orders/orders-pending/orders-pending.component';
import { OrdersAcceptedComponent } from './Components/admin/orders/orders-accepted/orders-accepted.component';
import { OrdersRejectedComponent } from './Components/admin/orders/orders-rejected/orders-rejected.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"dashboard", component:AdminHomeComponent},
  {path:"dashboard/orders", component:AllOrdersComponent},
  {path:"dashboard/orders/pending", component:OrdersPendingComponent},
  {path:"dashboard/orders/accepted", component:OrdersAcceptedComponent},
  {path:"dashboard/orders/rejected", component:OrdersRejectedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
