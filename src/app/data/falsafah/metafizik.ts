import { Quiz } from "@/app/types/quiz";

export const metafizik: Quiz = {
  id: "falsafah-topik-5",
  categoryId: "falsafah",
  subcategoryId: "topik-5",
  title: "Topik 5 - Metafizik",
  questions: [
    {
      id: "meta-q1",
      text: 'Apakah maksud asas "Meta" dalam istilah Metafizik menurut etimologi?',
      options: [
        { id: "a", text: "Kajian mengenai alam fizikal secara khusus." },
        {
          id: "b",
          text: "Sesuatu yang melampaui, melebihi, atau berada di atas tingkatan fizikal.",
        },
        {
          id: "c",
          text: "Falsafah yang berpaksikan jasad dan jirim semata-mata.",
        },
        {
          id: "d",
          text: "Realiti yang terhad kepada ruang dan waktu yang boleh diukur.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          '"Meta" secara etimologi bermaksud melampaui atau di atas. Apabila digabungkan dengan "Fizik", ia membawa maksud suatu kajian yang melampaui batasan fizikal.',
        incorrect: {
          a: "Ini merujuk kepada 'Fizik' itu sendiri, iaitu kajian mengenai alam material.",
          c: "Ini lebih merujuk kepada fahaman Materialisme, bukan maksud 'Meta' itu sendiri.",
          d: "Metafizik seringkali membincangkan perkara yang tidak terikat dengan ruang dan waktu.",
        },
      },
    },
    {
      id: "meta-q2",
      text: "Metafizik dianggap sebagai 'kajian peringkat kedua' (second order study) kerana...",
      options: [
        {
          id: "a",
          text: "Ia merupakan cabang falsafah yang kurang penting berbanding sains.",
        },
        {
          id: "b",
          text: "Ia mengkaji semula kesimpulan sains untuk mencari kesilapan fakta.",
        },
        {
          id: "c",
          text: "Ia melihat dan menilai sifat, batasan, dan hubungan ilmu (seperti sains) dari aras yang lebih tinggi dan abstrak.",
        },
        {
          id: "d",
          text: "Ia hanya berfokus kepada perkara-perkara yang berlaku selepas kajian sains selesai.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Jika sains berada di 'object level', falsafah sains (metafizik) berada di 'meta level' untuk merenung sifat dan batasan ilmu dari perspektif yang lebih luas.",
        incorrect: {
          a: "'Peringkat kedua' merujuk kepada tahap keabstrakan, bukan hierarki kepentingan.",
          b: "Metafizik tidak mengkritik kandungan atau teori sains, tetapi batasan ilmu sains itu sendiri.",
          d: "Ia bukan kajian susulan, tetapi kajian yang selari pada aras pemikiran yang berbeza.",
        },
      },
    },
    {
      id: "meta-q3",
      text: "Manakah antara berikut BUKAN nama lain yang pernah digunakan untuk merujuk kepada cabang falsafah metafizik?",
      options: [
        { id: "a", text: "First Philosophy" },
        { id: "b", text: "Positivism" },
        { id: "c", text: "Wisdom" },
        { id: "d", text: "Theology" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Positivisme adalah sistem falsafah yang menolak metafizik kerana pernyataannya tidak dapat diuji secara empirikal. Ia adalah penentang metafizik, bukan nama lainnya.",
        incorrect: {
          a: "'First Philosophy' adalah salah satu nama bagi metafizik kerana ia mengkaji prinsip-prinsip pertama kewujudan.",
          c: "'Wisdom' adalah salah satu nama bagi metafizik.",
          d: "'Theology' adalah salah satu nama bagi metafizik, terutamanya yang berkaitan dengan ketuhanan.",
        },
      },
    },
    {
      id: "meta-q4",
      text: "Menurut Aristotle, apabila semua sifat khusus (warna, bau, tekstur) pada sebuah objek diabaikan, apakah yang akan tinggal?",
      options: [
        { id: "a", text: "Tenaga dalaman objek." },
        { id: "b", text: "Idea atau konsep objek tersebut." },
        {
          id: "c",
          text: "Substance, iaitu esen kewujudan yang tidak mempunyai kualiti khusus.",
        },
        { id: "d", text: "Sensasi yang diterima oleh pancaindera." },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Aristotle menyatakan bahawa yang tinggal selepas semua sifat khusus diabaikan adalah 'substance', yang merupakan gabungan jisim dan rupa bentuk (matter and form).",
        incorrect: {
          a: "Konsep tenaga moden tidak dibincangkan oleh Aristotle dalam konteks ini.",
          b: "Ini lebih menjurus kepada pandangan Plato atau Teori Idealisme.",
          d: "Sensasi adalah tanggapan deria terhadap sifat-sifat khusus, iaitu perkara yang cuba diabaikan.",
        },
      },
    },
    {
      id: "meta-q5",
      text: "Metafizik dari sudut keagamaan melibatkan perbincangan tentang fenomena di luar alam nyata. Manakah antara berikut tergolong dalam kategori ini? I. Kehidupan selepas mati, II. Kewujudan syurga dan neraka, III. Hidup di alam barzakh, IV. Proses kejadian alam secara fizikal",
      options: [
        { id: "a", text: "I, II dan III sahaja" },
        { id: "b", text: "I, II dan IV sahaja" },
        { id: "c", text: "II, III dan IV sahaja" },
        { id: "d", text: "Semua di atas" },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Kehidupan selepas mati, syurga, neraka, dan alam barzakh adalah contoh perkara ghaib yang menjadi subjek perbincangan metafizik keagamaan.",
        incorrect: {
          b: "Proses kejadian alam secara fizikal (IV) adalah kajian kosmologi yang boleh dibincangkan dari sudut sains, bukan semata-mata metafizik keagamaan.",
          c: "Proses kejadian alam secara fizikal (IV) adalah kajian kosmologi, bukan metafizik keagamaan.",
          d: "Pilihan ini salah kerana item IV bukan sebahagian daripada metafizik keagamaan.",
        },
      },
    },
    {
      id: "meta-q6",
      text: "Bagaimanakah fahaman Materialisme menjelaskan kewujudan idea atau pemikiran?",
      options: [
        {
          id: "a",
          text: "Idea adalah entiti kerohanian yang bebas daripada jasad.",
        },
        {
          id: "b",
          text: "Idea tidak mempunyai realiti tersendiri dan bergantung sepenuhnya pada fungsi otak yang bersifat fizikal.",
        },
        {
          id: "c",
          text: "Idea adalah ilusi semata-mata dan tidak benar-benar wujud.",
        },
        {
          id: "d",
          text: "Idea wujud dalam alam mental yang terpisah daripada alam fizikal.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Pihak Materialis berhujah bahawa idea tidak mempunyai realiti tersendiri tetapi bergantung kepada sesuatu yang bersifat jasad, iaitu otak. Minda adalah hasil daripada pergerakan fizikal dalam otak kita.",
        incorrect: {
          a: "Ini adalah pandangan yang ditolak oleh Materialisme kerana ia menafikan hal kerohanian.",
          c: "Materialisme tidak menafikan kewujudan idea (kerana kita berfikir), tetapi menafikan sifat bebasnya daripada jasad.",
          d: "Ini lebih mencerminkan pandangan dualisme atau idealisme, bukan materialisme.",
        },
      },
    },
    {
      id: "meta-q7",
      text: '"Kita tidak mengenali jasad yang berada di luar sana secara langsung, tetapi kita hanya mempunyai sensasi ataupun imej akan jasad tersebut di dalam minda kita." Pernyataan ini paling tepat menggambarkan pandangan:',
      options: [
        { id: "a", text: "Teori Materialisme" },
        { id: "b", text: "Teori Idealisme" },
        { id: "c", text: "Fahaman Realisme" },
        { id: "d", text: "Fahaman Determinisme" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Ini adalah hujah utama Teori Idealisme. Realiti tidak ditanggapi secara langsung, tetapi yang ditanggapi ialah sensasi objek di dalam minda.",
        incorrect: {
          a: "Materialisme berpegang bahawa jasad wujud secara hakiki dan boleh dikenal secara langsung.",
          c: "Realisme berpendapat alam wujud secara objektif dan nyata, bebas dari minda kita.",
          d: "Determinisme adalah fahaman tentang sebab-akibat, bukan tentang cara kita mempersepsi realiti.",
        },
      },
    },
    {
      id: "meta-q8",
      text: "Apakah perbezaan asas antara Ateisme dan Agnostisisme?",
      options: [
        {
          id: "a",
          text: "Ateisme menolak kewujudan Tuhan, manakala Agnostisisme menerima kewujudan banyak tuhan.",
        },
        {
          id: "b",
          text: "Ateisme yakin Tuhan tidak wujud, manakala Agnostisisme berpendapat kewujudan Tuhan tidak dapat diketahui.",
        },
        {
          id: "c",
          text: "Ateisme adalah fahaman saintifik, manakala Agnostisisme adalah fahaman keagamaan.",
        },
        {
          id: "d",
          text: "Ateisme menafikan kehidupan selepas mati, manakala Agnostisisme menerimanya.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Ateisme membuat pendirian ontologi ('Tuhan tidak wujud'). Agnostisisme membuat pendirian epistemologi ('Kewujudan Tuhan tidak boleh diketahui oleh manusia').",
        incorrect: {
          a: "Menerima kewujudan banyak tuhan adalah Politeisme, bukan Agnostisisme.",
          c: "Kedua-duanya adalah pendirian falsafah, bukan satu saintifik dan satu lagi keagamaan.",
          d: "Kedua-dua fahaman ini umumnya skeptikal terhadap konsep kehidupan selepas mati.",
        },
      },
    },
    {
      id: "meta-q9",
      text: "Fahaman Monoteisme dan Politeisme kedua-duanya tergolong dalam aliran yang lebih besar iaitu:",
      options: [
        { id: "a", text: "Agnostisisme" },
        { id: "b", text: "Ateisme" },
        { id: "c", text: "Teisme" },
        { id: "d", text: "Pluralisme" },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Teisme adalah fahaman umum yang mempercayai kewujudan Tuhan. Ia kemudiannya diperincikan kepada Monoteisme (satu Tuhan) dan Politeisme (banyak tuhan).",
        incorrect: {
          a: "Agnostisisme adalah pendirian tidak tahu, bukan kepercayaan akan kewujudan Tuhan.",
          b: "Ateisme menafikan kewujudan Tuhan.",
          d: "Pluralisme adalah kepercayaan bahawa semua agama adalah benar, satu konsep yang berbeza.",
        },
      },
    },
    {
      id: "meta-q10",
      text: "Dalam konsep Determinisme, setiap tindakan manusia boleh diterangkan melalui...",
      options: [
        { id: "a", text: "Kehendak bebas (free-will) yang mutlak." },
        { id: "b", text: "Kebetulan dan nasib semata-mata." },
        { id: "c", text: "Rantaian hukum sebab-akibat (cause and effect)." },
        { id: "d", text: "Intervensi kuasa ghaib secara rawak." },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Determinisme adalah fahaman bahawa semua tindakan dan kejadian, termasuk tindakan manusia, boleh diterangkan secara sebab-musabab atau mengikut hukum yang ditetapkan.",
        incorrect: {
          a: "Kehendak bebas adalah konsep yang sering dibahaskan sebagai antitesis kepada determinisme.",
          b: "Determinisme menolak penjelasan berasaskan kebetulan dan menggantikannya dengan sebab yang boleh dikenal pasti.",
          d: "Walaupun ada bentuk determinisme teologi, konsep umumnya merujuk kepada hukum sebab-akibat yang teratur.",
        },
      },
    },
    {
      id: "meta-q11",
      text: "Apakah yang dimaksudkan dengan 'Ontologi' dalam kajian metafizik?",
      options: [
        { id: "a", text: "Kajian tentang asal-usul alam semesta." },
        { id: "b", text: "Kajian tentang hakikat kewujudan itu sendiri." },
        { id: "c", text: "Kajian tentang hubungan sebab dan akibat." },
        { id: "d", text: "Kajian tentang kaedah memperoleh ilmu." },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Ontologi adalah cabang metafizik yang mengkaji teori tentang hakikat atau sifat kewujudan.",
        incorrect: {
          a: "Ini adalah bidang Kosmologi atau Kosmogoni.",
          c: "Ini adalah kajian tentang Kausaliti (Causality).",
          d: "Ini adalah bidang Epistemologi (teori ilmu).",
        },
      },
    },
    {
      id: "meta-q12",
      text: "Menurut perspektif Islam dalam nota, bagaimanakah proses awal kejadian alam semesta?",
      options: [
        {
          id: "a",
          text: "Melalui satu letupan besar yang dikenali sebagai Big Bang.",
        },
        {
          id: "b",
          text: "Langit dan bumi pada asalnya bercantum sebagai satu jasad, kemudian dipisahkan oleh Allah.",
        },
        {
          id: "c",
          text: "Alam semesta wujud dalam keadaan statik tanpa permulaan dan pengakhiran.",
        },
        {
          id: "d",
          text: "Alam semesta dicipta serta-merta dalam bentuknya sekarang dalam masa enam hari.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Berdasarkan Surah al-Anbiya ayat 30, dinyatakan bahawa langit dan bumi pada asalnya adalah satu jisim yang bersatu, lalu Allah memisahkannya.",
        incorrect: {
          a: "Teori Big Bang adalah teori dari perspektif Barat, walaupun ia mempunyai persamaan dengan tafsiran ayat al-Quran.",
          c: "Ini adalah Teori Keadaan Statik (Steady State Theory) dari Barat.",
          d: "Nota ini secara spesifik merujuk kepada ayat 30 Surah al-Anbiya mengenai proses pemisahan jisim awal.",
        },
      },
    },
    {
      id: "meta-q13",
      text: "Teori Ledakan Besar (Big Bang Theory) dan Teori Kehancuran Besar (Big Crunch Theory) dalam kosmologi Barat masing-masing menerangkan tentang:",
      options: [
        { id: "a", text: "Permulaan alam dan pengembangan galaksi." },
        {
          id: "b",
          text: "Pengembangan galaksi dan pelanggaran antara galaksi.",
        },
        { id: "c", text: "Permulaan alam dan pengakhiran alam." },
        { id: "d", text: "Keadaan statik alam dan kehancuran alam." },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Teori Ledakan Besar adalah teori tentang permulaan alam semesta. Teori Kehancuran Besar pula adalah salah satu teori tentang bagaimana alam semesta akan berakhir.",
        incorrect: {
          a: "Ini hanya menerangkan sebahagian daripada Teori Ledakan Besar.",
          b: "Ini adalah sebahagian daripada kedua-dua teori tetapi bukan ringkasan terbaik.",
          d: "Keadaan statik adalah teori yang berbeza (Steady State Theory).",
        },
      },
    },
    {
      id: "meta-q14",
      text: "Bagaimanakah ahli sains mengkategorikan oksigen dan angin sebagai sesuatu yang bersifat jasad atau fizikal, walaupun tidak dapat dilihat?",
      options: [
        {
          id: "a",
          text: "Kerana ia wujud dalam minda dan idea manusia secara universal.",
        },
        {
          id: "b",
          text: "Kerana ia boleh dikesan melalui kesannya terhadap alam fizikal dan melalui eksperimen.",
        },
        {
          id: "c",
          text: "Kerana ia tergolong dalam konsep idealisme yang menerima kewujudan bukan material.",
        },
        {
          id: "d",
          text: "Kerana ia adalah entiti kerohanian yang diterima dalam kepercayaan agama.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Kriteria bagi ahli sains untuk mengatakan sesuatu itu bersifat fizikal adalah ia boleh dikesan dengan pancaindera atau mempunyai kesan yang boleh diukur.",
        incorrect: {
          a: "Ini adalah hujah idealisme, bukan sains fizikal.",
          c: "Mengkategorikannya sebagai idealisme bermakna ia dianggap bukan bersifat jasad, yang bertentangan dengan pandangan sains.",
          d: "Sains tidak menggunakan kepercayaan agama untuk mengklasifikasikan fenomena alam.",
        },
      },
    },
    {
      id: "meta-q15",
      text: "Hubungan insan dengan alam dianggap 'hubungan horizontal', manakala hubungan insan dengan Tuhan dianggap 'hubungan vertikal'. Apakah implikasi pandangan ini?",
      options: [
        {
          id: "a",
          text: "Hubungan dengan alam lebih penting daripada hubungan dengan Tuhan.",
        },
        {
          id: "b",
          text: "Hubungan dengan Tuhan menentukan kualiti hubungan dengan alam dan sesama manusia.",
        },
        {
          id: "c",
          text: "Hubungan horizontal dan vertikal adalah dua perkara terpisah yang tidak saling mempengaruhi.",
        },
        {
          id: "d",
          text: "Hubungan vertikal hanya relevan dalam konteks keagamaan.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota menyatakan bahawa gerak laku manusia terhadap alam (horizontal) selalunya bergantung kepada hubungan manusia dengan Tuhan (vertikal).",
        incorrect: {
          a: "Nota tidak menyatakan keutamaan sedemikian; sebaliknya, ia mengaitkan keduanya.",
          c: "Nota secara jelas menyatakan bahawa kedua-dua hubungan ini saling mempengaruhi.",
          d: "Kedua-dua hubungan ini adalah sebahagian daripada perbincangan metafizik yang merangkumi falsafah, sains, dan agama.",
        },
      },
    },
    {
      id: "meta-q16",
      text: "Aliran Atomisme dalam sistem metafizik berpegang kepada kepercayaan bahawa:",
      options: [
        {
          id: "a",
          text: "Jiwa dan tubuh hanya berhubung melalui perantaraan Tuhan.",
        },
        {
          id: "b",
          text: "Realiti tidak boleh dipisahkan daripada persepsi manusia.",
        },
        {
          id: "c",
          text: "Dunia fizikal terbentuk daripada komponen asas yang tidak boleh dipecahkan lagi.",
        },
        {
          id: "d",
          text: "Hanya ada satu entiti tunggal yang membentuk keseluruhan alam.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Atomisme adalah kepercayaan bahawa dunia fizikal terbentuk daripada komponen atom yang tidak boleh dirungkai atau dipecahkan lagi.",
        incorrect: {
          a: "Ini adalah kepercayaan Okasionalisme (Occasionalism).",
          b: "Ini adalah kepercayaan Idealisme.",
          d: "Ini adalah kepercayaan Monoisme (Monism).",
        },
      },
    },
    {
      id: "meta-q17",
      text: "Apakah kritikan utama golongan positivis seperti Ernst Mach terhadap metafizik?",
      options: [
        {
          id: "a",
          text: "Metafizik terlalu bergantung kepada logik dan akal rasional.",
        },
        {
          id: "b",
          text: "Metafizik gagal memberikan penjelasan yang memuaskan tentang kewujudan Tuhan.",
        },
        {
          id: "c",
          text: "Pernyataan metafizik tidak mempunyai makna kerana tidak boleh disahkan melalui pengalaman deria.",
        },
        {
          id: "d",
          text: "Metafizik adalah ajaran sesat yang bertentangan dengan semua agama.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Golongan positivis menolak sebarang perkara yang tidak boleh disahkan (not verifiable) dengan pengalaman kerana ia dianggap tidak mempunyai apa-apa makna.",
        incorrect: {
          a: "Kritikan mereka bukan pada penggunaan logik, tetapi pada kekurangan asas empirikal.",
          b: "Walaupun ini mungkin satu isu, kritikan utama positivis adalah lebih meluas dan fundamental.",
          d: "Kritikan positivis adalah dari sudut falsafah ilmu, bukan dari sudut teologi.",
        },
      },
    },
    {
      id: "meta-q18",
      text: "Mengapakah pandangan agama dikatakan menolak fahaman materialisme?",
      options: [
        {
          id: "a",
          text: "Kerana agama hanya menerima realiti yang bersifat kerohanian atau idea semata-mata.",
        },
        {
          id: "b",
          text: "Kerana materialisme gagal menjelaskan fenomena sebab dan akibat.",
        },
        {
          id: "c",
          text: "Kerana agama mempercayai realiti merangkumi jasad dan kerohanian, manakala materialisme menolak realiti kerohanian.",
        },
        {
          id: "d",
          text: "Kerana materialisme adalah satu fahaman yang tidak saintifik.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Realiti bagi pandangan agama melibatkan jasad dan kerohanian. Ini berbeza dengan pandangan materialis yang menolak realiti kerohanian atau mental.",
        incorrect: {
          a: "Ini lebih mirip kepada idealisme ekstrem. Agama menerima kedua-dua realiti jasad dan rohani.",
          b: "Materialisme boleh memberikan penjelasan sebab dan akibat dari sudut fizikal.",
          d: "Materialisme sering dikaitkan dengan pandangan dunia saintifik, jadi kritikan ini tidak tepat.",
        },
      },
    },
    {
      id: "meta-q19",
      text: "Manakah antara berikut BUKAN bidang perbincangan dalam Ontologi menurut rajah yang diberi?",
      options: [
        { id: "a", text: "Minda (Mind) dan jirim (Matter)" },
        { id: "b", text: "Subjek, predikat dan taksonomi" },
        {
          id: "c",
          text: "Kehendak bebas (Free-will) dan ketentuan (Determinism)",
        },
        {
          id: "d",
          text: "Sebab-akibat (Causality) dan asal-usul alam (Cosmogony)",
        },
      ],
      correctOptionId: "d",
      explanation: {
        correct:
          "Sebab-akibat dan kosmogoni (asal-usul alam semesta) disenaraikan di bawah bidang Kosmologi, bukan Ontologi, dalam rajah yang disediakan.",
        incorrect: {
          a: "Minda dan jirim adalah perbincangan dalam Ontologi.",
          b: "Subjek, predikat dan taksonomi adalah perbincangan dalam Ontologi.",
          c: "Kehendak bebas dan ketentuan adalah perbincangan dalam Ontologi.",
        },
      },
    },
    {
      id: "meta-q20",
      text: "Fahaman 'Realisme' dalam konteks metafizik bermaksud:",
      options: [
        {
          id: "a",
          text: "Kepercayaan bahawa realiti bergantung kepada persepsi individu.",
        },
        {
          id: "b",
          text: "Kepercayaan bahawa dunia wujud secara seadanya, objektif dan nyata.",
        },
        {
          id: "c",
          text: "Kepercayaan bahawa semua agama adalah benar dan membawa ke jalan yang sama.",
        },
        {
          id: "d",
          text: "Kepercayaan bahawa tindakan manusia ditentukan oleh faktor luaran.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Realisme adalah kepercayaan terhadap dunia tanpa ilusi, di mana alam wujud secara nyata dan objektif, atau 'seadanya'.",
        incorrect: {
          a: "Ini adalah fahaman Idealisme.",
          c: "Ini adalah fahaman Pluralisme.",
          d: "Ini adalah sebahagian daripada fahaman Determinisme (ekstrinsik).",
        },
      },
    },
    {
      id: "meta-q21",
      text: "Manakah antara berikut menerangkan 'Alam Musyahadah' dan 'Alam Ghaib' menurut perspektif Islam?",
      options: [
        {
          id: "a",
          text: "Alam Musyahadah adalah alam nyata, manakala Alam Ghaib adalah alam khayalan.",
        },
        {
          id: "b",
          text: "Alam Musyahadah dapat dilihat oleh pancaindera, manakala Alam Ghaib hanya diketahui melalui wahyu.",
        },
        {
          id: "c",
          text: "Alam Musyahadah merujuk kepada bumi, manakala Alam Ghaib merujuk kepada langit.",
        },
        {
          id: "d",
          text: "Alam Musyahadah dikaji oleh sains, manakala Alam Ghaib dikaji oleh falsafah.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Alam Musyahadah adalah alam yang dapat dilihat oleh pancaindera (haiwan, laut), manakala Alam Ghaib tidak dapat ditanggapi oleh deria dan dirujuk melalui wahyu (alam kubur, syurga).",
        incorrect: {
          a: "Islam tidak menganggap Alam Ghaib sebagai khayalan, tetapi sebagai satu realiti yang wujud.",
          c: "Langit adalah sebahagian daripada Alam Musyahadah (dapat dilihat).",
          d: "Kedua-duanya boleh menjadi subjek perbincangan falsafah dan teologi.",
        },
      },
    },
    {
      id: "meta-q22",
      text: "Fahaman 'Okasionalisme' (Occasionalism) mencadangkan satu pandangan unik mengenai hubungan sebab dan akibat. Apakah pandangan tersebut?",
      options: [
        {
          id: "a",
          text: "Setiap kejadian adalah disebabkan oleh rantaian sebab dan akibat yang tidak berkesudahan.",
        },
        {
          id: "b",
          text: "Hubungan sebab dan akibat adalah ilusi, tiada apa yang benar-benar menyebabkan sesuatu.",
        },
        {
          id: "c",
          text: "Jiwa dan tubuh tidak mempunyai hubungan sebab-akibat secara langsung, sebaliknya setiap interaksi dimungkinkan oleh Tuhan.",
        },
        {
          id: "d",
          text: "Manusia mempunyai kehendak bebas untuk memulakan rantaian sebab dan akibat yang baru.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Okasionalisme berkepercayaan bahawa jiwa dan tubuh tidak berhubung secara langsung, tetapi hanya dimungkinkan dengan perantaraan Tuhan pada setiap 'kesempatan' (occasion).",
        incorrect: {
          a: "Ini adalah pandangan umum tentang sebab-akibat, bukan pandangan khusus Okasionalisme.",
          b: "Ini lebih mirip pandangan skeptikal radikal.",
          d: "Ini lebih berkaitan dengan perdebatan kehendak bebas melawan determinisme.",
        },
      },
    },
    {
      id: "meta-q23",
      text: "Stephen Hawking, dalam bukunya, dirujuk sebagai penyokong fahaman Ateisme. Apakah antara hujahnya?",
      options: [
        {
          id: "a",
          text: "Tuhan wujud tetapi tidak mengambil peduli tentang alam semesta.",
        },
        {
          id: "b",
          text: "Kewujudan Tuhan mungkin, tetapi tidak dapat dibuktikan secara saintifik.",
        },
        {
          id: "c",
          text: "Tiada sesuatu pun yang mencipta alam semesta dan menentukan takdir manusia.",
        },
        {
          id: "d",
          text: "Alam semesta dicipta oleh satu kuasa bijak yang bukan Tuhan seperti dalam agama.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Menurut nota, Stephen Hawking menyatakan bahawa Tuhan itu tidak wujud, dan tiada sesuatu pun yang mencipta alam serta menentukan takdir.",
        incorrect: {
          a: "Ini adalah pandangan Deisme, bukan Ateisme.",
          b: "Ini lebih mirip pandangan Agnostisisme.",
          d: "Ini adalah sejenis teisme falsafah, bukan ateisme.",
        },
      },
    },
    {
      id: "meta-q24",
      text: "Apakah yang dimaksudkan dengan 'Determinisme Intrinsik' dan 'Determinisme Ekstrinsik'?",
      options: [
        {
          id: "a",
          text: "Intrinsik: Kejadian ditentukan oleh Tuhan; Ekstrinsik: Kejadian ditentukan oleh nasib.",
        },
        {
          id: "b",
          text: "Intrinsik: Kejadian ditentukan oleh faktor dalaman diri; Ekstrinsik: Kejadian ditentukan oleh faktor luaran.",
        },
        {
          id: "c",
          text: "Intrinsik: Hanya kejadian mental ditentukan; Ekstrinsik: Hanya kejadian fizikal ditentukan.",
        },
        {
          id: "d",
          text: "Intrinsik: Sebab-akibat boleh diketahui; Ekstrinsik: Sebab-akibat tidak boleh diketahui.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Determinisme Intrinsik menyatakan setiap kejadian berlaku disebabkan diri sendiri, manakala Determinisme Ekstrinsik menyatakan ia berlaku disebabkan oleh faktor luaran.",
        incorrect: {
          a: "Pembahagian ini tidak tepat.",
          c: "Pembahagiannya bukan antara mental dan fizikal.",
          d: "Pembahagiannya bukan mengenai kebolehan untuk mengetahui sebab.",
        },
      },
    },
    {
      id: "meta-q25",
      text: "Manakah hujah yang digunakan oleh fahaman Ateisme untuk menolak kewujudan Tuhan berdasarkan faktor moraliti?",
      options: [
        { id: "a", text: "Tanpa Tuhan, manusia tidak boleh menjadi baik." },
        {
          id: "b",
          text: "Moraliti adalah bukti kewujudan Tuhan dalam sanubari manusia.",
        },
        {
          id: "c",
          text: "Kebolehan manusia untuk berlaku baik atau jahat tidak memerlukan kewujudan Tuhan atau syaitan.",
        },
        {
          id: "d",
          text: "Tuhan diperlukan untuk menetapkan undang-undang moral yang mutlak.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota menyatakan bahawa penekanan melalui faktor moraliti menganggap bahawa kebolehan manusia untuk berlaku baik atau sebaliknya tidak memerlukan kewujudan Tuhan dan syaitan.",
        incorrect: {
          a: "Ini adalah hujah yang sering digunakan oleh golongan teisme, bukan ateisme.",
          b: "Ini juga adalah hujah teisme (hujah moral untuk kewujudan Tuhan).",
          d: "Ini adalah hujah teisme untuk menyokong kewujudan Tuhan sebagai pemberi hukum.",
        },
      },
    },
    {
      id: "meta-q26",
      text: "Apakah perbezaan antara Teori Keadaan Statik (Steady State Theory) dan Teori Ledakan Besar (Big Bang Theory)?",
      options: [
        {
          id: "a",
          text: "Teori Statik mengatakan alam mengembang, manakala Teori Ledakan Besar mengatakan alam mengecut.",
        },
        {
          id: "b",
          text: "Teori Statik mengatakan alam tiada permulaan dan pengakhiran, manakala Teori Ledakan Besar mengatakan alam ada permulaan.",
        },
        {
          id: "c",
          text: "Teori Statik disokong oleh Albert Einstein, manakala Teori Ledakan Besar disokong oleh Fred Hoyle.",
        },
        {
          id: "d",
          text: "Teori Statik diterima oleh Islam, manakala Teori Ledakan Besar ditolak.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Perbezaan asasnya ialah Teori Keadaan Statik mengatakan alam semesta tiada awalan dan tiada penghujung, manakala Teori Ledakan Besar mengatakan alam bermula dari satu letupan.",
        incorrect: {
          a: "Teori Ledakan Besar mengatakan alam mengembang.",
          c: "Teori Ledakan Besar diasaskan dari teori Einstein, manakala Fred Hoyle adalah penyokong utama Teori Keadaan Statik.",
          d: "Perspektif Islam dilihat lebih serasi dengan Teori Ledakan Besar berbanding Teori Statik.",
        },
      },
    },
    {
      id: "meta-q27",
      text: "Fahaman Nominalisme (Nominalism) adalah kepercayaan bahawa...",
      options: [
        {
          id: "a",
          text: "Konsep umum tentang sesuatu perkara menunjukkan perkara yang sebenar.",
        },
        {
          id: "b",
          text: "Konsep umum (seperti 'kemanusiaan') tidak merujuk kepada entiti sebenar, tetapi hanyalah nama.",
        },
        {
          id: "c",
          text: "Setiap nama atau perkataan mempunyai realiti tersendiri di alam idea.",
        },
        {
          id: "d",
          text: "Realiti adalah gabungan antara nama dan objek yang dirujuk.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nominalisme adalah kepercayaan bahawa konsep umum atau abstrak tentang sesuatu perkara tidak menunjukkan perkara yang sebenar, ia hanyalah nama atau label.",
        incorrect: {
          a: "Ini adalah pandangan Realisme (dalam konteks perdebatan universals), yang ditentang oleh Nominalisme.",
          c: "Ini lebih mirip kepada pandangan Platonisme.",
          d: "Ini tidak menangkap inti pati fahaman Nominalisme.",
        },
      },
    },
    {
      id: "meta-q28",
      text: "Bagaimanakah seseorang penganut Teori Idealisme akan mentafsir kewujudan sebiji epal di atas meja?",
      options: [
        {
          id: "a",
          text: "Epal itu wujud secara objektif sebagai jirim dan jasad, tidak kira sama ada ia dilihat atau tidak.",
        },
        {
          id: "b",
          text: "Kewujudan epal itu bergantung pada keupayaan kita untuk menyentuh dan merasainya secara fizikal.",
        },
        {
          id: "c",
          text: "Apa yang kita kenali sebagai 'epal' sebenarnya adalah himpunan sensasi (merah, bulat, manis) yang wujud dalam minda kita.",
        },
        {
          id: "d",
          text: "Epal itu adalah simbol kepada konsep yang lebih besar, dan kewujudan fizikalnya tidak penting.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Menurut Idealisme, kita tidak menanggap objek fizikal secara langsung. Apa yang kita tanggap adalah sensasi atau imej yang dikaitkan dengan objek itu, dan sensasi ini bersifat mental.",
        incorrect: {
          a: "Ini adalah pandangan Realisme atau Materialisme.",
          b: "Ini menekankan deria fizikal, tetapi Idealisme menekankan bahawa hasil dari deria itu adalah mental.",
          d: "Ini lebih kepada interpretasi simbolik, bukan ontologi idealis.",
        },
      },
    },
    {
      id: "meta-q29",
      text: "Apakah persoalan utama yang cuba dijawab oleh Teori Materialisme dan Idealisme?",
      options: [
        { id: "a", text: "Bagaimanakah alam semesta bermula?" },
        { id: "b", text: "Apakah sifat kewujudan yang hakiki?" },
        { id: "c", text: "Bagaimanakah manusia boleh mencapai kebahagiaan?" },
        { id: "d", text: "Apakah hubungan antara insan dan Tuhan?" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Kedua-dua teori ini dikemukakan untuk memberi jawapan kepada persoalan metafizik yang paling asas: 'Apakah yang wujud di alam ini?' atau 'Apakah yang dimaksudkan dengan kewujudan yang hakiki?'.",
        incorrect: {
          a: "Ini adalah persoalan Kosmologi.",
          c: "Ini adalah persoalan Etika.",
          d: "Ini adalah persoalan Teologi.",
        },
      },
    },
    {
      id: "meta-q30",
      text: "Pernyataan 'alam wujud secara sendiri' adalah contoh fahaman...",
      options: [
        { id: "a", text: "Determinisme" },
        { id: "b", text: "Mekanisme" },
        { id: "c", text: "Darwinisme" },
        { id: "d", text: "Realisme" },
      ],
      correctOptionId: "d",
      explanation: {
        correct:
          "Nota menyenaraikan Darwinisme di bawah tajuk Realisme, dengan penjelasan bahawa fahaman ini menganggap alam wujud secara nyata, objektif, dan sendiri.",
        incorrect: {
          a: "Determinisme adalah mengenai sebab-akibat bagi setiap tindakan.",
          b: "Mekanisme adalah analogi alam seperti sebuah mesin.",
          c: "Darwinisme adalah teori evolusi, yang merupakan contoh spesifik dalam kerangka Realisme.",
        },
      },
    },
    {
      id: "meta-q31",
      text: "Mengapakah seorang materialis menolak kewujudan roh?",
      options: [
        {
          id: "a",
          text: "Kerana roh tidak dapat dilihat, sama seperti angin dan oksigen.",
        },
        {
          id: "b",
          text: "Kerana roh adalah konsep keagamaan dan materialisme menolak agama.",
        },
        {
          id: "c",
          text: "Kerana tiada bukti fizikal atau kesan jasad yang boleh dikaitkan dengan kewujudan roh.",
        },
        {
          id: "d",
          text: "Kerana konsep roh adalah tidak logik dan bertentangan dengan akal.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Bagi materialis, sesuatu hanya dianggap wujud jika ia bersifat jasad atau mempunyai kesan fizikal yang boleh dikesan. Roh ditolak kerana ia tidak memenuhi kriteria ini.",
        incorrect: {
          a: "Materialis menerima kewujudan angin dan oksigen kerana kesannya dapat dikesan secara fizikal.",
          b: "Walaupun benar, sebab penolakannya adalah lebih fundamental dari segi falsafah.",
          d: "Hujah utama materialis adalah berasaskan bukti empirikal, bukan semata-mata logik abstrak.",
        },
      },
    },
    {
      id: "meta-q32",
      text: "Apakah persamaan antara pandangan Islam tentang kehancuran alam dengan Big Crunch Theory?",
      options: [
        {
          id: "a",
          text: "Kedua-duanya meramalkan tarikh tepat kehancuran alam.",
        },
        {
          id: "b",
          text: "Kedua-duanya menyatakan bahawa alam akan hancur dan musnah pada satu masa nanti.",
        },
        {
          id: "c",
          text: "Kedua-duanya percaya bintang-bintang akan berlanggar disebabkan oleh tarikan graviti.",
        },
        { id: "d", text: "Kedua-duanya adalah berdasarkan wahyu dari Tuhan." },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Kedua-dua perspektif, Islam (konsep Kiamat) dan saintis Barat (melalui teori seperti Big Crunch), percaya bahawa alam ini akan sampai ke penghujungnya.",
        incorrect: {
          a: "Islam menyatakan tiada siapa tahu bila kiamat akan berlaku.",
          c: "Nota menyebut mekanisme yang berbeza (kehilangan daya tarikan).",
          d: "Big Crunch Theory adalah teori saintifik, bukan wahyu.",
        },
      },
    },
    {
      id: "meta-q33",
      text: "Fahaman Pluralisme dalam konteks sistem metafizik dan keagamaan adalah...",
      options: [
        {
          id: "a",
          text: "Kepercayaan bahawa wujud lebih daripada satu Tuhan.",
        },
        {
          id: "b",
          text: "Kepercayaan bahawa alam terbentuk daripada pelbagai jenis unsur.",
        },
        {
          id: "c",
          text: "Kepercayaan yang menerima semua agama sebagai benar.",
        },
        {
          id: "d",
          text: "Kepercayaan bahawa setiap individu mempunyai realiti tersendiri.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Pluralisme adalah kepercayaan yang menerima semua agama-agama yang ada sebagai benar.",
        incorrect: {
          a: "Ini adalah fahaman Politeisme.",
          b: "Ini lebih merujuk kepada konsep falsafah alam kuno.",
          d: "Ini lebih menjurus kepada subjektivisme atau relativisme.",
        },
      },
    },
    {
      id: "meta-q34",
      text: "Menurut fahaman Agnostisisme, mengapa manusia tidak boleh mengetahui kewujudan Tuhan?",
      options: [
        {
          id: "a",
          text: "Kerana Tuhan sengaja menyembunyikan diri daripada manusia.",
        },
        { id: "b", text: "Kerana bukti kewujudan Tuhan telah dimusnahkan." },
        {
          id: "c",
          text: "Kerana keterbatasan atau limitasi deria dan pemikiran manusia.",
        },
        {
          id: "d",
          text: "Kerana semua kitab suci adalah rekaan manusia semata-mata.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Fahaman ini berpandangan bahawa manusia tidak boleh mengetahui sama ada Tuhan wujud atau tidak disebabkan oleh limitasi kebolehan deria dan pemikiran manusia.",
        incorrect: {
          a: "Agnostisisme tidak membuat andaian tentang niat Tuhan.",
          b: "Agnostisisme tidak membuat dakwaan sejarah tentang bukti.",
          d: "Sebab utama pendirian agnostik adalah mengenai batasan kognitif manusia.",
        },
      },
    },
    {
      id: "meta-q35",
      text: "'Alam yang kecil, alam ialah insan yang besar' - Hamka. Pernyataan ini membawa maksud...",
      options: [
        {
          id: "a",
          text: "Manusia adalah lebih berkuasa daripada alam semesta.",
        },
        {
          id: "b",
          text: "Terdapat kesepaduan dan hubungan cerminan antara manusia (mikrokosmos) dan alam (makrokosmos).",
        },
        {
          id: "c",
          text: "Alam semesta adalah terlalu besar untuk difahami oleh akal manusia yang kecil.",
        },
        {
          id: "d",
          text: "Manusia harus menakluki alam untuk membuktikan kehebatannya.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Ungkapan ini merujuk kepada konsep falsafah di mana manusia (alam kecil/mikrokosmos) dilihat sebagai cerminan kepada alam semesta (insan besar/makrokosmos).",
        incorrect: {
          a: "Pernyataan ini tidak merujuk kepada kuasa, tetapi kepada hubungan dan struktur.",
          c: "Walaupun mungkin benar, ini bukan tafsiran langsung bagi ungkapan tersebut.",
          d: "Ini bertentangan dengan idea kesepaduan dan keharmonian yang tersirat.",
        },
      },
    },
    {
      id: "meta-q36",
      text: "Apakah peranan falsafah sains atau kajian metafizik terhadap ilmu sains? I. Mengkritik teori-teori sains yang salah, II. Menetapkan batasan ilmu sains, III. Mengkaji hubungan sains dengan bidang ilmu lain, IV. Menggantikan kaedah saintifik dengan kaedah falsafah.",
      options: [
        { id: "a", text: "I dan IV sahaja" },
        { id: "b", text: "II dan III sahaja" },
        { id: "c", text: "I, II dan III sahaja" },
        { id: "d", text: "Semua di atas" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Metafizik mengkritik sains dari segi batasan ilmunya (II) dan mengkaji hubungannya dengan bidang ilmu lain (III).",
        incorrect: {
          a: "Metafizik tidak mengkritik kandungan teori sains (I) dan tidak bertujuan menggantikan kaedah saintifik (IV).",
          c: "Pilihan ini salah kerana item I tidak betul.",
          d: "Pilihan ini salah kerana item I dan IV tidak betul.",
        },
      },
    },
    {
      id: "meta-q37",
      text: "'Realiti tidak dihadkan hanya kepada yang bersifat material ataupun yang bersifat idea kerohanian semata-mata, tetapi merangkumi keduanya.' Pernyataan ini paling tepat menggambarkan pandangan...",
      options: [
        { id: "a", text: "Materialisme" },
        { id: "b", text: "Idealisme" },
        { id: "c", text: "Keagamaan" },
        { id: "d", text: "Agnostisisme" },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Dari segi keagamaan, realiti tidak dihadkan kepada material atau idea semata-mata, tetapi merangkumi kedua-duanya (jasad dan kerohanian).",
        incorrect: {
          a: "Materialisme menghadkan realiti kepada yang bersifat material sahaja.",
          b: "Idealisme cenderung menghadkan realiti hakiki kepada yang bersifat idea atau mental.",
          d: "Agnostisisme adalah pandangan tentang pengetahuan, bukan tentang komposisi realiti.",
        },
      },
    },
    {
      id: "meta-q38",
      text: "'Proses mental untuk menerangkan fenomena ialah seragam dari sudut kelakuannya.' Pernyataan ini merujuk kepada fahaman...",
      options: [
        { id: "a", text: "Mekanisme" },
        { id: "b", text: "Determinisme" },
        { id: "c", text: "Realisme" },
        { id: "d", text: "Idealisme" },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Fahaman Mekanisme mengandaikan alam dan manusia seperti mesin, di mana proses mental untuk menerangkan fenomena dianggap seragam dan mekanikal.",
        incorrect: {
          b: "Determinisme lebih fokus kepada hubungan sebab-akibat bagi setiap tindakan.",
          c: "Realisme adalah mengenai kewujudan objektif alam.",
          d: "Idealisme adalah mengenai hakikat realiti yang bersifat mental.",
        },
      },
    },
    {
      id: "meta-q39",
      text: "Apakah tujuan penciptaan alam menurut perspektif Islam yang dibincangkan? I. Agar manusia dapat mengenali Tuhan, II. Agar manusia dapat mengeksploitasi sumber alam tanpa had, III. Agar manusia dapat memakmurkan alam, IV. Agar manusia menggunakan sumber alam untuk mengabdikan diri kepada Allah.",
      options: [
        { id: "a", text: "I, II dan III sahaja" },
        { id: "b", text: "I, II dan IV sahaja" },
        { id: "c", text: "I, III dan IV sahaja" },
        { id: "d", text: "Semua di atas" },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Tujuan penciptaan alam adalah agar manusia dapat mengenali Tuhan (I), memakmurkan alam (III), dan menggunakan sumbernya untuk mengabdikan diri kepada Allah (IV).",
        incorrect: {
          a: "Item II (eksploitasi tanpa had) adalah salah.",
          b: "Item II (eksploitasi tanpa had) adalah salah.",
          d: "Pilihan ini salah kerana item II tidak betul.",
        },
      },
    },
    {
      id: "meta-q40",
      text: "Manakah antara berikut yang paling tepat menerangkan fahaman Teisme? I. Kepercayaan akan wujudnya Tuhan, II. Tuhan mungkin tidak dapat dikesan melalui pancaindera biasa, III. Tuhan adalah sebahagian daripada hakikat realiti, IV. Manusia tidak mungkin dapat mengetahui kewujudan Tuhan.",
      options: [
        { id: "a", text: "I dan II sahaja" },
        { id: "b", text: "I, II dan III sahaja" },
        { id: "c", text: "III dan IV sahaja" },
        { id: "d", text: "Semua di atas" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Teisme merangkumi kepercayaan akan kewujudan Tuhan (I), pengakuan bahawa Dia mungkin tidak dapat dikesan cara biasa (II), dan Dia adalah sebahagian dari hakikat realiti (III).",
        incorrect: {
          a: "Pilihan ini tidak lengkap kerana item III juga betul.",
          c: "Item IV adalah fahaman Agnostisisme, bukan Teisme.",
          d: "Pilihan ini salah kerana item IV adalah fahaman Agnostisisme.",
        },
      },
    },
    {
      id: "meta-q41",
      text: "Menurut Auguste Comte, perkembangan pemikiran manusia melalui tiga peringkat. Manakah urutan yang betul?",
      options: [
        { id: "a", text: "Metafizik, Teologi, Sains" },
        { id: "b", text: "Teologi, Metafizik, Sains" },
        { id: "c", text: "Sains, Metafizik, Teologi" },
        { id: "d", text: "Teologi, Sains, Metafizik" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Auguste Comte menggariskan perkembangan pemikiran manusia bermula dari peringkat Teologi, kemudian beralih ke Metafizik, dan akhirnya mencapai peringkat tertinggi iaitu Sains (Positivisme).",
        incorrect: {
          a: "Urutan ini tidak tepat.",
          c: "Urutan ini terbalik.",
          d: "Urutan ini tidak tepat.",
        },
      },
    },
    {
      id: "meta-q42",
      text: "Bagaimanakah seorang materialis akan mengkategorikan oksigen dan angin sebagai sesuatu yang wujud?",
      options: [
        { id: "a", text: "Sebagai entiti kerohanian yang tidak berjisim." },
        {
          id: "b",
          text: "Sebagai konsep idealisme kerana tidak dapat dilihat.",
        },
        {
          id: "c",
          text: "Sebagai sesuatu yang wujud kerana kesannya dapat dikesan oleh pancaindera atau melalui eksperimen.",
        },
        {
          id: "d",
          text: "Sebagai sesuatu yang kewujudannya tidak dapat disahkan.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Walaupun tidak kelihatan, oksigen dan angin dianggap wujud oleh materialis kerana ia adalah sesuatu yang dapat dikesan dengan pancaindera melalui kesannya.",
        incorrect: {
          a: "Materialisme menolak hal kerohanian.",
          b: "Mengkategorikannya sebagai idealisme adalah bertentangan dengan prinsip Materialisme.",
          d: "Kewujudan kedua-duanya boleh disahkan secara saintifik.",
        },
      },
    },
    {
      id: "meta-q43",
      text: "Fahaman yang berpendapat bahawa realiti tidak boleh dipisahkan daripada kefahaman dan persepsi manusia ialah...",
      options: [
        { id: "a", text: "Realisme" },
        { id: "b", text: "Nominalisme" },
        { id: "c", text: "Idealisme" },
        { id: "d", text: "Atomisme" },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Idealisme adalah kepercayaan bahawa realiti tidak boleh dipisahkan daripada kefahaman dan persepsi manusia. Apa yang kita panggil 'realiti' adalah apa yang dipersepsikan oleh minda.",
        incorrect: {
          a: "Realisme berpendapat realiti wujud secara bebas daripada persepsi manusia.",
          b: "Nominalisme adalah mengenai status konsep umum (universals).",
          d: "Atomisme adalah mengenai komposisi fizikal alam semesta.",
        },
      },
    },
    {
      id: "meta-q44",
      text: "Apakah peranan utama wahyu dalam perbincangan metafizik dari sudut keagamaan?",
      options: [
        {
          id: "a",
          text: "Sebagai kaedah untuk mengkaji alam fizikal secara saintifik.",
        },
        {
          id: "b",
          text: "Sebagai satu-satunya sumber pengetahuan yang sah untuk semua perkara.",
        },
        {
          id: "c",
          text: "Sebagai kaedah untuk mengesahkan perkara-perkara ghaib yang tidak dapat disahkan melalui deria.",
        },
        {
          id: "d",
          text: "Sebagai bukti bahawa Teori Materialisme adalah salah.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota menyatakan bahawa perkara-perkara ghaib tidak dapat disahkan melalui deria, tetapi boleh disahkan melalui cara lain iaitu wahyu.",
        incorrect: {
          a: "Akal dan deria juga digunakan untuk mengkaji alam fizikal.",
          b: "Agama mengiktiraf deria dan akal sebagai sumber pengetahuan untuk perkara bukan ghaib.",
          d: "Fungsinya yang utama adalah sebagai sumber maklumat, bukan sebagai hujah falsafah.",
        },
      },
    },
    {
      id: "meta-q45",
      text: "Manakah antara padanan berikut adalah TIDAK BENAR?",
      options: [
        {
          id: "a",
          text: "Ateisme : Kepercayaan bahawa Tuhan itu tidak wujud.",
        },
        { id: "b", text: "Monoteisme : Kepercayaan bahawa Tuhan adalah satu." },
        {
          id: "c",
          text: "Agnostisisme : Pandangan bahawa kewujudan Tuhan tidak dapat diketahui.",
        },
        {
          id: "d",
          text: "Politeisme : Kepercayaan bahawa semua agama adalah sama benar.",
        },
      ],
      correctOptionId: "d",
      explanation: {
        correct:
          "Padanan ini tidak benar. Politeisme adalah kepercayaan bahawa Tuhan wujud lebih daripada satu. Kepercayaan bahawa semua agama adalah benar ialah Pluralisme.",
        incorrect: {
          a: "Padanan ini benar. Ateisme adalah kepercayaan bahawa Tuhan tidak wujud.",
          b: "Padanan ini benar. Monoteisme adalah kepercayaan bahawa Tuhan adalah satu.",
          c: "Padanan ini benar. Agnostisisme adalah pandangan bahawa kewujudan Tuhan tidak dapat diketahui.",
        },
      },
    },
    {
      id: "meta-q46",
      text: "Apakah maksud 'Determinisme Ekstrinsik'?",
      options: [
        {
          id: "a",
          text: "Setiap kejadian berlaku disebabkan oleh kehendak bebas individu.",
        },
        {
          id: "b",
          text: "Setiap kejadian berlaku disebabkan oleh faktor dalaman diri sendiri.",
        },
        {
          id: "c",
          text: "Setiap kejadian berlaku disebabkan oleh faktor luaran atau di luar kawalan manusia.",
        },
        {
          id: "d",
          text: "Setiap kejadian berlaku secara kebetulan tanpa sebarang sebab.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Determinisme Ekstrinsik menyatakan setiap kejadian berlaku disebabkan oleh faktor luaran atau di luar kawalan manusia.",
        incorrect: {
          a: "Ini adalah konsep free will, bukan determinisme.",
          b: "Ini adalah maksud 'Determinisme Intrinsik'.",
          d: "Determinisme menolak konsep kebetulan tanpa sebab.",
        },
      },
    },
    {
      id: "meta-q47",
      text: "Menurut pandangan Islam, hubungan insan dengan alam bertujuan untuk...",
      options: [
        {
          id: "a",
          text: "Mengeksploitasi sumber alam secara maksimum untuk keuntungan.",
        },
        {
          id: "b",
          text: "Mengasingkan diri daripada alam untuk fokus kepada ibadah.",
        },
        {
          id: "c",
          text: "Memelihara alam sebagai ciptaan Allah dan meningkatkan taqwa.",
        },
        {
          id: "d",
          text: "Membuktikan bahawa manusia adalah makhluk yang paling berkuasa.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Tujuan penciptaan alam termasuklah agar manusia memeliharanya, memakmurkannya, dan menggunakannya untuk mengabdikan diri, yang akhirnya meningkatkan taqwa kepada Allah.",
        incorrect: {
          a: "Islam menekankan amanah untuk memakmurkan, bukan mengeksploitasi tanpa had.",
          b: "Islam menggalakkan interaksi yang bertanggungjawab dengan alam, bukan pengasingan.",
          d: "Konsep Islam menekankan peranan manusia sebagai khalifah (pentadbir), bukan penguasa mutlak.",
        },
      },
    },
    {
      id: "meta-q48",
      text: "Apakah pandangan seorang materialis tentang kepercayaan terhadap roh dan malaikat?",
      options: [
        {
          id: "a",
          text: "Kewujudan mereka boleh diterima jika ada bukti saintifik.",
        },
        {
          id: "b",
          text: "Ia adalah perkara yang tidak dapat diketahui, sama seperti kewujudan Tuhan.",
        },
        { id: "c", text: "Ia wujud secara hakiki dalam alam kerohanian." },
        {
          id: "d",
          text: "Ia sebenarnya tidak wujud dan hanya wujud dalam imaginasi manusia.",
        },
      ],
      correctOptionId: "d",
      explanation: {
        correct:
          "Bagi pihak materialis, perkara-perkara seperti roh, jin, dan malaikat sebenarnya tidak wujud, tetapi hanya wujud dalam imaginasi kita.",
        incorrect: {
          a: "Konsep seperti roh dan malaikat secara dasarnya bersifat bukan fizikal, maka ia ditolak dari awal.",
          b: "Ini adalah pandangan Agnostisisme. Materialisme membuat pendirian yang lebih tegas.",
          c: "Ini adalah pandangan keagamaan atau teisme, yang ditolak oleh materialisme.",
        },
      },
    },
    {
      id: "meta-q49",
      text: "'Mengkaji hubungan sebab dan akibat secara umum, bukan merujuk kepada fenomena khusus seperti 'api membakar kertas'.' Aktiviti pemikiran ini adalah contoh metafizik dari sudut...",
      options: [
        { id: "a", text: "Keagamaan" },
        { id: "b", text: "Falsafah" },
        { id: "c", text: "Positivisme" },
        { id: "d", text: "Saintifik" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Ini adalah contoh kajian metafizik dari sudut falsafah, iaitu kajian pada peringkat yang paling abstrak atau umum mengenai sesuatu fenomena.",
        incorrect: {
          a: "Sudut keagamaan lebih tertumpu kepada perkara ghaib seperti syurga dan neraka.",
          c: "Positivisme akan menolak perbincangan abstrak seperti ini.",
          d: "Kaedah saintifik akan mengkaji fenomena khusus melalui eksperimen.",
        },
      },
    },
    {
      id: "meta-q50",
      text: "Apakah peranan utama metafizik terhadap perkembangan ilmu pengetahuan secara keseluruhan?",
      options: [
        { id: "a", text: "Menggantikan sepenuhnya peranan sains dan agama." },
        {
          id: "b",
          text: "Menyediakan jawapan muktamad bagi semua persoalan kehidupan.",
        },
        {
          id: "c",
          text: "Menjadi asas renungan tentang sifat, batasan, dan hubungan antara pelbagai bidang ilmu.",
        },
        {
          id: "d",
          text: "Menghasilkan teknologi-teknologi baharu untuk kemajuan manusia.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Sebagai 'kajian peringkat kedua', metafizik berfungsi sebagai medan renungan terhadap sifat ilmu itu sendiri, batasannya, dan hubungannya dengan bidang ilmu yang lain.",
        incorrect: {
          a: "Metafizik tidak menggantikan, sebaliknya berdialog dan mengkritik batasan ilmu lain.",
          b: "Falsafah lebih banyak membangkitkan persoalan, bukan memberi jawapan muktamad.",
          d: "Ini adalah peranan sains gunaan dan kejuruteraan, bukan metafizik.",
        },
      },
    },
  ],
};
