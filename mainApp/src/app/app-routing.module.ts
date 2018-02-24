import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllQuestionsComponent } from './all-questions/all-questions.component';
import { UserComponent } from './user/user.component';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { SingleQuestionComponent } from './single-question/single-question.component';
import { CreateAnswerComponent } from './create-answer/create-answer.component';

const routes: Routes = [
  { path:'all', component: AllQuestionsComponent },
  { path:'', component: UserComponent },
  { path:'new_question', component: CreateQuestionComponent },
  { path:'question/:id', component: SingleQuestionComponent },
  { path:'question/new_answer/:id', component: CreateAnswerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
