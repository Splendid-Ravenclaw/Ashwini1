import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
 {
  path:'admin1', loadChildren:()=> import('./admin1/admin1.module').then(mod=>mod.Admin1Module)
},
{
  path:'user1', loadChildren:()=> import('./user1/user1.module').then(mod=>mod.User1Module)
}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
