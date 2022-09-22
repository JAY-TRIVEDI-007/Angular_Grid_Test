import {Component, Inject, Injectable, OnInit, ViewChild} from '@angular/core';
import {IQuestion} from '../shared/questions';
import {
  EditSettings,
  EditSettingsModel, GridComponent,
  PageSettingsModel,
  SearchSettings, SearchSettingsModel,
  ToolbarItems
} from '@syncfusion/ej2-angular-grids';
import { DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @ViewChild('queGrid') gridRef!: GridComponent;

  questions: IQuestion[] = [
    {
      'questionID': '101',
      'name': 'Why do we use it?',
      'difficulty': 'Easy',
      'type': 'True or False',
      'questionBanks': 5
    },
    {
      'questionID': '102',
      'name': 'Why do we use it?',
      'difficulty': 'Easy',
      'type': 'True or False',
      'questionBanks': 4
    },
    {
      'questionID': '103',
      'name': 'Why do we use it?',
      'difficulty': 'Medium',
      'type': 'True or False',
      'questionBanks': 6
    },
    {
      'questionID': '104',
      'name': 'Why do we use it?',
      'difficulty': 'Hard',
      'type': 'True or False',
      'questionBanks': 7
    },
    {
      'questionID': '105',
      'name': 'Why do we use it?',
      'difficulty': 'Medium',
      'type': 'True or False',
      'questionBanks': 8
    },
    {
      'questionID': '106',
      'name': 'Why do we use it?',
      'difficulty': 'Hard',
      'type': 'True or False',
      'questionBanks': 10
    },
    {
      'questionID': '107',
      'name': 'Why do we use it?',
      'difficulty': 'Medium',
      'type': 'True or False',
      'questionBanks': 4
    },
    {
      'questionID': '108',
      'name': 'Why do we use it?',
      'difficulty': 'Medium',
      'type': 'True or False',
      'questionBanks': 4
    },
    {
      'questionID': '109',
      'name': 'Why do we use it?',
      'difficulty': 'Hard',
      'type': 'True or False',
      'questionBanks': 5
    },
    {
      'questionID': '110',
      'name': 'Why do we use it?',
      'difficulty': 'Easy',
      'type': 'True or False',
      'questionBanks': 5
    }
  ];

  // Grid Paging option
  pageSettings!: PageSettingsModel;
  // Edit option
  editOptions!: EditSettingsModel;
  // Toolbar option
  toolbarOptions!: ToolbarItems[];
  // Search Option
  searchOption!: SearchSettingsModel;

  // dataManager: DataManager = new DataManager({
  //   url: 'api/questions',
  //   adaptor: new ODataV4Adaptor()
  // });

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    // Set options
    this.pageSettings = {pageSize: 5};
    this.searchOption = {fields: ['name', 'difficulty', 'type', 'questionBanks'], operator: 'contains', ignoreCase: true};
    this.editOptions = {allowAdding: true, allowEditing: true, allowDeleting: true, mode: 'Normal'};
    this.toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search', 'PdfExport', 'CsvExport'];
  }

  search(): void {
    const searchText: string = (this.document.getElementById('searchtext') as any).value;
    this.gridRef.search(searchText);
    console.log(searchText);
  }

}
