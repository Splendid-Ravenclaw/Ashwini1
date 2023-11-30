import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDataComponent } from './user-data/user-data.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component'
import { ErrorPageComponent } from './error-page/error-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutMeComponent } from './about-me/about-me.component';

const routes: Routes = [
  {
    path:'user-data/:id',
    component:UserDataComponent
  },
  {
    path:'about',
    component:AboutComponent,
    children:[
      { path:'us',component:AboutUsComponent},
      { path:'me',component:AboutMeComponent},


    ]
  },
  {
    path:' ',
    component:HomeComponent
  },
  {
    path:'**',
    component:ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
