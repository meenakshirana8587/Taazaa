import { Component, OnInit } from '@angular/core';
import { IProduct } from './iproduct';
import {DataService} from '../Data.service';
import { BlockScrollStrategy } from '@angular/cdk/overlay';
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
  dataSource: IProduct[] = [
    {Id:1, Title:'Book', Price: 200, Quantity:20, IsInStock:true, Expirydate: '20-11-2021'},
    {Id:2, Title:'pen', Price: 300, Quantity:30, IsInStock:false, Expirydate: '23-12-2021'},
    {Id:3, Title:'pencil', Price: 400, Quantity:40, IsInStock:false, Expirydate: '20-10-2021'},
    {Id:41, Title:'eraser', Price: 200, Quantity:50, IsInStock:true, Expirydate: '31-12-2021'},
    {Id:5, Title:'notebook', Price: 300, Quantity:60, IsInStock:true, Expirydate: '09-12-2021'},
 ];
 displayedColumns: string[] = ['Id', 'Title', 'Price', 'Quantity','IsInStock', 'Expirydate'];
}
