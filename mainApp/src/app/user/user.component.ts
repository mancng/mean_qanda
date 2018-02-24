import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  newUser: object = {name: ""};
  errorMessages: string[] = [];

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
  }

  logInUser(){
    console.log("i'm here")
    this._httpService.loginUser(this.newUser)
    .subscribe((responseData:any)=>{
      console.log('responseData', responseData);
      this.errorMessages = [];
      if(responseData.errors){
        for(var key in responseData.errors){
          this.errorMessages.push(responseData.errors[key].message);
        }
      } else {
        this._router.navigate(['/all']);
      }
    })
  }


}
