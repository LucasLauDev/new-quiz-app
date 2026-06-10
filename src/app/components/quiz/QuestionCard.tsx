// Question card component
'use client';

import React from 'react';
import { Question } from '@/app/types/quiz';
import { Button } from '../ui/Button';

interface QuestionCardProps {
  question: Question;
  selectedOptionId: string | null;
  isAnswerChecked: boolean;
  isCorrect: boolean | null;
  onSelectOption: (optionId: string) => void;
  onCheckAnswer: () => void;
  onNextQuestion: () => void;
  isLastQuestion: boolean;
}

/**
 * Component for displaying a quiz question and its options
 */
export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedOptionId,
  isAnswerChecked,
  isCorrect,
  onSelectOption,
  onCheckAnswer,
  onNextQuestion,
  isLastQuestion,
}) => {
  const { text, options, explanation, correctOptionId } = question;

  // Get explanation text based on selected option
  const getExplanationText = () => {
    if (!isAnswerChecked || !selectedOptionId) return '';
    
    if (isCorrect) {
      return explanation.correct;
    } else {
      return explanation.incorrect[selectedOptionId] || 'Incorrect answer.';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200/80 overflow-hidden transition-all duration-300">
      {/* Question text */}
      <div className="p-6 border-b border-gray-200/80">
        <h3 className="text-xl font-semibold text-gray-800 leading-relaxed">{text}</h3>
      </div>
      
      {/* Options */}
      <div className="p-6">
        <div className="space-y-4">
          {options.map((option, index) => {
            const letter = String.fromCharCode(65 + index);
            // Determine option styling based on state
            const isSelected = option.id === selectedOptionId;
            const isCorrectOption = option.id === correctOptionId;
            let optionClasses = 'border-2 rounded-lg p-4 flex items-center cursor-pointer transition-all duration-200';

            if (isAnswerChecked) {
              optionClasses += ' cursor-default';
              if (isCorrectOption) {
                optionClasses += ' bg-green-100/50 border-green-500 ring-2 ring-green-300';
              } else if (isSelected && !isCorrectOption) {
                optionClasses += ' bg-red-100/50 border-red-500 ring-2 ring-red-300';
              } else {
                optionClasses += ' border-gray-200 opacity-60';
              }
            } else {
              if (isSelected) {
                optionClasses += ' bg-blue-100/50 border-blue-500 ring-2 ring-blue-300';
              } else {
                optionClasses += ' border-gray-200 hover:border-blue-400 hover:bg-blue-50/50';
              }
            }
            
            return (
              <div 
                key={option.id}
                className={optionClasses}
                onClick={() => !isAnswerChecked && onSelectOption(option.id)}
              >
                <div className="flex-1">
                  <div className="flex items-center">
                    <div className="mr-4 flex-shrink-0">
                      <div className={`h-6 w-6 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-200 ${
                        isAnswerChecked 
                          ? isCorrectOption 
                            ? 'bg-green-500 text-white' 
                            : isSelected 
                              ? 'bg-red-500 text-white' 
                              : 'bg-gray-200 text-gray-500'
                          : isSelected 
                            ? 'bg-blue-500 text-white' 
                            : 'bg-gray-200 text-gray-700'
                      }`}>
                        {letter}
                      </div>
                    </div>
                    <span className="text-gray-800 font-medium">{option.text}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Explanation (shown after checking answer) */}
      {isAnswerChecked && (
        <div className={`p-5 border-t-2 ${isCorrect ? 'bg-green-50/80 border-green-200' : 'bg-red-50/80 border-red-200'}`}>
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-0.5">
              {isCorrect ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <div className="ml-3">
              <h4 className="text-md font-bold text-gray-900">
                {isCorrect ? 'Correct!' : 'Wrong!'}
              </h4>
              <p className="mt-1 text-sm text-gray-700">{getExplanationText()}</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Actions */}
      <div className="p-5 bg-gray-50/70 border-t border-gray-200/80 flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <p className="text-sm text-gray-600 mb-3 sm:mb-0">
          Select one answer and check.
        </p>
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 w-full sm:w-auto">
          <Button
            onClick={onCheckAnswer}
            disabled={!selectedOptionId || isAnswerChecked}
            variant="primary"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            }
          >
            Check Answer
          </Button>
          
          {isAnswerChecked && (
            <Button
              onClick={onNextQuestion}
              variant="secondary"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              }
            >
              {isLastQuestion ? 'Finish' : 'Next Question'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};