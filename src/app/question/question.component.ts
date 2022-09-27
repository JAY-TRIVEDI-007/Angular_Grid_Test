import {Component, Inject, Injectable, OnInit, ViewChild} from '@angular/core';
import {IQuestion} from '../shared/questions.interface';
import {
  ContextMenuItem,
  EditSettingsModel, FilterSettingsModel, GridComponent,
  PageSettingsModel,
  SearchSettingsModel,
  ToolbarItems
} from '@syncfusion/ej2-angular-grids';
import {DOCUMENT} from "@angular/common";
import {DataService} from "../shared/data.service";
import {Observable} from "rxjs";
import { Button } from '@syncfusion/ej2-buttons';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @ViewChild('queGrid') gridRef!: GridComponent;

  questions!: Observable<IQuestion[]>;
  errorMsg: string = '';

  // Grid Paging option
  pageSettings!: PageSettingsModel;
  // Edit option
  editOptions!: EditSettingsModel;
  // Toolbar option
  toolbarOptions!: ToolbarItems[];
  // Search Option
  searchOption!: SearchSettingsModel;
  // Filter options
  filterOptions!: FilterSettingsModel;
  // CustomMenuItems
  contextMenuItems!: ContextMenuItem[];

  // dataManager: DataManager = new DataManager({
  //   url: 'api/questions',
  //   adaptor: new ODataV4Adaptor()
  // });

  constructor(@Inject(DOCUMENT) private document: Document, private dataService: DataService) {
    // Question
    this.questions = this.dataService.getQuestions();
    // .subscribe({
    // next: questions => {this.questions = questions; console.log("Questions -> ", questions);},
    // error: err => this.errorMsg = err
    // });
  }

  ngOnInit(): void {
    // Set options
    this.pageSettings = {pageSize: 5};
    this.searchOption = {
      fields: ['questionID', 'name', 'difficulty', 'type', 'questionBanks'],
      operator: 'contains',
      ignoreCase: true
    };
    this.editOptions = {allowAdding: true, allowEditing: true, allowDeleting: true, mode: 'Normal'};
    // this.toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'];
    this.filterOptions = {type: 'Menu'};
    this.contextMenuItems = ['Copy', 'Edit', 'Delete', 'Save', 'Cancel'];
  }

  search(): void {
    const searchText: string = (this.document.getElementById('search-input') as any).value;
    if (searchText) {
      this.gridRef.search(searchText);
    }
    else {
      this.gridRef.searchSettings.key = '';
    }
  }

}
