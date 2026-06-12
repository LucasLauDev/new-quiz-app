// Sample quiz data
import { Quiz, QuizCategory } from "../types/quiz";
import { etikaCombine } from "./combine";
import { DSTopik4 } from "./deepseek-4";
import { DSTopik5 } from "./deepseek-5";
import { dekolonisasi } from "./dekolonisasi";
import { epistemologi } from "./epistemologi";
import { garisMasa } from "./etika-time";
import { pengaruhIct } from "./ict";
import { ideologi } from "./ideologi";
import { kepelbagaian } from "./kepelbagaian";
import { kesepatuan } from "./kesepatuan";
import { konsepEtika } from "./konsep-etika";
import { metafizik } from "./metafizik";
import { pembinaanPeradaban } from "./pembinaan-peradaban";
import { persekutuan } from "./persekutuan";
import { QWTopik3 } from "./qwen-3";
import { sysadminTopic1 } from "./system_admin/topic-1";
import { tanggungjawabSosial } from "./tanggungjawab";
import { tokohFalsafah } from "./tokoh-falsafah";
import { wirelessTopic1 } from "./wireless/topic-1";
import { wirelessTopic2 } from "./wireless/topic-2";
import { wirelessTopic3 } from "./wireless/topic-3";
import { wirelessTopic3GPT } from "./wireless/topic-3-gpt";
import { wirelessTopic4 } from "./wireless/topic-4";

/**
 * Quiz categories
 */
export const quizCategories: QuizCategory[] = [
  {
    id: "etika",
    name: "Penghayatan Etika dan Beradaban",
    lecturer: "Mdm Jacqueline Lynn (Kumpulan 3)",
    subcategories: [
      {
        id: "topik-2",
        name: "Topik 2 - Konsep Etika",
        quizId: "konsep-etika",
      },
      {
        id: "topik-3",
        name: "Topik 3 - Kepelbagaian Masyarakat",
        quizId: "kepelbagaian",
      },
      {
        id: "qw-topik-3",
        name: "Topik 3 - Qwen",
        quizId: "qw-topik-3",
      },
      {
        id: "topik-4",
        name: "Topik 4 - Kesepatuan Nasional",
        quizId: "kesepatuan-national",
      },
      {
        id: "ds-topik-4",
        name: "Topik 4 - Deepseek",
        quizId: "ds-topik-4",
      },
      {
        id: "topik-5",
        name: "Topik 5 - Pembinaan Peradaban",
        quizId: "pembinaan-peradaban",
      },
      {
        id: "ds-topik-5",
        name: "Topik 5 - Deepseek",
        quizId: "ds-topik-5",
      },
      {
        id: "topik-6",
        name: "Topik 6 - Perlembagaan Persekutuan",
        quizId: "persekutuan",
      },
      {
        id: "topik-7",
        name: "Topik 7 - Pengaruh ICT",
        quizId: "pengaruh-ict",
      },
      {
        id: "topik-8",
        name: "Topik 8 - Tanggungjawab Sosial",
        quizId: "tanggungjawab-sosial",
      },
      {
        id: "garis-masa",
        name: "Garis Masa Peristiwa",
        quizId: "garis-masa",
      },
      {
        id: "etika-combine",
        name: "All Topiks",
        quizId: "etika-combine",
      },
    ],
  },
  {
    id: "falsafah",
    name: "Falsafah",
    lecturer: "NABILLAH BOLHASSAN (KUMPULAN 3)",
    subcategories: [
      {
        id: "falsafah-topik-5",
        name: "Topik 5 - Metafizik",
        quizId: "falsafah-topik-5",
      },
      {
        id: "falsafah-topik-6",
        name: "Topik 6 - Epistemologi",
        quizId: "falsafah-topik-6",
      },
      {
        id: "falsafah-topik-7",
        name: "Topik 7 - Ideologi",
        quizId: "falsafah-topik-7",
      },
      {
        id: "falsafah-topik-8",
        name: "Topik 8 - Dekolonisasi",
        quizId: "falsafah-topik-8",
      },
      {
        id: "tokoh-falsafah",
        name: "Falsafah Tokoh",
        quizId: "tokoh-falsafah",
      },
    ],
  },
  {
    id: "wireless",
    name: "Wireless Mobile Networking",
    lecturer: "Dennis Cheng",
    subcategories: [
      {
        id: "wireless-topic-1",
        name: "Topic 1 - Introduction to Wireless Communications",
        quizId: "wireless-topic-1",
      },
      {
        id: "wireless-topic-2",
        name: "Topic 2 - Communication Systems & Signal Processing",
        quizId: "wireless-topic-2",
      },
      {
        id: "wireless-topic-3",
        name: "Topic 3 - Cellular Networks",
        quizId: "wireless-topic-3",
      },
      {
        id: "wireless-topic-3-gpt",
        name: "Topic 3 - Cellular Networks (GPT Version)",
        quizId: "wireless-topic-3-gpt",
      },
      {
        id: "wireless-topic-4",
        name: "Topic 4 - Network Types & Architectures",
        quizId: "wireless-topic-4",
      },
    ],
  },
  {
    id: "system-admin",
    name: "System Administration",
    lecturer: "Mohammed Zahir",
    subcategories: [
      {
        id: "sysadmin-topic-1",
        name: "Topic 1 - Introduction to System Administration",
        quizId: "sysadmin-topic-1",
      },
    ],
  },
];

/**
 * Quiz data
 */
export const quizzes: Quiz[] = [
  metafizik,
  pembinaanPeradaban,
  persekutuan,
  pengaruhIct,
  ideologi,
  tanggungjawabSosial,
  tokohFalsafah,
  kesepatuan,
  kepelbagaian,
  epistemologi,
  dekolonisasi,
  garisMasa,
  DSTopik4,
  DSTopik5,
  QWTopik3,
  etikaCombine,
  konsepEtika,
  wirelessTopic1,
  wirelessTopic2,
  wirelessTopic3,
  wirelessTopic3GPT,
  wirelessTopic4,
  sysadminTopic1,
];

/**
 * Get quiz by ID
 * @param quizId - The quiz ID
 * @returns The quiz or undefined if not found
 */
export const getQuizById = (quizId: string): Quiz | undefined => {
  return quizzes.find((quiz) => quiz.id === quizId);
};

/**
 * Get all quizzes for a category
 * @param categoryId - The category ID
 * @returns Array of quizzes for the category
 */
export const getQuizzesByCategory = (categoryId: string): Quiz[] => {
  return quizzes.filter((quiz) => quiz.categoryId === categoryId);
};

/**
 * Get all quizzes for a subcategory
 * @param categoryId - The category ID
 * @param subcategoryId - The subcategory ID
 * @returns Array of quizzes for the subcategory
 */
export const getQuizzesBySubcategory = (
  categoryId: string,
  subcategoryId: string,
): Quiz[] => {
  return quizzes.filter(
    (quiz) =>
      quiz.categoryId === categoryId && quiz.subcategoryId === subcategoryId,
  );
};

export const getQuizzesIds = (): string[] => {
  return quizzes.map((quiz) => quiz.id);
};
