// Types for quiz application

/**
 * Quiz category type
 */
export interface QuizCategory {
  id: string;
  name: string;
  lecturer: string;
  subcategories: QuizSubcategory[];
}

/**
 * Quiz subcategory type
 */
export interface QuizSubcategory {
  id: string;
  name: string;
  quizId: string;
}

/**
 * Quiz type
 */
export interface Quiz {
  id: string;
  categoryId: string;
  subcategoryId: string;
  title: string;
  questions: Question[];
}

/**
 * Question format types
 */
export enum QuestionType {
  MULTIPLE_CHOICE = "multiple_choice",
  /** User selects one or more options via checkboxes */
  MULTIPLE_SELECT = "multiple_select",
}

/**
 * Shared explanation shape.
 * - `correct`: shown when the user picks the full correct set.
 * - `incorrect`: keyed by option id — shown inline on each wrong option the user selected.
 */
export interface QuestionExplanation {
  correct: string;
  incorrect: Record<string, string>;
}

/**
 * Standard single-answer multiple choice (pick one)
 */
export interface MultipleChoiceQuestion {
  type?: QuestionType.MULTIPLE_CHOICE;
  id: string;
  text: string;
  options: Option[];
  correctOptionId: string;
  explanation: QuestionExplanation;
}

/**
 * Multiple-answer question: user picks one or more options via checkboxes.
 * Supports any number of options and multiple correct answers.
 */
export interface MultipleSelectQuestion {
  type: QuestionType.MULTIPLE_SELECT;
  id: string;
  text: string;
  options: Option[];
  correctOptionIds: string[];
  explanation: QuestionExplanation;
}

/** Question type (discriminated union) */
export type Question = MultipleChoiceQuestion | MultipleSelectQuestion;

/** Option type */
export interface Option {
  id: string;
  text: string;
}

/** Type guard for checkbox multi-select questions */
export const isMultipleSelectQuestion = (
  question: Question,
): question is MultipleSelectQuestion =>
  question.type === QuestionType.MULTIPLE_SELECT;

/** Resolve the correct option id(s) for answer checking */
export const getCorrectOptionIds = (question: Question): string[] =>
  isMultipleSelectQuestion(question)
    ? question.correctOptionIds
    : [question.correctOptionId];

/**
 * Quiz mode type
 */
export enum QuizMode {
  SEQUENTIAL = "sequential",
  RANDOM = "random",
  WRONG_QUESTIONS = "wrong_questions",
}

/**
 * Quiz progress type
 */
export interface QuizProgress {
  quizId: string;
  answeredQuestions: {
    questionId: string;
    /** Selected option ids (one for MCQ, one or more for multi-select) */
    selectedOptionIds: string[];
    isCorrect: boolean;
  }[];
  wrongQuestionIds: string[];
  completedAt?: Date;
}

/**
 * Quiz statistics type
 */
export interface QuizStatistics {
  totalQuestions: number;
  answeredQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  completion: number;
}
