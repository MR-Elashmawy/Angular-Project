import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id:any ;
  data :any={};
  products: any[]=[];
@Input() value:any = {};
@Output() item = new EventEmitter();
addButton:boolean=false;
amount:number = 0;
  cartProducts:any;
  constructor(private route:ActivatedRoute , private service:ProductsService) {
  this.id = this.route.snapshot.paramMap.get("id");
    // console.log(this.id);

  }

  ngOnInit(): void {
    this.getProduct();
    this.getProducts();
    // this.addToCart();
  }
  getProduct(){
    this.service.getProductById(this.id).subscribe((res) =>{
      this.data = res;
    })
}
//
getProducts(){
    this.service.getfiletrproduct(this.id).subscribe((res:any) => {
      this.products = res;
    } , error =>{
      alert(error.message);
    });
  }
  add(value: any){
    this.item.emit(this.value);
    this.cartProducts = JSON.stringify(value);
    localStorage.setItem("cart",this.cartProducts);
    // console.log(this.cartProducts);
}
addToCart(event:any){
    if("cart" in localStorage){
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!);
      let exist = this.cartProducts.find(this.value.id == event.id);
      console.log(this.value.id);
      if(exist){
          alert("Wrong !!!");
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
