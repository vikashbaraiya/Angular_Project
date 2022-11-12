import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddfacultyService } from '../service/addfaculty.service';

@Component({
  selector: 'app-addfaculty',
  templateUrl: './addfaculty.component.html',
  styleUrls: ['./addfaculty.component.css']
})
export class AddfacultyComponent implements OnInit {

  // Faculty form
  form = {
    "id":0,
    "firstName":"",
    "lastName":"",
    "email":"",
    "password":"",
    "address":"",
    "gender":"",
    "dob":"",
    "college_ID":"",
    "subject_ID":"",
    "course_ID":""
  }

  // Input Errors
  inputError = {
    "firstName":"",
    "lastName":"",
    "email":"",
    "password":"",
    "address":"",
    "gender":"",
    "dob":"",
    "college_ID":"",
    "subject_ID":"",
    "course_ID":""
  }

  // Server success/fail message
  message = "";

  // Server error
  success:boolean = true;

  /**
   * 
   * @param aroute 
   * @param router 
   * @param service 
   */

  constructor(private aroute:ActivatedRoute,private router:Router,private service:AddfacultyService) { }

  /**
   * Display record if primary key is used
   */
  ngOnInit() {
    var _self = this;
    this.form.id = parseInt(this.aroute.snapshot.paramMap.get("id"));
    if ( !isNaN(this.form.id) && this.form.id > 0){
      this.service.get(this.form.id, function (res, error){
        if (error){
          alert("Error:----" + error.message);
          return;
        }
        _self.form = res.data;
      });
    } 
    this.preload();
  }

  /**
   * Save a record
   */

  save(){
    var _self = this;
    this.ngOnInit();
    if ( isNaN(this.form.id)){
      this.form.id = 0;
    }
    this.service.save(this.form, function (res,error){
      if (res.data.error){
        _self.success = false;
        _self.message = res.data.message;
        _self.inputError = res.form.inputError;
        return;
      }
      _self.success = res.data.message;
      if (_self.success){
        _self.success = true;
        _self.message = res.data.message;
        _self.inputError = {
          "firstName":"",
          "lastName":"",
          "email":"",
          "password":"",
          "address":"",
          "gender":"",
          "dob":"",
          "college_ID":"",
          "subject_ID":"",
          "course_ID":""
        }
      }else{
        _self.message = "Data was not saved";
      }
    })
  };

  preloadSubject = []
  preloadCourse = []
  preloadCollege = []

  preload(){
    var _self = this;
    this.service.preload(function (res,error){
      if (error){
        alert("Preload Error: " + error.message);
        return ;
      }
      _self.preloadSubject = res.subpreload;
      _self.preloadCourse = res.coupreload;
      _self.preloadCollege = res.colpreload;
    })
  };

  reset(){
    this.form = {
      "id":0,
      "firstName":"",
      "lastName":"",
      "email":"",
      "password":"",
      "address":"",
      "gender":"",
      "dob":"",
      "college_ID":"",
      "subject_ID":"",
      "course_ID":""
    }
    this.ngOnInit();
    this.inputError = {
      "firstName":"",
      "lastName":"",
      "email":"",
      "password":"",
      "address":"",
      "gender":"",
      "dob":"",
      "college_ID":"",
      "subject_ID":"",
      "course_ID":""
    }
    this.message = "";
    };
}
