import { Quiz } from "@/app/types/quiz";

export const etikaCombine: Quiz = {
  id: "etika-combine",
  categoryId: "etika",
  subcategoryId: "etika-all",
  title: "All topik",
  questions: [
    {
      id: "subject-q1",
      text: "Pada tahun 1946, Malayan Union diperkenalkan oleh British. Apakah dua ciri utamanya yang menjadi teras penentangan hebat orang Melayu pada ketika itu?",
      options: [
        {
          id: "a",
          text: "Pemisahan Singapura daripada Tanah Melayu dan pengenalan sistem Gabenor.",
        },
        {
          id: "b",
          text: "Pemberian kerakyatan jus soli dan penghakisan kedaulatan Raja-Raja Melayu.",
        },
        {
          id: "c",
          text: "Penubuhan Majlis Undangan Persekutuan dan pengenalan sistem Residen.",
        },
        {
          id: "d",
          text: "Penyatuan semua negeri Melayu di bawah satu pentadbiran dan pembubaran Pasukan Askar Melayu.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Penentangan utama adalah kerana prinsip kerakyatan jus soli (hak warganegara berdasarkan tempat lahir) yang dianggap terlalu longgar dan penghapusan kedaulatan Raja-Raja Melayu, di mana kuasa mereka dihadkan kepada hal ehwal agama Islam dan adat istiadat sahaja.",
        incorrect: {
          a: "Walaupun pemisahan Singapura dan sistem Gabenor adalah ciri Malayan Union, isu kedaulatan Raja-Raja dan kerakyatan jus soli adalah faktor penentangan yang jauh lebih besar dan sensitif.",
          c: "Sistem Residen telah wujud lebih awal sejak Perjanjian Pangkor 1874, manakala Majlis Undangan adalah ciri biasa pentadbiran British, bukan punca utama penentangan.",
          d: "Walaupun penyatuan negeri berlaku, isu pembubaran Pasukan Askar Melayu tidak dinyatakan sebagai punca utama penentangan berbanding isu kedaulatan dan kerakyatan.",
        },
      },
    },
    {
      id: "subject-q2",
      text: "Etika masyarakat Melayu prakolonial dibentuk oleh konsep 'adab' dan 'adat'. Apakah perbezaan paling fundamental antara kedua-dua konsep ini?",
      options: [
        {
          id: "a",
          text: "Adab ialah undang-undang bertulis istana, manakala adat ialah peraturan lisan rakyat.",
        },
        {
          id: "b",
          text: "Adab merujuk budi pekerti individu, manakala adat merangkumi peraturan kolektif komuniti.",
        },
        {
          id: "c",
          text: "Adab berkaitan upacara perkahwinan, manakala adat berkaitan sistem pemerintahan.",
        },
        {
          id: "d",
          text: "Adab dipengaruhi oleh peradaban China, manakala adat dipengaruhi oleh peradaban India.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Ini adalah perbezaan teras. 'Adab' lebih bersifat peribadi dan dalaman, menekankan kehalusan budi pekerti dan tingkah laku individu. 'Adat' pula bersifat luaran dan kolektif, merangkumi norma, tradisi, dan peraturan yang diamalkan oleh seluruh masyarakat.",
        incorrect: {
          a: "Adat boleh menjadi undang-undang (cth: Adat Perpatih) walaupun tidak bertulis, dan adab pula diamalkan oleh semua lapisan masyarakat, bukan hanya di istana.",
          c: "Skop kedua-dua konsep ini sangat luas; adat merangkumi perkahwinan dan pemerintahan, manakala adab terpakai dalam semua situasi sosial.",
          d: "Kedua-dua adab dan adat dalam peradaban Melayu telah dipengaruhi oleh pelbagai peradaban termasuk India, Islam dan alam Melayu itu sendiri.",
        },
      },
    },
    {
      id: "subject-q3",
      text: "Zaman Pencerahan (Enlightenment) di Eropah telah membentuk pemikiran etika moden. Apakah idea utamanya yang kemudiannya diterapkan melalui pentadbiran kolonial?",
      options: [
        {
          id: "a",
          text: "Pengukuhan autoriti agama dalam pentadbiran dan perundangan sivil.",
        },
        {
          id: "b",
          text: "Penekanan kepada rasionaliti, hak individu, dan pemisahan kuasa agama daripada negara.",
        },
        {
          id: "c",
          text: "Pengekalan sistem monarki mutlak dan struktur masyarakat feudal.",
        },
        {
          id: "d",
          text: "Penolakan terhadap kaedah saintifik dan pemikiran kritis dalam membuat keputusan.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Gerakan Pencerahan mengutamakan akal (rasionaliti) dan bukti empirikal, yang membawa kepada idea hak asasi individu dan sistem pentadbiran sekular. Konsep inilah yang dibawa oleh British, di mana pentadbiran negara diuruskan berdasarkan undang-undang rasional manakala agama diletakkan di bawah bidang kuasa Sultan.",
        incorrect: {
          a: "Ini adalah bertentangan sama sekali dengan semangat Pencerahan yang mencabar autoriti mutlak gereja.",
          c: "Sistem monarki mutlak dan feudal adalah antara sasaran utama kritikan ahli fikir Pencerahan.",
          d: "Gerakan Pencerahan adalah seiringan dengan Revolusi Saintifik dan amat mengagungkan pemikiran kritis.",
        },
      },
    },
    {
      id: "subject-q4",
      text: "Manakah senario berikut paling tepat menggambarkan proses amalgamasi dalam konteks hubungan etnik di Malaysia?",
      options: [
        {
          id: "a",
          text: "Seorang berketurunan India fasih bertutur dalam Bahasa Melayu dan menggemari masakan Melayu.",
        },
        {
          id: "b",
          text: "Kewujudan komuniti Serani di Melaka hasil daripada perkahwinan campur antara orang Portugis dan penduduk tempatan.",
        },
        {
          id: "c",
          text: "Amalan memberi 'angpau' yang turut diamalkan oleh masyarakat Melayu semasa Hari Raya Aidilfitri.",
        },
        {
          id: "d",
          text: "Kewujudan sekolah vernakular yang menggunakan bahasa ibunda masing-masing sebagai bahasa pengantar.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Amalgamasi merujuk kepada percantuman biologi (perkahwinan campur) antara kumpulan etnik yang berbeza, yang akhirnya membentuk satu kelompok baharu dengan budaya kacukan yang unik. Komuniti Serani adalah contoh klasik proses ini.",
        incorrect: {
          a: "Ini lebih merujuk kepada proses asimilasi budaya, di mana individu minoriti menyerap budaya majoriti.",
          c: "Ini adalah contoh proses akulturasi, iaitu peminjaman satu unsur budaya tanpa melibatkan percantuman biologi.",
          d: "Ini lebih menggambarkan keadaan akomodasi atau segregasi, di mana identiti asal dikekalkan secara berasingan.",
        },
      },
    },
    {
      id: "subject-q5",
      text: "Dalam kerangka 'Tiga Lapisan Perpaduan', konsep 'penyatupaduan' merujuk kepada:",
      options: [
        {
          id: "a",
          text: "Matlamat akhir yang diidamkan di mana semua etnik telah bersatu padu sepenuhnya.",
        },
        {
          id: "b",
          text: "Keadaan semasa yang stabil dan aman walaupun masih wujud perbezaan.",
        },
        {
          id: "c",
          text: "Usaha berterusan untuk merapatkan jurang sosial melalui perundingan dan mediasi.",
        },
        {
          id: "d",
          text: "Proses pembubaran identiti etnik yang berbeza untuk membentuk satu identiti tunggal.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "'Penyatupaduan' adalah satu proses yang aktif dan dinamik. Ia merujuk kepada segala usaha berterusan yang dijalankan oleh semua lapisan masyarakat untuk mengurus dan menyelesaikan defisit sosial melalui tapak-tapak integrasi seperti dialog, rundingan dan kompromi.",
        incorrect: {
          a: "Ini adalah takrifan bagi 'perpaduan' (unity), iaitu matlamat yang ideal.",
          b: "Ini adalah takrifan bagi 'kesepaduan' (cohesion), iaitu keadaan yang telah dicapai.",
          d: "Ini merujuk kepada proses asimilasi sepenuhnya, yang bukan matlamat utama penyatupaduan dalam konteks kepelbagaian.",
        },
      },
    },
    {
      id: "subject-q6",
      text: "Menurut nota, proses pembinaan Negara-Bangsa (Nation-State) di Malaysia mempunyai urutan yang spesifik. Apakah urutan tersebut?",
      options: [
        {
          id: "a",
          text: "Pembinaan 'Bangsa' (Nation) didahulukan, diikuti oleh pembinaan 'Negara' (State).",
        },
        {
          id: "b",
          text: "Pembinaan 'Negara' (State) didahulukan, diikuti oleh pembinaan 'Bangsa' (Nation).",
        },
        {
          id: "c",
          text: "Pembinaan 'Negara' dan 'Bangsa' berlaku secara serentak sejurus selepas merdeka.",
        },
        {
          id: "d",
          text: "Pembinaan 'Negara-Bangsa' didahulukan, diikuti oleh pembangunan ekonomi.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota menyatakan bahawa apabila Malaysia merdeka, apa yang lahir ialah sebuah 'Negara' (State) dengan institusi formalnya seperti perlembagaan dan sempadan. Pembangunan ekonomi juga didahulukan. Proses pembinaan 'Bangsa' (Nation), iaitu pembentukan identiti dan kesedaran kolektif, adalah proses yang lebih sukar dan menyusul kemudian.",
        incorrect: {
          a: "Pernyataan ini terbalik; pembinaan institusi negara lebih mudah dan didahulukan berbanding pembinaan identiti bangsa.",
          c: "Proses ini tidak berlaku serentak; pembinaan 'Bangsa' adalah proses yang lebih panjang dan masih berterusan.",
          d: "Nota menegaskan bahawa pembangunan ekonomi mendahului pembinaan 'Bangsa'.",
        },
      },
    },
    {
      id: "subject-q7",
      text: "Perlembagaan Persekutuan dianggap sebagai 'kontrak sosial'. Apakah teras utama persefahaman dalam kontrak tersebut?",
      options: [
        {
          id: "a",
          text: "Persetujuan untuk menjadikan semua undang-undang adat sebagai undang-undang persekutuan.",
        },
        {
          id: "b",
          text: "Persetujuan untuk membahagikan kekayaan negara secara sama rata antara semua warganegara.",
        },
        {
          id: "c",
          text: "Persefahaman antara kaum mengenai hak kewarganegaraan dan pengiktirafan elemen-elemen warisan.",
        },
        {
          id: "d",
          text: "Perjanjian untuk mengamalkan sistem pengundian 'satu undi satu nilai' sepenuhnya.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "'Kontrak sosial' merujuk kepada tolak ansur bersejarah antara pemimpin kaum. Terasnya adalah pemberian hak kewarganegaraan kepada orang bukan Melayu, sebagai balasan kepada persetujuan untuk mengiktiraf dan memelihara elemen-elemen warisan seperti kedudukan Raja-Raja Melayu, agama Islam, Bahasa Melayu, dan kedudukan istimewa orang Melayu.",
        incorrect: {
          a: "Undang-undang adat kekal di bawah bidang kuasa negeri tertentu dan tidak diangkat menjadi undang-undang persekutuan.",
          b: "Walaupun keadilan sosial adalah matlamat, Perlembagaan tidak memperuntukkan pembahagian kekayaan secara sama rata tetapi melalui dasar-dasar seperti Perkara 153.",
          d: "Isu persempadanan pilihan raya adalah satu perkara politik yang kompleks dan bukan teras utama 'kontrak sosial' asal.",
        },
      },
    },
    {
      id: "subject-q8",
      text: "Apakah perubahan etika sosial paling signifikan yang dicetuskan oleh Revolusi Industri di Eropah?",
      options: [
        {
          id: "a",
          text: "Pengukuhan nilai-nilai komunalisme dan kebergantungan kepada komuniti.",
        },
        {
          id: "b",
          text: "Kemunculan etika kerja yang menekankan individualisme dan mobiliti sosial.",
        },
        {
          id: "c",
          text: "Peningkatan peranan institusi agama dalam mengawal aktiviti ekonomi.",
        },
        {
          id: "d",
          text: "Pemantapan sistem sosial feudal dan pewarisan status secara turun-temurun.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Revolusi Industri menggalakkan penghijrahan individu dari desa ke bandar untuk bekerja di kilang. Ini memecahkan struktur komuniti tradisional dan melahirkan satu etika kerja baharu yang menekankan usaha individu, persaingan, dan idea bahawa seseorang boleh mengubah nasibnya (mobiliti sosial) melalui kerajinan, bukan lagi terikat kepada status warisan.",
        incorrect: {
          a: "Nilai-nilai ini adalah ciri masyarakat agraria sebelum Revolusi Industri.",
          c: "Revolusi Industri adalah sebahagian daripada proses sekularisasi yang memisahkan agama dari ekonomi.",
          d: "Revolusi Industri telah menghakis sistem feudal dan melahirkan struktur kelas sosial baharu yang berasaskan ekonomi.",
        },
      },
    },
    {
      id: "subject-q9",
      text: "Apakah yang dimaksudkan dengan 'superdiversity' dalam konteks masyarakat Malaysia pascakolonial?",
      options: [
        {
          id: "a",
          text: "Penghijrahan masuk tiga kumpulan etnik utama, iaitu Melayu, Cina dan India.",
        },
        {
          id: "b",
          text: "Proses penyeragaman budaya yang berjaya membentuk satu identiti tunggal.",
        },
        {
          id: "c",
          text: "Kepelbagaian masyarakat yang semakin kompleks melangkaui batas etnik tradisional.",
        },
        {
          id: "d",
          text: "Keadaan di mana setiap kumpulan etnik hidup terasing sepenuhnya antara satu sama lain.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "'Superdiversity' adalah istilah untuk menggambarkan kepelbagaian yang lebih dinamik dan berlapis-lapis pada era globalisasi. Ia bukan lagi sekadar perbezaan kaum, tetapi juga merangkumi kepelbagaian dalam kaum itu sendiri, seperti perbezaan warganegara, status visa, generasi, kelas ekonomi, dan sebagainya.",
        incorrect: {
          a: "Ini merujuk kepada pembentukan masyarakat majmuk pada era kolonial, bukan 'superdiversity' era globalisasi.",
          b: "Ini adalah konsep asimilasi, yang bertentangan dengan realiti peningkatan kepelbagaian.",
          d: "Ini merujuk kepada segregasi, manakala 'superdiversity' melibatkan interaksi yang kompleks.",
        },
      },
    },
    {
      id: "subject-q10",
      text: "Dasar Ekonomi Baru (DEB) mempunyai matlamat serampang dua mata. Apakah kedua-dua matlamat tersebut?",
      options: [
        {
          id: "a",
          text: "Mempercepatkan perindustrian dan memajukan sektor pelancongan negara.",
        },
        {
          id: "b",
          text: "Membasmi kemiskinan tanpa mengira kaum dan menyusun semula masyarakat.",
        },
        {
          id: "c",
          text: "Meningkatkan pelaburan langsung asing dan mengukuhkan nilai mata wang.",
        },
        {
          id: "d",
          text: "Menyeragamkan sistem pendidikan kebangsaan dan memperkasakan Bahasa Melayu.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "DEB dilancarkan dengan dua objektif utama yang saling berkait: (1) membasmi kemiskinan dalam kalangan semua rakyat tanpa mengira kaum, dan (2) menyusun semula masyarakat untuk menghapuskan pengenalan kaum dengan fungsi ekonomi, yang dilihat sebagai punca ketegangan.",
        incorrect: {
          a: "Ini adalah strategi pembangunan ekonomi, tetapi bukan matlamat utama DEB yang bersifat sosio-ekonomi.",
          c: "Ini adalah matlamat dasar fiskal dan monetari, bukan DEB.",
          d: "Ini adalah matlamat dalam dasar pendidikan dan bahasa, yang berjalan seiring tetapi berbeza daripada DEB.",
        },
      },
    },
    {
      id: "subject-q11",
      text: "Konsep 'Bangsa Idaman' (Nation of Intent) menghujahkan bahawa pembinaan bangsa di Malaysia adalah satu 'projek yang sedang berjalan'. Apakah implikasi utama pandangan ini?",
      options: [
        {
          id: "a",
          text: "Identiti bangsa Malaysia telah ditetapkan secara muktamad semasa kemerdekaan.",
        },
        {
          id: "b",
          text: "Wujud pelbagai wacana yang bersaing mengenai bentuk dan acuan 'Bangsa Malaysia'.",
        },
        {
          id: "c",
          text: "Proses pembinaan bangsa tidak lagi relevan dalam era globalisasi kini.",
        },
        {
          id: "d",
          text: "Hanya satu konsep bangsa sahaja, iaitu 'Malay-led plural society', yang diterima semua.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Konsep ini menggambarkan bahawa tidak ada satu definisi tunggal yang dipersetujui oleh semua tentang 'Bangsa Malaysia'. Sebaliknya, ia sentiasa menjadi medan pertarungan idea antara pelbagai kelompok yang mempunyai wawasan 'bangsa idaman' masing-masing (cth: Malaysian Malaysia, Negara Islam, dll.), menjadikannya satu proses yang dinamik.",
        incorrect: {
          a: "Pandangan ini menolak idea bahawa identiti bangsa bersifat statik dan telah selesai dibentuk.",
          c: "Walaupun dicabar globalisasi, wacana pembinaan bangsa tetap menjadi isu utama dalam politik negara.",
          d: "Walaupun konsep ini dominan, ia bukanlah satu-satunya konsep dan sentiasa dicabar oleh 'bangsa idaman' yang lain.",
        },
      },
    },
    {
      id: "subject-q12",
      text: "Suruhanjaya Reid ditubuhkan untuk merangka Perlembagaan Persekutuan. Antara berikut, yang manakah terkeluar daripada skop dan terma rujukan utamanya?",
      options: [
        {
          id: "a",
          text: "Mencadangkan satu bentuk kerajaan Persekutuan yang mempunyai kerajaan pusat yang kuat.",
        },
        {
          id: "b",
          text: "Memastikan kedudukan Raja-Raja Melayu sebagai raja berperlembagaan terjamin.",
        },
        {
          id: "c",
          text: "Mewujudkan satu taraf kerakyatan yang sama bagi seluruh Persekutuan.",
        },
        {
          id: "d",
          text: "Menentukan syarat dan mekanisme kemasukan Sabah dan Sarawak ke dalam Persekutuan.",
        },
      ],
      correctOptionId: "d",
      explanation: {
        correct:
          "Skop Suruhanjaya Reid terhad kepada Persekutuan Tanah Melayu (Malaya) yang merdeka pada 1957. Isu kemasukan Sabah (ketika itu Borneo Utara) dan Sarawak hanya timbul beberapa tahun kemudian dan dikendalikan oleh Suruhanjaya Cobbold pada 1962.",
        incorrect: {
          a: "Struktur sebuah negara persekutuan adalah antara terma rujukan utama.",
          b: "Memelihara kedudukan Raja-Raja Melayu adalah syarat penting dalam rundingan kemerdekaan.",
          c: "Isu kerakyatan adalah antara perkara paling kritikal yang perlu diselesaikan oleh suruhanjaya ini.",
        },
      },
    },
    {
      id: "subject-q13",
      text: "ICT boleh menjadi 'kawan' dan 'lawan'. Manakah senario berikut paling jelas menunjukkan ICT berperanan sebagai 'lawan' kepada kesepaduan nasional?",
      options: [
        {
          id: "a",
          text: "Sekumpulan pelajar pelbagai kaum menggunakan aplikasi persidangan video untuk menyiapkan tugasan universiti.",
        },
        {
          id: "b",
          text: "Sebuah NGO melancarkan kutipan derma dalam talian untuk mangsa banjir tanpa mengira kaum.",
        },
        {
          id: "c",
          text: "Penyebaran maklumat tidak sahih secara sengaja untuk menimbulkan syak wasangka antara penganut agama.",
        },
        {
          id: "d",
          text: "Seorang usahawan kecil menggunakan media sosial untuk mempromosikan produk makanan tradisionalnya.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "ICT menjadi 'lawan' apabila platformnya dieksploitasi untuk tujuan memecahbelahkan. Penyebaran berita palsu dan provokasi berbaur agama atau kaum adalah ancaman langsung kepada keharmonian dan kesepaduan sosial.",
        incorrect: {
          a: "Ini adalah contoh ICT sebagai 'kawan' yang memudah cara kerjasama dan pendidikan.",
          b: "Ini adalah contoh ICT sebagai 'kawan' yang menggalakkan tanggungjawab sosial dan kesukarelaan.",
          d: "Ini adalah contoh ICT sebagai 'kawan' yang membantu memajukan ekonomi dan mempromosikan budaya.",
        },
      },
    },
    {
      id: "subject-q14",
      text: "Apakah perbezaan utama antara 'takrifan autoriti' dan 'takrifan harian' mengenai realiti sosial?",
      options: [
        {
          id: "a",
          text: "Takrifan autoriti bersifat tidak formal, manakala takrifan harian bersifat formal.",
        },
        {
          id: "b",
          text: "Takrifan autoriti ditetapkan oleh pemerintah, manakala takrifan harian lahir daripada amalan komuniti.",
        },
        {
          id: "c",
          text: "Takrifan autoriti sentiasa betul, manakala takrifan harian sentiasa salah.",
        },
        {
          id: "d",
          text: "Takrifan autoriti hanya terpakai kepada penjawat awam, manakala takrifan harian terpakai kepada semua.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Perbezaan ini terletak pada sumbernya. 'Takrifan autoriti' datang dari atas ke bawah (top-down), ditetapkan oleh negara melalui undang-undang dan peraturan formal. 'Takrifan harian' pula lahir dari bawah ke atas (bottom-up), dibentuk oleh amalan, norma dan kesepakatan tidak bertulis dalam kehidupan seharian komuniti.",
        incorrect: {
          a: "Pernyataan ini terbalik.",
          c: "Kedua-dua takrifan ini adalah sebahagian daripada realiti sosial dan tidak boleh dinilai sebagai betul atau salah secara mutlak.",
          d: "Kedua-dua takrifan terpakai kepada semua anggota masyarakat, tetapi dalam konteks yang berbeza.",
        },
      },
    },
    {
      id: "subject-q15",
      text: "Pilih pernyataan yang paling tepat menerangkan konsep 'hakisan sosial' dalam konteks Malaysia.",
      options: [
        {
          id: "a",
          text: "Proses hakisan tanah dan tebing sungai akibat pembangunan tidak terancang.",
        },
        {
          id: "b",
          text: "Peningkatan penggunaan Bahasa Inggeris dalam kalangan generasi muda.",
        },
        {
          id: "c",
          text: "Kemerosotan nilai-nilai seperti integriti, keadilan, dan kesepaduan akibat tadbir urus yang lemah dan defisit sosial.",
        },
        {
          id: "d",
          text: "Perpindahan penduduk dari kawasan luar bandar ke bandar-bandar utama.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "'Hakisan sosial' adalah metafora yang merujuk kepada kemerosotan atau kelunturan nilai-nilai dan ikatan yang menjadi asas kepada kestabilan masyarakat. Faktor-faktor seperti rasuah, ketidakadilan, dan jurang sosioekonomi yang melebar boleh menghakis kepercayaan dan keharmonian, sama seperti air menghakis tanah.",
        incorrect: {
          a: "Ini adalah hakisan fizikal, bukan hakisan sosial.",
          b: "Ini adalah satu fenomena linguistik, yang tidak semestinya merupakan satu bentuk hakisan sosial.",
          d: "Ini adalah proses urbanisasi, satu bentuk perubahan sosial yang tidak semestinya negatif.",
        },
      },
    },
    {
      id: "subject-q16",
      text: "Wawasan Kemakmuran Bersama 2030 (WKB 2030) adalah satu anjakan daripada model ekonomi sebelumnya. Apakah anjakan utama tersebut?",
      options: [
        {
          id: "a",
          text: "Daripada ekonomi berasaskan pertanian kepada ekonomi berasaskan perindustrian.",
        },
        {
          id: "b",
          text: "Daripada ekonomi tertutup kepada ekonomi terbuka yang menggalakkan pelaburan asing.",
        },
        {
          id: "c",
          text: "Daripada model yang mementingkan pertumbuhan KDNK kepada model yang menekankan pengagihan kekayaan yang adil.",
        },
        {
          id: "d",
          text: "Daripada sektor swasta sebagai peneraju ekonomi kepada sektor awam sebagai peneraju utama.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Anjakan paling utama ialah daripada falsafah 'pertumbuhan dengan pengagihan' kepada 'pengagihan yang menjana pertumbuhan'. Ini bermakna, WKB 2030 tidak lagi hanya fokus pada angka pertumbuhan ekonomi (KDNK), tetapi memberi keutamaan kepada isu pengagihan yang saksama untuk memastikan kemakmuran dapat dikongsi bersama oleh semua lapisan masyarakat.",
        incorrect: {
          a: "Anjakan ini telah berlaku lebih awal dalam sejarah ekonomi Malaysia.",
          b: "Malaysia telah lama mengamalkan ekonomi terbuka.",
          d: "WKB 2030 masih mengiktiraf sektor swasta sebagai enjin pertumbuhan, tetapi dengan peranan kerajaan untuk memastikan keadilan.",
        },
      },
    },
    {
      id: "subject-q17",
      text: "Manakah antara berikut paling tepat merumuskan evolusi etika di Malaysia mengikut susur masa?",
      options: [
        {
          id: "a",
          text: "Etika Prakolonial berasaskan adat, digantikan sepenuhnya oleh Etika Kolonial berasaskan undang-undang.",
        },
        {
          id: "b",
          text: "Etika Prakolonial (adat, adab) dan Etika Kolonial (rasional-legal) wujud secara selari tanpa sebarang interaksi.",
        },
        {
          id: "c",
          text: "Etika Pascakolonial adalah hasil sulaman dan percampuran antara etika tradisional (adat, adab) dan etika moden (rasional-legal).",
        },
        {
          id: "d",
          text: "Etika di Malaysia tidak pernah berubah dan kekal berteraskan nilai-nilai prakolonial.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Evolusi etika di Malaysia bersifat kumulatif dan tersulam. Nilai-nilai prakolonial tidak hilang, sebaliknya ia berinteraksi, diubah suai, dan digabungkan dengan sistem etika moden yang dibawa semasa era kolonial. Hasilnya ialah acuan etika Pascakolonial yang kompleks dan hibrid.",
        incorrect: {
          a: "Etika prakolonial tidak digantikan sepenuhnya; ia masih wujud dan berpengaruh.",
          b: "Kedua-dua sistem etika ini sentiasa berinteraksi dan mempengaruhi antara satu sama lain.",
          d: "Pernyataan ini menafikan impak besar zaman kolonial dan globalisasi terhadap sistem nilai di Malaysia.",
        },
      },
    },
    {
      id: "subject-q18",
      text: "Konsep 'etos bangsa' merujuk kepada...",
      options: [
        {
          id: "a",
          text: "Peraturan bertulis yang terkandung dalam perlembagaan dan kanun keseksaan negara.",
        },
        {
          id: "b",
          text: "Sifat, nilai, dan pandangan hidup khas yang menjadi watak dan semangat sesuatu bangsa.",
        },
        {
          id: "c",
          text: "Protokol rasmi yang perlu dipatuhi dalam hubungan diplomatik antara negara.",
        },
        {
          id: "d",
          text: "Struktur ekonomi dan sistem pasaran yang menjadi amalan sesebuah negara.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "'Etos' merujuk kepada semangat atau jiwa (spirit) yang menjiwai sesebuah komuniti. Ia adalah gabungan nilai, kepercayaan, dan sentimen yang dikongsi bersama, yang membentuk perwatakan kolektif dan memberi identiti kepada sesebuah bangsa.",
        incorrect: {
          a: "Ini merujuk kepada undang-undang formal, bukan semangat kolektif.",
          c: "Ini adalah konsep 'etiket' atau protokol, bukan 'etos'.",
          d: "Ini adalah sistem ekonomi, bukan konsep sosio-budaya.",
        },
      },
    },
    {
      id: "subject-q19",
      text: "Apakah perbezaan paling signifikan antara pembentukan masyarakat 'pluraliti' di Melaka dan masyarakat 'plural' (majmuk) di bawah pemerintahan British?",
      options: [
        {
          id: "a",
          text: "Masyarakat pluraliti adalah hasil migrasi paksa, manakala masyarakat plural adalah sukarela.",
        },
        {
          id: "b",
          text: "Masyarakat pluraliti lebih terintegrasi melalui interaksi semulajadi, manakala masyarakat plural lebih terpisah.",
        },
        {
          id: "c",
          text: "Masyarakat pluraliti hanya terdiri daripada kaum pedagang, manakala masyarakat plural terdiri daripada kaum buruh.",
        },
        {
          id: "d",
          text: "Masyarakat pluraliti menolak budaya tempatan, manakala masyarakat plural menerimanya.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Perbezaan utamanya terletak pada corak interaksi. Di Melaka (pluraliti), interaksi dan pergaulan antara pedagang asing dan penduduk tempatan berlaku secara semulajadi dan membawa kepada proses akulturasi dan amalgamasi. Di bawah British (plural/majmuk), dasar 'pecah dan perintah' mewujudkan masyarakat yang hidup berdekatan tetapi terpisah dari segi penempatan, pekerjaan, dan pendidikan.",
        incorrect: {
          a: "Pernyataan ini terbalik.",
          c: "Kedua-dua zaman melibatkan pelbagai jenis pekerjaan, tetapi corak pemisahannya berbeza.",
          d: "Masyarakat pluraliti di Melaka lebih banyak berinteraksi dan menyerap budaya tempatan.",
        },
      },
    },
    {
      id: "subject-q20",
      text: "Pilih kombinasi yang TEPAT mengenai klasifikasi bentuk negara bangsa.\nI. Malaysia : Negara Bangsa Tamu\nII. Kanada : Negara Bangsa Peneroka\nIII. Jepun : Negara Bangsa Tamu\nIV. Singapura : Negara Bangsa Tamu",
      options: [
        {
          id: "a",
          text: "I dan II sahaja",
        },
        {
          id: "b",
          text: "I, II, dan III sahaja",
        },
        {
          id: "c",
          text: "II, III dan IV sahaja",
        },
        {
          id: "d",
          text: "Semua di atas",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Malaysia dan Jepun diklasifikasikan sebagai negara bangsa tamu (indigenous nation-state) di mana kumpulan etnik asal memegang hegemoni politik. Kanada, seperti Amerika Syarikat dan Australia, adalah negara bangsa peneroka (settler nation-state) di mana komuniti migran menjadi dominan. Singapura juga diklasifikasikan sebagai negara bangsa peneroka.",
        incorrect: {
          a: "Kombinasi ini tidak lengkap kerana III juga betul.",
          c: "Pernyataan IV adalah salah; Singapura adalah negara bangsa peneroka.",
          d: "Pernyataan IV adalah salah, menjadikan kombinasi ini tidak tepat.",
        },
      },
    },
    {
      id: "subject-q21",
      text: "Pilihan Raya Umum 1955 merupakan satu detik penting dalam sejarah politik negara. Apakah signifikasi utamanya dari sudut hubungan etnik?",
      options: [
        {
          id: "a",
          text: "Ia adalah kali pertama semua warganegara termasuk wanita dibenarkan mengundi.",
        },
        {
          id: "b",
          text: "Ia menyaksikan kemenangan mutlak parti-parti politik yang berasaskan satu kaum sahaja.",
        },
        {
          id: "c",
          text: "Ia membuktikan kejayaan formula perkongsian kuasa dan kompromi antara kaum melalui Parti Perikatan.",
        },
        {
          id: "d",
          text: "Ia membawa kepada pembubaran serta-merta Jawatankuasa Perhubungan Masyarakat (CLC).",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Kemenangan besar Parti Perikatan (gabungan UMNO, MCA, dan MIC) menunjukkan bahawa model kerjasama dan tolak ansur antara kaum boleh diterima oleh rakyat. Pengorbanan seperti UMNO meletakkan calon bukan Melayu di kawasan majoriti Melayu menjadi lambang kompromi yang berjaya.",
        incorrect: {
          a: "Walaupun ia adalah pilihan raya persekutuan pertama, fokus signifikasinya adalah pada kerjasama antara kaum.",
          b: "Pernyataan ini terbalik; ia menyaksikan kemenangan gabungan parti pelbagai kaum.",
          d: "CLC adalah platform rundingan awal yang meletakkan asas kepada kerjasama ini, bukan dibubarkan olehnya.",
        },
      },
    },
    {
      id: "subject-q22",
      text: "Perkembangan teknologi maklumat dan komunikasi (ICT) di Malaysia bermula seawal tahun 1980-an. Apakah antara inisiatif terawal yang menghubungkan Malaysia dengan dunia internet?",
      options: [
        {
          id: "a",
          text: "Projek Koridor Raya Multimedia (MSC).",
        },
        {
          id: "b",
          text: "Rangkaian Komputer Malaysia (RangKoM) dan JARING.",
        },
        {
          id: "c",
          text: "Pelancaran satelit MEASAT yang pertama.",
        },
        {
          id: "d",
          text: "Pengenalan teknologi 3G untuk telefon mudah alih.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Menurut nota, idea untuk menghubungkan Malaysia dengan internet bermula di Universiti Malaya pada 1983, yang membawa kepada penubuhan Rangkaian Komputer Malaysia (RangKoM) pada 1989 dan kemudiannya pelancaran JARING pada 1991, penyedia perkhidmatan internet komersial pertama di Malaysia.",
        incorrect: {
          a: "MSC adalah projek mega yang dilancarkan pada pertengahan 1990-an, selepas kewujudan JARING.",
          c: "Satelit MEASAT dilancarkan pada tahun 1996, juga selepas JARING beroperasi.",
          d: "Teknologi 3G diperkenalkan jauh lebih lewat, iaitu pada awal tahun 2000-an.",
        },
      },
    },
    {
      id: "subject-q23",
      text: "Apakah yang dimaksudkan dengan 'Technostress' dalam konteks hubungan manusia dengan ICT?",
      options: [
        {
          id: "a",
          text: "Perasaan gembira dan teruja apabila menggunakan gajet teknologi terkini.",
        },
        {
          id: "b",
          text: "Kebolehan untuk melakukan pelbagai tugas serentak menggunakan teknologi digital.",
        },
        {
          id: "c",
          text: "Ketakutan atau fobia yang melampau terhadap penggunaan teknologi baharu.",
        },
        {
          id: "d",
          text: "Tekanan dan bebanan mental akibat tuntutan kerja dan kehidupan yang sentiasa terhubung dengan teknologi.",
        },
      ],
      correctOptionId: "d",
      explanation: {
        correct:
          "'Technostress' merujuk kepada kesan negatif psikologi akibat penggunaan ICT yang berlebihan. Ini termasuk tekanan kerana sentiasa perlu bersedia untuk dihubungi (24/7), bebanan maklumat yang terlalu banyak, dan kesukaran untuk mengasingkan waktu kerja dan waktu peribadi.",
        incorrect: {
          a: "Ini adalah perasaan yang bertentangan dengan 'technostress'.",
          b: "Walaupun ICT membolehkan 'multitasking', tekanan yang timbul daripadanya adalah 'technostress'.",
          c: "Ini adalah definisi bagi 'Technophobia', iaitu ketakutan terhadap teknologi itu sendiri.",
        },
      },
    },
    {
      id: "subject-q24",
      text: "Bahagian Pertama Rukun Negara menggariskan objektif untuk membina 'sebuah masyarakat progresif'. Apakah yang dimaksudkan dengan ciri ini?",
      options: [
        {
          id: "a",
          text: "Masyarakat yang menolak semua bentuk tradisi dan warisan budaya.",
        },
        {
          id: "b",
          text: "Masyarakat yang akan menggunakan sains dan teknologi moden untuk kemajuan.",
        },
        {
          id: "c",
          text: "Masyarakat yang hanya menumpukan kepada pembangunan ekonomi semata-mata.",
        },
        {
          id: "d",
          text: "Masyarakat yang mengamalkan sistem ekonomi tertutup tanpa perdagangan antarabangsa.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Dalam konteks Rukun Negara, masyarakat progresif merujuk kepada masyarakat yang dinamik, berpandangan jauh, dan bersedia untuk bergerak maju sejajar dengan peredaran zaman, terutamanya melalui penguasaan dan penggunaan sains dan teknologi moden.",
        incorrect: {
          a: "Rukun Negara juga menekankan untuk membentuk sikap liberal terhadap tradisi kebudayaan yang kaya, bukan menolaknya.",
          c: "Masyarakat progresif juga perlu adil dan saksama, bukan hanya maju dari segi ekonomi.",
          d: "Sikap progresif lazimnya dikaitkan dengan keterbukaan, bukan pengasingan.",
        },
      },
    },
    {
      id: "subject-q25",
      text: "Pilih kombinasi yang paling TEPAT mengenai prosedur pindaan Perlembagaan Persekutuan.\nI. Perkara 159 : Perlu majoriti mudah ahli Parlimen yang hadir.\nII. Perkara 153 : Perlu majoriti 2/3 dan perkenan Majlis Raja-Raja.\nIII. Perkara 161E : Perlu majoriti 2/3 dan persetujuan Yang di-Pertua Negeri Sabah atau Sarawak.\nIV. Perkara 38 : Perlu majoriti 2/3 tanpa memerlukan perkenan Majlis Raja-Raja.",
      options: [
        {
          id: "a",
          text: "I dan IV sahaja",
        },
        {
          id: "b",
          text: "II dan III sahaja",
        },
        {
          id: "c",
          text: "I, II dan III sahaja",
        },
        {
          id: "d",
          text: "Semua di atas",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Pernyataan II dan III adalah tepat. Perkara-perkara sensitif seperti Perkara 153 (kedudukan istimewa) dan Perkara 38 (mengenai Majlis Raja-Raja) memerlukan majoriti 2/3 serta perkenan Majlis Raja-Raja. Perkara 161E yang melibatkan kepentingan Sabah dan Sarawak pula memerlukan persetujuan Yang di-Pertua Negeri berkenaan.",
        incorrect: {
          a: "Pernyataan I salah kerana majoriti mudah adalah untuk undang-undang biasa, bukan pindaan perlembagaan. Pernyataan IV salah kerana pindaan Perkara 38 memerlukan perkenan Majlis Raja-Raja.",
          c: "Pernyataan I adalah salah.",
          d: "Pernyataan I dan IV adalah salah.",
        },
      },
    },
    {
      id: "subject-q26",
      text: "Apakah yang dimaksudkan dengan 'negara bangsa tamu' (indigenous nation-state) dalam konteks Malaysia?",
      options: [
        {
          id: "a",
          text: "Sebuah negara yang menolak kemasukan semua komuniti migran.",
        },
        {
          id: "b",
          text: "Sebuah negara di mana komuniti migran telah mengambil alih kuasa politik sepenuhnya.",
        },
        {
          id: "c",
          text: "Sebuah negara pascakolonial di mana hegemoni politik anak watan diiktiraf dan komuniti migran diterima sebagai warganegara.",
        },
        {
          id: "d",
          text: "Sebuah negara yang mengamalkan dasar asimilasi sepenuhnya terhadap semua kumpulan minoriti.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Konsep ini menerangkan realiti Malaysia di mana teras atau pasak negara adalah berasaskan kepada kumpulan etnik asal (anak watan/bumiputera) yang hegemoni politiknya diiktiraf dalam perlembagaan, manakala komuniti-komuniti migran yang datang kemudian diterima dan diintegrasikan sebagai warganegara.",
        incorrect: {
          a: "Negara bangsa tamu menerima komuniti migran sebagai warganegara, bukan menolaknya.",
          b: "Ini adalah ciri 'negara bangsa peneroka' (settler nation-state) seperti Amerika Syarikat atau Singapura.",
          d: "Malaysia lebih mengamalkan integrasi berbanding asimilasi penuh, di mana kepelbagaian budaya masih diraikan.",
        },
      },
    },
    {
      id: "subject-q27",
      text: "Bagaimanakah Indeks Kualiti Hidup, Indeks Kesejahteraan Malaysia, dan Indeks Kedamaian Global boleh menjadi penunjuk kepada kelestarian etika dan peradaban Malaysia?",
      options: [
        {
          id: "a",
          text: "Dengan membuktikan bahawa Malaysia mempunyai kadar pertumbuhan ekonomi tertinggi di dunia.",
        },
        {
          id: "b",
          text: "Dengan menunjukkan bahawa Malaysia adalah sebuah negara yang makmur, damai, dan sejahtera hasil daripada tadbir urus yang baik.",
        },
        {
          id: "c",
          text: "Dengan mengesahkan bahawa semua rakyat Malaysia mempunyai tahap pendapatan yang sama.",
        },
        {
          id: "d",
          text: "Dengan membuktikan bahawa Malaysia tidak menghadapi sebarang konflik sosial atau cabaran dalaman.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Indeks-indeks ini adalah pengukur objektif yang digunakan di peringkat antarabangsa dan nasional untuk menilai pelbagai aspek kehidupan. Kedudukan yang baik dalam indeks-indeks ini menunjukkan bahawa, secara relatifnya, negara berjaya diurus dengan baik untuk mencapai kemakmuran, keamanan dan kesejahteraan, yang merupakan cerminan kepada etika dan peradaban yang mapan.",
        incorrect: {
          a: "Indeks ini mengukur lebih daripada sekadar pertumbuhan ekonomi, ia merangkumi aspek sosial dan keamanan.",
          c: "Indeks ini tidak mengukur kesamarataan pendapatan mutlak, tetapi tahap kesejahteraan umum.",
          d: "Indeks ini tidak menafikan kewujudan cabaran, tetapi menunjukkan bahawa cabaran tersebut berjaya diurus dengan baik sehingga tidak menjejaskan kedamaian dan kestabilan negara secara keseluruhan.",
        },
      },
    },
    {
      id: "subject-q28",
      text: "Apakah yang dimaksudkan dengan 'detik perbezaan' dalam konteks hubungan sosial di Malaysia?",
      options: [
        {
          id: "a",
          text: "Saat di mana rakyat pelbagai kaum bersama-sama meraikan kemenangan pasukan sukan negara.",
        },
        {
          id: "b",
          text: "Saat di mana perbezaan pendapat mengenai isu politik atau agama menjadi tegang dan menjarakkan hubungan.",
        },
        {
          id: "c",
          text: "Saat di mana pelbagai jenis makanan daripada budaya berbeza dinikmati di sebuah restoran.",
        },
        {
          id: "d",
          text: "Saat di mana jiran-jiran pelbagai etnik saling membantu semasa majlis perkahwinan.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "'Detik perbezaan' adalah situasi di mana perbezaan latar belakang etnik, agama, atau pandangan politik menjadi lebih menonjol dan berpotensi untuk menimbulkan ketegangan, konflik atau sekurang-kurangnya menjarakkan hubungan sosial antara kumpulan.",
        incorrect: {
          a: "Ini adalah contoh klasik 'detik perpaduan'.",
          c: "Ini juga adalah 'detik perpaduan' yang sering berlaku dalam kehidupan seharian.",
          d: "Ini adalah 'detik perpaduan' di peringkat komuniti.",
        },
      },
    },
    {
      id: "subject-q29",
      text: "Mengapakah tadbir urus yang baik dan pembangunan yang adil penting untuk mencapai kesepaduan nasional?",
      options: [
        {
          id: "a",
          text: "Kerana ia akan menghapuskan semua perbezaan budaya dan agama dalam masyarakat.",
        },
        {
          id: "b",
          text: "Kerana ia akan memastikan hanya satu parti politik sahaja yang akan terus memerintah negara.",
        },
        {
          id: "c",
          text: "Kerana ia mengurangkan jurang kaya-miskin dan perasaan terpinggir yang boleh mencetuskan ketidakpuasan hati.",
        },
        {
          id: "d",
          text: "Kerana ia akan membolehkan negara melaksanakan projek mega tanpa sebarang bantahan daripada rakyat.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Kegagalan mengagihkan kekayaan negara secara adil boleh mewujudkan perasaan tidak puas hati, terpinggir dan dipinggirkan. Perasaan ini, jika dieksploitasi, boleh menjadi punca ketegangan sosial dan politik. Oleh itu, tadbir urus yang baik dan pembangunan yang adil adalah kunci untuk memastikan semua rakyat merasa mereka mempunyai kepentingan dalam negara, lantas mengukuhkan kesepaduan.",
        incorrect: {
          a: "Kesepaduan bukan tentang menghapuskan perbezaan, tetapi mengurus perbezaan dengan baik.",
          b: "Tadbir urus yang baik adalah mengenai proses yang adil, bukan menjamin kemenangan mana-mana parti.",
          d: "Tadbir urus yang baik melibatkan ketelusan dan akauntabiliti, yang mungkin menggalakkan perbahasan sihat mengenai projek mega, bukan menyenyapkannya.",
        },
      },
    },
    {
      id: "subject-q30",
      text: "Apakah yang dimaksudkan dengan kerangka analisis 'sejarah, struktur sosial dan biografi' dalam memahami penghayatan etika?",
      options: [
        {
          id: "a",
          text: "Satu kaedah untuk mengkaji hanya tokoh-tokoh sejarah dan biografi mereka.",
        },
        {
          id: "b",
          text: "Satu pendekatan untuk memahami bahawa etika seseorang dibentuk oleh pengalaman sejarah, kedudukannya dalam masyarakat, dan riwayat hidup peribadinya.",
        },
        {
          id: "c",
          text: "Satu teori yang menyatakan bahawa etika tidak dipengaruhi oleh faktor luaran tetapi hanya oleh genetik.",
        },
        {
          id: "d",
          text: "Satu cara untuk membahagikan masyarakat kepada tiga kelas sosial utama: pemerintah, bangsawan, dan rakyat.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Kerangka ini (diilhamkan oleh C. Wright Mills) menyatakan bahawa untuk memahami etika dan tindakan seseorang, kita perlu melihat tiga perkara: (1) Sejarah: Konteks zaman di mana mereka hidup; (2) Struktur Sosial: Kedudukan mereka dalam masyarakat (kelas, etnik, dll.); dan (3) Biografi: Pengalaman hidup peribadi mereka. Ketiga-tiga ini saling berkait dan membentuk pandangan hidup seseorang.",
        incorrect: {
          a: "Ia bukan hanya tentang tokoh besar, tetapi tentang semua individu dalam masyarakat.",
          c: "Ini adalah pandangan determinisme biologi, yang ditolak oleh kerangka sosiologi ini.",
          d: "Ini adalah sebahagian daripada analisis struktur sosial, tetapi kerangka ini lebih luas kerana ia turut merangkumi sejarah dan biografi.",
        },
      },
    },
    {
      id: "subject-q31",
      text: "Manakah antara berikut paling tepat menghuraikan konsep etiket?",
      options: [
        {
          id: "a",
          text: "Prinsip moral asas yang menentukan perbuatan baik dan buruk.",
        },
        {
          id: "b",
          text: "Semangat dan watak kolektif yang menjadi ciri sesebuah bangsa.",
        },
        {
          id: "c",
          text: "Peraturan sopan santun dalam pergaulan sosial atau profesion tertentu.",
        },
        {
          id: "d",
          text: "Undang-undang formal yang dikuatkuasakan oleh badan kehakiman.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Etiket merujuk kepada peraturan-peraturan kesopanan yang lebih spesifik dalam konteks sosial tertentu, seperti etiket di meja makan, etiket berpakaian dalam majlis rasmi, atau etiket dalam komunikasi profesional. Ia lebih kepada 'cara yang betul' untuk melakukan sesuatu dalam situasi sosial.",
        incorrect: {
          a: "Ini adalah definisi bagi 'etika' atau 'moral'.",
          b: "Ini adalah definisi bagi 'etos'.",
          d: "Etiket lazimnya adalah peraturan tidak bertulis, bukan undang-undang formal.",
        },
      },
    },
    {
      id: "subject-q32",
      text: "Proses interaksi antara pelbagai peradaban di Alam Melayu telah melahirkan satu bentuk peradaban acuan Malaysia. Apakah teras utama bagi peradaban ini?",
      options: [
        {
          id: "a",
          text: "Peradaban Barat yang dibawa semasa era kolonial.",
        },
        {
          id: "b",
          text: "Peradaban China melalui hubungan perdagangan awal.",
        },
        {
          id: "c",
          text: "Peradaban Melayu yang menjadi tapak dan disulami oleh peradaban lain.",
        },
        {
          id: "d",
          text: "Peradaban globalisasi yang berasaskan teknologi digital.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota-nota menekankan bahawa walaupun peradaban Malaysia adalah majmuk dan hasil sulaman pelbagai peradaban lain (Asia, Barat, Global), terasnya tetaplah peradaban pribumi Alam Melayu. Peradaban-peradaban lain datang dan bergaul dengan teras yang sedia ada ini.",
        incorrect: {
          a: "Peradaban Barat adalah pengaruh penting, tetapi bukan teras asalnya.",
          b: "Peradaban China adalah salah satu sulaman penting, tetapi bukan terasnya.",
          d: "Peradaban globalisasi adalah lapisan pengaruh yang lebih baharu, bukan teras pembentukannya.",
        },
      },
    },
    {
      id: "subject-q33",
      text: "Konsep 'negara tanpa bangsa' (state without nation) digunakan untuk menghuraikan situasi di Malaysia sejurus selepas kemerdekaan. Apakah maksud pernyataan ini?",
      options: [
        {
          id: "a",
          text: "Malaysia tidak mempunyai kerajaan yang berdaulat pada masa itu.",
        },
        {
          id: "b",
          text: "Malaysia tidak mempunyai penduduk yang mencukupi untuk membentuk sebuah negara.",
        },
        {
          id: "c",
          text: "Sebuah negara dengan struktur pentadbiran telah wujud, tetapi identiti bangsa yang sepunya belum terbentuk.",
        },
        {
          id: "d",
          text: "Rakyat Malaysia pada masa itu menolak konsep kewarganegaraan.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Pernyataan ini bermaksud, pada 31 Ogos 1957, sebuah 'negara' (state) yang berdaulat dengan perlembagaan dan pentadbirannya telah lahir. Namun, proses untuk menyatukan pelbagai kumpulan etnik di dalamnya untuk membentuk satu 'bangsa' (nation) dengan kesedaran identiti kolektif dan perasaan kekitaan bersama adalah satu cabaran yang masih perlu diusahakan.",
        incorrect: {
          a: "Malaysia telah menjadi sebuah negara yang berdaulat dan merdeka.",
          b: "Malaysia mempunyai penduduk yang terdiri daripada pelbagai kaum.",
          d: "Rakyat telah menerima konsep kewarganegaraan melalui peruntukan Perlembagaan.",
        },
      },
    },
    {
      id: "subject-q34",
      text: "Manakah antara berikut BUKAN merupakan elemen yang membentuk sebuah 'negara' (state)?",
      options: [
        {
          id: "a",
          text: "Kerajaan",
        },
        {
          id: "b",
          text: "Sempadan Wilayah",
        },
        {
          id: "c",
          text: "Penduduk",
        },
        {
          id: "d",
          text: "Satu bangsa tunggal",
        },
      ],
      correctOptionId: "d",
      explanation: {
        correct:
          "Elemen-elemen asas sebuah 'negara' adalah penduduk, wilayah, kerajaan, dan kedaulatan. Kewujudan hanya satu bangsa tunggal bukanlah satu syarat; banyak negara di dunia yang mempunyai pelbagai bangsa atau kumpulan etnik di dalamnya.",
        incorrect: {
          a: "Kerajaan adalah institusi yang menjalankan pentadbiran sesebuah negara.",
          b: "Sempadan wilayah yang jelas adalah syarat untuk menentukan jurisdiksi sesebuah negara.",
          c: "Sesebuah negara mesti mempunyai penduduk atau rakyat.",
        },
      },
    },
    {
      id: "subject-q35",
      text: "Apakah sumbangan utama tamadun China kepada peradaban dunia?",
      options: [
        {
          id: "a",
          text: "Pengenalan falsafah demokrasi dan sistem perundangan republik.",
        },
        {
          id: "b",
          text: "Penciptaan teknologi seperti kertas, pencetakan, kompas, dan serbuk letupan.",
        },
        {
          id: "c",
          text: "Pembangunan sistem angka perpuluhan dan konsep sifar dalam matematik.",
        },
        {
          id: "d",
          text: "Asas kepada ilmu perubatan moden melalui tokoh seperti Hippocrates.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Empat ciptaan ini, yang dikenali sebagai 'Empat Ciptaan Agung', berasal dari China dan telah mengubah peradaban dunia secara drastik dalam bidang komunikasi, pelayaran, dan ketenteraan.",
        incorrect: {
          a: "Ini adalah sumbangan utama dari tamadun Yunani dan Rom.",
          b: "Ini adalah sumbangan penting dari tamadun India.",
          d: "Ini adalah sumbangan dari tamadun Yunani kuno.",
        },
      },
    },
    {
      id: "subject-q36",
      text: "Bagaimanakah kedatangan kuasa Barat (Portugis, Belanda, Inggeris) mengubah landskap peradaban di Alam Melayu berbanding pengaruh peradaban Asia sebelumnya?",
      options: [
        {
          id: "a",
          text: "Mereka hanya menumpukan kepada aktiviti perdagangan tanpa sebarang campur tangan politik.",
        },
        {
          id: "b",
          text: "Mereka memperkenalkan sistem pentadbiran moden, perundangan sekular, dan membawa implikasi besar kepada struktur pemerintahan.",
        },
        {
          id: "c",
          text: "Mereka mengasimilasi sepenuhnya dengan budaya tempatan dan memeluk agama Islam.",
        },
        {
          id: "d",
          text: "Pengaruh mereka hanya terhad di pelabuhan Melaka dan tidak memberi kesan kepada negeri-negeri lain.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Tidak seperti pengaruh peradaban Asia (India, China, Timur Tengah) yang lebih tertumpu kepada budaya, agama, dan perdagangan, kedatangan kuasa Barat membawa perubahan struktur yang fundamental. Mereka bukan sahaja berdagang tetapi menjajah, memperkenalkan sistem pentadbiran dan perundangan mereka yang memisahkan agama dari negara, dan mengubah sistem politik tempatan secara menyeluruh.",
        incorrect: {
          a: "Kuasa Barat datang dengan tujuan penjajahan, bukan sekadar berdagang.",
          c: "Mereka sebaliknya cuba menyebarkan budaya dan agama mereka sendiri.",
          d: "Pengaruh Inggeris, khususnya, telah meluas ke seluruh Semenanjung Tanah Melayu, Sabah, dan Sarawak.",
        },
      },
    },
    {
      id: "subject-q37",
      text: "Apakah yang dimaksudkan dengan 'tanggungjawab sosial' dari perspektif etika?",
      options: [
        {
          id: "a",
          text: "Kewajipan untuk mematuhi semua peraturan dan undang-undang yang ditetapkan oleh kerajaan.",
        },
        {
          id: "b",
          text: "Satu refleksi dalaman individu mengenai keadilan dan kebaikan, yang mendorong tindakan untuk kesejahteraan masyarakat.",
        },
        {
          id: "c",
          text: "Usaha untuk memaksimumkan keuntungan peribadi tanpa mengambil kira kesan kepada orang lain.",
        },
        {
          id: "d",
          text: "Amalan memberi sumbangan kepada badan amal semata-mata untuk mendapatkan publisiti.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Tanggungjawab sosial yang tulen lahir daripada kesedaran etika dalaman seseorang. Ia melibatkan keupayaan untuk memikirkan isu-isu seperti keadilan dan kebaikan, dan rasa terpanggil untuk bertindak demi manfaat masyarakat yang lebih besar, melangkaui kepentingan diri sendiri.",
        incorrect: {
          a: "Ini lebih kepada pematuhan undang-undang; tanggungjawab sosial adakalanya menuntut kita untuk mempersoalkan undang-undang yang tidak adil.",
          c: "Ini adalah sikap yang bertentangan dengan tanggungjawab sosial.",
          d: "Jika motivasinya adalah publisiti, ia bukanlah tanggungjawab sosial yang didorong oleh etika yang murni.",
        },
      },
    },
    {
      id: "subject-q38",
      text: "Pilih kombinasi yang paling TEPAT mengenai sumbangan peradaban kepada Alam Melayu.\nI. India: Konsep 'Raja' dan sistem pemerintahan.\nII. China: Komuniti Baba & Nyonya dan serapan perkataan.\nIII. Timur Tengah: Sistem tulisan Jawi dan ajaran Islam.\nIV. Barat: Sistem pentadbiran sekular dan tulisan Rumi.",
      options: [
        {
          id: "a",
          text: "I dan III sahaja",
        },
        {
          id: "b",
          text: "II dan IV sahaja",
        },
        {
          id: "c",
          text: "I, II, dan III sahaja",
        },
        {
          id: "d",
          text: "Semua di atas",
        },
      ],
      correctOptionId: "d",
      explanation: {
        correct:
          "Semua padanan tersebut adalah tepat dan mencerminkan pengaruh-pengaruh utama daripada setiap peradaban besar yang telah berinteraksi dengan Alam Melayu sepanjang sejarah.",
        incorrect: {
          a: "Pilihan ini tidak lengkap kerana II dan IV juga betul.",
          b: "Pilihan ini tidak lengkap kerana I dan III juga betul.",
          c: "Pilihan ini tidak lengkap kerana IV juga betul.",
        },
      },
    },
    {
      id: "subject-q39",
      text: "Apakah perbezaan utama antara falsafah pemikiran tradisional dan moden yang dibincangkan dalam nota?",
      options: [
        {
          id: "a",
          text: "Tradisional menekankan ilmu agama, manakala moden menekankan ilmu sains.",
        },
        {
          id: "b",
          text: "Tradisional menetapkan matlamat hidup, manakala moden memberi kebebasan individu untuk menentukannya.",
        },
        {
          id: "c",
          text: "Tradisional berasal dari Timur, manakala moden berasal dari Barat.",
        },
        {
          id: "d",
          text: "Tradisional menolak kemajuan, manakala moden menerimanya.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Perbezaan fundamentalnya adalah pada autoriti penentuan matlamat hidup. Dalam pemikiran tradisional, matlamat hidup (lazimnya berkaitan dengan agama atau tradisi) telah ditetapkan. Dalam pemikiran moden yang dipengaruhi oleh Pencerahan, individu diberi hak dan kebebasan untuk menentukan sendiri matlamat hidup mereka.",
        incorrect: {
          a: "Walaupun ada penekanan yang berbeza, kedua-dua pemikiran ini tidak saling menafikan kepentingan kedua-dua ilmu tersebut.",
          c: "Walaupun pemikiran moden yang dibincangkan banyak dipengaruhi Barat, ia bukan satu-satunya sumber, dan pemikiran tradisional juga wujud di Barat.",
          d: "Pemikiran tradisional tidak semestinya menolak kemajuan, tetapi kemajuan itu dinilai berdasarkan kerangka nilai yang telah ditetapkan.",
        },
      },
    },
    {
      id: "subject-q40",
      text: "DEB dikatakan telah menjadi 'pemangkin Shared Poverty tetapi gagal membawa Shared Prosperity'. Apakah maksud pernyataan ini?",
      options: [
        {
          id: "a",
          text: "DEB berjaya mengurangkan kemiskinan tetapi gagal memastikan pengagihan kekayaan negara secara adil.",
        },
        {
          id: "b",
          text: "DEB telah menyebabkan semua rakyat Malaysia menjadi miskin secara bersama.",
        },
        {
          id: "c",
          text: "DEB gagal dalam kedua-dua matlamatnya untuk membasmi kemiskinan dan menyusun semula masyarakat.",
        },
        {
          id: "d",
          text: "DEB hanya berjaya untuk golongan Bumiputera tetapi gagal untuk kaum-kaum lain.",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Pernyataan ini adalah satu kritikan yang bermaksud DEB berjaya mengurangkan kadar kemiskinan mutlak ('shared poverty' atau kemiskinan bersama semakin berkurang). Namun, ia gagal mewujudkan 'shared prosperity' (kemakmuran bersama) kerana jurang pengagihan kekayaan masih melebar, di mana kekayaan lebih tertumpu kepada segelintir golongan elit.",
        incorrect: {
          a: "DEB secara statistiknya berjaya mengurangkan kadar kemiskinan secara drastik.",
          c: "Walaupun matlamat penyusunan semula masyarakat tidak tercapai sepenuhnya, matlamat pembasmian kemiskinan menunjukkan kejayaan yang signifikan.",
          d: "DEB bertujuan untuk membasmi kemiskinan tanpa mengira kaum, dan data menunjukkan kadar kemiskinan menurun bagi semua kaum.",
        },
      },
    },
    {
      id: "subject-q41",
      text: "Apakah peranan utama Jawatankuasa Kerja yang ditubuhkan pada Julai 1946 selepas pembubaran Malayan Union?",
      options: [
        {
          id: "a",
          text: "Untuk merangka sebuah perlembagaan baharu yang boleh diterima oleh orang Melayu.",
        },
        {
          id: "b",
          text: "Untuk mendapatkan pandangan orang bukan Melayu mengenai perlembagaan baharu.",
        },
        {
          id: "c",
          text: "Untuk menubuhkan Parti Perikatan sebagai gabungan parti-parti politik.",
        },
        {
          id: "d",
          text: "Untuk memulakan rundingan kemerdekaan dengan kerajaan British di London.",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Selepas Malayan Union ditentang dan dibatalkan, Jawatankuasa Kerja yang terdiri daripada wakil British, Raja-Raja Melayu, dan UMNO telah ditubuhkan dengan tugas utama untuk merangka draf Perjanjian Persekutuan Tanah Melayu 1948, yang menjadi asas kepada pentadbiran negara sehingga merdeka.",
        incorrect: {
          b: "Tugas ini dijalankan oleh Jawatankuasa Perundingan yang ditubuhkan kemudian untuk melengkapkan kerja-kerja Jawatankuasa Kerja.",
          c: "Parti Perikatan ditubuhkan kemudian sebagai satu inisiatif politik, bukan oleh jawatankuasa ini.",
          d: "Rundingan kemerdekaan berlaku jauh lebih lewat, selepas Pilihan Raya 1955.",
        },
      },
    },
    {
      id: "subject-q42",
      text: "Bagaimanakah kedai mamak dan 'street wedding' boleh dianggap sebagai 'tapak integrasi' peringkat mikro?",
      options: [
        {
          id: "a",
          text: "Kerana ia adalah ruang yang ditetapkan oleh kerajaan untuk pergaulan antara kaum.",
        },
        {
          id: "b",
          text: "Kerana ia diuruskan oleh NGO antarabangsa untuk mempromosikan perpaduan.",
        },
        {
          id: "c",
          text: "Kerana ia adalah ruang sosial tidak formal di mana interaksi dan pergaulan merentasi etnik berlaku secara semula jadi.",
        },
        {
          id: "d",
          text: "Kerana ia termaktub dalam perlembagaan sebagai aktiviti rasmi negara.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Tapak integrasi peringkat mikro adalah ruang di mana rakyat biasa berinteraksi dalam kehidupan seharian mereka. Kedai mamak dan kenduri kahwin di kawasan perumahan adalah contoh terbaik di mana orang dari pelbagai latar belakang bertemu, bergaul, dan membina hubungan secara organik tanpa sebarang arahan rasmi.",
        incorrect: {
          a: "Ini adalah inisiatif akar umbi (bottom-up), bukan arahan kerajaan (top-down).",
          b: "Ini adalah inisiatif tempatan, bukan diuruskan oleh NGO antarabangsa.",
          d: "Aktiviti ini tidak disebut dalam Perlembagaan.",
        },
      },
    },
    {
      id: "subject-q43",
      text: "Perlembagaan Persekutuan adalah undang-undang tertinggi negara. Apakah implikasi Perkara 4(1) yang menyatakan prinsip ini?",
      options: [
        {
          id: "a",
          text: "Parlimen boleh membuat sebarang undang-undang walaupun ia bercanggah dengan Perlembagaan.",
        },
        {
          id: "b",
          text: "Mana-mana undang-undang yang diluluskan selepas Hari Merdeka yang bercanggah dengan Perlembagaan adalah tidak sah.",
        },
        {
          id: "c",
          text: "Perlembagaan boleh dipinda dengan mudah melalui undian majoriti mudah di Parlimen.",
        },
        {
          id: "d",
          text: "Kuasa badan kehakiman adalah lebih tinggi daripada Perlembagaan itu sendiri.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Perkara 4(1) menegaskan prinsip keluhuran Perlembagaan. Ini bermakna Perlembagaan adalah sumber undang-undang yang agung dan mana-mana undang-undang yang dibuat oleh Parlimen atau badan lain, jika didapati bercanggah dengan mana-mana peruntukan Perlembagaan, akan terbatal setakat mana ia bercanggah.",
        incorrect: {
          a: "Ini bertentangan dengan prinsip keluhuran Perlembagaan.",
          c: "Pindaan kepada Perlembagaan memerlukan prosedur yang ketat, lazimnya majoriti dua pertiga.",
          d: "Badan kehakiman adalah penjaga Perlembagaan; kuasanya adalah untuk mentafsir dan menguatkuasakan Perlembagaan, bukan mengatasinya.",
        },
      },
    },
    {
      id: "subject-q44",
      text: "Apakah yang dimaksudkan dengan 'transformasi sosial' yang berlaku di Malaysia pasca-DEB?",
      options: [
        {
          id: "a",
          text: "Peralihan daripada masyarakat majoriti kelas menengah kepada masyarakat miskin.",
        },
        {
          id: "b",
          text: "Peralihan daripada pekerjaan komersial-industri kepada pekerjaan sara diri bertani.",
        },
        {
          id: "c",
          text: "Peralihan daripada kehidupan kosmopolitan di bandar kepada kehidupan tradisional di kampung.",
        },
        {
          id: "d",
          text: "Peralihan daripada masyarakat miskin kepada kemunculan kelas menengah dan gaya hidup kosmopolitan.",
        },
      ],
      correctOptionId: "d",
      explanation: {
        correct:
          "Dasar-dasar pembangunan selepas 1970 telah membawa perubahan sosial yang besar. Antaranya ialah peralihan ekonomi daripada pertanian kepada industri, penghijrahan ke bandar, dan yang paling penting, kejayaan mengurangkan kemiskinan yang melahirkan satu golongan kelas menengah baharu yang signifikan serta gaya hidup yang lebih kosmopolitan.",
        incorrect: {
          a: "Pernyataan ini terbalik.",
          b: "Pernyataan ini terbalik.",
          c: "Pernyataan ini terbalik.",
        },
      },
    },
    {
      id: "subject-q45",
      text: "Apakah cabaran utama dalam perkongsian pengalaman etika dan peradaban Malaysia di peringkat sejagat?",
      options: [
        {
          id: "a",
          text: "Menunjukkan bahawa pembangunan ekonomi yang tinggi sahaja sudah cukup untuk menjamin kestabilan negara.",
        },
        {
          id: "b",
          text: "Meyakinkan dunia bahawa model Malaysia yang menekankan keadilan dalam pengagihan kekayaan adalah penting untuk keharmonian.",
        },
        {
          id: "c",
          text: "Membuktikan bahawa sistem pemerintahan satu parti adalah yang terbaik untuk mengurus kepelbagaian.",
        },
        {
          id: "d",
          text: "Menunjukkan bahawa konflik etnik dan agama tidak pernah berlaku dalam sejarah Malaysia.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Pengalaman Malaysia menunjukkan bahawa pertumbuhan ekonomi yang tinggi tidak akan menjamin keamanan jika pengagihan kekayaan tidak adil dan kesejahteraan rakyat terabai. Mesej utama yang boleh dikongsi ialah kepentingan keadilan sosial dan keterangkuman sebagai formula untuk kestabilan dalam masyarakat majmuk.",
        incorrect: {
          a: "Pengalaman Malaysia (cth: 13 Mei) menunjukkan sebaliknya, iaitu pertumbuhan ekonomi tanpa pengagihan yang adil adalah berbahaya.",
          c: "Malaysia mengamalkan sistem demokrasi berbilang parti.",
          d: "Menafikan sejarah konflik adalah tidak jujur; kekuatan Malaysia adalah pada keupayaan untuk mengurus konflik tersebut.",
        },
      },
    },
    {
      id: "subject-q46",
      text: "Dalam konteks sejarah, apakah yang dimaksudkan dengan 'Indianization' di Alam Melayu?",
      options: [
        {
          id: "a",
          text: "Proses penaklukan ketenteraan seluruh Alam Melayu oleh empayar-empayar dari India.",
        },
        {
          id: "b",
          text: "Proses penghijrahan besar-besaran orang India untuk bekerja di sektor perladangan.",
        },
        {
          id: "c",
          text: "Proses penyerapan pengaruh budaya, agama (Hindu-Buddha), dan sistem pemerintahan dari India secara aman.",
        },
        {
          id: "d",
          text: "Proses pertukaran teknologi pembuatan senjata antara kerajaan Alam Melayu dan India.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "'Indianization' merujuk kepada proses damai di mana unsur-unsur peradaban India seperti agama Hindu-Buddha, bahasa Sanskrit, kesusasteraan, dan konsep pemerintahan (devaraja) diserap dan diadaptasi oleh masyarakat dan kerajaan-kerajaan awal di Asia Tenggara, termasuk Alam Melayu.",
        incorrect: {
          a: "Hubungan ini majoritinya berbentuk perdagangan dan kebudayaan, bukan penaklukan ketenteraan (kecuali beberapa siri serangan terpencil).",
          b: "Ini berlaku jauh lebih kemudian, iaitu semasa zaman penjajahan British.",
          d: "Walaupun mungkin berlaku, pengaruh utama adalah dalam bidang budaya dan pemerintahan.",
        },
      },
    },
    {
      id: "subject-q47",
      text: "Bagaimanakah kewarganegaraan seseorang boleh dilucutkan menurut Perlembagaan Persekutuan?",
      options: [
        {
          id: "a",
          text: "Apabila seseorang mengkritik dasar-dasar kerajaan secara terbuka.",
        },
        {
          id: "b",
          text: "Apabila seseorang telah menunjukkan sikap tidak taat setia kepada negara.",
        },
        {
          id: "c",
          text: "Apabila seseorang tinggal di luar negara melebihi tempoh lima tahun.",
        },
        {
          id: "d",
          text: "Apabila seseorang gagal untuk mengundi dalam dua pilihan raya umum berturut-turut.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Perlembagaan memperuntukkan bahawa kerajaan boleh melucutkan kewarganegaraan seseorang (yang bukan warganegara melalui kuatkuasa undang-undang) jika orang itu didapati tidak lagi taat setia kepada negara, contohnya dengan menderhaka atau berkhidmat untuk negara musuh.",
        incorrect: {
          a: "Mengkritik kerajaan adalah sebahagian daripada hak kebebasan bersuara dalam negara demokrasi dan bukan alasan untuk melucutkan kewarganegaraan.",
          c: "Tinggal di luar negara sahaja tidak mencukupi sebagai alasan, melainkan jika ia disertakan dengan tindakan tidak taat setia.",
          d: "Mengundi adalah satu hak, bukan satu kewajipan yang kegagalannya boleh menyebabkan kelucutan warganegara.",
        },
      },
    },
    {
      id: "subject-q48",
      text: "Kerajaan-kerajaan awal di Alam Melayu seperti Srivijaya dan Majapahit digolongkan dalam zaman sejarah yang mana?",
      options: [
        {
          id: "a",
          text: "Zaman Pra Sejarah",
        },
        {
          id: "b",
          text: "Zaman Proto Sejarah",
        },
        {
          id: "c",
          text: "Zaman Pensejarahan",
        },
        {
          id: "d",
          text: "Zaman Sejarah Moden",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Zaman Pensejarahan ditandai dengan kewujudan rekod-rekod bertulis yang lebih jelas dan sistem pemerintahan yang kompleks. Kewujudan empayar besar seperti Srivijaya, Majapahit, dan kemudiannya Kesultanan Melaka adalah kemuncak kepada zaman ini sebelum kedatangan kuasa kolonial.",
        incorrect: {
          a: "Zaman Pra Sejarah adalah era sebelum wujudnya sebarang rekod bertulis.",
          b: "Zaman Proto Sejarah adalah era kerajaan-kerajaan awal seperti Langkasuka yang kewujudannya diketahui melalui sumber-sumber luar (cth: rekod China) tetapi rekod dalamannya terhad.",
          d: "Zaman Sejarah Moden merujuk kepada era selepas kemerdekaan.",
        },
      },
    },
    {
      id: "subject-q49",
      text: "Pilih pernyataan yang paling tepat mengenai 'detik perpaduan'.",
      options: [
        {
          id: "a",
          text: "Ia adalah satu dasar rasmi yang dirancang oleh kerajaan untuk menyatukan rakyat.",
        },
        {
          id: "b",
          text: "Ia merujuk kepada saat-saat formal seperti sambutan Hari Kemerdekaan peringkat kebangsaan.",
        },
        {
          id: "c",
          text: "Ia adalah momen tidak formal dalam kehidupan seharian di mana rakyat bersatu melangkaui batas etnik.",
        },
        {
          id: "d",
          text: "Ia hanya berlaku dalam kalangan ahli-ahli politik daripada parti yang sama.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Konsep 'detik perpaduan' merujuk kepada momen-momen spontan dan tidak formal dalam kehidupan seharian—seperti ketika menyokong pasukan sukan negara, menikmati makanan di kedai mamak, atau membantu mangsa bencana—di mana identiti bersama sebagai rakyat Malaysia mengatasi perbezaan kaum, agama atau politik.",
        incorrect: {
          a: "Ia bersifat organik dan lahir dari masyarakat, bukan dasar rasmi.",
          b: "Walaupun majlis rasmi boleh memupuk semangat patriotisme, 'detik perpaduan' lebih merujuk kepada interaksi harian yang tidak formal.",
          d: "Ia adalah fenomena yang berlaku dalam kalangan rakyat biasa, bukan terhad kepada ahli politik.",
        },
      },
    },
    {
      id: "subject-q50",
      text: "Pilih kombinasi yang paling tepat antara zaman dalam susur masa sejarah Alam Melayu dan ciri utamanya.\nI. Zaman Pra Sejarah - Kehidupan nomad dan penggunaan alatan batu asas.\nII. Zaman Proto Sejarah - Kemunculan kerajaan purba seperti Gangga Negara.\nIII. Zaman Pensejarahan - Penubuhan Kesultanan Melayu Melaka.\nIV. Zaman Sejarah Moden - Pembinaan negara-bangsa Malaysia.",
      options: [
        {
          id: "a",
          text: "I dan III sahaja",
        },
        {
          id: "b",
          text: "II dan IV sahaja",
        },
        {
          id: "c",
          text: "I, II, dan III sahaja",
        },
        {
          id: "d",
          text: "Semua di atas",
        },
      ],
      correctOptionId: "d",
      explanation: {
        correct:
          "Semua padanan adalah tepat mengikut pembahagian zaman yang dinyatakan dalam nota. I (Pra Sejarah) adalah era sebelum rekod bertulis, II (Proto Sejarah) adalah era kerajaan awal sebelum pensejarahan terperinci, III (Pensejarahan) ditandai dengan kewujudan Kesultanan Melaka yang mempunyai rekod yang jelas, dan IV (Sejarah Moden) adalah era selepas kemerdekaan.",
        incorrect: {
          a: "Kombinasi ini tidak lengkap kerana II dan IV juga betul.",
          b: "Kombinasi ini tidak lengkap kerana I dan III juga betul.",
          c: "Kombinasi ini tidak lengkap kerana IV juga betul.",
        },
      },
    },
  ],
};
