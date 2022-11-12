import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserComponent } from './user/user.component';
import { UserlistComponent } from './userlist/userlist.component';
import { RoleComponent } from './role/role.component';
import { RolelistComponent } from './rolelist/rolelist.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { CollegeComponent } from './college/college.component';
import { CollegelistComponent } from './collegelist/collegelist.component';
import { CourseComponent } from './course/course.component';
import { CourselistComponent } from './courselist/courselist.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { MarksheetlistComponent } from './marksheetlist/marksheetlist.component';
import { MeritlistComponent } from './meritlist/meritlist.component';
import { StudentComponent } from './student/student.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { SubjectComponent } from './subject/subject.component';
import { SubjectlistComponent } from './subjectlist/subjectlist.component';
import { AddfacultyComponent } from './addfaculty/addfaculty.component';
import { AddfacultylistComponent } from './addfacultylist/addfacultylist.component';
import { TimetableComponent } from './timetable/timetable.component';
import { TimetablelistComponent } from './timetablelist/timetablelist.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    WelcomeComponent,
    ForgetpasswordComponent,
    RegistrationComponent,
    UserComponent,
    UserlistComponent,
    RoleComponent,
    RolelistComponent,
    ChangepasswordComponent,
    CollegeComponent,
    CollegelistComponent,
    CourseComponent,
    CourselistComponent,
    MarksheetComponent,
    MarksheetlistComponent,
    MeritlistComponent,
    StudentComponent,
    StudentlistComponent,
    SubjectComponent,
    SubjectlistComponent,
    AddfacultyComponent,
    AddfacultylistComponent,
    TimetableComponent,
    TimetablelistComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
