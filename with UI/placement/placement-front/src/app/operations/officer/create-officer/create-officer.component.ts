import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import { UserService } from 'src/app/shared/user.service';
import { Placement } from 'src/app/shared/placement';

@Component({
  selector: 'app-create-officer',
  templateUrl: './create-officer.component.html',
  styleUrls: ['./create-officer.component.css']
})
export class CreateOfficerComponent implements OnInit {

  stud: Placement= {
    studentname: "",
    studentclass: "",
    studentbranch: "",
      studentsection: "",
      studentid: "",
      studentacademicpercentage: "",
  };
  constructor(private service: ApiService,private userService: UserService,private router: Router) { }
  ngOnInit() {
  } 
  create() {
    console.log(this.stud);
   this.service.create(this.stud).subscribe(res => {
      console.log(res)   
      this.router.navigate(['/p_edit']) ;   
   })
  }

}