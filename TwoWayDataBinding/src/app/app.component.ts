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
  showmaster= false;

  showdbdemo(): void
  {
    this.showdatabindingdemo= true;
    this.showdirdemo= false;
    this.showmaster= false;
  }
  showdirectivedemo() :void
  {
    this.showdatabindingdemo= false;
    this.showdirdemo= true;
    this.showmaster= false;
  }
  showmasterdetails(): void{
    this.showdatabindingdemo= false;
    this.showdirdemo= false;
    this.showmaster= true;
  }
  data= undefined;

  
  

  }

