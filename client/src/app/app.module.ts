import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { RegisterComponent } from './register/register.component';
import { FindbandsComponent } from './findbands/findbands.component';
import { ProfileComponent } from './profile/profile.component';
import { BandpageComponent } from './bandpage/bandpage.component';
import { CreatebandComponent } from './createband/createband.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    RegisterComponent,
    FindbandsComponent,
    ProfileComponent,
    BandpageComponent,
    CreatebandComponent,
    FooterComponent
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
