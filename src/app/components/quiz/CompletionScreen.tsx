// Quiz completion screen component
'use client';

import React from 'react';
import { QuizStatistics } from '@/app/types/quiz';
import { Button } from '../ui/Button';

interface CompletionScreenProps {
  statistics: QuizStatistics;
  hasWrongAnswers: boolean;
  onRestart: () => void;
  onTryWrongQuestions: () => void;
  onBackToMenu: () => void;
}

/**
 * Component for displaying quiz completion screen
 */
export const CompletionScreen: React.FC<CompletionScreenProps> = ({
  statistics,
  hasWrongAnswers,
  onRestart,
  onTryWrongQuestions,
  onBackToMenu,
}) => {
  const { totalQuestions, correctAnswers, wrongAnswers } = statistics;
  const score = Math.round((correctAnswers / totalQuestions) * 100);
  
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200/80 overflow-hidden text-center p-8">
      <div className="mb-6">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-5">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Congratulations, Quiz Completed!</h2>
        <p className="text-gray-600 text-lg">You have answered all questions.</p>
      </div>
      
      {/* Score display */}
      <div className="my-8">
        <div className="text-gray-600 mb-2">Your Score</div>
        <div className="text-6xl font-bold text-blue-600">{score}%</div>
        <div className="mt-2 text-gray-600">
          {correctAnswers} correct answers out of {totalQuestions} questions
        </div>
      </div>
      
      {/* Statistics summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-sm mx-auto">
        <div className="bg-green-100/70 p-4 rounded-lg">
          <div className="text-sm text-green-800">Correct Answers</div>
          <div className="text-2xl font-bold text-green-800">{correctAnswers}</div>
        </div>
        
        <div className="bg-red-100/70 p-4 rounded-lg">
          <div className="text-sm text-red-800">Wrong Answers</div>
          <div className="text-2xl font-bold text-red-800">{wrongAnswers}</div>
        </div>
      </div>
      
      {/* Action buttons */}
      <div className="space-y-3 max-w-sm mx-auto">
        {hasWrongAnswers && (
          <Button 
            onClick={onTryWrongQuestions} 
            variant="primary" 
            fullWidth 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            }
          >
            Retry Wrong Questions
          </Button>
        )}
        
        <Button 
          onClick={onRestart} 
          variant="secondary" 
          fullWidth 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
            </svg>
          }
        >
          Restart Quiz
        </Button>
        
        <Button 
          onClick={onBackToMenu} 
          variant="outline" 
          fullWidth 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
          }
        >
          Back to Main Menu
        </Button>
      </div>
    </div>
  );
};