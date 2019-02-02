import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindbandsComponent } from './findbands/findbands.component';
import { BandpageComponent } from './bandpage/bandpage.component';
import { ProfileComponent } from './profile/profile.component';
import { OneTimeProfileCreationComponent } from './one-time-profile-creation/one-time-profile-creation.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'bandpage',
    component: BandpageComponent
  },
  {
    path: 'findbands',
    component: FindbandsComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'onetimeprofilecreation',
    component: OneTimeProfileCreationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
