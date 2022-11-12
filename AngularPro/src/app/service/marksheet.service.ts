import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/**
 * Provides REST CRUD operations of Marksheet functionality
 * Each method of this class receives response-callback method. 
 * Response callback method is called by Observable and passed data and error.
 * 
 */

@Injectable({
  providedIn: 'root'
})
export class MarksheetService {
  
  // Rest Endpoint
  endpoint = "http://localhost:8000/ORSAPI/Marksheet/"

  /**
   * Constructor injects HTTP service
   * 
   * @param http 
   */

  constructor(private http:HttpClient) { }
  /**
 * Gets Marksheet
 * 
 * @param id 
 * @param response 
 */

  get(id:number,compCB){
    let url = this.endpoint +"get/"+id;
    var observable = this.http.get(url);
    observable.subscribe(
      function success(data){
        compCB(data);
      },function fail(data){
        compCB(data);
      });
  }
  /**
   * Delets a Marksheet
   * 
   * @param id 
   * @param response 
   */

  delete(id:number,compCB ){
    let url = this.endpoint +"delete/"+id;
    this.http.get(url).subscribe(
      (data)=>{
        compCB(data);
      },data=>
      {compCB(data,true);
      });
  }
  /**
   * Searches Marksheet
   * 
   * @param response 
   */

  search(form,compCB){
    let url = this.endpoint +"search";
    this.http.post(url,form).subscribe(
      (data)=>{
        compCB(data);
      },(data)=>{compCB(data);
      });
  }
  /**
   * Add/Update Marksheet
   * @param form Adds or updates a record 
   * @param response 
   */

   save(form,compCB){
    let url = this.endpoint +"save";
    this.http.post(url,form).subscribe(
      (data)=>{
        compCB(data);
      },(data)=>{compCB(data,true);
      });
  }
}
