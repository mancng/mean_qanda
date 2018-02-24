import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent implements OnInit {

  newQuestion: object = {questionContent: "", questionDesc: ""};
  errorMessages: string[] = [];
  currentUser: object = {name: ""};

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this._httpService.getCurrentUser()
    .subscribe((responseData: any)=>{
      console.log('responseData', responseData)
      if(responseData.errors){
        this._router.navigate(['']);
        console.log(this.currentUser)
      } else {
        this.currentUser = responseData;
        console.log(this.currentUser)
      }
    })
  }

  createQuestion(){
    this._httpService.addQuestion(this.newQuestion)
    .subscribe((responseData:any)=>{
      console.log('responseData', responseData);
      this.errorMessages = [];
      if(responseData.errors){
        for(var key in responseData.message.errors){
          this.errorMessages.push(responseData.errors[key].message);
        }
      } else {
        this._router.navigate(['/all']);
      }
    })
  }

}
