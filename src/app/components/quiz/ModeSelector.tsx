// Quiz mode selector component
'use client';

import React from 'react';
import { QuizMode } from '@/app/types/quiz';

interface ModeSelectorProps {
  currentMode: QuizMode;
  onModeChange: (mode: QuizMode) => void;
  showWrongQuestionsMode: boolean;
}

/**
 * Component for selecting quiz mode
 */
export const ModeSelector: React.FC<ModeSelectorProps> = ({
  currentMode,
  onModeChange,
  showWrongQuestionsMode,
}) => {
  const modes = [
    {
      id: QuizMode.SEQUENTIAL,
      label: 'Sequential',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
    },
    {
      id: QuizMode.RANDOM,
      label: 'Random',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 3a1 1 0 01.993.883L11 4v1.055A7.002 7.002 0 0116 11.5a1 1 0 11-2 0 5 5 0 00-4-4.9V4a1 1 0 01-1-1zM4 8.5A7.002 7.002 0 019 3.055V4a1 1 0 112 0v-.945a7.002 7.002 0 015 5.445H16a1 1 0 110 2h.055A7.002 7.002 0 0111.5 16a1 1 0 110-2 5 5 0 004.9-4H16a1 1 0 110-2h.055A7.002 7.002 0 0111.5 4a1 1 0 110 2 5 5 0 00-4.9 4H4a1 1 0 110-2zm11.95.45a1 1 0 10-1.9 0 5 5 0 01-4.5 4.95V16a1 1 0 102 0v-2.05a7.002 7.002 0 004.4-5.05z" />
            </svg>
    },
    ...(showWrongQuestionsMode ? [{
      id: QuizMode.WRONG_QUESTIONS,
      label: 'Wrong Questions',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
    }] : [])
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200/80 overflow-hidden">
      <div className="p-5 border-b border-gray-200/80">
        <h3 className="font-semibold text-gray-800 text-lg">Quiz Mode</h3>
      </div>
      
      <div className="p-5">
        <div className="flex flex-col space-y-2">
          {modes.map(mode => (
            <button
              key={mode.id}
              onClick={() => onModeChange(mode.id)}
              className={`px-4 py-2.5 rounded-lg flex items-center text-left font-medium transition-all duration-200 ${currentMode === mode.id
                ? 'bg-blue-500 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {mode.icon}
              {mode.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};