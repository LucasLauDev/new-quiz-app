// Question card component
'use client';

import React from 'react';
import { Question, getCorrectOptionIds } from '@/app/types/quiz';
import {
  getOptionInlineFeedback,
  getOptionLetter,
  getQuestionHint,
  getSummaryFeedback,
  isMultipleSelectQuestion,
} from '@/app/utils/questionUtils';
import { Button } from '../ui/Button';

interface QuestionCardProps {
  question: Question;
  selectedOptionIds: string[];
  isAnswerChecked: boolean;
  isCorrect: boolean | null;
  onSelectOption: (optionId: string) => void;
  onCheckAnswer: () => void;
  onNextQuestion: () => void;
  isLastQuestion: boolean;
}

/**
 * Renders a quiz question.
 * - Multiple choice: single-select with letter badges (A, B, C, D).
 * - Multiple select: checkbox options — user picks one or more answers.
 *   On wrong answers, inline feedback appears only on wrongly selected options.
 */
export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedOptionIds,
  isAnswerChecked,
  isCorrect,
  onSelectOption,
  onCheckAnswer,
  onNextQuestion,
  isLastQuestion,
}) => {
  const { text, options } = question;
  const isMultiSelect = isMultipleSelectQuestion(question);
  const correctIds = getCorrectOptionIds(question);

  const summaryFeedback = getSummaryFeedback(
    question,
    selectedOptionIds,
    isCorrect,
    isAnswerChecked,
  );

  return (
    <div key={question.id} className="glass-panel rounded-2xl shadow-md border border-slate-100/80 overflow-hidden animate-slide-in-right">
      <div className="p-6 sm:p-7 border-b border-slate-100">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-relaxed font-display">{text}</h3>
      </div>

      <div className="p-6 sm:p-7">
        <div className="space-y-3.5">
          {options.map((option, index) => {
            const letter = getOptionLetter(index);
            const isSelected = selectedOptionIds.includes(option.id);
            const isCorrectOption = correctIds.includes(option.id);
            const isMissed =
              isAnswerChecked &&
              !isCorrect &&
              isCorrectOption &&
              !isSelected;

            const inlineFeedback = getOptionInlineFeedback(
              question,
              option.id,
              selectedOptionIds,
              isCorrect,
              isAnswerChecked,
            );

            let optionClasses =
              'group border-2 rounded-xl p-4 flex flex-col cursor-pointer transition-all duration-200 select-none shadow-2xs hover:shadow-xs';

            if (isAnswerChecked) {
              optionClasses += ' cursor-default';
              if (isCorrectOption) {
                optionClasses +=
                  ' bg-emerald-50/50 border-emerald-400 text-emerald-950 ring-2 ring-emerald-100/60 animate-pop-in';
              } else if (isSelected) {
                optionClasses +=
                  ' bg-rose-50/50 border-rose-400 text-rose-950 ring-2 ring-rose-100/60 animate-shake';
              } else if (isMissed) {
                optionClasses +=
                  ' bg-amber-50/50 border-amber-300 text-amber-950 ring-2 ring-amber-100/60';
              } else {
                optionClasses +=
                  ' border-slate-100 bg-slate-50/20 opacity-40 shadow-none';
              }
            } else if (isSelected) {
              optionClasses +=
                ' bg-indigo-50/50 border-indigo-500 text-indigo-950 ring-2 ring-indigo-100/60 shadow-indigo-100/40 scale-[1.01]';
            } else {
              optionClasses +=
                ' border-slate-200/80 bg-white/70 hover:border-indigo-300 hover:bg-indigo-50/10 hover:text-indigo-950 hover:scale-[1.005]';
            }

            return (
              <div
                key={option.id}
                className={optionClasses}
                onClick={() => !isAnswerChecked && onSelectOption(option.id)}
              >
                <div className="flex items-center">
                  {/* Checkbox for multi-select, letter badge for single choice */}
                  <div className="mr-4 flex-shrink-0">
                    {isMultiSelect ? (
                      <div
                        className={`h-5 w-5 rounded-md border-2 flex items-center justify-center transition-all duration-200 ${
                          isAnswerChecked
                            ? isCorrectOption
                              ? 'bg-emerald-500 border-emerald-400'
                              : isSelected
                                ? 'bg-rose-500 border-rose-400'
                                : isMissed
                                  ? 'bg-amber-400 border-amber-300'
                                  : 'bg-slate-100 border-slate-200'
                            : isSelected
                              ? 'bg-indigo-600 border-indigo-500'
                              : 'bg-white border-slate-300 group-hover:border-indigo-400'
                        }`}
                      >
                        {(isSelected || (isAnswerChecked && isCorrectOption)) && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    ) : (
                      <div
                        className={`h-8 w-8 rounded-lg flex items-center justify-center font-extrabold text-xs transition-all duration-200 shadow-2xs border ${
                          isAnswerChecked
                            ? isCorrectOption
                              ? 'bg-emerald-500 border-emerald-400 text-white'
                              : isSelected
                                ? 'bg-rose-500 border-rose-400 text-white'
                                : 'bg-slate-100 border-slate-200 text-slate-400'
                            : isSelected
                              ? 'bg-indigo-600 border-indigo-500 text-white shadow-indigo-200'
                              : 'bg-slate-50 border-slate-200/70 text-slate-500 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-500'
                        }`}
                      >
                        {letter}
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    {isMultiSelect && (
                      <span className="text-xs font-bold text-slate-400 mr-2">{letter}.</span>
                    )}
                    <span className="text-slate-800 font-semibold text-sm sm:text-base leading-snug">
                      {option.text}
                    </span>
                    {isMissed && (
                      <span className="block mt-1 text-xs font-semibold text-amber-700">
                        This was a correct answer you missed.
                      </span>
                    )}
                  </div>
                </div>

                {inlineFeedback && (
                  <p className="mt-3 ml-9 text-sm text-rose-800 leading-relaxed font-medium border-t border-rose-200/60 pt-3">
                    {inlineFeedback}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {isAnswerChecked && summaryFeedback && (
        <div className={`p-6 border-t ${isCorrect ? 'bg-emerald-50/30 border-emerald-100' : 'bg-rose-50/30 border-rose-100'} animate-pop-in`}>
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-0.5">
              {isCorrect ? (
                <div className="h-6 w-6 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-2xs">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              ) : (
                <div className="h-6 w-6 rounded-full bg-rose-500 flex items-center justify-center text-white shadow-2xs">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
            <div className="ml-3.5">
              <h4 className={`text-sm font-extrabold ${isCorrect ? 'text-emerald-950' : 'text-rose-950'}`}>
                {isCorrect ? 'Well done, that is correct!' : 'Oops, incorrect choice!'}
              </h4>
              <p className="mt-1 text-sm text-slate-700 leading-relaxed font-medium">{summaryFeedback}</p>
            </div>
          </div>
        </div>
      )}

      <div className="p-5.5 bg-slate-50/40 border-t border-slate-100 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <p className="text-xs text-slate-500 font-medium text-center sm:text-left">
          {getQuestionHint(question)}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <Button
            onClick={onCheckAnswer}
            disabled={selectedOptionIds.length === 0 || isAnswerChecked}
            variant="primary"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" viewBox="0 0 20 20" fill="currentColor">
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
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              }
            >
              {isLastQuestion ? 'Finish Quiz' : 'Next Question'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
