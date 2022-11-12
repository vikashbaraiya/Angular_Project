import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { __classPrivateFieldSet } from 'tslib';
import { SubjectService } from '../service/subject.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

// Subject form

form = {
  "id":0,
  "subjectName":"",
  "subjectDescription":"",
  "course_ID":""
}

// Input Errors

inputError = {
  "subjectName":"",
  "subjectDescription":"",
  "course_ID":""
}

// Server success/fail message
message = "";

// Server error
success:boolean  = true;

/**
 * 
 * @param aroute 
 * @param router 
 * @param service 
 */
  constructor(private aroute:ActivatedRoute,private router:Router,private service:SubjectService) { }
/** Display record if primary key is used */
  ngOnInit() {
    var _self = this;
    this.form.id = parseInt(this.aroute.snapshot.paramMap.get("id"));
    if (!isNaN(this.form.id) && this.form.id >0){
      this.service.get(this.form.id,function(res,error){
        if (error){
          alert("Error:" + error.message);
          return;
        }
        _self.form = res.data;
      })
    };this.preload();
  }
/**
   * Save a record
   */ 
  save(){
    var _self = this;
    this.ngOnInit(); 
    if (isNaN(this.form.id)){
      this.form.id = 0;
    }
    this.service.save(this.form,function(res,error){
      if(res.data.error){
      _self.success =  false;
      _self.message = res.data.message;
      _self.inputError = res.form.inputError;
      return;
  }
  _self.success = res.data.message;
  if(_self.success){
    _self.success = true;
    _self.message = res.data.message;
    _self.inputError = {
      "subjectName":"",
      "subjectDescription":"",
      "course_ID":""
    }
    }else{
      _self.message = "Data is not saved";
    }
    })
};
  preloadData = []
  preload(){
    var _self = this;
    this.service.preload(function(res,error){
      if(error){
        alert("Error:" + error.message);
        return;
      }
      _self.preloadData = res.preloadList;
    })
  };
  reset(){
    this.form = {
      "id":0,
      "subjectName":"",
      "subjectDescription":"",
      "course_ID":""
    };
    this.ngOnInit();
    this.inputError = {
      "subjectName":"",
      "subjectDescription":"",
      "course_ID":""
    }
    this.message = "";
  };
}