import {
  Question,
  getCorrectOptionIds,
  isMultipleSelectQuestion,
} from "../types/quiz";

/** Letter label for an answer option (A, B, C, D, …) */
export const getOptionLetter = (index: number): string =>
  String.fromCharCode(65 + index);

/** Compare two string arrays as sets (order-independent) */
export const areOptionSetsEqual = (a: string[], b: string[]): boolean => {
  if (a.length !== b.length) return false;
  const sortedA = [...a].sort();
  const sortedB = [...b].sort();
  return sortedA.every((value, index) => value === sortedB[index]);
};

/** Check whether the user's selection matches the correct answer(s) */
export const isAnswerCorrect = (
  question: Question,
  selectedOptionIds: string[],
): boolean =>
  areOptionSetsEqual(selectedOptionIds, getCorrectOptionIds(question));

/** Hint shown below the question card */
export const getQuestionHint = (question: Question): string =>
  isMultipleSelectQuestion(question)
    ? "Select all correct answers using the checkboxes, then check."
    : "Select one option and check your answer.";

/**
 * Summary feedback after checking.
 * Correct: full explanation. Wrong: brief note (per-option detail is inline).
 */
export const getSummaryFeedback = (
  question: Question,
  selectedOptionIds: string[],
  isCorrect: boolean | null,
  isAnswerChecked: boolean,
): string => {
  if (!isAnswerChecked || selectedOptionIds.length === 0) return "";

  if (isCorrect) {
    return question.explanation.correct;
  }

  if (isMultipleSelectQuestion(question)) {
    const correctLetters = question.correctOptionIds
      .map((id) => {
        const index = question.options.findIndex((o) => o.id === id);
        return index >= 0 ? getOptionLetter(index) : id;
      })
      .join(", ");
    return `The correct answers are ${correctLetters}. See why your wrong selections were incorrect below each option.`;
  }

  const selectedId = selectedOptionIds[0];
  return question.explanation.incorrect[selectedId] || "Incorrect answer.";
};

/**
 * Inline feedback on a single option after checking.
 * Multi-select: shown on each option the user selected that is NOT correct.
 * Single choice: shown only on the one wrong option the user picked.
 */
export const getOptionInlineFeedback = (
  question: Question,
  optionId: string,
  selectedOptionIds: string[],
  isCorrect: boolean | null,
  isAnswerChecked: boolean,
): string | null => {
  if (!isAnswerChecked || isCorrect !== false) return null;

  const isSelected = selectedOptionIds.includes(optionId);
  const isCorrectOption = getCorrectOptionIds(question).includes(optionId);

  // Only explain options the user wrongly selected
  if (!isSelected || isCorrectOption) return null;

  return question.explanation.incorrect[optionId] ?? null;
};

export { isMultipleSelectQuestion };
