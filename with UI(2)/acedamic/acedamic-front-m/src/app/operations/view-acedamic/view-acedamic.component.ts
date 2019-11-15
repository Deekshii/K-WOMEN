import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';  
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-view-acedamic',
  templateUrl: './view-acedamic.component.html',
  styleUrls: ['./view-acedamic.component.css']
})
export class ViewAcedamicComponent implements OnInit {
  

    stud
    val:boolean = true ; 
    expandedIndex: any

    constructor(private service: ApiService , private userService: UserService,private router: Router) { }
  
    // delete(val){
    //   var v={
    //     "_id":val._id
    //   }
    //   console.log(v)
    //   this.service.del(v).subscribe(res => {
    //     console.log(res)   
    //  })
    // }
    ngOnInit() {
      console.log('hello');
     this.getAllAcedamic();
    }
    
  //gets data from db
    getAllAcedamic () {
      console.log('hi');
      this.service.getacedamic().subscribe((res: any) => {
        this.stud = res
        console.log(res);
      }, err => {
        console.log(err);
      })
    }
  //edit the data
      public edit(data, index) {
      this.expandedIndex = index;
    }
    //saves edited data
    public save(data) {
       this.service.add(data).subscribe((data) => {
         console.log(data)
         this.val = true
       })
      } 
      onLogout(){
        this.userService.deleteToken();
        this.router.navigate(['/login']);
      }
  
}
