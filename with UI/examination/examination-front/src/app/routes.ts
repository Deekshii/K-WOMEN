import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';

import { AuthGuard } from './auth/auth.guard';
import { ViewManagementComponent } from './operations/management/view-management/view-management.component';
import { ViewStudentComponent } from './operations/student/view-student/view-student.component';
import { ManagementComponent } from './operations/management/management.component';

import { StudentComponent } from './operations/student/student.component';
import { OperationsComponent } from './operations/operations.component';
import { OfficerComponent } from './operations/officer/officer.component';
import { ViewOfficerComponent } from './operations/officer/view-officer/view-officer.component';
import { CreateOfficerComponent } from './operations/officer/create-officer/create-officer.component';

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
    
  { path: 'o_create',    component: CreateOfficerComponent },
  { path: 'o_edit',    component: ViewOfficerComponent},
  { path: 'm_edit',    component: ViewManagementComponent},
  { path: 's_edit',    component: ViewStudentComponent},
  { path: 'm',    component: ManagementComponent },
  { path: 'o',    component: OfficerComponent },
  { path: 's',    component: StudentComponent },

  {
    path: 'operations', component: OperationsComponent,canActivate:[AuthGuard]
  }
];