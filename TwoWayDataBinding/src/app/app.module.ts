import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TshirtdatabindingComponent } from './tshirtdatabinding/tshirtdatabinding.component';
import { HelloComponent } from './hello/hello.component';
import { ProductComponent } from './product/product.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import { MyErrorHandlerService } from './my-error-handler.service';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { MydirectiveDirective } from './mydirective.directive';
import { C3Component } from './c3/c3.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorhandlerComponent } from './errorhandler/errorhandler.component';
import { ParentComponent } from './parent/parent.component';
import { LoginComponent } from './login/login.component';
import { MycustompipePipe } from './mycustompipe.pipe';
import { PricepipePipe } from './pricepipe.pipe';
import { DataService } from './Data.service';
import {MatTableModule} from '@angular/material/table';


import { SharedataService } from './sharedata.service';

@NgModule({
  declarations: [
    AppComponent,
    TshirtdatabindingComponent,
    HelloComponent,
    ProductComponent,
    PurchaseComponent,
    PurchaseOrderComponent,
    Child1Component,
    Child2Component,
    MydirectiveDirective,
    C3Component,
    HomeComponent,
    ErrorhandlerComponent,
    ParentComponent,
  
    MycustompipePipe,
    PricepipePipe,
    LoginComponent
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatExpansionModule, 
    RouterModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    MatTableModule
    
  
  ],
  providers: [{provide:ErrorHandler, useClass:MyErrorHandlerService},
  {provide : DataService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
