import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './Components/admin/admin-home/admin-home.component';
import { AdminProductsAddComponent } from './Components/admin/admin-products-add/admin-products-add.component';
import { AdminProductsDetailsComponent } from './Components/admin/admin-products-details/admin-products-details.component';
import { AdminProductsUpdateComponent } from './Components/admin/admin-products-update/admin-products-update.component';
import { AdminProductsComponent } from './Components/admin/admin-products/admin-products.component';

const routes: Routes = [
  {path:"", component:AdminHomeComponent},
  {path:"products", component:AdminProductsComponent},
  {path:"products/:id", component:AdminProductsDetailsComponent},
  {path:"addproducts", component:AdminProductsAddComponent},
  {path:"updateproducts/:id", component:AdminProductsUpdateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
