import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AdminProductsService {

  constructor(private myClient: HttpClient,private router: Router, private route: ActivatedRoute) { }
  private BASE_URL = "http://localhost:3000/products";
    // private BASE_URL = "https://fakestoreapi.com/products";

  getAllProducts(){
    return this.myClient.get(this.BASE_URL);//body
  }
  getProductByID(id:number){
    return this.myClient.get(`${this.BASE_URL}/${id}`);
  }

  addNewProduct(newProduct:any){
    return this.myClient.post(this.BASE_URL, newProduct);
  }

  // deleteProduct(id:number){
  //   return this.myClient.delete(`${this.BASE_URL}/${id}`);
  // }
  // deleteProduct(): void {
  //   this.myClient.delete(this.product.id).subscribe(() => {
  //     // this.myClient.showMessage('Produto deletado com sucesso!');
  //     this.router.navigate(['/products']);
  //   })
  // }
  updateProduct(id:number, productUpdated={}){
    return this.myClient.put(this.BASE_URL+"/"+ id, productUpdated);
  }

  deleteProduct(id:number){
    return this.myClient.delete(this.BASE_URL+"/"+ id);
  }
}


