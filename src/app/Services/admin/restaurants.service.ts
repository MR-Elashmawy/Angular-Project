import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {
  private baseURL = "http://localhost:3000/restaurants";

  constructor(private http:HttpClient) { }
  getList(){
   return this.http.get(this.baseURL);
  }
  saveResto(data:any){
    return this.http.post(this.baseURL,data);
  }
  deleteResto(id: any){
    return this.http.delete(`${this.baseURL}/${id}`);
  }
  getCurrentResto(id: any){
    return this.http.get(`${this.baseURL}/${id}`);
  }
  updateResto(id: any,data: any){
    return this.http.put(`${this.baseURL}/${id}`,data);
  }
}
