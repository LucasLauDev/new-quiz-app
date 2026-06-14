import { Quiz } from "@/app/types/quiz";

export const tanggungjawabSosial: Quiz = {
  id: "tanggungjawab-sosial",
  categoryId: "etika",
  subcategoryId: "topik-8",
  title: "Tanggungjawab Sosial",
  questions: [
    {
      id: "ep01",
      text: "Manakah pernyataan yang paling tepat menghuraikan hubungan antara Takrifan Autoriti dan Takrifan Harian dalam pembentukan masyarakat Malaysia?",
      options: [
        {
          id: "a",
          text: "Takrifan Autoriti wujud untuk menggantikan sepenuhnya Takrifan Harian yang dianggap lapuk.",
        },
        {
          id: "b",
          text: "Takrifan Harian adalah asas pembentukan semua Takrifan Autoriti melalui proses demokrasi.",
        },
        {
          id: "c",
          text: "Kedua-dua takrifan ini wujud secara selari di mana Takrifan Autoriti menetapkan kerangka rasmi, manakala Takrifan Harian mengisi ruang interaksi sosial.",
        },
        {
          id: "d",
          text: "Takrifan Harian hanya terpakai apabila Takrifan Autoriti gagal dikuatkuasakan oleh pemerintah.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Ini adalah hubungan simbiotik yang paling tepat. Perlembagaan (autoriti) menyediakan kerangka hak dan undang-undang, manakala amalan seperti rumah terbuka (harian) melancarkan keharmonian dalam kerangka tersebut.",
        incorrect: {
          a: "Salah. Takrifan Autoriti tidak menggantikan Takrifan Harian. Contohnya, undang-undang perkahwinan (autoriti) wujud bersama adat perkahwinan (harian).",
          b: "Salah. Tidak semua Takrifan Autoriti lahir dari Takrifan Harian. Banyak undang-undang (cth: akta kewangan) bersifat teknikal dan `top-down`.",
          d: "Salah. Kedua-dua takrifan ini beroperasi serentak dalam kehidupan masyarakat, bukan secara bergilir atau sebagai pengganti.",
        },
      },
    },
    {
      id: "ep02",
      text: "Apakah matlamat utama pengisytiharan Rukun Negara pada tahun 1970 sebagai satu manifestasi Takrifan Autoriti dalam konteks membentuk semula realiti sosial Malaysia pasca-1969?",
      options: [
        {
          id: "a",
          text: "Untuk mewujudkan satu set protokol rasmi yang ketat dalam semua upacara kerajaan.",
        },
        {
          id: "b",
          text: "Untuk menjadi ideologi nasional yang formal (`top-down`) bagi membimbing dan membentuk norma sejagat dalam Takrifan Harian (`bottom-up`).",
        },
        {
          id: "c",
          text: "Untuk menghapuskan semua adat resam dan tradisi kaum yang berbeza di Malaysia.",
        },
        {
          id: "d",
          text: "Untuk menetapkan hukuman mandatori bagi sesiapa yang melanggar prinsip keharmonian.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Betul. Rukun Negara diperkenalkan sebagai satu dokumen autoriti (oleh pemerintah) dengan tujuan untuk disemai menjadi nilai dan norma dalam kehidupan harian rakyat, sekali gus mempengaruhi Takrifan Harian ke arah perpaduan nasional.",
        incorrect: {
          a: "Salah. Walaupun ia digunakan dalam upacara rasmi, matlamatnya jauh lebih luas daripada sekadar protokol.",
          c: "Salah. Rukun Negara bertujuan mencari kesatuan dalam kepelbagaian, bukan menghapuskan kepelbagaian adat.",
          d: "Salah. Rukun Negara adalah prinsip panduan, bukan satu akta jenayah yang mempunyai hukuman mandatori secara langsung.",
        },
      },
    },
    {
      id: "ep03",
      text: "Amalan memberi 'ang pau' semasa Tahun Baru Cina adalah contoh Takrifan Harian. Namun, amalan ini boleh bersilang dengan Takrifan Autoriti dalam situasi manakah?",
      options: [
        {
          id: "a",
          text: "Apabila jumlah 'ang pau' yang diberikan dipengaruhi oleh status ekonomi keluarga.",
        },
        {
          id: "b",
          text: "Apabila pemberian 'ang pau' dianggap sebagai rasuah di bawah Akta Suruhanjaya Pencegahan Rasuah Malaysia 2009.",
        },
        {
          id: "c",
          text: "Apabila 'ang pau' diberikan kepada jiran bukan berbangsa Cina sebagai tanda muhibah.",
        },
        {
          id: "d",
          text: "Apabila reka bentuk sampul 'ang pau' memaparkan watak kartun popular.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Betul. Di sini, satu amalan budaya (Takrifan Harian) boleh ditafsirkan sebagai satu kesalahan jenayah di bawah undang-undang rasmi (Takrifan Autoriti) jika ia diberikan atau diterima dalam konteks untuk mempengaruhi keputusan rasmi.",
        incorrect: {
          a: "Salah. Ini adalah variasi dalam amalan Takrifan Harian yang tidak melanggar mana-mana undang-undang formal.",
          c: "Salah. Ini adalah contoh positif interaksi dalam Takrifan Harian yang menggalakkan keharmonian.",
          d: "Salah. Ini adalah aspek kreativiti dalam Takrifan Harian dan tidak mempunyai implikasi undang-undang.",
        },
      },
    },
    {
      id: "ep04",
      text: "Nota kursus mengklasifikasikan 'melanggar lampu isyarat' dan 'street wedding' sebagai contoh dalam perbincangan Takrifan Harian. Apakah justifikasi paling munasabah bagi klasifikasi ini dari perspektif nota tersebut?",
      options: [
        {
          id: "a",
          text: "Kerana kedua-dua tindakan ini dianggap tidak serius dan tidak melanggar undang-undang negara.",
        },
        {
          id: "b",
          text: "Kerana tindakan ini lahir daripada keputusan atau norma pada peringkat individu dan komuniti (`bottom-up`), walaupun ia mungkin bercanggah dengan peraturan formal.",
        },
        {
          id: "c",
          text: "Kerana Takrifan Autoriti hanya merujuk kepada Perlembagaan Persekutuan dan tidak merangkumi akta jalan raya.",
        },
        {
          id: "d",
          text: "Kerana kedua-dua tindakan ini adalah sebahagian daripada adat resam yang dilindungi oleh Perlembagaan.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Betul. Perspektif nota ini kelihatan menekankan sumber tindakan itu. Melanggar lampu isyarat adalah keputusan 'harian' individu, dan 'street wedding' adalah norma 'harian' komuniti. Ia diklasifikasikan sedemikian untuk menunjukkan bagaimana tindakan `bottom-up` ini wujud.",
        incorrect: {
          a: "Salah. Kedua-dua tindakan ini jelas melanggar undang-undang (Akta Pengangkutan Jalan & Akta Jalan, Parit dan Bangunan).",
          c: "Salah. Takrifan Autoriti merangkumi semua bentuk perundangan, termasuk akta-akta spesifik.",
          d: "Salah. Tindakan ini bukan adat resam yang dilindungi; ia adalah pelanggaran peraturan sedia ada.",
        },
      },
    },
    {
      id: "ep05",
      text: "Yang manakah antara berikut paling tepat menggambarkan perbezaan fundamental antara Adat Istiadat dan Adat Resam seperti yang digambarkan dalam slide?",
      options: [
        {
          id: "a",
          text: "Adat Istiadat dikuatkuasakan oleh mahkamah sivil manakala Adat Resam oleh mahkamah syariah.",
        },
        {
          id: "b",
          text: "Adat Istiadat merujuk kepada upacara rasmi yang berprotokol, manakala Adat Resam merujuk kepada amalan kebiasaan dalam kitaran hidup.",
        },
        {
          id: "c",
          text: "Adat Istiadat hanya diamalkan oleh golongan pemerintah, manakala Adat Resam diamalkan oleh rakyat.",
        },
        {
          id: "d",
          text: "Adat Istiadat berasal dari luar negara, manakala Adat Resam adalah amalan tempatan.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Betul. Ini adalah perbezaan utamanya. Adat Istiadat (cth: pertabalan diraja) mempunyai protokol yang perlu dipatuhi dan bersifat lebih formal, manakala Adat Resam (cth: majlis cukur jambul) adalah perilaku kehidupan seharian yang lebih lazim.",
        incorrect: {
          a: "Salah. Penguatkuasaan adat lebih kompleks dan tidak terbahagi secara terus antara mahkamah sivil dan syariah.",
          c: "Salah. Kedua-duanya diamalkan oleh pelbagai lapisan masyarakat, cuma dalam konteks yang berbeza.",
          d: "Salah. Kedua-duanya boleh mempunyai asal usul tempatan atau pengaruh luar.",
        },
      },
    },
    {
      id: "ep06",
      text: "Definisi tanggungjawab sosial sebagai 'kemampuan refleksi seseorang individu terhadap pandangan hidup dipegang tentang keadilan dan kebaikan' membawa implikasi bahawa:",
      options: [
        {
          id: "a",
          text: "Tanggungjawab sosial adalah satu set peraturan tetap yang perlu dihafal dan dipatuhi.",
        },
        {
          id: "b",
          text: "Tindakan sosial yang tidak melalui proses pemikiran mendalam tidak boleh dianggap sebagai tanggungjawab sosial.",
        },
        {
          id: "c",
          text: "Ia adalah satu proses kognitif dan emosi dalaman sebelum dimanifestasikan sebagai tindakan luaran.",
        },
        {
          id: "d",
          text: "Hanya individu yang mempunyai pendidikan tinggi mampu memiliki tanggungjawab sosial.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Betul. Frasa 'kemampuan refleksi' dan 'pandangan hidup' menunjukkan ia bermula dari dalam diri (pemikiran, analisis, penghayatan nilai) sebelum diterjemahkan kepada tindakan.",
        incorrect: {
          a: "Salah. Ia bukan peraturan tetap, tetapi satu 'kemampuan refleksi' yang dinamik dan subjektif.",
          b: "Salah. Tindakan spontan untuk membantu masih boleh dikira, tetapi definisi ini menekankan aspek kesedaran sebagai terasnya.",
          d: "Salah. Tanggungjawab sosial boleh dimiliki oleh sesiapa sahaja tanpa mengira tahap pendidikan formal.",
        },
      },
    },
    {
      id: "ep07",
      text: "Berdasarkan senarai nilai kepimpinan Tun Mahathir, bagaimanakah 'Substantif Rasionaliti' (cth: amanah, jujur) menyokong 'Formal Rasionaliti' (cth: kerajinan, sistem teratur)?",
      options: [
        {
          id: "a",
          text: "Tanpa 'Formal Rasionaliti', 'Substantif Rasionaliti' tidak akan mempunyai sebarang makna.",
        },
        {
          id: "b",
          text: "'Substantif Rasionaliti' menyediakan kompas moral, manakala 'Formal Rasionaliti' menyediakan mekanisme untuk mencapai tujuan tersebut.",
        },
        {
          id: "c",
          text: "Kedua-dua kategori rasionaliti ini saling eksklusif dan tidak berinteraksi antara satu sama lain.",
        },
        {
          id: "d",
          text: "'Substantif Rasionaliti' hanya penting untuk pemimpin tertinggi, manakala 'Formal Rasionaliti' untuk pegawai bawahan.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Betul. Ini adalah hubungan yang paling logik. Seseorang yang amanah (substantif) akan memastikan sistem teratur (formal) dilaksanakan dengan baik. Nilai teras (substantif) memberi jiwa kepada sistem (formal).",
        incorrect: {
          a: "Salah. Nilai seperti kejujuran tetap bermakna walaupun sistem tidak teratur, tetapi keberkesanannya mungkin terhad.",
          c: "Salah. Mereka saling melengkapi untuk membentuk kepimpinan yang berkesan dan beretika.",
          d: "Salah. Kedua-duanya penting di semua peringkat kepimpinan untuk memastikan integriti dan kecekapan.",
        },
      },
    },
    {
      id: "ep08",
      text: "slide menyatakan, 'Etika, moral dan akhlak adalah... tali-tali pengikat kemanusiaan, social bonding, social cement'. Apakah implikasi pernyataan ini dalam konteks sebuah negara majmuk?",
      options: [
        {
          id: "a",
          text: "Undang-undang dan penguatkuasaan adalah tidak penting selagi rakyat mempunyai etika yang tinggi.",
        },
        {
          id: "b",
          text: "Ikatan sosial yang mampan tidak boleh hanya bergantung pada paksaan undang-undang, tetapi mesti dipupuk melalui nilai-nilai kemanusiaan sejagat.",
        },
        {
          id: "c",
          text: "Setiap kumpulan etnik perlu berpegang teguh hanya kepada sistem etika peradaban masing-masing tanpa perlu memahami etika kaum lain.",
        },
        {
          id: "d",
          text: "'Social bonding' hanya boleh dicapai jika semua rakyat menganut agama dan budaya yang sama.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Betul. Pernyataan ini menegaskan bahawa keharmonian sejati (`social bonding`) datang dari nilai dalaman yang dikongsi (etika, moral), bukan semata-mata kerana takut kepada hukuman (undang-undang).",
        incorrect: {
          a: "Salah. Undang-undang (Takrifan Autoriti) tetap penting sebagai kerangka dan panduan formal masyarakat.",
          c: "Salah. Dalam negara majmuk, persefahaman antara sistem etika yang berbeza adalah kunci kepada 'social bonding'.",
          d: "Salah. 'Social bonding' boleh dicapai melalui perkongsian nilai-nilai universal (seperti hormat, belas kasihan) walaupun agama dan budaya berbeza.",
        },
      },
    },
    {
      id: "ep09",
      text: "Apakah yang dimaksudkan dengan 'aras' tanggungjawab sosial seperti yang dibincangkan dalam nota?",
      options: [
        {
          id: "a",
          text: "Tahap kesukaran dalam melaksanakan sesuatu tindakan sosial.",
        },
        {
          id: "b",
          text: "Peringkat-peringkat hierarki dalam organisasi sukarelawan.",
        },
        {
          id: "c",
          text: "Skop pengaruh dan pelaksanaan tanggungjawab, iaitu pada peringkat peribadi dan pada peringkat kolektif.",
        },
        {
          id: "d",
          text: "Kategori tanggungjawab sosial berdasarkan sektor: awam, swasta, dan NGO.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Betul. Nota dengan jelas membezakan dua aras: (i) nilai betul dan salah pada tindakan peribadi dan (ii) nilai betul dan salah pada tindakan kolektif yang melibatkan interaksi dengan orang lain sehingga ke peringkat global.",
        incorrect: {
          a: "Salah. Aras di sini bukan merujuk kepada kesukaran, tetapi kepada skop atau domain aplikasi.",
          b: "Salah. Ini merujuk kepada struktur organisasi, bukan konsep tanggungjawab sosial itu sendiri.",
          d: "Salah. Ini adalah pembahagian mengikut sektor, bukan 'aras' seperti yang dimaksudkan dalam nota.",
        },
      },
    },
    {
      id: "ep10",
      text: "'Dimensi' tanggungjawab sosial merangkumi kesedaran dalaman terhadap ketidakadilan dan tindakan luaran yang membawa transformasi sosial. Manakah senario berikut paling lengkap menggambarkan kedua-dua dimensi ini?",
      options: [
        {
          id: "a",
          text: "Seseorang berasa sedih melihat gambar kanak-kanak kelaparan di media sosial.",
        },
        {
          id: "b",
          text: "Sebuah NGO menganjurkan larian amal tahunan untuk mengutip dana.",
        },
        {
          id: "c",
          text: "Seorang graduan yang menyedari masalah buta huruf di kampungnya, pulang dan menubuhkan kelas bimbingan percuma yang berjaya meningkatkan kadar celik huruf.",
        },
        {
          id: "d",
          text: "Seorang ahli politik membangkitkan isu kemiskinan dalam sidang parlimen.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Betul. Senario ini lengkap: kesedaran (menyedari masalah buta huruf) diikuti oleh tindakan (menubuhkan kelas) yang membawa transformasi sosial (peningkatan kadar celik huruf).",
        incorrect: {
          a: "Salah. Ini hanya menggambarkan dimensi pertama (kesedaran) tanpa sebarang tindakan susulan.",
          b: "Salah. Ini adalah tindakan, tetapi tidak semestinya didahului oleh kesedaran peribadi yang mendalam (ia mungkin hanya aktiviti rutin organisasi).",
          d: "Salah. Ini adalah tindakan, tetapi mungkin didorong oleh motif politik dan tidak semestinya membawa transformasi yang nyata.",
        },
      },
    },
    {
      id: "ep11",
      text: "Apakah faktor utama yang membezakan antara 'Kesedaran Nasional' dan 'Kesedaran Kesejagatan' dalam konteks tanggungjawab sosial?",
      options: [
        {
          id: "a",
          text: "Tahap publisiti media yang diterima oleh sesuatu isu.",
        },
        {
          id: "b",
          text: "Sempadan geografi dan skop komuniti yang terkesan oleh isu tersebut.",
        },
        {
          id: "c",
          text: "Jenis bantuan yang dihulurkan (kewangan vs. tenaga).",
        },
        {
          id: "d",
          text: "Sumber dana yang digunakan untuk menyokong sesuatu misi bantuan.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Betul. Perbezaan utamanya adalah pada skop. Kesedaran Nasional tertumpu pada isu dalam negara (cth: banjir Manik Urai). Kesedaran Kesejagatan pula merujuk kepada isu yang melangkaui sempadan negara (cth: Perubahan Iklim).",
        incorrect: {
          a: "Salah. Ini adalah aspek liputan, bukan faktor penentu kategori kesedaran itu sendiri.",
          c: "Salah. Jenis bantuan tidak menentukan skop kesedaran; kedua-dua jenis bantuan boleh diaplikasikan untuk isu nasional dan kesejagatan.",
          d: "Salah. Sumber dana juga tidak menjadi faktor penentu utama bagi kategori kesedaran.",
        },
      },
    },
    {
      id: "ep12",
      text: "Mengapakah isu 'Perubahan Iklim' diklasifikasikan sebagai tanggungjawab sosial pada peringkat kesejagatan?",
      options: [
        {
          id: "a",
          text: "Kerana ia hanya boleh diselesaikan oleh negara-negara maju yang mempunyai teknologi hijau.",
        },
        {
          id: "b",
          text: "Kerana puncanya (pelepasan karbon) dan kesannya (kenaikan suhu global) adalah fenomena rentas sempadan yang memerlukan kerjasama global.",
        },
        {
          id: "c",
          text: "Kerana ia adalah agenda utama yang ditetapkan oleh Pertubuhan Bangsa-Bangsa Bersatu (PBB).",
        },
        {
          id: "d",
          text: "Kerana ia memberi kesan yang sama rata kepada semua negara di dunia.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Betul. Isu ini bersifat global secara intrinsik. Tindakan di satu negara memberi kesan kepada seluruh planet. Oleh itu, tanggungjawab untuk menanganinya adalah tanggungjawab sejagat.",
        incorrect: {
          a: "Salah. Penyelesaiannya memerlukan komitmen semua negara, bukan hanya negara maju.",
          c: "Salah. Walaupun PBB menanganinya, ia dikategorikan sebagai isu kesejagatan kerana sifat isu itu sendiri, bukan kerana siapa yang menetapkan agenda.",
          d: "Salah. Kesannya tidak sama rata; negara-negara kepulauan kecil dan negara miskin lebih terdedah dan terkesan teruk.",
        },
      },
    },
    {
      id: "ep13",
      text: "Bantuan kemanusiaan yang disalurkan oleh rakyat Malaysia kepada mangsa perang di Yemen adalah manifestasi 'Kesedaran Kesejagatan'. Apakah nilai etika dan peradaban yang paling menonjol dalam tindakan ini?",
      options: [
        { id: "a", text: "Patriotisme dan semangat cintakan negara." },
        { id: "b", text: "Kepatuhan kepada undang-undang antarabangsa." },
        {
          id: "c",
          text: "Sifat perikemanusiaan sejagat (universal humanity) dan belas kasihan.",
        },
        {
          id: "d",
          text: "Kepentingan strategik untuk mengukuhkan hubungan diplomatik.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Betul. Tindakan membantu mereka yang berada jauh di negara lain, tanpa sebarang ikatan kenegaraan, adalah didorong oleh nilai kemanusiaan sejagat yang merentasi sempadan bangsa, agama, dan budaya.",
        incorrect: {
          a: "Salah. Patriotisme lebih relevan untuk kesedaran nasional, bukan isu luar negara.",
          b: "Salah. Bantuan ini biasanya lahir dari rasa simpati, bukan kerana mematuhi mana-mana undang-undang.",
          d: "Salah. Ini mungkin menjadi pertimbangan peringkat kerajaan, tetapi bagi rakyat biasa yang menderma, dorongan utamanya adalah kemanusiaan.",
        },
      },
    },
    {
      id: "ep14",
      text: "Bagaimanakah 'Kesedaran Nasional' seperti yang ditunjukkan semasa tragedi gempa bumi Sabah boleh menyumbang kepada pengukuhan peradaban Malaysia?",
      options: [
        {
          id: "a",
          text: "Dengan membuktikan bahawa sistem pengurusan bencana negara adalah yang terbaik di dunia.",
        },
        {
          id: "b",
          text: "Dengan mengukuhkan 'social bonding' dan rasa kekitaan merentasi pelbagai kaum dan wilayah sebagai satu bangsa Malaysia.",
        },
        {
          id: "c",
          text: "Dengan meningkatkan populariti kerajaan yang memerintah pada ketika itu.",
        },
        {
          id: "d",
          text: "Dengan menggalakkan persaingan antara negeri untuk menunjukkan siapa yang memberi sumbangan paling banyak.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Betul. Apabila rakyat dari Semenanjung bersolidariti dengan rakyat di Sabah (dan sebaliknya), ia mengukuhkan ikatan emosi dan identiti sebagai satu negara. Ini adalah elemen penting dalam peradaban sebuah negara majmuk.",
        incorrect: {
          a: "Salah. Ini adalah satu andaian yang tidak semestinya benar dan bukan fokus utama pengukuhan peradaban.",
          c: "Salah. Ini adalah kesan sampingan politik yang tidak relevan dengan pembinaan peradaban.",
          d: "Salah. Persaingan sebegini boleh membawa kepada kesan negatif dan bukan matlamat kesedaran nasional.",
        },
      },
    },
    {
      id: "ep15",
      text: "Apakah peranan kesukarelaan dalam mengisi jurang antara Takrifan Autoriti dan Takrifan Harian?",
      options: [
        {
          id: "a",
          text: "Kesukarelaan membuktikan bahawa Takrifan Autoriti tidak lagi relevan dalam masyarakat moden.",
        },
        {
          id: "b",
          text: "Kesukarelaan membolehkan rakyat mengambil alih sepenuhnya fungsi dan tanggungjawab kerajaan.",
        },
        {
          id: "c",
          text: "Kesukarelaan menjadi mekanisme `bottom-up` di mana masyarakat secara proaktif menangani isu-isu yang mungkin tidak dapat ditangani sepenuhnya oleh jentera kerajaan (`top-down`).",
        },
        {
          id: "d",
          text: "Kesukarelaan adalah satu bentuk Takrifan Autoriti kerana semua NGO perlu berdaftar dengan Pendaftar Pertubuhan (ROS).",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Betul. Ini adalah peranan utamanya. Kerajaan (autoriti) menyediakan dasar dan perkhidmatan asas. Sukarelawan (berdasarkan takrifan harian/nilai) menangani keperluan spesifik komuniti dengan lebih fleksibel dan pantas.",
        incorrect: {
          a: "Salah. Kesukarelaan melengkapi, bukan menidakkan peranan kerajaan.",
          b: "Salah. Kesukarelaan adalah pelengkap kepada fungsi kerajaan, bukan pengganti.",
          d: "Salah. Walaupun NGO perlu berdaftar (aspek autoriti), semangat dan tindakan kesukarelaan itu sendiri lahir dari nilai `bottom-up`.",
        },
      },
    },
    {
      id: "ep16",
      text: "Salah satu imej dalam slide menunjukkan buku 'Building Social Business' oleh Muhammad Yunus. Apakah idea utama 'perniagaan sosial' yang relevan dengan topik ini?",
      options: [
        {
          id: "a",
          text: "Perniagaan yang memaksimumkan keuntungan untuk pemegang saham sambil membayar cukai kepada kerajaan.",
        },
        {
          id: "b",
          text: "Sebuah model perniagaan yang matlamat utamanya adalah untuk menyelesaikan masalah sosial, bukan untuk menjana keuntungan peribadi.",
        },
        {
          id: "c",
          text: "Aktiviti sukarela yang dijalankan oleh syarikat-syarikat korporat untuk tujuan publisiti dan imej jenama.",
        },
        {
          id: "d",
          text: "Kerjasama antara kerajaan dan sektor swasta untuk membina infrastruktur mega.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Betul. Konsep Muhammad Yunus adalah mengenai perniagaan yang mampan dari segi kewangan tetapi misi utamanya adalah untuk memberi impak sosial. Keuntungan akan dilaburkan semula untuk mengembangkan misi sosial tersebut.",
        incorrect: {
          a: "Salah. Ini adalah model perniagaan konvensional yang berorientasikan keuntungan semata-mata.",
          c: "Salah. Ini lebih kepada Tanggungjawab Sosial Korporat (CSR) yang mungkin tidak mempunyai matlamat penyelesaian masalah sebagai terasnya.",
          d: "Salah. Ini adalah kerjasama strategik, bukan model perniagaan sosial yang dimaksudkan.",
        },
      },
    },
    {
      id: "ep17",
      text: "Berdasarkan objektif kursus untuk 'mempamerkan minat kesukarelawan dalam mencapai keharmonian masyarakat', tindakan manakah yang paling mencerminkan pencapaian objektif ini?",
      options: [
        {
          id: "a",
          text: "Menderma wang sekali setahun kepada badan amal pilihan.",
        },
        {
          id: "b",
          text: "Menyertai program gotong-royong membersihkan kawasan kejiranan yang disertai oleh pelbagai kaum.",
        },
        {
          id: "c",
          text: "Menulis sebuah esei akademik tentang kepentingan kesukarelaan.",
        },
        {
          id: "d",
          text: "Mengikuti perkembangan aktiviti sukarelawan melalui media sosial.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Betul. Tindakan ini secara aktif melibatkan penyertaan fizikal dan interaksi dengan anggota masyarakat lain dari pelbagai latar belakang. Ia secara langsung membina 'social bonding' dan menyumbang kepada keharmonian.",
        incorrect: {
          a: "Salah. Ini adalah tindakan yang baik tetapi pasif dan tidak semestinya melibatkan interaksi sosial.",
          c: "Salah. Ini adalah tindakan akademik yang tidak secara langsung 'mempamerkan' minat dalam bentuk amali di lapangan.",
          d: "Salah. Ini adalah tindakan pemerhatian yang pasif, bukan penyertaan aktif.",
        },
      },
    },
    {
      id: "ep18",
      text: "Antara berikut, yang manakah merupakan contoh bagaimana Takrifan Autoriti dan Takrifan Harian saling berinteraksi secara positif?\n\nI. Kerajaan menggubal Akta Pengurusan Sisa Pepejal (Autoriti), dan masyarakat menyahutnya dengan amalan kitar semula (Harian).\nII. Prinsip Rukun Negara (Autoriti) dihayati dan diamalkan dalam bentuk sikap hormat-menghormati antara jiran (Harian).\nIII. Adat perkahwinan kaum (Harian) didaftarkan secara rasmi di bawah Undang-Undang Keluarga (Autoriti).\nIV. Pemandu memandu melebihi had laju yang ditetapkan (Pelanggaran Autoriti) kerana sudah menjadi kebiasaan (Harian).",
      options: [
        { id: "a", text: "I dan II sahaja" },
        { id: "b", text: "I, II dan III sahaja" },
        { id: "c", text: "II, III dan IV sahaja" },
        { id: "d", text: "Semua di atas" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Betul. Ketiga-tiga senario (I, II, III) ini menunjukkan bagaimana kerangka formal (autoriti) dan amalan masyarakat (harian) saling menyokong dan melengkapi untuk hasil yang baik.",
        incorrect: {
          a: "Tidak lengkap. Pilihan III juga merupakan contoh interaksi positif yang penting.",
          c: "Salah. Pilihan IV adalah contoh interaksi negatif di mana amalan harian bercanggah dengan peraturan autoriti.",
          d: "Salah. Pilihan IV adalah contoh interaksi negatif, bukan positif.",
        },
      },
    },
    {
      id: "ep19",
      text: "Individu yang 'mendarah-daging kebertanggungjawaban sosial dalam dirinya' akan sentiasa:\n\nI. Memerhati, memikir, dan menganalisis isu keadilan dalam masyarakat.\nII. Mencari penyelesaian dan bertindak untuk menegakkan kebaikan.\nIII. Menunggu arahan rasmi daripada pihak berkuasa sebelum mengambil sebarang tindakan.\nIV. Mengutamakan keuntungan peribadi dalam semua keputusan.",
      options: [
        { id: "a", text: "I dan II sahaja" },
        { id: "b", text: "I, II dan IV sahaja" },
        { id: "c", text: "III dan IV sahaja" },
        { id: "d", text: "Semua di atas" },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Betul. slide secara eksplisit menyatakan bahawa individu ini akan 'memerhati, memikir, mengkaji, menganalisis, mencari penyelesaian dan bertindak'.",
        incorrect: {
          b: "Salah. Pilihan IV (mengutamakan keuntungan peribadi) bercanggah dengan konsep kesejahteraan bersama.",
          c: "Salah. Ciri-ciri ini (III dan IV) menggambarkan individu yang pasif dan mementingkan diri, bertentangan dengan sifat tanggungjawab sosial.",
          d: "Salah. Pilihan III dan IV adalah ciri yang bertentangan dengan tanggungjawab sosial.",
        },
      },
    },
    {
      id: "ep20",
      text: "Pernyataan oleh Donald and Kovac (2013) bahawa 'setiap kerja saintifik pada dasarnya bermatlamatkan untuk mempromosi dan menjaga kesejahteraan hidup manusia' menegaskan bahawa:\n\nI. Golongan saintis mempunyai tanggungjawab sosial yang tinggi.\nII. Ilmu sains tidak wujud dalam vakum, tetapi dalam kerangka masyarakat.\nIII. Etika adalah komponen yang tidak boleh dipisahkan daripada amalan saintifik.\nIV. Keuntungan daripada penemuan saintifik mesti menjadi milik masyarakat sepenuhnya.",
      options: [
        { id: "a", text: "I dan II sahaja" },
        { id: "b", text: "I, II dan III sahaja" },
        { id: "c", text: "II, III dan IV sahaja" },
        { id: "d", text: "Semua di atas" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Betul. Pernyataan ini secara langsung menyiratkan bahawa saintis ada tanggungjawab sosial (I), sains berkait dengan masyarakat (II), dan oleh itu, pertimbangan etika (III) adalah penting.",
        incorrect: {
          a: "Tidak lengkap. Aspek etika (III) adalah implikasi penting yang tidak boleh diabaikan.",
          c: "Salah. Pilihan IV tidak disentuh dalam pernyataan tersebut dan merupakan isu berasingan mengenai harta intelek.",
          d: "Salah. Pilihan IV adalah satu tafsiran yang melampau dan tidak dinyatakan dalam petikan.",
        },
      },
    },
    {
      id: "ep21",
      text: "Mengapakah kajian etika dan peradaban perlu dilakukan pada tiga peringkat: mikro (akar umbi), institusi (masyarakat sivil), dan makro (pihak berkuasa)?",
      options: [
        {
          id: "a",
          text: "Untuk membuktikan bahawa hanya peringkat makro yang mempunyai kuasa untuk membawa perubahan.",
        },
        {
          id: "b",
          text: "Untuk memahami bagaimana nilai individu, tindakan komuniti, dan dasar negara saling mempengaruhi dalam membentuk sebuah masyarakat yang beretika.",
        },
        {
          id: "c",
          text: "Kerana setiap peringkat ini beroperasi secara terasing dan tidak mempunyai kaitan antara satu sama lain.",
        },
        {
          id: "d",
          text: "Untuk membolehkan masyarakat sivil mengambil alih sepenuhnya peranan pihak berkuasa.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Betul. Ini adalah tujuan utama pendekatan pelbagai peringkat, iaitu untuk melihat interaksi dan dinamika antara individu (mikro), kumpulan (institusi), dan negara (makro) dalam membentuk tanggungjawab sosial.",
        incorrect: {
          a: "Salah. Pendekatan ini justru menunjukkan bahawa perubahan boleh berlaku di semua peringkat, bukan hanya makro.",
          c: "Salah. Konsep ini menegaskan bahawa ketiga-tiga peringkat ini saling berkaitan dan tidak terasing.",
          d: "Salah. Tujuannya adalah untuk memahami peranan setiap peringkat, bukan untuk satu peringkat mengambil alih peranan yang lain.",
        },
      },
    },
    {
      id: "ep22",
      text: "Apakah perbezaan utama antara 'Tindakan Pelanggaran' dan 'Mengurus Pelanggaran' seperti yang digambarkan dalam rajah pada slide 16?",
      options: [
        {
          id: "a",
          text: "'Tindakan Pelanggaran' merujuk kepada kesalahan jenayah, manakala 'Mengurus Pelanggaran' merujuk kepada kesalahan sivil.",
        },
        {
          id: "b",
          text: "'Tindakan Pelanggaran' adalah perbuatan tidak beretika itu sendiri, manakala 'Mengurus Pelanggaran' adalah respons atau mekanisme untuk menanganinya.",
        },
        {
          id: "c",
          text: "'Tindakan Pelanggaran' hanya berlaku pada peringkat individu, manakala 'Mengurus Pelanggaran' berlaku pada peringkat organisasi.",
        },
        {
          id: "d",
          text: "'Tindakan Pelanggaran' adalah isu luaran, manakala 'Mengurus Pelanggaran' adalah isu dalaman.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Betul. Rajah tersebut menunjukkan satu aliran proses di mana satu pelanggaran etika (Tindakan Pelanggaran) akan diurus melalui mekanisme tertentu (Mengurus Pelanggaran) sama ada secara dalaman atau luaran.",
        incorrect: {
          a: "Salah. Konteksnya adalah etika profesional secara umum, tidak terhad kepada pembahagian jenayah atau sivil.",
          c: "Salah. Pelanggaran boleh berlaku pada peringkat individu atau organisasi, dan pengurusannya juga boleh berlaku di pelbagai peringkat.",
          d: "Salah. Rajah menunjukkan bahawa 'Mengurus Pelanggaran' boleh berlaku secara dalaman dan luaran.",
        },
      },
    },
    {
      id: "ep23",
      text: "Bagaimanakah konsep 'perasaan malu' dalam senarai Substantif Rasionaliti berfungsi sebagai mekanisme kawalan dalaman untuk seorang pemimpin?",
      options: [
        {
          id: "a",
          text: "Ia mendorong pemimpin untuk mengelak daripada membuat sebarang keputusan yang berisiko.",
        },
        {
          id: "b",
          text: "Ia menjadi penghalang dalaman daripada melakukan tindakan yang tidak amanah kerana takut akan kehilangan maruah diri dan pandangan masyarakat.",
        },
        {
          id: "c",
          text: "Ia menyebabkan pemimpin menjadi tidak yakin dan ragu-ragu dalam menjalankan tugas.",
        },
        {
          id: "d",
          text: "Ia adalah satu nilai tradisional yang tidak lagi relevan dalam kepimpinan moden.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Betul. 'Perasaan malu' dalam konteks ini adalah nilai positif yang berfungsi sebagai benteng integriti. Ia menghalang seseorang daripada melakukan salah laku kerana kesedaran tentang maruah dan akauntabiliti.",
        incorrect: {
          a: "Salah. Nilai ini berkaitan dengan integriti, bukan pengambilan risiko (risk appetite).",
          c: "Salah. Ia sepatutnya memupuk kepimpinan yang berhati-hati dan berintegriti, bukan yang tidak yakin.",
          d: "Salah. Nilai seperti integriti dan akauntabiliti yang terkandung dalam 'perasaan malu' adalah relevan sepanjang zaman.",
        },
      },
    },
    {
      id: "ep24",
      text: "Dalam konteks Malaysia, bagaimanakah kepelbagaian perayaan (cth: DeepaRaya) menyumbang kepada realiti sosial yang dikongsi bersama?",
      options: [
        {
          id: "a",
          text: "Dengan membuktikan bahawa hanya satu perayaan utama yang dominan di Malaysia.",
        },
        {
          id: "b",
          text: "Dengan mewujudkan pengalaman bersama dan norma sosial (Takrifan Harian) yang melangkaui batas kaum dan agama.",
        },
        {
          id: "c",
          text: "Dengan menyeragamkan cara semua perayaan disambut untuk mengelakkan perbezaan.",
        },
        {
          id: "d",
          text: "Dengan mengasingkan setiap komuniti untuk menyambut perayaan mereka secara tertutup.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Betul. Perayaan yang pelbagai, apabila disambut bersama melalui amalan seperti rumah terbuka, mencipta satu lapisan pengalaman sosial yang dikongsi (realiti sosial) dan membentuk norma harian yang positif.",
        incorrect: {
          a: "Salah. Imej 'DeepaRaya' justru menunjukkan gabungan dan penerimaan kepelbagaian, bukan dominasi.",
          c: "Salah. Kekuatan Malaysia terletak pada meraikan kepelbagaian, bukan menyeragamkannya.",
          d: "Salah. Ini bertentangan dengan semangat muhibah yang cuba dipaparkan melalui imej-imej dalam nota.",
        },
      },
    },
    {
      id: "ep25",
      text: "Apakah yang dimaksudkan dengan 'kesedaran dalam diri' sebagai dimensi pertama tanggungjawab sosial?",
      options: [
        {
          id: "a",
          text: "Kesedaran tentang kekuatan dan kelemahan diri sendiri dalam kerjaya.",
        },
        {
          id: "b",
          text: "Proses internalisasi dan kepekaan seseorang terhadap isu-isu ketidakadilan dan kezaliman yang berlaku di sekelilingnya.",
        },
        {
          id: "c",
          text: "Kesedaran tentang undang-undang dan peraturan yang mesti dipatuhi untuk mengelak hukuman.",
        },
        {
          id: "d",
          text: "Keinginan untuk dikenali sebagai seorang yang prihatin dan aktif dalam masyarakat.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Betul. Dimensi ini merujuk kepada kebangkitan nurani atau kesedaran moral terhadap masalah sosial, yang menjadi pendorong kepada tindakan selanjutnya.",
        incorrect: {
          a: "Salah. Ini lebih merujuk kepada kesedaran kendiri (self-awareness) dalam konteks pembangunan peribadi, bukan sosial.",
          c: "Salah. Ini adalah pematuhan kepada autoriti, bukan kesedaran moral dalaman.",
          d: "Salah. Ini lebih kepada motivasi luaran (keinginan untuk dipuji), bukan kesedaran dalaman yang tulen.",
        },
      },
    },
    {
      id: "ep26",
      text: "Antara berikut, manakah yang paling tepat menerangkan peranan etika dan peradaban dalam mendokong tanggungjawab sosial di Malaysia?",
      options: [
        {
          id: "a",
          text: "Etika dan peradaban menyediakan satu set hukuman alternatif kepada sistem perundangan sedia ada.",
        },
        {
          id: "b",
          text: "Etika dan peradaban menjadi sumber nilai dalaman yang mendorong individu untuk bertindak demi kebaikan bersama, melangkaui pematuhan minimum terhadap undang-undang.",
        },
        {
          id: "c",
          text: "Etika dan peradaban hanya relevan dalam konteks hubungan antarabangsa dan diplomasi.",
        },
        {
          id: "d",
          text: "Etika dan peradaban adalah konsep teori yang tidak mempunyai aplikasi praktikal dalam kehidupan seharian.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Betul. Ini adalah kesimpulan menyeluruh daripada topik ini. Etika dan peradaban memberi 'sebab' dan 'motivasi' untuk tanggungjawab sosial, manakala undang-undang hanya menetapkan 'sempadan' minimum.",
        incorrect: {
          a: "Salah. Etika dan peradaban bukan sistem hukuman, tetapi sistem nilai panduan.",
          c: "Salah. Konsep ini relevan pada semua peringkat, dari individu, komuniti, negara, hingga antarabangsa.",
          d: "Salah. Keseluruhan topik ini menunjukkan aplikasi praktikalnya melalui kesukarelawanan, kesedaran nasional, dan interaksi harian.",
        },
      },
    },
    {
      id: "ep27",
      text: "Pilih pernyataan yang tepat mengenai perbezaan antara protokol dalam Takrifan Autoriti dan Takrifan Harian.\n\nI. Protokol autoriti adalah ketat, terperinci dan sering bertulis, manakala protokol harian adalah fleksibel dan tidak bertulis.\nII. Pelanggaran protokol autoriti boleh membawa kesan perundangan, manakala pelanggaran protokol harian mungkin hanya membawa sanksi sosial.\nIII. Protokol autoriti terpakai dalam urusan rasmi negara, manakala protokol harian dalam interaksi komuniti.\nIV. Tiada sebarang perbezaan antara kedua-dua protokol tersebut.",
      options: [
        { id: "a", text: "I dan II sahaja" },
        { id: "b", text: "I, II dan III sahaja" },
        { id: "c", text: "IV sahaja" },
        { id: "d", text: "Semua di atas" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Betul. Ketiga-tiga pernyataan (I, II, III) dengan tepat membezakan sifat (formal vs tidak formal), kesan (perundangan vs sosial), dan aplikasi (negara vs komuniti) protokol dalam kedua-dua takrifan.",
        incorrect: {
          a: "Tidak lengkap. Pilihan III juga merupakan perbezaan penting dari segi konteks aplikasi.",
          c: "Salah. Pilihan IV jelas salah kerana terdapat perbezaan yang nyata antara kedua-duanya.",
          d: "Salah. Pilihan IV adalah tidak benar.",
        },
      },
    },
    {
      id: "ep28",
      text: "Mengapakah 'minat kesukarelawan' menjadi salah satu Hasil Pembelajaran Topik 8?",
      options: [
        {
          id: "a",
          text: "Kerana sektor kesukarelaan menawarkan peluang pekerjaan yang lumayan.",
        },
        {
          id: "b",
          text: "Kerana ia adalah manifestasi amali yang menterjemahkan kefahaman teori tentang etika dan tanggungjawab sosial ke dalam dunia sebenar.",
        },
        {
          id: "c",
          text: "Kerana kerajaan mewajibkan semua graduan untuk mempunyai pengalaman sukarela sebelum bekerja.",
        },
        {
          id: "d",
          text: "Kerana aktiviti sukarela adalah lebih penting daripada mematuhi undang-undang negara.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Betul. Ia adalah jambatan antara pengetahuan (`knowing`) dan perbuatan (`doing`). Mempamerkan minat ini menunjukkan bahawa pelajar bukan sahaja faham tetapi juga bersedia untuk bertindak.",
        incorrect: {
          a: "Salah. Kesukarelaan lazimnya tidak berorientasikan keuntungan kewangan.",
          c: "Salah. Walaupun digalakkan, ia bukan satu kewajipan mandatori untuk semua graduan.",
          d: "Salah. Kedua-duanya penting. Kesukarelaan tidak boleh menjadi alasan untuk tidak mematuhi undang-undang.",
        },
      },
    },
    {
      id: "ep29",
      text: "slide menunjukkan imej atlet negara seperti Nicol David dan Lee Chong Wei. Bagaimanakah kejayaan mereka menyumbang kepada 'Kesedaran Nasional'?",
      options: [
        {
          id: "a",
          text: "Dengan membuktikan bahawa sukan adalah satu-satunya cara untuk menyatukan rakyat Malaysia.",
        },
        {
          id: "b",
          text: "Dengan menjadi ikon yang membangkitkan rasa bangga dan identiti kolektif sebagai satu bangsa, mengatasi perbezaan kaum.",
        },
        {
          id: "c",
          text: "Dengan menunjukkan bahawa kejayaan individu adalah lebih penting daripada kejayaan pasukan.",
        },
        {
          id: "d",
          text: "Dengan menggalakkan semua rakyat Malaysia untuk menjadi atlet profesional.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Betul. Kejayaan mereka dalam arena antarabangsa menjadi titik tumpu kebanggaan bersama, mengukuhkan 'social bonding' dan 'Kesedaran Nasional'.",
        incorrect: {
          a: "Salah. Sukan adalah salah satu cara yang berkesan, tetapi bukan 'satu-satunya' cara.",
          c: "Salah. Kejayaan individu mereka diraikan secara kolektif oleh negara, menunjukkan kepentingan perpaduan.",
          d: "Salah. Matlamatnya adalah untuk inspirasi dan perpaduan, bukan untuk menjadikan semua orang atlet.",
        },
      },
    },
    {
      id: "ep30",
      text: "Antara yang berikut, manakah BUKAN ciri Takrifan Harian?",
      options: [
        { id: "a", text: "Ditentukan oleh individu, keluarga dan komuniti." },
        { id: "b", text: "Tiada peraturan bertulis." },
        { id: "c", text: "Lahir dari perilaku kehidupan seharian." },
        {
          id: "d",
          text: "Dikuatkuasakan melalui perundangan dan protokol formal.",
        },
      ],
      correctOptionId: "d",
      explanation: {
        correct:
          "Betul. Ciri ini adalah definisi bagi Takrifan Autoriti, bukan Takrifan Harian.",
        incorrect: {
          a: "Salah. Ini adalah ciri utama Takrifan Harian (`bottom-up`).",
          b: "Salah. Ini adalah ciri Takrifan Harian yang bersifat tidak formal.",
          c: "Salah. Ini adalah sumber atau asal usul bagi Takrifan Harian.",
        },
      },
    },
    {
      id: "ep31",
      text: "Apakah kaitan antara 'keadilan' dan 'keharmonian' sebagai matlamat tanggungjawab sosial?",
      options: [
        {
          id: "a",
          text: "Keadilan mesti dikorbankan untuk mencapai keharmonian.",
        },
        {
          id: "b",
          text: "Keharmonian yang mampan hanya boleh dicapai apabila wujudnya rasa keadilan dalam masyarakat.",
        },
        {
          id: "c",
          text: "Keadilan adalah tanggungjawab kerajaan, manakala keharmonian adalah tanggungjawab rakyat.",
        },
        {
          id: "d",
          text: "Kedua-dua konsep ini tidak mempunyai sebarang kaitan.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Betul. Keharmonian yang hanya di permukaan tanpa menangani isu ketidakadilan tidak akan bertahan lama. Keadilan adalah asas kepada keharmonian yang tulen.",
        incorrect: {
          a: "Salah. Keharmonian yang dicapai dengan mengorbankan keadilan adalah keharmonian palsu dan tidak stabil.",
          c: "Salah. Kedua-duanya adalah tanggungjawab bersama kerajaan dan rakyat.",
          d: "Salah. Kedua-dua konsep ini sangat berkait rapat dalam falsafah sosial dan politik.",
        },
      },
    },
    {
      id: "ep32",
      text: "Pilih senario yang menggambarkan kegagalan dalam tanggungjawab sosial.\n\nI. Sebuah kilang membuang sisa toksik ke dalam sungai untuk menjimatkan kos.\nII. Pengguna media sosial menyebarkan berita palsu yang boleh menimbulkan ketegangan kaum.\nIII. Seorang pejalan kaki membuang sampah ke dalam tong sampah yang disediakan.\nIV. Sebuah syarikat menyediakan pusat jagaan kanak-kanak untuk kakitangannya.",
      options: [
        { id: "a", text: "I dan II sahaja" },
        { id: "b", text: "III dan IV sahaja" },
        { id: "c", text: "I, II dan III sahaja" },
        { id: "d", text: "Semua di atas" },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Betul. I (tanggungjawab kepada alam sekitar) dan II (tanggungjawab kepada keharmonian sosial) adalah contoh jelas pengabaian tanggungjawab sosial.",
        incorrect: {
          b: "Salah. Pilihan III dan IV adalah contoh tindakan yang bertanggungjawab.",
          c: "Salah. Pilihan III adalah tindakan yang bertanggungjawab, bukan kegagalan.",
          d: "Salah. Pilihan III dan IV adalah tindakan positif.",
        },
      },
    },
    {
      id: "ep33",
      text: "Apakah yang boleh disimpulkan daripada pelbagai imej yang menunjukkan rakyat Malaysia dari pelbagai kaum dan budaya dalam slide?",
      options: [
        {
          id: "a",
          text: "Bahawa realiti sosial Malaysia adalah kompleks dan pelbagai.",
        },
        {
          id: "b",
          text: "Bahawa Takrifan Harian (interaksi antara kaum) adalah sama pentingnya dengan Takrifan Autoriti (perlembagaan) dalam membentuk negara.",
        },
        {
          id: "c",
          text: "Bahawa keharmonian adalah satu proses yang berterusan dan memerlukan tanggungjawab sosial dari semua pihak.",
        },
        { id: "d", text: "Semua di atas." },
      ],
      correctOptionId: "d",
      explanation: {
        correct:
          "Betul. Semua kesimpulan (A, B, dan C) adalah relevan dan boleh dirumuskan daripada penggunaan imej-imej tersebut dalam konteks topik ini.",
        incorrect: {
          a: "Tidak lengkap. Walaupun benar, pilihan B dan C juga merupakan kesimpulan penting yang digambarkan.",
          b: "Tidak lengkap. Pilihan A dan C juga merupakan mesej penting yang disampaikan melalui imej-imej tersebut.",
          c: "Tidak lengkap. Pilihan A dan B juga adalah kesimpulan yang sah daripada visual yang dipaparkan.",
        },
      },
    },
    {
      id: "ep34",
      text: "'Hati & Etika Profesional' diletakkan sebagai teras dalam rajah pada slide 16. Ini membawa maksud bahawa:",
      options: [
        {
          id: "a",
          text: "Semua profesional diwajibkan untuk mengikuti kata hati walaupun ia bercanggah dengan undang-undang.",
        },
        {
          id: "b",
          text: "Pertimbangan etika dan nurani adalah asas utama sebelum sebarang tindakan diambil dalam konteks profesional.",
        },
        {
          id: "c",
          text: "Etika profesional hanya terpakai kepada mereka yang bekerja dalam bidang perubatan dan perundangan.",
        },
        {
          id: "d",
          text: "Pematuhan kepada etika profesional akan menjamin keuntungan kepada syarikat.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Betul. Kedudukannya di tengah-tengah rajah menunjukkan ia adalah titik permulaan dan teras bagi semua tindakan dan tanggungjawab sosial dalam konteks profesional.",
        incorrect: {
          a: "Salah. Etika profesional menuntut seseorang mematuhi undang-undang. Kata hati perlu selari dengan etika dan perundangan.",
          c: "Salah. Etika profesional terpakai kepada semua jenis profesion.",
          d: "Salah. Walaupun amalan beretika boleh menyumbang kepada kejayaan jangka panjang, ia bukan jaminan keuntungan segera.",
        },
      },
    },
    {
      id: "ep35",
      text: "Bagaimanakah pendidikan 'Penghayatan Etika dan Peradaban' menyumbang kepada pembentukan warganegara yang bertanggungjawab?",
      options: [
        {
          id: "a",
          text: "Dengan memberi semua jawapan yang betul kepada masalah-masalah sosial.",
        },
        {
          id: "b",
          text: "Dengan menyediakan kerangka ilmu dan memupuk kesedaran agar pelajar dapat melakukan refleksi dan bertindak secara beretika.",
        },
        {
          id: "c",
          text: "Dengan memaksa pelajar untuk menyertai aktiviti sukarela.",
        },
        {
          id: "d",
          text: "Dengan menggantikan peranan ibu bapa dalam mendidik anak-anak.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Betul. Peranan pendidikan adalah untuk membina kapasiti intelektual dan moral, bukan memberi jawapan siap atau memaksa. Ia menggalakkan pelajar untuk berfikir dan bertindak sendiri.",
        incorrect: {
          a: "Salah. Masalah sosial adalah kompleks dan tidak mempunyai jawapan tunggal. Pendidikan memberi alat untuk menganalisis, bukan jawapan.",
          c: "Salah. Pendidikan memupuk minat, bukan memaksa. Paksaan bertentangan dengan semangat kesukarelaan.",
          d: "Salah. Pendidikan formal melengkapi, bukan menggantikan, didikan tidak formal di rumah.",
        },
      },
    },
    {
      id: "ep36",
      text: "Apakah peranan 'kesedaran nasional' dalam menghadapi ancaman luar atau krisis global?",
      options: [
        {
          id: "a",
          text: "Menggalakkan sikap xenofobia atau membenci orang asing.",
        },
        {
          id: "b",
          text: "Menjadi asas perpaduan dalaman yang kukuh untuk membolehkan negara bertindak secara kolektif dan berkesan.",
        },
        {
          id: "c",
          text: "Mengabaikan semua isu global dan hanya fokus kepada masalah dalaman.",
        },
        {
          id: "d",
          text: "Bergantung sepenuhnya kepada bantuan daripada negara lain.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Betul. Perpaduan dan solidariti dalaman (kesedaran nasional) adalah prasyarat penting untuk sebuah negara menghadapi sebarang cabaran, sama ada dalaman atau luaran.",
        incorrect: {
          a: "Salah. Kesedaran nasional yang sihat memupuk patriotisme, bukan kebencian terhadap orang lain.",
          c: "Salah. Dalam dunia yang saling berhubung, mengabaikan isu global adalah mustahil dan tidak bertanggungjawab.",
          d: "Salah. Kesedaran nasional sepatutnya memupuk sikap berdikari dan daya tahan, bukan kebergantungan.",
        },
      },
    },
    {
      id: "ep37",
      text: "Pilih kombinasi yang paling tepat.\n\nI. Takrifan Autoriti → Perlembagaan Persekutuan\nII. Takrifan Harian → Amalan Gotong-royong\nIII. Kesedaran Nasional → Bantuan Mangsa Banjir Pantai Timur\nIV. Kesedaran Kesejagatan → Kempen 'We Stand With Christchurch'",
      options: [
        { id: "a", text: "I dan II sahaja" },
        { id: "b", text: "I, II dan III sahaja" },
        { id: "c", text: "II, III dan IV sahaja" },
        { id: "d", text: "Semua di atas" },
      ],
      correctOptionId: "d",
      explanation: {
        correct:
          "Betul. Semua padanan adalah tepat berdasarkan konsep dan contoh yang diberikan dalam nota kursus.",
        incorrect: {
          a: "Tidak lengkap. Pilihan III dan IV juga merupakan padanan yang tepat.",
          b: "Tidak lengkap. Pilihan IV juga merupakan contoh yang sangat relevan.",
          c: "Tidak lengkap. Pilihan I adalah contoh asas bagi Takrifan Autoriti.",
        },
      },
    },
    {
      id: "ep38",
      text: "'Individu juga memiliki nilai betul dan salah dalam tindakan kolektifnya apabila berhubungan dengan... negara dan masyarakat pada peringkat sedunia.' Pernyataan ini menjadi asas kepada konsep:",
      options: [
        { id: "a", text: "Kesedaran Nasional" },
        { id: "b", text: "Kesedaran Kesejagatan" },
        { id: "c", text: "Takrifan Autoriti" },
        { id: "d", text: "Adat Istiadat" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Betul. Rujukan kepada hubungan 'pada peringkat sedunia' secara langsung menjurus kepada konsep Kesedaran Kesejagatan atau tanggungjawab sosial global.",
        incorrect: {
          a: "Salah. Kesedaran Nasional merujuk kepada hubungan dalam negara.",
          c: "Salah. Ini merujuk kepada nilai, bukan peraturan formal seperti Takrifan Autoriti.",
          d: "Salah. Adat Istiadat adalah amalan budaya, bukan skop tanggungjawab global.",
        },
      },
    },
    {
      id: "ep39",
      text: "Mengapakah sebuah persatuan berasaskan agama yang membantu mangsa bencana tanpa mengira kaum dianggap sebagai contoh tanggungjawab sosial yang baik?",
      options: [
        {
          id: "a",
          text: "Kerana ia menunjukkan bahawa kumpulan tersebut mematuhi arahan kerajaan.",
        },
        {
          id: "b",
          text: "Kerana ia membuktikan bahawa nilai kemanusiaan sejagat boleh mengatasi sempadan kelompok dan menyumbang kepada kebaikan bersama.",
        },
        {
          id: "c",
          text: "Kerana ia adalah strategi yang baik untuk mendapat publisiti dan menarik lebih banyak ahli.",
        },
        {
          id: "d",
          text: "Kerana ia adalah sebahagian daripada persaingan sihat antara persatuan-persatuan agama.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Betul. Tindakan ini mempamerkan etika yang melangkaui kepentingan kumpulan sendiri dan mengutamakan nilai kemanusiaan yang universal, yang merupakan teras tanggungjawab sosial.",
        incorrect: {
          a: "Salah. Tindakan ini lazimnya bersifat sukarela, bukan kerana arahan.",
          c: "Salah. Walaupun publisiti mungkin menjadi kesan sampingan, ia bukan dorongan utama bagi tindakan tanggungjawab sosial yang tulen.",
          d: "Salah. Motivasi utamanya adalah untuk membantu, bukan untuk bersaing.",
        },
      },
    },
    {
      id: "ep40",
      text: "Apakah kesimpulan paling penting yang boleh dibuat daripada keseluruhan Topik 8?",
      options: [
        {
          id: "a",
          text: "Kepatuhan kepada Takrifan Autoriti adalah satu-satunya penentu sebuah masyarakat yang baik.",
        },
        {
          id: "b",
          text: "Tanggungjawab sosial adalah satu konsep yang kompleks, merangkumi kesedaran dalaman dan tindakan luaran, serta beroperasi pada pelbagai aras dari individu hingga global.",
        },
        {
          id: "c",
          text: "Kesukarelaan adalah jalan penyelesaian kepada semua masalah sosial di Malaysia.",
        },
        {
          id: "d",
          text: "Etika dan peradaban adalah konsep yang hanya relevan kepada ahli sejarah dan falsafah.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Betul. Ini adalah rumusan yang paling menyeluruh, merangkumi semua elemen utama yang dibincangkan: definisi, dimensi, aras, dan skop tanggungjawab sosial.",
        incorrect: {
          a: "Salah. Topik ini menekankan kepentingan kedua-dua Takrifan Autoriti dan Harian.",
          c: "Salah. Kesukarelaan adalah penting, tetapi bukan 'satu-satunya' penyelesaian. Perubahan dasar dan sistem juga diperlukan.",
          d: "Salah. Topik ini menunjukkan bahawa etika dan peradaban adalah konsep yang hidup dan relevan kepada semua anggota masyarakat.",
        },
      },
    },
  ],
};
