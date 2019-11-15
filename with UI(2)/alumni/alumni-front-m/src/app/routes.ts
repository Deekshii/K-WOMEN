import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';

import { AuthGuard } from './auth/auth.guard';
import { OperationsComponent } from './operations/operations.component';
import { CreateAlumniComponent } from './operations/create-alumni/create-alumni.component';
import { ViewAlumniComponent } from './operations/view-alumni/view-alumni.component';

export const appRoutes: Routes = [
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    { path: 'create',    component: CreateAlumniComponent },
    { path: 'edit',    component: ViewAlumniComponent},
    
    {
        path: 'operations', component: OperationsComponent,canActivate:[AuthGuard]
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    }
];