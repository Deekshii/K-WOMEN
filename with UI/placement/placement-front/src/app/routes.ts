import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';

import { AuthGuard } from './auth/auth.guard';
import { ViewComponent } from './operations/management/view/view.component';
import { StudentComponent } from './operations/student/student.component';
import { ManagementComponent } from './operations/management/management.component';
import { OperationsComponent } from './operations/operations.component';
import { OfficerComponent } from './operations/officer/officer.component';
import { CreateOfficerComponent } from './operations/officer/create-officer/create-officer.component';
import { ViewOfficerComponent } from './operations/officer/view-officer/view-officer.component';

export const appRoutes: Routes = [
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    },
    
    {
        path: 'operations', component: OperationsComponent,canActivate:[AuthGuard]
    },
  { path: 's_edit',    component: ViewComponent}, 
  { path: 'p_create',    component:CreateOfficerComponent },
  { path: 'm_edit',    component: ViewComponent},

  { path: 'p_edit',    component: ViewOfficerComponent},
  { path: 's',    component:StudentComponent },
  { path: 'p',    component: OfficerComponent},
  { path: 'm',    component: ManagementComponent},
];