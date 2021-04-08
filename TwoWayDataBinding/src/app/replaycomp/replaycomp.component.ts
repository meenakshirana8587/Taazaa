import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ReplaysubjectService } from '../replaysubject.service';

@Component({
  selector: 'app-replaycomp',
  templateUrl: './replaycomp.component.html',
  styleUrls: ['./replaycomp.component.css']
})
export class ReplaycompComponent implements OnInit , OnDestroy{
  title = 'RxJS ReplaySubject Demo';
  
  observer1$: Subscription;
  observer2$: Subscription;
  observer3$: Subscription;
  
  
  observer1 = [];
  observer2 = [];
  observer3 = [];
 
  
  showObserver1 = false;
  showObserver2 = false;
  showObserver3 = false;
  

  constructor(private replaydemo: ReplaysubjectService) { }
  susbcribe1() {
    this.replaydemo.count$.subscribe(
      data => { this.observer1.push(data) },
      null,
      () => { this.showObserver1 = true; }
    )
  }
  susbcribe2() {
    this.replaydemo.count$.subscribe(
      data => { this.observer2.push(data) },
      null,
      () => { this.showObserver2 = true; }
    )
  }
  susbcribe3() {
    this.replaydemo.count$.subscribe(
      data => { this.observer3.push(data) },
      null,
      () => { this.showObserver3 = true; }
    )
  }

  ngOnInit(): void {
    
  }
  ngOnDestroy() {
    this.observer2$.unsubscribe();
  }


}
