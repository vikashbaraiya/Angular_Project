import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { CourseService } from '../service/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  // Course form
  form = {
    "id":0,
    "courseName":"",
    "courseDescription":"",
    "courseDuration":""
  }

  // Input Errors
  inputError = {
    "courseName":"",
    "courseDescription":"",
    "courseDuration":""
  }

  // Server success/fail message
  message = "";

  // Server error
  success:boolean = true;

  /**
   * 
   * @param aroute 
   * @param route 
   * @param service 
   */

  constructor(private aroute:ActivatedRoute,private router:Router,private service:CourseService) { }
/**
   * Display record if Primary key is used
   */


  ngOnInit() {
    var _self = this;
    this.form.id = parseInt(this.aroute.snapshot.paramMap.get("id"))
    if( !isNaN(this.form.id) && (this.form.id > 0)){
      this.service.get(this.form.id,function(res,error){
        if(error){
          alert("Error---" +error.message);
          return;
        }
        _self.form = res.data;
      });
    }
  }
  /**
   * Save a record
   */
   save(){
    var _self = this;
    this.ngOnInit();
    if ( isNaN(this.form.id) ){
      this.form.id = 0;
    };
    this.service.save(this.form, function (res,error){
      if (res.data.error){
        _self.success = false;
        _self.message = res.data.message;
        _self.inputError = res.form.inputError;
        return ;
      }
      _self.success = res.data.message;
      if (_self.success){
        _self.success = true;
        _self.message = res.data.message;
        _self.inputError = {
                "courseName":"",
                "courseDescription":"",
                "courseDuration":""
        }
      }else{
        _self.message = "Data was not saved";
      }
    }) 
  };


  reset(){
    this.form = {
      "id":0,
      "courseName":"",
      "courseDescription":"",
      "courseDuration":""
    }
    this.ngOnInit();
    this.inputError = {
      "courseName":"",
      "courseDescription":"",
      "courseDuration":""
    }
    this.message = "";
  };


}
