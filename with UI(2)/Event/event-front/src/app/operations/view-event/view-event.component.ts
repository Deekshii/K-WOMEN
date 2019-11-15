import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';


@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent implements OnInit {

  stud
  val:boolean = true ; 
  expandedIndex: any
  constructor(private service: ApiService, private userService: UserService,  private router: Router) { }

  delete(val){
    var v={
      "_id":val._id
    }
    console.log(v)
    this.service.del(v).subscribe(res => {
      console.log(res)   
   })
  }
  ngOnInit() {
    console.log('hello');
   this.getAllEvent();
  }
//gets data from db
  getAllEvent () {
    console.log('hi');
    this.service.getevent().subscribe((res: any) => {
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
