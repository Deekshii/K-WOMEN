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
import { CreateManagementComponent } from './operations/management/create-management/create-management.component';
import { ViewParentComponent } from './operations/parent/view-parent/view-parent.component';
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
    
  { path: 'p_edit',    component: ViewParentComponent },
  { path: 'm_create',    component: CreateManagementComponent },

  { path: 'm_edit',    component: ViewManagementComponent},
  { path: 's_edit',    component: ViewStudentComponent},
  { path: 'm',    component: ManagementComponent },

  { path: 's',    component: StudentComponent },

  {
    path: 'operations', component: OperationsComponent,canActivate:[AuthGuard]
  }
];