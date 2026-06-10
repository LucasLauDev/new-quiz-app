"use client"
// Quiz page component

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getQuizById } from "@/app/data/quizData";
import { QuestionCard } from "@/app/components/quiz/QuestionCard";
import { StatisticsPanel } from "@/app/components/quiz/StatisticsPanel";
import { ModeSelector } from "@/app/components/quiz/ModeSelector";
import { CompletionScreen } from "@/app/components/quiz/CompletionScreen";
import { Button } from "@/app/components/ui/Button";
import { useQuiz } from "@/app/hooks/useQuiz";
import { QuizMode } from "@/app/types/quiz";

const QuizContent = ({ quizId }: { quizId: string }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  // Get quiz data
  const quiz = getQuizById(quizId);

  // Initialize quiz hook
  const {
    currentQuestion,
    currentQuestionIndex,
    selectedOptionId,
    isAnswerChecked,
    isCorrect,
    quizMode,
    questions,
    progress,
    statistics,
    isCompleted,

    // Actions
    selectOption,
    checkAnswer,
    nextQuestion,
    changeMode,
    resetQuiz,
  } = useQuiz({ quiz: quiz!, initialMode: QuizMode.SEQUENTIAL });

  // Check if quiz exists
  useEffect(() => {
    if (!quiz) {
      router.push("/");
      return;
    }
    setIsLoading(false);
  }, [quiz, router]);

  // Handle mode change
  const handleModeChange = (mode: QuizMode) => {
    // Don't allow wrong questions mode from main quiz
    if (mode === QuizMode.WRONG_QUESTIONS && !isCompleted) {
      return;
    }
    changeMode(mode);
  };

  // Handle try wrong questions
  const handleTryWrongQuestions = () => {
    changeMode(QuizMode.WRONG_QUESTIONS);
  };

  // Handle back to menu
  const handleBackToMenu = () => {
    router.push("/");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
          <p className="mt-2 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 font-sans">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <header className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <div className="mb-4 sm:mb-0 mt-3">
            <h1 className="text-3xl font-bold text-gray-800">{quiz?.title}</h1>
            <p className="text-gray-600 py-2">
              Answer the following questions to test your knowledge.
            </p>
          </div>
          <Button
            onClick={handleBackToMenu}
            variant="outline"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            }
          >
            Main Menu
          </Button>
        </header>

        {/* Quiz content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <main className="lg:col-span-2 space-y-6">
            {isCompleted &&
            currentQuestionIndex === questions.length &&
            quizMode !== QuizMode.WRONG_QUESTIONS ? (
              <CompletionScreen
                statistics={statistics}
                hasWrongAnswers={(progress?.wrongQuestionIds.length ?? 0) > 0}
                onRestart={resetQuiz}
                onTryWrongQuestions={handleTryWrongQuestions}
                onBackToMenu={handleBackToMenu}
              />
            ) : currentQuestionIndex === questions.length &&
              statistics.completion > 100 ? (
              <CompletionScreen
                statistics={statistics}
                hasWrongAnswers={false}
                onRestart={resetQuiz}
                onTryWrongQuestions={handleTryWrongQuestions}
                onBackToMenu={handleBackToMenu}
              />
            ) : questions.length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
                <div className="mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 mx-auto text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No Questions
                </h3>
                <p className="text-gray-600 mb-4">No questions available.</p>
              </div>
            ) : currentQuestion ? (
              <QuestionCard
                question={currentQuestion}
                selectedOptionId={selectedOptionId || null}
                isAnswerChecked={isAnswerChecked}
                isCorrect={isCorrect}
                onSelectOption={selectOption}
                onCheckAnswer={checkAnswer}
                onNextQuestion={nextQuestion}
                isLastQuestion={currentQuestionIndex === questions.length - 1}
              />
            ) : null}
          </main>

          <aside className="space-y-6">
            <StatisticsPanel statistics={statistics} />
            <ModeSelector
              currentMode={quizMode}
              onModeChange={handleModeChange}
              showWrongQuestionsMode={
                isCompleted && (progress?.wrongQuestionIds.length ?? 0) > 0
              }
            />
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <h3 className="font-medium text-gray-900 mb-3">Actions</h3>
              <Button
                onClick={resetQuiz}
                variant="outline"
                fullWidth
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
              >
                Restart Quiz
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default QuizContent;
