import { NgModule , CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import {NgModel} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {MatTableModule} from '@angular/material/table';
// import { MatRadioModule } from "@angular/material";
import { MatSelectModule } from "@angular/material/select";
import { MatListModule } from "@angular/material/list";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
//import { NgForm } from '@angular/forms'
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { RegistrationComponent } from '../app/component/registration/registration.component';
import { LogInComponent } from '../app/component/log-in/log-in.component';
import { ScreenStudentComponent } from '../app/component/screen-student/screen-student.component';
import { ScreenToturComponent } from '../app/component/screen-totur/screen-totur.component';

import {TempServiceService} from '../app/services/temp-service.service';
import { from } from 'rxjs';
import { AdminComponent } from '../app/component/admin/admin.component';
import { ProfessionalDetailsComponent } from '../app/component/professional-details/professional-details.component';
import { TabletimeComponent } from '../app/component/tabletime/tabletime.component';
import { PrefcourseService } from "../app/services/prefcourse.service";

import { CourseService } from "../app/services/course.service";
import { WindowsDaysOffService } from './services/window-day-off.service';
// const appRoutes: Routes= [
//   {path: '', component:RegistrationComponent},
//   {path: 'login',component:LogInComponent},
//   {path: 'screenStudent',component:ScreenStudentComponent},
//   {path: 'screenTotur',component:ScreenToturComponent}
// ]


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LogInComponent,
    ScreenStudentComponent,
    ScreenToturComponent,
    AdminComponent,
    ProfessionalDetailsComponent,
    TabletimeComponent,

    //NgForm
   
  ],
  imports: [

    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
   // MatRadioModule,
    MatSelectModule,
    MatButtonToggleModule,

    MatListModule,
    RouterModule.forRoot([
      {
        path: '',
        component:RegistrationComponent
      },
      {
        path: 'login',
        component: LogInComponent
      },
      // {
      //   path: '',
      //   component:AppComponent
      // },
     
      {
        path: 'admin',
        component:AdminComponent,
        // canActivate:[TempServiceService]

      },
      {
        path: 'student',
        component:ScreenStudentComponent
      },
      {
        path: 'totur',
        component:ScreenToturComponent
      },
      {
        path: 'professional_details',
        component:ProfessionalDetailsComponent
      },
      {
        path: 'app-tabletime',
        component:TabletimeComponent
      },
    ]),
    
  ],
  providers: [TempServiceService,CourseService,PrefcourseService,
     WindowsDaysOffService ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
