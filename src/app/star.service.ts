import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StarService {

  constructor(public http:HttpClient) { }
  getUsers(){
    return this.http.get("http://localhost:4200/assets/stars.json")
  }
}
