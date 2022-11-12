import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollegeComponent } from '../college/college.component';
import * as $ from 'jquery';
import { CollegeService } from '../service/college.service';
@Component({
  selector: 'app-collegelist',
  templateUrl: './collegelist.component.html',
  styleUrls: ['./collegelist.component.css']
})
export class CollegelistComponent implements OnInit {
   // Server response message
   message = "";

   // Server error
   success:boolean = true;
 
   // Contains College list
   list = [];
 
   // Search form
   form = {
     "collegeName":"",
     "pageNo":1,
     "index":1,
     "MaxId":1,
     "LastId":1,
     "mesg":""
   }
 
   /**
    * 
    * @param route 
    * @param service 
    */

  constructor(private router:Router,private service:CollegeService) { }

  ngOnInit() {
    this.search();
  }

  /**
   * Edits a College
   * @param id
   */

  edit(id){
    this.router.navigateByUrl("/college/"+id);
  }
  /**
   * Delete a record
   */
  delete(id){
    var _self = this;
    this.service.delete(id,function(res,error){
      if (res.data.error){
        alert("Error----"+ res.data.message);
        return;
      }
      _self.success = true;
      _self.message = res.data.message;
      _self.form = {
        "collegeName":"",
        "pageNo":1,
        "index":1,
        "MaxId":1,
        "LastId":1,
        "mesg":""
      };
      _self.search();
      setTimeout(()=>{
        $("#timeout").fadeout(1000);
      },2000);
    });
  }
   /**
   * Searches and get list
   */

   search(){
    var _self = this;
    console.log("search method of collegelist----",this.form);
    this.service.search(this.form,function(res,error){
      if(error){
        alert("Error----"+ res.result.message);
        return;        
      }
      _self.form.index = res.result.index;
      _self.form.LastId = res.result.LastId;
      _self.form.MaxId = res.result.MaxId;
      _self.form.mesg = res.result.mesg;
      _self.list = res.result.data;
      console.log("LLLLLLLLLL--------->", _self.list);
    })
  }
  
  /** Submit the form  */

  submit(){
    this.form.pageNo = 1;
    this.search();
  }

  // Get Previous records

  previous(){
    this.form.pageNo -= 1;
    this.search();
  }

  // Get Next records

  next(){
    this.form.pageNo += 1;
    this.search();
  }

  // Reloads the page

  reload(){
    window.location.reload();
  }

}
