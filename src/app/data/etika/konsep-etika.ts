import { Quiz } from "@/app/types/quiz";

export const konsepEtika: Quiz = {
  id: "konsep-etika",
  categoryId: "etika",
  subcategoryId: "topik-2",
  title: "Konsep Etika",
  questions: [
    {
      id: "dek-q1",
      text: "Zaman Proto Sejarah di Alam Melayu ditandai oleh kewujudan kerajaan-kerajaan awal. Manakah antara berikut yang BUKAN merupakan kerajaan dalam era ini?",
      options: [
        {
          id: "a",
          text: "Kerajaan Langkasuka yang berpusat di utara Semenanjung Tanah Melayu.",
        },
        {
          id: "b",
          text: "Kerajaan Gangga Negara yang dipercayai wujud di kawasan Perak.",
        },
        {
          id: "c",
          text: "Kerajaan Samudera-Pasai sebagai pusat tamadun Melayu-Islam terawal.",
        },
        {
          id: "d",
          text: "Kerajaan Kedah Tua yang menjadi pelabuhan entrepot penting di rantau ini.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Kerajaan Samudera-Pasai muncul pada era Zaman Pensejarahan, khususnya selepas kedatangan Islam. Ia menandakan permulaan era Islamisasi, bukan era Proto Sejarah yang lebih awal dan dipengaruhi oleh Hindu-Buddha.",
        incorrect: {
          a: "Kerajaan Langkasuka adalah salah satu kerajaan purba yang wujud pada Zaman Proto Sejarah, seperti yang dinyatakan dalam nota.",
          b: "Kerajaan Gangga Negara juga merupakan kerajaan awal yang wujud pada Zaman Proto Sejarah.",
          d: "Kerajaan Kedah Tua adalah kerajaan purba yang terkenal pada Zaman Proto Sejarah dan berfungsi sebagai pusat perdagangan.",
        },
      },
    },
    {
      id: "dek-q2",
      text: "Apakah faktor utama yang membolehkan Kerajaan Melayu Melaka berkembang pesat sebagai pusat perdagangan dan peradaban pada kurun ke-15?",
      options: [
        {
          id: "a",
          text: "Pengenalan sistem mata wang emas yang menarik pedagang dari seluruh dunia.",
        },
        {
          id: "b",
          text: "Pembinaan armada laut yang kuat untuk menakluki laluan perdagangan utama.",
        },
        {
          id: "c",
          text: "Pelaksanaan sistem pentadbiran yang cekap dan tersusun melalui Sistem Pembesar Empat Lipatan.",
        },
        {
          id: "d",
          text: "Hubungan diplomatik eksklusif dengan kuasa besar Eropah seperti Portugal dan Belanda.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota secara jelas menyatakan bahawa faktor utama perkembangan Melaka adalah sistem pentadbiran yang cekap dan tersusun, iaitu Sistem Pembesar Empat Lipatan, yang menjamin keamanan dan kemakmuran.",
        incorrect: {
          a: "Walaupun sistem mata wang wujud, ia bukanlah faktor utama yang dinyatakan; kestabilan pentadbiran lebih penting.",
          b: "Kekuatan laut Melaka lebih kepada menjamin keselamatan pedagang, bukan untuk menakluki laluan perdagangan.",
          d: "Hubungan diplomatik Melaka pada era ini adalah dengan kuasa Asia seperti China, bukan Eropah yang datang kemudiannya sebagai penjajah.",
        },
      },
    },
    {
      id: "dek-q3",
      text: "Pengaruh peradaban India di Alam Melayu sangat signifikan sebelum kedatangan Islam. Apakah kesan utamanya dalam institusi pemerintahan kerajaan awal?",
      options: [
        {
          id: "a",
          text: "Pengenalan konsep negara-bangsa dan sistem demokrasi berparlimen.",
        },
        {
          id: "b",
          text: "Penggunaan gelaran Sultan dan sistem perundangan berdasarkan Hukum Kanun.",
        },
        {
          id: "c",
          text: "Penerapan konsep 'devaraja' yang menganggap raja sebagai jelmaan tuhan di bumi.",
        },
        {
          id: "d",
          text: "Pelaksanaan sistem kasta yang rigid dalam setiap lapisan struktur masyarakat.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Pengaruh Hindu-Buddha dari India memperkenalkan konsep 'devaraja' atau raja-tuhan, di mana raja dianggap suci dan mempunyai kuasa mutlak, yang mengukuhkan kedudukan pemerintah.",
        incorrect: {
          a: "Konsep negara-bangsa dan demokrasi adalah pengaruh Barat yang datang beratus-ratus tahun kemudian.",
          b: "Gelaran Sultan dan Hukum Kanun adalah pengaruh peradaban Islam, bukan India.",
          d: "Walaupun ada stratifikasi sosial, sistem kasta di Alam Melayu tidak serigid seperti yang terdapat di India.",
        },
      },
    },
    {
      id: "dek-q4",
      text: "Apakah tujuan utama kedatangan dua utusan Sun Quan dari China ke Alam Melayu pada abad ke-3 Masihi?",
      options: [
        {
          id: "a",
          text: "Menjalankan aktiviti penaklukan ketenteraan untuk meluaskan empayar Dinasti Han.",
        },
        {
          id: "b",
          text: "Menubuhkan pangkalan perdagangan tetap bagi memonopoli perdagangan rempah.",
        },
        {
          id: "c",
          text: "Memulakan hubungan diplomatik dan mengumpul maklumat mengenai kerajaan tempatan.",
        },
        {
          id: "d",
          text: "Menyebarkan ajaran Konfusianisme kepada masyarakat pribumi di rantau ini.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota menyatakan bahawa utusan Sun Quan melawat Funan dan negeri-negeri Melayu lain, yang menandakan bermulanya hubungan diplomatik antara kedua-dua pihak.",
        incorrect: {
          a: "Hubungan China pada era ini lebih tertumpu kepada perdagangan dan diplomasi, bukan penaklukan.",
          b: "Misi utama adalah untuk meneroka dan menjalinkan hubungan awal, bukan menubuhkan pangkalan tetap.",
          d: "Penyebaran ajaran Konfusianisme bukanlah objektif utama hubungan diplomatik pada peringkat awal ini.",
        },
      },
    },
    {
      id: "dek-q5",
      text: "Kerajaan Perlak (840 M) dan Samudera-Pasai (1042 M) dianggap sebagai perintis dalam sejarah peradaban Melayu-Islam di Nusantara. Apakah peranan utama kedua-dua kerajaan ini?",
      options: [
        {
          id: "a",
          text: "Menjadi pusat penyebaran ajaran Islam yang terawal di Kepulauan Melayu.",
        },
        {
          id: "b",
          text: "Menjadi pangkalan tentera Empayar Uthmaniyyah di Asia Tenggara.",
        },
        {
          id: "c",
          text: "Menjadi pusat perkembangan tulisan Jawi dan kesusasteraan Melayu klasik.",
        },
        {
          id: "d",
          text: "Menjadi perantara dalam perdagangan rempah antara China dan India.",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Nota menyatakan Perlak sebagai kerajaan Islam pertama, diikuti oleh Samudera-Pasai yang menjadi pusat pertama pengajian dan penyebaran agama Islam di rantau ini.",
        incorrect: {
          b: "Tiada bukti sejarah yang mengaitkan kerajaan-kerajaan ini sebagai pangkalan tentera Uthmaniyyah.",
          c: "Peranan utama mereka adalah sebagai pusat penyebaran agama, manakala perkembangan kesusasteraan lebih pesat di Melaka.",
          d: "Walaupun terlibat dalam perdagangan, peranan mereka yang paling signifikan dalam konteks peradaban adalah sebagai pusat penyebaran Islam.",
        },
      },
    },
    {
      id: "dek-q6",
      text: "Kedatangan kuasa kolonial Barat ke Alam Melayu membawa perubahan besar. Manakah antara berikut susunan kronologi kedatangan kuasa Barat yang tepat?",
      options: [
        {
          id: "a",
          text: "British (1786), Belanda (1641), Portugis (1511).",
        },
        {
          id: "b",
          text: "Portugis (1511), Belanda (1641), British (1786).",
        },
        {
          id: "c",
          text: "Belanda (1641), Portugis (1511), British (1786).",
        },
        {
          id: "d",
          text: "Portugis (1511), British (1786), Belanda (1641).",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota menyatakan dengan jelas tarikh-tarikh penting ini: Portugis menawan Melaka pada 1511, Belanda mengambil alih Melaka pada 1641, dan British memulakan pengaruhnya di Pulau Pinang pada 1786.",
        incorrect: {
          a: "Susunan kronologi ini terbalik.",
          c: "Susunan ini tidak tepat dari segi sejarah.",
          d: "British datang selepas Belanda mengukuhkan kedudukannya di Melaka.",
        },
      },
    },
    {
      id: "dek-q7",
      text: "Penjajahan British membawa implikasi yang paling signifikan terhadap struktur pentadbiran dan pemerintahan di Tanah Melayu berbanding kuasa Eropah lain. Apakah perubahan fundamental yang diperkenalkan oleh British?",
      options: [
        {
          id: "a",
          text: "Pengenalan sistem perundangan adat yang seragam di semua negeri Melayu.",
        },
        {
          id: "b",
          text: "Pemisahan antara agama dan politik, di mana Sultan hanya mengurus hal ehwal agama dan adat.",
        },
        {
          id: "c",
          text: "Pelaksanaan sistem ekonomi sara diri secara meluas untuk meningkatkan hasil tempatan.",
        },
        {
          id: "d",
          text: "Penyatuan semua negeri Melayu, Sarawak dan Sabah di bawah satu unit pentadbiran tunggal.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Pengaruh Barat, khususnya British, membawa kepada pemisahan agama daripada politik. Kuasa pentadbiran diambil alih oleh kerajaan kolonial, manakala kuasa Sultan dihadkan kepada hal ehwal agama Islam dan adat istiadat Melayu.",
        incorrect: {
          a: "British memperkenalkan sistem perundangan mereka (Common Law) dan tidak menyeragamkan undang-undang adat.",
          c: "British memperkenalkan sistem ekonomi komersial (getah dan bijih timah), bukan ekonomi sara diri.",
          d: "Penyatuan ini hanya berlaku kemudiannya melalui pembentukan Malaysia pada tahun 1963.",
        },
      },
    },
    {
      id: "dek-q8",
      text: "Perjanjian Pangkor pada tahun 1874 merupakan titik tolak campur tangan British secara rasmi di negeri-negeri Melayu. Apakah kesan langsung perjanjian ini terhadap negeri Perak?",
      options: [
        {
          id: "a",
          text: "Perak diserahkan sepenuhnya kepada Syarikat Hindia Timur Inggeris (SHTI).",
        },
        {
          id: "b",
          text: "Sultan Perak diwajibkan menerima seorang Residen British untuk menasihati pentadbiran.",
        },
        {
          id: "c",
          text: "Sistem perundangan Islam di Perak digantikan sepenuhnya dengan undang-undang British.",
        },
        {
          id: "d",
          text: "Ibu negeri Perak dipindahkan dari Kuala Kangsar ke Pulau Pinang untuk kemudahan pentadbiran.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Klausa utama Perjanjian Pangkor ialah Sultan Perak mesti menerima seorang Residen British yang nasihatnya mesti dipatuhi dalam semua perkara kecuali agama dan adat. Ini menjadi model untuk campur tangan di negeri-negeri lain.",
        incorrect: {
          a: "Perak tidak diserahkan kepada SHTI; ia kekal sebagai negeri naungan.",
          c: "Undang-undang Islam dan adat masih diamalkan dalam skop yang terhad.",
          d: "Ibu negeri Perak tidak pernah dipindahkan ke Pulau Pinang.",
        },
      },
    },
    {
      id: "dek-q9",
      text: "Peradaban globalisasi yang didorong oleh kemajuan teknologi maklumat membawa pelbagai pengaruh. Bagaimanakah ia menyumbang kepada pembentukan peradaban majmuk di Malaysia?",
      options: [
        {
          id: "a",
          text: "Dengan mengukuhkan amalan tradisi tempatan tanpa sebarang pengaruh luar.",
        },
        {
          id: "b",
          text: "Dengan mewujudkan interaksi dan jaringan peradaban merentasi sempadan negara.",
        },
        {
          id: "c",
          text: "Dengan menyeragamkan semua budaya di Malaysia menjadi satu budaya global.",
        },
        {
          id: "d",
          text: "Dengan mengehadkan penggunaan media sosial untuk memelihara nilai-nilai murni.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota menyatakan 'Era dunia tanpa sempadan' membolehkan interaksi dan jaringan peradaban merentasi benua. Ini membawa masuk pelbagai unsur budaya luar yang kemudiannya menjadi sebahagian daripada peradaban majmuk Malaysia.",
        incorrect: {
          a: "Globalisasi justru membuka ruang kepada pengaruh luar, bukan mengukuhkan tradisi secara terasing.",
          c: "Globalisasi tidak menyeragamkan budaya, sebaliknya ia mewujudkan peradaban kacukan atau hibrid.",
          d: "Globalisasi dicirikan oleh penggunaan media sosial yang meluas, bukan pengehadan.",
        },
      },
    },
    {
      id: "dek-q10",
      text: "Apakah yang dimaksudkan dengan konsep 'peradaban kacukan' (`hybrid civilization`) dalam konteks Malaysia kontemporari?",
      options: [
        {
          id: "a",
          text: "Proses pemisahan mutlak antara peradaban Timur dan Barat dalam masyarakat.",
        },
        {
          id: "b",
          text: "Penolakan sepenuhnya terhadap unsur-unsur peradaban global demi jati diri tempatan.",
        },
        {
          id: "c",
          text: "Percampuran dan penyesuaian pelbagai unsur peradaban (Melayu, Islam, Asia, Barat) dalam kehidupan seharian.",
        },
        {
          id: "d",
          text: "Dominasi satu peradaban tunggal yang menghapuskan kepelbagaian budaya sedia ada.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Malaysia kontemporari adalah hasil pertembungan dan pergaulan pelbagai peradaban. Proses adaptasi dan penyesuaian ini melahirkan satu bentuk peradaban yang unik dan berlapis, iaitu peradaban kacukan.",
        incorrect: {
          a: "Konsep ini merujuk kepada percampuran, bukan pemisahan.",
          b: "Ia melibatkan penerimaan dan penyesuaian unsur luar, bukan penolakan.",
          d: "Konsep ini meraikan kepelbagaian hasil daripada percampuran, bukan dominasi tunggal.",
        },
      },
    },
    {
      id: "dek-q11",
      text: "Berdasarkan susur masa sejarah Alam Melayu, Zaman Logam merupakan tahap perkembangan penting dalam Zaman Pra Sejarah. Apakah ciri utama yang membezakan zaman ini daripada Zaman Neolitik?",
      options: [
        {
          id: "a",
          text: "Masyarakat mula hidup berpindah-randah untuk mencari sumber makanan.",
        },
        {
          id: "b",
          text: "Penggunaan peralatan yang diperbuat daripada batu yang lebih halus dan lengkap.",
        },
        {
          id: "c",
          text: "Masyarakat mula tinggal secara tetap di satu kawasan dan menggunakan peralatan logam.",
        },
        {
          id: "d",
          text: "Aktiviti perdagangan awal hanya terhad kepada pertukaran barangan sesama komuniti.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota menyatakan pada Zaman Logam, masyarakat mula tinggal tetap di satu kawasan dan bermula penggunaan peralatan yang diperbuat daripada logam seperti gangsa dan besi.",
        incorrect: {
          a: "Hidup berpindah-randah adalah ciri Zaman Paleolitik. Masyarakat Zaman Logam sudah tinggal tetap.",
          b: "Penggunaan peralatan batu yang lebih maju adalah ciri Zaman Neolitik.",
          d: "Perdagangan pada zaman ini sudah mula melibatkan hubungan dengan kawasan luar.",
        },
      },
    },
    {
      id: "dek-q12",
      text: "Apakah sumbangan utama tamadun China kepada peradaban Melayu yang masih kekal sehingga hari ini, terutamanya dalam konteks sosial?",
      options: [
        {
          id: "a",
          text: "Pengenalan sistem tulisan Rumi dan abjad.",
        },
        {
          id: "b",
          text: "Kewujudan komuniti Baba dan Nyonya serta Cina Peranakan.",
        },
        {
          id: "c",
          text: "Pengaruh dalam seni bina masjid dan istana Melayu.",
        },
        {
          id: "d",
          text: "Penerapan falsafah legalisme dalam sistem perundangan.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Interaksi dan perkahwinan campur antara pedagang China dengan masyarakat tempatan sejak zaman Melaka telah melahirkan komuniti unik seperti Baba dan Nyonya serta Cina Peranakan.",
        incorrect: {
          a: "Tulisan Rumi diperkenalkan oleh kuasa Barat (Portugis).",
          c: "Seni bina masjid dan istana Melayu lebih banyak dipengaruhi oleh unsur Islam dan India.",
          d: "Sistem perundangan Melayu lebih dipengaruhi oleh adat tempatan, Hindu-Buddha, dan kemudiannya undang-undang Islam.",
        },
      },
    },
    {
      id: "dek-q13",
      text: "Konsep etika dalam pemikiran Eropah mengalami perubahan drastik semasa Zaman Pencerahan (`Enlightenment`). Apakah perubahan fundamental yang berlaku?",
      options: [
        {
          id: "a",
          text: "Pengukuhan kuasa mutlak gereja dan golongan paderi dalam pentadbiran negara.",
        },
        {
          id: "b",
          text: "Penekanan kepada wahyu dan ajaran agama sebagai satu-satunya sumber kebenaran.",
        },
        {
          id: "c",
          text: "Pemisahan antara urusan agama daripada politik dan pentadbiran negara.",
        },
        {
          id: "d",
          text: "Penolakan sepenuhnya terhadap prinsip rasionalisme dan pemikiran saintifik.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Salah satu ciri utama Zaman Pencerahan ialah gerakan Reformasi Gereja yang membawa kepada pemisahan antara agama dan negara (`separation of church and state`), memberi laluan kepada pemerintahan sekular.",
        incorrect: {
          a: "Zaman Pencerahan menyaksikan kuasa gereja semakin berkurangan, bukan bertambah kukuh.",
          b: "Zaman ini mengutamakan akal (`reason`) dan pemerhatian empirikal berbanding wahyu semata-mata.",
          d: "Zaman Pencerahan adalah kemuncak kepada rasionalisme dan pemikiran saintifik.",
        },
      },
    },
    {
      id: "dek-q14",
      text: "Manakah antara berikut merupakan kesan langsung daripada Perjanjian Inggeris-Belanda 1824?",
      options: [
        {
          id: "a",
          text: "Belanda menyerahkan semua tanah jajahannya di Asia Tenggara kepada British.",
        },
        {
          id: "b",
          text: "Kepulauan Melayu dibahagikan kepada dua lingkungan pengaruh, British dan Belanda.",
        },
        {
          id: "c",
          text: "Portugis diusir sepenuhnya dari rantau Asia Tenggara oleh pakatan Inggeris-Belanda.",
        },
        {
          id: "d",
          text: "Syarikat Hindia Timur Belanda (VOC) dibubarkan dan asetnya diambil alih oleh British.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Perjanjian ini secara rasmi membahagikan Kepulauan Melayu: Semenanjung Tanah Melayu dan Singapura di bawah pengaruh British, manakala Kepulauan Hindia Timur (kini Indonesia) di bawah pengaruh Belanda.",
        incorrect: {
          a: "Belanda hanya menyerahkan Melaka kepada British, bukan semua tanah jajahannya.",
          c: "Portugis sudahpun kehilangan pengaruhnya yang besar sebelum perjanjian ini.",
          d: "VOC telah dibubarkan lebih awal (1799) sebelum perjanjian ini ditandatangani.",
        },
      },
    },
    {
      id: "dek-q15",
      text: "Apakah tujuan utama British menyatukan Perak, Selangor, Negeri Sembilan, dan Pahang untuk membentuk Negeri-Negeri Melayu Bersekutu (NNMB) pada tahun 1896?",
      options: [
        {
          id: "a",
          text: "Untuk memberikan lebih banyak autonomi kepada sultan-sultan di negeri-negeri tersebut.",
        },
        {
          id: "b",
          text: "Untuk menyeragamkan dan memusatkan sistem pentadbiran demi kepentingan ekonomi British.",
        },
        {
          id: "c",
          text: "Untuk membentuk satu pakatan ketenteraan bagi menentang ancaman kuasa Siam dari utara.",
        },
        {
          id: "d",
          text: "Untuk mempersiapkan negeri-negeri ini ke arah kemerdekaan di bawah Komanwel.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Tujuan utama penubuhan NNMB adalah untuk menyelaras dan menyeragamkan pentadbiran di negeri-negeri Melayu yang kaya dengan hasil bijih timah dan getah, bagi memudahkan eksploitasi ekonomi.",
        incorrect: {
          a: "Pembentukan NNMB sebenarnya mengurangkan kuasa sultan dan memusatkan kuasa di tangan Residen Jeneral British.",
          c: "Ancaman Siam diselesaikan melalui perjanjian lain, dan NNMB lebih fokus kepada pentadbiran dalaman.",
          d: "Idea kemerdekaan belum wujud pada masa itu.",
        },
      },
    },
    {
      id: "dek-q16",
      text: "Pengaruh peradaban Islam telah mengubah landskap sosio-budaya masyarakat Melayu secara mendalam. Perubahan ini merangkumi aspek-aspek berikut KECUALI:",
      options: [
        {
          id: "a",
          text: "Sistem pemerintahan beraja mutlak kepada kesultanan.",
        },
        {
          id: "b",
          text: "Pengenalan sistem tulisan Jawi.",
        },
        {
          id: "c",
          text: "Pengukuhan sistem sosial berasaskan kasta.",
        },
        {
          id: "d",
          text: "Pelaksanaan undang-undang syariah seperti Hukum Kanun Melaka.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Islam menekankan konsep kesamarataan. Kedatangannya secara beransur-ansur menghakis sistem kelas sosial berasaskan kasta yang dipengaruhi ajaran Hindu, bukannya mengukuhkannya.",
        incorrect: {
          a: "Islam memperkenalkan konsep 'Sultan' sebagai pemimpin umat Islam, mengubah konsep 'devaraja'.",
          b: "Tulisan Jawi, yang diadaptasi dari abjad Arab, berkembang pesat selepas kedatangan Islam.",
          d: "Undang-undang bertulis seperti Hukum Kanun Melaka banyak dipengaruhi oleh prinsip-prinsip syariah.",
        },
      },
    },
    {
      id: "dek-q17",
      text: "Teori J.S. Furnivall mengenai masyarakat majmuk (`plural society`) sering dirujuk untuk memahami struktur sosial era kolonial. Apakah ciri utama masyarakat majmuk menurut Furnivall?",
      options: [
        {
          id: "a",
          text: "Kumpulan etnik yang berbeza hidup bersama tetapi tidak bersatu padu, hanya bertemu di pasar.",
        },
        {
          id: "b",
          text: "Proses asimilasi dan amalgamasi yang lengkap antara komuniti imigran dan masyarakat tempatan.",
        },
        {
          id: "c",
          text: "Kewujudan satu budaya nasional yang dikongsi bersama oleh semua lapisan masyarakat.",
        },
        {
          id: "d",
          text: "Interaksi sosial yang sangat erat dan harmoni antara pelbagai kaum dalam semua aspek kehidupan.",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Menurut Furnivall, masyarakat majmuk kolonial terdiri daripada pelbagai kaum yang hidup berdampingan tetapi terasing, di mana interaksi utama hanyalah dalam bidang ekonomi atau 'bertemu di pasar'.",
        incorrect: {
          b: "Furnivall berpendapat bahawa asimilasi tidak berlaku dalam masyarakat majmuk kolonial.",
          c: "Tidak wujud budaya nasional yang dikongsi bersama; setiap kaum berpegang pada budaya masing-masing.",
          d: "Beliau menggambarkan masyarakat ini sebagai tidak stabil dan berpotensi untuk berkonflik.",
        },
      },
    },
    {
      id: "dek-q18",
      text: "Apakah sumbangan utama tamadun India dalam bidang sains dan teknologi yang mempengaruhi dunia?",
      options: [
        {
          id: "a",
          text: "Penciptaan kertas dan mesin cetak.",
        },
        {
          id: "b",
          text: "Pengenalan sistem nombor, termasuk konsep sifar dan perpuluhan.",
        },
        {
          id: "c",
          text: "Pembangunan teori pelayaran dan kompas magnetik.",
        },
        {
          id: "d",
          text: "Penemuan ubat bedil untuk kegunaan ketenteraan.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Ahli matematik India memperkenalkan sistem angka yang kemudiannya berkembang menjadi sistem nombor moden. Konsep sifar (`shunya`) dan perpuluhan adalah sumbangan penting dari tamadun ini.",
        incorrect: {
          a: "Penciptaan kertas dan mesin cetak adalah sumbangan tamadun China.",
          c: "Kompas magnetik adalah ciptaan tamadun China.",
          d: "Ubat bedil (`gunpowder`) juga merupakan sumbangan tamadun China.",
        },
      },
    },
    {
      id: "dek-q19",
      text: "Revolusi Perindustrian di Eropah membawa perubahan besar kepada konsep etika dan peradaban dunia. Apakah antara kesan utamanya?\nI. Kemunculan ideologi individualisme dan penekanan kepada hak asasi manusia.\nII. Pengukuhan sistem feudal dan ekonomi sara diri di kalangan masyarakat.\nIII. Perkembangan perdagangan sedunia dari merkantilisme kepada kapitalisme global.\nIV. Pengasingan sepenuhnya antara aktiviti ekonomi dan perkembangan teknologi.",
      options: [
        { id: "a", text: "I dan III sahaja" },
        { id: "b", text: "II dan IV sahaja" },
        { id: "c", text: "I, II, dan III sahaja" },
        { id: "d", text: "Semua di atas" },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Pilihan ini tepat kerana Revolusi Perindustrian melahirkan ideologi individualisme (I) dan memacu perkembangan kapitalisme global (III).",
        incorrect: {
          b: "Kedua-dua pernyataan II (mengukuhkan feudal) dan IV (pengasingan ekonomi & teknologi) adalah salah.",
          c: "Pernyataan II adalah salah, menjadikan pilihan ini tidak tepat.",
          d: "Pernyataan II dan IV adalah salah, menjadikan pilihan ini tidak tepat.",
        },
      },
    },
    {
      id: "dek-q20",
      text: "Antara kerajaan berikut, yang manakah mengambil alih peranan sebagai kuasa politik terkuat di Nusantara selepas kejatuhan Kerajaan Srivijaya?",
      options: [
        { id: "a", text: "Kerajaan Funan" },
        { id: "b", text: "Kerajaan Majapahit" },
        { id: "c", text: "Kesultanan Melayu Melaka" },
        { id: "d", text: "Kerajaan Johor-Riau" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Selepas kemerosotan Srivijaya, Kerajaan Majapahit yang berpusat di Jawa Timur muncul sebagai kuasa besar di Nusantara pada kurun ke-13 Masihi.",
        incorrect: {
          a: "Kerajaan Funan wujud sebelum dan sezaman dengan era awal Srivijaya, bukan selepasnya.",
          c: "Kesultanan Melaka muncul selepas zaman kegemilangan Majapahit mula merosot.",
          d: "Kerajaan Johor-Riau muncul selepas kejatuhan Kesultanan Melaka.",
        },
      },
    },
    {
      id: "dek-q21",
      text: "Kedatangan Portugis ke Melaka pada tahun 1511 didorong oleh tiga matlamat utama. Manakah antara berikut yang merumuskan matlamat tersebut?",
      options: [
        {
          id: "a",
          text: "Sains, Teknologi, dan Perdagangan.",
        },
        {
          id: "b",
          text: "Emas, Kemuliaan, dan Keagamaan (`Gold, Glory, and Gospel`).",
        },
        {
          id: "c",
          text: "Demokrasi, Kebebasan, dan Persamaan (`Liberty, Equality, Fraternity`).",
        },
        {
          id: "d",
          text: "Perpaduan, Kestabilan, dan Kemakmuran.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Matlamat penjelajahan Portugis pada abad ke-16 diringkaskan sebagai 3G: `Gold` (menguasai perdagangan rempah), `Glory` (mencari kemasyhuran dan meluaskan empayar), dan `Gospel` (menyebarkan agama Kristian).",
        incorrect: {
          a: "Ini bukan matlamat utama penjelajahan era tersebut.",
          c: "Ini adalah slogan Revolusi Perancis, yang berlaku lebih 250 tahun kemudian.",
          d: "Ini lebih merupakan matlamat dalaman sesebuah negara, bukan matlamat penjajahan.",
        },
      },
    },
    {
      id: "dek-q22",
      text: "Apakah perbezaan utama antara Negeri-Negeri Melayu Bersekutu (NNMB) dan Negeri-Negeri Melayu Tidak Bersekutu (NNMTB) dari segi pentadbiran British?",
      options: [
        {
          id: "a",
          text: "NNMB diperintah secara langsung sebagai tanah jajahan Mahkota, manakala NNMTB adalah negeri naungan.",
        },
        {
          id: "b",
          text: "NNMB mempunyai sistem pentadbiran yang berpusat dan seragam, manakala NNMTB lebih bersifat autonomi.",
        },
        {
          id: "c",
          text: "NNMB menerima Penasihat British, manakala NNMTB menerima Residen British dalam pentadbiran.",
        },
        {
          id: "d",
          text: "NNMB terdiri daripada negeri-negeri di utara, manakala NNMTB terdiri daripada negeri-negeri di pantai barat.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "NNMB mempunyai pentadbiran berpusat di bawah Residen Jeneral. Sebaliknya, NNMTB tidak disatukan dan Sultan mempunyai lebih banyak kuasa autonomi, dengan setiap negeri hanya mempunyai seorang Penasihat British.",
        incorrect: {
          a: "Kedua-duanya adalah negeri naungan, bukan tanah jajahan Mahkota seperti Negeri-Negeri Selat.",
          c: "Istilah Residen digunakan di NNMB, manakala Penasihat digunakan di NNMTB.",
          d: "Lokasi geografi yang dinyatakan tidak tepat.",
        },
      },
    },
    {
      id: "dek-q23",
      text: "Walaupun penjajahan Belanda di Melaka berlangsung selama 183 tahun (1641-1824), kesannya terhadap peradaban Melayu dianggap tidak signifikan. Mengapakah keadaan ini berlaku?",
      options: [
        {
          id: "a",
          text: "Belanda gagal sepenuhnya menguasai pentadbiran Melaka daripada Kesultanan Johor.",
        },
        {
          id: "b",
          text: "Tumpuan utama Belanda adalah di Betawi (Jakarta), dan Melaka hanya dianggap sebagai pangkalan hadapan.",
        },
        {
          id: "c",
          text: "Masyarakat tempatan menentang hebat segala usaha Belanda untuk memperkenalkan budaya mereka.",
        },
        {
          id: "d",
          text: "Belanda hanya berminat dalam aktiviti keagamaan dan tidak campur tangan dalam urusan tempatan.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota menyatakan pusat utama Belanda adalah di Betawi. Melaka tidak dibangunkan secara intensif dan pengaruhnya terhad kerana Belanda lebih fokus untuk memusatkan perdagangan di Betawi.",
        incorrect: {
          a: "Belanda berjaya menguasai Melaka selepas mengalahkan Portugis.",
          c: "Walaupun mungkin ada penentangan, ia bukan faktor utama mengapa pengaruhnya tidak signifikan.",
          d: "Kepentingan utama Belanda adalah ekonomi (perdagangan), bukan keagamaan.",
        },
      },
    },
    {
      id: "dek-q24",
      text: "Konsep etika dari perspektif agama di Asia, seperti Hindu, Buddha, dan Islam, mempunyai satu ciri sepunya yang membezakannya daripada etika sekular Barat. Apakah ciri tersebut?",
      options: [
        {
          id: "a",
          text: "Etika berteraskan kepada keuntungan material dan kejayaan individu.",
        },
        {
          id: "b",
          text: "Etika didasarkan sepenuhnya pada logik akal tanpa merujuk kepada kitab suci.",
        },
        {
          id: "c",
          text: "Etika berkait rapat dengan ajaran agama dan kepercayaan kerohanian.",
        },
        {
          id: "d",
          text: "Etika bersifat situasional dan boleh berubah mengikut peredaran zaman.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota menyatakan bahawa etika Asia berteraskan agama. Dalam Islam, etika berpandukan Al-Quran dan Sunnah. Dalam Hindu dan Buddha, etika terikat dengan konsep seperti karma dan dharma.",
        incorrect: {
          a: "Ini lebih mencerminkan etika Barat yang dipengaruhi oleh kapitalisme.",
          b: "Etika agama di Asia sangat bergantung pada kitab suci dan wahyu.",
          d: "Etika yang berteraskan agama lazimnya mempunyai prinsip-prinsip universal yang dianggap tidak berubah.",
        },
      },
    },
    {
      id: "dek-q25",
      text: "Zaman Pensejarahan di Alam Melayu, yang bermula dengan Kesultanan Melayu Melaka, menyaksikan pembentukan masyarakat yang lebih kompleks. Apakah ciri utamanya?",
      options: [
        {
          id: "a",
          text: "Pengamalan sistem ekonomi sara diri secara eksklusif.",
        },
        {
          id: "b",
          text: "Permulaan pembentukan masyarakat kepelbagaian melalui aktiviti perdagangan.",
        },
        {
          id: "c",
          text: "Kehidupan masyarakat yang masih nomad dan berpindah-randah.",
        },
        {
          id: "d",
          text: "Ketiadaan sistem perundangan yang formal dan bertulis.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Zaman Pensejarahan ditandai oleh kedatangan pedagang dari seluruh dunia ke Melaka, yang memulakan pembentukan masyarakat kepelbagaian atau majmuk hasil interaksi antara mereka dengan penduduk tempatan.",
        incorrect: {
          a: "Ekonomi pada zaman ini sudah berasaskan perdagangan, bukan lagi sara diri semata-mata.",
          c: "Masyarakat pada zaman ini telah tinggal secara tetap dan membina peradaban yang maju.",
          d: "Zaman ini menyaksikan kewujudan undang-undang bertulis seperti Hukum Kanun Melaka.",
        },
      },
    },
    {
      id: "dek-q26",
      text: "Rumpun bahasa Austronesia merupakan salah satu keluarga bahasa terbesar di dunia. Bagaimanakah ia berkaitan dengan peradaban Melayu?",
      options: [
        {
          id: "a",
          text: "Ia merupakan bahasa rasmi yang digunakan dalam pentadbiran British di Tanah Melayu.",
        },
        {
          id: "b",
          text: "Ia adalah rumpun bahasa asal yang merangkumi Bahasa Melayu dan bahasa-bahasa serumpun di Nusantara.",
        },
        {
          id: "c",
          text: "Ia adalah bahasa purba yang dibawa oleh pedagang dari India dan China ke Alam Melayu.",
        },
        {
          id: "d",
          text: "Ia adalah bahasa buatan yang dicipta untuk menyatukan semua etnik di bawah gagasan Malaysia.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota menyatakan bahawa rumpun bahasa 'Melayu-Indonesia' tercakup dalam rumpun bahasa Austronesia yang lebih besar, menunjukkan pertalian linguistik dan asal-usul yang sama bagi masyarakat di rantau ini.",
        incorrect: {
          a: "Bahasa rasmi pentadbiran British ialah Bahasa Inggeris.",
          c: "Bahasa yang dibawa dari India adalah Sanskrit, manakala dari China adalah pelbagai dialek Cina.",
          d: "Ini merujuk kepada Bahasa Malaysia moden, bukan rumpun bahasa Austronesia yang berusia ribuan tahun.",
        },
      },
    },
    {
      id: "dek-q27",
      text: "Pengaruh China mencapai kemuncaknya di Alam Melayu semasa era Dinasti Ming pada abad ke-15. Apakah faktor utama yang menyumbang kepada hubungan erat ini?",
      options: [
        {
          id: "a",
          text: "Penaklukan ketenteraan oleh Laksamana Zheng He ke atas kerajaan-kerajaan Melayu.",
        },
        {
          id: "b",
          text: "Perkahwinan campur antara Maharaja China dengan puteri-puteri dari Alam Melayu.",
        },
        {
          id: "c",
          text: "Hubungan diplomatik dan perdagangan yang erat dengan Kesultanan Melayu Melaka.",
        },
        {
          id: "d",
          text: "Perkongsian teknologi pembuatan senjata api untuk menentang kuasa Barat.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Kemunculan Melaka sebagai kuasa perdagangan utama telah menarik perhatian Dinasti Ming. Hubungan diplomatik yang dijalinkan telah membuka ruang jaringan perdagangan dan penyerapan peradaban yang lebih luas.",
        incorrect: {
          a: "Lawatan Laksamana Zheng He lebih bersifat diplomatik dan menunjukkan kekuatan, bukan penaklukan.",
          b: "Kisah Puteri Hang Li Po adalah simbol hubungan baik, bukan faktor utamanya.",
          d: "Ini tidak berlaku; kuasa Barat datang ke rantau ini selepas hubungan Melaka-China terjalin erat.",
        },
      },
    },
    {
      id: "dek-q28",
      text: "Manakah antara berikut BUKAN sumbangan tamadun India kepada dunia seperti yang disenaraikan dalam nota?",
      options: [
        {
          id: "a",
          text: "Seni bina kuil yang kompleks seperti Angkor Wat dan Candi Borobudur.",
        },
        {
          id: "b",
          text: "Falsafah yang bersumberkan kitab Veda dan ajaran Buddhisme.",
        },
        {
          id: "c",
          text: "Pengenalan teknik yoga untuk kesihatan fizikal dan mental.",
        },
        {
          id: "d",
          text: "Penciptaan kompas dan teknik pembuatan sutera.",
        },
      ],
      correctOptionId: "d",
      explanation: {
        correct:
          "Kompas dan pembuatan sutera adalah sumbangan terkenal dari tamadun China, bukan India.",
        incorrect: {
          a: "Angkor Wat dan Candi Borobudur adalah contoh seni bina yang sangat dipengaruhi oleh agama Hindu-Buddha dari India.",
          b: "Nota secara jelas menyenaraikan falsafah Veda dan bukan Veda (Buddhisme) sebagai sumbangan penting.",
          c: "Yoga juga dinyatakan sebagai amalan yang berasal dari India.",
        },
      },
    },
    {
      id: "dek-q29",
      text: "Apakah kesan utama gerakan Kaum Muda yang mendapat pengaruh dari Mesir dan Turki pada tahun 1930-an terhadap landskap pemikiran Islam di Alam Melayu?",
      options: [
        {
          id: "a",
          text: "Mereka menggesa umat Islam untuk kembali kepada amalan tradisional dan menolak pemodenan.",
        },
        {
          id: "b",
          text: "Mereka memperjuangkan idea pemisahan sepenuhnya agama daripada urusan negara.",
        },
        {
          id: "c",
          text: "Mereka menekankan kepentingan ijtihad (interpretasi semula) dan pemodenan dalam Islam.",
        },
        {
          id: "d",
          text: "Mereka menubuhkan pakatan ketenteraan untuk menentang penjajahan British secara terbuka.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Gerakan Kaum Muda mengkritik amalan tradisional yang dianggap jumud dan menyeru umat Islam untuk kembali kepada sumber asal sambil menerima pemodenan dan pemikiran rasional.",
        incorrect: {
          a: "Ini adalah pendirian Kaum Tua, yang ditentang oleh Kaum Muda.",
          b: "Walaupun mereka mahukan reformasi, mereka tidak memperjuangkan sekularisme sepenuhnya.",
          d: "Perjuangan mereka lebih bersifat intelektual dan sosial, bukan ketenteraan.",
        },
      },
    },
    {
      id: "dek-q30",
      text: "Penjajahan British telah memperkenalkan Sistem Residen. Apakah peranan utama Residen British di Negeri-Negeri Melayu?\nI. Bertindak sebagai penasihat kepada Sultan dalam semua urusan pentadbiran.\nII. Memastikan dasar-dasar British dilaksanakan dengan berkesan di peringkat negeri.\nIII. Mengutip semua hasil cukai negeri untuk dihantar terus ke London.\nIV. Mengetuai angkatan tentera negeri dalam urusan pertahanan dan keamanan.",
      options: [
        { id: "a", text: "I dan II sahaja" },
        { id: "b", text: "II dan III sahaja" },
        { id: "c", text: "III dan IV sahaja" },
        { id: "d", text: "I, II dan IV sahaja" },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Peranan rasmi Residen adalah untuk menasihati Sultan (I) dan secara praktikalnya, memastikan dasar British dilaksanakan (II).",
        incorrect: {
          b: "Pernyataan III salah; cukai digunakan untuk pentadbiran tempatan.",
          c: "Pernyataan III dan IV adalah salah; Residen bukan pegawai kewangan empayar atau komander tentera.",
          d: "Pernyataan IV salah; Residen adalah pegawai sivil.",
        },
      },
    },
    {
      id: "dek-q31",
      text: "Apakah yang membezakan Zaman Paleolitik dengan Zaman Mesolitik di Alam Melayu?",
      options: [
        {
          id: "a",
          text: "Zaman Paleolitik menggunakan alat batu asas, manakala Zaman Mesolitik mula membentuk batu menjadi alat yang lebih khusus.",
        },
        {
          id: "b",
          text: "Zaman Paleolitik menyaksikan masyarakat tinggal tetap, manakala Zaman Mesolitik mereka kembali berpindah-randah.",
        },
        {
          id: "c",
          text: "Zaman Paleolitik memulakan kegiatan pertanian, manakala Zaman Mesolitik hanya bergantung pada hasil hutan.",
        },
        {
          id: "d",
          text: "Zaman Paleolitik mempunyai sistem tulisan, manakala Zaman Mesolitik hanya menggunakan bahasa lisan.",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Nota menyatakan Zaman Paleolitik menggunakan alat batu asas. Zaman Mesolitik pula menunjukkan evolusi di mana bermulanya kegiatan membentuk batu menjadi alatan yang lebih spesifik.",
        incorrect: {
          b: "Kedua-dua zaman ini dicirikan oleh kehidupan berpindah-randah.",
          c: "Kegiatan pertanian hanya bermula pada Zaman Neolitik.",
          d: "Kedua-dua zaman ini adalah zaman prasejarah yang tidak mempunyai sistem tulisan.",
        },
      },
    },
    {
      id: "dek-q32",
      text: "Manakah antara berikut merupakan faktor penarik yang menyebabkan Melaka menjadi pusat pertemuan peradaban rentas benua pada kurun ke-15?",
      options: [
        {
          id: "a",
          text: "Penemuan lombong emas yang besar di sekitar kawasan Melaka.",
        },
        {
          id: "b",
          text: "Dasar pemerintahan yang mewajibkan semua pedagang memeluk agama Islam.",
        },
        {
          id: "c",
          text: "Kedudukannya yang strategik di Selat Melaka dan jaminan keselamatan oleh pentadbir.",
        },
        {
          id: "d",
          text: "Larangan berdagang dikenakan ke atas pelabuhan-pelabuhan lain di rantau ini.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Kedudukan strategik Melaka dan sistem pentadbiran yang cekap yang menjamin keamanan adalah faktor utama yang menarik kedatangan para saudagar dari seluruh dunia.",
        incorrect: {
          a: "Sumber utama kekayaan Melaka adalah perdagangan, bukan perlombongan emas.",
          b: "Melaka mengamalkan dasar keterbukaan dan tidak memaksa pedagang asing menukar agama.",
          d: "Melaka bersaing dengan pelabuhan lain, tetapi kelebihannya menjadikannya pilihan utama.",
        },
      },
    },
    {
      id: "dek-q33",
      text: "Apakah kesan utama kejatuhan Kerajaan Kesultanan Melayu Melaka kepada Portugis pada tahun 1511?",
      options: [
        {
          id: "a",
          text: "Pusat peradaban dan perdagangan Melayu berpindah dan diteruskan oleh Kerajaan Johor-Riau.",
        },
        {
          id: "b",
          text: "Semua aktiviti perdagangan di Selat Melaka terhenti sepenuhnya selama lebih satu abad.",
        },
        {
          id: "c",
          text: "Agama Kristian tersebar luas dan menggantikan Islam sebagai agama utama di seluruh Semenanjung.",
        },
        {
          id: "d",
          text: "Sistem kesultanan Melayu dimansuhkan sepenuhnya dan digantikan dengan sistem Gabenor.",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Kejatuhan Melaka tidak menamatkan peradaban Melayu. Waris Kesultanan Melaka telah mengasaskan Kerajaan Johor-Riau yang kemudiannya meneruskan tradisi perdagangan serta kebudayaan Melayu-Islam.",
        incorrect: {
          b: "Aktiviti perdagangan tidak terhenti, tetapi coraknya berubah dan beralih ke pelabuhan lain.",
          c: "Penyebaran agama Kristian oleh Portugis sangat terhad dan tidak berjaya menggantikan Islam.",
          d: "Sistem kesultanan Melayu diteruskan di negeri-negeri lain seperti Johor, Pahang, dan Perak.",
        },
      },
    },
    {
      id: "dek-q34",
      text: "'Indianization' adalah istilah yang digunakan untuk menggambarkan proses penyerapan budaya India di Asia Tenggara. Manakah antara berikut BUKAN sebahagian daripada proses ini?",
      options: [
        {
          id: "a",
          text: "Penggunaan bahasa Sanskrit dalam inskripsi diraja dan keagamaan.",
        },
        {
          id: "b",
          text: "Pengadaptasian epik Ramayana dan Mahabharata dalam kesenian tempatan.",
        },
        {
          id: "c",
          text: "Pembinaan candi dan monumen keagamaan yang bercirikan seni bina India.",
        },
        {
          id: "d",
          text: "Pengenalan sistem ekonomi kapitalis dan perbankan moden.",
        },
      ],
      correctOptionId: "d",
      explanation: {
        correct:
          "Sistem ekonomi kapitalis dan perbankan moden adalah pengaruh Barat yang datang lebih daripada seribu tahun selepas proses 'Indianization'.",
        incorrect: {
          a: "Bahasa Sanskrit digunakan secara meluas oleh golongan pemerintah dan agama.",
          b: "Epik-epik ini menjadi sebahagian daripada kesusasteraan dan persembahan seni tempatan.",
          c: "Candi seperti Angkor Wat adalah bukti jelas pengaruh seni bina keagamaan dari India.",
        },
      },
    },
    {
      id: "dek-q35",
      text: "Apakah peranan Wali Songo dalam pengembangan peradaban Melayu-Islam di Nusantara, khususnya di Pulau Jawa?",
      options: [
        {
          id: "a",
          text: "Mereka adalah panglima perang yang mengetuai penaklukan Majapahit.",
        },
        {
          id: "b",
          text: "Mereka adalah sekumpulan ulama dan pendakwah yang menyebarkan Islam melalui pendekatan budaya.",
        },
        {
          id: "c",
          text: "Mereka adalah pedagang Arab yang menguasai laluan perdagangan rempah-rempah.",
        },
        {
          id: "d",
          text: "Mereka adalah ahli falsafah yang menggabungkan ajaran Islam dengan ajaran Konfusianisme.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Wali Songo (Sembilan Wali) terkenal dengan strategi dakwah yang bijaksana, dengan menyerap dan mengubah suai unsur-unsur budaya tempatan agar selari dengan ajaran Islam.",
        incorrect: {
          a: "Wali Songo dikenali sebagai pendakwah, bukan panglima perang.",
          c: "Walaupun mungkin ada yang berdagang, peranan utama mereka adalah sebagai penyebar agama.",
          d: "Pendekatan mereka adalah menggabungkan Islam dengan budaya Jawa-Hindu, bukan Konfusianisme.",
        },
      },
    },
    {
      id: "dek-q36",
      text: "Kerajaan Srivijaya yang berpusat di Sumatera merupakan sebuah empayar maritim yang agung dari kurun ke-7 hingga ke-13 Masihi. Apakah asas kekuatan utama empayar ini?",
      options: [
        {
          id: "a",
          text: "Kekuatan dalam sektor pertanian dan pengeksportan beras.",
        },
        {
          id: "b",
          text: "Penguasaan ke atas laluan perdagangan maritim utama di Selat Melaka dan Selat Sunda.",
        },
        {
          id: "c",
          text: "Pakatan ketenteraan yang utuh dengan empayar China di bawah Dinasti Tang.",
        },
        {
          id: "d",
          text: "Perkembangan teknologi pembuatan kapal yang mampu belayar merentasi lautan Pasifik.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Srivijaya menjadi kaya dan kuat dengan mengawal sepenuhnya laluan perdagangan laut yang strategik antara India dan China. Armada lautnya memastikan kapal-kapal dagang singgah di pelabuhannya.",
        incorrect: {
          a: "Srivijaya adalah kuasa maritim, bukan agraria. Kekuatannya terletak pada laut.",
          c: "Walaupun mempunyai hubungan baik dengan China, kekuatannya adalah hasil daripada keupayaannya sendiri.",
          d: "Skop pelayarannya terhad di Lautan Hindi dan Laut China Selatan, bukan merentasi Pasifik.",
        },
      },
    },
    {
      id: "dek-q37",
      text: "Apakah sumbangan utama Revolusi Perancis (`French Revolution`) kepada perkembangan pemikiran etika dan politik dunia?",
      options: [
        {
          id: "a",
          text: "Pengenalan konsep pemerintahan beraja berperlembagaan.",
        },
        {
          id: "b",
          text: "Penekanan kepada idea kebebasan, kesamarataan, dan persaudaraan (`Liberty, Equality, Fraternity`).",
        },
        {
          id: "c",
          text: "Penciptaan sistem ekonomi merkantilisme untuk mengukuhkan kuasa negara.",
        },
        {
          id: "d",
          text: "Pengukuhan kuasa gereja sebagai panduan moral utama masyarakat.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Revolusi Perancis menggulingkan sistem monarki dengan melaungkan slogan `Liberty, Equality, Fraternity`. Idea-idea ini menjadi asas kepada perkembangan konsep hak asasi manusia, demokrasi, dan nasionalisme moden.",
        incorrect: {
          a: "Konsep ini lebih berkembang di England. Revolusi Perancis membawa kepada sistem republik.",
          c: "Revolusi ini berlaku pada penghujung era merkantilisme.",
          d: "Revolusi ini bersifat anti-klerikal dan mengurangkan pengaruh gereja dalam negara.",
        },
      },
    },
    {
      id: "dek-q38",
      text: "Apakah kesan pembukaan Terusan Suez pada tahun 1869 terhadap proses penjajahan Barat di Asia Tenggara?",
      options: [
        {
          id: "a",
          text: "Ia melambatkan proses penjajahan kerana kuasa Barat terpaksa membayar tol yang tinggi.",
        },
        {
          id: "b",
          text: "Ia tidak mempunyai sebarang kesan kerana kapal-kapal Barat masih menggunakan laluan mengelilingi Afrika.",
        },
        {
          id: "c",
          text: "Ia mempercepatkan perjalanan dari Eropah ke Asia, memudahkan pergerakan tentera dan pentadbir.",
        },
        {
          id: "d",
          text: "Ia menyebabkan kuasa-kuasa Asia seperti China dan Jepun mula menjajah Asia Tenggara.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Pembukaan Terusan Suez memendekkan jarak perjalanan laut antara Eropah dan Asia secara drastik. Ini membolehkan kuasa Eropah menghantar tentera, pentadbir, dan barangan dengan lebih cepat dan murah, sekali gus mengukuhkan imperialisme mereka.",
        incorrect: {
          a: "Keuntungan dari segi masa dan kos jauh lebih besar daripada bayaran tol, maka ia mempercepatkan proses.",
          b: "Laluan melalui Terusan Suez menjadi pilihan utama kerana jauh lebih pantas.",
          d: "Kuasa penjajah utama di rantau ini pada abad ke-19 adalah dari Eropah.",
        },
      },
    },
    {
      id: "dek-q39",
      text: "Dasar Desentralisasi diperkenalkan oleh British pada awal abad ke-20 di Negeri-Negeri Melayu Bersekutu. Apakah tujuan utama dasar ini?",
      options: [
        {
          id: "a",
          text: "Untuk memindahkan semua kuasa pentadbiran daripada Residen Jeneral kepada Sultan Melayu.",
        },
        {
          id: "b",
          text: "Untuk membubarkan Negeri-Negeri Melayu Bersekutu dan mengembalikan kuasa kepada setiap negeri.",
        },
        {
          id: "c",
          text: "Untuk mengagihkan semula sebahagian kuasa dari kerajaan pusat (persekutuan) kepada kerajaan negeri.",
        },
        {
          id: "d",
          text: "Untuk menyeragamkan lagi pentadbiran di NNMB dengan pentadbiran di Negeri-Negeri Selat.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Dasar ini diperkenalkan untuk mengurangkan kuasa Residen Jeneral yang terlalu berpusat dan untuk mengembalikan sebahagian kuasa pentadbiran kepada Majlis Mesyuarat Negeri di setiap negeri NNMB.",
        incorrect: {
          a: "Walaupun kuasa Sultan sedikit dipulihkan, ia bukan pemindahan kuasa sepenuhnya.",
          b: "NNMB tidak dibubarkan, tetapi strukturnya dilonggarkan.",
          d: "Tujuannya adalah untuk mengurangkan pemusatan kuasa, bukan menyeragamkan lagi.",
        },
      },
    },
    {
      id: "dek-q40",
      text: "Bagaimanakah peradaban Melayu mengadaptasi pengaruh peradaban India selepas kedatangan Islam?",
      options: [
        {
          id: "a",
          text: "Semua unsur peradaban India dihapuskan sepenuhnya dan digantikan dengan budaya Arab.",
        },
        {
          id: "b",
          text: "Unsur-unsur peradaban India seperti adat perkahwinan dan hierarki pemerintahan disesuaikan dengan ajaran Islam.",
        },
        {
          id: "c",
          text: "Bahasa Sanskrit dijadikan bahasa rasmi kedua selepas Bahasa Arab di istana-istana Melayu.",
        },
        {
          id: "d",
          text: "Agama Hindu dan Islam digabungkan untuk membentuk satu agama sinkretik yang baharu.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota menyatakan bahawa pengaruh peradaban India tidak sepenuhnya hilang, tetapi diadaptasi dan disesuaikan. Contohnya, adat bersanding dan beberapa aspek hierarki pemerintahan diubah suai agar tidak bercanggah dengan prinsip Islam.",
        incorrect: {
          a: "Pengaruh India tidak hilang sepenuhnya, sebaliknya berlaku proses penyesuaian.",
          c: "Bahasa Melayu (tulisan Jawi) menjadi bahasa utama, walaupun beberapa perkataan Sanskrit kekal digunakan.",
          d: "Islam menjadi agama utama; tidak wujud satu agama sinkretik yang rasmi.",
        },
      },
    },
  ],
};
