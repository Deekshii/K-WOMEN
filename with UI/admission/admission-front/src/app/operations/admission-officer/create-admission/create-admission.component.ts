import { Component, OnInit } from '@angular/core';
import { Admission } from 'src/app/shared/attendance';
import { ApiService } from 'src/app/shared/api.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
@Component({
  selector: 'app-create-admission',
  templateUrl: './create-admission.component.html',
  styleUrls: ['./create-admission.component.css']
})
export class CreateAdmissionComponent implements OnInit {
  [x: string]: any;

  stud : Admission= {
    studentname: "",
    fathername: "",
    mothername: "",
    student10thdetails: null,
    studentintermediatedetails: null,
    dateofbirth :null,
    joiningbranch: "",
    
  };
  constructor(private service: ApiService , userservice: UserService,private router: Router) { }
  ngOnInit() {
  } 
  create() {
    console.log(this.stud);
   this.service.create(this.stud).subscribe(res => {
      console.log(res)  
      this.router.navigate(['/a_edit']) ;  
   })
  }
}