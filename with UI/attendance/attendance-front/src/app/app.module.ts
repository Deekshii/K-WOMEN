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
import { FacultyComponent } from './operations/faculty/faculty.component';
import { CreateFacultyComponent } from './operations/faculty/create-faculty/create-faculty.component';
import { ViewFacultyComponent } from './operations/faculty/view-faculty/view-faculty.component';
import { ManagementComponent } from './operations/management/management.component';
import { ViewManagementComponent } from './operations/management/view-management/view-management.component';
import { StudentComponent } from './operations/student/student.component';
import { ViewStudentComponent } from './operations/student/view-student/view-student.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
   
    SignInComponent,
    OperationsComponent,
    FacultyComponent,
    CreateFacultyComponent,
    ViewFacultyComponent,
    ManagementComponent,
    ViewManagementComponent,
    StudentComponent,
    ViewStudentComponent
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
