import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
 import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ViewStudentsComponent } from './view-students/view-students.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CreateStudentComponent,
    ViewStudentsComponent,
    LoginComponent


  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
