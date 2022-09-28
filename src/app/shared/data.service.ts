import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {IQuestion} from "./questions.interface";
import {catchError, Observable, tap, throwError} from "rxjs";
import {IQuestionBank} from "./question-bank.interface";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // private dataUrl: string = 'assets/data/Questions';
  private dataUrl: string = 'api/questions';
  private questionBankUrl: string = 'api/questionbanks';

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<IQuestion[]> {
    return this.http.get<IQuestion[]>(this.dataUrl).pipe(
         // tap(data => console.log('Questions All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getQuestionBank(): Observable<IQuestionBank[]> {
    return this.http.get<IQuestionBank[]>(this.questionBankUrl).pipe(
         // tap(data => console.log('Question Bank All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMsg = '';
    if (err.error instanceof ErrorEvent) {
      errorMsg = `An error occured: ${err.error.message}`;
    }
    else {
      errorMsg = `Server returned Code: ${err.status}, error message is: ${err.statusText}`;
    }
    console.error(err);
    return throwError(() => errorMsg);
  }

}
