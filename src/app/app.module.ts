import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ForgetComponent } from './forget/forget.component';
import { AppRoutingModule } from './/app-routing.module';
import { OnlyForLoggedInGuard } from './guards/only-for-logged-in.guard';
import { OnlyfotnotloggedGuard } from './guards/onlyfotnotlogged.guard';
import { MatTabsModule, MatButtonModule, MatTableModule, MatInputModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import { ShowPasswordComponent } from './forget/show-password/show-password.component';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    DashboardComponent,
    LoginComponent,
    ForgetComponent,
    ProfileComponent,
    UsersComponent,
    ShowPasswordComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatTabsModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    NoopAnimationsModule
  ],
  providers: [OnlyForLoggedInGuard, OnlyfotnotloggedGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
