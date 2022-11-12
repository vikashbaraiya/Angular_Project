import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  // Rest endpoint
  endpoint = "http://localhost:8000/ORSAPI/Changepassword/submit";

  // ChangePassword form
  form = {
    "login_id":"",
    "oldPassword":"",
    "newPassword":"",
    "confirmPassword":""
  }

  // Input Errors
  inputError = {
    "oldPassword":"",
    "newPassword":"",
    "confirmPassword":""
  }

  // Server success/fail message
  message = "";

  // Server error
  success:boolean = true;
  constructor(private http :HttpClient) { }

  ngOnInit() {
  }
  changepwd(form,compCB){
    var observable = this.http.post(this.endpoint,form);
    observable.subscribe(
      function success(data){
        compCB(data)
      },function fail(data){
        compCB(data,true)
      })
  };

  submit(){
    var _self = this;
    _self.form.login_id = localStorage.getItem("loginId");
    console.log("self.form.login_id", _self.form.login_id)
    this.changepwd(this.form, function (res, error){
      if(res.form.error){
        _self.success = false;
        _self.message = res.form.message;
        _self.inputError = res.form.inputError;
        return ;
      };
      _self.success = true;
      _self.message = res.form.message;
      _self.inputError = {
        "oldPassword":"",
        "newPassword":"",
        "confirmPassword":""    
      }
    })
  };

  reset(){
    this.form = {
      "login_id":"",
      "oldPassword":"",
      "newPassword":"",
      "confirmPassword":""
    }
    this.inputError = {
      "oldPassword":"",
      "newPassword":"",
      "confirmPassword":""  
    };
    this.message = "";
  };

}
