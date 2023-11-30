import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Admin1RoutingModule } from './admin1-routing.module';
import { List1Component } from './list1/list1.component';
import { Login1Component } from './login1/login1.component';
console.warn("admin1 module")

@NgModule({
  declarations: [
    List1Component,
    Login1Component
  ],
  imports: [
    CommonModule,
    Admin1RoutingModule
  ]
})
export class Admin1Module { }
