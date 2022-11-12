import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddfacultyService } from '../service/addfaculty.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-addfacultylist',
  templateUrl: './addfacultylist.component.html',
  styleUrls: ['./addfacultylist.component.css']
})
export class AddfacultylistComponent implements OnInit {
  // Server success/fail message
  message = "";

  // Server error
  success:boolean = true;

  // Contains faculty list
  list = []

  // Search form
  form = {
    "firstName":"",
    "index":1,
    "pageNo":1,
    "MaxId":1,
    "LastId":1,
    "mesg":""
  }

  /**
   * 
   * @param router 
   * @param service 
   */

  constructor(private router:Router,private service:AddfacultyService) { }

  ngOnInit() {
    this.search();
  }

   /**
   * Edits a record
   */
  edit(id){
    this.router.navigateByUrl("/addfaculty/" + id);
  }
  /**
   * Deletes a record
   */
  delete(id){
    var _self= this;
    this.service.delete(id,function(res,error){
      if(res.data.error){
        alert("Error:" +res.data.message);
        return;
      }
      _self.success = false;
      _self.message = res.data.message;
    });
    this.form = {
      "firstName":"",
      "index":1,
      "pageNo":1,
      "MaxId":1,
      "LastId":1,
      "mesg":""
    };
    this.search();
    setTimeout (() =>  {
      $("#timeout").fadeout(1000);
    },2000);
  };
  /**
   * Searches ang get list
   */
  
  search(){
    var _self = this;
    this.service.search(this.form,function(res,error){
      if(error){
        alert("Error:" + res.result.message);
        return;
      }
      _self.form.index = res.result.index;
      _self.form.LastId = res.result.LastId;
      _self.form.MaxId = res.result.MaxId;
      _self.form.mesg = res.result.mesg;
      _self.list = res.result.data;
    });
  };
   /** Submit the form */

   submit(){
    this.form.pageNo = 1;
    this.search();
  }

  /** Get Previous records */

  previous(){
    this.form.pageNo -= 1;
    this.search();
  }

  /** Get Next records */

  next(){
    this.form.pageNo += 1;
    this.search();
  }

  /** Reloads the page */

  reload(){
    window.location.reload();
  }
}
