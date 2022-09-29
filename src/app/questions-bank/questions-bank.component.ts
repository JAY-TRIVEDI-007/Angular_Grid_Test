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
import {ItemModel} from "@syncfusion/ej2-angular-splitbuttons";
import {DialogComponent} from "@syncfusion/ej2-angular-popups";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

declare var bootstrap: any;

@Component({
  selector: 'app-questions-bank',
  templateUrl: './questions-bank.component.html',
  styleUrls: ['./questions-bank.component.css']
})
export class QuestionsBankComponent implements OnInit {

  @ViewChild('queGrid') gridRef!: GridComponent;
  @ViewChild('recordFromModal') recordDialog!: DialogComponent;

  // Data Source
  questionBank!: Observable<IQuestionBank[]>;
  errorMsg: string = '';
  successMsg: string = '';
  // todayDate: any = '';

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
  // contextMenuItems!: ContextMenuItem[];
  // Action DropDown
  actionList: ItemModel[] = [
    {text: 'Edit'},
    {text: 'Copy'},
    {text: 'Delete'},
  ]

  // Modal form
  gridForm: FormGroup = new FormGroup({
    rowIndex: new FormControl(-1),
    contentID: new FormControl(0),
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    assignedOn: new FormControl('', [Validators.required]),
    lastModifiedOn: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required]),
    cmeCredits: new FormControl(true),
    graded: new FormControl(false),
    actions: new FormControl('edit, delete'),
  })

  get nameControl(): AbstractControl { return this.gridForm.get('name'); }
  get description(): AbstractControl { return this.gridForm.get('description'); }
  get assigned(): AbstractControl { return this.gridForm.get('assignedOn'); }
  get lastModified(): AbstractControl { return this.gridForm.get('lastModifiedOn'); }
  get author(): AbstractControl { return this.gridForm.get('author'); }
  get cmeCredits(): AbstractControl { return this.gridForm.get('cmeCredits'); }
  get graded(): AbstractControl { return this.gridForm.get('graded'); }


  constructor(@Inject(DOCUMENT) private document: Document, private dataService: DataService) {
    // Question Bank Source from the mock API
    this.questionBank = this.dataService.getQuestionBank();
      // .subscribe({
      // next: questions => {this.questionBank = questions; console.log("Questions Bank -> ", questions);},
      // error: err => this.errorMsg = err
    // });
    // const dt = new Date();
    // this.todayDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
    // this.todayDate = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
    // this.todayDate = dt;
    // this.todayDate = this.formatDate(dt.toString());
  }

  ngOnInit(): void {
    // Set options
    this.pageSettings = {pageSize: 5};
    this.searchOption = {
      fields: ['name', 'description', 'assignedOn', 'lastModifiedOn', 'author', 'cmeCredits'],
      operator: 'contains',
      ignoreCase: true
    };
    this.editOptions = {allowAdding: true, allowEditing: false, allowDeleting: true, mode: 'Normal'};
    // this.toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'];
    this.filterOptions = {type: 'Menu'};
    // this.contextMenuItems = ['Copy', 'Edit', 'Delete', 'Save', 'Cancel'];

  }

  ngAfterViewInit(): void {
    document.onclick = (args: any) : void => {
      if(args.target.tagName === 'BODY') {
        this.recordDialog.hide();
      }
    }
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

  openModal(data?: any): void {
    if (data) {
      // this.nameControl.setValue(data.name);
      this.gridForm.setValue({
        rowIndex: data.rowIndex,
        contentID: data.contentID,
        name: data.name,
        description: data.description,
        assignedOn: data.assignedOn,
        lastModifiedOn: data.lastModifiedOn,
        author: data.author,
        cmeCredits: data.cmeCredits,
        graded: data.graded,
        actions: data.actions
      });
    }
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
      record.assignedOn = this.formatDate(record.assignedOn);
      record.lastModifiedOn = this.formatDate(record.lastModifiedOn);
      record.graded = record.graded ? 'Yes' : 'No';
      record.cmeCredits = record.cmeCredits ? 'Yes' : 'No';
      console.log(record);
      // console.log("Edit Mode: "+ this.isEditMode);
      // console.log("Edit Row Index: "+ this.editRowIndex);

      if (record.rowIndex !== -1) {
        this.gridRef.updateRow(record.rowIndex, record);
        this.gridRef.refresh();
        this.successMsg = 'Record Updated.';
        this.hideNotification();
      }
      else {
        this.gridRef.addRecord(record);
        this.successMsg = 'Record Added.';
        this.hideNotification();
      }

      this.closeModal();
    }
  }

  performAction(event: any, data: any): void {
    // console.log(event);
    // console.log(data);
    // const rowIndex = data.index;

    let recordData = {
      contentID: data.contentID,
      name: data.name,
      description: data.description,
      assignedOn: data.assignedOn,
      lastModifiedOn: data.lastModifiedOn,
      author: data.author,
      cmeCredits: data.cmeCredits,
      graded: data.graded,
      actions: data.actions,
    };
    // console.log(recordData);

    // Perform Action
    if (event.item?.properties) {
      const actionType = event.item.properties.text;
      // console.log(actionType);

      if (actionType === "Edit") {
        // Add Data to form
        recordData['rowIndex'] = +data.index;
        recordData.graded = recordData.graded === "Yes";
        recordData.cmeCredits = recordData.cmeCredits === "Yes";
        console.log(recordData);
        // Open Edit Modal
        this.openModal(recordData);
      }
      else if (actionType === "Delete") {
        this.gridRef.deleteRecord('contentID', recordData);
        this.successMsg = 'Record Deleted.';
        this.hideNotification();
      }
      else {
        this.gridRef.copy();
        this.successMsg = 'Record Copied.';
        this.hideNotification();
      }
    }
    // console.log(data.index);
    // console.log(data.name);
    // console.log(data.column);
  }

  private formatDate(date: string): string {
    const dto = new Date(date);
    const options: any = {month: 'long' };
    return `${dto.toLocaleString(undefined, options)} ${dto.getDate()} ${dto.getFullYear()}`;
  }

  private hideNotification(): void {
    setTimeout( () => {
      bootstrap.Alert.getOrCreateInstance(this.document.querySelector(".alert")).close();
    }, 3500);
  }

}
