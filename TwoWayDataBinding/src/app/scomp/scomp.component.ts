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
  
  observer1 = [];
  
  
  showObserver1 = false;
  
  

  constructor(private subjectdemo: SubjectService) { }

  subscribe1() {
    this.subjectdemo.count$.subscribe(
      data => { this.observer1.push(data) },
      null,
      () => { this.showObserver1 = true; }
    )
  }
  

  ngOnInit() {

  }
  ngOnDestroy() {

  }

}


