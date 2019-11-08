import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
//import { Student } from '../create-student/student';
@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.component.html',
  styleUrls: ['./view-students.component.css']
})
export class ViewStudentsComponent implements OnInit {
  stud
  val:boolean = true ; 
  expandedIndex: any
  constructor(private service: ApiService) { }

  delete(val){
    var v={
      "_id":val._id
    }
    console.log(v)
    this.service.delrow(v).subscribe(res => {
      console.log(res)   
   })
  }

  ngOnInit() {
    console.log('hello');
   this.getAllStudents();
  }
//gets data from db
  getAllStudents () {
    console.log('hi');
    this.service.getstudents().subscribe((res: any) => {
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
  }



    
    




