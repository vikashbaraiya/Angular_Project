import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../service/authservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userId:string = '';
  public password:string = '';
  public loginId = '';
  public success = true

  sess_msg = "";

  form = {
    "login_id":this.userId,
    "password":this.password,
    "message": "",
    "error": "",
  }

  inputError = {
    "login_id" : "",
    "password": "",
  }
  constructor(private router: Router,private service : AuthserviceService) { }

  ngOnInit() {
    localStorage.removeItem("loginId")
    if(this.router.url == "/sessionOut"){
      this.success = false;
      this.form.message = localStorage.getItem("sess_msg");
      console.log("ngOnInit-Sess_msg--->",localStorage.getItem("sess_msg"));
    }
    else{
      let msg = localStorage.getItem("logout_msg")
      console.log("logout msg",msg)
      if (msg != null || msg != "null"){
        this.success = true;
        this.form.message = msg;
        console.log("ngOnit-logout_msg--->",localStorage.getItem("sess_msg"));
      }
    }
  }

  signIn(){
    var _self = this;

    this.service.auth(this.form, function(info){
      if (info.form.error){
        _self.success = false;
        _self.form.message = info.form.message;
        _self.inputError = info.form.inputError;
        console.log("ifffff errroorr--->",info.form.error)
      }else{
        localStorage.clear();
        console.log("signIn--->",info.form.error)
        localStorage.setItem("loginId",info.form.data.login_id)
        localStorage.setItem("roleName",info.form.data.role_Name)
        localStorage.setItem("firstName",info.form.data.firstName)
        _self.router.navigateByUrl("/welcome");
      }
    })
  }
  onclick(){
    this.router.navigateByUrl("/registration");
  }

}
