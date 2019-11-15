import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';

import { AuthGuard } from './auth/auth.guard';
import { CreateEventComponent } from './operations/create-event/create-event.component';
import { ViewEventComponent } from './operations/view-event/view-event.component';

export const appRoutes: Routes = [
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
   
    { path: 'create',    component: CreateEventComponent },
  { path: 'edit',    component: ViewEventComponent},
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    }
];