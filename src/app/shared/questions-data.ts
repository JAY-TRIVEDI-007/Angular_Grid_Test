import {InMemoryDbService} from "angular-in-memory-web-api";
import {IQuestion} from "./questions.interface";
import {IQuestionBank} from "./question-bank.interface";


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
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industries standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "assignedOn": "May 13 2022",
        "lastModifiedOn": "May 13 2022",
        "author": "Alberto Guerra",
        "cmeCredits": "Yes",
        "graded": "Yes",
        "actions": "edit,delete"
      },
      {
        "contentID": "124",
        "name": "What is Lorem Ipsum?",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industries standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "assignedOn": "May 14 2022",
        "lastModifiedOn": "May 14 2022",
        "author": "Peter Kilne",
        "cmeCredits": "Yes",
        "graded": "Yes",
        "actions": "edit,delete"
      },
      {
        "contentID": "125",
        "name": "What is Lorem Ipsum?",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industries standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "assignedOn": "May 15 2022",
        "lastModifiedOn": "May 15 2022",
        "author": "Alberto Guerra",
        "cmeCredits": "Yes",
        "graded": "No",
        "actions": "edit,delete"
      },
      {
        "contentID": "126",
        "name": "What is Lorem Ipsum?",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industries standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "assignedOn": "May 17 2022",
        "lastModifiedOn": "May 17 2022",
        "author": "Peter Kilne",
        "cmeCredits": "No",
        "graded": "Yes",
        "actions": "edit,delete"
      },
      {
        "contentID": "127",
        "name": "What is Lorem Ipsum?",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industries standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "assignedOn": "May 21 2022",
        "lastModifiedOn": "May 21 2022",
        "author": "Alberto Guerra",
        "cmeCredits": "Yes",
        "graded": "Yes",
        "actions": "edit,delete"
      }
,
      {
        "contentID": "128",
        "name": "What is Lorem Ipsum?",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industries standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "assignedOn": "May 20 2022",
        "lastModifiedOn": "May 20 2022",
        "author": "Peter Kilne",
        "cmeCredits": "No",
        "graded": "No",
        "actions": "edit,delete"
      }
,
      {
        "contentID": "129",
        "name": "What is Lorem Ipsum?",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industries standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "assignedOn": "May 25 2022",
        "lastModifiedOn": "May 25 2022",
        "author": "Dario Guerra",
        "cmeCredits": "Yes",
        "graded": "Yes",
        "actions": "edit,delete"
      }
,
      {
        "contentID": "130",
        "name": "What is Lorem Ipsum?",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industries standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "assignedOn": "May 23 2022",
        "lastModifiedOn": "May 23 2022",
        "author": "Peter Kilne",
        "cmeCredits": "Yes",
        "graded": "Yes",
        "actions": "edit,delete"
      }
,
      {
        "contentID": "131",
        "name": "What is Lorem Ipsum?",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industries standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "assignedOn": "May 27 2022",
        "lastModifiedOn": "May 27 2022",
        "author": "Dario Guerra",
        "cmeCredits": "No",
        "graded": "Yes",
        "actions": "edit,delete"
      }
,
      {
        "contentID": "132",
        "name": "What is Lorem Ipsum?",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industries standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "assignedOn": "May 30 2022",
        "lastModifiedOn": "May 30 2022",
        "author": "Dario Guerra",
        "cmeCredits": "Yes",
        "graded": "No",
        "actions": "edit,delete"
      }
    ]

    return {questions, questionbanks};
  }
}
