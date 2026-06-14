import { Quiz, QuizCategory, QuizSubcategory } from "../types/quiz";
import { etikaQuizzes } from "./etika";
import { falsafahQuizzes } from "./falsafah";
import { systemAdminQuizzes } from "./system_admin";
import { wirelessQuizzes } from "./wireless";

interface CategoryConfig {
  id: string;
  name: string;
  lecturer: string;
  quizzes: Quiz[];
}

/** Derive menu subcategories from quiz metadata — avoids duplicating id/title/quizId */
const buildSubcategories = (categoryQuizzes: Quiz[]): QuizSubcategory[] =>
  categoryQuizzes.map((quiz) => ({
    id: quiz.subcategoryId,
    name: quiz.title,
    quizId: quiz.id,
  }));

const categoryConfigs: CategoryConfig[] = [
  {
    id: "etika",
    name: "Penghayatan Etika dan Beradaban",
    lecturer: "Mdm Jacqueline Lynn (Kumpulan 3)",
    quizzes: etikaQuizzes,
  },
  {
    id: "falsafah",
    name: "Falsafah",
    lecturer: "NABILLAH BOLHASSAN (KUMPULAN 3)",
    quizzes: falsafahQuizzes,
  },
  {
    id: "wireless",
    name: "Wireless Mobile Networking",
    lecturer: "Dennis Cheng",
    quizzes: wirelessQuizzes,
  },
  {
    id: "system-admin",
    name: "System Administration",
    lecturer: "Mohammed Zahir",
    quizzes: systemAdminQuizzes,
  },
];

export const quizzes: Quiz[] = categoryConfigs.flatMap(({ quizzes }) => quizzes);

export const quizCategories: QuizCategory[] = categoryConfigs.map(
  ({ id, name, lecturer, quizzes: categoryQuizzes }) => ({
    id,
    name,
    lecturer,
    subcategories: buildSubcategories(categoryQuizzes),
  }),
);

const quizById = new Map(quizzes.map((quiz) => [quiz.id, quiz]));

export const getQuizById = (quizId: string): Quiz | undefined =>
  quizById.get(quizId);

export const getQuizzesByCategory = (categoryId: string): Quiz[] =>
  quizzes.filter((quiz) => quiz.categoryId === categoryId);

export const getQuizzesBySubcategory = (
  categoryId: string,
  subcategoryId: string,
): Quiz[] =>
  quizzes.filter(
    (quiz) =>
      quiz.categoryId === categoryId && quiz.subcategoryId === subcategoryId,
  );

export const getQuizzesIds = (): string[] => quizzes.map((quiz) => quiz.id);

export const getQuestionCount = (quizId: string): number =>
  quizById.get(quizId)?.questions.length ?? 0;
