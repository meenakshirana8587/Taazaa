import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  h:number=50;
  w:number=100;
  a:number;
  b:number;
  r :number= 0;
  res :number= 0;
  op: string='OP';
  add_n(){
    this.op = '+';
    
  };
  sub_n(){
    this.op = '-'
    
  };
  mul_n(){
    this.op = '*'
    
  };
  div_n(){
    this.op = '/'
    
  };
  mod_n(){
    this.op = '%'
  };
  go(){
    if(this.op === '+'){
      this.res = this.a + this.b;
    }
    if(this.op === '-'){
      this.res = this.a - this.b;
    }
    if(this.op === '*'){
      this.res = this.a * this.b;
    }
    if(this.op === '/'){
      this.res = this.a / this.b;
    }
    if(this.op === '%'){
      this.res = this.a % this.b;
    }
  };
  clear(){
    this.a = 0;
    this.b = 0;
    this.res = 0;
  };
}