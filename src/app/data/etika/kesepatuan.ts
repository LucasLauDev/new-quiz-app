import { Quiz } from "@/app/types/quiz";

export const kesepatuan: Quiz = {
  id: "kesepatuan-national",
  categoryId: "etika",
  subcategoryId: "topik-4",
  title: "Kesepatuan Nasional",
  questions: [
    {
      id: "kesepaduan-q1",
      text: "Bagaimanakah ketiga-tiga konsep teras—perpaduan, kesepaduan, dan penyatupaduan—saling berkaitan dalam proses pembinaan negara Malaysia?",
      options: [
        {
          id: "a",
          text: "Perpaduan adalah proses yang menghasilkan kesepaduan sebagai matlamat akhir, manakala penyatupaduan adalah keadaan semasa.",
        },
        {
          id: "b",
          text: "Kesepaduan adalah keadaan semasa yang stabil, yang sentiasa dipertingkatkan melalui proses penyatupaduan untuk mencapai matlamat ideal, iaitu perpaduan.",
        },
        {
          id: "c",
          text: "Penyatupaduan adalah matlamat yang dicapai apabila kesepaduan (proses) dan perpaduan (keadaan semasa) berjaya dilaksanakan.",
        },
        {
          id: "d",
          text: "Kesepaduan adalah matlamat akhir yang diidamkan, dicapai melalui perpaduan (proses) dan diukur melalui penyatupaduan.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Ini adalah urutan dan hubungan yang tepat. Kesepaduan ialah realiti sosial semasa yang stabil (tahap dicapai), penyatupaduan ialah usaha dan proses berterusan untuk merapatkan jurang (proses diusaha), dan perpaduan ialah wawasan atau matlamat akhir yang ideal (matlamat diidamkan).",
        incorrect: {
          a: "Urutan dan definisi konsep ini terbalik dan salah.",
          c: "Urutan dan definisi konsep ini bercelaru dan tidak tepat.",
          d: "Definisi setiap konsep dalam pilihan ini adalah tidak tepat menurut kerangka yang dibentangkan.",
        },
      },
    },
    {
      id: "kesepaduan-q2",
      text: "Apakah perbezaan paling asas antara konsep 'Detik Perpaduan' dengan 'Perpaduan' sebagai matlamat akhir?",
      options: [
        {
          id: "a",
          text: "'Detik Perpaduan' berlaku secara tidak dirancang manakala 'Perpaduan' adalah hasil perancangan kerajaan sepenuhnya.",
        },
        {
          id: "b",
          text: "'Detik Perpaduan' bersifat sementara dan berlaku dalam situasi tertentu, manakala 'Perpaduan' adalah keadaan kesatuan utuh yang berkekalan.",
        },
        {
          id: "c",
          text: "'Detik Perpaduan' hanya melibatkan interaksi sosial, manakala 'Perpaduan' merangkumi aspek politik dan ekonomi sahaja.",
        },
        {
          id: "d",
          text: "'Detik Perpaduan' adalah fenomena di peringkat akar umbi, manakala 'Perpaduan' adalah konsep di peringkat elit semata-mata.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Ini perbezaan utamanya. 'Detik Perpaduan' (cth: sorakan di stadium) adalah manifestasi perpaduan yang bersifat sementara dan kontekstual. Sebaliknya, 'Perpaduan' ialah matlamat ideal sebuah masyarakat yang bersatu padu secara menyeluruh dan berkekalan.",
        incorrect: {
          a: "'Detik Perpaduan' boleh berlaku secara spontan atau melalui acara terancang (cth: sambutan hari kebangsaan), dan 'Perpaduan' adalah aspirasi seluruh masyarakat, bukan hanya kerajaan.",
          c: "Kedua-dua konsep merangkumi semua aspek kehidupan bermasyarakat, bukan terhad kepada domain tertentu.",
          d: "Kedua-dua fenomena ini wujud dan relevan di semua lapisan masyarakat, bukan terhad kepada akar umbi atau elit sahaja.",
        },
      },
    },
    {
      id: "kesepaduan-q3",
      text: "Manakah antara berikut paling tepat menghuraikan 'defisit sosial' dalam konteks kesepaduan nasional Malaysia?",
      options: [
        {
          id: "a",
          text: "Jurang perbezaan fahaman dan interaksi sosial yang wujud dalam kalangan masyarakat meskipun negara secara umumnya aman dan stabil.",
        },
        {
          id: "b",
          text: "Kekurangan peruntukan kewangan daripada kerajaan untuk melaksanakan program-program sosial di peringkat komuniti.",
        },
        {
          id: "c",
          text: "Penurunan nilai moral dan etika dalam kalangan generasi muda akibat pengaruh teknologi moden.",
        },
        {
          id: "d",
          text: "Ketidakseimbangan pembangunan ekonomi yang ketara antara kawasan bandar dan luar bandar.",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Ini adalah definisi yang tepat. 'Defisit sosial' merujuk kepada jurang atau isu-isu yang masih wujud dalam hubungan sosial (cth: etnisiti, bahasa, agama) walaupun negara berada dalam keadaan kesepaduan (aman dan stabil).",
        incorrect: {
          b: "Ini merujuk kepada defisit bajet atau kewangan, bukan defisit sosial.",
          c: "Ini adalah satu isu sosial, tetapi 'defisit sosial' dalam konteks ini lebih spesifik merujuk kepada jurang antara kelompok dalam masyarakat.",
          d: "Ini adalah satu contoh spesifik 'defisit sosial' dari segi ekonomi, tetapi definisi di A adalah lebih menyeluruh dan tepat.",
        },
      },
    },
    {
      id: "kesepaduan-q4",
      text: "Apakah fungsi utama 'Tapak Integrasi' (Integration Platform) dalam sejarah awal pembinaan negara?",
      options: [
        {
          id: "a",
          text: "Menjadi kawasan penempatan khas untuk menyatukan pelbagai kaum di bawah satu bumbung.",
        },
        {
          id: "b",
          text: "Menjadi ruang fizikal dan institusi di mana elit pelbagai kaum boleh bertemu, berunding, dan mencari kata sepakat.",
        },
        {
          id: "c",
          text: "Menjadi platform media yang dikawal oleh kerajaan untuk menyebarkan ideologi kesatuan.",
        },
        {
          id: "d",
          text: "Menjadi dasar pendidikan tunggal untuk menghapuskan semua sekolah aliran vernakular.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Ini adalah fungsi utamanya. 'Tapak Integrasi' seperti CLC (1949), Pilihan Raya (1952, 1955), dan Perlembagaan (1957) menyediakan ruang dan kerangka untuk para pemimpin berinteraksi dan membina asas kerjasama negara.",
        incorrect: {
          a: "Ini bercanggah dengan realiti sejarah di mana kaum-kaum agak terpisah dari segi penempatan.",
          c: "Konsep ini wujud sebelum media dikawal secara meluas untuk tujuan tersebut.",
          d: "Dasar pendidikan kebangsaan berkembang secara berperingkat dan tidak menghapuskan sekolah vernakular sepenuhnya.",
        },
      },
    },
    {
      id: "kesepaduan-q5",
      text: "Mengapakah peristiwa 13 Mei 1969 dianggap sebagai titik tolak yang 'memecahberaikan kesatuan' dan mengubah wacana negara?",
      options: [
        {
          id: "a",
          text: "Kerana ia menyebabkan British campur tangan semula dalam pentadbiran negara.",
        },
        {
          id: "b",
          text: "Kerana ia membuktikan bahawa model kesatuan berasaskan pentadbiran sahaja tidak mencukupi untuk mengurus hubungan sosial yang kompleks.",
        },
        {
          id: "c",
          text: "Kerana ia membawa kepada pembubaran Parlimen dan sistem demokrasi secara kekal.",
        },
        {
          id: "d",
          text: "Kerana ia menyebabkan pemisahan Singapura daripada Persekutuan Malaysia.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Tragedi ini menyerlahkan kelemahan model 'kesatuan' yang lebih tertumpu pada kerangka politik dan pentadbiran. Ia menunjukkan bahawa isu-isu sosio-ekonomi dan hubungan antara kaum yang mendalam perlu ditangani, lantas membawa kepada peralihan kepada konsep 'perpaduan'.",
        incorrect: {
          a: "British tidak campur tangan semula; negara diuruskan oleh Majlis Gerakan Negara (MAGERAN).",
          c: "Parlimen digantung sementara, bukan dibubarkan secara kekal. Demokrasi dipulihkan pada tahun 1971.",
          d: "Singapura berpisah daripada Malaysia pada tahun 1965, sebelum peristiwa ini.",
        },
      },
    },
    {
      id: "kesepaduan-q6",
      text: "Apakah matlamat utama pengenalan istilah 'Perpaduan' dalam Rancangan Malaysia Kedua (RMK-2) pada tahun 1971?",
      options: [
        {
          id: "a",
          text: "Untuk memberi tumpuan kepada usaha penyatuan sosial dan penyusunan semula masyarakat bagi mengurangkan jurang ekonomi antara kaum.",
        },
        {
          id: "b",
          text: "Untuk menggantikan sepenuhnya peranan Rukun Negara sebagai ideologi kebangsaan.",
        },
        {
          id: "c",
          text: "Untuk mempromosikan satu jenis budaya tunggal dan menghapuskan kepelbagaian budaya.",
        },
        {
          id: "d",
          text: "Untuk mempercepatkan proses perindustrian negara dengan menarik pelaburan asing.",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "RMK-2, bersama Dasar Ekonomi Baru (DEB), secara eksplisit menggunakan istilah 'perpaduan' untuk memberi isyarat peralihan fokus negara kepada penyatuan sosial dan pembahagian pendapatan yang lebih saksama sebagai teras utama pembangunan negara selepas 1969.",
        incorrect: {
          b: "RMK-2 dan Rukun Negara saling melengkapi; Rukun Negara menyediakan kerangka falsafah, manakala RMK-2 menyediakan pelan tindakan sosio-ekonomi.",
          c: "Falsafah yang diguna pakai ialah 'Perpaduan dalam Kepelbagaian', yang mengiktiraf, bukan menghapus, kepelbagaian.",
          d: "Walaupun perindustrian penting, matlamat serampang dua mata DEB (pembasmian kemiskinan dan penyusunan semula masyarakat) adalah ciri unik RMK-2.",
        },
      },
    },
    {
      id: "kesepaduan-q7",
      text: "Manakah antara berikut BUKAN alat penyatupaduan yang diamalkan di Malaysia?",
      options: [
        { id: "a", text: "Tawar-menawar (Bargaining)" },
        { id: "b", text: "Perundingan (Negotiation)" },
        { id: "c", text: "Pengantaraan (Mediation)" },
        { id: "d", text: "Asimilasi (Assimilation)" },
      ],
      correctOptionId: "d",
      explanation: {
        correct:
          "Asimilasi, iaitu proses di mana kumpulan minoriti kehilangan identiti asal dan diserap sepenuhnya ke dalam budaya dominan, bukanlah model yang diguna pakai secara rasmi di Malaysia. Model Malaysia lebih kepada integrasi dan akomodasi.",
        incorrect: {
          a: "Nota secara jelas menyatakan bahawa proses penyatupaduan di Malaysia berprinsipkan tawar-menawar.",
          b: "Nota secara jelas menyatakan bahawa proses penyatupaduan di Malaysia berprinsipkan perundingan.",
          c: "Nota secara jelas menyatakan bahawa proses penyatupaduan di Malaysia berprinsipkan mediasi.",
        },
      },
    },
    {
      id: "kesepaduan-q8",
      text: "Apakah tujuan utama Indeks Perpaduan Nasional (IPNas) 2018 diwujudkan?",
      options: [
        {
          id: "a",
          text: "Untuk memberi markah kepada setiap kaum di Malaysia berdasarkan tahap perpaduan mereka.",
        },
        {
          id: "b",
          text: "Untuk menyediakan satu ukuran empirikal dan objektif bagi memantau tahap kesepaduan nasional dari semasa ke semasa.",
        },
        {
          id: "c",
          text: "Untuk menggantikan bancian penduduk nasional sebagai sumber data utama kerajaan.",
        },
        {
          id: "d",
          text: "Untuk menghukum parti-parti politik yang memainkan isu perkauman.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Sebelum IPNas, ukuran perpaduan lebih bersifat anekdot atau populis. IPNas adalah usaha pertama yang serius dan berskala besar untuk mengukur tahap perpaduan secara saintifik dan objektif, membolehkan pemantauan yang lebih baik.",
        incorrect: {
          a: "IPNas mengukur tahap perpaduan secara keseluruhan, bukan memberi markah kepada kaum tertentu.",
          c: "IPNas adalah satu kajian khusus dan tidak menggantikan fungsi bancian penduduk yang lebih luas.",
          d: "IPNas adalah alat kajian dan pemantauan, bukan badan penguatkuasaan atau kehakiman.",
        },
      },
    },
    {
      id: "kesepaduan-q9",
      text: "Apakah yang dimaksudkan dengan 'Etos Nasional'?",
      options: [
        {
          id: "a",
          text: "Undang-undang tertinggi negara yang termaktub dalam Perlembagaan Persekutuan.",
        },
        {
          id: "b",
          text: "Ciri-ciri unik, nilai bersama, dan semangat kebangsaan yang dikongsi oleh warganegara Malaysia.",
        },
        {
          id: "c",
          text: "Dasar ekonomi kerajaan yang bertujuan untuk mencapai pembangunan mampan.",
        },
        {
          id: "d",
          text: "Satu set protokol rasmi yang perlu dipatuhi semasa majlis-majlis kenegaraan.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Etos Nasional merujuk kepada himpunan nilai, kepercayaan, dan semangat yang menjadi identiti kolektif sesebuah bangsa. Ia terjelma dalam Rukun Negara, Perlembagaan, dan amalan harian yang mencerminkan kebersamaan.",
        incorrect: {
          a: "Ini merujuk kepada Perlembagaan, manakala etos adalah semangat atau nilai di sebaliknya.",
          c: "Ini merujuk kepada dasar ekonomi, bukan semangat kebangsaan.",
          d: "Ini merujuk kepada etiket atau protokol, satu konsep yang lebih sempit.",
        },
      },
    },
    {
      id: "kesepaduan-q10",
      text: "Peristiwa sejarah manakah yang dianggap sebagai 'mercu KESATUAN' bagi Persekutuan Tanah Melayu?",
      options: [
        { id: "a", text: "Penubuhan Malayan Union 1946" },
        { id: "b", text: "Kemerdekaan Persekutuan Tanah Melayu 1957" },
        { id: "c", text: "Pembentukan Malaysia 1963" },
        { id: "d", text: "Pengenalan Rancangan Malaysia Kedua 1971" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota secara spesifik menyatakan 'Kemerdekaan 1957, mercu KESATUAN'. Ia menandakan titik kemuncak penyatuan negeri-negeri di bawah satu negara bangsa yang berdaulat.",
        incorrect: {
          a: "Malayan Union ditentang dan dilihat sebagai langkah yang mengancam, bukan mercu kesatuan.",
          c: "Pembentukan Malaysia dilihat sebagai proses 'meluaskan KESATUAN', bukan mercu tanda awal bagi Tanah Melayu.",
          d: "RMK-2 menandakan permulaan era 'Perpaduan', bukan 'Kesatuan'.",
        },
      },
    },
    {
      id: "kesepaduan-q11",
      text: "Antara berikut, yang manakah contoh terbaik yang menggambarkan kesepaduan sosial dalam aspek politik?",
      options: [
        {
          id: "a",
          text: "Masyarakat pelbagai kaum bersama-sama meraikan perayaan Hari Raya Aidilfitri.",
        },
        {
          id: "b",
          text: "Pembentukan kerajaan campuran seperti Pakatan Harapan atau kerjasama politik seperti Muafakat Nasional.",
        },
        {
          id: "c",
          text: "Penggunaan Bahasa Melayu sebagai bahasa perantaraan di sebuah sekolah kebangsaan.",
        },
        {
          id: "d",
          text: "Kejayaan sebuah restoran yang diusahakan bersama oleh rakan kongsi berlainan etnik.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Kerjasama dan pembentukan pakatan antara parti politik yang berbeza ideologi atau latar belakang kaum adalah manifestasi jelas kesepaduan dalam arena politik, di mana perbezaan diurus melalui perundingan untuk mencapai matlamat bersama.",
        incorrect: {
          a: "Ini adalah contoh kesepaduan dalam aspek sosial-budaya atau agama.",
          c: "Ini adalah contoh kesepaduan dalam aspek bahasa.",
          d: "Ini adalah contoh kesepaduan dalam aspek ekonomi atau etnisiti.",
        },
      },
    },
    {
      id: "kesepaduan-q12",
      text: "Mengapakah analogi 'jigsaw puzzle' digunakan untuk menggambarkan pembentukan Malaysia?",
      options: [
        {
          id: "a",
          text: "Kerana proses pembentukannya sangat rumit dan mengelirukan seperti menyelesaikan teka-teki.",
        },
        {
          id: "b",
          text: "Kerana ia menggambarkan bagaimana negeri-negeri yang dahulunya terikat kepada pusat kuasa berbeza (Siam, Belanda, Britain) disatukan menjadi satu entiti.",
        },
        {
          id: "c",
          text: "Kerana setiap negeri mempunyai bentuk muka bumi yang unik dan bercantum antara satu sama lain.",
        },
        {
          id: "d",
          text: "Kerana hubungan antara kaum diibaratkan seperti kepingan teka-teki yang sukar dicantumkan.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "slide secara jelas menyatakan 'Malaya/Malaysia ibarat sebuah jigsaw puzzle' kerana negeri-negerinya 'asalnya terikat kepada pusat2 yang berbeza' sebelum disatukan oleh British menjadi satu gambaran besar.",
        incorrect: {
          a: "Walaupun prosesnya rumit, analogi ini lebih merujuk kepada penyatuan entiti yang terpisah.",
          c: "Ini adalah tafsiran literal geografi, bukan maksud sebenar analogi tersebut.",
          d: "Analogi ini digunakan untuk menerangkan penyatuan wilayah, bukan secara spesifik mengenai hubungan antara kaum.",
        },
      },
    },
    {
      id: "kesepaduan-q13",
      text: "Apakah yang dimaksudkan dengan keadaan 'stable tension' (tegang tapi tenang) untuk menggambarkan hubungan etnik di Malaysia?",
      options: [
        {
          id: "a",
          text: "Hubungan etnik berada dalam keadaan konflik terbuka yang berterusan.",
        },
        {
          id: "b",
          text: "Wujud keharmonian mutlak tanpa sebarang potensi perselisihan.",
        },
        {
          id: "c",
          text: "Keadaan secara amnya tenang di permukaan, tetapi wujud potensi ketegangan atau isu-isu sensitif di bawahnya.",
        },
        {
          id: "d",
          text: "Semua ketegangan etnik telah berjaya diselesaikan sepenuhnya oleh kerajaan.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Istilah ini menangkap realiti Malaysia di mana kehidupan harian berjalan lancar dan aman, tetapi wujud isu-isu terpendam berkaitan etnik, agama, dan bahasa yang boleh mencetuskan ketegangan jika tidak diurus dengan baik.",
        incorrect: {
          a: "'Tenang' menafikan adanya konflik terbuka.",
          b: "'Tegang' menafikan wujudnya harmoni mutlak.",
          d: "Ini adalah pandangan yang terlalu optimistik dan tidak realistik, seperti yang diakui dalam konsep 'defisit sosial'.",
        },
      },
    },
    {
      id: "kesepaduan-q14",
      text: "(Roman Numeral) Manakah antara berikut merupakan 'Tapak Integrasi' yang wujud sebelum tahun 1969?",
      options: [
        { id: "a", text: "I, II dan III sahaja" },
        { id: "b", text: "I, II dan IV sahaja" },
        { id: "c", text: "II, III dan IV sahaja" },
        { id: "d", text: "I, II, III dan IV" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "CLC (1949), Perlembagaan (1957), dan Pilihan Raya (1955) adalah contoh-contoh tapak integrasi yang dibina sebelum era 'Perpaduan' pasca-1969. Dasar Ekonomi Baru (DEB) diperkenalkan pada tahun 1971, selepas peristiwa 13 Mei 1969.",
        incorrect: {
          a: "III (Dasar Ekonomi Baru) diperkenalkan pada tahun 1971, selepas 1969.",
          c: "III (Dasar Ekonomi Baru) diperkenalkan pada tahun 1971, selepas 1969.",
          d: "III (Dasar Ekonomi Baru) diperkenalkan pada tahun 1971, selepas 1969.",
        },
      },
    },
    {
      id: "kesepaduan-q15",
      text: "(Roman Numeral) Apakah ciri-ciri utama konsep 'Perpaduan' seperti yang digariskan dalam nota?\nI. Merupakan matlamat akhir yang diidamkan\nII. Sukar untuk diukur secara nyata dan bersifat tidak kekal\nIII. Merupakan keadaan semasa yang telah dicapai sepenuhnya\nIV. Manifestasinya boleh dilihat melalui 'detik perpaduan'",
      options: [
        { id: "a", text: "I, II dan IV sahaja" },
        { id: "b", text: "I, III dan IV sahaja" },
        { id: "c", text: "II, III dan IV sahaja" },
        { id: "d", text: "I, II, III dan IV" },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "'Perpaduan' adalah matlamat ideal, bersifat abstrak dan sukar diukur, dan kewujudannya yang seketika dapat dilihat melalui 'detik-detik perpaduan'. Keadaan semasa yang telah dicapai ialah 'kesepaduan', bukan 'perpaduan'.",
        incorrect: {
          b: "III adalah salah. Keadaan semasa yang dicapai ialah 'kesepaduan'.",
          c: "III adalah salah. Keadaan semasa yang dicapai ialah 'kesepaduan'.",
          d: "III adalah salah. Keadaan semasa yang dicapai ialah 'kesepaduan'.",
        },
      },
    },
    {
      id: "kesepaduan-q16",
      text: "Apakah peranan utama institusi Yang di-Pertuan Agong (YDPA) sebagai simbol dan struktur KESATUAN?",
      options: [
        { id: "a", text: "Mengetuai badan kehakiman negara." },
        {
          id: "b",
          text: "Menjadi ketua eksekutif kerajaan yang mentadbir negara.",
        },
        {
          id: "c",
          text: "Menjadi lambang kedaulatan, perpaduan, dan payung negara yang mengatasi politik kepartian.",
        },
        {
          id: "d",
          text: "Mengawal selia semua aktiviti ekonomi dan perdagangan.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Institusi YDPA berfungsi sebagai simbol penyatuan tertinggi negara yang mengatasi perbezaan politik, kaum, dan agama, menjadikannya paksi utama kesatuan.",
        incorrect: {
          a: "Badan kehakiman diketuai oleh Ketua Hakim Negara.",
          b: "Kerajaan eksekutif diketuai oleh Perdana Menteri.",
          d: "Ekonomi dan perdagangan diuruskan oleh kementerian-kementerian yang berkaitan.",
        },
      },
    },
    {
      id: "kesepaduan-q17",
      text: "Bagaimanakah pergaulan di tempat awam seperti pasar atau kedai makan menyumbang kepada kesepaduan sosial?",
      options: [
        {
          id: "a",
          text: "Dengan menggalakkan persaingan ekonomi yang sihat antara peniaga pelbagai kaum.",
        },
        {
          id: "b",
          text: "Dengan menyediakan ruang interaksi tidak formal yang membolehkan rakyat mengenali dan memahami satu sama lain secara semula jadi.",
        },
        {
          id: "c",
          text: "Dengan membuktikan bahawa semua rakyat Malaysia mempunyai cita rasa makanan yang sama.",
        },
        {
          id: "d",
          text: "Dengan menjadi tempat penyebaran maklumat rasmi daripada kerajaan kepada rakyat.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Tempat-tempat ini adalah 'ruang awam' di mana interaksi rentas etnik berlaku secara santai dan berterusan, memecahkan stereotaip dan membina persefahaman dalam kehidupan seharian.",
        incorrect: {
          a: "Walaupun persaingan mungkin wujud, ia bukan penyumbang utama kepada kesepaduan sosial.",
          c: "Cita rasa mungkin berbeza, tetapi perkongsian ruang makan itu sendiri yang penting.",
          d: "Ini bukan fungsi utama tempat-tempat tersebut.",
        },
      },
    },
    {
      id: "kesepaduan-q18",
      text: "Apakah cabaran utama kepada kesepaduan sosial dalam aspek bahasa yang digambarkan melalui keratan akhbar dalam nota?",
      options: [
        {
          id: "a",
          text: "Keengganan majoriti rakyat Malaysia untuk mempelajari bahasa Inggeris.",
        },
        {
          id: "b",
          text: "Keperluan penguasaan bahasa tertentu (cth: Mandarin) sebagai syarat pekerjaan yang boleh dilihat sebagai diskriminasi.",
        },
        {
          id: "c",
          text: "Kepupusan bahasa-bahasa ibunda kaum minoriti di Malaysia.",
        },
        {
          id: "d",
          text: "Kesukaran menterjemah dokumen-dokumen rasmi kerajaan ke dalam pelbagai bahasa.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Keratan akhbar bertajuk ''Penguasaan bahasa Mandarin alasan untuk ambil pekerja Cina'' menyorot isu bagaimana keperluan bahasa dalam pasaran kerja boleh menjadi satu bentuk 'defisit sosial' yang mewujudkan jurang dan rasa tidak puas hati.",
        incorrect: {
          a: "Isu yang dibangkitkan bukan keengganan mempelajari Bahasa Inggeris.",
          c: "Ini adalah isu-isu bahasa yang lain tetapi tidak diketengahkan secara spesifik dalam contoh yang diberikan.",
          d: "Ini adalah isu-isu bahasa yang lain tetapi tidak diketengahkan secara spesifik dalam contoh yang diberikan.",
        },
      },
    },
    {
      id: "kesepaduan-q19",
      text: "Mengapakah penentangan terhadap Malayan Union 1946 merupakan satu peristiwa penting dalam sejarah pembinaan negara?",
      options: [
        {
          id: "a",
          text: "Ia merupakan kali pertama semua kaum di Tanah Melayu bersatu sepenuhnya menentang British.",
        },
        {
          id: "b",
          text: "Ia menunjukkan kebangkitan kesedaran politik orang Melayu untuk mempertahankan kedaulatan dan institusi mereka.",
        },
        {
          id: "c",
          text: "Ia membawa kepada kemerdekaan Tanah Melayu secara serta-merta.",
        },
        {
          id: "d",
          text: "Ia menyebabkan semua kaum imigran dihantar pulang ke negara asal mereka.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Peristiwa ini menandakan titik penting dalam nasionalisme Melayu, di mana mereka bersatu padu menentang perubahan yang dianggap mengancam kedudukan Raja-Raja Melayu dan hak-hak orang Melayu. Kejayaan membatalkan Malayan Union membuktikan kekuatan politik mereka.",
        incorrect: {
          a: "Penentangan ini didominasi oleh orang Melayu. Sokongan daripada kaum lain tidak menyeluruh pada peringkat awal.",
          c: "Kemerdekaan hanya dicapai pada tahun 1957, lebih sedekad kemudian.",
          d: "Isu kerakyatan dirunding semula dalam Persekutuan Tanah Melayu 1948, bukan melalui penghantaran pulang.",
        },
      },
    },
    {
      id: "kesepaduan-q20",
      text: "(Roman Numeral) Manakah antara berikut merupakan contoh 'detik perbezaan' yang boleh menjejaskan kesepaduan sosial?\nI. Sokongan padu rakyat kepada Datuk Lee Chong Wei dalam perlawanan akhir Olimpik.\nII. Perdebatan tegang mengenai isu-isu sensitif kaum dan agama di media sosial.\nIII. Gotong-royong membersihkan kawasan perumahan yang disertai pelbagai etnik.\nIV. Polarisasi politik yang berlebihan berdasarkan sentimen perkauman.",
      options: [
        { id: "a", text: "I dan III sahaja" },
        { id: "b", text: "II dan IV sahaja" },
        { id: "c", text: "I, II dan IV sahaja" },
        { id: "d", text: "II, III dan IV sahaja" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Perdebatan isu sensitif di media sosial dan politik perkauman adalah antara punca utama yang boleh mencetuskan ketegangan dan menonjolkan perbezaan, sekali gus menjadi 'detik perbezaan'.",
        incorrect: {
          a: "I dan III adalah contoh klasik 'detik perpaduan' di mana rakyat bersatu untuk tujuan bersama.",
          c: "I dan III adalah contoh klasik 'detik perpaduan'.",
          d: "I dan III adalah contoh klasik 'detik perpaduan'.",
        },
      },
    },
    {
      id: "kesepaduan-q21",
      text: "Apakah faktor utama yang membezakan Persekutuan Tanah Melayu 1948 daripada Malayan Union 1946?",
      options: [
        {
          id: "a",
          text: "Persekutuan Tanah Melayu 1948 mengekalkan kedaulatan Raja-Raja Melayu dan memperketatkan syarat kerakyatan.",
        },
        {
          id: "b",
          text: "Persekutuan Tanah Melayu 1948 memberikan hak mengundi yang sama rata kepada semua penduduk tanpa syarat.",
        },
        {
          id: "c",
          text: "Malayan Union dipimpin oleh seorang Pesuruhjaya Tinggi manakala Persekutuan Tanah Melayu dipimpin oleh seorang Gabenor.",
        },
        {
          id: "d",
          text: "Malayan Union merangkumi Singapura manakala Persekutuan Tanah Melayu tidak.",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Dua perbezaan utama ialah Persekutuan Tanah Melayu 1948 mengembalikan kedaulatan Raja-Raja Melayu sebagai ketua negeri masing-masing dan membatalkan prinsip kerakyatan jus soli yang longgar dalam Malayan Union.",
        incorrect: {
          b: "Hak mengundi masih terhad pada masa itu.",
          c: "Kedua-duanya dipimpin oleh Pesuruhjaya Tinggi British.",
          d: "Kedua-dua entiti ini tidak merangkumi Singapura, yang kekal sebagai Tanah Jajahan Mahkota yang berasingan.",
        },
      },
    },
    {
      id: "kesepaduan-q22",
      text: "Dalam konteks Tiga Lapisan Perpaduan, jika 'kesepaduan' diibaratkan sebagai keadaan kesihatan badan yang stabil tetapi masih ada penyakit (defisit sosial), maka 'penyatupaduan' ialah...",
      options: [
        { id: "a", text: "Sijil kematian yang mengesahkan kegagalan sistem." },
        { id: "b", text: "Diagnosis doktor tentang penyakit yang dialami." },
        {
          id: "c",
          text: "Rawatan dan ubat-ubatan yang diambil secara berterusan untuk mengawal penyakit tersebut.",
        },
        { id: "d", text: "Keadaan sihat sepenuhnya tanpa sebarang penyakit." },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Analogi ini paling tepat. Penyatupaduan adalah seperti rawatan berterusan (melalui perundingan, mediasi) yang diambil untuk mengurus dan merawat 'penyakit' (defisit sosial) agar badan (masyarakat) kekal stabil dan bergerak ke arah kesihatan yang lebih baik (perpaduan).",
        incorrect: {
          a: "Ini adalah analogi yang negatif dan tidak tepat.",
          b: "Diagnosis lebih kepada proses mengenal pasti defisit sosial, bukan merawatnya.",
          d: "Ini adalah analogi untuk 'perpaduan'.",
        },
      },
    },
    {
      id: "kesepaduan-q23",
      text: "Apakah justifikasi utama untuk menjadikan Bahasa Melayu sebagai Bahasa Kebangsaan?",
      options: [
        {
          id: "a",
          text: "Kerana ia adalah bahasa yang paling mudah dipelajari oleh semua kaum.",
        },
        {
          id: "b",
          text: "Untuk berfungsi sebagai 'lingua franca' atau bahasa perhubungan umum yang boleh menyatukan rakyat pelbagai latar belakang.",
        },
        {
          id: "c",
          text: "Untuk menggantikan peranan bahasa Inggeris sepenuhnya dalam semua urusan antarabangsa.",
        },
        {
          id: "d",
          text: "Kerana ia adalah satu-satunya bahasa yang mempunyai sistem tulisan yang lengkap.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Keperluan untuk mempunyai satu bahasa komunikasi bersama bagi memupuk persefahaman dan identiti kebangsaan adalah justifikasi utama di sebalik pemilihan Bahasa Melayu sebagai Bahasa Kebangsaan.",
        incorrect: {
          a: "Tahap kesukaran adalah subjektif dan bukan justifikasi perlembagaan.",
          c: "Perlembagaan masih membenarkan penggunaan bahasa Inggeris untuk tujuan-tujuan tertentu.",
          d: "Banyak bahasa lain juga mempunyai sistem tulisan yang lengkap.",
        },
      },
    },
    {
      id: "kesepaduan-q24",
      text: "Mengapakah Dasar Kebudayaan Kebangsaan yang digubal pada 1971 dianggap penting?",
      options: [
        {
          id: "a",
          text: "Ia adalah usaha untuk mencipta satu identiti nasional yang berteraskan kebudayaan asal rantau ini bagi mengukuhkan perpaduan.",
        },
        {
          id: "b",
          text: "Ia bertujuan untuk mempromosikan semua kebudayaan kaum secara sama rata tanpa sebarang teras utama.",
        },
        {
          id: "c",
          text: "Ia hanya memfokuskan kepada pembangunan seni tarian dan muzik tradisional.",
        },
        {
          id: "d",
          text: "Ia adalah syarat yang ditetapkan oleh UNESCO untuk mengiktiraf warisan budaya Malaysia.",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Dasar ini digubal selepas 1969 sebagai sebahagian daripada usaha membina negara bangsa dengan mewujudkan satu identiti kebangsaan melalui kebudayaan, dengan teras-teras tertentu (budaya rakyat asal, unsur budaya lain yang sesuai, Islam).",
        incorrect: {
          b: "Dasar ini mempunyai teras utama, bukan mempromosikan semua secara sama rata tanpa panduan.",
          c: "Skopnya lebih luas merangkumi bahasa, sastera, seni, dan nilai.",
          d: "Ia adalah inisiatif dalaman negara, bukan syarat luaran.",
        },
      },
    },
    {
      id: "kesepaduan-q25",
      text: "Apakah contoh 'detik perpaduan' dalam sektor kesihatan seperti yang ditunjukkan dalam nota?",
      options: [
        {
          id: "a",
          text: "Pembinaan hospital-hospital pakar yang mengenakan caj rawatan yang tinggi.",
        },
        {
          id: "b",
          text: "Petugas kesihatan pelbagai kaum yang bekerjasama memberikan rawatan kepada masyarakat tanpa mengira latar belakang.",
        },
        {
          id: "c",
          text: "Kempen derma darah yang hanya dibuka kepada satu kaum sahaja.",
        },
        {
          id: "d",
          text: "Pengimportan ubat-ubatan dari luar negara untuk menampung keperluan tempatan.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Gambar-gambar dalam nota menunjukkan petugas kesihatan yang berbilang kaum bekerjasama (cth: jururawat) dan memberikan perkhidmatan kepada komuniti yang memerlukan (cth: suku Batek), memaparkan semangat kemanusiaan yang melangkaui batas kaum.",
        incorrect: {
          a: "Ini tidak semestinya menunjukkan perpaduan.",
          c: "Ini adalah contoh pengasingan, bukan perpaduan.",
          d: "Ini adalah urusan logistik, bukan detik perpaduan sosial.",
        },
      },
    },
    {
      id: "kesepaduan-q26",
      text: "Mengapakah sekolah aliran kebangsaan dianggap sebagai 'Tapak Integrasi' yang penting?",
      options: [
        {
          id: "a",
          text: "Kerana ia menyediakan pendidikan percuma untuk semua pelajar.",
        },
        {
          id: "b",
          text: "Kerana ia menjadi ruang untuk pelajar dari pelbagai latar belakang etnik dan sosial untuk berinteraksi sejak usia muda.",
        },
        {
          id: "c",
          text: "Kerana ia hanya menggunakan sukatan pelajaran dari luar negara yang berkualiti tinggi.",
        },
        {
          id: "d",
          text: "Kerana ia menjamin semua pelajarnya mendapat pekerjaan di sektor kerajaan.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Sekolah kebangsaan menyediakan platform di mana kanak-kanak dari pelbagai kaum dapat belajar, bermain, dan membesar bersama, menggunakan bahasa pengantar yang sama. Ini membolehkan pemupukan persefahaman dan persahabatan dari peringkat awal.",
        incorrect: {
          a: "Pendidikan percuma adalah satu ciri, tetapi bukan sebab utamanya sebagai tapak integrasi.",
          c: "Ia menggunakan Kurikulum Standard Sekolah Kebangsaan.",
          d: "Tiada jaminan sedemikian.",
        },
      },
    },
    {
      id: "kesepaduan-q27",
      text: "(Roman Numeral) Manakah antara berikut merupakan simbol atau struktur yang dibina untuk mengukuhkan KESATUAN negara?\nI. Lagu Negaraku\nII. Indeks Perpaduan Nasional (IPNas)\nIII. Bendera Jalur Gemilang\nIV. Dasar Kebudayaan Kebangsaan",
      options: [
        { id: "a", text: "I, II dan III sahaja" },
        { id: "b", text: "I, III dan IV sahaja" },
        { id: "c", text: "II, III dan IV sahaja" },
        { id: "d", text: "I, II, III dan IV" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Lagu kebangsaan, bendera, dan Dasar Kebudayaan Kebangsaan adalah antara simbol dan struktur yang diwujudkan untuk membina identiti dan rasa kepunyaan bersama, sekali gus mengukuhkan kesatuan.",
        incorrect: {
          a: "II (IPNas) adalah instrumen pengukuran moden (2018), bukan simbol asas pembinaan negara.",
          c: "II (IPNas) adalah instrumen pengukuran moden (2018).",
          d: "II (IPNas) adalah instrumen pengukuran moden (2018).",
        },
      },
    },
    {
      id: "kesepaduan-q28",
      text: "Apakah yang boleh disimpulkan daripada kewujudan pelbagai 'detik perpaduan' dalam kehidupan seharian rakyat Malaysia?",
      options: [
        {
          id: "a",
          text: "Perpaduan di Malaysia hanya wujud pada waktu perayaan dan acara sukan.",
        },
        {
          id: "b",
          text: "Walaupun wujud perbezaan politik dan sosial, masih terdapat ruang dan keinginan untuk kebersamaan dalam kalangan rakyat.",
        },
        {
          id: "c",
          text: "Semua masalah berkaitan hubungan etnik di Malaysia telah selesai sepenuhnya.",
        },
        {
          id: "d",
          text: "Kerajaan tidak lagi perlu berusaha untuk memupuk perpaduan kerana ia berlaku secara semula jadi.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Kewujudan detik-detik ini menunjukkan bahawa di sebalik perbezaan yang sering diperkatakan, rakyat Malaysia pada dasarnya boleh hidup bersama dan berkongsi saat-saat keharmonian. Ia adalah modal sosial yang penting untuk negara.",
        incorrect: {
          a: "Ia berlaku dalam banyak situasi lain seperti di tempat makan, majlis perkahwinan, dan ketika bencana.",
          c: "Konsep 'defisit sosial' menafikan kesimpulan ini.",
          d: "Proses 'penyatupaduan' menunjukkan usaha berterusan masih diperlukan.",
        },
      },
    },
    {
      id: "kesepaduan-q29",
      text: "Apakah peranan utama institusi Pilihan Raya dalam konteks 'Tapak Integrasi'?",
      options: [
        {
          id: "a",
          text: "Untuk memilih wakil rakyat berdasarkan kaum masing-masing sahaja.",
        },
        {
          id: "b",
          text: "Untuk menyediakan platform demokrasi di mana rakyat pelbagai kaum dapat mengambil bahagian dalam proses politik dan parti-parti politik perlu mendapatkan sokongan rentas etnik.",
        },
        {
          id: "c",
          text: "Untuk menjamin hanya satu parti politik sahaja yang akan sentiasa memerintah negara.",
        },
        {
          id: "d",
          text: "Untuk membenarkan campur tangan kuasa asing dalam menentukan hala tuju politik negara.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Pilihan raya menjadi tapak integrasi kerana ia memaksa parti-parti politik untuk bekerjasama (membentuk gabungan) dan merayu undi daripada pelbagai kaum untuk menang. Ini menggalakkan rundingan dan kesederhanaan dalam politik.",
        incorrect: {
          a: "Sistem pilihan raya di Malaysia tidak berasaskan perkauman secara rasmi.",
          c: "Pilihan raya adalah mekanisme untuk membolehkan pertukaran kerajaan secara aman.",
          d: "Pilihan raya adalah urusan dalaman negara.",
        },
      },
    },
    {
      id: "kesepaduan-q30",
      text: "Apakah implikasi utama peralihan daripada ungkapan 'Kesatuan dalam Kepelbagaian' kepada 'Perpaduan dalam Kepelbagaian'?",
      options: [
        {
          id: "a",
          text: "Menunjukkan bahawa konsep kesatuan telah gagal sepenuhnya dan perlu ditinggalkan.",
        },
        {
          id: "b",
          text: "Menandakan peralihan penekanan daripada penyatuan pentadbiran dan wilayah kepada usaha yang lebih mendalam untuk menyatukan jiwa dan sosio-ekonomi masyarakat.",
        },
        {
          id: "c",
          text: "Memberi isyarat bahawa kepelbagaian tidak lagi diraikan dan negara menuju ke arah asimilasi.",
        },
        {
          id: "d",
          text: "Tiada implikasi yang signifikan kerana kedua-dua ungkapan membawa maksud yang sama.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Peralihan ini membawa makna yang mendalam. 'Kesatuan' lebih kepada penyatuan fizikal (wilayah, pentadbiran). 'Perpaduan' membawa konotasi yang lebih holistik, merangkumi aspek sosial, ekonomi, dan emosi untuk membina sebuah masyarakat yang benar-benar bersepadu.",
        incorrect: {
          a: "Konsep kesatuan tidak gagal, tetapi ia didapati tidak mencukupi. Ia menjadi asas kepada perpaduan.",
          c: "Penambahan perkataan 'dalam Kepelbagaian' menunjukkan bahawa kepelbagaian terus diiktiraf dan diraikan.",
          d: "Kedua-dua ungkapan mempunyai konotasi dan penekanan sejarah yang berbeza.",
        },
      },
    },
    {
      id: "kesepaduan-q31",
      text: "Mengapakah Rukun Negara digubal selepas tragedi 13 Mei 1969?",
      options: [
        {
          id: "a",
          text: "Untuk menggantikan Perlembagaan Persekutuan yang dianggap lapuk.",
        },
        {
          id: "b",
          text: "Untuk menyediakan satu set ideologi dan prinsip kebangsaan sebagai panduan untuk membina semula perpaduan dan keharmonian.",
        },
        {
          id: "c",
          text: "Untuk menyekat kebebasan beragama dalam kalangan rakyat Malaysia.",
        },
        {
          id: "d",
          text: "Untuk memenuhi syarat bagi mendapatkan bantuan ekonomi daripada Bank Dunia.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Rukun Negara diisytiharkan pada tahun 1970 sebagai respons langsung kepada krisis 1969. Lima prinsipnya dirangka untuk menjadi panduan dan pegangan bersama seluruh rakyat bagi mencapai perpaduan yang lebih erat dan masyarakat yang adil.",
        incorrect: {
          a: "Rukun Negara berfungsi sebagai prinsip panduan dan tidak menggantikan Perlembagaan.",
          c: "Prinsip pertama Rukun Negara ialah 'Kepercayaan kepada Tuhan', yang menyokong, bukan menyekat, kehidupan beragama.",
          d: "Ia adalah inisiatif dalaman untuk penyembuhan sosial, bukan kerana tekanan ekonomi luaran.",
        },
      },
    },
    {
      id: "kesepaduan-q32",
      text: "Apakah yang boleh dirumuskan mengenai hubungan antara 'kesepaduan' dan 'defisit sosial'?",
      options: [
        {
          id: "a",
          text: "Kewujudan kesepaduan bermakna semua defisit sosial telah berjaya dihapuskan.",
        },
        {
          id: "b",
          text: "Kesepaduan adalah keadaan di mana defisit sosial diurus dengan baik sehingga tidak membawa kepada konflik terbuka.",
        },
        {
          id: "c",
          text: "Defisit sosial adalah matlamat yang perlu dicapai untuk mengukuhkan kesepaduan.",
        },
        {
          id: "d",
          text: "Kesepaduan dan defisit sosial adalah dua perkara yang tidak mempunyai sebarang kaitan.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Ini adalah hubungan yang tepat. Malaysia mencapai kesepaduan kerana walaupun defisit sosial (jurang dan perbezaan) wujud, ia dapat diurus melalui pelbagai mekanisme (perundingan, mediasi, undang-undang) supaya ia tidak melarat menjadi konflik yang merosakkan kestabilan negara.",
        incorrect: {
          a: "Definisi kesepaduan secara jelas mengakui kewujudan defisit sosial.",
          c: "Defisit sosial adalah cabaran yang perlu diselesaikan, bukan matlamat.",
          d: "Kedua-duanya sangat berkait rapat; kesepaduan adalah keadaan yang wujud di sebalik adanya defisit sosial.",
        },
      },
    },
    {
      id: "kesepaduan-q33",
      text: "(Roman Numeral) Manakah antara berikut merupakan ciri-ciri 'penyatupaduan'?\nI. Merupakan satu keadaan akhir yang statik.\nII. Merupakan satu proses usaha yang berterusan.\nIII. Menggunakan instrumen seperti tawar-menawar dan perundingan.\nIV. Melibatkan semua lapisan masyarakat.",
      options: [
        { id: "a", text: "I, II dan III sahaja" },
        { id: "b", text: "I, III dan IV sahaja" },
        { id: "c", text: "II, III dan IV sahaja" },
        { id: "d", text: "I, II, III dan IV" },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Definisi penyatupaduan menekankan sifatnya sebagai usaha berterusan yang melibatkan semua lapisan masyarakat menggunakan instrumen seperti tawar-menawar, perundingan, dan mediasi.",
        incorrect: {
          a: "I adalah salah. Penyatupaduan adalah proses yang dinamik, bukan keadaan yang statik.",
          b: "I adalah salah. Penyatupaduan adalah proses yang dinamik.",
          d: "I adalah salah. Penyatupaduan adalah proses yang dinamik.",
        },
      },
    },
    {
      id: "kesepaduan-q34",
      text: "Apakah manifestasi kesepaduan sosial dalam aspek etnisiti yang boleh dilihat dalam kehidupan seharian?",
      options: [
        {
          id: "a",
          text: "Penyiaran berita dalam pelbagai bahasa di stesen televisyen nasional.",
        },
        {
          id: "b",
          text: "Kerjasama perniagaan antara individu berlainan kaum, seperti 'Restoran Tiga Bangsa'.",
        },
        {
          id: "c",
          text: "Penubuhan parti-parti politik yang mewakili kepentingan satu kaum sahaja.",
        },
        {
          id: "d",
          text: "Kewujudan pelbagai aliran sekolah mengikut bahasa ibunda masing-masing.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Kerjasama erat dalam aktiviti ekonomi dan sosial antara etnik yang berbeza, seperti yang ditunjukkan oleh contoh restoran tersebut, adalah bukti nyata kesepaduan etnisiti di peringkat akar umbi.",
        incorrect: {
          a: "Ini lebih merujuk kepada aspek bahasa.",
          c: "Ini lebih cenderung menonjolkan batas etnik atau 'detik perbezaan'.",
          d: "Ini lebih cenderung menonjolkan batas etnik atau 'detik perbezaan'.",
        },
      },
    },
    {
      id: "kesepaduan-q35",
      text: "Apakah perbezaan utama dari segi skop antara Communities Liaison Committee (CLC) 1949 dan Perlembagaan Persekutuan 1957?",
      options: [
        {
          id: "a",
          text: "CLC hanya dianggotai oleh orang Melayu, manakala Perlembagaan digubal oleh semua kaum.",
        },
        {
          id: "b",
          text: "CLC adalah platform rundingan tidak rasmi di peringkat elit, manakala Perlembagaan adalah dokumen perundangan rasmi yang mengikat seluruh negara.",
        },
        {
          id: "c",
          text: "CLC bertujuan mencapai kemerdekaan, manakala Perlembagaan bertujuan mengekalkan penjajahan British.",
        },
        {
          id: "d",
          text: "CLC menumpukan isu ekonomi sahaja, manakala Perlembagaan menumpukan isu politik sahaja.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "CLC adalah 'tapak integrasi' awal yang bersifat tidak rasmi untuk para elit berunding. Hasil daripada rundingan-rundingan inilah (termasuk yang kemudiannya), lahirlah Perlembagaan, iaitu sebuah dokumen perundangan tertinggi yang formal dan mengikat semua warganegara.",
        incorrect: {
          a: "CLC dianggotai oleh elit pelbagai kaum.",
          c: "Kedua-duanya adalah langkah ke arah kemerdekaan dan pembinaan negara.",
          d: "Kedua-duanya membincangkan pelbagai isu merangkumi politik, sosial, dan ekonomi.",
        },
      },
    },
    {
      id: "kesepaduan-q36",
      text: "Mengapakah Malaysia sering dirujuk sebagai sebuah negara yang berjaya mengurus kemajmukan?",
      options: [
        {
          id: "a",
          text: "Kerana Malaysia tidak pernah mengalami sebarang bentuk konflik perkauman.",
        },
        {
          id: "b",
          text: "Kerana semua penduduknya telah diasimilasikan ke dalam satu budaya tunggal.",
        },
        {
          id: "c",
          text: "Kerana ia berjaya mengekalkan kestabilan dan keharmonian melalui model perkongsian kuasa dan perundingan walaupun mempunyai kepelbagaian yang tinggi.",
        },
        {
          id: "d",
          text: "Kerana ekonomi Malaysia dikawal sepenuhnya oleh satu kaum sahaja.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Kejayaan Malaysia terletak pada kemampuannya untuk mengurus masyarakat yang sangat pelbagai melalui pendekatan akomodatif, rundingan, dan perkongsian kuasa, yang membolehkan negara kekal aman dan stabil sejak merdeka.",
        incorrect: {
          a: "Tragedi 13 Mei 1969 adalah bukti sejarah bahawa konflik pernah berlaku.",
          b: "Malaysia mengamalkan integrasi, bukan asimilasi.",
          d: "Walaupun wujud ketidakseimbangan, ekonomi Malaysia bersifat campuran dan melibatkan semua kaum.",
        },
      },
    },
    {
      id: "kesepaduan-q37",
      text: "Apakah kesimpulan yang boleh dibuat mengenai usaha membina perpaduan di Malaysia?",
      options: [
        {
          id: "a",
          text: "Ia adalah satu proses yang telah selesai dan tidak lagi memerlukan sebarang tindakan.",
        },
        {
          id: "b",
          text: "Ia adalah satu tanggungjawab yang terletak pada bahu kerajaan semata-mata.",
        },
        {
          id: "c",
          text: "Ia adalah satu perjalanan yang dinamik, kompleks, dan memerlukan usaha berterusan daripada semua pihak.",
        },
        {
          id: "d",
          text: "Ia adalah satu matlamat yang mustahil untuk dicapai dalam sebuah negara yang majmuk.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Keseluruhan topik ini menggambarkan pembinaan perpaduan sebagai satu proses yang tidak pernah berhenti, penuh dengan cabaran ('detik perbezaan', 'defisit sosial') dan kejayaan ('detik perpaduan', 'kesepaduan'), serta memerlukan komitmen daripada seluruh warga negara.",
        incorrect: {
          a: "Konsep 'penyatupaduan' sendiri membuktikan ia adalah proses yang berterusan.",
          b: "'Penyatupaduan' melibatkan semua lapisan masyarakat, bukan hanya kerajaan.",
          d: "Walaupun sukar, ia bukanlah satu kemustahilan dan terus menjadi aspirasi negara.",
        },
      },
    },
    {
      id: "kesepaduan-q38",
      text: "Dalam kerangka IPNas, 'Hubungan Sosial Rentas Etnik' diletakkan di bawah teras 'Penyatupaduan'. Mengapa?",
      options: [
        {
          id: "a",
          text: "Kerana hubungan sosial rentas etnik adalah matlamat akhir perpaduan.",
        },
        {
          id: "b",
          text: "Kerana kualiti hubungan inilah yang menjadi fokus utama usaha dan proses untuk merapatkan jurang sosial.",
        },
        {
          id: "c",
          text: "Kerana hubungan sosial rentas etnik adalah satu keadaan yang telah dicapai dan tidak perlu diubah lagi.",
        },
        {
          id: "d",
          text: "Kerana ia adalah satu-satunya faktor yang diukur dalam IPNas.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Penyatupaduan ialah proses atau usaha. Kualiti hubungan sosial rentas etnik adalah petunjuk utama sama ada usaha menyatupadukan masyarakat itu berjaya atau tidak. Oleh itu, ia diletakkan di bawah teras ini sebagai elemen penting yang sentiasa diusahakan untuk diperbaiki.",
        incorrect: {
          a: "Ia adalah sebahagian daripada proses, bukan matlamat akhir itu sendiri.",
          c: "Ia adalah satu keadaan yang dinamik dan sentiasa perlu dipupuk.",
          d: "IPNas mengukur banyak faktor lain seperti etos bangsa, defisit sosial, dan detik perpaduan.",
        },
      },
    },
    {
      id: "kesepaduan-q39",
      text: "Manakah antara berikut menggambarkan prinsip 'tawar-menawar' (bargaining) dalam konteks pembinaan negara Malaysia?",
      options: [
        {
          id: "a",
          text: "Satu pihak memenangi semua tuntutannya manakala pihak lain kalah sepenuhnya.",
        },
        {
          id: "b",
          text: "Semua pihak berpegang teguh pada pendirian masing-masing tanpa sebarang kompromi.",
        },
        {
          id: "c",
          text: "Setiap kumpulan etnik membuat konsesi atau melepaskan sebahagian tuntutan mereka untuk mencapai persetujuan yang lebih besar demi kebaikan bersama.",
        },
        {
          id: "d",
          text: "Pihak ketiga yang neutral dipanggil untuk membuat keputusan bagi pihak-pihak yang bertelagah.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Prinsip tawar-menawar dalam konteks Malaysia, terutamanya semasa penggubalan Perlembagaan, melibatkan proses di mana setiap kaum (melalui wakil mereka) sanggup bertolak ansur dan membuat konsesi terhadap beberapa tuntutan bagi membolehkan satu 'kontrak sosial' yang dapat diterima oleh semua pihak dibentuk.",
        incorrect: {
          a: "Ini adalah model menang-kalah, bukan tawar-menawar.",
          b: "Ini akan membawa kepada jalan buntu (deadlock).",
          d: "Ini adalah definisi untuk 'pengantaraan' (mediation), satu lagi alat penyatupaduan, tetapi bukan 'tawar-menawar'.",
        },
      },
    },
    {
      id: "kesepaduan-q40",
      text: "Apakah kesimpulan paling tepat yang boleh dibuat mengenai keadaan perpaduan di Malaysia berdasarkan keseluruhan Topik 4?",
      options: [
        {
          id: "a",
          text: "Malaysia berada dalam keadaan 'perpaduan' yang sempurna kerana wujudnya banyak 'detik perpaduan'.",
        },
        {
          id: "b",
          text: "Malaysia berada dalam keadaan konflik kerana wujudnya 'defisit sosial' dan 'detik perbezaan'.",
        },
        {
          id: "c",
          text: "Malaysia berada dalam keadaan 'kesepaduan'—satu keseimbangan yang stabil di mana keharmonian wujud bersama cabaran, dan ia sentiasa diurus melalui 'penyatupaduan'.",
        },
        {
          id: "d",
          text: "Usaha mencapai perpaduan di Malaysia telah gagal dan digantikan dengan konsep 'kesatuan' sepenuhnya.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Ini adalah rumusan yang paling menyeluruh dan tepat. Realiti Malaysia bukanlah hitam atau putih, tetapi satu keadaan kesepaduan yang kompleks. Ia adalah satu pencapaian (stabil dan aman) tetapi pada masa yang sama ia tidak sempurna (masih ada defisit). Keseimbangan ini dijaga melalui proses penyatupaduan yang berterusan.",
        incorrect: {
          a: "'Detik perpaduan' tidak bermakna 'perpaduan' sempurna telah dicapai.",
          b: "Kewujudan 'defisit sosial' tidak bermakna negara berada dalam konflik; ia menunjukkan cabaran dalam kestabilan.",
          d: "Urutan sejarahnya adalah terbalik; 'perpaduan' menggantikan 'kesatuan'.",
        },
      },
    },
  ],
};
