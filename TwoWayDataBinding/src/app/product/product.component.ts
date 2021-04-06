import { Component, OnInit } from '@angular/core';
import { IProduct } from './iproduct';
import {DataService} from '../Data.service';

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
}
