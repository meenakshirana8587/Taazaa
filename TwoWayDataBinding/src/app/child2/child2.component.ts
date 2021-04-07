import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product/IProduct';
import { SharedataService } from '../sharedata.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  prod: IProduct;
  constructor(private share: SharedataService) { }

  ngOnInit(): void {

    this.share.product$.subscribe(c => {
      this.prod = c;
  });
  }
  
  
  // setData(): void{
  //   this.data= this.share.onclick();
  // }

}
