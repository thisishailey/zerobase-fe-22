export interface Question {
    id: number;
    question: string;
    answerA: string;
    answerB: string;
    questionType: QuestionType;
}

export type QuestionType = ['E', 'I'] | ['S', 'N'] | ['T', 'F'] | ['P', 'J'];
