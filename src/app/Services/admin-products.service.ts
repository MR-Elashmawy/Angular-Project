import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminProductsService {

  constructor(private myClient: HttpClient) { }
  // private BASE_URL = "http://localhost:3000/products";
    private BASE_URL = "https://fakestoreapi.com/products";

  getAllProducts(){
    return this.myClient.get(this.BASE_URL);//body
  }
  getProductByID(id:number){
    return this.myClient.get(`${this.BASE_URL}/${id}`);
  }

  addNewProduct(newProduct:any){
    return this.myClient.post(this.BASE_URL,newProduct);
  }
  updateProduct(id:number, productUpdated={}){
    return this.myClient.put(`${this.BASE_URL}/${id}`, productUpdated);
  }
  deleteProduct(id:number){
    return this.myClient.delete(`${this.BASE_URL}/${id}`);
  }
}
