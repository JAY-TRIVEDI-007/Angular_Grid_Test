import {InMemoryDbService} from "angular-in-memory-web-api";
import {IQuestion} from "./questions";
import {IQuestionBank} from "./question-bank";


export class QuestionsDataAPI implements InMemoryDbService {

  createDb(): { questions: IQuestion[], questionbanks: IQuestionBank[]} {

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

    const questionbanks: IQuestionBank[] = [
      {
        "contentID": "123",
        "name": "What is Lorem Ipsum?",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "assignedOn": "May 13 2022",
        "lastModifiedOn": "May 13 2022",
        "author": "Peter Kilne",
        "cmeCredits": "Yes",
        "graded": "Yes",
        "actions": "edit,delete"
      },
      {
        "contentID": "123",
        "name": "What is Lorem Ipsum?",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "assignedOn": "May 13 2022",
        "lastModifiedOn": "May 13 2022",
        "author": "Peter Kilne",
        "cmeCredits": "Yes",
        "graded": "Yes",
        "actions": "edit,delete"
      }
    ]

    return {questions, questionbanks};
  }
}
