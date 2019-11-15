import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { Faculty } from 'src/app/shared/faculty';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-faculty',
  templateUrl: './create-faculty.component.html',
  styleUrls: ['./create-faculty.component.css']
})
export class CreateFacultyComponent implements OnInit {

  stud : Faculty= {
    email : "",
    phonenumber : null,
    firstname: "",
    lastname: "",
    dateofbirth : null,
    age:null ,
    address: "",
    speciliazedin : "",
    department : "",
    dateofjoining : null,
    gender : "",
    collegename: "",
    
  };
  constructor(private service: ApiService,private userService: UserService,private router: Router){ }
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


