import { Component, OnInit } from '@angular/core';
import { IProduct } from './IProduct';
import {DataService} from '../Data.service';

export interface Food {
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products : IProduct[] = []
  constructor(private DataService: DataService) { }

  ngOnInit(): void {
    this.products = this.DataService.getProducts();
  }

  searchtext: string;
  filterprice: number;
  
 displayedColumns: string[] = ['Id', 'Title', 'Price', 'Quantity','IsInStock', 'Expirydate'];
}
