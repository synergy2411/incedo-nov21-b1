import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { USER_DATA } from "../model/mocks";
import { User } from "../model/user";

@Injectable()
export class DataService{

  // users : User[] = [];
  counter = 0;

  constructor(private http : HttpClient){

  }

  getUserData(){
    return this.http.get('./assets/data/user-data.json')
    // return this.users;
  }

}
