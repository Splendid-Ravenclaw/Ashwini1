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
import { UserDataComponent } from './user-data/user-data.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule}  from '@angular/common/http';

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
    UserDataComponent,
    HomeComponent,
    AboutComponent,
    ErrorPageComponent,
    AboutUsComponent,
    AboutMeComponent,
    FooterComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
