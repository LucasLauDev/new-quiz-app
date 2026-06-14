import { Quiz } from "@/app/types/quiz";
import { etikaCombine } from "./combine";
import { DSTopik4 } from "./deepseek-4";
import { DSTopik5 } from "./deepseek-5";
import { garisMasa } from "./etika-time";
import { pengaruhIct } from "./ict";
import { kepelbagaian } from "./kepelbagaian";
import { kesepatuan } from "./kesepatuan";
import { konsepEtika } from "./konsep-etika";
import { pembinaanPeradaban } from "./pembinaan-peradaban";
import { persekutuan } from "./persekutuan";
import { QWTopik3 } from "./qwen-3";
import { multipleSelectSamples } from "./multiple-select-samples";
import { tanggungjawabSosial } from "./tanggungjawab";

export const etikaQuizzes: Quiz[] = [
  konsepEtika,
  kepelbagaian,
  QWTopik3,
  kesepatuan,
  DSTopik4,
  pembinaanPeradaban,
  DSTopik5,
  persekutuan,
  pengaruhIct,
  tanggungjawabSosial,
  garisMasa,
  etikaCombine,
  multipleSelectSamples,
];
