import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../service/subject.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-subjectlist',
  templateUrl: './subjectlist.component.html',
  styleUrls: ['./subjectlist.component.css']
})
export class SubjectlistComponent implements OnInit {

   // Search subject

   form = {
    "subjectName":"",
    "pageNo":1,
    "index":1,
    "LastId":1,
    "MaxId":1,
    "mesg":""
  }

  // Server success/fail message
  message = "";

  // Server error
  success:boolean  = true;

  // contains list
  list = []

  /**
   * 
   * @param router 
   * @param service 
   */

  constructor(private router:Router,private service:SubjectService) { }

  ngOnInit() {
    this.search();
  }

  /** Edit a record */
  
  edit(id){
    this.router.navigateByUrl("/subject/" + id);
  }

  /** Delete a record */

  delete(id){
    var _self = this;
    this.service.delete(id, function (res,error){
      if (res.data.error){
        alert("Error: " + res.data.message);
        return;
      }else{
      _self.success = true;
      _self.message = res.data.message;
    }})
    this.form = {
      "subjectName":"",
      "pageNo":1,
      "index":1,
      "LastId":1,
      "MaxId":1,
      "mesg":""
    }
    this.search();
    setTimeout(()=> {
      $("#timeout").fadeOut(1000);
    },2000);
  }

  /**
   * Search and get list
   */

  search() {
    var _self = this;
    this.service.search(this.form, function (res,error){
      if (error){
        alert("Error: "+ error.message);
      }
      _self.form.index = res.result.index;
      _self.form.LastId = res.result.LastId;
      _self.form.MaxId = res.result.MaxId;
      _self.form.mesg = res.result.mesg;
      _self.list = res.result.data;
    })
  };

  /** Submit the form */

  submit(){
    this.form.pageNo = 1;
    this.search();
  }

  /** Get previous records */

  previous(){
    this.form.pageNo -= 1;
    this.search();
  }

  /** Get next records */

  next(){
    this.form.pageNo += 1;
    this.search();
  }

  reload(){
    window.location.reload();
  }

}
