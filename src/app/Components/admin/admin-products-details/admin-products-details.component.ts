import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminProductsService } from 'src/app/Services/admin-products.service';

@Component({
  selector: 'app-admin-products-details',
  templateUrl: './admin-products-details.component.html',
  styleUrls: ['./admin-products-details.component.css']
})
export class AdminProductsDetailsComponent implements OnInit {

  productID = 0;
  product:any;//undefined
  constructor(private myActivated: ActivatedRoute, private myService: AdminProductsService) {
    this.productID= myActivated.snapshot.params["id"];
   }

  ngOnInit(): void {//Fetch Data
    // console.log(this)
    let that = this;
    this.myService.getProductByID(this.productID).subscribe(
      {
        next(data){
          that.product= data;
        },
        error(err){console.log(err)}
      }
    )
  }

}
