import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn : 'root'
})
export class AuthService{
  private token = null;

  constructor(private router : Router){}

  onLogin(email : string, password : string){
    if(email === 'foo@test.com' && password==='foo!123'){
      this.token = "TOKEN_BY_SERVER";
      this.router.navigate(['/users'])
      return localStorage.setItem("token", "TOKEN_BY_SERVER")
    }else{
      this.router.navigate(['/login'])
    }
  }
}
