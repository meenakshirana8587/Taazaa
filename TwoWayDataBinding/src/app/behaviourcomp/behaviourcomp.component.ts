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
  
  observer4$: Subscription;
  
  observer4 = [];
  
  showObserver4 = false;
  

  constructor(private behaviourdemo: BehaviourService) {

  }

  
  susbcribe4() {
    this.behaviourdemo.count$.subscribe(
      data => { this.observer4.push(data) },
      null,
      () => { this.showObserver4 = true; }
    )
  }

  ngOnInit() {

  }
  ngOnDestroy() {

  }

}


