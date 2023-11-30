import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { User1RoutingModule } from './user1-routing.module';
import { List1Component } from './list1/list1.component';
import { Login1Component } from './login1/login1.component';


@NgModule({
  declarations: [
    List1Component,
    Login1Component
  ],
  imports: [
    CommonModule,
    User1RoutingModule
  ]
})
export class User1Module { }
