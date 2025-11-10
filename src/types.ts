export type QuestionType = "multiple" | "boolean";

export interface Question {
  id: number;
  question: string;
  type: QuestionType;
  options?: string[];
  correctAnswer: string | number | boolean;
}

export type Answers = Record<number, string | number | boolean>;
