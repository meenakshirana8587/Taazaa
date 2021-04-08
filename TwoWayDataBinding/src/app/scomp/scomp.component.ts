import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-scomp',
  templateUrl: './scomp.component.html',
  styleUrls: ['./scomp.component.css']
})
export class ScompComponent implements OnInit, OnDestroy {

  

  
  title = 'RxJS Service demo';
  observer1$: Subscription;
  observer2$: Subscription;
  observer3$: Subscription;
  
  observer1 = [];
  observer2 = [];
  observer3 = [];
  
  
  showObserver1 = false;
  showObserver2 = false;
  showObserver3 = false;
  
  

  constructor(private subjectdemo: SubjectService) { }

  subscribe1() {
    this.subjectdemo.count$.subscribe(
      data => { this.observer1.push(data) },
      null,
      () => { this.showObserver1 = true; }
    )
  }
  subscribe2() {
    this.subjectdemo.count$.subscribe(
      data => { this.observer2.push(data) },
      null,
      () => { this.showObserver2 = true; }
    )
  }
  subscribe3() {
    this.subjectdemo.count$.subscribe(
      data => { this.observer3.push(data) },
      null,
      () => { this.showObserver3 = true; }
    )
  }
  

  ngOnInit() {

  }
  ngOnDestroy() {
    this.observer1$.unsubscribe();
    this.observer2$.unsubscribe();
    this.observer3$.unsubscribe();
  }

}


