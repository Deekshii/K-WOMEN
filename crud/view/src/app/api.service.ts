import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Student } from './create-student/student';
// import {Observable} from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private _http:HttpClient) { }
  readonly rootUrl = 'http://localhost:3005/';


  
create(stud : Student){
  return this._http.post(this.rootUrl+"create/create", stud , {
    observe: 'body'
});
}

public delrow(v){
  return this._http.delete(this.rootUrl+"read/del",  { 
    observe: 'body',
    params: v
    });
}


log(user){
  return this._http.post(this.rootUrl+"create/login", user,{
    observe:'body'
  });
}

getstudents(){
  return this._http.get(this.rootUrl+"read/read", {
    observe: 'body'
});
}

public add(data){

  return this._http.put(this.rootUrl+"edit/edit", data , {
    observe: 'body'
 });
}

}
