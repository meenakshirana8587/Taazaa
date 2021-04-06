import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { IProduct } from '../product/iproduct';
import { SharedataService } from '../sharedata.service';
function priceRangeValidator(min : number, max: number) : ValidatorFn{
  return(control:AbstractControl):{[key : string] : boolean} | null => 
  {
    if(control.value !== undefined && (isNaN(control.value) || control.value <min ||control.value >max))
      {
        return{'ageRange':true} ;
      }
      return null;
  };
 
}

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  prod:IProduct;
  productform: FormGroup;
  min= 200;
    max= 300;
  
  constructor(private share: SharedataService) { }

  ngOnInit(): void {
    this.share.product$.subscribe((data)=>
    {
      this.prod= data;

    })
    
    this.productform= new FormGroup({
      Id: new FormControl(this.prod?.Id,[Validators.required]),
      Title: new FormControl(this.prod?.Title,[Validators.required]),
      Price: new FormControl(this.prod?.Price,[priceRangeValidator(this.min,this.max), Validators.required]),
      Quantity: new FormControl(this.prod?.Quantity, [Validators.min(0), Validators.required])
      
    });
    
    
  
}


Price: number;
Title: string;
Id: number;
Quantity: number;
getUpdatedvalues(): void{
  // this.share.setId(this.Id);
  // this.share.setTitle(this.Title);
  // this.share.setPrice(this.Price);
  
  
  // this.share.setQuantity(this.Quantity);
  this.share.updateProduct(this.productform.value);
}

  

  
 
  

}
