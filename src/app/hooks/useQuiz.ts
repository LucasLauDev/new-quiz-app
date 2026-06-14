// Custom hook for managing quiz state
import { useState, useEffect } from "react";
import {
  Question,
  Quiz,
  QuizMode,
  QuizProgress,
  QuizStatistics,
  isMultipleSelectQuestion,
} from "../types/quiz";
import { isAnswerCorrect } from "../utils/questionUtils";
import {
  calculateQuizStatistics,
  clearQuizProgress,
  getQuestionsByMode,
  getQuizProgress,
  isQuizCompleted,
  saveQuizProgress,
} from "../utils/quizUtils";

interface UseQuizProps {
  quiz: Quiz;
  initialMode?: QuizMode;
}

interface UseQuizReturn {
  currentQuestion: Question | null;
  currentQuestionIndex: number;
  selectedOptionIds: string[];
  isAnswerChecked: boolean;
  isCorrect: boolean | null;
  quizMode: QuizMode;
  questions: Question[];
  progress: QuizProgress | undefined;
  statistics: QuizStatistics;
  isCompleted: boolean;

  selectOption: (optionId: string) => void;
  checkAnswer: () => void;
  nextQuestion: () => void;
  changeMode: (mode: QuizMode) => void;
  resetQuiz: () => void;
}

/**
 * Manages quiz state for both single-select (MCQ) and multi-select (checkbox) questions.
 */
export const useQuiz = ({
  quiz,
  initialMode = QuizMode.SEQUENTIAL,
}: UseQuizProps): UseQuizReturn => {
  const [progress, setProgress] = useState<QuizProgress | undefined>();
  const [quizMode, setQuizMode] = useState<QuizMode>(initialMode);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIds, setSelectedOptionIds] = useState<string[]>([]);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  useEffect(() => {
    const savedProgress = getQuizProgress(quiz.id);
    setProgress(savedProgress);

    const modeQuestions = getQuestionsByMode(quiz, quizMode, savedProgress);
    setQuestions(modeQuestions);

    setCurrentQuestionIndex(0);
    setSelectedOptionIds([]);
    setIsAnswerChecked(false);
    setIsCorrect(null);
  }, [quiz, quizMode]);

  const currentQuestion =
    questions.length > 0 ? questions[currentQuestionIndex] : null;

  const statistics = calculateQuizStatistics(quiz, progress);
  const isCompleted = isQuizCompleted(quiz, progress);

  /**
   * MCQ: replaces selection with the clicked option.
   * Multi-select: toggles the clicked option in the selection array.
   */
  const selectOption = (optionId: string) => {
    if (isAnswerChecked || !currentQuestion) return;

    if (isMultipleSelectQuestion(currentQuestion)) {
      setSelectedOptionIds((prev) =>
        prev.includes(optionId)
          ? prev.filter((id) => id !== optionId)
          : [...prev, optionId],
      );
    } else {
      setSelectedOptionIds([optionId]);
    }
  };

  const checkAnswer = () => {
    if (!currentQuestion || selectedOptionIds.length === 0 || isAnswerChecked) {
      return;
    }

    const answerCorrect = isAnswerCorrect(currentQuestion, selectedOptionIds);
    setIsCorrect(answerCorrect);
    setIsAnswerChecked(true);

    const updatedProgress: QuizProgress = progress
      ? { ...progress }
      : {
          quizId: quiz.id,
          answeredQuestions: [],
          wrongQuestionIds: [],
        };

    updatedProgress.answeredQuestions.push({
      questionId: currentQuestion.id,
      selectedOptionIds: [...selectedOptionIds],
      isCorrect: answerCorrect,
    });

    if (!answerCorrect) {
      if (!updatedProgress.wrongQuestionIds.includes(currentQuestion.id)) {
        updatedProgress.wrongQuestionIds.push(currentQuestion.id);
      }
    } else {
      updatedProgress.wrongQuestionIds =
        updatedProgress.wrongQuestionIds.filter(
          (id) => id !== currentQuestion.id,
        );
    }

    saveQuizProgress(updatedProgress);
    setProgress(updatedProgress);
  };

  const nextQuestion = () => {
    if (!isAnswerChecked) return;

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOptionIds([]);
      setIsAnswerChecked(false);
      setIsCorrect(null);
    } else {
      const updatedProgress = { ...progress! };
      updatedProgress.completedAt = new Date();
      saveQuizProgress(updatedProgress);
      setProgress(updatedProgress);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const changeMode = (mode: QuizMode) => {
    if (mode === quizMode) return;
    setQuizMode(mode);
  };

  const resetQuiz = () => {
    clearQuizProgress(quiz.id);
    setProgress(undefined);
    setCurrentQuestionIndex(0);
    setSelectedOptionIds([]);
    setIsAnswerChecked(false);
    setIsCorrect(null);

    const modeQuestions = getQuestionsByMode(
      quiz,
      QuizMode.SEQUENTIAL,
      undefined,
    );
    setQuestions(modeQuestions);
    setQuizMode(QuizMode.SEQUENTIAL);
  };

  return {
    currentQuestion,
    currentQuestionIndex,
    selectedOptionIds,
    isAnswerChecked,
    isCorrect,
    quizMode,
    questions,
    progress,
    statistics,
    isCompleted,
    selectOption,
    checkAnswer,
    nextQuestion,
    changeMode,
    resetQuiz,
  };
};
