import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TwoWayDataBinding';
color:string;
c= 'yellow';


  showdatabindingdemo= true;
  showdirdemo= false;
  showmaster= false;
  showchild= false;
  showattribute= false;

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
  showc1c2(): void{
    this.showdatabindingdemo= false;
    this.showdirdemo= false;
    this.showmaster= false;
    this.showchild= true;
  }
  showatt(): void{
    this.showdatabindingdemo= false;
    this.showdirdemo= false;
    this.showmaster= false;
    this.showchild= false;
    this.showattribute= true;
  }
  

  
  

  }

