import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private myClient: HttpClient) {

   }

  private baseURL = "http://localhost:3000/orders";

  getAllOrders(){
    return this.myClient.get(this.baseURL);
  }


  getSpecificOrder(id:number){
    return this.myClient.get(this.baseURL+ "/"+ id );
  }


  addOrder(newOrder:any){
    return this.myClient.post(this.baseURL, newOrder);
  }

  updateOrder(id:number, orderUpdated={}){
    return this.myClient.put(this.baseURL+"/"+ id, orderUpdated);
  }

  deleteOrder(id:number){
    return this.myClient.delete(this.baseURL+"/"+ id);
  }

}
