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
import { OfficerComponent } from './operations/officer/officer.component';
import { CreateOfficerComponent } from './operations/officer/create-officer/create-officer.component';
import { ViewOfficerComponent } from './operations/officer/view-officer/view-officer.component';

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
 
    OfficerComponent,
    CreateOfficerComponent,
    ViewOfficerComponent
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
