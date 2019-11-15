import { Component, OnInit } from '@angular/core';
import { Alumni } from '../../shared/alumni';
import { ApiService } from '../../shared/api.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-create-alumni',
  templateUrl: './create-alumni.component.html',
  styleUrls: ['./create-alumni.component.css']
})
export class CreateAlumniComponent implements OnInit {
  stud : Alumni = {
    email : "",
    alumininame: "",
    organisationworking : "",
    location : " ",
    phonenumber : null ,
    
    
  };
  
  constructor(private service: ApiService ,  private userService: UserService, private router: Router) { }
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

















  
 
 

