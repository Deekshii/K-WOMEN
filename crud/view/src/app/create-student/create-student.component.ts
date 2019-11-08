import { Component, OnInit } from '@angular/core';
import { Student} from './student';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {


  stud : Student= {

    // id : null,
    firstname: "",
    lastname: "",
    email: "",
    user_id: "",
    password: "",
    college: "",
    address: ""
    
  };

  constructor(private service: ApiService) { }

  ngOnInit() {
  }

  
  create() {
  
    this.service.create(this.stud).subscribe(res => {
      console.log(res)
      
   })
  }

}
