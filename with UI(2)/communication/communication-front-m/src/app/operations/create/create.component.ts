import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { communication } from '../../shared/communication';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  stud : communication = {
    
    eventnotification: "",
    description : "",
    examnotification : "",
    e_description : "",
  
  };

  constructor( private service: ApiService ,  private userService: UserService,private router: Router) { }

  ngOnInit() {
  }
  create() {
    console.log(this.stud);
   this.service.create(this.stud).subscribe(res => {
      console.log(res)  
      this.router.navigate(['/edit']);     
   })
  }
  
}
