import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';

import { AuthGuard } from './auth/auth.guard';
import { CreateComponent } from './operations/create/create.component';
import { ViewComponent } from './operations/view/view.component';
import { StudentViewComponent } from './operations/student-view/student-view.component';
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
    { path: 'create',    component: CreateComponent },
    { path: 'edit',    component: ViewComponent},
    { path: 's_edit',    component: StudentViewComponent},
    {
        path: 'operations', component: OperationsComponent,canActivate:[AuthGuard]
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    }
];