import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';

import { AuthGuard } from './auth/auth.guard';
import { OperationsComponent } from './operations/operations.component';
import { CreateItemsComponent } from './operations/create-items/create-items.component';
import { ViewItemsComponent } from './operations/view-items/view-items.component';
import { StudentViewComponent } from './operations/student-view/student-view.component';

export const appRoutes: Routes = [
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    { path: 'create',    component: CreateItemsComponent },
    { path: 'edit',    component: ViewItemsComponent},
    { path: 's_edit',    component: StudentViewComponent},
    {
        path: 'operations', component: OperationsComponent,canActivate:[AuthGuard]
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    }
];