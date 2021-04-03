import { Component, OnInit } from '@angular/core';
import { IPurchaseItems } from './IpurchaseItem';
import { DataService } from "../Data.service";

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  purchase: IPurchaseItems[] = []
  constructor(private DataService: DataService) { }

  ngOnInit(): void {

    this.purchase = this.DataService.getPurchase();

  }

  
}
