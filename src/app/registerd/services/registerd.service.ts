import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterdService {

  private baseURL = "http://localhost:3000/users";

  constructor(private myClient: HttpClient) {
  }
  addNewUser(newUser: any) {
    return this.myClient.post(this.baseURL, newUser);
  }

  get(baseURL:any){

  }


}
