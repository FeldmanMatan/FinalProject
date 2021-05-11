import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TempServiceService } from '../../services/temp-service.service';


@Component({
  selector: 'app-screen-student',
  templateUrl: './screen-student.component.html',
  styleUrls: ['./screen-student.component.css']
})
export class ScreenStudentComponent implements OnInit {
users:any=[];
  constructor(public Temp: TempServiceService ,public Auth:AuthService) { 
    // this.Temp.getUserData().subscribe(users=>{
    //   //console.log(users);
    //   this.users= users;
    // })
  }

  

  ngOnInit(): void {
  }

}
