import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import {HttpClient} from '@angular/common/http'

import { TempServiceService } from  './temp-service.service'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http:HttpClient ,public Temp:TempServiceService) { }

  getUserDetails(email: any, password:any){
    //post these details to api server and return user inforamation
    return this.http.post('./api/auth.php',{
        email,
        password
    }).subscribe(data => {
      console.log(data,"is wat wo go feom the server");
    })
    
  }
}
