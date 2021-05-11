import { Component, OnInit } from '@angular/core';
import { TempServiceService } from '../../services/temp-service.service';

@Component({
  selector: 'app-screen-totur',
  templateUrl: './screen-totur.component.html',
  styleUrls: ['./screen-totur.component.css']
})
export class ScreenToturComponent implements OnInit {

  users:any=[];
  constructor(public Temp: TempServiceService) {
    // this.Temp.getUserData().subscribe(users=>{
    //   //console.log(users);
    //   this.users= users;
    // })
   }

  ngOnInit(): void {
  }

}

/***import { Component, OnInit } from '@angular/core';
import { TempServiceService } from '../temp-service.service';


@Component({
  selector: 'app-screen-student',
  templateUrl: './screen-student.component.html',
  styleUrls: ['./screen-student.component.css']
})
export class ScreenStudentComponent implements OnInit {
users:any=[];
  constructor(public Temp: TempServiceService) { 
    this.Temp.getUserData().subscribe(users=>{
      //console.log(users);
      this.users= users;
    })
  }

  

  ngOnInit(): void {
  }

}
 */