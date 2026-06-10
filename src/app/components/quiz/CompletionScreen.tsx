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
    <div className="glass-panel rounded-2xl shadow-md border border-slate-100/80 text-center p-8 sm:p-10 animate-fade-in-up relative overflow-hidden">
      {/* Background subtle glow */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-indigo-400/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="mb-6 relative z-10">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-emerald-50 border border-emerald-100 mb-6 shadow-2xs text-emerald-600 animate-float">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2 font-display bg-linear-to-r from-slate-900 via-indigo-950 to-slate-900 bg-clip-text text-transparent">
          Congratulations!
        </h2>
        <p className="text-slate-500 font-medium text-sm sm:text-base">You have completed all the questions in this quiz.</p>
      </div>
      
      {/* Score display */}
      <div className="bg-slate-50/50 border border-slate-100 py-6 px-4 rounded-2xl max-w-xs mx-auto my-8 shadow-2xs relative z-10">
        <div className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-1">Your Score</div>
        <div className="text-5xl sm:text-6xl font-black text-indigo-600 tracking-tight font-display">{score}%</div>
        <div className="mt-3 text-xs sm:text-sm font-semibold text-slate-500">
          Answered <span className="text-slate-800 font-bold">{correctAnswers}</span> correctly out of <span className="text-slate-800 font-bold">{totalQuestions}</span> Qs
        </div>
      </div>
      
      {/* Statistics summary */}
      <div className="grid grid-cols-2 gap-4 mb-8 max-w-sm mx-auto relative z-10">
        <div className="bg-emerald-50/40 border border-emerald-100 p-4 rounded-xl flex flex-col justify-center">
          <div className="text-xs font-bold text-emerald-800/80 uppercase tracking-wide">Correct</div>
          <div className="text-2xl font-black text-emerald-600 mt-1">{correctAnswers}</div>
        </div>
        
        <div className="bg-rose-50/40 border border-rose-100 p-4 rounded-xl flex flex-col justify-center">
          <div className="text-xs font-bold text-rose-800/80 uppercase tracking-wide">Wrong</div>
          <div className="text-2xl font-black text-rose-600 mt-1">{wrongAnswers}</div>
        </div>
      </div>
      
      {/* Action buttons */}
      <div className="space-y-3.5 max-w-sm mx-auto relative z-10">
        {hasWrongAnswers && (
          <Button 
            onClick={onTryWrongQuestions} 
            variant="primary" 
            fullWidth 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            }
          >
            Review Wrong Questions
          </Button>
        )}
        
        <Button 
          onClick={onRestart} 
          variant="secondary" 
          fullWidth 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" viewBox="0 0 20 20" fill="currentColor">
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
          className="border-slate-200"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" viewBox="0 0 20 20" fill="currentColor">
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