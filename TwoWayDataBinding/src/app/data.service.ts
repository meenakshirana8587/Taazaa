import { Injectable } from '@angular/core';
import { IPurchaseItems } from './purchase/IpurchaseItem';
import {IProduct} from './product/IProduct';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getPurchase(): IPurchaseItems[] {
    return [
      {
        Name: 'Purchase for Batch 1',
        Id: 1,
        PurchaseDate: "2-2-2020",
        VendorName: 'Microsoft',
        Items: [
          {
            Id: 1,
            Title: "Pencil",
            Price: 20,
            Expirydate: "20-12-2020",
            IsInStock: true,
            Quantity: 20

          },
          {
            Id: 2,
        Title:"Pen",
        Price:100,
        Expirydate: "10-11-2020",
        IsInStock: true,
        Quantity: 300

          }

        ]



      },
      {
        Name: 'Purchase for Batch 2',
        Id: 2,
        PurchaseDate: "2-2-2020",
        VendorName: 'Amazon',
        Items: [
          {
            Id: 1,
            Title: "Pencil",
            Price: 200,
            Expirydate: "20-12-2020",
            IsInStock: false,
            Quantity: 0

          },
          {
            Id: 2,
            Title: "Pencil",
            Price: 200,
            Expirydate: "20-12-2020",
            IsInStock: false,
            Quantity: 0

          }
        ]



      },
      {
        Name:'Purchase for Batch 3',
        Id:3,
        PurchaseDate:"2-2-2020",
        VendorName: 'Flipkart',
        Items : [
          {
            Id: 3,
    Title: "Eraser",
    Price: 90,
    Expirydate: "20-12-2020",
    IsInStock: true,
    Quantity: 200

          },
          {
            Id: 2,
            Title: "Pencil",
            Price: 200,
            Expirydate: "20-12-2020",
            IsInStock: false,
            Quantity: 0

          }
        ]
         
        

      },

    ]
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
