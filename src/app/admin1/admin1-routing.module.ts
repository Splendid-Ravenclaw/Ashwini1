import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login1Component } from './login1/login1.component';
import { List1Component } from './list1/list1.component';
const routes: Routes = [
  {path:'login',component:Login1Component},
  {path:'list',component:List1Component},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Admin1RoutingModule { }
