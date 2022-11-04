import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './Components/user/U.home/home.component';
import { AdminHomeComponent } from './Components/admin/admin-home/admin-home.component';
import { AdminProductsComponent } from './Components/admin/admin-products/admin-products.component';
import { AdminProductsDetailsComponent } from './Components/admin/admin-products-details/admin-products-details.component';
import { AdminProductsItemsComponent } from './Components/admin/admin-products-items/admin-products-items.component';
import { AdminProductsAddComponent } from './Components/admin/admin-products-add/admin-products-add.component';
import { AdminProductsUpdateComponent } from './Components/admin/admin-products-update/admin-products-update.component';
import { AdminProductsService } from './Services/admin-products.service';
import { AdminProducrHeaderComponent } from './Components/admin/admin-producr-header/admin-producr-header.component';
import { AdminHeaderComponent } from './Components/admin/admin-header/admin-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminHomeComponent,
    AdminProductsComponent,
    AdminProductsDetailsComponent,
    AdminProductsItemsComponent,
    AdminProductsAddComponent,
    AdminProductsUpdateComponent,
    AdminProducrHeaderComponent,
    AdminHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AdminProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
