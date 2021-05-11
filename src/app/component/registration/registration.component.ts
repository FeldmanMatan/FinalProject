import { NgIf } from '@angular/common';
import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { from } from 'rxjs';
import { TempServiceService } from '../../services/temp-service.service';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  // student= new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   password:new FormControl(''),
  //   confirmPassword:new FormControl(''),
  //   email: new FormControl(''),
  //   phone:new FormControl(''),
  // })

   student= {
    firstName: '',
    lastName: '',
    password:'',
    confirmPassword:'',
    email: '',
    phone:'',
  }

 

  constructor(public Temp: TempServiceService ) { 
  
  }

 
  

  // onSend(a:any){
  
  //   console.log(a.value);
  //   console.log(a.valid);
  //   console.log(this.student);
 
  // }

 



  ngOnInit(): void {
  }


  loginUser(event : any){

    // event.prevetDefult();
    const target= event.target
    const email= target.querySelector('#email').value
    const password= target.querySelector('#password').value

    //this.Auth.getUserDetails(email, password);

    console.log('email=', email);
    console.log('password=', password);
    }

}


