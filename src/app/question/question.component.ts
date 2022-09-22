import {Component, Inject, Injectable, OnInit, ViewChild} from '@angular/core';
import {IQuestion} from '../shared/questions';
import {
  ContextMenuItem,
  EditSettingsModel, GridComponent,
  PageSettingsModel,
  SearchSettingsModel,
  ToolbarItems
} from '@syncfusion/ej2-angular-grids';
import {DOCUMENT} from "@angular/common";
import {DataService} from "../shared/data.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @ViewChild('queGrid') gridRef!: GridComponent;

  questions!: Observable<IQuestion[]>;
  // Grid Paging option
  pageSettings!: PageSettingsModel;
  // Edit option
  editOptions!: EditSettingsModel;
  // Toolbar option
  toolbarOptions!: ToolbarItems[];
  // Search Option
  searchOption!: SearchSettingsModel;
  // CustomMenuItems
  contextMenuItems!: ContextMenuItem[];
  errorMsg: string = '';

  // dataManager: DataManager = new DataManager({
  //   url: 'api/questions',
  //   adaptor: new ODataV4Adaptor()
  // });

  constructor(@Inject(DOCUMENT) private document: Document, private dataService: DataService) { }

  ngOnInit(): void {
    // Set options
    this.pageSettings = {pageSize: 5};
    this.searchOption = {
      fields: ['name', 'difficulty', 'type', 'questionBanks'],
      operator: 'contains',
      ignoreCase: true
    };
    this.editOptions = {allowAdding: true, allowEditing: true, allowDeleting: true, mode: 'Normal'};
    this.toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'];
    this.contextMenuItems = ['Copy', 'Edit', 'Delete', 'Save', 'Cancel'];

    // Question
    this.questions = this.dataService.getQuestions();
      // .subscribe({
      // next: questions => {this.questions = questions; console.log("Questions -> ", questions);},
      // error: err => this.errorMsg = err
    // });
  }


  search(): void {
    const searchText: string = (this.document.getElementById('searchtext') as any).value;
    this.gridRef.search(searchText);
    console.log(searchText);
  }

}
