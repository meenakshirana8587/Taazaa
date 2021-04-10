import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AsyncService } from '../async.service';

@Component({
  selector: 'app-asynccomp',
  templateUrl: './asynccomp.component.html',
  styleUrls: ['./asynccomp.component.css']
})
export class AsynccompComponent implements OnInit, OnDestroy {

  title = 'RxJS Async Service Demo';
  observer1$: Subscription;
  observer2$: Subscription;
  observer3$: Subscription;
  
  observer1 = [];
  observer2 = [];
  observer3 = [];
  
  showObserver1 = false;
  showObserver2 = false;
  showObserver3 = false;

  constructor(private asyncdemo: AsyncService) {

  }

  
  susbcribe1() {
    this.asyncdemo.count$.subscribe(
      data => { this.observer1.push(data) },
      null,
      () => { this.showObserver1 = true; }
    )
  }
  susbcribe2() {
    this.asyncdemo.count$.subscribe(
      data => { this.observer2.push(data) },
      null,
      () => { this.showObserver2 = true; }
    )
  }
  susbcribe3() {
    this.asyncdemo.count$.subscribe(
      data => { this.observer3.push(data) },
      null,
      () => { this.showObserver3 = true; }
    )
  }

  ngOnInit() {

  }
  ngOnDestroy() {
  
  }

}


