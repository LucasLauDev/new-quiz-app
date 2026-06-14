import { Quiz } from "@/app/types/quiz";

export const pembinaanPeradaban: Quiz = {
  id: "pembinaan-peradaban",
  categoryId: "etika",
  subcategoryId: "topik-5",
  title: "Pembinaan Peradaban Majmuk di Malaysia",
  questions: [
    {
      id: "sej1-q1",
      text: "Berdasarkan sinopsis pembinaan peradaban di Malaysia, apakah urutan kronologi yang paling tepat menggambarkan lapisan-lapisan peradaban yang membentuk identiti negara?",
      options: [
        { id: "a", text: "Asia → Pribumi Alam Melayu → Barat → Globalisasi" },
        { id: "b", text: "Pribumi Alam Melayu → Asia → Barat → Globalisasi" },
        { id: "c", text: "Pribumi Alam Melayu → Barat → Globalisasi → Asia" },
        { id: "d", text: "Asia → Barat → Pribumi Alam Melayu → Globalisasi" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Urutan ini tepat mengikut nota, di mana peradaban Pribumi Alam Melayu adalah asas terawal, diikuti oleh pengaruh peradaban Asia (India, Cina, Timur Tengah), kemudian peradaban Barat melalui kolonialisme, dan diakhiri dengan peradaban globalisasi melalui teknologi digital.",
        incorrect: {
          a: "Salah. Peradaban Pribumi Alam Melayu adalah fondasi yang mendahului kedatangan pengaruh peradaban dari Asia.",
          c: "Salah. Pengaruh peradaban Barat dan Globalisasi merupakan lapisan yang hadir lebih lewat berbanding peradaban Pribumi dan Asia.",
          d: "Salah. Peradaban Pribumi Alam Melayu adalah titik mula, diikuti oleh peradaban Asia sebelum era peradaban Barat.",
        },
      },
    },
    {
      id: "sej1-q2",
      text: "Apakah peristiwa sejarah yang menjadi titik pemisah antara Zaman Proto Sejarah dengan Zaman Pensejarahan di Alam Melayu, yang turut memulakan pembentukan masyarakat kepelbagaian?",
      options: [
        {
          id: "a",
          text: "Penemuan artifak Zaman Logam di tapak arkeologi utama.",
        },
        {
          id: "b",
          text: "Kemunculan kerajaan-kerajaan purba seperti Langkasuka dan Kedah Tua.",
        },
        {
          id: "c",
          text: "Kedatangan kuasa penjajah Portugis yang menawan Melaka.",
        },
        {
          id: "d",
          text: "Kewujudan Kerajaan Kesultanan Melayu Melaka sebagai pusat perdagangan.",
        },
      ],
      correctOptionId: "d",
      explanation: {
        correct:
          "Nota secara jelas meletakkan 'Kewujudan Kerajaan Kesultanan Melayu Melaka' sebagai permulaan Zaman Pensejarahan, yang mana peranannya sebagai pusat perdagangan antarabangsa telah memulakan pembentukan masyarakat yang pelbagai.",
        incorrect: {
          a: "Salah. Zaman Logam tergolong dalam Zaman Pra-Sejarah, bukan penanda peralihan ke Zaman Pensejarahan.",
          b: "Salah. Kerajaan-kerajaan ini adalah ciri utama Zaman Proto Sejarah itu sendiri, bukan penanda permulaan zaman seterusnya.",
          c: "Salah. Kedatangan Portugis berlaku dalam Zaman Pensejarahan, tetapi titik permulaannya adalah Kesultanan Melayu Melaka.",
        },
      },
    },
    {
      id: "sej1-q3",
      text: "Kuasa Barat manakah yang memulakan era penjajahan di Alam Melayu dengan menawan Melaka pada tahun 1511?",
      options: [
        {
          id: "a",
          text: "Belanda, yang kemudiannya mengambil alih pentadbiran Melaka.",
        },
        {
          id: "b",
          text: "British, yang memperkenalkan sistem Residen di negeri-negeri Melayu.",
        },
        {
          id: "c",
          text: "Portugis, yang mendirikan kubu A Famosa sebagai pusat pertahanan.",
        },
        {
          id: "d",
          text: "Sepanyol, yang memfokuskan pengaruhnya di kepulauan Filipina.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Portugis merupakan kuasa Barat pertama yang menawan Melaka pada tahun 1511, menandakan permulaan era penjajahan Eropah di rantau ini.",
        incorrect: {
          a: "Salah. Belanda menawan Melaka dari Portugis pada tahun 1641, bukan kuasa penjajah yang pertama.",
          b: "Salah. Pengaruh British di Tanah Melayu bermula jauh lebih lewat, misalnya melalui penguasaan Pulau Pinang pada 1786.",
          d: "Salah. Sepanyol tidak pernah menjajah Melaka; tumpuan mereka adalah di Filipina.",
        },
      },
    },
    {
      id: "sej1-q4",
      text: "Apakah ciri utama yang mendefinisikan 'peradaban globalisasi' dalam konteks pembentukan peradaban majmuk Malaysia?",
      options: [
        {
          id: "a",
          text: "Penyerapan budaya Barat secara total ke dalam budaya tempatan.",
        },
        {
          id: "b",
          text: "Interaksi peradaban yang berlaku secara formal melalui hubungan diplomatik.",
        },
        {
          id: "c",
          text: "Kacukan pelbagai peradaban tanpa sempadan yang dimangkin oleh jaringan digital.",
        },
        {
          id: "d",
          text: "Pengukuhan peradaban pribumi melalui pengasingan daripada pengaruh luar.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota mentakrifkan peradaban ini sebagai 'kacukan pelbagai punca peradaban tanpa sempadan melalui jaringan digital yang kompleks,' yang didorong oleh internet dan media sosial.",
        incorrect: {
          a: "Salah. Globalisasi digambarkan sebagai 'kacukan pelbagai punca peradaban,' bukan dominasi tunggal oleh mana-mana peradaban.",
          b: "Salah. Interaksi globalisasi melangkaui hubungan rasmi negara dan berlaku secara meluas dalam masyarakat melalui teknologi.",
          d: "Salah. Globalisasi adalah antitesis kepada pengasingan; ia merujuk kepada interaksi dan jaringan rentas sempadan yang intensif.",
        },
      },
    },
    {
      id: "sej1-q5",
      text: "Menurut Abdul Rahman Embong (2001), apakah realiti sosio-politik yang wujud sejurus pengisytiharan kemerdekaan Persekutuan Tanah Melayu pada 31 Ogos 1957?",
      options: [
        {
          id: "a",
          text: "Sebuah negara-bangsa yang lengkap dan bersepadu telah dilahirkan.",
        },
        {
          id: "b",
          text: "Sebuah bangsa yang bersatu padu sepenuhnya telah berjaya dibentuk.",
        },
        {
          id: "c",
          text: "Sebuah negara telah lahir, tetapi proses pembinaan bangsanya baru bermula.",
        },
        {
          id: "d",
          text: "Sebuah sistem kesultanan mutlak telah dikembalikan kuasanya.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota memetik pandangan beliau dengan jelas: 'apabila Malaysia diisytiharkan merdeka pada 31 Ogos 1957, apa yang lahir ialah sebuah negara dan bukannya sebuah bangsa'. Ini menunjukkan pembinaan bangsa adalah satu proses pasca-kemerdekaan.",
        incorrect: {
          a: "Salah. Ini bertentangan dengan hujah beliau bahawa pembinaan bangsa adalah satu perjalanan yang panjang selepas kewujudan negara.",
          b: "Salah. Pembinaan bangsa Malaysia yang sepunya merupakan satu proses berterusan yang menyusul kemudian, bukan sesuatu yang selesai pada hari kemerdekaan.",
          d: "Salah. Negara moden yang lahir adalah sebuah negara Raja Berperlembagaan, bukan kesultanan mutlak.",
        },
      },
    },
    {
      id: "sej1-q6",
      text: "Bagaimanakah Karl Marx mentakrifkan 'Negara' (State) dari perspektif perjuangan kelas?",
      options: [
        {
          id: "a",
          text: "Sebagai komuniti manusia yang berhak memonopoli penggunaan kekerasan yang sah.",
        },
        {
          id: "b",
          text: "Sebagai produk percanggahan kelas yang dikawal oleh kelas dominan dari segi ekonomi.",
        },
        {
          id: "c",
          text: "Sebagai sistem politik yang didirikan oleh sekumpulan manusia dalam satu wilayah.",
        },
        {
          id: "d",
          text: "Sebagai organisasi politik berkuasa yang boleh menggunakan kekerasan untuk memerintah.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota memetik takrifan Marx: '...the state is the product of class contradictions and class struggle and is controlled by the economically-diminant class...'.",
        incorrect: {
          a: "Salah. Ini adalah takrifan negara oleh Max Weber, bukan Karl Marx.",
          c: "Salah. Ini adalah takrifan negara yang lebih menjurus kepada pandangan Robert Dahl.",
          d: "Salah. Ini adalah takrifan negara yang dikemukakan oleh Anthony Giddens.",
        },
      },
    },
    {
      id: "sej1-q7",
      text: "Manakah antara berikut merupakan empat elemen asas yang universal bagi pembentukan sesebuah 'Negara' (State)?",
      options: [
        {
          id: "a",
          text: "Parti politik, pilihan raya, parlimen, dan raja atau presiden.",
        },
        {
          id: "b",
          text: "Bahasa rasmi, agama rasmi, budaya kebangsaan, dan sejarah sepunya.",
        },
        {
          id: "c",
          text: "Penduduk, sempadan wilayah, kerajaan yang mentadbir, dan kedaulatan.",
        },
        {
          id: "d",
          text: "Tentera, polis, mahkamah, dan sistem percukaian yang teratur.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota menyatakan bahawa ciri-ciri utama pembentukan sesebuah negara merangkumi penduduk (rakyat), sempadan (wilayah), kerajaan, dan kedaulatan.",
        incorrect: {
          a: "Salah. Ini adalah institusi dalam sebuah negara demokrasi moden, bukan elemen asas yang universal bagi semua jenis negara.",
          b: "Salah. Ini adalah ciri-ciri yang lebih berkait rapat dengan pembentukan 'Bangsa' (Nation), bukan 'Negara' (State).",
          d: "Salah. Ini adalah jentera atau aparatus sesebuah negara untuk melaksanakan kuasanya, bukan elemen asas kewujudannya.",
        },
      },
    },
    {
      id: "sej1-q8",
      text: "Apakah perbezaan fundamental antara model 'negara bangsa tamu' dengan 'negara bangsa settler' dari segi kedudukan anak watan?",
      options: [
        {
          id: "a",
          text: "Negara bangsa tamu meminggirkan anak watan, manakala negara bangsa settler mengiktiraf mereka.",
        },
        {
          id: "b",
          text: "Negara bangsa tamu mengiktiraf hegemoni politik anak watan, manakala negara bangsa settler meminggirkan mereka.",
        },
        {
          id: "c",
          text: "Negara bangsa tamu dibentuk melalui asimilasi penuh, manakala negara bangsa settler melalui integrasi separa.",
        },
        {
          id: "d",
          text: "Negara bangsa tamu mengamalkan ekonomi sosialis, manakala negara bangsa settler mengamalkan ekonomi kapitalis.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota menjelaskan bahawa dalam negara bangsa tamu, 'hegemoni politik menjadi amalan adalah di mana anak watan diperakui dan diterima,' manakala dalam negara bangsa settler, komuniti migran 'telah meminggirkan... anak-anak watan asalnya'.",
        incorrect: {
          a: "Salah. Pernyataan ini terbalik. Negara bangsa tamu mengiktiraf anak watan, manakala negara bangsa settler didominasi oleh komuniti migran yang meminggirkan anak watan.",
          c: "Salah. Kaedah asimilasi atau integrasi boleh berlaku dalam kedua-dua jenis negara dan bukan faktor pembeza utama dari segi kedudukan anak watan.",
          d: "Salah. Sistem ekonomi tidak menentukan klasifikasi sesebuah negara sebagai tamu atau settler.",
        },
      },
    },
    {
      id: "sej1-q9",
      text: "Berdasarkan contoh dalam nota, yang manakah merupakan contoh 'bangsa tanpa negara' (nation without state)?\nI. Bangsa Jepun\nII. Bangsa Melayu Patani\nIII. Bangsa Jerman\nIV. Bangsa Kurdis",
      options: [
        { id: "a", text: "I dan III sahaja" },
        { id: "b", text: "II dan IV sahaja" },
        { id: "c", text: "I, II dan III sahaja" },
        { id: "d", text: "Semua di atas" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota secara spesifik menyebut bangsa Melayu Patani di Selatan Thailand dan bangsa Kurdis di utara Iraq sebagai contoh bangsa yang mempunyai identiti tersendiri tetapi tidak memiliki negara berdaulat mereka sendiri.",
        incorrect: {
          a: "Salah. Bangsa Jepun dan Jerman adalah contoh klasik 'satu bangsa satu negara' (one state one nation).",
          c: "Salah. Bangsa Jepun dan Jerman masing-masing mempunyai negara berdaulat.",
          d: "Salah. Hanya II dan IV yang betul berdasarkan contoh yang diberikan dalam nota.",
        },
      },
    },
    {
      id: "sej1-q10",
      text: "Benedict Anderson mentakrifkan bangsa sebagai sebuah ‘imagined political community’. Apakah maksud sebenar di sebalik konsep ini?",
      options: [
        {
          id: "a",
          text: "Bangsa adalah sebuah rekaan golongan elit politik yang tidak mempunyai asas sosial nyata.",
        },
        {
          id: "b",
          text: "Bangsa wujud kerana ahlinya membayangkan ikatan kebersamaan, walaupun tidak saling mengenali.",
        },
        {
          id: "c",
          text: "Bangsa adalah sebuah komuniti utopia yang mustahil untuk direalisasikan dalam dunia sebenar.",
        },
        {
          id: "d",
          text: "Bangsa hanya boleh dibayangkan kewujudannya selepas kejayaan satu revolusi politik.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Konsep ini merujuk kepada fakta bahawa ahli-ahli sesebuah bangsa tidak akan mengenali majoriti ahli yang lain, namun dalam minda setiap individu wujud imej perpaduan dan kebersamaan (communion) mereka.",
        incorrect: {
          a: "Salah. 'Imagined' (dibayangkan) tidak bermaksud ia palsu, tetapi merujuk kepada cara kewujudannya dalam kesedaran kolektif, bukan sebagai rekaan semata-mata.",
          c: "Salah. Komuniti ini adalah nyata dari segi impak sosial dan politiknya, bukan sekadar angan-angan yang tidak boleh dicapai.",
          d: "Salah. Konsep ini menerangkan sifat bangsa yang sedia wujud, bukan sesuatu yang hanya akan muncul pada masa hadapan.",
        },
      },
    },
    {
      id: "sej1-q11",
      text: "Walaupun terdapat pelbagai perspektif, apakah sentimen asas yang dianggap paling fundamental dalam mengikat individu menjadi sebuah 'bangsa'?",
      options: [
        {
          id: "a",
          text: "Penggunaan satu bahasa rasmi yang seragam di seluruh negara.",
        },
        {
          id: "b",
          text: "Penganutan satu agama yang sama oleh majoriti penduduk.",
        },
        {
          id: "c",
          text: "Perasaan kekitaan dan kebersamaan atau ‘belonging together’.",
        },
        {
          id: "d",
          text: "Ketaatan mutlak kepada seorang pemimpin politik yang berkarisma.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota merumuskan bahawa di sebalik pelbagai takrifan lain, 'sentimen yang membentuk bangsa ialah perasaan kebersamaan atau ‘belonging together’'. Ini adalah ikatan emosi dan psikologi yang paling asas.",
        incorrect: {
          a: "Salah. Walaupun bahasa penting, banyak bangsa yang berjaya mempunyai pelbagai dialek atau lebih dari satu bahasa rasmi.",
          b: "Salah. Banyak bangsa di dunia terdiri daripada penganut pelbagai agama yang hidup bersama.",
          d: "Salah. Ketaatan kepada pemimpin bersifat sementara, tetapi perasaan kebangsaan lazimnya lebih mendalam dan kekal.",
        },
      },
    },
    {
      id: "sej1-q12",
      text: "Antara konsep 'Bangsa Idaman' berikut, yang manakah diterima oleh pihak British sebelum kemerdekaan dan menjadi asas kepada kontrak sosial negara?",
      options: [
        {
          id: "a",
          text: "Konsep Melayu Raya yang digagaskan oleh golongan kiri Melayu.",
        },
        {
          id: "b",
          text: "Konsep Negara Islam yang diwacanakan oleh kelompok Islam.",
        },
        {
          id: "c",
          text: "Konsep masyarakat majmuk pimpinan Melayu (Malay-led plural society).",
        },
        {
          id: "d",
          text: "Konsep Malaysian Malaysia yang dipopularkan selepas kemerdekaan.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota menyatakan bahawa konsep ini adalah yang 'diterima oleh pihak British pada ketika itu,' yang dibuktikan melalui penubuhan Jawatankuasa Perhubungan Masyarakat (CLC) 1949 dan menjadi asas kepada perlembagaan.",
        incorrect: {
          a: "Salah. Konsep ini tidak diterima oleh British dan merupakan gagasan alternatif.",
          b: "Salah. Konsep ini diperkenalkan oleh kelompok Islam dan bukan merupakan asas utama rundingan kemerdekaan dengan British.",
          d: "Salah. Konsep ini dipopularkan oleh Lee Kuan Yew pada tahun 1960-an, iaitu selepas kemerdekaan Malaya.",
        },
      },
    },
    {
      id: "sej1-q13",
      text: "Apakah teras perjuangan di sebalik konsep 'Malaysian Malaysia' yang sering diwacanakan dalam arena politik negara?",
      options: [
        {
          id: "a",
          text: "Penegasan hegemoni politik Melayu secara mutlak dalam semua aspek.",
        },
        {
          id: "b",
          text: "Pembentukan sebuah negara teokrasi Islam yang berlandaskan syariah.",
        },
        {
          id: "c",
          text: "Perjuangan ke arah kesamarataan, hak sivil, dan multikulturalisme tanpa mengira kaum.",
        },
        {
          id: "d",
          text: "Pelaksanaan dasar pengasingan kaum untuk memelihara ketulenan budaya masing-masing.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota mengaitkan konsep ini dengan wacana pasca-2018 oleh PH yang menekankan 'Kesamarataan, kebebasan, hak asasi, multikulturalisme'.",
        incorrect: {
          a: "Salah. Konsep ini secara langsung mencabar idea hegemoni yang berasaskan kaum.",
          b: "Salah. Perjuangan utamanya adalah sekular dan sivil, bukan berteraskan satu agama tertentu.",
          d: "Salah. Konsep ini menggalakkan integrasi dan identiti nasional sepunya, bukan pengasingan atau segregasi.",
        },
      },
    },
    {
      id: "sej1-q14",
      text: "Apakah elemen-elemen yang menjadi 'PASAK PERLEMBAGAAN' dalam kerangka negara bangsa Malaysia?",
      options: [
        {
          id: "a",
          text: "Hak kesamarataan mutlak bagi semua warganegara tanpa sebarang pengecualian.",
        },
        {
          id: "b",
          text: "Kedudukan Raja-raja, agama Islam, Bahasa Melayu, dan hak istimewa orang Melayu.",
        },
        {
          id: "c",
          text: "Penggunaan undang-undang Inggeris (Common Law) sebagai sumber perundangan tertinggi.",
        },
        {
          id: "d",
          text: "Jaminan kebebasan mutlak bagi mana-mana negeri untuk keluar daripada Persekutuan.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota secara spesifik menyenaraikan 'Melayu, Islam, Bahasa Melayu, Raja dan AKTA 153 kedudukan Melayu dalam negara dijadikan PASAK Perlembagaan'. Ini adalah teras kepada kontrak sosial.",
        incorrect: {
          a: "Salah. Ini lebih menjurus kepada idea 'TAPAK INTEGRASI' dan wacana 'Malaysian Malaysia,' bukan 'PASAK' utama Perlembagaan.",
          c: "Salah. Walaupun Common Law digunakan, ia bukan pasak utama identiti negara bangsa dalam konteks yang dibincangkan.",
          d: "Salah. Perlembagaan Persekutuan tidak memperuntukkan hak untuk mana-mana negeri keluar daripada Persekutuan.",
        },
      },
    },
    {
      id: "sej1-q15",
      text: "Apakah fungsi utama 'TAPAK INTEGRASI' dalam struktur Perlembagaan Persekutuan Malaysia?",
      options: [
        {
          id: "a",
          text: "Untuk mengasimilasikan sepenuhnya kaum minoriti ke dalam budaya Melayu.",
        },
        {
          id: "b",
          text: "Untuk memastikan hegemoni politik Melayu tidak boleh dicabar oleh kaum lain.",
        },
        {
          id: "c",
          text: "Untuk mengikat komuniti bukan Bumiputera kepada negara dengan menjamin hak dan kepentingan mereka.",
        },
        {
          id: "d",
          text: "Untuk memisahkan urusan pentadbiran antara kaum Bumiputera dan bukan Bumiputera.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota menjelaskan bahawa kaum minoriti 'diikat di TAPAK INTEGRASI' melalui simbol perpaduan (YDPA), jaminan kebebasan beragama, hak bahasa ibunda, dan jaminan perlindungan kepentingan sah mereka oleh YDPA.",
        incorrect: {
          a: "Salah. Konsepnya adalah integrasi, bukan asimilasi, seperti yang dibuktikan dengan jaminan hak mempelajari bahasa ibunda dan mengamalkan agama lain.",
          b: "Salah. Tapak Integrasi berfungsi sebagai mekanisme penyatuan dan jaminan hak, bukan penegasan hegemoni semata-mata.",
          d: "Salah. Tapak Integrasi bertujuan menyatukan semua kaum di bawah satu payung perlembagaan, bukan memisahkan mereka.",
        },
      },
    },
    {
      id: "sej1-q16",
      text: "Manakah padanan yang betul antara pemimpin dan gagasan 'Bangsa Idaman' yang diperkenalkan oleh mereka?",
      options: [
        {
          id: "a",
          text: "Gagasan 1Malaysia oleh Tun Dr. Mahathir; Wawasan 2020 oleh Dato' Sri Najib.",
        },
        {
          id: "b",
          text: "Wawasan 2020 (Bangsa Malaysia) oleh Tun Dr. Mahathir; Gagasan 1Malaysia oleh Dato' Sri Najib.",
        },
        {
          id: "c",
          text: "Malaysian Malaysia oleh Tun Dr. Mahathir; Gagasan 1Malaysia oleh Lee Kuan Yew.",
        },
        {
          id: "d",
          text: "Wawasan 2020 oleh Tunku Abdul Rahman; Gagasan 1Malaysia oleh Tun Hussein Onn.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota menyatakan '1990- Tun M dan GERAKAN Bangsa Malaysia' (merujuk kepada Wawasan 2020) dan 'DSNajib 1Malaysia'.",
        incorrect: {
          a: "Salah. Urutan ini terbalik.",
          c: "Salah. 'Malaysian Malaysia' dipopularkan oleh Lee Kuan Yew, bukan Tun Dr. Mahathir.",
          d: "Salah. Kedua-dua gagasan ini diperkenalkan oleh pemimpin yang lebih terkemudian daripada yang dinyatakan.",
        },
      },
    },
    {
      id: "sej1-q17",
      text: "Shamsul A.B. memperkenalkan konsep ‘nation of intent’. Apakah implikasi utama konsep ini terhadap pemahaman kita tentang negara-bangsa Malaysia?",
      options: [
        {
          id: "a",
          text: "Pembinaan bangsa adalah satu projek yang telah selesai dengan termeterainya Perlembagaan Persekutuan.",
        },
        {
          id: "b",
          text: "Pembinaan bangsa adalah satu niat murni yang telah gagal sepenuhnya di Malaysia kerana kepelbagaian kaum.",
        },
        {
          id: "c",
          text: "Pembinaan bangsa adalah satu proses 'sedang berjalan' (work in progress) yang sentiasa dipertandingkan.",
        },
        {
          id: "d",
          text: "Pembinaan bangsa hanya boleh dicapai melalui niat bersama semua parti politik yang memerintah.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota memetik pandangan Shamsul A.B. bahawa 'sebuah negara bangsa adalah a project work in progress dan sentiasa berlaku contestation bangsa'. Ini bermakna ia adalah satu proses yang dinamik dan tidak pernah selesai.",
        incorrect: {
          a: "Salah. Konsep ini secara langsung menafikan bahawa pembinaan bangsa adalah satu projek yang telah berakhir.",
          b: "Salah. Konsep ini bukan tentang kegagalan total, tetapi tentang sifatnya yang berterusan dan sentiasa menjadi medan perbahasan.",
          d: "Salah. Walaupun niat politik penting, konsep ini merujuk kepada proses perdebatan yang lebih luas dalam masyarakat, bukan hanya dalam kalangan parti politik.",
        },
      },
    },
    {
      id: "sej1-q18",
      text: "Apakah kritikan utama Shamsul A.B. terhadap wacana hubungan kaum di Malaysia dalam era kontemporari?",
      options: [
        {
          id: "a",
          text: "Terlalu memfokuskan kepada hubungan dalaman kaum (intra-ethnic) sehingga mengabaikan hubungan antara kaum.",
        },
        {
          id: "b",
          text: "Gagal meraikan perbezaan yang wujud antara kaum dan sering melihatnya dalam dikotomi negatif.",
        },
        {
          id: "c",
          text: "Terlalu banyak memberi penekanan kepada hubungan antara kaum (inter-ethnic) sambil meminggirkan hubungan dalaman kaum.",
        },
        {
          id: "d",
          text: "Terlalu bergantung kepada model perpaduan dan integrasi yang diimport dari negara-negara Barat.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota menyatakan dengan jelas pandangan beliau bahawa 'penekanan banyak diberikan kepada hubungan antara kaum atau “inter-ethnic” tetapi meminggirkan peri penting hubungan dalam kaum atau “intra-ethnic”'.",
        incorrect: {
          a: "Salah. Kritikan beliau adalah sebaliknya; wacana lebih tertumpu kepada hubungan antara kaum.",
          b: "Salah. Walaupun ini adalah sebahagian daripada pandangan beliau, kritikan utamanya yang dinyatakan secara spesifik adalah mengenai fokus wacana tersebut.",
          d: "Salah. Kritikan spesifik yang direkodkan dalam nota tidak merujuk kepada pergantungan kepada model Barat.",
        },
      },
    },
    {
      id: "sej1-q19",
      text: "Menurut Tun Dr. Mahathir Mohamad (1992), etos bangsa perlu merangkumi semua perkara berikut KECUALI:",
      options: [
        {
          id: "a",
          text: "Perkongsian pengalaman sejarah dan nilai-nilai bersama.",
        },
        {
          id: "b",
          text: "Perasaan mempunyai identiti sepunya dan perkongsian takdir.",
        },
        {
          id: "c",
          text: "Kesetiaan dan komitmen emosi yang mendalam terhadap negara.",
        },
        {
          id: "d",
          text: "Penyeragaman identiti etnik demi membentuk satu budaya tunggal.",
        },
      ],
      correctOptionId: "d",
      explanation: {
        correct:
          "Petikan daripada Tun Dr. Mahathir secara eksplisit menyebut bahawa etos bangsa perlu 'melangkaui batas etnik **tanpa menjejaskan identiti etnik**' (without undermining ethnic identity), yang secara langsung bertentangan dengan idea penyeragaman penuh atau asimilasi.",
        incorrect: {
          a: "Salah. Perkongsian pengalaman sejarah (shared historical experiences) dan nilai bersama (shared values) adalah elemen (1) dan (2) yang disenaraikan.",
          b: "Salah. Perasaan identiti sepunya (feeling of common identity) dan perkongsian takdir (shared destiny) adalah elemen (3) dan (4) yang disenaraikan.",
          c: "Salah. Kesetiaan (loyalty) dan komitmen (commitment) adalah elemen (6) dan (7) yang disenaraikan.",
        },
      },
    },
    {
      id: "sej1-q20",
      text: "Apakah yang dimaksudkan dengan 'kerencaman sosial' yang lahir daripada transformasi sosial di Malaysia pasca-pembangunan?",
      options: [
        {
          id: "a",
          text: "Pengukuhan batas etnik dan hubungan sosial yang bersifat vertikal serta berhierarki.",
        },
        {
          id: "b",
          text: "Kepelbagaian sosial di mana batas etnik menipis dan hubungan sosial lebih bersifat horizontal.",
        },
        {
          id: "c",
          text: "Kembalinya masyarakat kepada budaya tradisi dan menolak sepenuhnya budaya moden dan global.",
        },
        {
          id: "d",
          text: "Penumpuan semula masyarakat di kawasan luar bandar dan penglibatan dalam ekonomi sara hidup.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota menghuraikan transformasi sosial melahirkan 'KERENCAMAN SOSIAL berpaksikan BUDAYA MODERNITI DAN KEPELBAGAIAN' dengan ciri 'Batas etnik nipis' dan 'Tingkah laku horizontal bukan vertikal,' yang merujuk kepada hubungan rentas etnik.",
        incorrect: {
          a: "Salah. Nota menyatakan sebaliknya, iaitu batas etnik menjadi semakin nipis dan hubungan sosial menjadi lebih horizontal (setara).",
          c: "Salah. Kerencaman sosial ini berpaksikan 'BUDAYA MODERNITI', bukan penolakan terhadapnya.",
          d: "Salah. Transformasi sosial yang dihuraikan adalah dari perdesaan ke kosmopolitan dan dari ekonomi sara hidup ke komersial-industri.",
        },
      },
    },
    {
      id: "sej1-q21",
      text: "Manakah antara berikut paling tepat menggambarkan konsep warisan etno-simbolisme yang menjadi asas pembentukan bangsa?",
      options: [
        {
          id: "a",
          text: "Indeks bursa saham, kadar pertukaran mata wang, dan pertumbuhan KDNK.",
        },
        {
          id: "b",
          text: "Bendera, bahasa, kerabat diraja, pahlawan, dan seni bina bangunan.",
        },
        {
          id: "c",
          text: "Sistem perundangan sivil, perlembagaan bertulis, dan jentera pentadbiran moden.",
        },
        {
          id: "d",
          text: "Dasar luar negara, keahlian dalam pertubuhan antarabangsa, dan perjanjian perdagangan.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota menyenaraikan 'bendara, bahasa... kerabat diraja, pahlawan... arkitek bangunan' sebagai contoh warisan etno-simbolisme yang mempunyai akar sejarah dan budaya yang mendalam.",
        incorrect: {
          a: "Salah. Ini adalah penunjuk ekonomi, bukan simbol identiti bangsa yang berakar umbi.",
          c: "Salah. Ini adalah ciri-ciri sebuah negara moden (state), bukan simbolisme bangsa (nation).",
          d: "Salah. Ini adalah aspek hubungan antarabangsa sesebuah negara, bukan warisan etno-simbolisme.",
        },
      },
    },
    {
      id: "sej1-q22",
      text: "Apakah impak utama kerencaman sosial terhadap budaya dan nilai politik di Malaysia?",
      options: [
        {
          id: "a",
          text: "Rakyat menjadi semakin pasif dan kurang peduli tentang isu-isu tadbir urus negara.",
        },
        {
          id: "b",
          text: "Tuntutan terhadap nilai seperti akauntabiliti, integriti, dan keterangkuman semakin meningkat.",
        },
        {
          id: "c",
          text: "Sokongan terhadap sistem pemerintahan berasaskan hegemoni kaum semakin menguat.",
        },
        {
          id: "d",
          text: "Isu-isu seperti rasuah dan salah guna kuasa mula dianggap sebagai perkara biasa dan diterima.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota menyenaraikan 'NILAI POLITIK' baharu yang dituntut oleh masyarakat yang lebih rencam termasuk 'Amanah-Integriti, Keadilan, Akauntabiliti, Transparensi, Keterangkuman'.",
        incorrect: {
          a: "Salah. Nota menunjukkan sebaliknya; budaya politik baru menuntut lebih banyak penglibatan, demokrasi dan kebebasan bersuara.",
          c: "Salah. Budaya politik baru lebih cenderung kepada demokrasi dan tadbir urus baik, berbanding hegemoni semata-mata.",
          d: "Salah. Isu-isu ini menjadi fokus utama kritikan dalam budaya politik baru, bukan sesuatu yang diterima.",
        },
      },
    },
    {
      id: "sej1-q23",
      text: "Bagaimanakah kedudukan rakyat Sabah dan Sarawak distrukturkan dalam kerangka negara bangsa selepas pembentukan Malaysia pada 1963?",
      options: [
        {
          id: "a",
          text: "Dianggap sebagai komuniti migran dengan kerakyatan yang terhad.",
        },
        {
          id: "b",
          text: "Diberi status autonomi penuh sebagai negara bersekutu yang bebas.",
        },
        {
          id: "c",
          text: "Diperakui sebagai Bumiputera dan menjadi sebahagian daripada 'Pasak' negara bangsa.",
        },
        {
          id: "d",
          text: "Diserapkan sepenuhnya di bawah pentadbiran negeri-negeri Melayu sedia ada.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota menyatakan dengan jelas: 'rakyat Sabah dan Sarawak diperakui sebagai Bumiputera dan dijadikan sebahagian PASAK negara bangsa bersama Melayu'.",
        incorrect: {
          a: "Salah. Mereka adalah anak watan (pribumi) di wilayah mereka dan mendapat kerakyatan penuh dalam Persekutuan.",
          b: "Salah. Mereka menyertai Persekutuan sebagai negeri-negeri, bukan sebagai negara bersekutu yang bebas sepenuhnya.",
          d: "Salah. Sabah dan Sarawak membentuk negeri mereka sendiri dalam Persekutuan dan tidak diserapkan ke negeri lain.",
        },
      },
    },
    {
      id: "sej1-q24",
      text: "Meskipun wujud pelbagai wacana 'Bangsa Idaman', yang manakah konsep yang secara konsisten menjadi teras hegemoni politik dan pentadbiran Malaysia?",
      options: [
        {
          id: "a",
          text: "Negara Islam (Daulah Islamiah) yang diperjuangkan oleh kelompok agama.",
        },
        {
          id: "b",
          text: "Melayu Raya yang digagaskan oleh golongan kiri sebelum merdeka.",
        },
        {
          id: "c",
          text: "Masyarakat majmuk pimpinan Melayu (Malay-led plural society).",
        },
        {
          id: "d",
          text: "Malaysian Malaysia yang memperjuangkan kesamarataan mutlak.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota menegaskan bahawa konsep 'Malay-led plural society' diterima British, dikekalkan selepas merdeka, dan terus diangkat oleh parti-parti politik utama Melayu sehingga ke hari ini sebagai model pentadbiran.",
        incorrect: {
          a: "Salah. Ini adalah aspirasi sesetengah kelompok tetapi bukan konsep dominan yang membentuk struktur pentadbiran negara secara rasmi.",
          b: "Salah. Ini adalah idea golongan kiri Melayu pra-kemerdekaan yang tidak pernah menjadi dasar rasmi negara.",
          d: "Salah. Walaupun konsep ini sentiasa menjadi wacana alternatif yang kuat, ia bukanlah konsep dominan yang diamalkan secara konsisten oleh kerajaan pemerintah.",
        },
      },
    },
    {
      id: "sej1-q25",
      text: "Mengapakah Malaysia, dalam sesetengah wacana, dirujuk sebagai sebuah 'negara tanpa bangsa' (state without nation)?",
      options: [
        {
          id: "a",
          text: "Kerana Malaysia tidak mempunyai perlembagaan yang diiktiraf di peringkat antarabangsa.",
        },
        {
          id: "b",
          text: "Kerana kedaulatan wilayah Malaysia sering dicabar oleh kuasa-kuasa besar dunia.",
        },
        {
          id: "c",
          text: "Kerana satu 'Bangsa Malaysia' yang sepunya masih belum terbentuk sepenuhnya di kalangan rakyat.",
        },
        {
          id: "d",
          text: "Kerana negara ditadbir tanpa sistem kerajaan yang jelas dan teratur sejak merdeka.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota menjelaskan senario ini berlaku apabila 'wujudnya sesebuah negara yang diperakui kedaulatannya, tetapi tidak jelas dari segi identiti bangsa yang dibina,' dan merujuknya kepada konteks Malaysia di mana 'Satu Bangsa Malaysia masih belum terbina'.",
        incorrect: {
          a: "Salah. Malaysia mempunyai Perlembagaan Persekutuan yang menjadi undang-undang tertinggi negara dan diiktiraf.",
          b: "Salah. Malaysia adalah sebuah negara berdaulat yang diiktiraf di peringkat antarabangsa, walaupun cabaran kedaulatan adalah isu berbeza.",
          d: "Salah. Malaysia mempunyai sistem Kerajaan Persekutuan yang berfungsi sejak kemerdekaan.",
        },
      },
    },
    {
      id: "sej1-q26",
      text: "Antara berikut, yang manakah BUKAN ciri sebuah negara bangsa settler?",
      options: [
        {
          id: "a",
          text: "Komuniti migran menguasai ekonomi dan politik negara.",
        },
        {
          id: "b",
          text: "Anak watan asal sering dipinggirkan atau diletakkan di tanah rizab.",
        },
        {
          id: "c",
          text: "Hegemoni politik anak watan diiktiraf dan diterima sebagai teras negara.",
        },
        {
          id: "d",
          text: "Kedudukan anak watan tidak diperakui sebagai asas pembentukan hegemoni negara.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Pengiktirafan hegemoni politik anak watan adalah ciri utama 'negara bangsa tamu,' bukan 'negara bangsa settler'.",
        incorrect: {
          a: "Salah. Ini adalah ciri utama negara bangsa settler di mana komuniti migran menjadi dominan.",
          b: "Salah. Ini adalah nasib yang sering menimpa anak watan di negara bangsa settler.",
          d: "Salah. Ini adalah ciri negara bangsa settler di mana hegemoni politik digantikan oleh kumpulan etnik migran yang dominan.",
        },
      },
    },
    {
      id: "sej1-q27",
      text: "Manakah antara pasangan negara berikut yang digolongkan sebagai 'negara bangsa settler'?",
      options: [
        { id: "a", text: "Malaysia dan Thailand" },
        { id: "b", text: "Amerika Syarikat dan Kanada" },
        { id: "c", text: "China dan Jepun" },
        { id: "d", text: "Indonesia dan Brunei" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota secara spesifik menyenaraikan Amerika Syarikat, Kanada, Australia, dan New Zealand sebagai contoh negara bangsa settler, di mana komuniti migran mendominasi dan meminggirkan anak watan.",
        incorrect: {
          a: "Salah. Malaysia dan Thailand dikategorikan sebagai negara bangsa tamu.",
          c: "Salah. China dan Jepun adalah contoh negara bangsa tamu atau negara bangsa yang lebih homogen.",
          d: "Salah. Indonesia dan Brunei dikategorikan sebagai negara bangsa tamu.",
        },
      },
    },
    {
      id: "sej1-q28",
      text: "Apakah maksud 'kewarganegaraan' dari sudut perundangan dan politik?",
      options: [
        {
          id: "a",
          text: "Hak untuk menetap di sesebuah negara tanpa sebarang ikatan undang-undang.",
        },
        {
          id: "b",
          text: "Identiti budaya yang dikongsi bersama oleh sesebuah kumpulan etnik.",
        },
        {
          id: "c",
          text: "Satu kedudukan sah yang mengikat individu dengan negaranya, memberikan hak dan tanggungjawab.",
        },
        {
          id: "d",
          text: "Status sosial yang hanya diberikan kepada golongan bangsawan atau kerabat diraja.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota menyatakan bahawa 'kewarganegaraan adalah suatu bentuk kerakyatan atau kedudukan sah yang mengikat seseorang individu dengan negaranya', yang merangkumi hak dan perlindungan.",
        incorrect: {
          a: "Salah. Kewarganegaraan adalah satu ikatan sah dan formal, bukan sekadar hak menetap tanpa syarat.",
          b: "Salah. Ini lebih merujuk kepada konsep etnisiti, manakala kewarganegaraan adalah status perundangan.",
          d: "Salah. Kewarganegaraan dalam negara moden adalah hak bagi rakyat, bukan eksklusif untuk golongan tertentu.",
        },
      },
    },
    {
      id: "sej1-q29",
      text: "Apakah peranan utama Perkara 153 Perlembagaan Persekutuan dalam konteks hubungan kaum di Malaysia?",
      options: [
        {
          id: "a",
          text: "Memberi hak kerakyatan kepada semua komuniti migran secara automatik.",
        },
        {
          id: "b",
          text: "Menjamin kedudukan istimewa orang Melayu dan Bumiputera sambil melindungi kepentingan sah kaum lain.",
        },
        {
          id: "c",
          text: "Menjadikan Bahasa Inggeris sebagai bahasa rasmi kedua Persekutuan Malaysia.",
        },
        {
          id: "d",
          text: "Memansuhkan sistem Raja Berperlembagaan dan menubuhkan sebuah republik.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Perkara 153 adalah mengenai perizaban kuota berkenaan perkhidmatan, permit, dan sebagainya untuk orang Melayu dan Bumiputera Sabah & Sarawak. Ia juga mengandungi klausa di mana YDPA bertanggungjawab melindungi kepentingan sah komuniti lain.",
        incorrect: {
          a: "Salah. Pemberian kerakyatan diuruskan di bawah peruntukan lain dalam Perlembagaan, bukan Perkara 153.",
          c: "Salah. Perkara 152 Perlembagaan adalah mengenai Bahasa Kebangsaan (Bahasa Melayu).",
          d: "Salah. Perkara 153 wujud dalam kerangka sistem Raja Berperlembagaan dan tidak bertujuan memansuhkannya.",
        },
      },
    },
    {
      id: "sej1-q30",
      text: "Menurut Etzioni (2009), 'etos bangsa' merujuk kepada...",
      options: [
        {
          id: "a",
          text: "Kekuatan ketenteraan dan penguasaan teknologi sesebuah bangsa.",
        },
        {
          id: "b",
          text: "Sistem perundangan formal dan peraturan yang mengawal masyarakat.",
        },
        {
          id: "c",
          text: "Nilai-nilai khas, tradisi, identiti, dan wawasan masa depan sesebuah bangsa.",
        },
        {
          id: "d",
          text: "Tahap pembangunan ekonomi dan pendapatan per kapita rakyat sesebuah negara.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota memetik takrifan Etzioni bahawa etos bangsa merujuk kepada 'nilai-nilai khas, tradisi, identiti dan wawasan masa depan (atau takdir) sesebuah bangsa'. Ia adalah 'semangat' atau 'watak' kolektif.",
        incorrect: {
          a: "Salah. Ini adalah aspek kuasa material, manakala etos lebih bersifat nilai dan identiti yang tidak ketara.",
          b: "Salah. Undang-undang bersifat formal dan dikuatkuasakan, manakala etos adalah semangat atau sentimen yang dikongsi bersama secara tidak formal.",
          d: "Salah. Ini adalah penunjuk ekonomi, bukan etos bangsa yang bersifat sosio-budaya.",
        },
      },
    },
    {
      id: "sej1-q31",
      text: "Manakah antara berikut merupakan ciri-ciri 'Budaya Politik Baru' yang lahir dari kerencaman sosial di Malaysia?\nI. Tuntutan terhadap kebebasan bersuara dan akses maklumat.\nII. Peningkatan kesedaran mengenai isu tadbir urus baik dan integriti.\nIII. Hubungan sosial politik yang lebih horizontal dan rentas etnik.\nIV. Pengukuhan sistem politik feudal dan ketaatan mutlak kepada pemimpin.",
      options: [
        { id: "a", text: "I dan II sahaja" },
        { id: "b", text: "I, II, dan III sahaja" },
        { id: "c", text: "II, III, dan IV sahaja" },
        { id: "d", text: "Semua di atas" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota menyenaraikan 'Kebebasan Bersuara, Akses Maklumat', nilai seperti 'Amanah-Integriti' dan 'Tadbir Urus Baik', serta 'hubungan sosial rentas etnik' sebagai impak kerencaman sosial.",
        incorrect: {
          a: "Salah. Terdapat ciri lain yang relevan iaitu hubungan horizontal.",
          c: "Salah. Sistem feudal dan ketaatan mutlak adalah ciri pra-moden yang bertentangan dengan budaya politik baru.",
          d: "Salah. Elemen IV adalah tidak benar.",
        },
      },
    },
    {
      id: "sej1-q32",
      text: "Kepelbagaian kaum di Tanah Melayu mula terbentuk secara signifikan pada zaman...",
      options: [
        {
          id: "a",
          text: "Zaman Pra-Sejarah di mana hanya wujud masyarakat pribumi yang homogen.",
        },
        {
          id: "b",
          text: "Zaman Proto-Sejarah dengan kewujudan kerajaan awal seperti Gangga Negara.",
        },
        {
          id: "c",
          text: "Zaman Kesultanan Melayu Melaka yang menjadi pusat perdagangan antarabangsa.",
        },
        {
          id: "d",
          text: "Zaman penjajahan British melalui kemasukan buruh secara besar-besaran.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota menyatakan bahawa pada zaman Kesultanan Melayu Melaka, 'Bermula pembentukan masyarakat kepelbagaian - perdagangan'. Walaupun penjajahan British mengukuhkannya, permulaan signifikannya adalah di era Melaka.",
        incorrect: {
          a: "Salah. Pada zaman ini, masyarakatnya agak homogen.",
          b: "Salah. Walaupun sudah ada hubungan dengan dunia luar, pembentukan masyarakat majmuk belum signifikan.",
          d: "Salah. Ini adalah fasa pengukuhan, tetapi permulaan masyarakat kepelbagaian telah berlaku lebih awal di zaman Melaka.",
        },
      },
    },
    {
      id: "sej1-q33",
      text: "Apakah faktor pemangkin utama yang membolehkan berlakunya 'interaksi dan jaringan peradaban merentasi benua' pada era globalisasi?",
      options: [
        {
          id: "a",
          text: "Penaklukan ketenteraan dan imperialisme kuasa besar.",
        },
        {
          id: "b",
          text: "Perkembangan teknologi maklumat seperti internet dan media sosial.",
        },
        {
          id: "c",
          text: "Perjanjian perkongsian budaya yang ditandatangani antara negara-negara.",
        },
        {
          id: "d",
          text: "Aktiviti mubaligh agama secara besar-besaran di seluruh dunia.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota menekankan bahawa era globalisasi atau 'dunia tanpa sempadan' dimungkinkan oleh 'Perkembangan teknologi maklumat dan informasi – Internet, Komputer, SmartPhone' dan 'Penggunaan media sosial yang berleluasa'.",
        incorrect: {
          a: "Salah. Ini adalah ciri era kolonialisme, bukan globalisasi digital moden.",
          c: "Salah. Interaksi globalisasi berlaku secara organik dan tidak formal, melangkaui perjanjian rasmi antara kerajaan.",
          d: "Salah. Walaupun ini berlaku, ia bukan faktor pemangkin utama yang mencirikan era globalisasi moden seperti teknologi digital.",
        },
      },
    },
    {
      id: "sej1-q34",
      text: "Apakah kesimpulan yang boleh dibuat mengenai proses evolusi masyarakat di Malaysia dari zaman pra-penjajah hingga kini?",
      options: [
        {
          id: "a",
          text: "Masyarakat Malaysia sentiasa bersifat statik dan tidak mengalami perubahan struktur sosial.",
        },
        {
          id: "b",
          text: "Ia beralih dari peradaban majmuk, kepada masyarakat majmuk kolonial, dan kini ke arah masyarakat kepelbagaian.",
        },
        {
          id: "c",
          text: "Ia bermula sebagai masyarakat majmuk dan kini telah kembali menjadi sebuah peradaban yang homogen.",
        },
        {
          id: "d",
          text: "Proses pembentukannya hanya dipengaruhi oleh penjajahan British dan mengabaikan pengaruh peradaban lain.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "slide kesimpulan merumuskan evolusi ini: 'Pra Penjajah - Peradaban majmuk → Penjajahan - Masyarakat Majmuk → Pasca Kolonial... Masyarakat Kepelbagaian'. Ini menunjukkan satu proses transformasi yang dinamik.",
        incorrect: {
          a: "Salah. Nota menunjukkan satu proses transformasi sosial yang sangat dinamik merentasi zaman.",
          c: "Salah. Masyarakat Malaysia menjadi semakin rencam dan pelbagai (heterogen), bukan homogen.",
          d: "Salah. Pembentukannya adalah hasil gabungan pelbagai lapisan peradaban (Pribumi, Asia, Barat, Global), bukan hanya British.",
        },
      },
    },
    {
      id: "sej1-q35",
      text: "Apakah teras kepada 'Peradaban Acuan Malaysia' seperti yang dirumuskan dalam nota?",
      options: [
        {
          id: "a",
          text: "Gabungan peradaban pribumi dan Islam dengan pengaruh peradaban luar serta etika sivik.",
        },
        {
          id: "b",
          text: "Asimilasi sepenuhnya semua budaya kepada satu budaya dominan tunggal tanpa kompromi.",
        },
        {
          id: "c",
          text: "Pengasingan setiap kumpulan etnik untuk mengekalkan ketulenan budaya masing-masing.",
        },
        {
          id: "d",
          text: "Penerimaan sepenuhnya peradaban global dan penolakan total terhadap unsur-unsur tradisi.",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Rumusan akhir nota menggambarkan Peradaban Acuan Malaysia sebagai gabungan 'Pribumi Melayu + peradaban Asia, timur Tengah & Barat' yang melibatkan 'Melayu, Sabah, Sarawak dan Islam' serta 'Etnik-etnik lain,' dan diikat oleh etika sivik dan tadbir urus yang baik.",
        incorrect: {
          b: "Salah. Konsep yang digunakan adalah integrasi dalam kepelbagaian, bukan asimilasi penuh.",
          c: "Salah. Ini adalah konsep segregasi, yang bertentangan dengan idea peradaban acuan Malaysia yang berinteraksi.",
          d: "Salah. Peradaban acuan Malaysia mengintegrasikan unsur global sambil mengekalkan teras pribumi dan tradisi.",
        },
      },
    },
    {
      id: "sej1-q36",
      text: "Antara berikut, manakah BUKAN sebahagian daripada idea 'Bangsa Idaman' yang pernah atau sedang diwacanakan di Malaysia?",
      options: [
        { id: "a", text: "Gagasan 1 Malaysia" },
        { id: "b", text: "Sabah for Sabahan" },
        { id: "c", text: "Malayan Union" },
        { id: "d", text: "Melayu Raya" },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Malayan Union 1946 adalah satu bentuk pentadbiran kolonial yang diperkenalkan oleh British dan ditentang hebat. Ia bukanlah satu konsep 'Bangsa Idaman' yang lahir dari wacana masyarakat tempatan, berbanding pilihan yang lain.",
        incorrect: {
          a: "Salah. Gagasan 1 Malaysia disenaraikan sebagai salah satu konsep yang wujud selepas merdeka.",
          b: "Salah. Konsep 'Sabah for Sabahan' juga disebut sebagai salah satu idea yang wujud di Borneo.",
          d: "Salah. Konsep Melayu Raya digagaskan oleh pergerakan Kiri Melayu dan disenaraikan sebagai salah satu 'Bangsa Idaman' pra-kemerdekaan.",
        },
      },
    },
    {
      id: "sej1-q37",
      text: "Apakah perubahan sosio-ekonomi paling signifikan yang berlaku pada tahun 1980-90an yang membentuk masyarakat Malaysia moden?",
      options: [
        {
          id: "a",
          text: "Kemunculan isu kemiskinan dan ketidaksamarataan yang melampau.",
        },
        {
          id: "b",
          text: "Proses perbandaran dan pembentukan kelas menengah secara besar-besaran.",
        },
        {
          id: "c",
          text: "Tumpuan kepada pembangunan, perindustrian, dan penghijrahan desa-kota.",
        },
        {
          id: "d",
          text: "Permulaan era globalisasi digital dan ledakan penggunaan media sosial.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota meletakkan '1980-90-an Pembangunan, Industri & Penghijrahan' sebagai fasa penting dalam transformasi sosial negara yang memacu urbanisasi.",
        incorrect: {
          a: "Salah. Ini adalah ciri utama era 1970-an, yang mendorong kepada perlaksanaan Dasar Ekonomi Baru.",
          b: "Salah. Proses ini menjadi lebih ketara dan matang pada tahun 2000-an, hasil daripada pembangunan era sebelumnya.",
          d: "Salah. Ini adalah ciri utama era pasca-2000.",
        },
      },
    },
    {
      id: "sej1-q38",
      text: "Manakah antara berikut merupakan padanan yang TEPAT antara sarjana dan konsep yang mereka perkenalkan atau hujah utama mereka?",
      options: [
        {
          id: "a",
          text: "Max Weber → Negara adalah produk daripada konflik kelas ekonomi.",
        },
        {
          id: "b",
          text: "Benedict Anderson → ‘Nation of Intent’ (Bangsa Niat).",
        },
        {
          id: "c",
          text: "Shamsul A.B. → ‘Imagined Political Community’ (Komuniti Politik Bayangan).",
        },
        {
          id: "d",
          text: "Abdul Rahman Embong → Di Malaysia, negara lahir dahulu sebelum bangsa.",
        },
      ],
      correctOptionId: "d",
      explanation: {
        correct:
          "Ini adalah pandangan utama Abdul Rahman Embong yang dipetik dalam nota, yang menyatakan bahawa apa yang lahir pada tahun 1957 ialah sebuah negara, manakala pembinaan bangsa adalah proses yang menyusul.",
        incorrect: {
          a: "Salah. Konsep negara sebagai produk konflik kelas diperkenalkan oleh Karl Marx. Weber memperkenalkan konsep monopoli penggunaan kekerasan yang sah.",
          b: "Salah. ‘Nation of Intent’ adalah konsep oleh Shamsul A.B. Anderson memperkenalkan ‘Imagined Political Community’.",
          c: "Salah. ‘Imagined Political Community’ adalah konsep oleh Benedict Anderson. Shamsul A.B. memperkenalkan ‘Nation of Intent’.",
        },
      },
    },
    {
      id: "sej1-q39",
      text: "Yang manakah antara berikut BUKAN sebahagian daripada 'Tapak Integrasi' yang mengikat kaum minoriti dalam Perlembagaan Persekutuan?\nI. Yang di-Pertuan Agong sebagai simbol perpaduan negara.\nII. Islam adalah agama rasmi tetapi agama lain bebas diamalkan.\nIII. Bahasa Melayu adalah bahasa kebangsaan tetapi bahasa ibunda lain boleh dipelajari.\nIV. Hak istimewa orang Melayu dan Bumiputera di bawah Perkara 153.",
      options: [
        { id: "a", text: "I dan II sahaja" },
        { id: "b", text: "IV sahaja" },
        { id: "c", text: "III dan IV sahaja" },
        { id: "d", text: "Tiada yang di atas" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Hak istimewa orang Melayu (Perkara 153) dikategorikan sebagai 'PASAK Perlembagaan,' bukan 'TAPAK INTEGRASI.' Tapak Integrasi merujuk kepada jaminan perlindungan kepentingan kaum lain oleh YDPA (yang juga terkandung dalam Perkara 153), tetapi peruntukan hak istimewa itu sendiri adalah Pasak.",
        incorrect: {
          a: "Salah. Elemen I dan II adalah sebahagian daripada Tapak Integrasi yang menjamin keharmonian.",
          c: "Salah. Elemen III adalah sebahagian daripada Tapak Integrasi, manakala elemen IV adalah Pasak.",
          d: "Salah. Elemen IV secara spesifiknya adalah Pasak, bukan Tapak Integrasi.",
        },
      },
    },
    {
      id: "sej1-q40",
      text: "Berdasarkan keseluruhan nota, apakah cabaran fundamental dalam usaha membina peradaban beridentitikan Malaysia?",
      options: [
        {
          id: "a",
          text: "Kekurangan sumber asli untuk membiayai projek pembangunan negara.",
        },
        {
          id: "b",
          text: "Ancaman ketenteraan daripada kuasa-kuasa besar dunia secara berterusan.",
        },
        {
          id: "c",
          text: "Kewujudan pelbagai 'Bangsa Idaman' yang bersaing dan proses pembinaan bangsa yang belum selesai.",
        },
        {
          id: "d",
          text: "Kegagalan negara untuk menyesuaikan diri dengan kemajuan peradaban globalisasi.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota berulang kali menekankan bahawa 'Usaha membina peradaban beridentitikan Malaysia sangat mencabar' kerana wujudnya pelbagai 'Bangsa Idaman' yang bersaing (contestation) dan hakikat bahawa pembinaan bangsa adalah satu 'work in progress'.",
        incorrect: {
          a: "Salah. Nota tidak membincangkan isu kekurangan sumber asli sebagai cabaran utama dalam konteks pembinaan peradaban.",
          b: "Salah. Walaupun geopolitik adalah satu faktor, cabaran dalaman (pembinaan bangsa) lebih ditekankan dalam nota ini.",
          d: "Salah. Nota menunjukkan Malaysia telah terkesan dan menjadi sebahagian daripada peradaban globalisasi, bukan gagal menyesuaikan diri.",
        },
      },
    },
  ],
};
