import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: String;
  password: String; 

  constructor(
    private service: ApiService,
    private router: Router,
  ) { 
    
  }

  ngOnInit() {
  }

  

  login() {
    const user = {
      email: this.email,
      password: this.password
    }
   // console.log(this.user);

  
      this.service.log(user).subscribe(res => {
        console.log(res)
        // .subscribe(
        //   data => {
        //     console.log(data);
        //     localStorage.setItem('token', data.toString());
        //     this.router.navigate(['/edit']);
        //   },
        //   error => { }
        // );
    
  })

  }
}