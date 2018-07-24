import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgetComponent } from './forget/forget.component';
import { OnlyForLoggedInGuard } from './guards/only-for-logged-in.guard';
import {OnlyfotnotloggedGuard} from './guards/onlyfotnotlogged.guard'
import { ShowPasswordComponent } from './forget/show-password/show-password.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dashboard'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [OnlyForLoggedInGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [OnlyfotnotloggedGuard]
  },
  {
    path: 'registration',
    component: RegistrationComponent,
    canActivate: [OnlyfotnotloggedGuard]
  },
  {
    path: 'forget',
    component: ForgetComponent,
    canActivate: [OnlyfotnotloggedGuard],
    children:[
      {
        path: 'pass',
        component: ShowPasswordComponent,
        canActivate:[OnlyfotnotloggedGuard]
      }
    ]
  }
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
