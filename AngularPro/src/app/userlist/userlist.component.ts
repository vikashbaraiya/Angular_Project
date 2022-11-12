import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from "jquery"
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

    // Server response message
    message = "";

    // Server error
    success:boolean = true;

    // Contain UserList
    list = [];

    // Search form

    form = {
      "firstName":"",
      "login_id":"",
      "pageNo":1,
      "index":1,
      "MaxId":1,
      "LastId":1,
      "mesg":""

    }

    /**
     * @param router
     * @param service
     */

  constructor(private router: Router, private service:UserService) { }

  ngOnInit() {
    this.search();
    console.log("this.search");
  }
  /**
   * Edits a User
   * @param id
   */

  edit(id){
    this.router.navigateByUrl("/user/"+id)
  }

  /**
   * Deletes a record
   */

  delete(id){
    var _self = this;
    this.service.delete(id, function (res, error){
      if (res.data.error){
        alert("Error :"+res.data.message);
        return;
      }else{
        _self.success = true;
        _self.message = res.data.message;
      }
    });
    this.form = {
      "firstName":"",
      "login_id":"",
      "pageNo":1,
      "index":1,
      "MaxId":1,
      "LastId":1,
      "mesg":""
    }
    this.search();
    setTimeout(() => {
      $('#timeout').fadeout(1000);
    },2000);
  }
  /**
   * Searches and get list
   */

   search(){
    var _self = this;
    console.log("FFFFFF--------",this.form);
    this.service.search(this.form,function(res,error){
      if(error){
        alert("Error:"+res.result.message);
        return;
      }
      _self.form.index = res.result.index;
      _self.form.LastId = res.result.LastId;
      _self.form.MaxId = res.result.MaxId;
      _self.form.mesg = res.result.mesg;
      _self.list = res.result.data;
      console.log("TTTTTTTTTT--------",_self.list);
    });
  }
  /**
   *  Submit the form
   */

  submit(){
    var _self = this;
    _self.form.pageNo = 1;
    this.search();
  }
  /**
   * get previous records
   */

  previous(){
    var _self = this;
    _self.form.pageNo -= 1;
    this.search()
  }
  /**
   * get next records
   */
  next(){
    var _self = this;
    _self.form.pageNo += 1;
    this.search()
  }
  /**
   * Reload the page
   */
  reload(){
    window.location.reload();
  }
}
