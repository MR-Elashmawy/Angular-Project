import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private myClient: HttpClient,private router: Router, private route: ActivatedRoute) { }

  private baseURL = "http://127.0.0.1:8000/api/orders";


  makeOrder(newOrder:any){
    return this.myClient.post(this.baseURL, newOrder);
  }
}
