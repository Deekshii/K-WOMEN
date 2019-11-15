import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Event } from './event';
// import {Observable} from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  delrow(v: { "_id": any; }) {
    throw new Error("Method not implemented.");
  }
 constructor(private _http:HttpClient) { }
  readonly rootUrl = 'http://localhost:3000/';  

create(stud : Event ){
  console.log("called post api");
  console.log(stud);
  return this._http.post(this.rootUrl+"operations/create", stud , {
    observe: 'body'

});
}
getevent(){
  console.log("called get api");
  return this._http.get(this.rootUrl+"operations/read", {
    observe: 'body'
});
}
public add(data){
  console.log("called put api");
  return this._http.put(this.rootUrl+"operations/edit", data , {
    observe: 'body'
 });
}


public del(v){
  return this._http.delete(this.rootUrl+"operations/del",  { 
    observe: 'body',
    params: v
    });
}



}