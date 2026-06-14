import { Quiz } from "@/app/types/quiz";
import { dekolonisasi } from "./dekolonisasi";
import { epistemologi } from "./epistemologi";
import { ideologi } from "./ideologi";
import { metafizik } from "./metafizik";
import { tokohFalsafah } from "./tokoh-falsafah";

export const falsafahQuizzes: Quiz[] = [
  metafizik,
  epistemologi,
  ideologi,
  dekolonisasi,
  tokohFalsafah,
];
