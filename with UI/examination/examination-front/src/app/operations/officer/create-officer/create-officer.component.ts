import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { Examination } from 'src/app/shared/examination';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-officer',
  templateUrl: './create-officer.component.html',
  styleUrls: ['./create-officer.component.css']
})
export class CreateOfficerComponent implements OnInit {
  stud: Examination= {
    studentname: "",
    studentclass: "",
    studentbranch: "",
      studentsection: "",
      studentid: "",
      studentacademicpercentage: "",
      examstimetable: "",
  };
 
  constructor(private service: ApiService,private userService: UserService,private router: Router){ }
  ngOnInit() {
  } 
  create() {
    console.log(this.stud);
   this.service.create(this.stud).subscribe(res => {
      console.log(res)   
      this.router.navigate(['/o_edit']) ;   
   })
  }

}