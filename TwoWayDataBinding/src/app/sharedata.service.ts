import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from './product/iproduct';

@Injectable({
  providedIn: 'root'
})
export class SharedataService {
  
  product: IProduct=  {Id:11, Title: "Book", Price:200, Expirydate: '12-12-2020', IsInStock: true, Quantity:20};
  product$: BehaviorSubject<IProduct>
  constructor() { this.product$= new BehaviorSubject(this.product);
  }

  setPrice(Price: number)
  {
    this.product.Price= Price;
    console.log(this.product.Price);
    
  }
  setTitle(title: string)
  {
    this.product.Title= title;
  }
  setId(Id: number)
  {
    this.product.Id= Id;
  }
  setQuantity(Quantity: number)
  {
    this.product.Quantity= Quantity;
  }
  updateProduct(p:IProduct){
    this.product= {
      ...p
    }
    this.product$.next(this.product);
  }

  
  
  

}
