import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BehaviourService } from '../behaviour.service';

@Component({
  selector: 'app-behaviourcomp',
  templateUrl: './behaviourcomp.component.html',
  styleUrls: ['./behaviourcomp.component.css']
})
export class BehaviourcompComponent implements OnInit, OnDestroy {

  title = 'RxJS Behaviour subject Demo';
  
  observer1$: Subscription;
  observer2$: Subscription;
  observer3$: Subscription;
  
  observer1 = [];
  observer2 = [];
  observer3 = [];
  
  showObserver1 = false;
  showObserver2 = false;
  showObserver3 = false;
  

  constructor(private behaviourdemo: BehaviourService) {

  }

  
  susbcribe1() {
    this.behaviourdemo.count$.subscribe(
      data => { this.observer1.push(data) },
      null,
      () => { this.showObserver1 = true; }
    )
  }
  susbcribe2() {
    this.behaviourdemo.count$.subscribe(
      data => { this.observer2.push(data) },
      null,
      () => { this.showObserver2 = true; }
    )
  }
  susbcribe3() {
    this.behaviourdemo.count$.subscribe(
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


