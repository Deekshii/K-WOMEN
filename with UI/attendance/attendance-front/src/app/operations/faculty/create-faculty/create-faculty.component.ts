import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { Attendance } from 'src/app/shared/attendance';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-faculty',
  templateUrl: './create-faculty.component.html',
  styleUrls: ['./create-faculty.component.css']
})
export class CreateFacultyComponent implements OnInit {

  
  stud: Attendance= {
    studentname: "",
    studentclass: "",
    studentbranch: "",
      studentsection: "",
      studentid: "",
      sessionsattended: "",
  };
  constructor(private service: ApiService , userservice: UserService,private router: Router) { }
  ngOnInit() {
  } 
  create() {
    console.log(this.stud);
   this.service.create(this.stud).subscribe(res => {
      console.log(res)  
      this.router.navigate(['/f_edit']) ;   
   })
  }

}