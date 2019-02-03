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
<<<<<<< HEAD
import { FooterComponent } from './footer/footer.component';
=======
import { AboutComponent } from './about/about.component';
>>>>>>> a496828b24d78cd11e02d559d4a96d443173c6a1

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
<<<<<<< HEAD
    FooterComponent
=======
    AboutComponent
>>>>>>> a496828b24d78cd11e02d559d4a96d443173c6a1
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
