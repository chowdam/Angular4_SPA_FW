import { SchoolComponent } from './school/school.component';
import { EmailCommunicationComponent } from './email-communication/email-communication.component';
import { ProfileComponent } from './profile/profile.component';
import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';

export const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'settings/profile', component: ProfileComponent },
  { path: 'maintenance-system/newsys/email-comm', component: EmailCommunicationComponent },
  { path: 'maintenance-system/school', component: SchoolComponent },
  { path: '', component: DashboardComponent },
  { path: '**', component: DashboardComponent }
];
// { path: 'register', component: RegisterUserComponent },

// export const appRoutes: Routes = [
//   { path: 'signin', component: SignInComponent },
//   {
//     path: 'authenticated', component: AuthenticatedUserComponent,
//     children: [

//       { path: 'dashboard', component: DashboardComponent },
//       { path: 'settings/profile', component: ProfileComponent },
//       { path: 'maintenance-system/newsys/email-comm', component: EmailCommunicationComponent },
//       { path: 'maintenance-system/school', component: SchoolComponent }

//     ]
//   },
//   { path: '', component: SignInComponent },
//   { path: '**', component: SignInComponent }
// ];
