import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private myClient: HttpClient,private router: Router, private route: ActivatedRoute) { }
  private BASE_URL_USER = "http://localhost:3000/users";
  private BASE_URL_ORDERS = "http://localhost:3000/orders";
  getUser(){
    // return this.myClient.get(this.BASE_URL,{observe: "response"});//default body
    return this.myClient.get(this.BASE_URL_USER);//body
  }
  getuserByID(id:number){
    return this.myClient.get(`${this.BASE_URL_USER}/${id}`);
  }
  updateUser(id:number, userUpdated={}){
    return this.myClient.put(this.BASE_URL_USER+"/"+ id, userUpdated);
  }

  
  ///////////////////////////////// ORDERRRRRR ///////////////////////////////////////

  getAllOrders(){
    return this.myClient.get(this.BASE_URL_ORDERS);
  }
  getorderByID(id:number){
    return this.myClient.get(`${this.BASE_URL_USER}/${id}`);
  }
  deletePending(id:number){
    return this.myClient.delete(this.BASE_URL_ORDERS+"/"+ id);
  }

}
