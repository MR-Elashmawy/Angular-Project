import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  products:any[] =[];
  categories:any[] =[];
  // searchKey:string ="";
  cartProducts:any[] =[];
  searchText: any;
  constructor(private service:ProductsService, private titlePage: Title) {
    titlePage.setTitle("Services");

  }

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
      // console.log(res);
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
      this.categories = res;
    })
  }
    // console.log(value);

  }
  addToCart(event:any){
    // console.log(event);
    if("cart" in localStorage){
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!);
      let exist = this.cartProducts.find(item => item.item.id == event.item.id);
      if(exist){
          alert("3mko mogy by2loko 7raaam and el product ya 3rs mwgooood !!!");
      }
      else{
          this.cartProducts.push(event);
          localStorage.setItem("cart" ,JSON.stringify(this.cartProducts));
      }
    }
    else{
        this.cartProducts.push(event);
        localStorage.setItem("cart" ,JSON.stringify(this.cartProducts));
    }
  }
}
