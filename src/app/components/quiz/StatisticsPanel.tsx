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
    { label: 'Total Questions', value: totalQuestions, color: 'text-gray-500' },
    { label: 'Questions Answered', value: answeredQuestions, color: 'text-blue-500' },
    { label: 'Correct Answers', value: correctAnswers, color: 'text-green-500' },
    { label: 'Wrong Answers', value: wrongAnswers, color: 'text-red-500' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200/80 overflow-hidden">
      <div className="p-5 border-b border-gray-200/80">
        <h3 className="font-semibold text-gray-800 text-lg">Quiz Statistics</h3>
      </div>
      
      <div className="p-5 space-y-5">
        {/* Progress bar */}
        <div>
          <div className="flex justify-between text-sm text-gray-600 mb-1.5">
            <span>Progress</span>
            <span className="font-semibold">{percentage}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-blue-500 h-2.5 rounded-full transition-all duration-500" 
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>
        
        {/* Statistics grid */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map(stat => (
            <div key={stat.label} className="bg-gray-50/80 p-3.5 rounded-lg">
              <div className="text-sm text-gray-500">{stat.label}</div>
              <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};