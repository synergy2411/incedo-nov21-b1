import { Injectable } from '@angular/core';
import { from, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  fruits = ['apple', 'oranges', 'banana']

  getData(){
    return this.fruits;
  }

  getPromiseFruits(){
    return new Promise((resolve, reject)=>{
      resolve(this.fruits);
    })
  }

  getObservableFruits(){
    return of(this.fruits)
  }
}
