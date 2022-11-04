import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../../Services/admin/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  products:any[] =[];
  categories:any[] =[];
  // searchKey:string ="";
  searchText: any;
  constructor(private service:ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }
  searchKey(){

  }
  getProducts(){
    this.service.getAllProducts().subscribe((res:any) => {
      this.products = res;
      // console.log(res);
    } , error =>{
      alert(error.message);
    });
  }
  getCategories(){
    this.service.getAllCategories().subscribe((res:any) => {
      this.categories = res;
      console.log(res);
    } , error =>{
      alert(error.message);
    });
  }
  filtercategory(event:any){
    let value = event.target.value;
    if (value == "All") {
        this.getProducts();
    }
    else{
    this.service.getfiletrcategory(value).subscribe((res:any) =>{
      this.products = res;
    })
  }
    console.log(value);

  }
}
