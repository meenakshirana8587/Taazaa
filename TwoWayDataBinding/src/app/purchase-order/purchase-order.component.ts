import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { IPurchaseItems } from '../purchase/IpurchaseItem';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnInit, OnChanges {
  @Input() PurchaseItem: IPurchaseItems;
  Price= 0;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(): void{
    console.log(this.PurchaseItem);
    this.PurchaseItem.Items.forEach(i=>{
      this.Price= this.Price +i.Price;
    })
  }

}
