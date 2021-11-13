import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGaurdService implements CanActivate{

  constructor() { }

  canActivate() : boolean | Promise<boolean> | Observable<boolean>{
    if(localStorage.getItem("token")){
      return true
    }
    return false;
  }
}
