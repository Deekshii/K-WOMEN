import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';

import { AuthGuard } from './auth/auth.guard';
import { ViewComponent } from './operations/management/view/view.component';
import { CreateAdmissionComponent } from './operations/admission-officer/create-admission/create-admission.component';
import { ViewAdmissionComponent } from './operations/admission-officer/view-admission/view-admission.component';
import { StudentComponent } from './operations/student/student.component';
import { AdmissionOfficerComponent } from './operations/admission-officer/admission-officer.component';
import { ManagementComponent } from './operations/management/management.component';
import { OperationsComponent } from './operations/operations.component';

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
  { path: 'a_create',    component:CreateAdmissionComponent },
  { path: 'm_edit',    component: ViewComponent},

  { path: 'a_edit',    component: ViewAdmissionComponent},
  { path: 's',    component:StudentComponent },
  { path: 'a',    component: AdmissionOfficerComponent},
  { path: 'm',    component: ManagementComponent},
];