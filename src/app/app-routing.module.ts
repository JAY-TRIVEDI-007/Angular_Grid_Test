import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {QuestionComponent} from "./question/question.component";
import {QuestionsBankComponent} from "./questions-bank/questions-bank.component";

const routes: Routes = [
  {path: 'questions-bank', component: QuestionsBankComponent},
  {path: 'questions', component: QuestionComponent},
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
