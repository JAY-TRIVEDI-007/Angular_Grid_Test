import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from "../shared/data.service";
import {
  ContextMenuItem,
  EditSettingsModel,
  GridComponent,
  PageSettingsModel,
  SearchSettingsModel,
  ToolbarItems
} from "@syncfusion/ej2-angular-grids";
import {IQuestionBank} from "../shared/question-bank.interface";
import {Observable} from "rxjs";

@Component({
  selector: 'app-questions-bank',
  templateUrl: './questions-bank.component.html',
  styleUrls: ['./questions-bank.component.css']
})
export class QuestionsBankComponent implements OnInit {

  @ViewChild('queGrid') gridRef!: GridComponent;

  // Data Source
  questionBank!: Observable<IQuestionBank[]>;
  // questionBank!: IQuestionBank[];
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

  constructor(private dataService: DataService) {
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
      fields: ['name', 'difficulty', 'type', 'questionBanks'],
      operator: 'contains',
      ignoreCase: true
    };
    this.editOptions = {allowAdding: true, allowEditing: true, allowDeleting: true, mode: 'Normal'};
    this.toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'];
    this.contextMenuItems = ['Copy', 'Edit', 'Delete', 'Save', 'Cancel'];
  }

}
