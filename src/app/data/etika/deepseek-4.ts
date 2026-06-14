import { Quiz } from "@/app/types/quiz";

export const DSTopik4: Quiz = {
  id: "ds-topik-4",
  categoryId: "etika",
  subcategoryId: "deepseek-topik-4",
  title: "Topik 4 - Deepseek",
  questions: [
    {
      id: "subject-q1",
      text: "Apakah yang dimaksudkan dengan 'Tapak Integrasi'?",
      options: [
        {
          id: "a",
          text: "Satu dokumen undang-undang tertinggi negara",
        },
        {
          id: "b",
          text: "Ruang abstrak dan nyata untuk pertemuan pelbagai kelompok masyarakat",
        },
        {
          id: "c",
          text: "Satu bentuk pemerintahan demokrasi berparlimen",
        },
        {
          id: "d",
          text: "Proses asimilasi budaya antara etnik",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Tapak Integrasi merujuk kepada ruang (abstrak dan nyata) di mana pelbagai kelompok strategik (etnik, agama, parti politik, NGO) bertemu untuk mencari persetujuan secara aman dan harmoni (slide 4).",
        incorrect: {
          a: "Tapak Integrasi bukan dokumen undang-undang, tetapi merupakan konsep ruang pertemuan.",
          c: "Ia bukan bentuk pemerintahan, tetapi mekanisme interaksi sosial.",
          d: "Ia bukan proses asimilasi, tetapi platform untuk dialog dan mediasi.",
        },
      },
    },
    {
      id: "subject-q2",
      text: "Mengapakah Perlembagaan Persekutuan dianggap sebagai 'kontrak sosial'?",
      options: [
        {
          id: "a",
          text: "Ia digubal oleh Suruhanjaya Reid",
        },
        {
          id: "b",
          text: "Ia mengandungi peruntukan yang memenuhi kepentingan semua pihak dalam masyarakat",
        },
        {
          id: "c",
          text: "Ia menjamin kebebasan beragama",
        },
        {
          id: "d",
          text: "Ia menyatakan Malaysia sebagai negara sekular",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Perlembagaan Persekutuan dilihat sebagai kontrak sosial kerana ia merangkumi peruntukan yang memenuhi kepentingan semua komuniti di Malaysia, hasil persefahaman sebelum merdeka (slide 3).",
        incorrect: {
          a: "Walaupun digubal oleh Suruhanjaya Reid, ini bukan sebab ia dianggap kontrak sosial.",
          c: "Kebebasan beragama adalah salah satu peruntukan, tetapi bukan definisi kontrak sosial.",
          d: "Malaysia tidak diisytiharkan sebagai negara sekular dalam Perlembagaan.",
        },
      },
    },
    {
      id: "subject-q3",
      text: "Apakah ciri-ciri Malayan Union yang ditentang oleh orang Melayu?",
      options: [
        {
          id: "a",
          text: "Kedaulatan Raja-Raja Melayu dihapuskan dan hak kerakyatan berdasarkan prinsip jus soli",
        },
        {
          id: "b",
          text: "Penubuhan Majlis Mesyuarat Persekutuan dan Singapura dijadikan tanah jajahan berasingan",
        },
        {
          id: "c",
          text: "Pengenalan sistem residen dan pembahagian negeri kepada tiga kumpulan",
        },
        {
          id: "d",
          text: "Pemansuhan bahasa Melayu sebagai bahasa rasmi dan pengenalan cukai baru",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Orang Melayu menentang Malayan Union kerana kedaulatan Raja-Raja Melayu dihapuskan dan hak kerakyatan diberikan secara longgar berdasarkan prinsip jus soli (slide 23).",
        incorrect: {
          b: "Ini bukan isu utama penentangan. Penentangan tertumpu pada isu kedaulatan raja dan kerakyatan.",
          c: "Sistem residen dan pembahagian negeri adalah ciri pentadbiran British sebelum Malayan Union.",
          d: "Isu bahasa dan cukai bukan punca utama penentangan terhadap Malayan Union.",
        },
      },
    },
    {
      id: "subject-q4",
      text: "Suruhanjaya Reid ditubuhkan untuk tujuan:",
      options: [
        {
          id: "a",
          text: "Menyelesaikan konflik antara etnik",
        },
        {
          id: "b",
          text: "Merangka Perlembagaan Persekutuan Tanah Melayu yang merdeka",
        },
        {
          id: "c",
          text: "Menubuhkan Malayan Union",
        },
        {
          id: "d",
          text: "Meminda Perlembagaan 1948",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Suruhanjaya Reid ditubuhkan untuk merangka Perlembagaan bagi Persekutuan Tanah Melayu yang merdeka (slide 30).",
        incorrect: {
          a: "Ini bukan tujuan utama penubuhannya. Tumpuan adalah pada penggubalan perlembagaan.",
          c: "Malayan Union telah dimansuhkan sebelum Suruhanjaya Reid ditubuhkan.",
          d: "Suruhanjaya Reid merangka perlembagaan baru, bukan meminda perlembagaan sedia ada.",
        },
      },
    },
    {
      id: "subject-q5",
      text: "Manakah antara berikut BUKAN salah satu tahap Tapak Integrasi?",
      options: [
        {
          id: "a",
          text: "Makro",
        },
        {
          id: "b",
          text: "Meso",
        },
        {
          id: "c",
          text: "Mikro",
        },
        {
          id: "d",
          text: "Meta",
        },
      ],
      correctOptionId: "d",
      explanation: {
        correct:
          "Tahap Tapak Integrasi ialah Makro (kerajaan), Meso (NGO), dan Mikro (akar umbi). Meta bukan salah satu tahap (slide 6).",
        incorrect: {
          a: "Makro adalah tahap integrasi yang melibatkan kerajaan melalui dasar-dasar.",
          b: "Meso adalah tahap integrasi yang melibatkan NGO dalam agihan pembangunan.",
          c: "Mikro adalah tahap integrasi yang melibatkan inisiatif akar umbi.",
        },
      },
    },
    {
      id: "subject-q6",
      text: "Apakah yang dimaksudkan dengan 'amalgamasi' dalam konteks integrasi etnik?",
      options: [
        {
          id: "a",
          text: "Proses penerimaan unsur budaya majoriti",
        },
        {
          id: "b",
          text: "Proses pinjam-meminjam budaya",
        },
        {
          id: "c",
          text: "Proses asimilasi biologi melalui perkahwinan campur",
        },
        {
          id: "d",
          text: "Proses menghormati norma dan nilai masing-masing",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Amalgamasi merujuk kepada asimilasi biologi melalui perkahwinan campur antara etnik (slide 14).",
        incorrect: {
          a: "Ini menerangkan asimilasi budaya, bukan amalgamasi.",
          b: "Ini menerangkan akulturasi, bukan amalgamasi.",
          d: "Ini menerangkan akomodasi, bukan amalgamasi.",
        },
      },
    },
    {
      id: "subject-q7",
      text: "Pilihan Raya Umum 1955 penting kerana:",
      options: [
        {
          id: "a",
          text: "Menandakan kemerdekaan Tanah Melayu",
        },
        {
          id: "b",
          text: "Memperlihatkan kerjasama etnik melalui perkongsian kuasa",
        },
        {
          id: "c",
          text: "Menghapuskan sistem feudal",
        },
        {
          id: "d",
          text: "Memperkenalkan sistem pendidikan vernakular",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Pilihan Raya 1955 menunjukkan kerjasama etnik melalui pembahagian kerusi antara UMNO, MCA, dan MIC (slide 28).",
        incorrect: {
          a: "Kemerdekaan dicapai pada 1957, bukan melalui pilihan raya 1955.",
          c: "Sistem feudal tidak dihapuskan melalui pilihan raya ini.",
          d: "Sistem pendidikan vernakular sudah wujud sebelum pilihan raya 1955.",
        },
      },
    },
    {
      id: "subject-q8",
      text: "Perlembagaan Persekutuan memperuntukkan kebebasan asasi, namun kebebasan ini:",
      options: [
        {
          id: "a",
          text: "Mutlak dan tidak boleh dipinda",
        },
        {
          id: "b",
          text: "Tertakluk kepada kedudukan khas orang Melayu dan keselamatan negara",
        },
        {
          id: "c",
          text: "Hanya untuk warganegara Melayu",
        },
        {
          id: "d",
          text: "Dijamin tanpa sebarang sekatan",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Kebebasan asasi tidak mutlak dan tertakluk kepada kedudukan khas orang Melayu serta keselamatan negara (slide 35).",
        incorrect: {
          a: "Kebebasan asasi bukan mutlak dan boleh dipinda dengan syarat tertentu.",
          c: "Kebebasan asasi untuk semua warganegara, bukan hanya orang Melayu.",
          d: "Kebebasan asasi mempunyai sekatan tertentu seperti keselamatan negara.",
        },
      },
    },
    {
      id: "subject-q9",
      text: "Manakah antara berikut BUKAN salah satu cara mendapatkan kewarganegaraan Malaysia?",
      options: [
        {
          id: "a",
          text: "Naturalisasi",
        },
        {
          id: "b",
          text: "Pendaftaran",
        },
        {
          id: "c",
          text: "Pemilihan",
        },
        {
          id: "d",
          text: "Operasi undang-undang",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Cara mendapatkan kewarganegaraan adalah melalui operasi undang-undang, pendaftaran, naturalisasi, dan gabungan wilayah. 'Pemilihan' bukan cara yang termaktub (slide 34).",
        incorrect: {
          a: "Naturalisasi adalah salah satu cara melalui permohonan dengan syarat tertentu.",
          b: "Pendaftaran adalah cara untuk individu tertentu seperti melalui perkahwinan.",
          d: "Operasi undang-undang merujuk kepada automatik menjadi warganegara melalui kelahiran.",
        },
      },
    },
    {
      id: "subject-q10",
      text: "Apakah tujuan penubuhan Jawatankuasa Perhubungan Masyarakat (CLC) pada tahun 1949?",
      options: [
        {
          id: "a",
          text: "Merangka Perlembagaan Malayan Union",
        },
        {
          id: "b",
          text: "Membincangkan isu kewarganegaraan dan kedudukan khas orang Melayu",
        },
        {
          id: "c",
          text: "Menentang penjajahan British",
        },
        {
          id: "d",
          text: "Menubuhkan pasukan keselamatan",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "CLC ditubuhkan untuk membincangkan isu sensitif seperti kewarganegaraan dan kedudukan khas orang Melayu (slide 27).",
        incorrect: {
          a: "Malayan Union telah dimansuhkan pada 1948, sebelum CLC ditubuhkan.",
          c: "CLC bukan bertujuan menentang British, tetapi untuk rundingan antara kaum.",
          d: "Penubuhan pasukan keselamatan bukan fungsi CLC.",
        },
      },
    },
    {
      id: "subject-q11",
      text: "Perlembagaan Persekutuan menyatakan bahawa agama Islam adalah agama persekutuan, tetapi:",
      options: [
        {
          id: "a",
          text: "Agama lain tidak dibenarkan diamalkan",
        },
        {
          id: "b",
          text: "Agama lain boleh diamalkan dalam keadaan tertentu",
        },
        {
          id: "c",
          text: "Hanya Islam dan Kristian sahaja yang diiktiraf",
        },
        {
          id: "d",
          text: "Hanya agama monoteistik yang diiktiraf",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Walaupun Islam adalah agama persekutuan, Perlembagaan memperuntukkan kebebasan untuk menganut dan mengamalkan agama lain dalam keamanan (slide 33).",
        incorrect: {
          a: "Perlembagaan menjamin kebebasan beragama untuk penganut agama lain.",
          c: "Semua agama diiktiraf dan boleh diamalkan, bukan hanya Islam dan Kristian.",
          d: "Tiada sekatan jenis agama; semua agama boleh diamalkan.",
        },
      },
    },
    {
      id: "subject-q12",
      text: "Apakah yang dimaksudkan dengan 'akomodasi' dalam proses integrasi?",
      options: [
        {
          id: "a",
          text: "Penerimaan penuh budaya majoriti",
        },
        {
          id: "b",
          text: "Proses perkahwinan campur",
        },
        {
          id: "c",
          text: "Penghormatan terhadap norma dan nilai masing-masing",
        },
        {
          id: "d",
          text: "Pertukaran budaya antara etnik",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Akomodasi merujuk kepada sikap saling menghormati norma dan nilai antara kelompok majoriti dan minoriti (slide 13).",
        incorrect: {
          a: "Ini menerangkan asimilasi, bukan akomodasi.",
          b: "Ini menerangkan amalgamasi, bukan akomodasi.",
          d: "Ini menerangkan akulturasi, bukan akomodasi.",
        },
      },
    },
    {
      id: "subject-q13",
      text: "Siapakah yang mengetuai Suruhanjaya Reid?",
      options: [
        {
          id: "a",
          text: "Sir Ivor Jennings",
        },
        {
          id: "b",
          text: "Lord William Reid",
        },
        {
          id: "c",
          text: "Tunku Abdul Rahman",
        },
        {
          id: "d",
          text: "Harold MacMichael",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Suruhanjaya Reid diketuai oleh Lord William Reid, seorang hakim British (slide 30).",
        incorrect: {
          a: "Sir Ivor Jennings adalah ahli suruhanjaya, bukan pengerusi.",
          c: "Tunku Abdul Rahman adalah pemimpin politik tempatan, tidak terlibat dalam suruhanjaya ini.",
          d: "Harold MacMichael terlibat dalam pelaksanaan Malayan Union, bukan Suruhanjaya Reid.",
        },
      },
    },
    {
      id: "subject-q14",
      text: "Mengapakah Perlembagaan Negeri Johor dan Terengganu penting dalam sejarah perlembagaan Malaysia?",
      options: [
        {
          id: "a",
          text: "Mereka adalah negeri pertama yang merdeka",
        },
        {
          id: "b",
          text: "Mereka mempunyai perlembagaan bertulis sebelum kedatangan British",
        },
        {
          id: "c",
          text: "Mereka menentang Malayan Union",
        },
        {
          id: "d",
          text: "Mereka menubuhkan persekutuan pertama",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Johor (1895) dan Terengganu (1911) mempunyai perlembagaan bertulis sebelum campur tangan British, menunjukkan tradisi perlembagaan tempatan (slide 20).",
        incorrect: {
          a: "Kedua-dua negeri ini merdeka bersama Persekutuan Tanah Melayu pada 1957.",
          c: "Walaupun mereka menentang, ini bukan sebab utama kepentingan perlembagaan mereka.",
          d: "Mereka tidak menubuhkan persekutuan; persekutuan pertama adalah Negeri-Negeri Melayu Bersekutu.",
        },
      },
    },
    {
      id: "subject-q15",
      text: "Manakah antara berikut BUKAN salah satu ciri Perlembagaan Persekutuan Tanah Melayu 1948?",
      options: [
        {
          id: "a",
          text: "Kewarganegaraan berdasarkan prinsip jus soli tanpa syarat",
        },
        {
          id: "b",
          text: "Sultan diberi kuasa memerintah dengan nasihat majlis",
        },
        {
          id: "c",
          text: "Orang Melayu diberi hak istimewa",
        },
        {
          id: "d",
          text: "Syarat kewarganegaraan diketatkan",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Syarat kewarganegaraan dalam Perlembagaan 1948 diketatkan, bukan berdasarkan jus soli tanpa syarat seperti dalam Malayan Union (slide 25).",
        incorrect: {
          b: "Sultan memang diberi kuasa memerintah dengan nasihat majlis.",
          c: "Orang Melayu memang diberi hak istimewa dalam perlembagaan ini.",
          d: "Syarat kewarganegaraan memang diketatkan berbanding Malayan Union.",
        },
      },
    },
    {
      id: "subject-q16",
      text: "Apakah yang dimaksudkan dengan 'Meso' dalam konteks Tapak Integrasi?",
      options: [
        {
          id: "a",
          text: "Peranan kerajaan melalui dasar-dasar",
        },
        {
          id: "b",
          text: "Peranan NGO dalam agihan dan pemantauan pembangunan",
        },
        {
          id: "c",
          text: "Inisiatif akar umbi seperti Street Wedding",
        },
        {
          id: "d",
          text: "Peranan majlis agama dalam masyarakat",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Meso merujuk kepada peranan NGO dalam agihan dan pemantauan pembangunan (slide 6).",
        incorrect: {
          a: "Ini menerangkan tahap Makro, bukan Meso.",
          c: "Ini menerangkan tahap Mikro, bukan Meso.",
          d: "Ini bukan definisi khusus untuk tahap Meso.",
        },
      },
    },
    {
      id: "subject-q17",
      text: "Bilakah Perlembagaan Persekutuan Tanah Melayu 1948 diisytiharkan?",
      options: [
        {
          id: "a",
          text: "1 Februari 1948",
        },
        {
          id: "b",
          text: "31 Ogos 1957",
        },
        {
          id: "c",
          text: "16 September 1963",
        },
        {
          id: "d",
          text: "5 Ogos 1957",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Perlembagaan Persekutuan Tanah Melayu 1948 diisytiharkan pada 1 Februari 1948, menggantikan Malayan Union (slide 25).",
        incorrect: {
          b: "31 Ogos 1957 adalah tarikh kemerdekaan dan Perlembagaan Persekutuan 1957 berkuat kuasa.",
          c: "16 September 1963 adalah tarikh penubuhan Malaysia.",
          d: "5 Ogos 1957 bukan tarikh perisytiharan perlembagaan.",
        },
      },
    },
    {
      id: "subject-q18",
      text: "Mengapakah British memperkenalkan Malayan Union?",
      options: [
        {
          id: "a",
          text: "Untuk memenuhi tuntutan kemerdekaan",
        },
        {
          id: "b",
          text: "Untuk menyatukan negeri-negeri dan meningkatkan kecekapan pentadbiran",
        },
        {
          id: "c",
          text: "Untuk menghapuskan sistem raja berperlembagaan",
        },
        {
          id: "d",
          text: "Untuk memberi kemerdekaan kepada Tanah Melayu",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "British memperkenalkan Malayan Union untuk menyatukan negeri-negeri di bawah pentadbiran pusat yang cekap (slide 21).",
        incorrect: {
          a: "Malayan Union diperkenalkan oleh British, bukan untuk memenuhi tuntutan kemerdekaan.",
          c: "Walaupun kesan Malayan Union menghakis kuasa raja, ini bukan tujuan utama British.",
          d: "Malayan Union tidak memberi kemerdekaan; ia adalah bentuk pentadbiran kolonial.",
        },
      },
    },
    {
      id: "subject-q19",
      text: "Manakah antara berikut BUKAN salah satu prinsip pertemuan dalam Tapak Integrasi?",
      options: [
        {
          id: "a",
          text: "Tawar-menawar (Bargaining)",
        },
        {
          id: "b",
          text: "Perundingan (Negotiation)",
        },
        {
          id: "c",
          text: "Pengantaraan (Mediation)",
        },
        {
          id: "d",
          text: "Pengasingan (Segregation)",
        },
      ],
      correctOptionId: "d",
      explanation: {
        correct:
          "Prinsip pertemuan termasuk tawar-menawar, perundingan, dan pengantaraan. Pengasingan bertentangan dengan konsep integrasi (slide 7).",
        incorrect: {
          a: "Tawar-menawar adalah prinsip utama dalam mencapai persetujuan.",
          b: "Perundingan adalah proses penting dalam menyelesaikan perbezaan.",
          c: "Pengantaraan digunakan untuk mendamaikan pihak yang berbeza.",
        },
      },
    },
    {
      id: "subject-q20",
      text: "Siapakah yang mengetuai Jawatankuasa Kerja untuk menggantikan Perlembagaan Malayan Union?",
      options: [
        {
          id: "a",
          text: "Tunku Abdul Rahman",
        },
        {
          id: "b",
          text: "Dato’ Onn Jaafar",
        },
        {
          id: "c",
          text: "Harold MacMichael",
        },
        {
          id: "d",
          text: "Lord Reid",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Dato’ Onn Jaafar terlibat dalam Jawatankuasa Kerja yang merangka perlembagaan baru menggantikan Malayan Union (slide 24).",
        incorrect: {
          a: "Tunku Abdul Rahman terlibat dalam rundingan kemerdekaan, bukan jawatankuasa ini.",
          c: "Harold MacMichael adalah wakil British untuk melaksanakan Malayan Union.",
          d: "Lord Reid mengetuai suruhanjaya untuk merangka perlembagaan kemerdekaan, bukan menggantikan MU.",
        },
      },
    },
    {
      id: "subject-q21",
      text: "Apakah yang dimaksudkan dengan 'akulturasi'?",
      options: [
        {
          id: "a",
          text: "Proses penerimaan unsur budaya majoriti",
        },
        {
          id: "b",
          text: "Perkahwinan campur antara etnik",
        },
        {
          id: "c",
          text: "Pinjam-meminjam unsur budaya antara etnik",
        },
        {
          id: "d",
          text: "Penghormatan terhadap adat resam",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Akulturasi ialah proses pinjam-meminjam unsur budaya antara etnik tanpa menggugat identiti asal (slide 13).",
        incorrect: {
          a: "Ini menerangkan asimilasi, bukan akulturasi.",
          b: "Ini menerangkan amalgamasi, bukan akulturasi.",
          d: "Ini menerangkan akomodasi, bukan akulturasi.",
        },
      },
    },
    {
      id: "subject-q22",
      text: "Mengapakah Perlembagaan Persekutuan dianggap sebagai undang-undang tertinggi?",
      options: [
        {
          id: "a",
          text: "Ia digubal oleh British",
        },
        {
          id: "b",
          text: "Ia menjadi rujukan utama dalam pemerintahan dan pentadbiran",
        },
        {
          id: "c",
          text: "Ia hanya boleh dipinda oleh Raja-Raja Melayu",
        },
        {
          id: "d",
          text: "Ia mengandungi semua undang-undang adat",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Perlembagaan Persekutuan ialah undang-undang tertinggi yang menjadi panduan dalam pemerintahan negara; semua undang-undang lain mesti selaras dengannya (slide 3).",
        incorrect: {
          a: "Walaupun digubal dengan pengaruh British, ini bukan sebab ia dianggap undang-undang tertinggi.",
          c: "Pindaan perlembagaan melibatkan Parlimen dan Majlis Raja-Raja, bukan hanya raja.",
          d: "Perlembagaan tidak mengandungi semua undang-undang adat; ia adalah rangka kerja asas.",
        },
      },
    },
    {
      id: "subject-q23",
      text: "Apakah yang dimaksudkan dengan 'Mikro' dalam Tapak Integrasi?",
      options: [
        {
          id: "a",
          text: "Dasar kerajaan seperti Rukun Tetangga",
        },
        {
          id: "b",
          text: "Peranan NGO dalam pembangunan",
        },
        {
          id: "c",
          text: "Inisiatif akar umbi seperti Street Wedding",
        },
        {
          id: "d",
          text: "Peranan majlis agama",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Mikro merujuk kepada inisiatif akar umbi seperti Street Wedding yang memupuk integrasi di peringkat komuniti (slide 6).",
        incorrect: {
          a: "Ini menerangkan tahap Makro, bukan Mikro.",
          b: "Ini menerangkan tahap Meso, bukan Mikro.",
          d: "Ini bukan definisi khusus untuk tahap Mikro.",
        },
      },
    },
    {
      id: "subject-q24",
      text: "Bilakah Perlembagaan Persekutuan mula berkuat kuasa?",
      options: [
        {
          id: "a",
          text: "31 Ogos 1957",
        },
        {
          id: "b",
          text: "1 Februari 1948",
        },
        {
          id: "c",
          text: "16 September 1963",
        },
        {
          id: "d",
          text: "5 Ogos 1957",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Perlembagaan Persekutuan mula berkuat kuasa pada hari kemerdekaan, 31 Ogos 1957.",
        incorrect: {
          b: "1 Februari 1948 adalah tarikh Perlembagaan Persekutuan Tanah Melayu 1948.",
          c: "16 September 1963 adalah tarikh penubuhan Malaysia.",
          d: "5 Ogos 1957 bukan tarikh perlembagaan berkuat kuasa.",
        },
      },
    },
    {
      id: "subject-q25",
      text: "Apakah yang dimaksudkan dengan 'kontrak sosial' dalam konteks Perlembagaan Malaysia?",
      options: [
        {
          id: "a",
          text: "Perjanjian antara British dan Raja-Raja Melayu",
        },
        {
          id: "b",
          text: "Persefahaman antara kaum yang dicapai sebelum merdeka",
        },
        {
          id: "c",
          text: "Perjanjian perdagangan antara negeri",
        },
        {
          id: "d",
          text: "Perjanjian kemerdekaan dengan British",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Kontrak sosial merujuk kepada persefahaman antara kaum (Melayu, Cina, India) yang dicapai sebelum merdeka mengenai kedudukan istimewa Melayu dan kerakyatan (slide 17).",
        incorrect: {
          a: "Ini merujuk kepada perjanjian lain, bukan kontrak sosial antara kaum.",
          c: "Kontrak sosial bukan perjanjian perdagangan.",
          d: "Perjanjian kemerdekaan adalah dokumen berasingan.",
        },
      },
    },
    {
      id: "subject-q26",
      text: "Manakah antara berikut BUKAN salah satu unsur Kerangka Asas Perlembagaan Persekutuan?",
      options: [
        {
          id: "a",
          text: "Negara Kesatuan",
        },
        {
          id: "b",
          text: "Islam sebagai agama persekutuan",
        },
        {
          id: "c",
          text: "Bahasa Melayu sebagai bahasa kebangsaan",
        },
        {
          id: "d",
          text: "Kedudukan khas orang Melayu",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Malaysia ialah Negara Persekutuan, bukan Negara Kesatuan (slide 33).",
        incorrect: {
          b: "Islam sebagai agama persekutuan adalah unsur asas Perlembagaan.",
          c: "Bahasa Melayu sebagai bahasa kebangsaan adalah unsur asas.",
          d: "Kedudukan khas orang Melayu adalah unsur asas Perlembagaan.",
        },
      },
    },
    {
      id: "subject-q27",
      text: "Apakah peranan NGO dalam Tapak Integrasi peringkat Meso?",
      options: [
        {
          id: "a",
          text: "Merangka dasar kerajaan",
        },
        {
          id: "b",
          text: "Mengagih dan memantau pembangunan",
        },
        {
          id: "c",
          text: "Menjadi agen keselamatan",
        },
        {
          id: "d",
          text: "Menjalankan upacara keagamaan",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "NGO berperanan sebagai pengagih dan pemantau pembangunan di peringkat Meso (slide 6).",
        incorrect: {
          a: "Merangka dasar adalah peranan kerajaan (Makro), bukan NGO.",
          c: "NGO bukan agen keselamatan utama.",
          d: "Menjalankan upacara keagamaan adalah peranan institusi agama, bukan fungsi utama NGO dalam integrasi.",
        },
      },
    },
    {
      id: "subject-q28",
      text: "Siapakah yang menandatangani Perjanjian Persekutuan Tanah Melayu 1957?",
      options: [
        {
          id: "a",
          text: "Tunku Abdul Rahman",
        },
        {
          id: "b",
          text: "Wakil Queen Elizabeth dan Raja-Raja Melayu",
        },
        {
          id: "c",
          text: "Suruhanjaya Reid",
        },
        {
          id: "d",
          text: "Pemimpin parti politik",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Perjanjian Persekutuan Tanah Melayu 1957 ditandatangani oleh wakil Queen Elizabeth dan Raja-Raja Melayu (slide 17).",
        incorrect: {
          a: "Tunku Abdul Rahman adalah Perdana Menteri pertama, tetapi bukan penandatangan perjanjian ini.",
          c: "Suruhanjaya Reid merangka perlembagaan, tetapi tidak menandatangani perjanjian.",
          d: "Pemimpin parti politik terlibat dalam rundingan, tetapi bukan penandatangan rasmi.",
        },
      },
    },
    {
      id: "subject-q29",
      text: "Apakah yang dimaksudkan dengan 'asimilasi' dalam proses integrasi?",
      options: [
        {
          id: "a",
          text: "Minoriti menerima budaya majoriti",
        },
        {
          id: "b",
          text: "Perkahwinan campur",
        },
        {
          id: "c",
          text: "Pertukaran budaya",
        },
        {
          id: "d",
          text: "Penghormatan antara budaya",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Asimilasi ialah proses di mana kelompok minoriti menerima dan menghayati budaya majoriti (slide 13).",
        incorrect: {
          b: "Ini menerangkan amalgamasi, bukan asimilasi.",
          c: "Ini menerangkan akulturasi, bukan asimilasi.",
          d: "Ini menerangkan akomodasi, bukan asimilasi.",
        },
      },
    },
    {
      id: "subject-q30",
      text: "Mengapakah Perlembagaan Persekutuan sukar untuk dipinda?",
      options: [
        {
          id: "a",
          text: "Hanya Raja-Raja Melayu yang boleh meminda",
        },
        {
          id: "b",
          text: "Memerlukan majoriti 2/3 dan perkenan Majlis Raja-Raja untuk perkara tertentu",
        },
        {
          id: "c",
          text: "Hanya rakyat melalui referendum boleh meminda",
        },
        {
          id: "d",
          text: "Hanya Perdana Menteri yang boleh mencadangkan pindaan",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Proses pindaan Perlembagaan memerlukan majoriti 2/3 di Parlimen dan perkenan Majlis Raja-Raja untuk perkara-perkara sensitif (slide 36).",
        incorrect: {
          a: "Pindaan juga memerlukan kelulusan Parlimen, bukan hanya raja.",
          c: "Referendum bukan kaedah pindaan perlembagaan di Malaysia.",
          d: "Perdana Menteri boleh mencadangkan, tetapi pindaan memerlukan kelulusan Parlimen.",
        },
      },
    },
    {
      id: "subject-q31",
      text: "Apakah yang dimaksudkan dengan 'Makro' dalam Tapak Integrasi?",
      options: [
        {
          id: "a",
          text: "Peranan kerajaan melalui Perlembagaan dan Rancangan Malaysia",
        },
        {
          id: "b",
          text: "Peranan NGO",
        },
        {
          id: "c",
          text: "Inisiatif masyarakat setempat",
        },
        {
          id: "d",
          text: "Peranan majlis agama",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Makro merujuk kepada peranan kerajaan melalui dasar-dasar seperti Perlembagaan dan Rancangan Malaysia (slide 6).",
        incorrect: {
          b: "Ini menerangkan tahap Meso, bukan Makro.",
          c: "Ini menerangkan tahap Mikro, bukan Makro.",
          d: "Ini bukan definisi khusus untuk tahap Makro.",
        },
      },
    },
    {
      id: "subject-q32",
      text: "Bilakah Malayan Union diperkenalkan?",
      options: [
        {
          id: "a",
          text: "1946",
        },
        {
          id: "b",
          text: "1948",
        },
        {
          id: "c",
          text: "1957",
        },
        {
          id: "d",
          text: "1963",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct: "Malayan Union diperkenalkan pada 1 April 1946.",
        incorrect: {
          b: "1948 adalah tahun Perlembagaan Persekutuan Tanah Melayu menggantikan MU.",
          c: "1957 adalah tahun kemerdekaan.",
          d: "1963 adalah tahun penubuhan Malaysia.",
        },
      },
    },
    {
      id: "subject-q33",
      text: "Apakah yang dimaksudkan dengan 'Rukun Tetangga' dalam konteks Tapak Integrasi?",
      options: [
        {
          id: "a",
          text: "Inisiatif akar umbi",
        },
        {
          id: "b",
          text: "Program keselamatan komuniti",
        },
        {
          id: "c",
          text: "Dasar pendidikan kebangsaan",
        },
        {
          id: "d",
          text: "Agama rasmi persekutuan",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Rukun Tetangga ialah program keselamatan komuniti yang berperanan sebagai tapak integrasi di peringkat mikro (slide 6).",
        incorrect: {
          a: "Rukun Tetangga adalah program kerajaan, bukan inisiatif akar umbi semata-mata.",
          c: "Ia bukan dasar pendidikan, tetapi program komuniti.",
          d: "Ia tidak berkaitan dengan agama rasmi.",
        },
      },
    },
    {
      id: "subject-q34",
      text: "Siapakah antara berikut TIDAK terlibat dalam Suruhanjaya Reid?",
      options: [
        {
          id: "a",
          text: "Sir Ivor Jennings",
        },
        {
          id: "b",
          text: "Lord William Reid",
        },
        {
          id: "c",
          text: "Tunku Abdul Rahman",
        },
        {
          id: "d",
          text: "Hakim B. Malik",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Tunku Abdul Rahman tidak terlibat dalam Suruhanjaya Reid; beliau ialah pemimpin politik tempatan (slide 30).",
        incorrect: {
          a: "Sir Ivor Jennings adalah ahli suruhanjaya.",
          b: "Lord William Reid mengetuai suruhanjaya.",
          d: "Hakim B. Malik dari India adalah ahli suruhanjaya.",
        },
      },
    },
    {
      id: "subject-q35",
      text: "Apakah yang dimaksudkan dengan 'operasi undang-undang' dalam konteks kewarganegaraan?",
      options: [
        {
          id: "a",
          text: "Pendaftaran warganegara",
        },
        {
          id: "b",
          text: "Naturalisasi",
        },
        {
          id: "c",
          text: "Automatik menjadi warganegara melalui kelahiran",
        },
        {
          id: "d",
          text: "Gabungan wilayah",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Operasi undang-undang merujuk kepada automatik menjadi warganegara melalui kelahiran mengikut syarat dalam Perlembagaan (slide 34).",
        incorrect: {
          a: "Pendaftaran adalah proses permohonan, bukan automatik.",
          b: "Naturalisasi adalah proses permohonan dengan syarat tertentu.",
          d: "Gabungan wilayah adalah cara lain untuk mendapatkan kewarganegaraan.",
        },
      },
    },
    {
      id: "subject-q36",
      text: "Mengapakah Perlembagaan Persekutuan penting sebagai wahana etika dan peradaban?",
      options: [
        {
          id: "a",
          text: "Ia menetapkan hukuman untuk jenayah",
        },
        {
          id: "b",
          text: "Ia menyediakan rangka untuk integrasi dan menghormati kepelbagaian",
        },
        {
          id: "c",
          text: "Ia menggalakkan asimilasi penuh",
        },
        {
          id: "d",
          text: "Ia menghapuskan semua perbezaan budaya",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Perlembagaan menyediakan rangka untuk integrasi nasional sambil menghormati kepelbagaian etika dan peradaban (slide 3).",
        incorrect: {
          a: "Ini adalah fungsi undang-undang jenayah, bukan fungsi utama perlembagaan sebagai wahana etika.",
          c: "Perlembagaan tidak menggalakkan asimilasi penuh, tetapi integrasi dalam kepelbagaian.",
          d: "Perlembagaan melindungi, bukan menghapuskan, perbezaan budaya.",
        },
      },
    },
    {
      id: "subject-q37",
      text: "Apakah yang dimaksudkan dengan 'naturalisasi' dalam konteks kewarganegaraan?",
      options: [
        {
          id: "a",
          text: "Kelahiran dalam negara",
        },
        {
          id: "b",
          text: "Pendaftaran berdasarkan perkahwinan",
        },
        {
          id: "c",
          text: "Permohonan warganegara melalui proses undang-undang",
        },
        {
          id: "d",
          text: "Gabungan wilayah",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Naturalisasi ialah proses memohon warganegara melalui syarat-syarat tertentu seperti tempoh bermastautin dan pengetahuan bahasa (slide 34).",
        incorrect: {
          a: "Ini menerangkan operasi undang-undang melalui kelahiran.",
          b: "Ini menerangkan pendaftaran melalui perkahwinan.",
          d: "Ini adalah cara lain untuk mendapatkan kewarganegaraan.",
        },
      },
    },
    {
      id: "subject-q38",
      text: "Apakah kesan utama Penubuhan Malayan Union?",
      options: [
        {
          id: "a",
          text: "Kemerdekaan Tanah Melayu",
        },
        {
          id: "b",
          text: "Penentangan orang Melayu dan penubuhan UMNO",
        },
        {
          id: "c",
          text: "Pengenalan dasar pendidikan vernakular",
        },
        {
          id: "d",
          text: "Pembentukan Malaysia",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Penentangan terhadap Malayan Union membawa kepada penubuhan UMNO dan akhirnya pembatalannya (slide 23).",
        incorrect: {
          a: "Kemerdekaan dicapai kemudian melalui perundingan, bukan kesan langsung MU.",
          c: "Dasar pendidikan vernakular sudah wujud sebelum MU.",
          d: "Pembentukan Malaysia adalah pada 1963, tidak berkaitan langsung dengan MU.",
        },
      },
    },
    {
      id: "subject-q39",
      text: "Manakah antara berikut BUKAN salah satu ciri Perlembagaan Persekutuan?",
      options: [
        {
          id: "a",
          text: "Dokumen bertulis",
        },
        {
          id: "b",
          text: "Menjadi asas kenegaraan",
        },
        {
          id: "c",
          text: "Boleh dipinda dengan mudah",
        },
        {
          id: "d",
          text: "Simbol kemerdekaan dan kedaulatan",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Perlembagaan Persekutuan tidak mudah dipinda; ia memerlukan proses yang ketat seperti majoriti 2/3 (slide 36).",
        incorrect: {
          a: "Perlembagaan Malaysia memang merupakan dokumen bertulis.",
          b: "Perlembagaan menjadi asas kepada sistem kenegaraan.",
          d: "Perlembagaan adalah simbol kemerdekaan dan kedaulatan negara.",
        },
      },
    },
    {
      id: "subject-q40",
      text: "Apakah yang dimaksudkan dengan 'prosedur pindaan Perlembagaan' untuk perkara-perkara sensitif?",
      options: [
        {
          id: "a",
          text: "Hanya perlu majoriti mudah",
        },
        {
          id: "b",
          text: "Memerlukan perkenan Majlis Raja-Raja dan majoriti 2/3",
        },
        {
          id: "c",
          text: "Boleh dipinda oleh Perdana Menteri sahaja",
        },
        {
          id: "d",
          text: "Tidak boleh dipinda langsung",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Perkara sensitif memerlukan majoriti 2/3 di Parlimen dan perkenan Majlis Raja-Raja (slide 36).",
        incorrect: {
          a: "Majoriti mudah tidak mencukupi untuk perkara sensitif.",
          c: "Perdana Menteri tidak boleh meminda sendirian.",
          d: "Perkara sensitif boleh dipinda dengan prosedur yang ketat.",
        },
      },
    },
  ],
};
