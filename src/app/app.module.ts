import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InStyleComponent } from './in-style/in-style.component';
import { InTemplateComponent } from './in-template/in-template.component';
import { TemplateComponent } from './in-style/template/template.component';
import { InStyleTempComponent } from './in-style-temp/in-style-temp.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ChildComponent } from './child/child.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ChildToParentComponent } from './child-to-parent/child-to-parent.component';
import { UsdInrPipe } from './pipes/usd-inr.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { BlueelDirective } from './blueel.directive';
import { UserDataComponent } from './user-data/user-data.component'

@NgModule({
  declarations: [
    AppComponent,
    InStyleComponent,
    InTemplateComponent,
    TemplateComponent,
    InStyleTempComponent,
    HeaderComponent,
    ChildComponent,
    UserDetailsComponent,
    ChildToParentComponent,
    UsdInrPipe,
    BlueelDirective,
    UserDataComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
