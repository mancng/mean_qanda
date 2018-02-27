import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-single-question',
  templateUrl: './single-question.component.html',
  styleUrls: ['./single-question.component.css']
})
export class SingleQuestionComponent implements OnInit {

  questionToAnswer: any = {_id: "", questionContent: "", questionDesc: "", answers: [] }
  questionId: string;
  errorMessages: string[] = [];
  questionContent: string;
  questionDesc: string;
  currentUser: object = {name: ""};
  showAnswers: object[] = [];

  constructor(private _route: ActivatedRoute, private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this._httpService.getCurrentUser()
    .subscribe((responseData: any)=>{
      console.log('responseData', responseData)
      if(responseData.errors){
        this._router.navigate(['']);
        console.log(this.currentUser)
      } else {
        this.currentUser = responseData;
        console.log("i'm calling the service")
        this.getData();
      }
    })
  }

  getData(){
    this._route.paramMap.subscribe((params)=>{
      this._httpService.getSingleQuestion(params.get('id'))
      .subscribe((responseData)=>{
        console.log(responseData);
        this.questionToAnswer = responseData;
        this.questionContent = this.questionToAnswer.questionContent;
        this.questionDesc = this.questionToAnswer.questionDesc;
        this.showAnswers = this.questionToAnswer.answers;
        this.questionId = this.questionToAnswer._id;
        console.log(this.showAnswers)
        //To sort order by number of like at the top
        this.questionToAnswer.answers = this.questionToAnswer.answers.sort(function(a,b){
          return b.likes-a.likes;
        })
      })
    })
  }

  liked(id){
    const answerIdObj = {answerId: id}
    console.log("questionid: " + this.questionId)
    console.log(answerIdObj)
    this._httpService.incrementLike(this.questionId, answerIdObj)
    .subscribe((responseData:any)=>{
      this.errorMessages = []
      if(responseData.errors){
        for(var key in responseData.errors){
          this.errorMessages.push(responseData.errors[key].message);
        }
      } else {
        this.getData();
      }
    })
  }

  deleteQuestion(){
    console.log("I'm going to delete the question")
    console.log(this.questionId);
    this._httpService.deleteQuestion(this.questionId)
    .subscribe((responseData: any)=>{
      console.log('responseDta', responseData)
      this.errorMessages = [];
      if(responseData.errors){
        for(var key in responseData.errors){
          this.errorMessages.push(responseData.errors[key].message);
        }
      } else {
        console.log("Are you here?")
        this._router.navigate(['/all']);
      }
    })
  }

  testing(){
    console.log("Testing clicked.")
  }

}
