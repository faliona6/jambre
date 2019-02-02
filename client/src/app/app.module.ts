import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { FindbandsComponent } from './findbands/findbands.component';
import { ProfileComponent } from './profile/profile.component';
import { BandpageComponent } from './bandpage/bandpage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    RegisterComponent,
    HomeComponent,
    FindbandsComponent,
    ProfileComponent,
    BandpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
