import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { QuestionsBankComponent } from './questions-bank/questions-bank.component';
import { HomeComponent } from './home/home.component';
import {
  ContextMenu, ContextMenuService,
  EditService, ExcelExport, ExcelExportService,
  FilterService,
  GridModule,
  GroupService,
  PageService, PdfExport, PdfExportService, ResizeService, SearchService,
  SortService,
  SortSettings, ToolbarService
} from "@syncfusion/ej2-angular-grids";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {QuestionsData} from "./shared/questions-data";
import {QuestionBankData} from "./shared/question_bank-data";

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
    GridModule,
    InMemoryWebApiModule.forRoot(QuestionsData),
    InMemoryWebApiModule.forRoot(QuestionBankData),
  ],
  providers: [
    PageService,
    SortService,
    FilterService,
    GroupService,
    EditService,
    ToolbarService,
    SearchService,
    PdfExportService,
    ExcelExportService,
    ResizeService,
    ContextMenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
