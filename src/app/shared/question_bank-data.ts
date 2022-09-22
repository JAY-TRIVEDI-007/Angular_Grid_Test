import {InMemoryDbService} from "angular-in-memory-web-api";
import {IQuestionBank} from "./question-bank";


export class QuestionBankData implements InMemoryDbService {

  createDb(): { questionbanks: IQuestionBank[] } {

    const questionbanks: IQuestionBank[] = [{
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

    return {questionbanks};
  }
}