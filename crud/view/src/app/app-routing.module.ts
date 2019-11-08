import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateStudentComponent } from './create-student/create-student.component';
import { ViewStudentsComponent } from './view-students/view-students.component'
import { LoginComponent } from './login/login.component';

const routes: Routes = [
 { path: 'create',    component: CreateStudentComponent },
 { path: 'edit',    component: ViewStudentsComponent },
 { path: 'login',    component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
