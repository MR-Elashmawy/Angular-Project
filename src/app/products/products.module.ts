import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from '../Components/admin/products/all-products/all-products.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ProductDetailsComponent } from '../Components/admin/products/product-details/product-details.component';


@NgModule({
  declarations: [
    AllProductsComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    Ng2SearchPipeModule
  ]
})
export class ProductsModule { }
