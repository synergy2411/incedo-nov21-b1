import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { USER_DATA } from "../model/mocks";

@Injectable()
export class DataService{

  constructor(private http : HttpClient){}

  getUserData(){
    return this.http.get('./assets/data/user-data.json')
  }

}
