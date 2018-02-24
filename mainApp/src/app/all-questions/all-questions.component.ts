import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-questions',
  templateUrl: './all-questions.component.html',
  styleUrls: ['./all-questions.component.css']
})
export class AllQuestionsComponent implements OnInit {

  questions: any = [];
  currentUser: object = {name: ""};
  errorMessages: string[] = [];

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
        this.getAllQuestionsFromServer()
        console.log(this.currentUser)
      }
    })
  }

  getAllQuestionsFromServer(){
    let observable = this._httpService.getAllQuestions()
    observable.subscribe(data => {
      this.questions = data;
    })
  }

}
