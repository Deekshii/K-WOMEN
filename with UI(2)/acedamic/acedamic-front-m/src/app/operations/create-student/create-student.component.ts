import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { Acedamic } from '../../shared/acedamic';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  stud : Acedamic = {
    name : "",
    rollnumber: null,
    class: "",
    section : "",
    branch : " ",
    totalpercent : null ,
    collegename : "",
    
    
  };
  
  constructor(private service: ApiService, private userService: UserService, private router: Router) { }

  ngOnInit() {
  }
  create() {
    console.log(this.stud);
   this.service.create(this.stud).subscribe(res => {
      console.log(res)  
      this.router.navigate(['/operations']);   
   })
  }
  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }
}
