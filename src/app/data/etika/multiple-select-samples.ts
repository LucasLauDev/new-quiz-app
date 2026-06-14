import { QuestionType, Quiz } from "@/app/types/quiz";

/**
 * Sample quiz for multiple-select (checkbox) questions.
 *
 * Structure per question:
 * - `text`: the question prompt
 * - `options`: answer choices (any count — not limited to 4)
 * - `correctOptionIds`: array of all correct option ids (one or more)
 * - `explanation.correct`: shown when the user selects the exact correct set
 * - `explanation.incorrect`: keyed by option id — shown inline on each
 *   option the user wrongly selected after checking
 */
export const multipleSelectSamples: Quiz = {
  id: "multiple-select-samples",
  categoryId: "etika",
  subcategoryId: "multiple-select-samples",
  title: "Multiple Answer (Samples)",
  questions: [
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q1",
      text: "Antara berikut, yang manakah BETUL mengenai konsep etika? (Pilih semua yang betul)",
      options: [
        {
          id: "a",
          text: "Etika merujuk kepada nilai moral yang membimbing tingkah laku manusia.",
        },
        {
          id: "b",
          text: "Etika dan moral adalah konsep yang sama tanpa sebarang perbezaan.",
        },
        {
          id: "c",
          text: "Nilai etika boleh berbeza mengikut budaya dan masyarakat.",
        },
        {
          id: "d",
          text: "Etika professional hanya terpakai dalam bidang perubatan.",
        },
        {
          id: "e",
          text: "Etika membantu individu membuat keputusan yang adil dan bertanggungjawab.",
        },
      ],
      correctOptionIds: ["a", "c", "e"],
      explanation: {
        correct:
          "Pernyataan A, C dan E betul. Etika membimbing tingkah laku moral, nilainya boleh berbeza mengikut budaya, dan ia membantu membuat keputusan adil. Pernyataan B salah kerana etika dan moral walaupun berkaitan, bukan konsep yang sama. Pernyataan D salah kerana etika professional wujud dalam pelbagai bidang.",
        incorrect: {
          b: "Salah — etika dan moral walaupun berkait rapat, bukan konsep yang sama tanpa sebarang perbezaan.",
          d: "Salah — etika professional merangkumi semua bidang kerja, bukan perubatan sahaja.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q2",
      text: "Manakah antara berikut merupakan prinsip Rukun Negara yang betul? (Pilih semua yang betul)",
      options: [
        { id: "a", text: "Kepercayaan kepada Tuhan" },
        { id: "b", text: "Kesetiaan kepada Raja dan Negara" },
        {
          id: "c",
          text: "Keluhuran Perlembagaan — Perlembagaan boleh diubah suai sewenang-wenangnya",
        },
        { id: "d", text: "Kedaulatan Undang-undang" },
        { id: "e", text: "Kesopanan dan Kesusilaan" },
        { id: "f", text: "Kebebasan mutlak tanpa had undang-undang" },
      ],
      correctOptionIds: ["a", "b", "d", "e"],
      explanation: {
        correct:
          "A, B, D dan E adalah prinsip Rukun Negara yang betul. Pernyataan C salah kerana Keluhuran Perlembagaan bermaksud Perlembagaan dihormati dan dipatuhi. Pernyataan F salah kerana Rukun Negara tidak menjamin kebebasan mutlak.",
        incorrect: {
          c: "Salah — Keluhuran Perlembagaan bermaksud Perlembagaan Persekutuan dihormati dan dipatuhi, bukan boleh diubah suai sewenang-wenangnya.",
          f: "Salah — tiada prinsip Rukun Negara yang menjamin kebebasan mutlak tanpa had undang-undang.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q3",
      text: "Antara berikut, yang manakah BETUL tentang kesepakatan nasional di Malaysia? (Pilih semua yang betul)",
      options: [
        {
          id: "a",
          text: "Dasar Ekonomi Baru (DEB) diperkenalkan selepas Peristiwa 13 Mei 1969.",
        },
        {
          id: "b",
          text: "Rukun Tetangga ditubuhkan untuk memupuk semangat gotong-royong.",
        },
        {
          id: "c",
          text: "Bahasa Melayu dijadikan bahasa rasmi melalui Akta Bahasa Kebangsaan.",
        },
        {
          id: "d",
          text: "Malayan Union diterima tanpa sebarang penentangan.",
        },
        {
          id: "e",
          text: "Perlembagaan Persekutuan Malaysia dibentuk pada tahun 1957.",
        },
        {
          id: "f",
          text: "Konsep Muhibbah digalakkan untuk memupuk perpaduan.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "f"],
      explanation: {
        correct:
          "A, B, C dan F betul. DEB, Rukun Tetangga, Bahasa Melayu sebagai bahasa rasmi, dan konsep Muhibbah adalah fakta betul. D salah kerana Malayan Union ditentang hebat. E salah kerana Perlembagaan Persekutuan dibentuk pada 1963, bukan 1957.",
        incorrect: {
          d: "Salah — Malayan Union ditentang hebat oleh orang Melayu kerana isu kerakyatan dan kedaulatan Raja-Raja.",
          e: "Salah — Perlembagaan Persekutuan Malaysia dibentuk pada 16 September 1963, bukan 1957.",
        },
      },
    },
  ],
};
