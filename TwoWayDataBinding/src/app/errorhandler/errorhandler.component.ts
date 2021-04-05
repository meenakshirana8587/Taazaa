import { Component, OnInit } from '@angular/core';
import { MyErrorHandlerService } from '../my-error-handler.service';
@Component({
  selector: 'app-errorhandler',
  templateUrl: './errorhandler.component.html',
  styleUrls: ['./errorhandler.component.css']
})
export class ErrorhandlerComponent implements OnInit {
constructor(private eh: MyErrorHandlerService) { }
  data:string;
  ab=undefined;
ngOnInit(): void {
  }
  myEFn(): void{
    this.ab.sort();
  }
}
