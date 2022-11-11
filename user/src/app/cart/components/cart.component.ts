import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cartProducts:any[]=[];
total :any=0 ;
  constructor(private orderService: CartService) {}
  ngOnInit(): void {
    this.getCartProducts();
  }


getCartProducts(){
      if("cart" in localStorage){
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!);
    }
    this.getCartTotal();
}

plusamount(index:number){
  this.cartProducts[index].quantity ++;
  localStorage.setItem("cart" ,JSON.stringify(this.cartProducts));
  this.getCartTotal();
}
minsamount(index:number){
  this.cartProducts[index].quantity --;
  localStorage.setItem("cart" ,JSON.stringify(this.cartProducts));
  this.getCartTotal();
}
getCartTotal(){
this.total = 0;
for (let x in this.cartProducts) {
  this.total += this.cartProducts[x].price  * this.cartProducts[x].quantity;
  }
}
deleteProduct(index:number){
  this.cartProducts.splice(index , 1);
  localStorage.setItem("cart" ,JSON.stringify(this.cartProducts));
  this.getCartTotal();
}
clearCart(){
  this.cartProducts=[];
  localStorage.setItem("cart" ,JSON.stringify(this.cartProducts));
  this.getCartTotal();
}

newOrder(){

} // make new order

}
