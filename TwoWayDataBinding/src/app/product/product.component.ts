import { Component, OnInit } from '@angular/core';
import { IProduct } from './iproduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products : IProduct[] = []
  constructor() { }

  ngOnInit(): void {
    this.products = this.getProducts();
  }

  getProducts(): IProduct[] {
    return [
      {
      Id: 1,
      Title:"Pencil",
      Price:50,
      Expirydate: "10-10-2020",
      IsInStock: false,
      Quantity: 0



      },
      {
        Id: 2,
        Title:"Pen",
        Price:100,
        Expirydate: "10-11-2020",
        IsInStock: true,
        Quantity: 300
  
  
  
        },
        {
          Id: 3,
          Title:"Book",
          Price:500,
          Expirydate: "12-12-2020",
          IsInStock: true,
          Quantity: 50
    
    
    
          },
          {
            Id: 4,
            Title:"Table",
            Price:20,
            Expirydate: "10-1-2021",
            IsInStock: true,
            Quantity: 300
      
      
      
            },
            {
              Id: 5,
              Title:"Bench",
              Price:5000,
              Expirydate: "10-10-2021",
              IsInStock: false,
              Quantity: 0
        
        
        
              },
    ]

  }

}
