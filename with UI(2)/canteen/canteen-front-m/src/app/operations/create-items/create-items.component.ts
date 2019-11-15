import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../shared/api.service';

import { Canteen } from '../../shared/Canteen';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
@Component({
  selector: 'app-create-items',
  templateUrl: './create-items.component.html',
  styleUrls: ['./create-items.component.css']
})
export class CreateItemsComponent implements OnInit {

  stud : Canteen = {
    
    itemname : "",
    price : null,
  
  };

  constructor( private service: ApiService, private userService: UserService,private router: Router) { }

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
