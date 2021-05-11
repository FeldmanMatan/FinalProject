import { Component } from '@angular/core';
import { from } from 'rxjs';
import { CourseService } from "../app/services/course.service";
import { TempServiceService} from '../app/services/temp-service.service';

export type EditorType = "name";

interface myData{
  obj: Object
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'FinalProject';
    ga_results_path: string = "/ga-results";
    Temp={};

    constructor(public TempService:TempServiceService,public courseService: CourseService){
      
    }

    ngOnInit(){
      this.Temp=this.TempService.getUserData().subscribe(data => {
        this.Temp=data.obj})

      console.log("Server running on IP: ", this.courseService.ROOT_URL_local);
          this.courseService.get__all_courses(); 
    }

    async onSubmitGA() {
      await this.courseService.submitGA(this.courseService.getstruct());
      console.log("transition");
      //this.router.navigate(["/ga-results"]);
    }

}


////** // "start": "ng serve",*/--> packagejson