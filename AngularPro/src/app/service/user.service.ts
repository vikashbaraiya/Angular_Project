import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * provide REST CRUD Operations of User Functionality
 * Each Method of this class recieve Response callback method
 * Response callback method is called by observable and passed data and error.
 */

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //Rest endpoint
  endpoint = "http://localhost:8000/ORSAPI/User/";

  /**
   * Constructor injects Http Service
   * @param http
   */

  constructor(private http:HttpClient) { }
  /**
   * Get User
   * 
   * @param id
   * @param response
   */
  get(id:number, compCB){
    let url = this.endpoint +"get/"+id;
    var Observable = this.http.get(url)
    Observable.subscribe(
      function success(data){
        compCB(data);
      },function fail(data){
        compCB(data,true);
      }
    )

  }
  preload(compCB){
    let url = this.endpoint + "preload";
    var Observable = this.http.get(url)
    Observable.subscribe(
      function success(data){
        console.log("TTTTT___",data)
        compCB(data);
      },function fail(data){
        compCB(data, true)
      }
    );

  }
  /**
   * @param id
   * @param response
   */

  delete(id:number, compCB){
    let url = this.endpoint + "delete/" + id
    this.http.get(url).subscribe(
      (data) => {
        compCB(data);
      },
      (data) => {
        compCB(data, true);
      }
    );
  }
  /**
   * Searches User
   * @param response
   */
  search(form, compCB){
    let url = this.endpoint + "search";
    this.http.post(url, form).subscribe(
      (data) => {
        compCB(data);
      },(data) => {
        compCB(data, true);
      }
    );
  }
  /**
   * Add/Update User
   * @param form Add Update User
   * @param Response 
   *  
   */
  save(form, compCB){
    let url = this.endpoint + "save";
    this.http.post(url, form).subscribe(
      (data) => {
        compCB(data);
      },(data) => {
        compCB(data, true);
      }
    );
  }
}
