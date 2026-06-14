import { Quiz } from "@/app/types/quiz";

export const tokohFalsafah: Quiz = {
  id: "tokoh-falsafah",
  categoryId: "falsafah",
  subcategoryId: "tokoh-falsafah",
  title: "Tokoh Falsafah",
  questions: [
    {
      id: "tokoh-q1",
      text: "Dalam karyanya yang terkenal, **Plato** telah menganjurkan satu model masyarakat yang ideal beserta prinsip-prinsip politik yang ideal untuk diamalkan oleh sesebuah kerajaan. Apakah nama karya tersebut?",
      options: [
        { id: "a", text: "Metaphysics" },
        { id: "b", text: "The Republic" },
        { id: "c", text: "Meditations on First Philosophy" },
        { id: "d", text: "Thus Spoke Zarathustra" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Ini adalah jawapan yang betul. Nota secara spesifik menyebut bahawa **Plato** dalam bukunya **'*The Republic*'** menganjurkan satu masyarakat yang ideal dan prinsip-prinsip politik yang ideal.",
        incorrect: {
          a: "Karya ini ditulis oleh Aristotle, bukan Plato.",
          c: "Karya ini ditulis oleh Rene Descartes.",
          d: "Karya ini ditulis oleh Friedrich Nietzsche.",
        },
      },
    },
    {
      id: "tokoh-q2",
      text: '"Kehidupan yang tidak diperiksa tidak berbaloi untuk dijalani" (*The unexamined life is not worth living*).\nKenyataan di atas merupakan ungkapan terkenal daripada ahli falsafah Greek silam yang manakah?',
      options: [
        { id: "a", text: "Aristotle" },
        { id: "b", text: "Plato" },
        { id: "c", text: "Rene Descartes" },
        { id: "d", text: "Socrates" },
      ],
      correctOptionId: "d",
      explanation: {
        correct:
          "Ini adalah jawapan yang tepat. Nota secara jelas memetik ungkapan ini dan mengaitkannya secara langsung dengan **Socrates**. Falsafah beliau menekankan kepentingan muhasabah diri dan pemeriksaan kendiri untuk mencapai kehidupan yang bermakna.",
        incorrect: {
          a: "Aristotle lebih dikenali dengan konsep seperti 'manusia sebagai haiwan rasional' dan kajian mengenai *substance*.",
          b: "Plato, murid kepada Socrates, lebih dikenali dengan teori Bentuk (*Forms*) dan karyanya *The Republic*.",
          c: "Descartes ialah ahli falsafah moden yang terkenal dengan ungkapan 'Saya berfikir, maka saya wujud' (*Cogito Ergo Sum*).",
        },
      },
    },
    {
      id: "tokoh-q3",
      text: "**Aristotle** mendefinisikan manusia sebagai *'rational animal'*. Apakah ciri utama yang, menurut beliau, membezakan manusia daripada haiwan?",
      options: [
        { id: "a", text: "Keupayaan untuk beremosi dan berintiusi" },
        {
          id: "b",
          text: "Keupayaan untuk hidup dalam masyarakat yang kompleks",
        },
        { id: "c", text: "Pemikiran atau akal fikiran yang rasional" },
        { id: "d", text: "Sifat kerohanian dan kepercayaan kepada Tuhan" },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Ini adalah jawapan yang betul. Menurut nota, konsep **Aristotle** mengenai manusia sebagai 'haiwan rasional' menegaskan bahawa pemikiran rasional (*logosentrism*) adalah ciri yang membezakan antara manusia dan haiwan.",
        incorrect: {
          a: "Ciri ini lebih ditekankan oleh pengkritik Aristotle seperti Nietzsche, yang berpendapat bahawa manusia bukan hanya makhluk rasional.",
          b: "Walaupun Aristotle juga menganggap manusia sebagai 'haiwan politik' yang hidup bermasyarakat, ciri pembeza utama dalam konteks *'rational animal'* ialah akal rasional.",
          d: "Konsep ini lebih menonjol dalam falsafah Zaman Pertengahan yang berteraskan agama, berbanding falsafah Greek klasik Aristotle.",
        },
      },
    },
    {
      id: "tokoh-q4",
      text: "**Rene Descartes** dan **Isaac Newton** dikaitkan dengan satu paradigma yang menganggap alam sebagai sebuah mesin raksasa yang mati, tidak bernyawa, dan statik. Apakah nama paradigma ini?",
      options: [
        { id: "a", text: "Dualisme Cartesian" },
        { id: "b", text: "Positivisme Logik" },
        { id: "c", text: "Paradigma Cartesian-Newtonian" },
        { id: "d", text: "Materialisme Mekanistik" },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Ini adalah jawapan yang paling tepat. Nota secara eksplisit menamakan **Paradigma Cartesian-Newtonian** dan mengaitkannya dengan pemikir Barat terkenal, **Rene Descartes** dan **Isaac Newton**. Paradigma ini ditegakkan atas dasar andaian bahawa alam adalah sebuah 'mesin raksasa yang mati, tidak bernyawa & statik'.",
        incorrect: {
          a: "Dualisme Cartesian ialah teori Descartes mengenai pemisahan minda dan jasad. Walaupun ia menyumbang kepada paradigma yang lebih besar ini, ia bukanlah nama untuk pandangan kosmologi yang dikongsi bersama Newton.",
          b: "Ini adalah aliran falsafah abad ke-20 yang dikaitkan dengan tokoh seperti Bertrand Russell dan Karl Popper.",
          d: "Walaupun istilah ini menerangkan sebahagian daripada idea tersebut (alam sebagai mesin), nama spesifik yang digunakan dalam nota untuk merujuk kepada gabungan pemikiran Descartes dan Newton ialah Paradigma Cartesian-Newtonian.",
        },
      },
    },
    {
      id: "tokoh-q5",
      text: 'Siapakah tokoh pemikiran moden yang dikaitkan dengan ungkapan terkenal *"Knowledge is power"* (Ilmu ialah kuasa)?',
      options: [
        { id: "a", text: "John Locke" },
        { id: "b", text: "Rene Descartes" },
        { id: "c", text: "Francis Bacon" },
        { id: "d", text: "Isaac Newton" },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Ini adalah jawapan yang tepat. Nota mengaitkan **Francis Bacon** sebagai salah seorang tokoh utama dalam aliran pemikiran moden dan imej dalam nota secara langsung memaparkan ungkapan ini dengan gambar beliau.",
        incorrect: {
          a: "John Locke ialah seorang empirisis yang terkenal dengan konsep minda sebagai helaian kosong (*tabula rasa*).",
          b: "Rene Descartes ialah seorang rasionalis yang terkenal dengan ungkapan 'Saya berfikir, maka saya wujud'.",
          d: "Isaac Newton ialah seorang saintis dan ahli matematik yang terkenal dengan hukum gerakan dan graviti.",
        },
      },
    },
    {
      id: "tokoh-q6",
      text: "Ketiga-tiga ahli falsafah ini; **John Locke**, **George Berkeley**, dan **David Hume**, tergolong dalam aliran epistemologi yang sama. Aliran ini berpendapat bahawa ilmu yang sahih diperolehi melalui pengalaman sensori atau deria yang lima. Apakah nama aliran tersebut?",
      options: [
        { id: "a", text: "Rasionalisme" },
        { id: "b", text: "Skeptisisme" },
        { id: "c", text: "Empirisisme" },
        { id: "d", text: "Eksistansialisme" },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Ini adalah jawapan yang tepat. Nota secara jelas mengkategorikan **Locke**, **Berkeley**, dan **Hume** sebagai ahli **empirisisme**. Aliran ini menekankan bahawa pengetahuan benar datang daripada persepsi yang diperoleh melalui pengalaman sensori.",
        incorrect: {
          a: "Rasionalisme ialah aliran yang bertentangan, yang menegaskan bahawa ilmu sahih diperoleh melalui akal. Tokohnya termasuk Descartes, Leibniz, dan Spinoza.",
          b: "Skeptisisme ialah sikap meragui kebolehan untuk mencapai pengetahuan yang pasti. Walaupun Hume mempunyai unsur skeptik, aliran utama mereka ialah empirisisme.",
          d: "Ini ialah aliran falsafah moden yang berfokus kepada kebebasan individu dan pencarian makna hidup, dikaitkan dengan tokoh seperti Jean-Paul Sartre dan Albert Camus.",
        },
      },
    },
    {
      id: "tokoh-q7",
      text: "Menurut ahli falsafah aliran Eksistansialisme ini, manusia dilahirkan ke dunia tanpa sebarang panduan, dan menjadi tugas manusia itu sendiri untuk mencari makna dalam kehidupannya. Siapakah tokoh yang dimaksudkan?",
      options: [
        { id: "a", text: "Albert Camus" },
        { id: "b", text: "Friedrich Nietzsche" },
        { id: "c", text: "Jean-Paul Sartre" },
        { id: "d", text: "Karl Popper" },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Ini adalah jawapan yang tepat. Nota secara spesifik mengaitkan pandangan bahawa 'manusia itu lahir tanpa panduan dalam hidup' dengan aliran Eksistansialisme seperti yang dikemukakan oleh **Jean-Paul Sartre**.",
        incorrect: {
          a: "Walaupun Albert Camus juga seorang eksistensialis, nota secara khusus menyebut nama Jean-Paul Sartre untuk menghuraikan konsep ini.",
          b: "Nietzsche lebih dikaitkan dengan kritikan terhadap moraliti tradisional dan konsep 'kehendak untuk berkuasa'.",
          d: "Karl Popper ialah ahli falsafah sains yang terkenal dengan prinsip pemalsuan (*falsifiability*).",
        },
      },
    },
    {
      id: "tokoh-q8",
      text: "**Auguste Comte** dan **Ernst Mach** adalah dua tokoh yang menyumbang kepada idea bahawa ilmu sains akan menggantikan peranan metafizik. Apakah sistem falsafah yang berteraskan fakta nyata dan hukum sains yang dikaitkan dengan **Ernst Mach**?",
      options: [
        { id: "a", text: "Rasionalisme" },
        { id: "b", text: "Positivisme" },
        { id: "c", text: "Strukturalisme" },
        { id: "d", text: "Idealisme" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Ini adalah jawapan yang betul. Nota menyatakan bahawa **Ernst Mach** menganggap Sains sebagai **Positivisme**. **Auguste Comte** pula menggariskan evolusi pemikiran manusia daripada teologi, ke metafizik, dan akhirnya ke sains (positif).",
        incorrect: {
          a: "Rasionalisme menekankan akal fikiran sebagai sumber utama pengetahuan.",
          c: "Strukturalisme adalah pendekatan dalam kemanusiaan yang menganalisis fenomena budaya melalui sistem tanda dan struktur.",
          d: "Idealisme berpendapat bahawa realiti pada asasnya bersifat mental atau idea.",
        },
      },
    },
    {
      id: "tokoh-q9",
      text: "Falsafah **Evolutionisme** oleh **Charles Darwin** telah digunakan oleh orientalis Barat untuk menyokong pandangan Eurosentrisme. Bagaimanakah falsafah ini diaplikasikan dalam konteks tersebut?",
      options: [
        {
          id: "a",
          text: "Dengan menganggap semua tamadun berkembang secara sama rata.",
        },
        {
          id: "b",
          text: "Dengan menganggap tamadun Timur lebih spiritual dan maju dari segi rohani.",
        },
        {
          id: "c",
          text: "Dengan menganggap tamadun Barat sebagai lebih tinggi dan agung berbanding masyarakat Timur.",
        },
        {
          id: "d",
          text: "Dengan menafikan kewujudan perbezaan antara tamadun Barat dan Timur.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Ini adalah jawapan yang tepat. Nota menjelaskan bahawa orientalis Barat yang berpegang kepada falsafah **evolutionisme** (**Charles Darwin**) menganggap tamadun Barat lebih tinggi dan agung, manakala masyarakat Timur yang masih berpegang kepada agama dianggap mundur.",
        incorrect: {
          a: "Ini bertentangan dengan pandangan Eurosentrisme yang bersifat hierarki.",
          b: "Menurut nota, pandangan Eurosentrisme melihat pegangan agama masyarakat Timur sebagai satu kemunduran.",
          d: "Pandangan ini menekankan dan membesar-besarkan perbezaan untuk mewajarkan anggapan keunggulan Barat.",
        },
      },
    },
    {
      id: "tokoh-q10",
      text: "**Bertrand Russell** dan **Karl Popper** merupakan dua ahli falsafah abad ke-20 yang disebut dalam nota sebagai tokoh yang membawa aliran pemikiran yang sama. Apakah aliran tersebut?",
      options: [
        { id: "a", text: "Pascamodenisme dan Relativisme" },
        { id: "b", text: "Eksistansialisme dan Humanisme" },
        { id: "c", text: "Modenisme dan Positivisme Logik" },
        { id: "d", text: "Empirisisme dan Rasionalisme" },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Ini adalah jawapan yang betul. Nota menyatakan bahawa keyakinan terhadap aliran modenisme diteruskan pada abad ke-20 dengan adanya ahli falsafah baru seperti **Bertrand Russell** dan **Karl Popper** yang membawa aliran **modenisme dan positivisme logik**.",
        incorrect: {
          a: "Aliran ini merupakan reaksi penentangan terhadap Modenisme, yang dikaitkan dengan tokoh seperti Thomas Kuhn.",
          b: "Eksistansialisme dikaitkan dengan Sartre dan Camus.",
          d: "Ini adalah dua aliran epistemologi klasik yang mendahului falsafah abad ke-20.",
        },
      },
    },
    {
      id: "tokoh-q11",
      text: "Ahli falsafah **Gottfried Wilhelm Leibniz** dan **Baruch Spinoza** disebut bersama **Descartes** sebagai model ahli falsafah bagi satu aliran epistemologi yang menegaskan bahawa ilmu sahih diperolehi melalui akal yang rasional. Aliran ini dikenali sebagai:",
      options: [
        { id: "a", text: "Empirisisme" },
        { id: "b", text: "Rasionalisme" },
        { id: "c", text: "Dogmatisme" },
        { id: "d", text: "Pragmatisme" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Ini adalah jawapan yang tepat. Nota secara jelas menyenaraikan **Descartes, Leibniz, & Spinoza** sebagai contoh ahli falsafah dalam aliran **Rasionalisme**.",
        incorrect: {
          a: "Empirisisme adalah aliran yang bertentangan, yang menekankan pengalaman deria. Tokohnya ialah Locke, Berkeley, dan Hume.",
          c: "Dogmatisme merujuk kepada penerimaan ilmu melalui wahyu dan tradisi tanpa kritikan.",
          d: "Pragmatisme ialah teori kebenaran yang mengukur sesuatu idea berdasarkan kegunaan praktikalnya.",
        },
      },
    },
    {
      id: "tokoh-q12",
      text: "Manakah antara pernyataan berikut yang **BENAR** mengenai sumbangan **Ernest Garner** dan **Ludwik Fleck**?",
      options: [
        {
          id: "a",
          text: "Ernest Garner mengemukakan teori Egoisme, manakala Ludwik Fleck mengemukakan konsep Deconstruction.",
        },
        {
          id: "b",
          text: "Ernest Garner mengenal pasti tiga aliran pemikiran utama masa kini, manakala Ludwik Fleck menyokong fahaman sosial konstruktivis.",
        },
        {
          id: "c",
          text: "Ernest Garner menyokong fahaman sosial konstruktivis, manakala Ludwik Fleck mengenal pasti tiga aliran pemikiran utama masa kini.",
        },
        {
          id: "d",
          text: "Ernest Garner mengemukakan konsep Deconstruction, manakala Ludwik Fleck mengemukakan teori Egoisme.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Ini adalah jawapan yang betul. Nota menyatakan bahawa **Ernest Garner**, dalam bukunya *Postmodernism, Reason & Religion*, mengenal pasti tiga aliran pemikiran utama. Nota juga menyatakan **Ludwik Fleck** sebagai seorang ahli sosiologi yang menyokong fahaman sosial konstruktivis dengan mengkaji sejarah perubatan.",
        incorrect: {
          a: "Kedua-dua padanan salah. Teori Egoisme oleh Friedrich Nietzsche, dan konsep Deconstruction oleh Jacques Derrida.",
          c: "Padanan ini terbalik dan salah.",
          d: "Kedua-dua padanan salah. Konsep Deconstruction oleh Jacques Derrida, dan teori Egoisme oleh Friedrich Nietzsche.",
        },
      },
    },
    {
      id: "tokoh-q13",
      text: "Dalam bukunya *Brief Answers to The Big Questions*, **Stephen Hawking** mengukuhkan fahaman Ateisme dengan menyatakan bahawa...",
      options: [
        {
          id: "a",
          text: "Tuhan wujud tetapi tidak campur tangan dalam urusan alam semesta.",
        },
        {
          id: "b",
          text: "Kewujudan Tuhan tidak dapat diketahui atau dibuktikan oleh manusia.",
        },
        {
          id: "c",
          text: "Tiada sesuatu pun yang mencipta alam semesta dan menentukan takdir, oleh itu tiada kehidupan selepas mati.",
        },
        {
          id: "d",
          text: "Tuhan adalah alam semesta itu sendiri dan semua benda adalah sebahagian daripada Tuhan.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Ini adalah jawapan yang tepat. Teks dalam imej pada nota secara langsung memetik pandangan **Stephen Hawking** dari bukunya, yang menyatakan 'Tuhan itu tidak wujud' dan 'kehidupan selepas mati tidak wujud'.",
        incorrect: {
          a: "Ini adalah fahaman Deisme, bukan Ateisme.",
          b: "Ini adalah fahaman Agnostisisme, yang menyatakan ketidaktahuan.",
          d: "Ini adalah fahaman Panteisme, yang menyamakan Tuhan dengan alam.",
        },
      },
    },
    {
      id: "tokoh-q14",
      text: "Selain mengasaskan teori Egoisme, **Friedrich Nietzsche** turut mencabar konsep insan yang popular dalam falsafah Greek. Apakah konsep yang dicabar oleh beliau?",
      options: [
        {
          id: "a",
          text: "Konsep insan sebagai makhluk yang perlu mencari makna hidupnya sendiri.",
        },
        {
          id: "b",
          text: "Konsep insan sebagai hamba Tuhan yang perlu patuh pada perintah-Nya.",
        },
        {
          id: "c",
          text: "Konsep insan sebagai makhluk yang bersifat logosentrisme atau berpusatkan akal rasional semata-mata.",
        },
        {
          id: "d",
          text: "Konsep insan sebagai kejadian yang mempunyai roh (*atman*) yang akan bergabung dengan *Brahman*.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Ini adalah jawapan yang betul. Nota menyatakan bahawa **Nietzsche** dan golongan *Counter-Enlightenment* mencabar konsep *'man as a rational being'* yang diutarakan oleh Aristotle. Beliau berpendapat bahawa manusia juga mempunyai aspek emosi dan intuitif yang tidak rasional.",
        incorrect: {
          a: "Ini adalah teras falsafah Eksistansialisme yang dikaitkan dengan Jean-Paul Sartre.",
          b: "Ini adalah konsep insan dari falsafah Islam dan Zaman Pertengahan Barat.",
          d: "Ini adalah konsep insan dari tamadun India (Hindu).",
        },
      },
    },
    {
      id: "tokoh-q15",
      text: "Manakah padanan yang **TIDAK TEPAT** antara tokoh falsafah Pascamodenisme/Kontinental dan konsep utama mereka?",
      options: [
        { id: "a", text: "Jacques Derrida - Deconstruction" },
        {
          id: "b",
          text: "Michel Foucault - Hubungan antara ilmu dan kekuasaan (power)",
        },
        { id: "c", text: "Albert Camus - Eksistansialisme" },
        { id: "d", text: "Thomas Kuhn - Logocentrism" },
      ],
      correctOptionId: "d",
      explanation: {
        correct:
          "Ini adalah jawapan yang betul kerana padanannya tidak tepat. **Thomas Kuhn** terkenal dengan teorinya mengenai revolusi saintifik dan anjakan paradigma (*paradigm shift*), bukan *Logocentrism*. *Logocentrism* adalah konsep yang sering dikritik oleh ahli falsafah pascamoden seperti Derrida.",
        incorrect: {
          a: "Padanan ini tepat. Nota mengaitkan **Jacques Derrida** dengan fahaman *Deconstruction*.",
          b: "Padanan ini tepat. Nota mengaitkan **Michel Foucault** dengan konsep ilmu dan hubungannya dengan kekuasaan (*power*).",
          c: "Padanan ini tepat. Nota mengaitkan **Albert Camus** dengan aliran *Eksistansialisme*.",
        },
      },
    },
  ],
};
