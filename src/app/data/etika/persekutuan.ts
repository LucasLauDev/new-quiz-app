import { Quiz } from "@/app/types/quiz";

export const persekutuan: Quiz = {
  id: "persekutuan",
  categoryId: "etika",
  subcategoryId: "topik-6",
  title: "Perlembagaan Persekutuan",
  questions: [
    {
      id: "pep6-q1",
      text: 'Apakah yang dimaksudkan dengan "Tapak Integrasi" dalam konteks sosial di Malaysia?',
      options: [
        {
          id: "a",
          text: "Sebuah ruang fizikal yang dikhaskan oleh kerajaan untuk perbincangan antara etnik.",
        },
        {
          id: "b",
          text: "Sebuah ruang abstrak dan nyata di mana pelbagai kelompok masyarakat bertemu untuk mencari persetujuan secara harmoni.",
        },
        {
          id: "c",
          text: "Sebuah program kerajaan yang memaksa semua etnik untuk menerima satu budaya dominan.",
        },
        {
          id: "d",
          text: "Sebuah platform digital untuk perdebatan politik antara parti-parti yang berbeza.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Ini adalah definisi tepat yang diberikan dalam nota, iaitu ruang pertemuan (abstrak dan nyata) bagi pelbagai kelompok untuk mencari titik pertemuan secara aman dan harmoni.",
        incorrect: {
          a: "Konsep ini bukan hanya terhad kepada ruang fizikal yang disediakan kerajaan, tetapi merangkumi juga ruang abstrak seperti persefahaman dan perundingan.",
          c: "Tapak integrasi berasaskan kepada persetujuan dan perundingan, bukan paksaan untuk menerima budaya dominan (asimilasi paksa).",
          d: "Walaupun politik boleh menjadi sebahagian daripadanya, tapak integrasi adalah konsep yang lebih luas merangkumi aspek sosial dan budaya, bukan hanya platform digital untuk politik.",
        },
      },
    },
    {
      id: "pep6-q2",
      text: "Konsep Tapak Integrasi wujud pada tahap berikut, KECUALI:",
      options: [
        { id: "a", text: "Makro (Atas ke Bawah)" },
        { id: "b", text: "Meso (Bawah ke Atas)" },
        { id: "c", text: "Mikro (Inisiatif Akar Umbi)" },
        { id: "d", text: "Neo-Klasik" },
      ],
      correctOptionId: "d",
      explanation: {
        correct:
          'Istilah "Neo-Klasik" tidak berkaitan dengan tahap-tahap Tapak Integrasi yang dibincangkan dalam nota.',
        incorrect: {
          a: "Tahap Makro merujuk kepada inisiatif kerajaan seperti Perlembagaan dan adalah tahap yang dinyatakan dalam nota.",
          b: "Tahap Meso merujuk kepada peranan NGO dan adalah tahap yang dinyatakan dalam nota.",
          c: "Tahap Mikro merujuk kepada inisiatif rakyat dan adalah tahap yang dinyatakan dalam nota.",
        },
      },
    },
    {
      id: "pep6-q3",
      text: "Apakah ciri utama sesebuah Tapak Integrasi?",
      options: [
        {
          id: "a",
          text: "Proses pertemuan berasaskan tawar-menawar, perundingan, dan pengantaraan.",
        },
        {
          id: "b",
          text: "Proses pertemuan yang dikawal sepenuhnya oleh pihak kerajaan tanpa penglibatan rakyat.",
        },
        {
          id: "c",
          text: "Proses pertemuan yang hanya berlaku dalam kalangan kelompok elit politik.",
        },
        {
          id: "d",
          text: "Proses pertemuan berasaskan desakan majoriti ke atas minoriti.",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Nota secara spesifik menyatakan bahawa proses pertemuan dalam tapak integrasi adalah berasaskan prinsip tawar-menawar (Bargaining), perundingan (Negotiation), dan pengantaraan (Mediation).",
        incorrect: {
          b: "Tapak integrasi boleh wujud di pelbagai peringkat, termasuk inisiatif akar umbi (mikro) dan NGO (meso) yang tidak dikawal sepenuhnya oleh kerajaan.",
          c: "Pertemuan ini melibatkan pelbagai pihak termasuk kelompok strategik, NGO, dan rakyat biasa, bukan hanya elit politik.",
          d: "Semangat tapak integrasi adalah mencari persetujuan dan titik pertemuan secara harmoni, bukan melalui desakan atau paksaan.",
        },
      },
    },
    {
      id: "pep6-q4",
      text: "Undang-undang yang wujud sebelum penjajahan membuktikan Tanah Melayu sudah ada sistem pemerintahan tersusun. Antara berikut, yang manakah termasuk dalam undang-undang tersebut?\nI. Hukum Kanun Melaka\nII. Undang-Undang Laut Melaka\nIII. Batu Bersurat Terengganu\nIV. Undang-undang Hammurabi",
      options: [
        { id: "a", text: "I, II dan III" },
        { id: "b", text: "I, II dan IV" },
        { id: "c", text: "II, III dan IV" },
        { id: "d", text: "I, III dan IV" },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Ketiga-tiga undang-undang ini (Hukum Kanun Melaka, Undang-Undang Laut Melaka, Batu Bersurat Terengganu) disebut secara jelas dalam nota sebagai bukti kewujudan sistem pentadbiran yang tersusun sebelum kedatangan penjajah.",
        incorrect: {
          b: "Undang-undang Hammurabi adalah kod undang-undang dari Babylon purba dan tidak berkaitan dengan sejarah Tanah Melayu.",
          c: "Sama seperti B, Undang-undang Hammurabi tidak relevan.",
          d: "Sama seperti B, Undang-undang Hammurabi tidak relevan.",
        },
      },
    },
    {
      id: "pep6-q5",
      text: "Apakah tujuan utama British memperkenalkan Malayan Union pada 1946?",
      options: [
        {
          id: "a",
          text: "Mengukuhkan kuasa Raja-Raja Melayu sebagai persediaan untuk kemerdekaan.",
        },
        {
          id: "b",
          text: "Membalas jasa orang Melayu yang menentang Jepun semasa Perang Dunia Kedua.",
        },
        {
          id: "c",
          text: "Menyatukan negeri-negeri Melayu di bawah satu pentadbiran untuk meningkatkan kecekapan pengurusan.",
        },
        {
          id: "d",
          text: "Menyekat kemasukan pedagang asing bagi melindungi ekonomi tempatan.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Salah satu sebab utama pengenalan Malayan Union adalah untuk menyatukan Negeri-Negeri Selat, Bersekutu, dan Tidak Bersekutu bagi melicinkan pentadbiran.",
        incorrect: {
          a: "Malayan Union sebaliknya melemahkan kuasa Raja-Raja Melayu dengan ketara.",
          b: "Nota menyatakan British menyimpan perasaan anti-Melayu kerana ada kerjasama orang Melayu dengan Jepun, bukan untuk membalas jasa.",
          d: "Malayan Union memudahkan kerakyatan bagi orang asing, bukan menyekat kemasukan mereka.",
        },
      },
    },
    {
      id: "pep6-q6",
      text: "Mengapakah orang Melayu menentang gagasan Malayan Union?",
      options: [
        {
          id: "a",
          text: "Kuasa Raja-Raja Melayu diperkukuhkan dan pentadbiran menjadi lebih adil.",
        },
        {
          id: "b",
          text: "Kerakyatan diberi berdasarkan prinsip jus soli dan kedaulatan Raja-Raja terhakis.",
        },
        {
          id: "c",
          text: "Singapura dikeluarkan daripada gagasan Malayan Union.",
        },
        {
          id: "d",
          text: "Harold MacMichael menggunakan cara diplomasi untuk mendapatkan persetujuan Raja-Raja.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Dua sebab utama penentangan adalah pemberian kerakyatan yang longgar berdasarkan tempat lahir (jus soli) dan penghakisan kedaulatan Raja-Raja Melayu.",
        incorrect: {
          a: "Kuasa Raja-Raja Melayu hampir dilenyapkan, bukan diperkukuhkan.",
          c: "Pengasingan Singapura adalah sebahagian daripada ciri Malayan Union, tetapi bukan sebab utama penentangan orang Melayu. Isu kedaulatan dan kerakyatan lebih utama.",
          d: "Penentangan juga berpunca daripada cara Harold MacMichael yang menggunakan paksaan dan ugutan, bukan diplomasi.",
        },
      },
    },
    {
      id: "pep6-q7",
      text: "Apakah nama jawatankuasa yang ditubuhkan pada Julai 1946 bagi menggantikan Malayan Union dan merangka Perlembagaan Persekutuan Tanah Melayu 1948?",
      options: [
        { id: "a", text: "Jawatankuasa Perundingan" },
        { id: "b", text: "Jawatankuasa Perhubungan Masyarakat (CLC)" },
        { id: "c", text: "Jawatankuasa Kerja" },
        { id: "d", text: "Suruhanjaya Reid" },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota menyatakan sebuah Jawatankuasa Kerja yang terdiri daripada wakil Raja-Raja Melayu, UMNO, dan pegawai British ditubuhkan pada Julai 1946 untuk merangka perlembagaan baru.",
        incorrect: {
          a: "Jawatankuasa Perundingan ditubuhkan kemudian pada Disember 1947 untuk mendapatkan pandangan bukan Melayu.",
          b: "CLC ditubuhkan pada 1949 untuk membincangkan isu antara kaum, selepas PTM 1948 diwujudkan.",
          d: "Suruhanjaya Reid ditubuhkan pada tahun 1956 untuk merangka Perlembagaan Kemerdekaan 1957.",
        },
      },
    },
    {
      id: "pep6-q8",
      text: "Ciri-ciri Perlembagaan Persekutuan Tanah Melayu 1948 termasuklah:",
      options: [
        { id: "a", text: "Singapura dimasukkan semula ke dalam Persekutuan." },
        { id: "b", text: "Kedaulatan Raja-Raja Melayu dihapuskan sepenuhnya." },
        {
          id: "c",
          text: "Syarat kewarganegaraan diketatkan berbanding Malayan Union.",
        },
        { id: "d", text: "Prinsip jus soli dikekalkan untuk semua penduduk." },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Syarat kewarganegaraan telah diketatkan, memerlukan tempoh mastautin yang lebih lama dan pengetahuan Bahasa Melayu.",
        incorrect: {
          a: "Singapura kekal sebagai tanah jajahan yang berasingan di bawah PTM 1948.",
          b: "Kedaulatan Raja-Raja Melayu dipulihkan di negeri masing-masing.",
          d: "Prinsip jus soli yang longgar telah dimansuhkan dan digantikan dengan syarat yang lebih ketat.",
        },
      },
    },
    {
      id: "pep6-q9",
      text: "Apakah peranan utama Jawatankuasa Perhubungan Masyarakat (CLC) yang ditubuhkan pada tahun 1949?",
      options: [
        {
          id: "a",
          text: "Untuk menentang penubuhan Persekutuan Tanah Melayu 1948.",
        },
        {
          id: "b",
          text: "Untuk membincangkan isu-isu sensitif seperti kewarganegaraan dan kedudukan khas orang Melayu.",
        },
        {
          id: "c",
          text: "Untuk menguruskan Pilihan Raya Umum yang pertama pada tahun 1955.",
        },
        { id: "d", text: "Untuk merangka perlembagaan bagi Malayan Union." },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "CLC ditubuhkan sebagai platform untuk pemimpin pelbagai etnik berunding dan mencari jalan penyelesaian bagi isu-isu seperti kewarganegaraan, kedudukan khas Melayu, dan dasar pendidikan.",
        incorrect: {
          a: "CLC berusaha untuk mencari persefahaman dalam kerangka PTM 1948, bukan menentangnya.",
          c: "Pilihan raya diuruskan oleh suruhanjaya pilihan raya; CLC adalah badan perundingan politik dan sosial.",
          d: "Malayan Union diperkenalkan sebelum CLC ditubuhkan; CLC wujud selepas era tersebut.",
        },
      },
    },
    {
      id: "pep6-q10",
      text: 'Pilihan Raya Umum 1955 dianggap sebagai satu "Tapak Integrasi" yang penting kerana:',
      options: [
        {
          id: "a",
          text: "British memberikan kemerdekaan serta-merta selepas pilihan raya tersebut.",
        },
        {
          id: "b",
          text: "Semua parti politik yang bertanding hanya mewakili satu etnik sahaja.",
        },
        {
          id: "c",
          text: "Parti Perikatan menunjukkan kompromi dan perkongsian kuasa antara etnik dalam pembahagian kerusi.",
        },
        {
          id: "d",
          text: "Pilihan raya ini membawa kepada pembatalan Persekutuan Tanah Melayu 1948.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota menonjolkan bagaimana UMNO, walaupun mewakili pengundi majoriti Melayu, berkompromi dengan memberikan sejumlah besar kerusi kepada calon MCA dan MIC, menunjukkan perkongsian kuasa sebagai asas integrasi.",
        incorrect: {
          a: "Kemenangan dalam pilihan raya ini menjadi asas kukuh untuk rundingan kemerdekaan, tetapi kemerdekaan tidak diberikan serta-merta.",
          b: "Kemenangan besar Parti Perikatan (gabungan UMNO, MCA, MIC) menunjukkan kejayaan kerjasama antara etnik, bukan sebaliknya.",
          d: "Pilihan raya ini mengukuhkan lagi kerangka PTM 1948 menuju kemerdekaan.",
        },
      },
    },
    {
      id: "pep6-q11",
      text: "Apakah nama Suruhanjaya yang bertanggungjawab merangka Perlembagaan Persekutuan Tanah Melayu yang merdeka?",
      options: [
        { id: "a", text: "Suruhanjaya Cobbold" },
        { id: "b", text: "Suruhanjaya Kerja" },
        { id: "c", text: "Suruhanjaya Reid" },
        { id: "d", text: "Suruhanjaya Persekutuan" },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Suruhanjaya Reid merupakan suruhanjaya bebas yang dilantik pada 1956 untuk merangka perlembagaan bagi Persekutuan Tanah Melayu yang merdeka.",
        incorrect: {
          a: "Suruhanjaya Cobbold ditubuhkan pada tahun 1962 untuk meninjau pandangan penduduk Sabah dan Sarawak mengenai pembentukan Malaysia.",
          b: "Jawatankuasa Kerja ditubuhkan pada 1946 untuk menggubal Perlembagaan PTM 1948.",
          d: "Tiada suruhanjaya dengan nama ini dalam konteks sejarah perlembagaan Malaysia.",
        },
      },
    },
    {
      id: "pep6-q12",
      text: "Antara berikut, yang manakah BUKAN ahli Suruhanjaya Reid?",
      options: [
        { id: "a", text: "Lord William Reid" },
        { id: "b", text: "Sir Ivor Jennings" },
        { id: "c", text: "Hakim Abdul Hamid" },
        { id: "d", text: "Tunku Abdul Rahman" },
      ],
      correctOptionId: "d",
      explanation: {
        correct:
          "Tunku Abdul Rahman adalah pemimpin politik tempatan (Parti Perikatan) yang berunding dengan British, tetapi beliau bukan ahli suruhanjaya teknikal yang merangka perlembagaan tersebut.",
        incorrect: {
          a: "Lord Reid ialah pengerusi suruhanjaya tersebut.",
          b: "Sir Ivor Jennings dari UK merupakan salah seorang ahli pakar perlembagaan dalam suruhanjaya itu.",
          c: "Hakim Abdul Hamid dari Pakistan juga merupakan seorang ahli suruhanjaya.",
        },
      },
    },
    {
      id: "pep6-q13",
      text: "Manakah antara berikut BUKAN sebahagian daripada terma rujukan yang diberikan kepada Suruhanjaya Reid?",
      options: [
        {
          id: "a",
          text: "Mewujudkan satu kewarganegaraan yang sama untuk seluruh persekutuan.",
        },
        {
          id: "b",
          text: "Menjamin kedudukan istimewa orang Melayu dan kepentingan sah komuniti lain.",
        },
        {
          id: "c",
          text: "Menubuhkan sebuah negara kesatuan (unitary state) dengan kuasa penuh pada kerajaan pusat.",
        },
        {
          id: "d",
          text: "Memelihara kedudukan dan martabat Raja-Raja Melayu sebagai pemerintah berperlembagaan.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Terma rujukan meminta pembentukan sebuah negara persekutuan (federal form of constitution), bukannya negara kesatuan. Negara persekutuan membahagikan kuasa antara pusat dan negeri.",
        incorrect: {
          a: "Ini adalah salah satu terma rujukan utama yang disebut sebagai 'a common nationality'.",
          b: "Ini juga merupakan terma rujukan yang amat penting dan menjadi asas kepada 'kontrak sosial'.",
          d: "Memelihara kedudukan Raja-Raja Melayu adalah teras dalam perbincangan perlembagaan.",
        },
      },
    },
    {
      id: "pep6-q14",
      text: "Apakah maksud “Kontrak Sosial” dalam konteks Perlembagaan Persekutuan?",
      options: [
        {
          id: "a",
          text: "Satu perjanjian perniagaan antara pemimpin tempatan dengan Syarikat Hindia Timur Inggeris.",
        },
        {
          id: "b",
          text: "Satu persefahaman antara pemimpin pelbagai kaum mengenai hak dan tanggungjawab masing-masing demi kepentingan bersama.",
        },
        {
          id: "c",
          text: "Satu undang-undang yang digubal sepenuhnya oleh pihak British tanpa rundingan tempatan.",
        },
        {
          id: "d",
          text: "Satu perjanjian bertulis yang ditandatangani oleh semua rakyat Tanah Melayu sebelum merdeka.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Istilah ini merujuk kepada persefahaman atau persetujuan antara komuniti Melayu dan bukan Melayu, di mana perkara seperti kewarganegaraan, kedudukan istimewa Melayu, bahasa, dan agama dipersetujui demi keharmonian dan kemerdekaan negara.",
        incorrect: {
          a: "Kontrak sosial adalah istilah sosiopolitik moden, bukan perjanjian perniagaan era kolonial awal.",
          c: "Perlembagaan digubal melalui proses rundingan yang melibatkan wakil Raja-Raja Melayu dan Parti Perikatan, bukan secara unilateral oleh British.",
          d: "Ia bukan dokumen yang ditandatangani oleh setiap rakyat, tetapi satu persetujuan yang dicapai oleh pemimpin-pemimpin yang mewakili komuniti mereka.",
        },
      },
    },
    {
      id: "pep6-q15",
      text: "Apakah empat proses integrasi majoriti-minoriti yang diketengahkan dalam kajian kes di Kelantan?",
      options: [
        { id: "a", text: "Nasionalisme, Liberalisme, Sosialisme, Demokrasi" },
        { id: "b", text: "Integrasi, Perpaduan, Kesatuan, Penyatuan" },
        { id: "c", text: "Asimilasi, Akomodasi, Akulturasi, Amalgamasi" },
        { id: "d", text: "Akomodasi, Perkauman, Akulturasi, Nasionalisme" },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota dengan jelas menyenaraikan dan menghuraikan empat proses ini—Asimilasi, Akomodasi, Akulturasi, dan Amalgamasi—menggunakan contoh komuniti Siam Kelantan.",
        incorrect: {
          a: "Ini adalah senarai ideologi politik, bukan proses interaksi sosial antara etnik.",
          b: "Ini adalah perkataan-perkataan sinonim yang merujuk kepada hasil, bukan proses sosiologikal yang spesifik.",
          d: "Perkauman dan Nasionalisme bukan sebahagian daripada empat proses sosiologikal yang dibincangkan.",
        },
      },
    },
    {
      id: "pep6-q16",
      text: "Dalam kajian kes Kelantan, komuniti Siam menggunakan dialek Kelantan dalam pertuturan harian. Ini adalah contoh proses:",
      options: [
        { id: "a", text: "Asimilasi" },
        { id: "b", text: "Akomodasi" },
        { id: "c", text: "Akulturasi" },
        { id: "d", text: "Amalgamasi" },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Asimilasi berlaku apabila kumpulan minoriti menerima dan menghayati unsur budaya utama kumpulan majoriti. Penggunaan dialek Kelantan oleh komuniti Siam adalah contoh jelas proses ini.",
        incorrect: {
          b: "Akomodasi ialah proses saling menghormati perbezaan budaya tanpa menukar budaya sendiri.",
          c: "Akulturasi ialah proses pinjam-meminjam unsur budaya, bukan penerimaan bahasa harian.",
          d: "Amalgamasi merujuk kepada perkahwinan campur.",
        },
      },
    },
    {
      id: "pep6-q17",
      text: "Bahagian III Perlembagaan Persekutuan adalah berkaitan dengan:",
      options: [
        { id: "a", text: "Kebebasan Asasi" },
        { id: "b", text: "Kewarganegaraan" },
        { id: "c", text: "Kuasa Badan Kehakiman" },
        { id: "d", text: "Kedudukan Raja-Raja Melayu" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota secara spesifik merujuk Bahagian III Perlembagaan Persekutuan sebagai bahagian yang memperuntukkan tentang Kewarganegaraan.",
        incorrect: {
          a: "Kebebasan Asasi terkandung dalam Bahagian II (Perkara 5–13).",
          c: "Kuasa Badan Kehakiman terkandung dalam Bahagian IX.",
          d: "Kedudukan Raja-Raja Melayu dan Majlis Raja-Raja terkandung dalam Bahagian IV.",
        },
      },
    },
    {
      id: "pep6-q18",
      text: "Perlembagaan Persekutuan adalah undang-undang tertinggi negara. Apakah implikasi prinsip ini?",
      options: [
        {
          id: "a",
          text: "Parlimen boleh meluluskan undang-undang yang bertentangan dengan Perlembagaan.",
        },
        {
          id: "b",
          text: "Sebarang undang-undang yang bercanggah dengan Perlembagaan adalah tidak sah setakat mana ia bercanggah.",
        },
        {
          id: "c",
          text: "Hanya Yang di-Pertuan Agong yang boleh mentafsir peruntukan Perlembagaan.",
        },
        {
          id: "d",
          text: "Perlembagaan boleh dipinda dengan mudah melalui undi majoriti mudah di Parlimen.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "slide mengenai 'Perlembagaan Persekutuan Undang-Undang Tertinggi' dengan jelas menyatakan di bawah Perkara 4(1) bahawa semua undang-undang yang bercanggah dengan Perlembagaan adalah tidak sah.",
        incorrect: {
          a: "Ini bertentangan dengan prinsip keluhuran Perlembagaan. Parlimen sendiri tertakluk kepada Perlembagaan.",
          c: "Badan Kehakiman (mahkamah) diberi kuasa untuk mentafsir Perlembagaan.",
          d: "Pindaan kepada kebanyakan peruntukan Perlembagaan memerlukan prosedur yang ketat seperti majoriti dua pertiga.",
        },
      },
    },
    {
      id: "pep6-q19",
      text: "Antara berikut, yang manakah termasuk dalam cara mendapatkan kewarganegaraan Malaysia?\nI. Operasi undang-undang\nII. Pendaftaran\nIII. Naturalisasi\nIV. Gabungan wilayah",
      options: [
        { id: "a", text: "I, II dan III sahaja" },
        { id: "b", text: "I, II dan IV sahaja" },
        { id: "c", text: "I, II, III dan IV" },
        { id: "d", text: "II dan IV sahaja" },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota dengan jelas menyenaraikan keempat-empat cara ini sebagai kaedah untuk mendapatkan kewarganegaraan di bawah Perlembagaan Persekutuan.",
        incorrect: {
          a: "Pilihan ini tertinggal cara pemerolehan melalui gabungan wilayah.",
          b: "Pilihan ini tertinggal cara pemerolehan melalui naturalisasi (pemasukan).",
          d: "Pilihan ini tidak lengkap kerana meninggalkan dua cara pemerolehan yang lain.",
        },
      },
    },
    {
      id: "pep6-q20",
      text: "Siapakah tokoh yang menjadi contoh integrasi dalam masyarakat Siam Kelantan melalui penglibatannya dalam kesenian Wayang Kulit?",
      options: [
        { id: "a", text: "Kang Boon Ann" },
        { id: "b", text: "Siri Neng Buah" },
        { id: "c", text: "Prof Yusoff Ismail" },
        { id: "d", text: "Tun Tan Cheng Lock" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota menonjolkan Siri Neng Buah sebagai tokoh integrasi Siam Kelantan yang aktif sebagai pentadbir budaya dan Tok Dalang Wayang Kulit bersama ahli-ahli Melayu dan Cina.",
        incorrect: {
          a: "Kang Boon Ann adalah seorang Tok Dalang Cina yang bekerjasama dengan Siri Neng Buah, tetapi tokoh utama yang dibincangkan ialah Siri Neng Buah.",
          c: "Prof Yusoff Ismail adalah sumber rujukan yang disebut dalam nota, bukan tokoh Siam itu sendiri.",
          d: "Tun Tan Cheng Lock adalah tokoh politik MCA peringkat kebangsaan dan tidak berkaitan dengan kesenian Siam Kelantan.",
        },
      },
    },
    {
      id: "pep6-q21",
      text: "Perkara 152 dalam Perlembagaan Persekutuan adalah berkaitan dengan:",
      options: [
        { id: "a", text: "Hak istimewa orang Melayu" },
        { id: "b", text: "Bahasa Kebangsaan" },
        { id: "c", text: "Kewarganegaraan" },
        { id: "d", text: "Kebebasan beragama" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Perkara 152 mengangkat Bahasa Melayu sebagai bahasa kebangsaan dan merupakan salah satu 'Elemen Warisan' dalam Perlembagaan.",
        incorrect: {
          a: "Hak istimewa orang Melayu termaktub di bawah Perkara 153.",
          c: "Kewarganegaraan dibincangkan secara khusus dalam Bahagian III Perlembagaan.",
          d: "Kebebasan beragama dijamin di bawah Perkara 11.",
        },
      },
    },
    {
      id: "pep6-q22",
      text: "Antara berikut, manakah elemen penting yang membentuk kerangka asas Perlembagaan Persekutuan?\nI. Islam sebagai agama Persekutuan\nII. Negara Persekutuan\nIII. Perlembagaan sebagai Undang-Undang Tertinggi\nIV. Elemen Warisan",
      options: [
        { id: "a", text: "I, II dan III sahaja" },
        { id: "b", text: "II, III dan IV sahaja" },
        { id: "c", text: "I, II, III dan IV" },
        { id: "d", text: "I dan IV sahaja" },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "slide 'Kerangka Asas Perlembagaan Persekutuan' dengan jelas memaparkan keempat-empat elemen ini sebagai komponen utamanya.",
        incorrect: {
          a: "Elemen Warisan juga merupakan sebahagian daripada kerangka asas yang dibincangkan.",
          b: "Islam sebagai agama Persekutuan adalah salah satu tonggak utama kerangka tersebut.",
          d: "Pilihan ini tidak lengkap kerana meninggalkan konsep Negara Persekutuan dan Keluhuran Perlembagaan.",
        },
      },
    },
    {
      id: "pep6-q23",
      text: "Kawasan Rukun Tetangga (KRT) yang wujud sejak 1970-an merupakan contoh Tapak Integrasi pada tahap:",
      options: [
        { id: "a", text: "Mikro (Akar Umbi)" },
        { id: "b", text: "Meso (Bawah ke Atas)" },
        { id: "c", text: "Makro (Atas ke Bawah)" },
        { id: "d", text: "Global (Antarabangsa)" },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "KRT adalah sebuah program yang diinstitusikan oleh kerajaan untuk seluruh negara, menjadikannya satu inisiatif 'atas ke bawah' atau makro.",
        incorrect: {
          a: "Tahap mikro adalah inisiatif organik dari rakyat sendiri, seperti 'street wedding'.",
          b: "Tahap meso merujuk kepada peranan badan bukan kerajaan (NGO).",
          d: "KRT adalah inisiatif domestik dan bukan di peringkat antarabangsa.",
        },
      },
    },
    {
      id: "pep6-q24",
      text: "Proses pindaan sesetengah Perkara sensitif dalam Perlembagaan memerlukan:",
      options: [
        { id: "a", text: "Undi majoriti mudah di Dewan Rakyat sahaja." },
        {
          id: "b",
          text: "Undi 2/3 majoriti di Dewan Rakyat dan Dewan Negara serta perkenan Majlis Raja-Raja.",
        },
        { id: "c", text: "Hanya persetujuan Perdana Menteri dan Kabinet." },
        {
          id: "d",
          text: "Referendum yang melibatkan semua pengundi di Malaysia.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota menyatakan dengan jelas bahawa untuk meminda perkara-perkara seperti kedudukan Raja-Raja (Perkara 38), hak istimewa Melayu (Perkara 153), dan Bahasa Kebangsaan (Perkara 152), ia memerlukan majoriti 2/3 di kedua-dua dewan Parlimen dan perkenan Majlis Raja-Raja.",
        incorrect: {
          a: "Majoriti mudah tidak mencukupi untuk meminda perkara-perkara utama Perlembagaan.",
          c: "Kuasa eksekutif sahaja tidak boleh meminda perlembagaan; ia memerlukan proses perundangan yang ketat.",
          d: "Sistem perundangan Malaysia tidak mengamalkan referendum untuk pindaan Perlembagaan.",
        },
      },
    },
    {
      id: "pep6-q25",
      text: "Apakah maksud **akomodasi** dalam proses integrasi di Kelantan?",
      options: [
        {
          id: "a",
          text: "Kumpulan minoriti menerima sepenuhnya budaya majoriti.",
        },
        {
          id: "b",
          text: "Majoriti dan minoriti sedar serta menghormati norma dan nilai masing-masing.",
        },
        {
          id: "c",
          text: "Berlaku perkahwinan campur secara meluas antara etnik.",
        },
        {
          id: "d",
          text: "Berlaku proses pinjam-meminjam unsur budaya seperti makanan dan kesenian.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Akomodasi berlaku apabila setiap kumpulan etnik mengekalkan identiti budayanya tetapi menghormati perbezaan kumpulan lain. Contohnya ialah komuniti Siam Kelantan yang bebas mengamalkan agama Buddha Theravada.",
        incorrect: {
          a: "Ini adalah definisi asimilasi.",
          c: "Ini adalah definisi amalgamasi.",
          d: "Ini adalah definisi akulturasi.",
        },
      },
    },
    {
      id: "pep6-q26",
      text: 'Komposisi kabinet pertama Persekutuan Tanah Melayu selepas Pilihan Raya 1955 dianggap sebagai permulaan "Tapak Integrasi" kerana:',
      options: [
        {
          id: "a",
          text: "Semua menteri dilantik daripada kalangan orang Melayu sahaja.",
        },
        {
          id: "b",
          text: "Kabinet tersebut terdiri daripada komposisi berbilang kaum, menunjukkan perkongsian kuasa.",
        },
        {
          id: "c",
          text: "Ia dibentuk sepenuhnya oleh Pesuruhjaya Tinggi British tanpa campur tangan tempatan.",
        },
        {
          id: "d",
          text: "Ia menolak semua cadangan daripada Suruhanjaya Reid.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Pelantikan menteri dari pelbagai kaum (Melayu, Cina, India) oleh Tunku Abdul Rahman menunjukkan satu kerjasama dan keseimbangan etnik yang menjadi asas kepada integrasi di peringkat pemerintahan (makro).",
        incorrect: {
          a: "Kabinet tersebut terdiri daripada enam orang Melayu, tiga orang Cina, dan seorang India.",
          c: "Kabinet dibentuk oleh Tunku Abdul Rahman sebagai Ketua Menteri yang memenangi pilihan raya.",
          d: "Suruhanjaya Reid ditubuhkan selepas pembentukan kabinet ini untuk merangka Perlembagaan Kemerdekaan.",
        },
      },
    },
    {
      id: "pep6-q27",
      text: "Apakah yang dimaksudkan dengan **amalgamasi**?",
      options: [
        {
          id: "a",
          text: "Proses asimilasi biologi antara majoriti dan minoriti melalui perkahwinan campur.",
        },
        {
          id: "b",
          text: "Penyatuan parti-parti politik untuk membentuk kerajaan campuran.",
        },
        {
          id: "c",
          text: "Pinjam-meminjam unsur budaya tanpa mengubah budaya asal.",
        },
        { id: "d", text: "Saling menghormati perbezaan agama dan adat resam." },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Nota mendefinisikan amalgamasi sebagai asimilasi biologi yang berlaku khususnya melalui perkahwinan campur antara kumpulan etnik yang berbeza.",
        incorrect: {
          b: "Ini adalah proses gabungan politik (koalisi), bukan proses sosiologi yang merujuk kepada percampuran biologi.",
          c: "Ini adalah definisi akulturasi.",
          d: "Ini adalah definisi akomodasi.",
        },
      },
    },
    {
      id: "pep6-q28",
      text: "Dalam Perlembagaan, siapakah yang dipilih sebagai Ketua Negara Persekutuan (Yang di-Pertuan Agong)?",
      options: [
        { id: "a", text: "Dilantik secara tetap oleh Perdana Menteri." },
        {
          id: "b",
          text: "Dipilih dari kalangan Raja-Raja Melayu oleh Majlis Raja-Raja.",
        },
        {
          id: "c",
          text: "Dipilih secara langsung oleh rakyat melalui pilihan raya.",
        },
        {
          id: "d",
          text: "Warisan takhta turun-temurun seperti sistem monarki mutlak.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Salah satu terma rujukan Suruhanjaya Reid ialah untuk mewujudkan jawatan Yang di-Pertuan Besar (kemudiannya YDPA) yang akan dipilih dari kalangan Raja-Raja Melayu. Ini termaktub dalam Perlembagaan.",
        incorrect: {
          a: "Perdana Menteri tidak mempunyai kuasa untuk melantik YDPA.",
          c: "Rakyat tidak mengundi secara langsung untuk jawatan YDPA.",
          d: "Malaysia mengamalkan sistem monarki bergilir, bukan monarki warisan di peringkat persekutuan.",
        },
      },
    },
    {
      id: "pep6-q29",
      text: "Perkara 153 Perlembagaan Persekutuan menjamin:",
      options: [
        {
          id: "a",
          text: "Hak sama rata untuk semua warganegara dalam semua perkara.",
        },
        {
          id: "b",
          text: "Kedudukan istimewa orang Melayu dan kepentingan sah komuniti-komuniti lain.",
        },
        {
          id: "c",
          text: "Kedudukan Bahasa Melayu sebagai satu-satunya bahasa yang boleh digunakan di Malaysia.",
        },
        {
          id: "d",
          text: "Kebebasan mutlak untuk semua agama tanpa sebarang sekatan.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Perkara 153 secara spesifik memperuntukkan mengenai tanggungjawab Yang di-Pertuan Agong untuk memelihara kedudukan istimewa orang Melayu dan bumiputera Sabah dan Sarawak, serta melindungi kepentingan sah kaum-kaum lain.",
        incorrect: {
          a: "Walaupun Perkara 8 menjamin kesamarataan, Perkara 153 memberikan pengecualian untuk melindungi kedudukan istimewa Melayu.",
          c: "Walaupun Bahasa Melayu adalah bahasa kebangsaan, bahasa-bahasa lain boleh digunakan.",
          d: "Kebebasan beragama tertakluk kepada undang-undang yang mengawal ketenteraman awam, kesihatan awam, atau moral.",
        },
      },
    },
    {
      id: "pep6-q30",
      text: "Mengapakah Perlembagaan Persekutuan dianggap sebagai simbol kemerdekaan dan kedaulatan negara?",
      options: [
        {
          id: "a",
          text: "Kerana ia digubal sepenuhnya oleh peguam dari London.",
        },
        {
          id: "b",
          text: "Kerana ia merupakan dokumen perundangan tertinggi yang menjadi asas pentadbiran negara yang merdeka.",
        },
        {
          id: "c",
          text: "Kerana ia boleh dipinda dengan mudah oleh Parlimen pada bila-bila masa.",
        },
        {
          id: "d",
          text: "Kerana ia menyalin sepenuhnya Perlembagaan British.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Sebagai undang-undang tertinggi yang menggantikan undang-undang penjajah, Perlembagaan menjadi simbol utama bahawa negara kini bebas, berdaulat, dan ditadbir mengikut acuannya sendiri.",
        incorrect: {
          a: "Penggubalannya melibatkan rundingan meluas dengan pemimpin tempatan dan Raja-Raja Melayu.",
          c: "Kesukaran untuk memindanya (memerlukan majoriti 2/3) sebenarnya mengukuhkan lagi statusnya sebagai dokumen asas negara, bukan melemahkannya.",
          d: "Ia mengguna pakai model Demokrasi Westminster tetapi diubah suai dengan memasukkan elemen-elemen warisan tempatan.",
        },
      },
    },
    {
      id: "pep6-q31",
      text: "Contoh inisiatif akar umbi (Mikro) dalam Tapak Integrasi ialah:",
      options: [
        { id: "a", text: "Pelaksanaan Rancangan Malaysia Lima Tahun." },
        {
          id: "b",
          text: "'Street Wedding' (kenduri kahwin di jalan) dan 'Mamakization'.",
        },
        { id: "c", text: "Penggubalan undang-undang di Parlimen." },
        {
          id: "d",
          text: "Penubuhan Jawatankuasa Perhubungan Masyarakat (CLC).",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota secara spesifik memberikan contoh 'Street Wedding' dan 'Mamakization' sebagai inisiatif akar umbi atau peringkat mikro yang berlaku secara organik dalam masyarakat.",
        incorrect: {
          a: "Ini adalah contoh tapak integrasi peringkat Makro (inisiatif kerajaan).",
          c: "Ini adalah proses di peringkat Makro.",
          d: "CLC adalah contoh tapak integrasi peringkat Meso yang melibatkan pemimpin-pemimpin strategik.",
        },
      },
    },
    {
      id: "pep6-q32",
      text: "Apakah maksud **akulturasi** dalam konteks integrasi masyarakat?",
      options: [
        {
          id: "a",
          text: "Proses pinjam-meminjam unsur budaya di kalangan etnik yang berbeza.",
        },
        {
          id: "b",
          text: "Penyatuan biologi melalui perkahwinan campur antara kaum.",
        },
        {
          id: "c",
          text: "Penerimaan sepenuhnya budaya kumpulan majoriti oleh kumpulan minoriti.",
        },
        {
          id: "d",
          text: "Proses di mana kumpulan etnik saling menghormati perbezaan budaya masing-masing.",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Akulturasi didefinisikan sebagai proses di mana berlaku peminjaman unsur-unsur budaya (seperti makanan, kesenian, pakaian) antara etnik majoriti dan minoriti.",
        incorrect: {
          b: "Ini adalah definisi amalgamasi.",
          c: "Ini adalah definisi asimilasi.",
          d: "Ini adalah definisi akomodasi.",
        },
      },
    },
    {
      id: "pep6-q33",
      text: "Apakah cabaran tafsiran semasa terhadap Perlembagaan yang disebut dalam nota?",
      options: [
        {
          id: "a",
          text: "Penyelesaian perbalahan mengenai ICERD dan konflik kuil.",
        },
        { id: "b", text: "Penubuhan Suruhanjaya Reid pada tahun 1956." },
        { id: "c", text: "Pelaksanaan Pilihan Raya Umum 1955." },
        {
          id: "d",
          text: "Penentangan terhadap Malayan Union pada tahun 1946.",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Nota memberikan dua contoh terkini cabaran tafsiran Perlembagaan, iaitu perdebatan mengenai ratifikasi ICERD dan penyelesaian konflik Kuil Seafield, yang melibatkan tafsiran hak asasi dan kedudukan agama.",
        incorrect: {
          b: "Ini adalah peristiwa sejarah, bukan cabaran tafsiran semasa.",
          c: "Ini adalah peristiwa sejarah yang menjadi asas integrasi.",
          d: "Ini adalah peristiwa sejarah yang membawa kepada penggubalan PTM 1948.",
        },
      },
    },
    {
      id: "pep6-q34",
      text: "Kebebasan Asasi yang dijamin dalam Perlembagaan Persekutuan (Perkara 5-13) adalah bersifat:",
      options: [
        {
          id: "a",
          text: "Mutlak dan tidak boleh disekat dalam apa jua keadaan.",
        },
        {
          id: "b",
          text: "Terpakai kepada warganegara sahaja dan tidak kepada bukan warganegara.",
        },
        {
          id: "c",
          text: "Tidak mutlak dan tertakluk kepada undang-undang demi menjaga ketenteraman awam dan keselamatan negara.",
        },
        {
          id: "d",
          text: "Hanya menjamin hak-hak sivil dan tidak menyentuh hak politik.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota menjelaskan bahawa kebebasan yang diberi tidak bersifat mutlak dan tertakluk kepada kepentingan negara seperti ketenteraman awam, keselamatan, dan moral, serta mengambil kira fabrik masyarakat Malaysia.",
        incorrect: {
          a: "Kebebasan ini tidak mutlak. Contohnya, kebebasan bersuara boleh disekat untuk isu-isu sensitif.",
          b: "Sesetengah hak asasi seperti hak untuk hidup (Perkara 5) terpakai kepada semua orang, bukan warganegara sahaja.",
          d: "Ia merangkumi kedua-dua hak sivil (hak untuk hidup, kebebasan beragama) dan hak politik (kebebasan bersuara, berhimpun, dan berpersatuan).",
        },
      },
    },
    {
      id: "pep6-q35",
      text: "Siapakah tokoh-tokoh utama yang menganggotai Jawatankuasa Perhubungan Masyarakat (CLC) 1949?",
      options: [
        { id: "a", text: "Lord Reid dan Sir Ivor Jennings." },
        { id: "b", text: "Tunku Abdul Rahman dan Tun Abdul Razak." },
        { id: "c", text: "Dato' Onn Jaafar dan Tun Tan Cheng Lock." },
        { id: "d", text: "Harold MacMichael dan Sir Edward Gent." },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota menyenaraikan Dato' Onn Jaafar, Dato’ Abdul Wahab Abdul Aziz, Tun Tan Cheng Lock, dan E.E.C Thuraisingham sebagai antara tokoh yang menganggotai CLC.",
        incorrect: {
          a: "Mereka adalah ahli Suruhanjaya Reid.",
          b: "Mereka adalah pemimpin UMNO terkemudian. Pada 1949, Dato' Onn adalah tokoh utama UMNO.",
          d: "Mereka adalah pegawai British yang terlibat dengan era Malayan Union.",
        },
      },
    },
    {
      id: "pep6-q36",
      text: 'Antara berikut, yang manakah BUKAN "Elemen Warisan" yang sering dirujuk sebagai "tiang seri" Perlembagaan?',
      options: [
        { id: "a", text: "Institusi Beraja" },
        { id: "b", text: "Agama Islam" },
        { id: "c", text: "Bahasa Melayu" },
        { id: "d", text: "Demokrasi Berparlimen" },
      ],
      correctOptionId: "d",
      explanation: {
        correct:
          "Demokrasi Berparlimen adalah elemen moden yang diadaptasi dari sistem Westminster British, bukannya elemen warisan atau tradisi asal Tanah Melayu dalam konteks ini.",
        incorrect: {
          a: "Institusi Beraja adalah elemen warisan utama yang dikekalkan dari sejarah Kesultanan Melayu.",
          b: "Agama Islam juga adalah elemen tradisi yang diberikan kedudukan khas dalam Perlembagaan.",
          c: "Bahasa Melayu sebagai bahasa kebangsaan adalah kesinambungan daripada peranan bersejarahnya.",
        },
      },
    },
    {
      id: "pep6-q37",
      text: "Mengapakah pembentukan Parti Perikatan dan kemenangannya pada 1955 penting dari sudut sejarah perlembagaan?",
      options: [
        {
          id: "a",
          text: "Kerana ia membuktikan hanya satu parti kaum boleh berjaya.",
        },
        {
          id: "b",
          text: "Kerana ia menunjukkan kepada British bahawa kaum-kaum di Tanah Melayu boleh bekerjasama dan memerintah sendiri.",
        },
        {
          id: "c",
          text: "Kerana ia menyebabkan Malayan Union diperkenalkan semula.",
        },
        {
          id: "d",
          text: "Kerana ia menolak sepenuhnya sistem Raja Berperlembagaan.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Kerjasama dan kemenangan cemerlang Perikatan menjadi bukti kukuh kepada British bahawa penduduk tempatan telah bersedia untuk mentadbir negara sendiri, sekali gus mempercepatkan proses rundingan kemerdekaan.",
        incorrect: {
          a: "Ia membuktikan sebaliknya, iaitu gabungan pelbagai kaum (koalisi) adalah formula kejayaan.",
          c: "Ia mengukuhkan lagi laluan menuju kemerdekaan di bawah kerangka PTM 1948.",
          d: "Parti Perikatan mendukung sepenuhnya sistem Raja Berperlembagaan sebagai sebahagian daripada teras negara merdeka.",
        },
      },
    },
    {
      id: "pep6-q38",
      text: "Apakah peranan NGO seperti yang dibincangkan dalam Tapak Integrasi peringkat Meso?",
      options: [
        {
          id: "a",
          text: "Menggantikan peranan kerajaan dalam semua aspek pentadbiran.",
        },
        {
          id: "b",
          text: "Bertindak sebagai pengagih habuan pembangunan dan agen pemantau program untuk minoriti.",
        },
        {
          id: "c",
          text: "Hanya fokus kepada aktiviti keagamaan tanpa melibatkan isu sosial.",
        },
        { id: "d", text: "Menjadi platform untuk ahli politik bersara." },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota menyatakan bahawa di peringkat Meso, NGO memainkan peranan penting sebagai pengagih pembangunan dan pemantau pelaksanaan program, terutamanya untuk golongan minoriti, dari bawah ke atas.",
        incorrect: {
          a: "NGO melengkapkan peranan kerajaan, bukan menggantikannya.",
          c: "Peranan NGO adalah sangat luas, merangkumi isu-isu sosial, ekonomi, alam sekitar, dan hak asasi.",
          d: "Walaupun sesetengah ahli politik mungkin terlibat, ini bukan fungsi utama atau definisi peranan NGO.",
        },
      },
    },
    {
      id: "pep6-q39",
      text: 'Perlembagaan Persekutuan digubal berasaskan "kerangka asal Tanah Melayu". Apakah maksud pernyataan ini?',
      options: [
        {
          id: "a",
          text: "Perlembagaan ini adalah terjemahan terus daripada undang-undang Syariah sepenuhnya.",
        },
        {
          id: "b",
          text: "Perlembagaan ini direka bentuk dengan mengambil kira sejarah, budaya, dan amalan negara yang sedia ada.",
        },
        {
          id: "c",
          text: "Perlembagaan ini menolak semua pengaruh perundangan dari Barat.",
        },
        {
          id: "d",
          text: "Perlembagaan ini digubal tanpa sebarang kompromi antara kaum.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Pernyataan ini bermaksud Perlembagaan tidak dicipta dalam kekosongan, tetapi dibina di atas asas sejarah (Kesultanan Melayu), budaya (Islam, Bahasa Melayu) dan amalan tempatan, kemudian disesuaikan dengan struktur demokrasi moden.",
        incorrect: {
          a: "Walaupun Islam adalah agama Persekutuan, Perlembagaan adalah undang-undang sekular yang mengandungi peruntukan undang-undang sivil.",
          c: "Perlembagaan jelas menerima pengaruh perundangan Barat, terutamanya model Demokrasi Berparlimen Westminster.",
          d: "Perlembagaan adalah hasil kompromi yang signifikan antara kaum, yang sering dirujuk sebagai 'kontrak sosial'.",
        },
      },
    },
    {
      id: "pep6-q40",
      text: 'Secara keseluruhannya, apakah peranan utama Perlembagaan Persekutuan sebagai "wahana etika dan peradaban"?',
      options: [
        {
          id: "a",
          text: "Untuk menghapuskan semua perbezaan budaya bagi mewujudkan satu identiti tunggal.",
        },
        {
          id: "b",
          text: "Untuk menyediakan garis panduan dan sempadan dalam pemerintahan bagi memastikan keadilan dan keharmonian dalam masyarakat majmuk.",
        },
        {
          id: "c",
          text: "Untuk memberi keutamaan kepada pembangunan ekonomi semata-mata.",
        },
        {
          id: "d",
          text: "Untuk memastikan Malaysia kekal di bawah pengaruh Komanwel.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Sebagai undang-undang tertinggi, Perlembagaan menyediakan peraturan asas (etika) untuk interaksi sosial dan politik, serta menjadi landasan untuk membina sebuah masyarakat yang bertamadun, adil, dan harmoni.",
        incorrect: {
          a: "Perlembagaan mengurus kepelbagaian, bukan menghapuskannya. Ia melindungi hak minoriti dan kebebasan beragama.",
          c: "Perlembagaan mengimbangi pembangunan ekonomi dengan hak asasi manusia, keadilan sosial, dan kestabilan politik.",
          d: "Walaupun Malaysia adalah ahli Komanwel, peranan utama Perlembagaan adalah untuk urus tadbir dalaman negara sebagai sebuah negara yang berdaulat.",
        },
      },
    },
  ],
};
