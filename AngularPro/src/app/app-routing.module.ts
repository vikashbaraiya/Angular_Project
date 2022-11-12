import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddfacultyComponent } from './addfaculty/addfaculty.component';
import { AddfacultylistComponent } from './addfacultylist/addfacultylist.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { CollegeComponent } from './college/college.component';
import { CollegelistComponent } from './collegelist/collegelist.component';
import { CourseComponent } from './course/course.component';
import { CourselistComponent } from './courselist/courselist.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { LoginComponent } from './login/login.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { MarksheetlistComponent } from './marksheetlist/marksheetlist.component';
import { MenuComponent } from './menu/menu.component';
import { MeritlistComponent } from './meritlist/meritlist.component';
import { RegistrationComponent } from './registration/registration.component';
import { RoleComponent } from './role/role.component';
import { RolelistComponent } from './rolelist/rolelist.component';
import { StudentComponent } from './student/student.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { SubjectComponent } from './subject/subject.component';
import { SubjectlistComponent } from './subjectlist/subjectlist.component';
import { TimetableComponent } from './timetable/timetable.component';
import { TimetablelistComponent } from './timetablelist/timetablelist.component';
import { UserComponent } from './user/user.component';
import { UserlistComponent } from './userlist/userlist.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  {path :'',redirectTo:'login',pathMatch:'full'},
  {path : 'logout', component:MenuComponent},
  {path: 'sessionOut',component:LoginComponent},
  {path : 'login', component:LoginComponent},
  {path : 'welcome',component:WelcomeComponent},
  {path :  'forgetpassword',component:ForgetpasswordComponent},
  {path : 'registration', component:RegistrationComponent},
  {path : 'user', component:UserComponent},
  {path : 'userlist',component:UserlistComponent },
  {path :'user/:id',component:UserComponent},
  {path : 'role',component:RoleComponent},
  {path : 'role/:id',component:RoleComponent},
  {path :'rolelist',component:RolelistComponent},
  {path:'changepassword',component:ChangepasswordComponent},
  {path:'college',component:CollegeComponent},
  {path:'collegelist',component:CollegelistComponent},
  {path:'college/:id',component:CollegeComponent},
  {path:'course',component:CourseComponent},
  {path:'course/:id',component:CourseComponent},
  {path:'courselist',component:CourselistComponent},
  {path:'marksheet',component:MarksheetComponent},
  {path:'marksheet/:id',component:MarksheetComponent},
  {path:'marksheetlist',component:MarksheetlistComponent},
  {path:'meritlist',component:MeritlistComponent},
  {path:'student',component:StudentComponent},
  {path:'student/:id',component:StudentComponent},
  {path:'studentlist',component:StudentlistComponent},
  {path:'subject',component:SubjectComponent},
  {path:'subject/:id',component:SubjectComponent},
  {path:'subjectlist',component:SubjectlistComponent},
  {path:'addfaculty',component:AddfacultyComponent},
  {path:'addfaculty/:id',component:AddfacultyComponent},
  {path:'addfacultylist',component:AddfacultylistComponent},
  {path:'timetable',component:TimetableComponent},
  {path:'timetable/:id',component:TimetableComponent},
  {path:'timetablelist',component:TimetablelistComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
