import { Router } from '@angular/router';
import { ProductsService } from './../../../../Services/admin/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(public myService: ProductsService ,private router: Router) { }
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
      this.router.navigate(['/dashboard/products']);
    },1000);
  }



}
