import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-create-answer',
  templateUrl: './create-answer.component.html',
  styleUrls: ['./create-answer.component.css']
})
export class CreateAnswerComponent implements OnInit {

  currentUser: any = {name: ""};
  questionToAnswer: any = {_id: "", questionContent: "", questionDesc: "", answers: [], writer: "" }
  questionId: string;
  errorMessages: string[] = [];
  questionContent: string;
  questionDesc: string;
  answerContent: string;
  answerDesc: string;
  
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
        this._route.paramMap.subscribe((params)=>{
          this._httpService.getSingleQuestion(params.get('id'))
          .subscribe((responseData)=>{
            this.questionToAnswer = responseData;
            this.questionContent = this.questionToAnswer.questionContent;
            this.questionDesc = this.questionToAnswer.questionDesc;
            this.questionId = this.questionToAnswer._id;
          })
        })
      }
    })
  }

  createAnswer(){
    this._httpService.addAnswerByQuestionId(this.questionId,{"answers":[{
    "answerContent": this.answerContent, "answerDesc": this.answerDesc, "writer": this.currentUser.name}]})
    .subscribe((responseData:any)=>{
      console.log('responseData', responseData);
      this.errorMessages = [];
      if(responseData.error){
        for(var key in responseData.error.errors){
          this.errorMessages.push(responseData.error.errors[key].message);
        } 
      } else {
        this._router.navigate(['/question/'+ this.questionId]);
      }
    })
  }

  logoutThruService(){
    console.log("Logout clicked!");
    this._httpService.logout()
    .subscribe((responseData:any)=>{
      this.errorMessages = [];
      if(responseData.errors){
        for(var key in responseData.errors){
          this.errorMessages.push(responseData.errors[key].message);
        }
      } else {
        this._router.navigate([''])
      }
    })
  }

}

