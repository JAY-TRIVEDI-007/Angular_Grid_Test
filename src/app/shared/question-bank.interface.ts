export interface IQuestionBank {
  contentID: string;
  name: string;
  description: string;
  assignedOn: string;
  lastModifiedOn?: string;
  author: string;
  cmeCredits?: string;
  graded: string;
  actions: string;
}
