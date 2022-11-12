import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  // Rest Endpoint
  endpoint = "http://localhost:8000/ORSAPI/Registration/";

  /** Constructor injects http service
   * 
   * @param http
   * */


  constructor(private http:HttpClient) { }
  /**Add/Update Records
   * @param form
   * @param response
   */
  save(form,compCB){

    let url = this.endpoint + "save";
    this.http.post(url, form).subscribe(
      (data) =>{
        compCB(data);
      },
      (data) =>{
        compCB(data);
      }
    );

  }
}
