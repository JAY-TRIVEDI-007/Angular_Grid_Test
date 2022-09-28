import {InMemoryDbService} from "angular-in-memory-web-api";
import {IQuestion} from "./questions.interface";
import {IQuestionBank} from "./question-bank.interface";


export class QuestionsDataAPI implements InMemoryDbService {

  createDb(): { questions: IQuestion[], questionbanks: IQuestionBank[]} {

    const questions: IQuestion[] = [
      {
        "questionID": 101,
        "name": "Why do we use it?",
        "difficulty": "Easy",
        "type": "True or False",
        "questionBanks": 1
      },
      {
        "questionID": 102,
        "name": "Why do we use it?",
        "difficulty": "Easy",
        "type": "True or False",
        "questionBanks": 1
      },
      {
        "questionID": 103,
        "name": "Why do we use it?",
        "difficulty": "Medium",
        "type": "True or False",
        "questionBanks": 2
      },
      {
        "questionID": 104,
        "name": "Why do we use it?",
        "difficulty": "Hard",
        "type": "True or False",
        "questionBanks": 2
      },
      {
        "questionID": 105,
        "name": "Why do we use it?",
        "difficulty": "Medium",
        "type": "True or False",
        "questionBanks": 3
      },
      {
        "questionID": 106,
        "name": "Why do we use it?",
        "difficulty": "Hard",
        "type": "True or False",
        "questionBanks": 3
      },
      {
        "questionID": 107,
        "name": "Why do we use it?",
        "difficulty": "Medium",
        "type": "True or False",
        "questionBanks": 4
      },
      {
        "questionID": 108,
        "name": "Why do we use it?",
        "difficulty": "Medium",
        "type": "True or False",
        "questionBanks": 4
      },
      {
        "questionID": 109,
        "name": "Why do we use it?",
        "difficulty": "Hard",
        "type": "True or False",
        "questionBanks": 5
      },
      {
        "questionID": 110,
        "name": "Why do we use it?",
        "difficulty": "Easy",
        "type": "True or False",
        "questionBanks": 5
      }
    ];

    const questionbanks: IQuestionBank[] = [
      {
        "contentID": 1,
        "name": "What is Lorem Ipsum? 1",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industries standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "assignedOn": "May 13 2022",
        "lastModifiedOn": "May 13 2022",
        "author": "Alberto Guerra",
        "cmeCredits": "Yes",
        "graded": "Yes",
        "actions": "edit,delete"
      },
      {
        "contentID": 2,
        "name": "What is Lorem Ipsum? 2",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industries standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "assignedOn": "May 14 2022",
        "lastModifiedOn": "May 14 2022",
        "author": "Peter Kilne",
        "cmeCredits": "Yes",
        "graded": "Yes",
        "actions": "edit,delete"
      },
      {
        "contentID": 3,
        "name": "What is Lorem Ipsum? 3",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industries standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "assignedOn": "May 15 2022",
        "lastModifiedOn": "May 15 2022",
        "author": "Alberto Guerra",
        "cmeCredits": "Yes",
        "graded": "No",
        "actions": "edit,delete"
      },
      {
        "contentID": 4,
        "name": "What is Lorem Ipsum? 4",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industries standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "assignedOn": "May 17 2022",
        "lastModifiedOn": "May 17 2022",
        "author": "Peter Kilne",
        "cmeCredits": "No",
        "graded": "Yes",
        "actions": "edit,delete"
      },
      {
        "contentID": 5,
        "name": "What is Lorem Ipsum? 5",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industries standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "assignedOn": "May 21 2022",
        "lastModifiedOn": "May 21 2022",
        "author": "Alberto Guerra",
        "cmeCredits": "Yes",
        "graded": "Yes",
        "actions": "edit,delete"
      }
    ]

    return {questions, questionbanks};
  }
}
