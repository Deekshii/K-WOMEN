import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import { Library } from 'src/app/shared/library';

@Component({
  selector: 'app-create-librarian',
  templateUrl: './create-librarian.component.html',
  styleUrls: ['./create-librarian.component.css']
})
export class CreateLibrarianComponent implements OnInit {

  
  stud : Library= {
    booksavailable: "",
    studentname: "", 
    dateofissue: null,
    subjectname: "",
    studentemail: "",
    studentclass: "",
    studentbranch: "",
    studentsection: "",
    
  };
  constructor(private service: ApiService,private userService: UserService,private router: Router) { }
  ngOnInit() {
  } 
  create() {
    console.log(this.stud);
   this.service.create(this.stud).subscribe(res => {
      console.log(res)    
      this.router.navigate(['/l_edit']) ;    
   })
  }

}



