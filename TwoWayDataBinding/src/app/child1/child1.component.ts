import { sharedStylesheetJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product/iproduct';
import { SharedataService } from '../sharedata.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor(private share: SharedataService) { }

  ngOnInit(): void {
    
  
}
price: number;
title: string;
getPrice(): void{
  this.share.setPrice(this.price);
}
getTitle(): void{
  this.share.setTitle(this.title);
}
  
 
  

}
