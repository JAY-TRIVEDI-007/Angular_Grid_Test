import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {DataService} from "../shared/data.service";
import {
  ContextMenuItem,
  EditSettingsModel, FilterSettingsModel,
  GridComponent,
  PageSettingsModel,
  SearchSettingsModel,
  ToolbarItems
} from "@syncfusion/ej2-angular-grids";
import {IQuestionBank} from "../shared/question-bank.interface";
import {Observable} from "rxjs";
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-questions-bank',
  templateUrl: './questions-bank.component.html',
  styleUrls: ['./questions-bank.component.css']
})
export class QuestionsBankComponent implements OnInit {

  @ViewChild('queGrid') gridRef!: GridComponent;

  // Data Source
  questionBank!: Observable<IQuestionBank[]>;
  errorMsg: string = '';

  // questionBank!: IQuestionBank[];
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

  constructor(@Inject(DOCUMENT) private document: Document, private dataService: DataService) {
    // Question Bank Source from the mock API
    this.questionBank = this.dataService.getQuestionBank();
      // .subscribe({
      // next: questions => {this.questionBank = questions; console.log("Questions Bank -> ", questions);},
      // error: err => this.errorMsg = err
    // });
  }

  ngOnInit(): void {
    // Set options
    this.pageSettings = {pageSize: 5};
    this.searchOption = {
      fields: ['contentID', 'name', 'difficulty', 'type', 'questionBanks'],
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
