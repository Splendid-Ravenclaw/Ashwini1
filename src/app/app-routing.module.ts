import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { UserDataComponent } from './user-data/user-data.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutMeComponent } from './about-me/about-me.component';

const routes: Routes = [
  {
   
    component:AboutComponent,
    path:'about',
    children:[
      { path:'us', component:AboutUsComponent },
      { path:'me', component:AboutMeComponent }
    ]
  },
  {
   
    component:HomeComponent,
    path:''
  },
  {
   
    component:UserDataComponent,
    path:'user-data/:id'
  },
  {
             
    component:ErrorPageComponent,
    path:'**'   //wild card route
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
