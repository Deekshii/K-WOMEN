import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';

import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import { Student } from 'src/app/shared/student';

@Component({
  selector: 'app-create-management',
  templateUrl: './create-management.component.html',
  styleUrls: ['./create-management.component.css']
})
export class CreateManagementComponent implements OnInit {
  stud: Student= {
    studentname: "",
    fathername: "",
    studentid: null,
    studentclass: "",
    studentbranch: "",
      studentsection: "",
      studentacademicpercentage: null,
      studentfeedetails:"",
  };
  constructor(private service: ApiService,private userService: UserService,private router: Router) { }
  ngOnInit() {
  } 
  create() {
    console.log(this.stud);
   this.service.create(this.stud).subscribe(res => {
      console.log(res)    
      this.router.navigate(['/m_edit']) ;   
   })
  }

}
