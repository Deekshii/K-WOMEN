import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],

})
export class SearchComponent implements OnInit {
  nameinfo:any = [];
  name: string;
  constructor(public http:Http) { }

  ngOnInit() {
  }


  Search()
  {
    
    this.http.post('http://localhost:3000/employees/search',{'name':this.name}).subscribe(res => 
  {
    
    var data = res.json();
  
    this.nameinfo = data.msg

  //   this.nameinfo = res.json();
  //   this.nameinfo = Array.of(this.nameinfo); 
  // },
  // err => console.error(err), 
  // () => console.log('get completed') 
  // );
    
  })
  }

}
