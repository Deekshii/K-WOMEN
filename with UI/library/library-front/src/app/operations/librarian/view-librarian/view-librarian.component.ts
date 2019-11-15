import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-librarian',
  templateUrl: './view-librarian.component.html',
  styleUrls: ['./view-librarian.component.css']
})
export class ViewLibrarianComponent implements OnInit {

  stud 
  val:boolean = true ; 
  expandedIndex: any
  constructor(private service: ApiService,private userService: UserService,private router: Router) { }

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
   this.getAllLibrary();
  }
  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }
  
//gets data from db
getAllLibrary () {
  console.log('hi');
  this.service.getlibrary().subscribe((res: any) => {
    this.stud = res
    console.log(this.stud);
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



}
