import { Component, OnInit } from '@angular/core';
import { MyErrorHandlerService } from '../my-error-handler.service';

@Component({
  selector: 'app-tshirtdatabinding',
  templateUrl: './tshirtdatabinding.component.html',
  styleUrls: ['./tshirtdatabinding.component.css']
})
export class TshirtdatabindingComponent implements OnInit {

  constructor(private MyErrorHandlerService: MyErrorHandlerService) { }

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
  data: any;
  
  onclick(): any{
    this.data.sort();
  }
  myEFn(): void{
    this.data.sort();
  }
}


