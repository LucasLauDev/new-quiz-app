// Statistics panel component
'use client';

import React from 'react';
import { QuizStatistics } from '@/app/types/quiz';

interface StatisticsPanelProps {
  statistics: QuizStatistics;
}

/**
 * Component for displaying quiz statistics
 */
export const StatisticsPanel: React.FC<StatisticsPanelProps> = ({ statistics }) => {
  const { totalQuestions, answeredQuestions, correctAnswers, wrongAnswers, completion } = statistics;
  const percentage = Math.round(completion) > 100 ? 100 : Math.round(completion);
  
  const stats = [
    { 
      label: 'Total Questions', 
      value: totalQuestions, 
      color: 'text-slate-800', 
      bgColor: 'bg-indigo-50/50 border-indigo-100/70',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    { 
      label: 'Answered', 
      value: answeredQuestions, 
      color: 'text-blue-900', 
      bgColor: 'bg-blue-50/50 border-blue-100/70',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
    { 
      label: 'Correct', 
      value: correctAnswers, 
      color: 'text-emerald-900', 
      bgColor: 'bg-emerald-50/50 border-emerald-100/70',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      label: 'Wrong', 
      value: wrongAnswers, 
      color: 'text-rose-900', 
      bgColor: 'bg-rose-50/50 border-rose-100/70',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
  ];

  return (
    <div className="glass-panel rounded-2xl shadow-xs border border-slate-100/80 overflow-hidden">
      <div className="p-5 border-b border-slate-100/80">
        <h3 className="font-bold text-slate-800 text-base font-display">Quiz Statistics</h3>
      </div>
      
      <div className="p-5 space-y-5">
        {/* Progress bar */}
        <div>
          <div className="flex justify-between text-xs font-semibold text-slate-500 mb-2">
            <span>PROGRESS</span>
            <span className="font-extrabold text-indigo-600">{percentage}%</span>
          </div>
          <div className="w-full bg-slate-100/80 border border-slate-200/20 rounded-full h-3 overflow-hidden p-0.5">
            <div 
              className="bg-linear-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-700 ease-out" 
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>
        
        {/* Statistics grid */}
        <div className="grid grid-cols-2 gap-3.5">
          {stats.map(stat => (
            <div key={stat.label} className={`border p-3.5 rounded-xl flex flex-col justify-between ${stat.bgColor}`}>
              <div className="flex items-center justify-between gap-1 mb-1">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{stat.label}</span>
                <span className="flex-shrink-0 opacity-80">{stat.icon}</span>
              </div>
              <div className={`text-2xl font-extrabold mt-1 tracking-tight ${stat.color}`}>{stat.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};