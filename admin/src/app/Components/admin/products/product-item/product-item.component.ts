import { ProductsService } from './../../../../Services/admin/products.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  productID = 0;
  product:any;//undefined
  constructor(private myActivated: ActivatedRoute, private myService: ProductsService) {
    this.productID= myActivated.snapshot.params["id"];
   }

  ngOnInit(): void {//Fetch Data
    // console.log(this)
    let that = this;
    this.myService.getProductByID(this.productID).subscribe(
      {
        next(data){
          that.product= data;
          console.log(that.product);
          
        },
        error(err){console.log(err)}
      }
    )
  }
}
