import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from "jquery"
import { RoleService } from '../service/role.service';

@Component({
  selector: 'app-rolelist',
  templateUrl: './rolelist.component.html',
  styleUrls: ['./rolelist.component.css']
})
export class RolelistComponent implements OnInit {

  // Server success/fail message
  message = "";

  // Server error
  success:boolean = true;

  // Contains Role list
  list = [];

   // Search form
   form={
    "name":"",
    "pageNo":1,
    "index" : 1,
    "MaxId":1,
    "LastId":1,
    "mesg":""
}

  constructor(private router: Router, private service:RoleService) { }

  ngOnInit() {
    this.search()
  }
  /**
   * Edit a record
   */
  edit(id){
    this.router.navigateByUrl("/role/" + id);
    console.log("edittttttttt")
  }

  /**Delete a record */
  delete(id){
    var _self = this;
    this.service.delete(id, function (res, error){
      if (res.data.error){
        alert("Error"+res.data.message);
        return ;
      }
      _self.success = true;
      _self.message = res.data.message;
      _self.form = {
        "name":"",
        "pageNo":1,
        "index":1,
        "MaxId":1,
        "LastId":1,
        "mesg":""
      }
      _self.search();
      setTimeout(() => {
        $("#timeout").fadeOut(1000);
      },2000)
    })
  };

  /** Search a get a list */
  search(){
    var _self = this;
    this.service.search(this.form, function (res, error){
      if (error){
      alert("Error"+res.result.message);
      return ;
      }
      _self.form.index = res.result.index;
      _self.form.LastId = res.result.LastId;
      _self.form.MaxId = res.result.MaxId;
      _self.form.mesg = res.result.mesg;
      _self.list = res.result.data;
      console.log("eroreriie",_self.list)
    });
  };
  /** Submit a form */
  submit(){
    this.form.pageNo = 1;
    this.search();
  };
  /**previous records get */
  previous(){
    this.form.pageNo -= 1;
    this.search()
  }
  /** Get a next record */
  next(){
    this.form.pageNo += 1;
    this.search();
  }
  reload(){
    window.location.reload()
  }
}
