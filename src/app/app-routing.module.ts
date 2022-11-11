import { ProfileComponent } from './profile/components/profile.component';
import { CartComponent } from './cart/components/cart.component';
import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/components/about.component';
import { ContactComponent } from './contact/components/contact.component';
import { LogInComponent } from './log-in/components/log-in.component';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { RegisterdComponent } from './registerd/components/registerd.component';
import { HomeComponent } from './U.home/components/home.component';
import { UpdateProfileComponent } from './profile/components/update-profile/update-profile.component';
import { ProfileOrdersComponent } from './profile/components/profile-orders/profile-orders.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"services", component:AllProductsComponent},
  {path:"services/details/:id", component:ProductDetailsComponent},
  {path:"cart", component:CartComponent},
  {path:"about", component:AboutComponent},
  {path:"contact", component:ContactComponent},
  {path:"login", component:LogInComponent},
  {path:"register", component:RegisterdComponent},
  {path:"profile/:id", component:ProfileComponent, canActivate:[AuthGuard]},
  {path:"updateProfile/:id",component:UpdateProfileComponent},
  {path:"orders" , component:ProfileOrdersComponent},
  // {path:"orders/:id" , component:ProfileOrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
