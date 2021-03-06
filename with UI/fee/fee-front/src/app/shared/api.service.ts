import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Fee } from './fee';



// import {Observable} from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getfee() {
    throw new Error("Method not implemented.");
  }
  delrow(v: { "_id": any; }) {
    throw new Error("Method not implemented.");
  }
 constructor(private _http:HttpClient) { }
  readonly rootUrl = 'http://localhost:3000/';  

create(stud : Fee){
  console.log("called post api");
  return this._http.post(this.rootUrl+"operations/create", stud , {
    observe: 'body'

});
}
getFee(){
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