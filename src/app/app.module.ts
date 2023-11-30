import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { UsersModule } from './users/users.module'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ListComponent } from './admin/list/list.component';
// import { LoginComponent } from './admin/login/login.component';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { ListOfUserComponent } from './list-of-user/list-of-user.component';
import { ListOfAdminComponent } from './list-of-admin/list-of-admin.component';
import { CompComponent } from './comp/comp.component';

@NgModule({
  declarations: [
    AppComponent,
    ListOfUserComponent,
    ListOfAdminComponent,
    CompComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    UserModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
