// Utility functions for quiz operations
import {
  Question,
  Quiz,
  QuizMode,
  QuizProgress,
  QuizStatistics,
} from "../types/quiz";
import {
  clearFromLocalStorage,
  getQuizStorageKey,
  loadFromLocalStorage,
  saveToLocalStorage,
} from "./storage";

/**
 * Get questions based on the selected quiz mode
 * @param quiz - The quiz object
 * @param mode - The quiz mode
 * @param progress - The quiz progress
 * @returns Array of questions based on mode
 */
export const getQuestionsByMode = (
  quiz: Quiz,
  mode: QuizMode,
  progress?: QuizProgress
): Question[] => {
  const { questions } = quiz;
  const answeredQuestions =
    progress?.answeredQuestions.map((q) => q.questionId) || [];
  const filteredQuestions = quiz.questions.filter(
    (q) => !answeredQuestions.includes(q.id)
  );

  switch (mode) {
    case QuizMode.SEQUENTIAL:
      return [...filteredQuestions];

    case QuizMode.RANDOM:
      return shuffleArray([...filteredQuestions]);

    case QuizMode.WRONG_QUESTIONS:
      if (!progress || !progress.wrongQuestionIds.length) {
        return [];
      }
      return questions.filter((q) => progress.wrongQuestionIds.includes(q.id));

    default:
      return [...questions];
  }
};

/**
 * Shuffle an array using Fisher-Yates algorithm
 * @param array - The array to shuffle
 * @returns Shuffled array
 */
export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

/**
 * Get quiz progress from local storage
 * @param quizId - The quiz ID
 * @returns Quiz progress or undefined if not found
 */
export const getQuizProgress = (quizId: string): QuizProgress | undefined => {
  const key = getQuizStorageKey(quizId);
  return loadFromLocalStorage<QuizProgress | undefined>(key, undefined);
};

/**
 * Save quiz progress to local storage
 * @param progress - The quiz progress to save
 */
export const saveQuizProgress = (progress: QuizProgress): void => {
  const key = getQuizStorageKey(progress.quizId);
  saveToLocalStorage(key, progress);
};

/**
 * Clear quiz progress from local storage
 * @param quizId - The quiz ID
 */
export const clearQuizProgress = (quizId: string): void => {
  const key = getQuizStorageKey(quizId);
  clearFromLocalStorage(key);
};

/**
 * Calculate quiz statistics
 * @param quiz - The quiz object
 * @param progress - The quiz progress
 * @returns Quiz statistics
 */
export const calculateQuizStatistics = (
  quiz: Quiz,
  progress?: QuizProgress
): QuizStatistics => {
  if (!progress) {
    return {
      totalQuestions: quiz.questions.length,
      answeredQuestions: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      completion: 0,
    };
  }

  const totalQuestions = quiz.questions.length;
  const answeredQuestions = progress.answeredQuestions.length;
  const correctAnswers = progress.answeredQuestions.filter(
    (a) => a.isCorrect
  ).length;
  const wrongAnswers = answeredQuestions - correctAnswers;
  const completion = (answeredQuestions / totalQuestions) * 100;

  return {
    totalQuestions,
    answeredQuestions,
    correctAnswers,
    wrongAnswers,
    completion,
  };
};

/**
 * Check if a question has been answered
 * @param questionId - The question ID
 * @param progress - The quiz progress
 * @returns True if the question has been answered
 */
export const isQuestionAnswered = (
  questionId: string,
  progress?: QuizProgress
): boolean => {
  if (!progress) return false;
  return progress.answeredQuestions.some((a) => a.questionId === questionId);
};

/**
 * Get the selected option ids for a question
 */
export const getSelectedOptionIds = (
  questionId: string,
  progress?: QuizProgress,
): string[] => {
  if (!progress) return [];
  const answer = progress.answeredQuestions.find(
    (a) => a.questionId === questionId,
  );
  return answer?.selectedOptionIds ?? [];
};

/**
 * Check if all questions have been answered
 * @param quiz - The quiz object
 * @param progress - The quiz progress
 * @returns True if all questions have been answered
 */
export const isQuizCompleted = (
  quiz: Quiz,
  progress?: QuizProgress
): boolean => {
  if (!progress) return false;
  return progress.answeredQuestions.length >= quiz.questions.length;
};
