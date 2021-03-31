import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TwoWayDataBinding';

  showdatabindingdemo= true;
  showdirdemo= false;

  showdbdemo(): void
  {
    this.showdatabindingdemo= true;
    this.showdirdemo= false;
  }
  showdirectivedemo() :void
  {
    this.showdatabindingdemo= false;
    this.showdirdemo= true;
  }
  

  }

