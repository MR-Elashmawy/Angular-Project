import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminProductsService } from 'src/app/Services/admin-products.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  constructor(public myService: AdminProductsService ,private router: Router) { }
  deletedproduct:any=[];
  products :any;
  ngOnInit(): void {
    this.myService.getAllProducts().subscribe(
      (data)=>{
        this.products= data;
      },
      (err)=>{console.log(err)}
    )
  }
  deleteProduct(item: number){
    this.deletedproduct.splice(item-1,1)
    this.myService.deleteProduct(item).subscribe((result)=>{
      alert("Product deleted successfully,Refresh The page");
    }); setTimeout(() => {
      this.router.navigate(['/products']);
    },1000);
  }


}
