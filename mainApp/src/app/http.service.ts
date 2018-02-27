import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }

  loginUser(userObj){
    console.log("login user");
    return this._http.post('/api/users', userObj);
  }

  getCurrentUser(){
    return this._http.get('/api/users/current');
  }

  addQuestion(questionObj){
    console.log("go create a question");
    return this._http.post('/api/questions', questionObj);
  }

  getAllQuestions(){
    return this._http.get('/api/questions');
  }

  getSingleQuestion(questionId){
    console.log("Go get the Question!");
    return this._http.get(`api/questions/${questionId}`);
  }

  addAnswerByQuestionId(id, newAnswer){
    console.log("Am I being called?")
    return this._http.put(`/api/write/${id}`, newAnswer);
  }

  incrementLike(questionId, answerIdObj){
    console.log("I'm going to add the like")
    console.log(questionId)
    console.log(answerIdObj)
    return this._http.put(`api/write/${questionId}/liked`, answerIdObj);
  }

  deleteQuestion(questionId){
    console.log("I'm calling the server to delete")
    return this._http.delete(`api/questions/${questionId}`);
  }

  logout(){
    console.log("I'm calling the server to logout")
    return this._http.get('/api/users/current/logout');
  }

}
