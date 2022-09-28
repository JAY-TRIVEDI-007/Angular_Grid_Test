import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { QuestionsBankComponent } from './questions-bank/questions-bank.component';
import { HomeComponent } from './home/home.component';
import {
  CommandColumnService,
  ContextMenuService,
  EditService,
  FilterService,
  GridModule,
  // GroupService,
  PageService, ResizeService, SearchService,
  SortService,
  ToolbarService
} from "@syncfusion/ej2-angular-grids";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {QuestionsDataAPI} from "./shared/questions-data";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DropDownButtonModule} from "@syncfusion/ej2-angular-splitbuttons";
import {DialogModule} from "@syncfusion/ej2-angular-popups";
// import {DropDownListAllModule, DropDownTreeAllModule} from "@syncfusion/ej2-angular-dropdowns";
// import {CheckBoxAllModule} from "@syncfusion/ej2-angular-buttons";

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuestionsBankComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DropDownButtonModule,
    DialogModule,
    GridModule,
    InMemoryWebApiModule.forRoot(QuestionsDataAPI),
  ],
  providers: [
    PageService,
    SortService,
    FilterService,
    // GroupService,
    EditService,
    SearchService,
    ResizeService,
    ContextMenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
