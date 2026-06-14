import { Quiz, QuizCategory } from "../types/quiz";
import { etikaQuizzes } from "./etika";
import { falsafahQuizzes } from "./falsafah";
import { systemAdminQuizzes } from "./system_admin";
import { wirelessQuizzes } from "./wireless";

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
      {
        id: "multiple-select-samples",
        name: "Multiple Answer (Samples)",
        quizId: "multiple-select-samples",
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
      {
        id: "sysadmin-topic-2",
        name: "Topic 2 - Computer and Network Components",
        quizId: "sysadmin-topic-2",
      },
    ],
  },
];

export const quizzes: Quiz[] = [
  ...etikaQuizzes,
  ...falsafahQuizzes,
  ...wirelessQuizzes,
  ...systemAdminQuizzes,
];

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
