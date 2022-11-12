import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { MarksheetService } from '../service/marksheet.service';

@Component({
  selector: 'app-marksheet',
  templateUrl: './marksheet.component.html',
  styleUrls: ['./marksheet.component.css']
})
export class MarksheetComponent implements OnInit {
  // Marksheet form
  form = {
    "id":0,
    "rollNumber":"",
    "name":"",
    "physics":"",
    "chemistry":"",
    "maths":""
  }

  // inputErrors
  inputError = {
    "rollNumber":"",
    "name":"",
    "physics":"",
    "chemistry":"",
    "maths":""
  }

  // Server success/fail message
  message = "";

  // Server error
  success:boolean = true;


  constructor(private aroute:ActivatedRoute,private router:Router,private service:MarksheetService) { }

  /** Display record if primary is used */

  ngOnInit() {
    var _self = this;
    this.form.id = parseInt(this.aroute.snapshot.paramMap.get("id"));
    console.log("this.form.id------",this.form.id)
    if(!isNaN(this.form.id) && this.form.id > 0){
      this.service.get(this.form.id,function(res,error){
        if (error){
          alert("Error:" + error.message);
          return;
        }
        _self.form = res.data;
        console.log("_self,form------",_self.form)
      })
    }
  };
  /** Save a record */
  save(){
    var _self = this; 
    this.ngOnInit();
    if(isNaN(this.form.id)){
      this.form.id = 0;
    }
    this.service.save(this.form,function(res,error){
      if (res.data.error){
        _self.success = false;
        _self.message = res.data.message;
        _self.inputError = res.form.inputError;
        return;
      }
      _self.success = true;
      if (_self.success){
        _self.success = true;
        _self.message = res.data.message;
        _self.inputError = {
          "rollNumber":"",
          "name":"",
          "physics":"",
          "chemistry":"",
          "maths":""          
        }
      }else{
        _self.message = "Data is not saved";
      }
    })
  };
  reset(){
    this.form = {
      "id":0,
      "rollNumber":"",
      "name":"",
      "physics":"",
      "chemistry":"",
      "maths":""
    };
    this.ngOnInit();
    this.inputError = {
      "rollNumber":"",
      "name":"",
      "physics":"",
      "chemistry":"",
      "maths":""
    };
    this.message = "";   
  }

}
