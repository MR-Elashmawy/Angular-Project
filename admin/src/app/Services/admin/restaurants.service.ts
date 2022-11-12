import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {
  private baseURL = "http://127.0.0.1:8000/api/categories";
  // http://127.0.0.1:8000/api/categories
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
