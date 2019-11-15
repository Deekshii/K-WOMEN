import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';


import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {

  stud
  val:boolean = true ; 
  expandedIndex: any
  constructor( private service: ApiService,private userService: UserService, private router: Router) { }

  delete(val){
    var v={
      "_id":val._id
    }
    console.log(v)
    this.service.del(v).subscribe(res => {
      console.log(res)   
   })
   this.router.navigate(['/operations']); 
  }
  ngOnInit() {
    console.log('hello');
   this.getAllCanteen();
  }
//gets data from db
  getAllCanteen () {
    console.log('hi');
    this.service.getcanteen().subscribe((res: any) => {
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
       this.router.navigate(['/operations']);  
     })
    } 



    onLogout(){
      this.userService.deleteToken();
      this.router.navigate(['/login']);
    }

}
