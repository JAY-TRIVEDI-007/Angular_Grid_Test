import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataUrl: string = 'assets/data/Questions';
  private questionBankUrl: string = 'assets/data/Question_Banks';

  constructor() { }
}
