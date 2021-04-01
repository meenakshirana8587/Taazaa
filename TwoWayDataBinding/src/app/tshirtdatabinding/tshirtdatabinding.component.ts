import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tshirtdatabinding',
  templateUrl: './tshirtdatabinding.component.html',
  styleUrls: ['./tshirtdatabinding.component.css']
})
export class TshirtdatabindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  a=300;
  b=300;

  setwidth(): void{
    this.a= 300;
    this.b= 300;
  }
  imgSrc: string = "../assets/front.jpg";
  onmouseover(): void{
    this.imgSrc= "../assets/back.jpg";
  }

  onmouseout(): void{
    this.imgSrc= "../assets/front.jpg";
  }
}


