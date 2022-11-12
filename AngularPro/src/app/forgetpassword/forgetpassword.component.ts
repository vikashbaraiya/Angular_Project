import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  // Rest endpoint
  endpoint = "http://localhost:8000/ORSAPI/Forgetpassword/submit";

  // ForgetPassword Form
  form = { "login_id":""  }
  
  // Input errors
  inputError = { "login_id":"" }

  // Server success/fail message
  message = "";

  // Server error
  success:boolean = true;

  constructor(private http :HttpClient) { }

  ngOnInit() {
    localStorage.setItem("sess_msg","");
    localStorage.setItem("logout_msg","");
  }
  forgetpwd(form, compCB){
    this.http.post(this.endpoint,form).subscribe(
      (data) => {
        compCB(data);
      },(data) => {
        compCB(data,true);
      })
  };

  submit(){
    var _self = this;
    this.forgetpwd(this.form, function (res,error){
      if (res.data.error){
        _self.success = false;
        _self.message = res.data.message;
        _self.inputError = res.form.inputError;
        console.log("INPUTERROR: ",_self.inputError)
        return ;
      }
      _self.success = true;
      _self.message = res.data.message;
      _self.inputError = { "login_id":"" }
    })
  };

}
