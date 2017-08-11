

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PlatformRef } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { FwModule } from '../fw/fw.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { appRoutes } from './app.routing';
import { EmailCommunicationComponent } from './email-communication/email-communication.component';
import { SchoolComponent } from './school/school.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SettingsComponent,
    EmailCommunicationComponent,
    SchoolComponent,
    ProfileComponent,
    AuthenticatedUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FwModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
