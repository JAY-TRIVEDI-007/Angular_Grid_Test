import {InMemoryDbService} from "angular-in-memory-web-api";
import {IQuestion} from "./questions";


export class QuestionsData implements InMemoryDbService {

  createDb(): { questions: IQuestion[] } {

    const questions: IQuestion[] = [
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

    return {questions};
  }
}
