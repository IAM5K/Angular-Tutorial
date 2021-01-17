import { Component } from '@angular/core';
import { EnrollmentService } from './enrollment.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  topics=['Topic 1','Topic 2','Topic 3','Topic 4'];
  userModel = new User('Sample Name','test@gmail.com',9874560123,'default','morning',true);
  enrolled=false;
  errorMsg='';

  constructor(private _enrollmentService: EnrollmentService){}



  topicHasError:boolean=true;
  validateTopic(value:any){
    if(value=='default'){
      this.topicHasError=true;
    }
    else{
      this.topicHasError=false;
    }
  }
  onSubmit(){
    this.enrolled=true;
    console.log(this.userModel);
    this._enrollmentService.enroll(this.userModel).subscribe(
      data => console.log('Success',data),
      error => this.errorMsg=error.statusText
    );
  }

}
