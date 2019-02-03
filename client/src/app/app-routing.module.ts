import { CreatebandComponent } from './createband/createband.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindbandsComponent } from './findbands/findbands.component';
import { BandpageComponent } from './bandpage/bandpage.component';
import { ProfileComponent } from './profile/profile.component';
<<<<<<< HEAD
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/findbands',
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
    path: 'createband',
    component: CreatebandComponent
  },
  {
    path: 'footer',
    component: FooterComponent
  }
=======
import { AboutComponent } from './about/about.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/findbands',
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
        path: 'createband',
        component: CreatebandComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
>>>>>>> a496828b24d78cd11e02d559d4a96d443173c6a1
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
