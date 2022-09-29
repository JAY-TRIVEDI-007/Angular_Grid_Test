import {Component, ElementRef, Inject, Injectable, OnInit, ViewChild} from '@angular/core';
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
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {IQuestionBank} from "../shared/question-bank.interface";
import {ItemModel} from "@syncfusion/ej2-angular-splitbuttons";
import {DialogComponent} from "@syncfusion/ej2-angular-popups";

declare var bootstrap: any;

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @ViewChild('queGrid') gridRef!: GridComponent;
  @ViewChild('recordFromModal') recordDialog!: DialogComponent;
  // @ViewChild('dialogContainer', {read: ElementRef}) dialogContainer!: ElementRef;

  questions!: Observable<IQuestion[]>;
  errorMsg: string = '';
  successMsg: string = '';
  questionBanks: IQuestionBank[];
  // targetContainer!: HTMLElement;

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
  // contextMenuItems!: ContextMenuItem[];
  // Action DropDown
  actionList: ItemModel[] = [
    {text: 'Edit'},
    {text: 'Copy'},
    {text: 'Delete'},
  ]

  // private isEditMode: boolean = false;
  // private editRowIndex: number = -1;

  // Modal form
  gridForm: FormGroup = new FormGroup({
    rowIndex: new FormControl(-1),
    questionID: new FormControl(0),
    name: new FormControl('', [Validators.required]),
    difficulty: new FormControl('Easy', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    questionBanks: new FormControl('', [Validators.required]),
  })

  get nameControl(): AbstractControl { return this.gridForm.get('name'); }
  get difficulty(): AbstractControl { return this.gridForm.get('difficulty'); }
  get typeControl(): AbstractControl { return this.gridForm.get('type'); }
  get questionBank(): AbstractControl { return this.gridForm.get('questionBanks'); }

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
      fields: ['name', 'difficulty', 'type', 'questionBanks'],
      operator: 'contains',
      ignoreCase: true
    };
    this.editOptions = {allowAdding: true, allowEditing: false, allowDeleting: true, mode: 'Normal'};
    // this.toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'];
    this.filterOptions = {type: 'Menu'};
    // this.contextMenuItems = ['Copy', 'Edit', 'Delete', 'Save', 'Cancel'];

    // Dialog
    // this.targetContainer = this.dialogContainer.nativeElement.parentElement;
    // this.initilaizeTarget();
  }

  ngAfterViewInit(): void {
    document.onclick = (args: any) : void => {
      if(args.target.tagName === 'BODY') {
        this.recordDialog.hide();
      }
    }
  }

  // initilaizeTarget: EmitType<object> = () => {
  //   this.targetContainer = this.document.body;
  // }

  search(): void {
    const searchText: string = (this.document.getElementById('search-input') as any).value;
    if (searchText) {
      this.gridRef.search(searchText);
    }
    else {
      this.gridRef.searchSettings.key = '';
    }
  }

  openModal(data?: any): void {
    if (data) {
      // this.nameControl.setValue(data.name);
      this.gridForm.setValue({
        rowIndex: data.rowIndex,
        questionID: data.questionID,
        name: data.name,
        difficulty: data.difficulty,
        type: data.type,
        questionBanks: data.questionBanks,
      });
    }

    this.dataService.getQuestionBank().subscribe({
      next: questionbanks => {
          this.questionBanks = questionbanks;
        },
      error: err => this.errorMsg = err
    });
    this.recordDialog.show();
  }

  closeModal(): void {
    this.recordDialog.hide();
    this.gridForm.reset();
    // this.isEditMode = false;
    // this.editRowIndex = -1;
  }

  saveAddForm(): void {
    if(this.gridForm.valid) {
     let record = this.gridForm.value;
     record.questionBanks = +record.questionBanks;
    // console.log(record);
    // console.log("Edit Mode: "+ this.isEditMode);
    // console.log("Edit Row Index: "+ this.editRowIndex);

     if (record.rowIndex !== -1) {
       this.gridRef.updateRow(record.rowIndex, record);
       this.gridRef.refresh();
       this.successMsg = 'Record Updated.';
       // console.log("Row updated");
     }
     else {
       this.gridRef.addRecord(record);
       this.successMsg = 'Record Added.';
     }

     this.closeModal();
    }
  }

  performAction(event: any, data: any): void {
    // console.log(event);
    // console.log(data);
    // const rowIndex = data.index;

    let recordData = {
      questionID: data.questionID,
      name: data.name,
      difficulty: data.difficulty,
      type: data.type,
      questionBanks: data.questionBanks,
    };
    // console.log(recordData);

    // Perform Action
    if (event.item?.properties) {
      const actionType = event.item.properties.text;
      // console.log(actionType);

      if (actionType === "Edit") {
        // Add Data to form
        // this.isEditMode = true;
        // this.editRowIndex = data.index;
        recordData['rowIndex'] = +data.index;
        // console.log(recordData);
        // Open Edit Modal
        this.openModal(recordData);

        // this.gridRef.updateRow(rowIndex, recordData);
        // this.gridRef.startEdit();
      }
      else if (actionType === "Delete") {
        this.gridRef.deleteRecord('questionID', recordData);
        this.successMsg = "Record Deleted.";
        this.hideNotification();
      }
      else {
        this.gridRef.copy();
        this.successMsg = "Record Copied.";
        this.hideNotification();
      }
    }
    // console.log(data.index);
    // console.log(data.name);
    // console.log(data.column);
  }

  private hideNotification(): void {
    setTimeout( () => {
      bootstrap.Alert.getOrCreateInstance(this.document.querySelector(".alert")).close();
    }, 3500);
  }

}
