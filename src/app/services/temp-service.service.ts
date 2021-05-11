import { Injectable } from '@angular/core';
import { from } from 'rxjs';

import {HttpClient} from '@angular/common/http';
import { getLocaleDateFormat } from '@angular/common';
import { AuthService } from './auth.service'

interface myData{
  obj: Object
}

@Injectable({
  providedIn: 'root'
})
export class TempServiceService {

  // student= {
  //   firstName: '',
  //   lastName: '',
  //   password:'',
  //   confirmPassword:'',
  //   email: '',
  //   phone:'',
  // }

  constructor(public Http:HttpClient) {
    
    }
    
    // getUserDetails(email: any, password:any){
    //   //post these details to api server and return user inforamation
    //   //return this.Http.get('http://jsonplaceholder.typicode.com/users');
    // }

    getUserData(){
      //post these details to api server and return user inforamation
      return this.Http.get<myData>('http://localhost:3000/obj')
      // .subscribe(data =>{
      //   console.log("we got",data.obj)
      // }
      // )
    }

    registerUser(email:any, password:any)  {
      return this.Http.post('./api/register',{
        email,
        password
      })

      
    }

    // getData(){
    //   return this.Http.get<myData>('/api/auth.php')
    
    //   }
    // }

  }