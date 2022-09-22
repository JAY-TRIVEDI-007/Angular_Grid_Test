import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { QuestionsBankComponent } from './questions-bank/questions-bank.component';
import { HomeComponent } from './home/home.component';
import {GridModule} from "@syncfusion/ej2-angular-grids";

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuestionsBankComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
