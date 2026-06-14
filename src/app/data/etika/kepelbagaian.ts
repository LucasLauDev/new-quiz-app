import { Quiz } from "@/app/types/quiz";

export const kepelbagaian: Quiz = {
  id: "kepelbagaian",
  categoryId: "etika",
  subcategoryId: "topik-3",
  title: "Kepelbagaian Masyarakat",
  questions: [
    {
      id: "pep3-q1",
      text: "Istilah ‘peradaban’ yang berasal daripada Bahasa Arab digunakan bagi menjelaskan maksud ketamadunan. Sebelum kedatangan Islam, perkataan yang lebih umum digunakan untuk maksud yang sama ialah...",
      options: [
        { id: "a", text: "Tamadun" },
        { id: "b", text: "Kemajuan" },
        { id: "c", text: "Budaya" },
        { id: "d", text: "Pembangunan" },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Sebelum Islam, istilah budaya yang bertunjangkan keluhuran nilai dan kehalusan budi pekerti digunakan untuk membawa maksud peradaban.",
        incorrect: {
          a: "Istilah 'tamadun' dipopularkan selepas kedatangan Islam.",
          b: "'Kemajuan' digunakan dalam konteks Melayu untuk peningkatan hidup tetapi tidak seluas 'budaya' pada era pra-Islam.",
          d: "'Pembangunan' adalah sinonim 'kemajuan' tetapi bukan istilah utama untuk peradaban pra-Islam.",
        },
      },
    },
    {
      id: "pep3-q2",
      text: "Apakah definisi paling tepat bagi 'Etika' berdasarkan konteks yang dibincangkan?",
      options: [
        {
          id: "a",
          text: "Sistem dan tahap perkembangan sosial sesuatu bangsa.",
        },
        {
          id: "b",
          text: "Prinsip moral atau nilai-nilai akhlak yang menjadi pegangan individu atau kumpulan.",
        },
        {
          id: "c",
          text: "Proses interaksi sosial yang membentuk sebuah masyarakat yang harmoni.",
        },
        {
          id: "d",
          text: "Undang-undang formal yang mengawal tingkah laku masyarakat.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Etika secara spesifik merujuk kepada prinsip moral atau nilai akhlak yang menjadi pegangan.",
        incorrect: {
          a: "Ini adalah definisi bagi Peradaban.",
          c: "Ini lebih menghuraikan proses sosial, bukan definisi etika itu sendiri.",
          d: "Undang-undang adalah sebahagian daripada sistem nilai, tetapi etika merangkumi skop moral yang lebih luas.",
        },
      },
    },
    {
      id: "pep3-q3",
      text: "Faktor geo-fizikal utama yang menjadikan Selat Melaka sebagai 'gelanggang kepelbagaian' ialah...",
      options: [
        {
          id: "a",
          text: "Kekayaan hasil buminya yang menarik pedagang Eropah.",
        },
        {
          id: "b",
          text: "Kedudukannya sebagai laluan strategik antara peradaban China dan India.",
        },
        {
          id: "c",
          text: "Bentuk muka buminya yang bergunung-ganang sesuai untuk pertahanan.",
        },
        { id: "d", text: "Iklimnya yang panas dan lembap sepanjang tahun." },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Kedudukan strategik Selat Melaka menjadikannya laluan utama pertemuan dan pergaulan antara peradaban besar dunia melalui perdagangan.",
        incorrect: {
          a: "Hasil bumi adalah produk dagangan, tetapi kedudukan geografinya adalah faktor utama sebagai gelanggang pertemuan.",
          c: "Faktor maritim (laut dan selat) lebih relevan berbanding daratan dalam konteks ini.",
          d: "Iklim adalah ciri umum rantau ini tetapi bukan faktor penentu utama sebagai pusat interaksi peradaban.",
        },
      },
    },
    {
      id: "pep3-q4",
      text: "Menurut J.S. Furnivall, ciri utama masyarakat plural ialah...",
      options: [
        {
          id: "a",
          text: "Bercampur dan bersatu padu dalam semua aspek kehidupan.",
        },
        {
          id: "b",
          text: "Bercampur tetapi tidak bersatu, hidup berdekatan tetapi terpisah oleh budaya sendiri.",
        },
        {
          id: "c",
          text: "Mengamalkan asimilasi budaya secara menyeluruh untuk membentuk satu identiti.",
        },
        {
          id: "d",
          text: "Hidup terasing sepenuhnya tanpa sebarang interaksi ekonomi atau sosial.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Furnivall menekankan bahawa masyarakat plural bercampur tetapi tidak bersatu, di mana setiap kumpulan berpegang pada budaya, agama, dan bahasa sendiri.",
        incorrect: {
          a: "Ini ciri masyarakat yang telah mencapai tahap integrasi, bukan plural.",
          c: "Ini adalah ciri proses asimilasi, bukan masyarakat plural.",
          d: "Mereka masih berinteraksi, terutamanya dalam aktiviti ekonomi di pasar, walaupun tidak bersatu.",
        },
      },
    },
    {
      id: "pep3-q5",
      text: "Yang manakah antara berikut paling tepat menerangkan konsep Asimilasi?\nI. Proses integrasi sehala di mana minoriti menyerap budaya majoriti.\nII. Identiti asal kelompok minoriti akan hilang atau berkurangan.\nIII. Formula prosesnya ialah A + B + C → A, di mana A adalah kumpulan dominan.\nIV. Menghasilkan satu budaya baharu yang berbeza daripada budaya asal (Budaya D).",
      options: [
        { id: "a", text: "I & II sahaja" },
        { id: "b", text: "I, II & III sahaja" },
        { id: "c", text: "II, III & IV sahaja" },
        { id: "d", text: "Semua di atas" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Pernyataan I, II, dan III adalah ciri utama proses asimilasi seperti yang dijelaskan dalam nota.",
        incorrect: {
          a: "Pilihan ini tidak lengkap kerana pernyataan III juga betul.",
          c: "Pilihan ini salah kerana pernyataan IV merujuk kepada amalgamasi.",
          d: "Pilihan ini salah kerana pernyataan IV adalah ciri proses amalgamasi (A + B + C → D).",
        },
      },
    },
    {
      id: "pep3-q6",
      text: "Konsep Akomodasi dalam hubungan etnik merujuk kepada keadaan di mana...",
      options: [
        {
          id: "a",
          text: "Kelompok minoriti dipaksa menerima budaya majoriti.",
        },
        {
          id: "b",
          text: "Setiap etnik menyedari dan menghormati norma etnik lain sambil mengekalkan budaya sendiri.",
        },
        {
          id: "c",
          text: "Unsur budaya asing diterima dan diolah ke dalam budaya tempatan.",
        },
        {
          id: "d",
          text: "Perkahwinan campur digalakkan untuk mewujudkan satu bangsa baharu.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Akomodasi menekankan kesedaran dan penghormatan terhadap budaya etnik lain tanpa menggugat budaya masing-masing.",
        incorrect: {
          a: "Ini merujuk kepada proses asimilasi.",
          c: "Ini adalah definisi bagi akulturasi.",
          d: "Ini adalah ciri utama amalgamasi.",
        },
      },
    },
    {
      id: "pep3-q7",
      text: "Apakah yang dimaksudkan dengan Akulturasi?",
      options: [
        {
          id: "a",
          text: "Proses pemisahan atau pengasingan antara kumpulan etnik.",
        },
        {
          id: "b",
          text: "Penerimaan unsur kebudayaan asing dan mengolahnya dalam kebudayaan sendiri tanpa menghilangkan identiti asal.",
        },
        {
          id: "c",
          text: "Percantuman biologi melalui perkahwinan campur antara etnik.",
        },
        {
          id: "d",
          text: "Penyerapan sepenuhnya budaya dominan oleh kumpulan minoriti.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Akulturasi ialah proses penerimaan dan pengolahan unsur budaya lain ke dalam budaya sendiri.",
        incorrect: {
          a: "Ini adalah definisi bagi segregasi.",
          c: "Ini adalah definisi bagi amalgamasi.",
          d: "Ini adalah definisi bagi asimilasi.",
        },
      },
    },
    {
      id: "pep3-q8",
      text: "Amalgamasi adalah satu proses percantuman yang paling jelas berlaku melalui...",
      options: [
        { id: "a", text: "Pelaksanaan sistem pendidikan yang seragam." },
        { id: "b", text: "Perkongsian perayaan kebudayaan antara kaum." },
        {
          id: "c",
          text: "Perkahwinan campur antara etnik yang berbeza (percantuman biologi).",
        },
        {
          id: "d",
          text: "Penguatkuasaan undang-undang yang adil dan saksama.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Cara utama berlakunya amalgamasi adalah melalui perkahwinan campur yang menghasilkan ras dan budaya baharu.",
        incorrect: {
          a: "Ini boleh membawa kepada integrasi tetapi bukan amalgamasi.",
          b: "Ini adalah contoh akomodasi atau akulturasi.",
          d: "Ini menyumbang kepada kestabilan sosial, bukan amalgamasi secara langsung.",
        },
      },
    },
    {
      id: "pep3-q9",
      text: "Pada era pra-kolonial, aktiviti ekonomi utama masyarakat Melayu ialah...",
      options: [
        { id: "a", text: "Perdagangan antarabangsa di pelabuhan utama." },
        { id: "b", text: "Perlombongan bijih timah secara komersial." },
        {
          id: "c",
          text: "Ekonomi sara diri yang mencukupi untuk keperluan diri dan keluarga.",
        },
        { id: "d", text: "Perladangan getah untuk tujuan eksport." },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Ekonomi pada era ini bersifat sara diri, iaitu kegiatan asas untuk menampung keperluan sendiri.",
        incorrect: {
          a: "Walaupun perdagangan wujud (cth: Melaka), asas ekonomi masyarakat umum ialah sara diri.",
          b: "Perlombongan komersial berkembang pesat pada era kolonial British.",
          d: "Getah diperkenalkan secara komersial pada era kolonial British.",
        },
      },
    },
    {
      id: "pep3-q10",
      text: "Dasar Ekonomi Baru (DEB) diperkenalkan pada tahun 1970 dengan dua objektif utama, iaitu...",
      options: [
        {
          id: "a",
          text: "Memodenkan sektor pertanian dan menggalakkan pelaburan asing.",
        },
        {
          id: "b",
          text: "Meningkatkan pemilikan ekuiti korporat Bumiputera dan memajukan sektor perindustrian.",
        },
        {
          id: "c",
          text: "Menasionalisasikan syarikat asing dan menyusun semula pasaran buruh.",
        },
        {
          id: "d",
          text: "Pembasmian kemiskinan tanpa mengira kaum dan penyusunan semula masyarakat.",
        },
      ],
      correctOptionId: "d",
      explanation: {
        correct:
          "Dua objektif utama DEB ialah pembasmian kemiskinan dan penyusunan semula masyarakat untuk mengurangkan pengenalan kaum mengikut fungsi ekonomi.",
        incorrect: {
          a: "Ini adalah sebahagian daripada strategi pembangunan, tetapi bukan objektif serampang dua mata DEB.",
          b: "Peningkatan ekuiti Bumiputera adalah sebahagian daripada strategi penyusunan semula masyarakat, bukan objektif yang berasingan.",
          c: "DEB tidak bertujuan menasionalisasikan syarikat asing.",
        },
      },
    },
    {
      id: "pep3-q11",
      text: "Siapakah tokoh sarjana Islam yang diiktiraf oleh Arnold Toynbee sebagai penyumbang falsafah sejarah terbesar di dunia?",
      options: [
        { id: "a", text: "Al-Farabi" },
        { id: "b", text: "Ibn Sina" },
        { id: "c", text: "Ibn Khaldun" },
        { id: "d", text: "Al-Ghazali" },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Arnold Toynbee menyatakan falsafah sejarah Ibn Khaldun adalah sumbangan terbesar yang pernah dilahirkan manusia.",
        incorrect: {
          a: "Al-Farabi adalah tokoh falsafah Islam yang agung, tetapi bukan yang dirujuk oleh Toynbee dalam konteks ini.",
          b: "Ibn Sina terkenal dalam bidang perubatan, bukan falsafah sejarah.",
          d: "Al-Ghazali terkenal dalam bidang teologi dan falsafah, tetapi nota secara spesifik memetik Arnold Toynbee yang merujuk kepada Ibn Khaldun.",
        },
      },
    },
    {
      id: "pep3-q12",
      text: "Apakah perbezaan asas antara Falsafah Pemikiran Tradisional dengan Falsafah Pemikiran Moden?",
      options: [
        {
          id: "a",
          text: "Tradisional menolak ilmu agama, manakala moden menerimanya.",
        },
        {
          id: "b",
          text: "Tradisional melihat matlamat hidup telah ditetapkan, manakala moden percaya manusia berhak menentukannya.",
        },
        {
          id: "c",
          text: "Tradisional mengutamakan sains, manakala moden mengutamakan falsafah.",
        },
        {
          id: "d",
          text: "Tradisional bersifat individualistik, manakala moden bersifat kolektif.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Falsafah tradisional berpandangan matlamat telah ditentukan, manakala falsafah moden berpandangan manusia berhak menentukan matlamat hidupnya.",
        incorrect: {
          a: "Keadaan adalah sebaliknya; pemikiran tradisional sangat berteraskan agama.",
          c: "Ini adalah generalisasi yang tidak tepat berdasarkan nota.",
          d: "Keadaan adalah sebaliknya; moden lebih menekankan hak individu.",
        },
      },
    },
    {
      id: "pep3-q13",
      text: "Kesultanan Melayu Melaka digelar 'Venice of the East' kerana peranannya sebagai...",
      options: [
        { id: "a", text: "Sebuah empayar agraria yang subur." },
        { id: "b", text: "Pusat perkembangan ajaran Islam yang utama." },
        {
          id: "c",
          text: "Sebuah empayar maritim dan pusat perdagangan antarabangsa yang gemilang.",
        },
        {
          id: "d",
          text: "Pusat pentadbiran yang mengamalkan sistem demokrasi.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Seperti Venice di Eropah, Melaka adalah sebuah pusat perdagangan antarabangsa yang menjadi tumpuan pedagang dari seluruh dunia.",
        incorrect: {
          a: "Melaka adalah empayar maritim (kelautan), bukan agraria (pertanian).",
          b: "Walaupun Islam berkembang di Melaka, gelaran itu merujuk kepada fungsi ekonominya.",
          d: "Melaka mengamalkan sistem kesultanan (monarki), bukan demokrasi.",
        },
      },
    },
    {
      id: "pep3-q14",
      text: "Apakah fungsi utama Undang-Undang Laut Melaka?",
      options: [
        { id: "a", text: "Mengawal sistem cukai di pelabuhan Melaka." },
        {
          id: "b",
          text: "Menetapkan hukuman bagi kesalahan jenayah di darat.",
        },
        {
          id: "c",
          text: "Menjamin keselamatan ribuan kapal dagang dari ancaman lanun dan perompak.",
        },
        {
          id: "d",
          text: "Mengatur protokol perkahwinan campur antara kerabat diraja.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Undang-undang ini diwujudkan khas untuk menjaga keselamatan laluan laut dan kapal dagang, yang menjadi kunci kejayaan Melaka.",
        incorrect: {
          a: "Sistem cukai diatur oleh pentadbir pelabuhan seperti Syahbandar, bukan fokus utama undang-undang ini.",
          b: "Kesalahan jenayah di darat dikawal oleh Hukum Kanun Melaka.",
          d: "Ini di bawah bidang kuasa istana dan adat, bukan Undang-Undang Laut.",
        },
      },
    },
    {
      id: "pep3-q15",
      text: "Kewujudan masyarakat Baba dan Nyonya adalah contoh terbaik bagi proses...",
      options: [
        { id: "a", text: "Segregasi" },
        { id: "b", text: "Akomodasi" },
        { id: "c", text: "Asimilasi dan Amalgamasi" },
        { id: "d", text: "Segregasi Struktur" },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Masyarakat Baba Nyonya terbentuk hasil asimilasi (penyerapan budaya Melayu) dan amalgamasi (perkahwinan campur antara pedagang Cina dan wanita tempatan).",
        incorrect: {
          a: "Segregasi adalah pemisahan, manakala Baba Nyonya adalah hasil penyatuan.",
          b: "Akomodasi mengekalkan budaya asal, tetapi Baba Nyonya mempunyai budaya kacukan yang unik.",
          d: "Segregasi struktur tidak wujud sebagai konsep dalam nota.",
        },
      },
    },
    {
      id: "pep3-q16",
      text: "Apakah tujuan utama British membawa masuk buruh dari China dan India secara besar-besaran?",
      options: [
        { id: "a", text: "Untuk mewujudkan masyarakat yang pelbagai budaya." },
        {
          id: "b",
          text: "Untuk menyaingi populasi orang Melayu di Tanah Melayu.",
        },
        {
          id: "c",
          text: "Untuk memenuhi keperluan tenaga kerja di sektor perlombongan bijih timah dan perladangan getah.",
        },
        {
          id: "d",
          text: "Untuk menyebarkan teknologi dan kemahiran moden kepada penduduk tempatan.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Kemasukan mereka adalah didorong oleh kepentingan ekonomi British untuk mendapatkan tenaga buruh yang ramai bagi mengusahakan lombong dan ladang.",
        incorrect: {
          a: "Kepelbagaian budaya adalah kesan, bukan tujuan utama dasar British.",
          b: "Perubahan demografi adalah kesan, bukan tujuan utama dasar British.",
          d: "British tidak mempunyai agenda khusus untuk pemindahan teknologi kepada penduduk tempatan melalui kemasukan buruh.",
        },
      },
    },
    {
      id: "pep3-q17",
      text: "Konsep Segregasi dalam hubungan etnik merujuk kepada...",
      options: [
        {
          id: "a",
          text: "Proses pembentukan budaya baharu hasil perkahwinan campur.",
        },
        {
          id: "b",
          text: "Pemisahan atau pengasingan antara etnik dari segi tempat tinggal dan sistem pendidikan.",
        },
        {
          id: "c",
          text: "Penerimaan norma dan nilai etnik lain secara harmoni.",
        },
        {
          id: "d",
          text: "Penyerapan budaya kelompok majoriti oleh kelompok minoriti.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Segregasi ialah pemisahan atau pengasingan yang boleh berlaku dalam pelbagai bentuk seperti penempatan, sekolah, dan kemudahan awam.",
        incorrect: {
          a: "Ini adalah amalgamasi.",
          c: "Ini adalah akomodasi.",
          d: "Ini adalah asimilasi.",
        },
      },
    },
    {
      id: "pep3-q18",
      text: "Apakah cabaran utama yang dibawa oleh pendigitalan sejagat kepada etika dan peradaban tempatan?",
      options: [
        { id: "a", text: "Peningkatan kos sara hidup akibat teknologi mahal." },
        {
          id: "b",
          text: "Kesukaran masyarakat tempatan untuk mengadaptasi teknologi baharu.",
        },
        {
          id: "c",
          text: "Penjajahan pemikiran dan budaya Barat yang menyerap masuk melalui media digital.",
        },
        {
          id: "d",
          text: "Pengurangan interaksi fizikal yang menyebabkan keruntuhan institusi keluarga.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota secara jelas menyatakan bahawa teknologi maklumat yang dikuasai Barat menjadi cabaran kerana ia membawa kepada penjajahan pemikiran dan budaya yang mempengaruhi nilai tempatan.",
        incorrect: {
          a: "Ini adalah cabaran sosio-ekonomi, tetapi nota menekankan cabaran budaya.",
          b: "Ini adalah cabaran sosio-ekonomi, tetapi nota menekankan cabaran budaya.",
          d: "Walaupun relevan, cabaran utama yang ditekankan dalam nota ialah pengaruh budaya Barat.",
        },
      },
    },
    {
      id: "pep3-q19",
      text: "Antara berikut, manakah merupakan impak positif media digital kepada masyarakat kepelbagaian?",
      options: [
        {
          id: "a",
          text: "Penyebaran berita palsu yang boleh menimbulkan konflik.",
        },
        {
          id: "b",
          text: "Peningkatan jaringan komunikasi dan perkongsian ilmu tanpa sempadan.",
        },
        {
          id: "c",
          text: "Kewujudan jurang digital antara penduduk bandar dan luar bandar.",
        },
        {
          id: "d",
          text: "Penyerapan budaya popular asing yang meminggirkan budaya tempatan.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota menyatakan impak positif media digital termasuk peningkatan jaringan komunikasi, mendekatkan manusia, dan membuka ruang perkongsian ilmu.",
        incorrect: {
          a: "Ini adalah contoh cabaran atau impak negatif media digital.",
          c: "Ini adalah contoh cabaran atau impak negatif media digital.",
          d: "Ini adalah contoh cabaran atau impak negatif media digital.",
        },
      },
    },
    {
      id: "pep3-q20",
      text: "Mengapakah pengajaran daripada kitaran sejarah peradaban penting kepada generasi hari ini?",
      options: [
        {
          id: "a",
          text: "Untuk membuktikan keunggulan peradaban moden berbanding peradaban kuno.",
        },
        {
          id: "b",
          text: "Untuk dijadikan iktibar agar tidak leka dengan keamanan dan kemewahan yang dikecapi.",
        },
        {
          id: "c",
          text: "Untuk menolak sebarang bentuk pengaruh dari peradaban luar.",
        },
        {
          id: "d",
          text: "Untuk memberi fokus sepenuhnya kepada pembangunan ekonomi dan teknologi.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Pengajaran sejarah patut dijadikan iktibar agar generasi muda tidak leka dengan keamanan dan kemewahan, serta menghargai proses pembinaan negara bangsa.",
        incorrect: {
          a: "Pernyataan ini tidak sejajar dengan mesej utama dalam penutup nota.",
          c: "Pernyataan ini tidak sejajar dengan mesej utama dalam penutup nota.",
          d: "Pernyataan ini tidak sejajar dengan mesej utama dalam penutup nota.",
        },
      },
    },
    {
      id: "pep3-q21",
      text: "Antara berikut, manakah BUKAN ciri sebuah masyarakat seperti yang dihuraikan dalam nota?",
      options: [
        { id: "a", text: "Berkelompok dan berbudaya." },
        { id: "b", text: "Mengalami perubahan dan berinteraksi." },
        { id: "c", text: "Mempunyai kepimpinan dan aturan sosial." },
        { id: "d", text: "Bersifat statik dan tidak berubah." },
      ],
      correctOptionId: "d",
      explanation: {
        correct:
          "Masyarakat sentiasa mengalami perubahan; ia tidak bersifat statik. Ini adalah ciri utama yang membezakannya.",
        incorrect: {
          a: "Ini adalah ciri-ciri masyarakat yang disenaraikan.",
          b: "Ini adalah ciri-ciri masyarakat yang disenaraikan.",
          c: "Ini adalah ciri-ciri masyarakat yang disenaraikan.",
        },
      },
    },
    {
      id: "pep3-q22",
      text: "Konsep 'masyarakat majmuk' di Tanah Melayu merujuk secara spesifik kepada pembentukan masyarakat pelbagai etnik pada era...",
      options: [
        {
          id: "a",
          text: "Kesultanan Melayu Melaka melalui perdagangan semula jadi.",
        },
        {
          id: "b",
          text: "Penjajahan British melalui kemasukan buruh dari China dan India.",
        },
        { id: "c", text: "Pasca-kemerdekaan melalui dasar pintu terbuka." },
        { id: "d", text: "Globalisasi melalui kemasukan teknologi digital." },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Istilah 'masyarakat majmuk' digunakan khas untuk merujuk kepada masyarakat yang wujud selepas kehadiran penjajah yang membawa masuk pendatang untuk kepentingan ekonomi.",
        incorrect: {
          a: "Era Melaka lebih tepat dirujuk sebagai zaman 'pluraliti' semula jadi.",
          c: "Era ini lebih dikaitkan dengan fenomena 'superdiversity'.",
          d: "Era ini lebih dikaitkan dengan fenomena 'superdiversity'.",
        },
      },
    },
    {
      id: "pep3-q23",
      text: "Pilih padanan yang TEPAT antara konsep hubungan etnik dan formulanya.",
      options: [
        { id: "a", text: "Asimilasi: A + B + C → A + B + C" },
        { id: "b", text: "Akomodasi: A + B + C → D" },
        { id: "c", text: "Amalgamasi: A + B + C → D" },
        { id: "d", text: "Akulturasi: A + B + C → A" },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Formula A + B + C → D mewakili proses amalgamasi di mana kumpulan etnik berlainan (A, B, C) membentuk satu kumpulan baharu (D).",
        incorrect: {
          a: "Formula ini untuk akomodasi. Formula asimilasi ialah A+B+C → A.",
          b: "Formula ini untuk amalgamasi. Formula akomodasi ialah A+B+C → A+B+C.",
          d: "Formula ini untuk asimilasi.",
        },
      },
    },
    {
      id: "pep3-q24",
      text: "Dasar pemisahan antara agama dan negara yang diperkenalkan oleh British di Tanah Melayu telah menyebabkan...",
      options: [
        {
          id: "a",
          text: "Sultan mendapat kuasa penuh dalam pentadbiran negara.",
        },
        {
          id: "b",
          text: "Undang-undang Islam dijadikan asas perlembagaan Persekutuan Tanah Melayu.",
        },
        {
          id: "c",
          text: "Kuasa Sultan terhad kepada hal ehwal agama Islam dan adat istiadat Melayu.",
        },
        {
          id: "d",
          text: "British menghapuskan sepenuhnya sistem kesultanan Melayu.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "British menguasai pentadbiran negara, manakala Sultan hanya menjaga hal ehwal agama Islam dan adat istiadat Melayu.",
        incorrect: {
          a: "Kuasa Sultan dihadkan, bukan diperluaskan.",
          b: "British memperkenalkan sistem pentadbiran sekular.",
          d: "Sistem kesultanan dikekalkan tetapi dengan kuasa yang terhad.",
        },
      },
    },
    {
      id: "pep3-q25",
      text: "Apakah kesan langsung dasar 'pecah dan perintah' British terhadap struktur masyarakat di Tanah Melayu?",
      options: [
        {
          id: "a",
          text: "Tercetusnya proses asimilasi budaya yang pesat antara kaum.",
        },
        {
          id: "b",
          text: "Pengasingan kaum mengikut fungsi ekonomi dan kawasan penempatan.",
        },
        {
          id: "c",
          text: "Pengukuhan perpaduan dan identiti kebangsaan yang jitu.",
        },
        {
          id: "d",
          text: "Perkongsian kuasa politik yang adil antara semua kumpulan etnik.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Dasar ini membawa kepada segregasi, di mana kaum Melayu di kawasan kampung (pertanian), Cina di bandar (perlombongan/perniagaan), dan India di estet (perladangan).",
        incorrect: {
          a: "Dasar ini melambatkan asimilasi dan merenggangkan perpaduan, bukan sebaliknya.",
          c: "Dasar ini melambatkan asimilasi dan merenggangkan perpaduan, bukan sebaliknya.",
          d: "British memegang kuasa politik utama, bukan berkongsi secara adil.",
        },
      },
    },
    {
      id: "pep3-q26",
      text: "Antara berikut, manakah objektif Dasar Ekonomi Baru (DEB) yang paling tepat?\nI. Membasmi kemiskinan tanpa mengira kaum.\nII. Menyusun semula masyarakat agar tidak identik dengan fungsi ekonomi.\nIII. Mencapai pemilikan ekuiti korporat 30% untuk Bumiputera.\nIV. Menghapuskan sepenuhnya pemilikan modal asing.",
      options: [
        { id: "a", text: "I & II sahaja" },
        { id: "b", text: "I, II & III sahaja" },
        { id: "c", text: "II, III & IV sahaja" },
        { id: "d", text: "Semua di atas" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Pernyataan I, II, dan III adalah objektif dan strategi utama DEB.",
        incorrect: {
          a: "Pilihan ini tidak lengkap kerana pernyataan III juga merupakan strategi penting DEB.",
          c: "Pilihan ini salah kerana pernyataan IV tidak benar.",
          d: "Pilihan ini salah kerana DEB hanya bermatlamat mengurangkan pemilikan modal asing kepada 30%, bukan menghapuskannya.",
        },
      },
    },
    {
      id: "pep3-q27",
      text: "Mengapakah Kesultanan Melayu Melaka dianggap sebagai lambang pertemuan masyarakat pelbagai etnik?",
      options: [
        {
          id: "a",
          text: "Kerana pemerintahnya menolak kehadiran pedagang asing.",
        },
        {
          id: "b",
          text: "Kerana sistem pentadbirannya yang terbuka dan pelantikan pegawai dari pelbagai bangsa.",
        },
        { id: "c", text: "Kerana ia melaksanakan dasar segregasi yang ketat." },
        {
          id: "d",
          text: "Kerana ekonominya bergantung sepenuhnya kepada hasil pertanian.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Sifat pemerintahan yang terbuka, diplomasi, dan penglibatan pelbagai bangsa dalam istana adalah bukti kepelbagaiannya.",
        incorrect: {
          a: "Pemerintah Melaka sangat mengalu-alukan kehadiran pedagang asing.",
          c: "Melaka mengamalkan keterbukaan, bukan segregasi.",
          d: "Ekonominya sangat bergantung pada perdagangan maritim.",
        },
      },
    },
    {
      id: "pep3-q28",
      text: "Proses interaksi antara pelbagai peradaban di Alam Melayu akhirnya telah...",
      options: [
        { id: "a", text: "Menghapuskan peradaban Melayu secara total." },
        {
          id: "b",
          text: "Menyebabkan dominasi mutlak peradaban dari Timur Tengah.",
        },
        {
          id: "c",
          text: "Menyulam peradaban majmuk dunia melalui difusi budaya.",
        },
        { id: "d", text: "Mencetuskan konflik peradaban yang berpanjangan." },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Peradaban Malaysia adalah hasil penyulaman peradaban majmuk dunia (India, Cina, Timur Tengah, Eropah) melalui proses difusi budaya.",
        incorrect: {
          a: "Peradaban Melayu tidak hapus.",
          b: "Tiada dominasi mutlak oleh satu peradaban.",
          d: "Interaksi utamanya bersifat harmoni.",
        },
      },
    },
    {
      id: "pep3-q29",
      text: "Apakah yang dimaksudkan dengan 'superdiversity' pada era globalisasi?",
      options: [
        {
          id: "a",
          text: "Kepelbagaian yang hanya melibatkan tiga kaum utama di Malaysia.",
        },
        {
          id: "b",
          text: "Proses migrasi yang berlaku secara paksaan seperti pada zaman kolonial.",
        },
        {
          id: "c",
          text: "Sifat kepelbagaian yang menjadi semakin pekat dan kompleks akibat platform digital dan globalisasi.",
        },
        {
          id: "d",
          text: "Kepelbagaian yang wujud di pusat perdagangan seperti Melaka pada abad ke-15.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Istilah ini digunakan untuk menggambarkan kepelbagaian yang menjadi semakin pekat, ligat, dan kompleks pada era pasca-kolonial dan globalisasi, terutamanya dengan adanya platform digital.",
        incorrect: {
          a: "Superdiversity melangkaui kerangka tiga kaum tradisional.",
          b: "Ini merujuk kepada pembentukan masyarakat majmuk.",
          d: "Ini lebih tepat dirujuk sebagai pluraliti.",
        },
      },
    },
    {
      id: "pep3-q30",
      text: "Pilih padanan yang betul mengenai tokoh Barat dan pengiktirafan mereka terhadap Ibn Khaldun.",
      options: [
        {
          id: "a",
          text: "Arnold Toynbee: Ibn Khaldun adalah ahli sejarah teragung sepanjang zaman.",
        },
        {
          id: "b",
          text: "R. Flint: Falsafah sejarah Ibn Khaldun adalah sumbangan terbesar manusia.",
        },
        {
          id: "c",
          text: "G. Sarton: Ibn Khaldun adalah ahli falsafah Islam yang tiada taranya.",
        },
        {
          id: "d",
          text: "Arnold Toynbee: Falsafah sejarah Ibn Khaldun adalah sumbangan terbesar yang pernah dilahirkan manusia.",
        },
      ],
      correctOptionId: "d",
      explanation: {
        correct: "Padanan ini tepat seperti yang dinyatakan dalam nota.",
        incorrect: {
          a: "Padanan ini tidak tepat. G. Sarton menganggap Ibn Khaldun ahli sejarah dan falsafah agung.",
          b: "Pernyataan ini adalah pandangan Arnold Toynbee, bukan R. Flint.",
          c: "R. Flint yang menganggapnya ahli falsafah Islam tiada tara.",
        },
      },
    },
    {
      id: "pep3-q31",
      text: "Falsafah pemikiran tradisional, seperti yang dianjurkan oleh Ibn Khaldun, menekankan...",
      options: [
        { id: "a", text: "Pemisahan mutlak antara ilmu agama dan ilmu logik." },
        {
          id: "b",
          text: "Kebebasan individu untuk menentukan matlamat hidup tanpa panduan.",
        },
        {
          id: "c",
          text: "Keperluan untuk mengintegrasikan ilmu agama dengan ilmu alat seperti logik dan matematik.",
        },
        {
          id: "d",
          text: "Penolakan terhadap semua bentuk falsafah dari Yunani.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Beliau berpendapat bahawa ilmu perlu diintegrasikan antara ilmu agama dan ilmu alat (logik, falsafah, matematik).",
        incorrect: {
          a: "Ibn Khaldun menganjurkan integrasi, bukan pemisahan.",
          b: "Ini adalah ciri falsafah moden.",
          d: "Beliau menuntut ilmu falsafah, menunjukkan keterbukaan terhadap ilmu dari luar.",
        },
      },
    },
    {
      id: "pep3-q32",
      text: "Proses Akomodasi boleh dirumuskan sebagai...",
      options: [
        { id: "a", text: "A + B + C → A" },
        { id: "b", text: "A + B + C → A + B + C" },
        { id: "c", text: "A + B + C → D" },
        { id: "d", text: "A + B + C → A** + B** + C**" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Formula ini menunjukkan setiap kumpulan etnik mengekalkan identiti masing-masing sambil hidup bersama secara harmoni.",
        incorrect: {
          a: "Ini formula untuk asimilasi.",
          c: "Ini formula untuk amalgamasi.",
          d: "Ini formula untuk akulturasi.",
        },
      },
    },
    {
      id: "pep3-q33",
      text: "Apakah kesan utama percampuran budaya di Melaka yang boleh dilihat sehingga hari ini?",
      options: [
        { id: "a", text: "Kehilangan sepenuhnya adat dan budaya Melayu." },
        {
          id: "b",
          text: "Wujudnya komuniti hibrid seperti Baba Nyonya, Melayu keturunan Arab, dan India Muslim.",
        },
        { id: "c", text: "Penggunaan Bahasa Portugis sebagai lingua franca." },
        {
          id: "d",
          text: "Pembinaan bandar yang bercirikan seni bina Eropah sepenuhnya.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Proses asimilasi dan amalgamasi telah melahirkan kewujudan komuniti-komuniti unik ini yang menjadi warisan kepelbagaian Melaka.",
        incorrect: {
          a: "Adat dan budaya Melayu kekal sebagai teras.",
          c: "Lingua franca pada zaman itu ialah Bahasa Melayu.",
          d: "Seni bina Eropah hanya wujud selepas era penjajahan.",
        },
      },
    },
    {
      id: "pep3-q34",
      text: "British melaksanakan dasar segregasi dalam sistem pendidikan melalui...",
      options: [
        {
          id: "a",
          text: "Penubuhan satu aliran sekolah kebangsaan untuk semua kaum.",
        },
        {
          id: "b",
          text: "Pengenalan sekolah vernakular yang menggunakan bahasa ibunda kaum masing-masing.",
        },
        {
          id: "c",
          text: "Pemberian biasiswa kepada semua kaum untuk belajar di England.",
        },
        {
          id: "d",
          text: "Pengharaman penggunaan bahasa selain Bahasa Inggeris di semua sekolah.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Sistem sekolah vernakular (sekolah Melayu, Cina, Tamil) adalah alat utama British untuk melaksanakan segregasi dalam pendidikan.",
        incorrect: {
          a: "Ini adalah dasar pasca-kemerdekaan, bukan era British.",
          c: "Ini tidak menggambarkan dasar pendidikan British secara menyeluruh di Tanah Melayu.",
          d: "Ini tidak menggambarkan dasar pendidikan British secara menyeluruh di Tanah Melayu.",
        },
      },
    },
    {
      id: "pep3-q35",
      text: "Peradaban majmuk di Malaysia adalah hasil daripada...",
      options: [
        {
          id: "a",
          text: "Proses asimilasi sepenuhnya ke dalam budaya Melayu.",
        },
        {
          id: "b",
          text: "Penolakan total terhadap semua pengaruh budaya luar.",
        },
        {
          id: "c",
          text: "Pengaruh tamadun Barat semata-mata pada era kolonial.",
        },
        {
          id: "d",
          text: "Difusi dan interaksi budaya dari pelbagai peradaban dunia (India, Cina, Arab, Eropah).",
        },
      ],
      correctOptionId: "d",
      explanation: {
        correct:
          "Peradaban Malaysia adalah penyulaman peradaban majmuk dunia hasil daripada proses difusi budaya yang berterusan.",
        incorrect: {
          a: "Proses yang berlaku lebih rencam, bukan asimilasi sepenuhnya.",
          b: "Peradaban Malaysia menerima dan mengolah pengaruh luar.",
          c: "Pengaruh Barat adalah salah satu lapisan, bukan satu-satunya.",
        },
      },
    },
    {
      id: "pep3-q36",
      text: "Mengapakah pemahaman terhadap etika dan peradaban penting dalam konteks Malaysia hari ini?",
      options: [
        {
          id: "a",
          text: "Untuk mengembalikan sistem pentadbiran seperti zaman kolonial.",
        },
        {
          id: "b",
          text: "Untuk membuktikan keunggulan satu etnik berbanding etnik yang lain.",
        },
        {
          id: "c",
          text: "Untuk memupuk rasa persefahaman dan interaksi positif antara kaum.",
        },
        {
          id: "d",
          text: "Untuk memberi tumpuan kepada pembangunan fizikal semata-mata.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Pendedahan dan pemahaman terhadap latar belakang etika dan peradaban masing-masing boleh memupuk rasa persefahaman dan membuka ruang untuk interaksi positif.",
        incorrect: {
          a: "Ini adalah tujuan yang negatif dan sempit, bertentangan dengan semangat perpaduan.",
          b: "Ini adalah tujuan yang negatif dan sempit, bertentangan dengan semangat perpaduan.",
          d: "Ini adalah tujuan yang negatif dan sempit, bertentangan dengan semangat perpaduan.",
        },
      },
    },
    {
      id: "pep3-q37",
      text: "Apakah perbezaan paling ketara antara 'pluraliti' di zaman Melaka dan 'masyarakat majmuk' di zaman British?",
      options: [
        {
          id: "a",
          text: "Pluraliti zaman Melaka berlaku secara semula jadi, manakala masyarakat majmuk dibentuk oleh dasar penjajah.",
        },
        {
          id: "b",
          text: "Pluraliti zaman Melaka membawa perpecahan, manakala masyarakat majmuk membawa perpaduan.",
        },
        {
          id: "c",
          text: "Pluraliti zaman Melaka hanya melibatkan pedagang Arab, manakala masyarakat majmuk melibatkan kaum Cina dan India.",
        },
        {
          id: "d",
          text: "Pluraliti zaman Melaka bersifat sementara, manakala masyarakat majmuk bersifat kekal.",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Pluraliti di Melaka adalah semula jadi hasil perdagangan, manakala masyarakat majmuk adalah bentukan penjajah melalui migrasi buruh paksaan.",
        incorrect: {
          b: "Keadaan adalah sebaliknya; pluraliti Melaka lebih harmoni berbanding masyarakat majmuk era British yang terpisah.",
          c: "Pluraliti Melaka melibatkan pelbagai bangsa termasuk Cina dan India.",
          d: "Kedua-duanya meninggalkan kesan demografi yang kekal.",
        },
      },
    },
    {
      id: "pep3-q38",
      text: "Dalam skema proses hubungan etnik, tahap manakah yang dianggap paling ideal dan harmoni?",
      options: [
        { id: "a", text: "Segregasi" },
        { id: "b", text: "Akomodasi" },
        { id: "c", text: "Asimilasi" },
        { id: "d", text: "Amalgamasi" },
      ],
      correctOptionId: "d",
      explanation: {
        correct:
          "Amalgamasi, yang membawa kepada 'Bersatu Dalam Kepelbagaian' dan integrasi, dianggap tahap hubungan yang paling baik dalam skema tersebut.",
        incorrect: {
          a: "Segregasi adalah tahap paling negatif dan berisiko konflik.",
          b: "Akomodasi adalah tahap pertengahan yang stabil tetapi masih wujud keterpisahan budaya.",
          c: "Asimilasi boleh menimbulkan isu kehilangan identiti bagi kaum minoriti.",
        },
      },
    },
    {
      id: "pep3-q39",
      text: "Apakah yang dimaksudkan dengan 'difusi budaya'?",
      options: [
        { id: "a", text: "Pemaksaan satu budaya ke atas budaya yang lain." },
        {
          id: "b",
          text: "Proses penyebaran unsur-unsur budaya dari satu masyarakat ke masyarakat yang lain.",
        },
        {
          id: "c",
          text: "Kehilangan sepenuhnya ciri-ciri budaya asal sesebuah masyarakat.",
        },
        {
          id: "d",
          text: "Penolakan terhadap sebarang unsur budaya dari luar.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Difusi budaya merujuk kepada proses penyebaran idea, nilai, dan amalan budaya merentasi sempadan masyarakat. Peradaban Malaysia adalah hasil daripada proses ini.",
        incorrect: {
          a: "Ini tidak menggambarkan konsep difusi.",
          c: "Ini tidak menggambarkan konsep difusi.",
          d: "Ini tidak menggambarkan konsep difusi.",
        },
      },
    },
    {
      id: "pep3-q40",
      text: "Pengajaran utama daripada keseluruhan topik ini ialah peradaban Malaysia...",
      options: [
        { id: "a", text: "Dibentuk oleh pengaruh penjajah Barat semata-mata." },
        {
          id: "b",
          text: "Adalah statik dan tidak pernah berubah sejak zaman pra-kolonial.",
        },
        {
          id: "c",
          text: "Adalah hasil interaksi dan kesinambungan pelbagai peradaban sepanjang zaman.",
        },
        {
          id: "d",
          text: "Hanya akan berjaya jika menolak semua pengaruh luar.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Keseluruhan topik menunjukkan bahawa etika dan peradaban Malaysia adalah hasil tindan lapis dan evolusi yang melibatkan interaksi berterusan antara pelbagai peradaban.",
        incorrect: {
          a: "Pengaruh Barat hanyalah sebahagian daripadanya.",
          b: "Peradaban Malaysia sentiasa berevolusi merentasi era pra-kolonial, kolonial, dan pasca-kolonial.",
          d: "Sejarah membuktikan bahawa interaksi dengan pengaruh luar secara positif telah memperkaya peradaban tempatan.",
        },
      },
    },
  ],
};
