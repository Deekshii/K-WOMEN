import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';

import { AuthGuard } from './auth/auth.guard';
import { ViewComponent } from './operations/management/view/view.component';
import { StudentComponent } from './operations/student/student.component';
import { ManagementComponent } from './operations/management/management.component';
import { OperationsComponent } from './operations/operations.component';
import { CreateLibrarianComponent } from './operations/librarian/create-librarian/create-librarian.component';
import { ViewLibrarianComponent } from './operations/librarian/view-librarian/view-librarian.component';
import { LibrarianComponent } from './operations/librarian/librarian.component';

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
  { path: 'l_create',    component:CreateLibrarianComponent },
  { path: 'm_edit',    component: ViewComponent},

  { path: 'l_edit',    component: ViewLibrarianComponent},
  { path: 's',    component:StudentComponent },
  { path: 'l',    component: LibrarianComponent},
  { path: 'm',    component: ManagementComponent},
];