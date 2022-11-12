import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meritlist',
  templateUrl: './meritlist.component.html',
  styleUrls: ['./meritlist.component.css']
})
export class MeritlistComponent implements OnInit {

  // Rest Endpoint
  endpoint = "http://localhost:8000/ORSAPI/Marksheet/meritList";

  // Contains data
  list = []

  constructor(private http:HttpClient) { }

  /** Gets merit data */
  
  ngOnInit() {
    var _self = this;
    this.merit(function (res,error){
      if (error){
        alert("Error: " + error.message);
        return ;
      }
      _self.list = res.merit;
    })
  }

  /** Calls merit */

  merit(compCB){
    this.http.get(this.endpoint).subscribe(
      (data) => {
        compCB(data);
      },(data) => {
        compCB(data,true);
      })
  };


}
