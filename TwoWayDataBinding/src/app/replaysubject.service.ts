import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReplaysubjectService {

  counter = 0;
  count$: Observable<any>;
  
   count: ReplaySubject<number>;
  
  

  constructor() {
    
     this.count = new ReplaySubject();
    
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


