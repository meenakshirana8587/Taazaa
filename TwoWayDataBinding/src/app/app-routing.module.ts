import {ComponentFactory, ErrorHandler, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AsynccompComponent } from './asynccomp/asynccomp.component';
import { BehaviourcompComponent } from './behaviourcomp/behaviourcomp.component';



import { C3Component } from './c3/c3.component';
import { ErrorhandlerComponent } from './errorhandler/errorhandler.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ParentComponent } from './parent/parent.component';
import { ProductComponent } from './product/product.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { ReplaycompComponent } from './replaycomp/replaycomp.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ScompComponent } from './scomp/scomp.component';

import { TshirtdatabindingComponent } from './tshirtdatabinding/tshirtdatabinding.component';



const routes: Routes=[
    {path:'home', component: HomeComponent},
    {path: 'products', component: ProductComponent },
    {path: 'masterdetails', component: PurchaseComponent},
    {path: 'databinding', component: TshirtdatabindingComponent },
    {path: 'attributedirective', component: C3Component },
    {path: 'errorhandler', component: ErrorhandlerComponent},
    {path: 'sharedata', component:ParentComponent},
    {path: 'loginform', component:LoginComponent},
    {path: 'rxjs', component:RxjsComponent},
    {path: 'subject', component:ScompComponent},
    {path: 'replay', component:ReplaycompComponent},
    {path: 'async', component:AsynccompComponent},
    {path: 'behaviour', component:BehaviourcompComponent},
    
    { path: '', redirectTo: 'home', pathMatch: 'full' },

]
    @NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
     })
     export class AppRoutingModule{}





