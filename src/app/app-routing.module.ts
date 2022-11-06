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

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"services", component:AllProductsComponent},
  // {path:"services", component:AllProductsComponent, canActivate:[AuthGuard]},
  {path:"about", component:AboutComponent},
  {path:"contact", component:ContactComponent},
  {path:"login", component:LogInComponent},
  {path:"register", component:RegisterdComponent},
  {path:"details", component:ProductDetailsComponent},
  {path:"cart", component:CartComponent},
  {path:"profile", component:ProfileComponent, canActivate:[AuthGuard]},
  // {path:"**", component:HomeComponent}
  // {path:"**", component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
