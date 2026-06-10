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
      <div className="min-h-screen mesh-gradient flex items-center justify-center p-4">
        <div className="glass-panel max-w-xs w-full py-8 px-6 rounded-2xl border border-white/60 shadow-lg text-center flex flex-col items-center justify-center">
          <div className="relative mb-5">
            <div className="w-16 h-16 rounded-full border-4 border-slate-100 border-t-indigo-600 animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center text-2xl animate-pulse-subtle">
              🧠
            </div>
          </div>
          <p className="text-slate-800 font-bold tracking-wide text-sm">Preparing Quiz...</p>
          <p className="text-slate-400 text-xs mt-1 font-medium">Just a moment</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen mesh-gradient text-slate-800 font-sans py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fade-in-up">
          <div className="mt-3">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display bg-linear-to-r from-slate-900 via-indigo-950 to-slate-900 bg-clip-text text-transparent">
              {quiz?.title}
            </h1>
            <p className="text-slate-500 font-medium text-sm sm:text-base mt-1">
              Answer the questions below to test your understanding.
            </p>
          </div>
          <Button
            onClick={handleBackToMenu}
            variant="outline"
            className="group"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4.5 w-4.5 group-hover:-translate-x-0.5 transition-transform"
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
            Back to Menu
          </Button>
        </header>

        {/* Quiz content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <main className="lg:col-span-2 space-y-6 animate-fade-in-up delay-100">
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
              <div className="glass-panel rounded-2xl shadow-xs border border-slate-100 p-8 text-center animate-fade-in-up">
                <div className="mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 mx-auto text-slate-400"
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
                <h3 className="text-lg font-bold text-slate-800 mb-1">
                  No Questions Remaining
                </h3>
                <p className="text-slate-500 text-sm">All questions completed or none available in this category.</p>
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

          <aside className="space-y-6 animate-fade-in-up delay-200">
            <StatisticsPanel statistics={statistics} />
            <ModeSelector
              currentMode={quizMode}
              onModeChange={handleModeChange}
              showWrongQuestionsMode={
                isCompleted && (progress?.wrongQuestionIds.length ?? 0) > 0
              }
            />
            <div className="glass-panel rounded-2xl border border-slate-100/80 p-5 shadow-xs">
              <h3 className="font-bold text-slate-800 text-sm mb-3.5 flex items-center gap-1.5 uppercase tracking-wider text-xs">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
                Control Center
              </h3>
              <Button
                onClick={resetQuiz}
                variant="outline"
                fullWidth
                className="group border-slate-200"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4.5 w-4.5 group-hover:rotate-45 transition-transform duration-300"
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
                Reset Progress
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default QuizContent;
