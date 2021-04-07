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
  
  observer3$: Subscription;
  
  observer3 = [];
  
  showObserver3 = false;

  constructor(private asyncdemo: AsyncService) {

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


