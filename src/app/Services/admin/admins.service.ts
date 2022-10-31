import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminsService {

  constructor(private myClient: HttpClient) {

   }

  private baseURL = "http://localhost:3000/admins";

  getAdmin(id:string){
    return this.myClient.get(this.baseURL+ "/"+ id );
  }

}
