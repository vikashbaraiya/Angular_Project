import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Route,Router } from '@angular/router';
import { TimetableService } from '../service/timetable.service';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit {
  // Timetable form
  form = {
    "id":0,
    "examTime":"",
    "examDate":"",
    "semester":"",
    "subject_ID":"",
    "course_ID":""
  }

  // Input errors
  inputError = {
    "examTime":"",
    "examDate":"",
    "semester":"",
    "subject_ID":"",
    "course_ID":""
  }

  // Server success/fail message
  message = "";

  // Server error
  success: boolean = true;

  /**
   * 
   * @param aroute 
   * @param router 
   * @param service 
   */
  constructor(private aroute:ActivatedRoute,private router:Router,private service: TimetableService) { }
/**
   * Display record if primary key is used
   */
  ngOnInit() {
    var _self = this;
    this.form.id = parseInt(this.aroute.snapshot.paramMap.get("id"));
    if ( !isNaN(this.form.id) && this.form.id > 0){
      this.service.get(this.form.id, function (res,error){
        if (error){
          alert("Error: " + error.message);
          return ;
        }
        _self.form = res.data;
      })
    }; this.preload();
  };

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
          "examTime":"",
          "examDate":"",
          "semester":"",
          "subject_ID":"",
          "course_ID":""
      }
    }else{
      _self.message = "Data was not saved";
    }
    });
  }

  preloadSub = [];
  preloadCou = [];

  preload(){
    var _self = this;
    this.service.preload(function (res,error){
      if (error){
        alert("Preload error: " + error.message);
        return ;
      }
      _self.preloadSub = res.subpreload;
      _self.preloadCou = res.coupreload;
    })
  };

  reset(){
    this.form = {
      "id":0,
      "examTime":"",
      "examDate":"",
      "semester":"",
      "subject_ID":"",
      "course_ID":""
    };
    this.ngOnInit();
    this.inputError = {
      "examTime":"",
      "examDate":"",
      "semester":"",
      "subject_ID":"",
      "course_ID":""
    };
    this.message = "";    
  }

}
