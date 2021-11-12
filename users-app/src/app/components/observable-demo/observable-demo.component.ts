import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';

import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent {

  constructor(private dataService : DataService){}

  getCounter(){
    return this.dataService.counter;
  }

  increaseCounter(){
    this.dataService.counter++;
  }

  unSub$ : Subscription;
  obs$ = new Observable((observer)=>{
    setTimeout(() => { observer.next("First Package") }, 1000)
    setTimeout(() => { observer.next("Second Package") }, 2000)
    // setTimeout(() => { observer.error(new Error('Something bad happened')) }, 3000)
    setTimeout(() => { observer.next("Third Package") }, 4000)
    setTimeout(() => { observer.complete() }, 6000)
  })

  onSubscribe(){
    this.unSub$ = this.obs$.pipe(
      tap(value => console.log("[TAP]", value)),
      map(value => "My " + value),
      take(2)
    ).subscribe({
      next : data => console.log(data),
      error : err => console.error(err),
      complete : () => console.log("COMPLETED")
    })
  }

  onUnsubscribe(){
    this.unSub$.unsubscribe();
  }

}
