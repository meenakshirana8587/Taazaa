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
  
  observer2$: Subscription;
  
  
  observer2 = [];
 
  
  showObserver2 = false;
  

  constructor(private replaydemo: ReplaysubjectService) { }
  susbcribe2() {
    this.replaydemo.count$.subscribe(
      data => { this.observer2.push(data) },
      null,
      () => { this.showObserver2 = true; }
    )
  }

  ngOnInit(): void {
    
  }
  ngOnDestroy() {

  }


}
