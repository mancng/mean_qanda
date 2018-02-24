import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { CreateAnswerComponent } from './create-answer/create-answer.component';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { SingleQuestionComponent } from './single-question/single-question.component';
import { AllQuestionsComponent } from './all-questions/all-questions.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CreateAnswerComponent,
    CreateQuestionComponent,
    SingleQuestionComponent,
    AllQuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
