import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { Event } from 'src/app/shared/event';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
// import { ApiService } from '../api.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  stud : Event = {
    
   eventname: "",
    location : "",
    description: "",
    eventdate : null ,
    
    
  };
  
  constructor(private service: ApiService, private userService: UserService, private router: Router) { }
  ngOnInit() {
  } 
  create() {
    console.log(this.stud);
   this.service.create(this.stud).subscribe(res => {
      console.log(res)   
      this.router.navigate(['/edit']);  
   })
  }

  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }

}
