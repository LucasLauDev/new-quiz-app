import { Quiz } from "@/app/types/quiz";

export const epistemologi: Quiz = {
  id: "falsafah-topik-6",
  categoryId: "falsafah",
  subcategoryId: "topik-6",
  title: "Topik 6 - Epistemologi",
  questions: [
    {
      id: "epi6-q1",
      text: "Apakah maksud epistemologi dari sudut etimologi bahasa Yunani?",
      options: [
        {
          id: "a",
          text: "Gabungan 'episteme' (teori) dan 'logos' (kebenaran).",
        },
        {
          id: "b",
          text: "Gabungan 'episteme' (pengetahuan) dan 'logos' (ilmu/teori).",
        },
        { id: "c", text: "Gabungan 'episteme' (akal) dan 'logos' (kajian)." },
        { id: "d", text: "Gabungan 'philo' (cinta) dan 'episteme' (ilmu)." },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Berdasarkan nota, epistemologi berasal daripada perkataan Yunani 'episteme' yang bermaksud pengetahuan atau kebenaran, dan 'logos' yang bermaksud ilmu atau teori.",
        incorrect: {
          a: "Pilihan ini menterbalikkan maksud sebenar. 'Logos' bermaksud ilmu atau teori, bukan kebenaran.",
          c: "'Episteme' tidak merujuk kepada 'akal' secara langsung dalam konteks etimologi ini.",
          d: "Gabungan 'philo' dan 'sophia' membentuk perkataan 'falsafah', bukan epistemologi.",
        },
      },
    },
    {
      id: "epi6-q2",
      text: "Epistemologi merupakan satu disiplin ilmu yang bersifat...\n\nI. Evaluatif (menilai)\nII. Normatif (menentukan standard)\nIII. Kritis (menguji)\nIV. Dogmatik (jumud)",
      options: [
        { id: "a", text: "I, II, dan III" },
        { id: "b", text: "I, II, dan IV" },
        { id: "c", text: "II dan IV sahaja" },
        { id: "d", text: "Semua di atas" },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Nota secara jelas menyatakan bahawa epistemologi adalah disiplin ilmu yang bersifat evaluatif, normatif, dan kritis dalam membahaskan kesahan pengetahuan.",
        incorrect: {
          b: "Pilihan ini salah kerana 'Dogmatik' (IV) bertentangan dengan sifat kritis epistemologi.",
          c: "Pilihan ini tidak lengkap dan memasukkan 'Dogmatik' (IV) yang salah.",
          d: "Pilihan ini salah kerana 'Dogmatik' (IV) bukan sifat epistemologi.",
        },
      },
    },
    {
      id: "epi6-q3",
      text: 'Apakah maksud konsep "Justified True Belief" yang menjadi syarat asas bagi sesuatu itu diiktiraf sebagai ilmu?',
      options: [
        {
          id: "a",
          text: "Sebuah keyakinan yang dipegang teguh oleh seseorang walaupun tanpa asas.",
        },
        {
          id: "b",
          text: "Sebuah kepercayaan yang berasas mengenai sesuatu yang benar.",
        },
        {
          id: "c",
          text: "Sebuah kebenaran mutlak yang diterima melalui wahyu tanpa keraguan.",
        },
        {
          id: "d",
          text: "Sebuah pengetahuan yang diterima secara tradisi turun-temurun.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Ini adalah definisi klasik ilmu dalam epistemologi, yang mesti memenuhi tiga syarat: ia mestilah satu kepercayaan (belief), ia mestilah benar (true), dan ia mesti mempunyai justifikasi atau alasan yang kukuh (justified).",
        incorrect: {
          a: "Kepercayaan tanpa asas (justifikasi) tidak dianggap sebagai ilmu, ia mungkin sekadar pendapat atau tekaan.",
          c: "Ini lebih merujuk kepada kebenaran agama, manakala 'Justified True Belief' adalah konsep falsafah umum.",
          d: "Tradisi boleh menjadi satu bentuk justifikasi, tetapi ia bukan definisi bagi konsep 'Justified True Belief' itu sendiri.",
        },
      },
    },
    {
      id: "epi6-q4",
      text: "Siapakah tokoh falsafah yang terkenal dengan ungkapan “Saya berfikir, maka saya wujud” (Cogito, ergo sum) yang menjadi asas kepada aliran Rasionalisme?",
      options: [
        { id: "a", text: "John Locke" },
        { id: "b", text: "René Descartes" },
        { id: "c", text: "David Hume" },
        { id: "d", text: "Spinoza" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "René Descartes menggunakan ungkapan ini sebagai titik permulaan ilmunya, membuktikan kewujudannya melalui tindakan berfikir semata-mata, yang menjadi teras Rasionalisme.",
        incorrect: {
          a: "John Locke adalah tokoh utama aliran Empirisisme.",
          c: "David Hume adalah seorang tokoh Empirisisme yang cenderung kepada skeptisisme.",
          d: "Walaupun Spinoza adalah seorang rasionalis, ungkapan ikonik ini milik Descartes.",
        },
      },
    },
    {
      id: "epi6-q5",
      text: 'Aliran Empirisisme berpendapat bahawa minda manusia pada asalnya adalah kosong seperti "lembaran kosong" atau tabula rasa. Apakah implikasi utama pandangan ini?',
      options: [
        {
          id: "a",
          text: "Manusia dilahirkan dengan idea-idea semula jadi tentang dunia.",
        },
        {
          id: "b",
          text: "Semua ilmu pengetahuan berasal daripada pengalaman deria.",
        },
        {
          id: "c",
          text: "Akal manusia adalah satu-satunya sumber ilmu yang boleh dipercayai.",
        },
        {
          id: "d",
          text: "Pengetahuan hanya boleh diperoleh melalui ilham dan intuisi.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Konsep tabula rasa yang dipopularkan oleh John Locke menegaskan bahawa minda yang kosong diisi dengan pengetahuan yang diperoleh melalui pengalaman sensori atau deria.",
        incorrect: {
          a: "Ini adalah pandangan yang ditentang oleh Empirisisme, dan merupakan sebahagian daripada ajaran Rasionalisme.",
          c: "Ini adalah pegangan utama aliran Rasionalisme.",
          d: "Ini merujuk kepada sumber ilmu yang berbeza, bukan teras ajaran Empirisisme.",
        },
      },
    },
    {
      id: "epi6-q6",
      text: "Teori Kebenaran Koresponden menyatakan bahawa sesuatu pernyataan itu benar jika...",
      options: [
        {
          id: "a",
          text: "Ia konsisten secara logik dengan pernyataan-pernyataan lain.",
        },
        {
          id: "b",
          text: "Ia membawa manfaat dan kesan positif apabila diamalkan.",
        },
        {
          id: "c",
          text: "Ia sepadan atau bersesuaian dengan fakta atau realiti sebenar.",
        },
        {
          id: "d",
          text: "Ia diterima sebagai kebenaran oleh majoriti masyarakat.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Teras teori ini ialah kesepadanan antara idea (pernyataan) dengan realiti (fakta). Contohnya, 'Salji berwarna putih' adalah benar kerana ia sepadan dengan warna salji di alam nyata.",
        incorrect: {
          a: "Ini adalah definisi bagi Teori Kebenaran Koheran.",
          b: "Ini adalah definisi bagi Teori Kebenaran Pragmatik.",
          d: "Ini lebih merujuk kepada kebenaran berdasarkan konsensus, bukan Teori Koresponden.",
        },
      },
    },
    {
      id: "epi6-q7",
      text: 'Pernyataan "Jika A=B dan B=C, maka A=C" diterima sebagai benar. Kebenaran pernyataan ini ditentukan berdasarkan...',
      options: [
        { id: "a", text: "Teori Kebenaran Koresponden." },
        { id: "b", text: "Teori Kebenaran Pragmatik." },
        { id: "c", text: "Teori Kebenaran Koheran." },
        { id: "d", text: "Teori Kebenaran Agama." },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Ini adalah contoh klasik Teori Koheran. Kebenaran kesimpulan (A=C) disahkan kerana ia konsisten dan selaras secara logik dengan premis-premis sebelumnya (A=B dan B=C).",
        incorrect: {
          a: "Kebenaran ini tidak memerlukan rujukan kepada objek di alam nyata, ia adalah benar dari segi struktur logiknya.",
          b: "Manfaatnya adalah kesan sampingan, bukan sebab kebenarannya.",
          d: "Ini adalah satu bentuk penaakulan logik, bukan kebenaran yang bersumberkan wahyu.",
        },
      },
    },
    {
      id: "epi6-q8",
      text: "Manakah antara berikut merupakan kelemahan utama bagi Teori Kebenaran Koresponden?",
      options: [
        {
          id: "a",
          text: "Ia terlalu bergantung pada konsistensi logik semata-mata.",
        },
        {
          id: "b",
          text: "Ia menjadikan kebenaran bersifat relatif dan subjektif.",
        },
        {
          id: "c",
          text: "Ia sukar untuk mengesahkan kebenaran pernyataan mengenai perkara yang tidak dapat dibuktikan secara empirikal.",
        },
        {
          id: "d",
          text: "Ia menolak kepentingan bukti fizikal dalam menentukan kebenaran.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota secara spesifik mempersoalkan bagaimana teori ini boleh membandingkan pernyataan dengan realiti yang tidak jelas, seperti 'alam barzakh'. Teori ini sukar diaplikasikan pada konsep abstrak atau metafizik.",
        incorrect: {
          a: "Ini adalah kritikan terhadap Teori Koheran.",
          b: "Ini adalah kritikan terhadap Teori Pragmatik.",
          d: "Sebaliknya, teori ini sangat bergantung kepada bukti fizikal atau fakta yang boleh dicerap.",
        },
      },
    },
    {
      id: "epi6-q9",
      text: 'Seorang saintis mencipta sejenis baja baharu. Baja itu dianggap "baik" dan teorinya dianggap "benar" kerana ia berjaya meningkatkan hasil tanaman sebanyak 50%. Pendekatan ini selari dengan...',
      options: [
        { id: "a", text: "Teori Kebenaran Pragmatik." },
        { id: "b", text: "Teori Kebenaran Koresponden." },
        { id: "c", text: "Teori Kebenaran Koheran." },
        { id: "d", text: "Teori Kebenaran Tradisi." },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Teori Pragmatik mengukur kebenaran berdasarkan kegunaan, fungsi, dan kesan praktikal. Baja itu dianggap 'benar' kerana ia berfungsi dan membawa manfaat yang boleh diukur.",
        incorrect: {
          b: "Walaupun baja itu berinteraksi dengan realiti, justifikasi utamanya di sini adalah keberkesanannya.",
          c: "Kebenaran baja itu tidak ditentukan oleh konsistensinya dengan teori-teori lain, tetapi oleh hasilnya.",
          d: "Ini adalah inovasi saintifik, bukan amalan yang diwarisi daripada tradisi.",
        },
      },
    },
    {
      id: "epi6-q10",
      text: "Menurut nota, apakah perbezaan paling asas antara Falsafah dan Agama dalam mencari kebenaran?",
      options: [
        {
          id: "a",
          text: "Falsafah adalah ciptaan manusia yang spekulatif, manakala Agama adalah ciptaan Tuhan yang mutlak.",
        },
        {
          id: "b",
          text: "Falsafah menggunakan kepercayaan, manakala Agama menggunakan pemikiran.",
        },
        {
          id: "c",
          text: "Falsafah tidak mengakui dogma, manakala Agama juga menolak semua dogma.",
        },
        {
          id: "d",
          text: "Falsafah bertujuan mencari kebenaran, manakala Agama tidak mempunyai tujuan tersebut.",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Nota membezakan falsafah sebagai ciptaan manusia yang bersifat spekulatif, manakala agama dianggap sebagai kebenaran mutlak daripada Tuhan yang dihayati dengan keimanan.",
        incorrect: {
          b: "Ini adalah terbalik. Falsafah bergantung pada pemikiran, manakala Agama mendahulukan kepercayaan.",
          c: "Agama berpegang pada dogma-dogma, manakala falsafah secara umumnya tidak terikat dengan dogma.",
          d: "Kedua-duanya bertujuan mencari kebenaran, tetapi melalui jalan dan dengan tahap kepastian yang berbeza.",
        },
      },
    },
    {
      id: "epi6-q11",
      text: "Manakah antara berikut BUKAN persoalan utama yang dibincangkan dalam bidang epistemologi?",
      options: [
        { id: "a", text: "Apakah sumber-sumber pengetahuan manusia?" },
        { id: "b", text: "Apakah perbezaan antara kepercayaan dan ilmu?" },
        {
          id: "c",
          text: "Apakah prinsip-prinsip moral yang harus diikuti oleh manusia?",
        },
        { id: "d", text: "Apakah had atau batasan pengetahuan manusia?" },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Soalan ini tergolong dalam bidang etika atau aksiologi, iaitu cabang falsafah yang mengkaji nilai dan moral, bukan epistemologi.",
        incorrect: {
          a: "Ini adalah persoalan teras epistemologi (cth: Rasionalisme vs Empirisisme).",
          b: "Ini merujuk kepada syarat-syarat ilmu (Justified True Belief) yang menjadi perbahasan utama epistemologi.",
          d: "Epistemologi turut mengkaji had dan batasan sejauh mana manusia boleh mengetahui sesuatu.",
        },
      },
    },
    {
      id: "epi6-q12",
      text: "Menurut nota, apakah salah satu kesan epistemologi terhadap peradaban manusia?",
      options: [
        {
          id: "a",
          text: "Ia menyebabkan masyarakat menjadi statik dan tidak berkembang.",
        },
        {
          id: "b",
          text: "Ia menetapkan bahawa hanya ada satu cara untuk berfikir dengan betul.",
        },
        {
          id: "c",
          text: "Ia mendorong manusia untuk sentiasa berfikir dan mencipta sesuatu yang baharu.",
        },
        {
          id: "d",
          text: "Ia memisahkan sepenuhnya ilmu pengetahuan daripada kehidupan seharian.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Dengan mempersoalkan sumber dan kesahan ilmu, epistemologi membuka ruang untuk penambahbaikan, inovasi, dan penciptaan ilmu-ilmu baharu.",
        incorrect: {
          a: "Sebaliknya, epistemologi mendorong pemikiran kritis yang membawa kepada kemajuan.",
          b: "Epistemologi meneroka pelbagai kaedah berfikir dan perolehan ilmu, bukan menetapkan hanya satu cara.",
          d: "Epistemologi bertujuan untuk memahami pengetahuan agar ia dapat digunakan dalam kehidupan.",
        },
      },
    },
    {
      id: "epi6-q13",
      text: 'Konsep "kesepaduan ilmu" yang dibincangkan dalam nota mencadangkan anjakan daripada pendekatan mono-disiplin kepada trans-disiplin. Apakah justifikasi utama anjakan ini?',
      options: [
        {
          id: "a",
          text: "Untuk menghapuskan perbezaan antara ilmu sains dan ilmu kemanusiaan.",
        },
        {
          id: "b",
          text: "Untuk membuktikan keunggulan ilmu agama mengatasi semua ilmu lain.",
        },
        {
          id: "c",
          text: "Untuk menyeragamkan metodologi semua bidang ilmu agar menjadi sama.",
        },
        {
          id: "d",
          text: "Untuk mengatasi keterbatasan pemahaman terhadap isu kompleks apabila dilihat dari satu sudut pandangan sahaja.",
        },
      ],
      correctOptionId: "d",
      explanation: {
        correct:
          "Nota menyatakan kelemahan mono-disiplin ialah keterbatasan dalam memahami isu dan sudut pandangan yang sempit. Pendekatan trans-disiplin membolehkan kerjasama untuk pemahaman yang lebih holistik.",
        incorrect: {
          a: "Tujuannya adalah untuk menghubungkan dan menyepadukan, bukan menghapuskan perbezaan unik setiap bidang.",
          b: "Tujuan kesepaduan adalah untuk kerjasama, bukan membuktikan keunggulan.",
          c: "Trans-disiplin menggalakkan kerjasama, bukan memaksa semua bidang menggunakan metodologi yang sama.",
        },
      },
    },
    {
      id: "epi6-q14",
      text: "Manakah antara berikut BUKAN tokoh yang tergolong dalam aliran Empirisisme?",
      options: [
        { id: "a", text: "John Locke" },
        { id: "b", text: "George Berkeley" },
        { id: "c", text: "David Hume" },
        { id: "d", text: "René Descartes" },
      ],
      correctOptionId: "d",
      explanation: {
        correct:
          "René Descartes adalah tokoh utama aliran Rasionalisme, yang merupakan aliran yang sering dipertentangkan dengan Empirisisme.",
        incorrect: {
          a: "John Locke adalah tokoh utama Empirisisme.",
          b: "George Berkeley adalah seorang ahli falsafah Empirisisme.",
          c: "David Hume adalah seorang ahli falsafah Empirisisme.",
        },
      },
    },
    {
      id: "epi6-q15",
      text: "Kebenaran dalam konteks agama dan tradisi dianggap berbeza daripada teori kebenaran falsafah yang lain kerana...",
      options: [
        {
          id: "a",
          text: "Kebenaran agama bersifat relatif dan sentiasa berubah mengikut zaman.",
        },
        {
          id: "b",
          text: "Kebenaran agama dianggap mutlak, bersumberkan Tuhan, dan dihayati melalui keimanan.",
        },
        {
          id: "c",
          text: "Kebenaran tradisi mesti dibuktikan secara saintifik sebelum boleh diterima.",
        },
        {
          id: "d",
          text: "Kebenaran agama hanya terpakai untuk amalan ritual dan tidak relevan untuk ilmu.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Ciri utama kebenaran agama ialah ia bersifat mutlak, bersumberkan wahyu Tuhan, dan diterima melalui keimanan dan kepercayaan, bukan melalui spekulasi atau ujian empirikal.",
        incorrect: {
          a: "Kebenaran agama dianggap mutlak dan tidak berubah.",
          c: "Kebenaran tradisi diterima berdasarkan kesinambungan dan warisan, tidak semestinya memerlukan pembuktian saintifik.",
          d: "Penganut agama melihat kebenarannya sebagai panduan hidup yang menyeluruh.",
        },
      },
    },
    {
      id: "epi6-q16",
      text: "Manakah antara perbandingan berikut antara Ilmu Sains dan Falsafah yang TIDAK TEPAT menurut nota?",
      options: [
        {
          id: "a",
          text: "Sains menumpukan bidang khusus, manakala Falsafah bersifat umum.",
        },
        {
          id: "b",
          text: "Sains mengkaji fakta, manakala Falsafah mengkaji fakta dan sistem nilai.",
        },
        {
          id: "c",
          text: "Sains banyak menggunakan kaedah empirikal, manakala Falsafah menggunakan kaedah rasional.",
        },
        {
          id: "d",
          text: "Sains bersifat spekulatif, manakala Falsafah memberi keyakinan mutlak.",
        },
      ],
      correctOptionId: "d",
      explanation: {
        correct:
          "Pernyataan ini tidak tepat kerana ia terbalik. Menurut nota, Falsafah bersifat spekulatif dan tidak memberi keyakinan mutlak, manakala Sains memberi kesimpulan berdasarkan dalil-dalil yang lebih yakin.",
        incorrect: {
          a: "Ini adalah perbandingan yang tepat seperti yang dinyatakan dalam nota.",
          b: "Ini adalah perbandingan yang tepat seperti yang dinyatakan dalam nota.",
          c: "Ini adalah perbandingan yang tepat seperti yang dinyatakan dalam nota.",
        },
      },
    },
    {
      id: "epi6-q17",
      text: "Revolusi Sains pada era moden Eropah telah mencetuskan kesan epistemologi yang besar. Apakah anjakan utama yang berlaku?",
      options: [
        {
          id: "a",
          text: "Peralihan daripada ilmu berasaskan autoriti dan dogma kepada ilmu berasaskan pemerhatian empirikal dan penaakulan matematik.",
        },
        {
          id: "b",
          text: "Pengukuhan kedudukan falsafah spekulatif mengatasi ilmu agama.",
        },
        {
          id: "c",
          text: "Penolakan sepenuhnya kaedah rasionalisme dan penerimaan empirisisme secara total.",
        },
        {
          id: "d",
          text: "Penerimaan Teori Kebenaran Agama sebagai kaedah saintifik.",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Revolusi Sains menandakan anjakan besar daripada pergantungan kepada teks kuno dan doktrin agama, kepada pembuktian melalui eksperimen (empirisisme) dan perumusan hukum alam melalui matematik (rasionalisme).",
        incorrect: {
          b: "Revolusi Sains sebenarnya mencabar falsafah spekulatif dengan kaedah yang lebih sistematik.",
          c: "Revolusi Sains sebenarnya adalah gabungan hebat antara empirisisme dan rasionalisme.",
          d: "Revolusi Sains bergerak ke arah kaedah sekular dalam perolehan ilmu alam.",
        },
      },
    },
    {
      id: "epi6-q18",
      text: 'Apakah yang dimaksudkan dengan aliran "Skeptisisme" dalam epistemologi?',
      options: [
        {
          id: "a",
          text: "Aliran yang menerima semua dakwaan pengetahuan sebagai benar sehingga terbukti salah.",
        },
        {
          id: "b",
          text: "Aliran yang berpegang bahawa pengetahuan yang pasti dan tidak boleh diragui adalah mustahil untuk dicapai.",
        },
        {
          id: "c",
          text: "Aliran yang menegaskan bahawa hanya pengetahuan dari sumber autoriti yang sah.",
        },
        {
          id: "d",
          text: "Aliran yang menggabungkan kaedah rasionalisme dan empirisisme.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Teras utama Skeptisisme ialah keraguan. Ia mempersoalkan sama ada manusia mampu mencapai pengetahuan yang benar-benar pasti mengenai hakikat sesuatu perkara.",
        incorrect: {
          a: "Ini adalah pendekatan yang naif dan bertentangan dengan skeptisisme.",
          c: "Ini adalah ciri aliran Dogmatisme.",
          d: "Ini lebih merujuk kepada sintesis falsafah seperti yang diusahakan oleh Immanuel Kant.",
        },
      },
    },
    {
      id: "epi6-q19",
      text: '"Ilmu yang sahih diperolehi melalui akal yang rasional, kerana deria tidak semestinya memberikan gambaran sebenar." Pernyataan ini adalah pegangan utama aliran...',
      options: [
        { id: "a", text: "Empirisisme" },
        { id: "b", text: "Rasionalisme" },
        { id: "c", text: "Pragmatisme" },
        { id: "d", text: "Skeptisisme" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Ini adalah hujah teras Rasionalisme yang menekankan keutamaan akal berbanding deria yang dianggap boleh menipu atau memberi maklumat yang salah.",
        incorrect: {
          a: "Empirisisme berpegang sebaliknya, iaitu deria adalah sumber utama ilmu.",
          c: "Pragmatisme tidak menumpukan pada sumber ilmu, tetapi pada kegunaannya.",
          d: "Skeptisisme meragui kedua-dua akal dan deria sebagai sumber pengetahuan yang pasti.",
        },
      },
    },
    {
      id: "epi6-q20",
      text: 'Manakah antara berikut merupakan contoh terbaik bagi "Kearifan Tempatan" sebagai sumber ilmu?',
      options: [
        {
          id: "a",
          text: "Sebuah teori fizik kuantum yang dibangunkan di universiti tempatan.",
        },
        {
          id: "b",
          text: "Pengetahuan masyarakat nelayan tradisional tentang corak angin dan musim ikan berdasarkan pemerhatian turun-temurun.",
        },
        {
          id: "c",
          text: "Ajaran daripada sebuah kitab suci yang diterjemahkan ke bahasa tempatan.",
        },
        {
          id: "d",
          text: "Penggunaan formula matematik universal untuk membina jambatan di sebuah kampung.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Kearifan tempatan merujuk kepada pengetahuan yang unik kepada sesebuah komuniti, yang biasanya diperoleh melalui pengalaman kolektif selama bergenerasi dan diwariskan secara tidak formal.",
        incorrect: {
          a: "Ini adalah ilmu saintifik moden, bukan kearifan tempatan.",
          c: "Ini adalah sumber ilmu agama, walaupun dilokalkan.",
          d: "Ini adalah aplikasi ilmu saintifik universal, bukan kearifan yang lahir dari konteks tempatan itu sendiri.",
        },
      },
    },
    {
      id: "epi6-q21",
      text: "Apakah kritikan utama terhadap Teori Kebenaran Pragmatik?",
      options: [
        {
          id: "a",
          text: "Ia terlalu rigid dan tidak membenarkan sebarang perubahan pada teori.",
        },
        {
          id: "b",
          text: "Ia menjadikan kebenaran sesuatu yang mutlak dan tidak boleh dipersoalkan.",
        },
        {
          id: "c",
          text: "Ia boleh menyebabkan kebenaran menjadi relatif dan mengutamakan manfaat jangka pendek.",
        },
        {
          id: "d",
          text: "Ia hanya boleh diaplikasikan dalam bidang matematik dan logik formal.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota menyatakan bahawa kebenaran dalam pragmatisme bersifat relatif dan tarikannya adalah manfaat jangka pendek, yang mungkin mengabaikan kebenaran hakiki.",
        incorrect: {
          a: "Sebaliknya, pragmatisme sangat fleksibel; kebenaran boleh berubah jika sesuatu yang baharu didapati lebih 'berfungsi'.",
          b: "Ini adalah ciri kebenaran agama, bukan pragmatisme.",
          d: "Teori Koheran lebih sesuai untuk matematik. Pragmatisme lebih banyak digunakan dalam sains dan polisi.",
        },
      },
    },
    {
      id: "epi6-q22",
      text: 'Apakah yang dimaksudkan dengan aliran "Dogmatisme" dalam konteks sumber ilmu?',
      options: [
        {
          id: "a",
          text: "Pengetahuan yang diperoleh melalui keraguan yang sistematik.",
        },
        {
          id: "b",
          text: "Pengetahuan yang diperoleh melalui penaakulan logik semata-mata.",
        },
        {
          id: "c",
          text: "Pengetahuan yang diterima sebagai benar berdasarkan autoriti, seperti wahyu dan tradisi.",
        },
        {
          id: "d",
          text: "Pengetahuan yang diperoleh melalui pengalaman deria dan eksperimen.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Dogmatisme merujuk kepada penerimaan ilmu daripada sumber yang dianggap berautoriti dan tidak boleh dipersoalkan, seperti kitab suci (wahyu) dan ajaran yang diwarisi (tradisi).",
        incorrect: {
          a: "Ini adalah kaedah skeptisisme atau pemikiran kritis.",
          b: "Ini adalah kaedah Rasionalisme.",
          d: "Ini adalah kaedah Empirisisme.",
        },
      },
    },
    {
      id: "epi6-q23",
      text: "Menurut nota, kegagalan menyatupadukan ilmu mempunyai tiga peringkat. Manakah antara berikut BUKAN salah satu daripadanya?",
      options: [
        { id: "a", text: "Kesepaduan antara falsafah, ilmu dan agama." },
        {
          id: "b",
          text: "Kesepaduan antara ilmu naqli (wahyu) dan aqli (akal rasional).",
        },
        {
          id: "c",
          text: "Kesepaduan antara ilmu sains tulen dan sains sosial.",
        },
        { id: "d", text: "Kesepaduan antara ilmu aqli dan ilmu sains." },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Walaupun kesepaduan antara sains tulen dan sains sosial adalah satu isu penting, ia tidak disenaraikan secara spesifik sebagai salah satu daripada tiga peringkat utama dalam slide tersebut.",
        incorrect: {
          a: "Ini disenaraikan sebagai salah satu peringkat kegagalan menyatupadukan ilmu.",
          b: "Ini disenaraikan sebagai salah satu peringkat kegagalan menyatupadukan ilmu.",
          d: "Ini disenaraikan sebagai salah satu peringkat kegagalan menyatupadukan ilmu.",
        },
      },
    },
    {
      id: "epi6-q24",
      text: '"Semua angsa yang pernah saya lihat berwarna putih, maka semua angsa berwarna putih." Hujah ini adalah contoh perolehan ilmu melalui kaedah empirikal. Apakah kelemahan utama hujah sebegini?',
      options: [
        { id: "a", text: "Ia terlalu bergantung pada prinsip logik abstrak." },
        { id: "b", text: "Ia tidak boleh disahkan melalui pemerhatian." },
        {
          id: "c",
          text: "Ia boleh terbukti salah dengan satu penemuan yang bercanggah (cth: penemuan angsa hitam).",
        },
        { id: "d", text: "Ia tidak diterima dalam kaedah saintifik moden." },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Ini dikenali sebagai 'masalah induksi'. Kesimpulan yang dibuat berdasarkan siri pemerhatian terhad sentiasa berisiko untuk disangkal oleh satu pemerhatian baharu yang berbeza. Ini menunjukkan keterbatasan ilmu empirikal.",
        incorrect: {
          a: "Hujah ini berasaskan pemerhatian (empirikal), bukan logik abstrak semata-mata.",
          b: "Hujah ini sepenuhnya berdasarkan pemerhatian.",
          d: "Kaedah induksi ini adalah asas kepada banyak penemuan saintifik, walaupun saintis sedar akan kelemahannya.",
        },
      },
    },
    {
      id: "epi6-q25",
      text: "Antara berikut, yang manakah tujuan utama Falsafah menurut jadual perbandingan dalam nota?",
      options: [
        { id: "a", text: "Menentukan sifat-sifat kejadian dan manusia." },
        { id: "b", text: "Mengkaji fakta dan membatasi pada kenyataan." },
        {
          id: "c",
          text: "Mengetahui asal-usul manusia, hubungan manusia dengan alam, dan pengakhirannya.",
        },
        {
          id: "d",
          text: "Memberi kesimpulan berdasarkan dalil-dalil yang meyakinkan.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota menyatakan bahawa tujuan Falsafah adalah lebih luas dan fundamental, iaitu untuk memahami asal-usul, hubungan, dan takdir manusia.",
        incorrect: {
          a: "Ini adalah tujuan Ilmu Sains.",
          b: "Ini adalah ciri Ilmu Sains.",
          d: "Ini adalah ciri Ilmu Sains, manakala Falsafah lebih bersifat spekulatif.",
        },
      },
    },
    {
      id: "epi6-q26",
      text: "Pernyataan manakah yang paling TEPAT menggambarkan kedudukan Agama dalam kerangka kesepaduan ilmu?",
      options: [
        {
          id: "a",
          text: "Agama adalah salah satu teori spekulatif yang setara dengan falsafah.",
        },
        {
          id: "b",
          text: "Agama hanya relevan untuk menjawab masalah segera seperti sains.",
        },
        {
          id: "c",
          text: "Agama merupakan pegangan mutlak yang tidak berubah dan menjawab persoalan hakiki.",
        },
        {
          id: "d",
          text: "Agama perlu sentiasa diubah suai agar selari dengan penemuan sains terkini.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota menegaskan bahawa agama adalah pegangan bukan spekulatif, tidak berubah, dan mampu menjawab persoalan kebenaran yang gagal dijawab oleh falsafah dan sains.",
        incorrect: {
          a: "Nota membezakan agama sebagai sumber mutlak, bukan spekulatif seperti falsafah.",
          b: "Sains yang menjawab masalah segera, manakala agama menjawab persoalan kebenaran yang lebih tuntas.",
          d: "Pandangan dalam nota ialah agama yang benar tidak akan bercanggah dengan kebenaran, bukan bahawa agama itu yang perlu diubah.",
        },
      },
    },
    {
      id: "epi6-q27",
      text: "Bagaimanakah epistemologi menjadi modal asas dalam memperkasa pembangunan ilmu?",
      options: [
        {
          id: "a",
          text: "Dengan menghadkan penyelidikan kepada satu bidang ilmu sahaja.",
        },
        {
          id: "b",
          text: "Dengan menyediakan kerangka untuk menilai, menguji, dan mencipta ilmu baharu secara strategik.",
        },
        {
          id: "c",
          text: "Dengan menolak semua ilmu yang diwarisi daripada tradisi terdahulu.",
        },
        {
          id: "d",
          text: "Dengan menetapkan bahawa hanya Teori Kebenaran Pragmatik yang boleh digunakan.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Epistemologi berfungsi sebagai alat strategik yang membantu manusia memahami cara berfikir, menilai kesahan maklumat, dan seterusnya merekayasa pengembangan ilmu yang lestari.",
        incorrect: {
          a: "Ini bercanggah dengan konsep kesepaduan ilmu (trans-disiplin).",
          c: "Epistemologi mengkaji ilmu tradisi, bukan menolaknya secara total.",
          d: "Epistemologi meneroka semua teori kebenaran, tidak terhad kepada satu sahaja.",
        },
      },
    },
    {
      id: "epi6-q28",
      text: "Manakah antara berikut adalah contoh aplikasi Teori Kebenaran Koresponden?",
      options: [
        {
          id: "a",
          text: '"Pencuri itu bersalah kerana cap jarinya sepadan dengan cap jari di lokasi kejadian."',
        },
        {
          id: "b",
          text: '"Teori graviti adalah benar kerana ia konsisten dengan hukum-hukum fizik yang lain."',
        },
        {
          id: "c",
          text: '"Polisi kesihatan ini adalah benar kerana ia berjaya mengurangkan kadar penyakit."',
        },
        {
          id: "d",
          text: '"Membantu orang miskin adalah amalan yang benar kerana ia ajaran semua agama."',
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Kebenaran dakwaan ('dia adalah pencuri') disahkan oleh kesepadanan antara bukti fizikal (cap jari di lokasi) dengan realiti (cap jari pada suspek).",
        incorrect: {
          b: "Ini adalah contoh Teori Kebenaran Koheran.",
          c: "Ini adalah contoh Teori Kebenaran Pragmatik.",
          d: "Ini adalah contoh Teori Kebenaran Agama/Etika.",
        },
      },
    },
    {
      id: "epi6-q29",
      text: "Apakah perbezaan utama antara ilmu (knowledge) dan kepercayaan (belief)?",
      options: [
        {
          id: "a",
          text: "Ilmu adalah benar manakala kepercayaan sentiasa salah.",
        },
        {
          id: "b",
          text: "Ilmu memerlukan justifikasi atau asas yang kukuh, manakala kepercayaan tidak semestinya.",
        },
        {
          id: "c",
          text: "Ilmu hanya diperoleh melalui kaedah saintifik, manakala kepercayaan melalui akal.",
        },
        { id: "d", text: "Tiada perbezaan yang jelas antara kedua-duanya." },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Ini adalah perbezaan fundamental. Untuk sesuatu kepercayaan itu dinaik taraf menjadi ilmu, ia mesti mempunyai justifikasi atau alasan yang baik.",
        incorrect: {
          a: "Kepercayaan boleh jadi benar secara kebetulan, tetapi ia masih belum menjadi ilmu tanpa justifikasi.",
          c: "Ilmu boleh diperoleh melalui pelbagai cara (termasuk akal), bukan hanya saintifik.",
          d: "Epistemologi secara khusus membahaskan perbezaan ini.",
        },
      },
    },
    {
      id: "epi6-q30",
      text: 'Apakah yang dimaksudkan dengan "justifikasi" sebagai salah satu syarat ilmu?',
      options: [
        {
          id: "a",
          text: "Kekuatan keyakinan seseorang terhadap kepercayaannya.",
        },
        {
          id: "b",
          text: "Bukti yang hanya boleh diterima daripada eksperimen makmal.",
        },
        {
          id: "c",
          text: "Alasan, bukti, atau asas yang munasabah untuk menyokong sesuatu kepercayaan.",
        },
        {
          id: "d",
          text: "Konsistensi sebuah kepercayaan dengan kepercayaan-kepercayaan yang lain.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Justifikasi ialah jawapan kepada soalan 'Bagaimana anda tahu?'. Ia merujuk kepada apa-apa sahaja alasan atau bukti yang kukuh yang menyokong kepercayaan itu.",
        incorrect: {
          a: "Kekuatan keyakinan adalah faktor psikologi, bukan justifikasi epistemik.",
          b: "Eksperimen adalah satu bentuk justifikasi yang kuat, tetapi bukan satu-satunya.",
          d: "Ini merujuk kepada koheren, yang merupakan salah satu jenis justifikasi, tetapi bukan definisi justifikasi itu sendiri.",
        },
      },
    },
    {
      id: "epi6-q31",
      text: '"Warna putih itu apa?" Soalan ini, seperti yang diisyaratkan dalam slide, mencabar kita untuk berfikir tentang...',
      options: [
        { id: "a", text: "sifat fizikal cahaya dan gelombang." },
        {
          id: "b",
          text: "bagaimana pengetahuan kita tentang sesuatu yang asas (seperti warna) dibentuk dan disahkan.",
        },
        { id: "c", text: "perbezaan budaya dalam menamakan warna." },
        { id: "d", text: "kegunaan praktikal warna putih dalam kehidupan." },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Dalam konteks epistemologi, soalan semudah ini bertujuan untuk meneroka asas pengetahuan kita. Bagaimana kita tahu ia putih? Adakah melalui deria (empirisisme)? Adakah ia satu konsep (rasionalisme)? Adakah pengetahuan ini pasti?",
        incorrect: {
          a: "Ini adalah jawapan dari sudut sains (fizik), bukan falsafah epistemologi.",
          c: "Ini adalah perbincangan dari sudut antropologi atau linguistik.",
          d: "Ini adalah persoalan pragmatik.",
        },
      },
    },
    {
      id: "epi6-q32",
      text: "Mengapakah pendekatan mono-disiplin dianggap mempunyai kelemahan dalam menyelesaikan isu-isu kompleks?",
      options: [
        {
          id: "a",
          text: "Kerana ia terlalu fokus kepada aspek teori dan mengabaikan praktikal.",
        },
        {
          id: "b",
          text: "Kerana ia menghasilkan sudut pandangan yang terhad dan berbeza-beza mengikut bidang.",
        },
        {
          id: "c",
          text: "Kerana ia tidak menggunakan metodologi saintifik yang ketat.",
        },
        { id: "d", text: "Kerana ia menolak kerjasama antara para ilmuwan." },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota menyatakan kelemahan mono-disiplin ialah keterbatasan dalam memahami isu kerana setiap bidang mempunyai sudut pandangan yang berbeza dan terhad. Isu kompleks seperti kemiskinan memerlukan pandangan dari ekonomi, sosiologi, politik, dll.",
        incorrect: {
          a: "Banyak disiplin tunggal sangat praktikal (cth: kejuruteraan).",
          c: "Banyak disiplin tunggal (seperti fizik) sangat ketat metodologinya.",
          d: "Ia tidak semestinya menolak kerjasama, tetapi strukturnya sendiri menyukarkan pemahaman bersepadu.",
        },
      },
    },
    {
      id: "epi6-q33",
      text: "Antara berikut, manakah ciri Falsafah yang membezakannya daripada Sains?",
      options: [
        { id: "a", text: "Falsafah memberi jawapan yang pasti dan muktamad." },
        {
          id: "b",
          text: "Falsafah mengkaji konsep dan kesahihan konsep itu sendiri.",
        },
        {
          id: "c",
          text: "Falsafah hanya menumpukan pada satu bidang kajian yang khusus.",
        },
        {
          id: "d",
          text: "Falsafah menggunakan kaedah empirikal secara meluas.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Sains mungkin mengkaji konsep (seperti 'tenaga'), tetapi Falsafah akan mengkaji persoalan yang lebih mendalam seperti 'Apakah hakikat tenaga?' atau 'Adakah konsep tenaga kita sah?'.",
        incorrect: {
          a: "Falsafah sering kali bersifat spekulatif dan tidak memberi jawapan yang pasti.",
          c: "Ini adalah ciri Sains, manakala Falsafah bersifat umum dan komprehensif.",
          d: "Ini adalah ciri Sains, manakala Falsafah lebih banyak menggunakan kaedah rasional.",
        },
      },
    },
    {
      id: "epi6-q34",
      text: "Aliran Rasionalisme menggunakan model ilmu daripada bidang...",
      options: [
        { id: "a", text: "Biologi dan kajian lapangan." },
        { id: "b", text: "Sejarah dan sastera." },
        { id: "c", text: "Logik dan Matematik." },
        { id: "d", text: "Sosiologi dan antropologi." },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota menyatakan bahawa ilmu bagi kaum rasionalis didapati daripada demonstrasi formal dalam logik dan matematik, yang tidak memerlukan pemerhatian atau eksperimen luaran.",
        incorrect: {
          a: "Ini adalah model untuk ilmu empirikal.",
          b: "Ini adalah model untuk ilmu kemanusiaan.",
          d: "Ini adalah model untuk ilmu sains sosial.",
        },
      },
    },
    {
      id: "epi6-q35",
      text: '"Mustahil agama yang benar bercanggah dengan kebenaran." Apakah implikasi pernyataan ini dalam konteks kesepaduan ilmu?',
      options: [
        {
          id: "a",
          text: "Penemuan sains yang bercanggah dengan tafsiran agama mesti ditolak serta-merta.",
        },
        {
          id: "b",
          text: "Terdapat potensi keharmonian antara kebenaran wahyu dan kebenaran yang ditemui melalui akal dan sains.",
        },
        {
          id: "c",
          text: "Agama adalah satu-satunya sumber kebenaran dan ilmu-ilmu lain tidak diperlukan.",
        },
        {
          id: "d",
          text: "Kebenaran sains adalah lebih unggul daripada kebenaran agama.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Pernyataan ini membuka jalan kepada usaha menyepadukan ilmu dengan keyakinan bahawa jika kedua-dua sumber (wahyu dan alam) datang dari Pencipta yang sama, maka kebenaran yang ditemui daripadanya sepatutnya harmoni.",
        incorrect: {
          a: "Implikasinya bukan penolakan serta-merta, tetapi mungkin memerlukan penilaian semula terhadap tafsiran agama atau metodologi sains.",
          c: "Konsep kesepaduan ilmu itu sendiri mengiktiraf kepentingan ilmu-ilmu lain sebagai pelengkap.",
          d: "Nota meletakkan agama sebagai sumber kebenaran mutlak, bukan sebaliknya.",
        },
      },
    },
    {
      id: "epi6-q36",
      text: "Manakah antara berikut BUKAN merupakan sumber perolehan ilmu yang disenaraikan dalam nota?",
      options: [
        { id: "a", text: "Intuisi dan Ilham" },
        { id: "b", text: "Rasionalisme dan Empirisisme" },
        { id: "c", text: "Dogmatisme (Wahyu & Tradisi)" },
        { id: "d", text: "Spekulasi dan Imaginasi" },
      ],
      correctOptionId: "d",
      explanation: {
        correct:
          "Walaupun spekulasi dan imaginasi boleh menjadi sebahagian daripada proses pemikiran, ia tidak disenaraikan secara eksplisit sebagai satu kategori sumber ilmu dalam nota yang diberikan.",
        incorrect: {
          a: "Ini disenaraikan secara jelas dalam slide 'Pelbagai Aliran'.",
          b: "Ini disenaraikan secara jelas dalam slide 'Pelbagai Aliran'.",
          c: "Ini disenaraikan secara jelas dalam slide 'Pelbagai Aliran'.",
        },
      },
    },
    {
      id: "epi6-q37",
      text: "Manakah antara berikut merupakan persoalan-persoalan yang ditimbulkan oleh epistemologi?\n\nI. Apa itu kebenaran?\nII. Apakah yang diketahui oleh manusia?\nIII. Untuk apa pengetahuan tersebut?\nIV. Apakah struktur pentadbiran yang paling adil?",
      options: [
        { id: "a", text: "I, II, dan III" },
        { id: "b", text: "I, II, dan IV" },
        { id: "c", text: "I dan III sahaja" },
        { id: "d", text: "Semua di atas" },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Nota secara jelas menyenaraikan soalan-soalan I, II, dan III sebagai perkara yang dipersoalkan dalam epistemologi.",
        incorrect: {
          b: "Pilihan ini salah kerana soalan IV tergolong dalam bidang falsafah politik.",
          c: "Pilihan ini tidak lengkap kerana soalan II juga merupakan persoalan epistemologi.",
          d: "Pilihan ini salah kerana soalan IV bukan persoalan epistemologi.",
        },
      },
    },
    {
      id: "epi6-q38",
      text: "Kebenaran yang diperoleh melalui amalan adat resam dan pantang larang generasi terdahulu tergolong dalam teori kebenaran...",
      options: [
        { id: "a", text: "Pragmatik" },
        { id: "b", text: "Koheran" },
        { id: "c", text: "Tradisi" },
        { id: "d", text: "Koresponden" },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota mengkategorikan penerimaan ilmu daripada khazanah generasi terdahulu, seperti adat resam, sebagai kebenaran berdasarkan Tradisi.",
        incorrect: {
          a: "Pragmatisme menekankan manfaat praktikal yang boleh diuji, bukan sekadar warisan.",
          b: "Koheran menekankan konsistensi logik, bukan amalan budaya.",
          d: "Koresponden memerlukan kesepadanan dengan fakta semasa, bukan amalan yang diwarisi.",
        },
      },
    },
    {
      id: "epi6-q39",
      text: "Dalam konteks Revolusi Industri, perkembangan ilmu dan teknologi sangat dipengaruhi oleh epistemologi yang bersifat...",
      options: [
        { id: "a", text: "Dogmatik dan tradisional." },
        { id: "b", text: "Spekulatif dan metafizik." },
        { id: "c", text: "Empirikal dan pragmatik." },
        { id: "d", text: "Skeptikal dan pesimistik." },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Revolusi Industri didorong oleh ciptaan-ciptaan baharu yang terhasil daripada pemerhatian dan eksperimen (empirikal) serta dinilai berdasarkan kegunaan dan keberkesanannya (pragmatik).",
        incorrect: {
          a: "Revolusi Industri menentang kaedah tradisional yang tidak efisien.",
          b: "Ia lebih menumpukan kepada aplikasi praktikal berbanding spekulasi metafizik.",
          d: "Revolusi Industri lahir dari keyakinan terhadap kemampuan manusia untuk menguasai alam, bukan skeptisisme.",
        },
      },
    },
    {
      id: "epi6-q40",
      text: "Secara keseluruhannya, mengapakah pengajian epistemologi penting untuk seorang pelajar di universiti?",
      options: [
        {
          id: "a",
          text: "Untuk membolehkan pelajar menghafal semua fakta dalam bidang pengajian mereka.",
        },
        {
          id: "b",
          text: "Untuk melatih pelajar berfikir secara kritis tentang asas dan kesahan ilmu yang mereka pelajari.",
        },
        {
          id: "c",
          text: "Untuk membuktikan bahawa bidang pengajian mereka adalah lebih unggul daripada bidang lain.",
        },
        {
          id: "d",
          text: "Untuk menggantikan semua kaedah pembelajaran tradisional dengan kaedah moden.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Tujuan utama mempelajari epistemologi adalah untuk membina kemahiran metakognitif, iaitu kebolehan untuk berfikir tentang pemikiran itu sendiri. Ini membolehkan pelajar menilai sumber, kaedah, dan kesahan ilmu dalam bidang mereka.",
        incorrect: {
          a: "Epistemologi bukan tentang menghafal, tetapi tentang mempersoalkan dan memahami.",
          c: "Ini membawa kepada pendekatan mono-disiplin yang sempit, yang ditentang oleh konsep kesepaduan ilmu.",
          d: "Epistemologi mengkaji semua kaedah, baik tradisional mahupun moden, bukan untuk menggantikannya secara total.",
        },
      },
    },
  ],
};
