import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TwoWayDataBinding';
  a=300;
  b=300;

  setwidth(): void{
    this.a= 50;
    this.b= 100;
  }
  imgSrc: string = "../assets/front.jpg";
  onmouseover(): void{
    this.imgSrc= "../assets/back.jpg";
  }

  onmouseout(): void{
    this.imgSrc= "../assets/front.jpg";
  }
}
