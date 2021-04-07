import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviourService {

  counter = 0;
  count$: Observable<any>;
  count: Subject<number>;
  
  
  

  constructor() {
    this.count = new BehaviorSubject(100);
    
    this.count$ = this.count.asObservable();

    setInterval(() => {
      this.counter = this.counter + 1;
      if (this.counter > 10) {
        this.count.complete();
      }
      this.count.next(this.counter);
    }, 1000)

  }
}
