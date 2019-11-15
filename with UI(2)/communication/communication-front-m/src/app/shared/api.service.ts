import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { communication } from './communication';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  delrow(v: { "_id": any; }) {
    throw new Error("Method not implemented.");
  }
 constructor(private _http:HttpClient) { }
  readonly rootUrl = 'http://localhost:3000/';  

create(stud : communication){
  console.log("called post api");
  return this._http.post(this.rootUrl+"operations/create", stud , {
    observe: 'body'

});
}
getcanteen(){
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