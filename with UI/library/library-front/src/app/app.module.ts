// built-in
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
// components
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
//routes
import { appRoutes } from './routes';

import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserService } from './shared/user.service';
//other
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { OperationsComponent } from './operations/operations.component';
import { StudentComponent } from './operations/student/student.component';
import { ManagementComponent } from './operations/management/management.component';
import { ViewComponent } from './operations/management/view/view.component';
import { LibrarianComponent } from './operations/librarian/librarian.component';
import { CreateLibrarianComponent } from './operations/librarian/create-librarian/create-librarian.component';
import { ViewLibrarianComponent } from './operations/librarian/view-librarian/view-librarian.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    SignInComponent,
    OperationsComponent,
    StudentComponent,
    ManagementComponent,
    ViewComponent,
    LibrarianComponent,
    CreateLibrarianComponent,
    ViewLibrarianComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
