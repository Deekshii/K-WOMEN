import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';

import { AuthGuard } from './auth/auth.guard';
import { CreateStudentComponent } from './operations/create-student/create-student.component';
import { ViewAcedamicComponent } from './operations/view-acedamic/view-acedamic.component';
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
    { path: 'create',    component: CreateStudentComponent },
    { path: 'edit',    component: ViewAcedamicComponent},
  
  
    {
        path: 'operations', component: OperationsComponent,canActivate:[AuthGuard]
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    }
];