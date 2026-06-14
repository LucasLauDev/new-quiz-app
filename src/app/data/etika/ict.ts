import { Quiz } from "@/app/types/quiz";

export const pengaruhIct: Quiz = {
  id: "pengaruh-ict",
  categoryId: "etika",
  subcategoryId: "topik-7",
  title: "Pengaruh ICT",
  questions: [
    {
      id: "ict-q1",
      text: "Berdasarkan matlamat dalam Rukun Negara 1970, apakah aspirasi negara yang berkaitan secara langsung dengan teknologi?",
      options: [
        {
          id: "a",
          text: "Membina sebuah masyarakat liberal yang mengamalkan kebebasan bersuara tanpa had.",
        },
        {
          id: "b",
          text: "Membina sebuah masyarakat progresif yang akan menggunakan sains dan teknologi moden.",
        },
        {
          id: "c",
          text: "Mencipta satu masyarakat yang adil di mana kemakmuran negara dikongsi tanpa mengira penguasaan teknologi.",
        },
        {
          id: "d",
          text: "Memelihara satu cara hidup demokratik di mana penggunaan teknologi dikawal sepenuhnya oleh kerajaan.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "slide dengan jelas menyatakan bahawa salah satu objektif dalam Bahagian Pertama Rukun Negara adalah untuk 'Membina sebuah masyarakat progresif yang akan menggunakan sains dan teknologi moden'.",
        incorrect: {
          a: "Walaupun membina sikap liberal adalah sebahagian daripada matlamat, ia tidak berkaitan secara langsung dengan penggunaan teknologi moden.",
          c: "Aspirasi utamanya adalah penggunaan teknologi untuk kemajuan, bukan pengabaiannya dalam pengagihan kemakmuran.",
          d: "Walaupun memelihara cara hidup demokratik adalah matlamat, tiada kenyataan yang menyebut bahawa teknologi perlu dikawal sepenuhnya oleh kerajaan.",
        },
      },
    },
    {
      id: "ict-q2",
      text: "Siapakah tokoh yang dirujuk sebagai individu yang memulakan idea untuk menghubungkan Malaysia dengan dunia menerusi Internet pada tahun 1983?",
      options: [
        { id: "a", text: "Tun Dr. Mahathir Mohamad" },
        { id: "b", text: "Dr. Mohamed Awang-Lah" },
        { id: "c", text: "Prof. Ulung Datuk Dr. Shamsul Amri Baharuddin" },
        { id: "d", text: "Prof. Dr. Mansor Mohd Noor" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "slide menyatakan dengan jelas bahawa pada tahun 1983, Dr. Mohamed Awang-Lah memulakan idea ini di makmal Universiti Malaya.",
        incorrect: {
          a: "Tun Dr. Mahathir Mohamad dikenali sebagai penggerak utama Koridor Raya Multimedia (MSC), tetapi idea awal internet bermula lebih awal.",
          c: "Beliau adalah Pengerusi Jawatankuasa Pembangunan Modul ini, bukan perintis internet Malaysia.",
          d: "Beliau juga adalah ahli Jawatankuasa Pembangunan Modul ini, bukan individu yang memulakan idea internet.",
        },
      },
    },
    {
      id: "ict-q3",
      text: "Rangkaian Komputer Malaysia (RangKoM) telah ditubuhkan pada tahun…",
      options: [
        { id: "a", text: "1983" },
        { id: "b", text: "1989" },
        { id: "c", text: "1991" },
        { id: "d", text: "1996" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "slide menyatakan bahawa Rangkaian Komputer Malaysia (RangKoM) ditubuhkan pada tahun 1989.",
        incorrect: {
          a: "Tahun 1983 adalah tahun Dr. Mohamed Awang-Lah memulakan idea untuk menghubungkan Malaysia dengan internet.",
          c: "Tahun 1991 adalah tahun pelancaran JARING (Joint Advanced Integrated Networking).",
          d: "Tahun 1996 adalah tahun pelancaran Koridor Raya Multimedia (MSC).",
        },
      },
    },
    {
      id: "ict-q4",
      text: "Apakah nama rangkaian yang dilancarkan pada tahun 1991 dan menjadi gerbang internet komersial pertama di Malaysia?",
      options: [
        { id: "a", text: "RangKoM" },
        { id: "b", text: "SuperJARING" },
        { id: "c", text: "JARING" },
        { id: "d", text: "MSC" },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "slide menyatakan bahawa JARING (Joint Advanced Integrated Networking) dilancarkan pada tahun 1991 dan merupakan penyedia perkhidmatan internet (ISP) pertama di Malaysia.",
        incorrect: {
          a: "RangKoM ditubuhkan pada tahun 1989 dan merupakan pelopor kepada JARING.",
          b: "SuperJARING adalah nama untuk infrastruktur rangkaian berkelajuan tinggi oleh JARING, bukan nama rangkaian asal.",
          d: "MSC (Multimedia Super Corridor) adalah inisiatif kerajaan yang dilancarkan pada tahun 1996, bukan nama rangkaian internet.",
        },
      },
    },
    {
      id: "ict-q5",
      text: "ICT seringkali dilihat sebagai “alat”. Apakah fungsi ICT sebagai “alat” dalam kehidupan manusia?\nI. Mempercepatkan urusan manusia\nII. Menjadi beban hidup akibat tuntutan kerja 24/7\nIII. Memudahkan dan meringankan beban kerja\nIV. Menghubungkan sesiapa sahaja, di mana sahaja, pada setiap masa",
      options: [
        { id: "a", text: "I, II dan III sahaja" },
        { id: "b", text: "I, III dan IV sahaja" },
        { id: "c", text: "II, III dan IV sahaja" },
        { id: "d", text: "Semua di atas" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "slide secara spesifik menyenaraikan fungsi ICT sebagai alat yang mempercepatkan urusan (I), meringankan beban kerja (III), dan menghubungkan manusia (IV).",
        incorrect: {
          a: "Pernyataan II merujuk kepada ICT sebagai 'BEBAN', bukan 'ALAT' yang membantu.",
          c: "Pernyataan II adalah ciri negatif ICT, bukan fungsinya sebagai alat yang positif.",
          d: "Pilihan ini tidak tepat kerana Pernyataan II salah.",
        },
      },
    },
    {
      id: "ict-q6",
      text: "Istilah “technostress” merujuk kepada…",
      options: [
        {
          id: "a",
          text: "Ketakutan atau kebimbangan terhadap penggunaan teknologi baharu.",
        },
        {
          id: "b",
          text: "Tekanan atau stres yang dihadapi akibat penggunaan teknologi yang meluas, seperti tuntutan kerja 24 jam.",
        },
        {
          id: "c",
          text: "Perbuatan mengganggu atau mengancam orang lain menggunakan platform digital.",
        },
        {
          id: "d",
          text: "Ketagihan melampau terhadap permainan video dan media sosial.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "slide secara khusus menggunakan istilah Technostress untuk merujuk kepada beban hidup kerana tuntutan kerja 24 jam, 7 hari seminggu yang dimungkinkan oleh ICT.",
        incorrect: {
          a: "Ini adalah definisi bagi Technophobia.",
          c: "Ini adalah definisi bagi buli siber.",
          d: "Ini merujuk kepada ketagihan digital, satu lagi isu lain yang berkaitan dengan ICT.",
        },
      },
    },
    {
      id: "ict-q7",
      text: "Apakah yang dimaksudkan dengan istilah 'Technophobia'?",
      options: [
        {
          id: "a",
          text: "Stres yang dialami akibat penggunaan teknologi secara berlebihan.",
        },
        {
          id: "b",
          text: "Ketakutan atau kebimbangan terhadap penggunaan teknologi baharu.",
        },
        {
          id: "c",
          text: "Kebimbangan mengenai data peribadi diintip oleh media sosial.",
        },
        {
          id: "d",
          text: "Keletihan mental akibat menerima terlalu banyak maklumat digital.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "slide meletakkan istilah Technophobia di sebelah huraian tentang ICT menjadi 'beban kerja kepada orang yang tidak menguasai teknologi baharu', menunjukkan ia berkaitan dengan ketakutan atau kesukaran menyesuaikan diri dengan teknologi.",
        incorrect: {
          a: "Ini adalah definisi bagi Technostress.",
          c: "Ini adalah isu privasi yang berkaitan dengan social listening tools.",
          d: "Ini merujuk kepada information overload, satu lagi bentuk technostress.",
        },
      },
    },
    {
      id: "ict-q8",
      text: "Frasa 'ICT tingkat kemahiran berfikir' muncul pada salah satu imej dalam slide. Bagaimanakah ICT boleh meningkatkan kemahiran berfikir?",
      options: [
        {
          id: "a",
          text: "Dengan menyediakan hiburan tanpa had yang merehatkan minda.",
        },
        {
          id: "b",
          text: "Dengan menyediakan akses pantas kepada maklumat untuk penyelidikan dan penyelesaian masalah.",
        },
        {
          id: "c",
          text: "Dengan mengautomasikan semua tugas, jadi manusia tidak perlu berfikir lagi.",
        },
        {
          id: "d",
          text: "Dengan mengehadkan sumber maklumat kepada yang telah diluluskan sahaja.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Konteks 'ICT tingkat kemahiran berfikir' merujuk kepada bagaimana ICT menjadi alat untuk mengakses data, menganalisis maklumat, dan membuat keputusan yang lebih termaklum.",
        incorrect: {
          a: "Hiburan yang berlebihan boleh mengurangkan fokus dan pemikiran kritis.",
          c: "ICT adalah alat untuk membantu pemikiran, bukan menggantikannya sepenuhnya.",
          d: "Mengehadkan sumber maklumat akan menyekat pemikiran kritis, bukan meningkatkannya.",
        },
      },
    },
    {
      id: "ict-q9",
      text: "Apakah persoalan yang ditimbulkan berkaitan dengan Revolusi Industri 4.0 (IR4.0) dalam slide?",
      options: [
        {
          id: "a",
          text: "Sama ada ia akan membebankan sistem kewangan negara.",
        },
        {
          id: "b",
          text: "Sama ada ia menakutkan atau menjadi warna kehidupan baharu masyarakat.",
        },
        {
          id: "c",
          text: "Sama ada ia akan menghapuskan semua pekerjaan tradisional.",
        },
        {
          id: "d",
          text: "Sama ada ia hanya akan memberi manfaat kepada negara maju.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "slide secara spesifik bertanya, 'IR4.0 - menakutkan kita atau warna kehidupan baharu masyarakat?'.",
        incorrect: {
          a: "slide tidak membincangkan isu kewangan negara berkaitan IR4.0.",
          c: "Walaupun IR4.0 memberi kesan kepada pekerjaan, soalan dalam slide adalah lebih umum tentang penerimaan masyarakat.",
          d: "Persoalan ini tidak ditimbulkan dalam slide yang dibentangkan.",
        },
      },
    },
    {
      id: "ict-q10",
      text: "Menurut slide, apakah peraturan pertama etika siber yang perlu diingat oleh pengguna?",
      options: [
        { id: "a", text: "Hormati masa orang lain." },
        { id: "b", text: "Ketahui di mana anda berada di dunia siber." },
        { id: "c", text: "Ingat komunikasi sesama manusia." },
        {
          id: "d",
          text: "Ikuti piawai kelakuan online seperti dalam kehidupan sebenar.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "slide menyenaraikan 'Peraturan 1: Ingat komunikasi sesama manusia'.",
        incorrect: {
          a: "Ini adalah Peraturan 4 yang disenaraikan.",
          b: "Ini adalah Peraturan 3.",
          d: "Ini adalah Peraturan 2.",
        },
      },
    },
    {
      id: "ict-q11",
      text: "Etika asas dalam dunia siber ialah mengikut piawai kelakuan yang sama seperti dalam dunia nyata. Apakah contoh amalan ini?",
      options: [
        {
          id: "a",
          text: "Menyamar dengan identiti palsu untuk mengelirukan orang lain.",
        },
        {
          id: "b",
          text: "Menggunakan bahasa yang sopan dan tidak menghina orang lain dalam forum.",
        },
        {
          id: "c",
          text: "Berkongsi semua maklumat peribadi orang lain tanpa kebenaran.",
        },
        {
          id: "d",
          text: "Menganggap semua interaksi dalam talian sebagai tidak serius.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Menggunakan bahasa yang sopan adalah piawai kelakuan yang diterima dalam dunia nyata dan perlu diaplikasikan dalam dunia siber.",
        incorrect: {
          a: "Penyamaran adalah satu bentuk penipuan dan tidak beretika.",
          c: "Ini melanggar privasi dan merupakan perbuatan yang salah.",
          d: "Interaksi dalam talian mempunyai kesan yang nyata dan perlu dianggap serius.",
        },
      },
    },
    {
      id: "ict-q12",
      text: "'Hormati masa orang lain' adalah salah satu peraturan etika digital. Manakah antara tindakan berikut yang melanggar peraturan ini?",
      options: [
        { id: "a", text: "Menghantar e-mel yang ringkas dan padat." },
        {
          id: "b",
          text: "Menghantar mesej berulang kali tanpa tujuan penting (spamming).",
        },
        {
          id: "c",
          text: "Memberi masa yang cukup untuk seseorang membalas mesej.",
        },
        {
          id: "d",
          text: "Memastikan maklumat yang dikongsi dalam kumpulan adalah relevan.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Spamming atau menghantar mesej sampah membazirkan masa dan perhatian penerima, sekali gus menunjukkan sikap tidak hormat terhadap masa mereka.",
        incorrect: {
          a: "Ini adalah contoh menghormati masa orang lain.",
          c: "Ini menunjukkan kesabaran dan hormat terhadap kesibukan orang lain.",
          d: "Ini membantu ahli kumpulan fokus pada perbincangan dan tidak membazirkan masa.",
        },
      },
    },
    {
      id: "ict-q13",
      text: "Apakah yang dimaksudkan dengan peraturan 'Ketahui di mana anda berada di dunia siber'?",
      options: [
        {
          id: "a",
          text: "Memastikan fungsi GPS pada telefon sentiasa diaktifkan.",
        },
        {
          id: "b",
          text: "Menyedari bahawa setiap platform dalam talian mempunyai norma dan budaya yang berbeza.",
        },
        {
          id: "c",
          text: "Hanya melayari laman web yang berasal dari Malaysia.",
        },
        {
          id: "d",
          text: "Sentiasa log keluar akaun selepas menggunakannya di tempat awam.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Peraturan ini bermaksud pengguna perlu memahami konteks di mana mereka berkomunikasi—contohnya, etika dalam kumpulan WhatsApp keluarga berbeza daripada forum profesional.",
        incorrect: {
          a: "Ini adalah amalan teknikal, bukan peraturan etika yang berkaitan dengan kesedaran sosial.",
          c: "Ini adalah satu bentuk sekatan kendiri yang tidak realistik.",
          d: "Ini adalah langkah keselamatan siber, bukan interpretasi bagi peraturan etika ini.",
        },
      },
    },
    {
      id: "ict-q14",
      text: "Antara berikut, yang manakah tergolong sebagai amalan baik dalam kewarganegaraan digital?\nI. Tidak melakukan spam mesej\nII. Menghormati masa orang lain\nIII. Menyebarkan maklumat yang belum disahkan\nIV. Menggunakan bahasa yang sopan dan berhemah",
      options: [
        { id: "a", text: "I, II dan IV sahaja" },
        { id: "b", text: "I, III dan IV sahaja" },
        { id: "c", text: "II dan III sahaja" },
        { id: "d", text: "Semua di atas" },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Tidak melakukan spam, menghormati masa, dan menggunakan bahasa sopan adalah teras etika dan amalan baik dalam komunikasi digital.",
        incorrect: {
          b: "Pernyataan III (menyebarkan maklumat tidak sahih) adalah punca kepada berita palsu dan merupakan amalan yang tidak beretika.",
          c: "Pernyataan III adalah amalan buruk.",
          d: "Pilihan ini tidak betul kerana Pernyataan III salah.",
        },
      },
    },
    {
      id: "ict-q15",
      text: "Bagaimanakah ICT boleh berfungsi sebagai tapak untuk mengukuhkan kesepaduan nasional?",
      options: [
        {
          id: "a",
          text: "Dengan menyekat semua perbincangan mengenai isu-isu sensitif.",
        },
        {
          id: "b",
          text: "Dengan menggalakkan penggunaan bahasa dan cara komunikasi yang menyantuni etnik berbeza.",
        },
        {
          id: "c",
          text: "Dengan mewujudkan kumpulan media sosial eksklusif untuk satu kaum sahaja.",
        },
        {
          id: "d",
          text: "Dengan membenarkan penyebaran maklumat tanpa sebarang tapisan.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "slide 'Keibubapaan Siber' menyenaraikan 'Cara menyantuni etnik berbeza' sebagai salah satu adab yang perlu dipupuk untuk kesepaduan sosial melalui ICT.",
        incorrect: {
          a: "Menyekat perbincangan boleh menyebabkan rasa tidak puas hati, bukan kesepaduan.",
          c: "Ini akan mewujudkan pengasingan dan mengukuhkan sentimen perkauman.",
          d: "Ini akan membawa kepada penyebaran berita palsu dan ucapan kebencian.",
        },
      },
    },
    {
      id: "ict-q16",
      text: "Inovasi yang dibangunkan oleh penyelidik Universiti Malaysia Pahang (UMP) untuk memupuk perpaduan etnik dan patriotisme dikenali sebagai:",
      options: [
        { id: "a", text: "KITA" },
        { id: "b", text: "JARING" },
        { id: "c", text: "RangKoM" },
        { id: "d", text: "ADAM" },
      ],
      correctOptionId: "d",
      explanation: {
        correct:
          "Artikel berita dalam slide membincangkan inovasi produk 'dikenali ADAM untuk membantu mengukuhkan perpaduan antara etnik, patriotisme dan nilai jati diri'.",
        incorrect: {
          a: "KITA (Institut Kajian Etnik) adalah institut di UKM yang membangunkan modul ini.",
          b: "JARING adalah rangkaian internet pertama Malaysia.",
          c: "RangKoM adalah Rangkaian Komputer Malaysia yang ditubuhkan pada tahun 1989.",
        },
      },
    },
    {
      id: "ict-q17",
      text: "Apakah maksud singkatan ADAM, iaitu nama produk inovasi UMP tersebut?",
      options: [
        { id: "a", text: "Aplikasi Digital Anak Malaysia" },
        { id: "b", text: "Autentik, Dinamik, Altruistik dan Manusia" },
        { id: "c", text: "Analisis Data dan Maklumat" },
        { id: "d", text: "Agenda Digital Aspirasi Mahasiswa" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Artikel berita dalam slide menyatakan, 'Munira berkata, ADAM adalah singkatan kepada Autentik, Dinamik, Altruistik dan Manusia'.",
        incorrect: {
          a: "Ini adalah tafsiran yang logik tetapi tidak tepat berdasarkan sumber.",
          c: "Ini adalah istilah umum dalam bidang data sains dan tiada kaitan dengan projek ADAM.",
          d: "Ini adalah rekaan yang plausible tetapi tidak disokong oleh artikel yang diberikan.",
        },
      },
    },
    {
      id: "ict-q18",
      text: "Apakah peranan utama ICT dalam pembangunan negara menurut modul ini?",
      options: [
        { id: "a", text: "Sebagai alat untuk hiburan semata-mata." },
        { id: "b", text: "Menggantikan sepenuhnya budaya tradisional." },
        {
          id: "c",
          text: "Sebagai sebahagian proses tadbir urus dan pembangunan negara.",
        },
        {
          id: "d",
          text: "Untuk memastikan semua rakyat menjadi pengguna media sosial.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "slide menyatakan bahawa masyarakat perlu dilatih menggunakan teknologi 'sebagai sebahagian proses tadbir urus dan pembangunan negara'.",
        incorrect: {
          a: "Walaupun ICT menyediakan hiburan, peranannya dalam pembangunan negara adalah lebih luas.",
          b: "ICT wujud bersama budaya, ia mungkin mengubahnya tetapi bukan menggantikannya sepenuhnya.",
          d: "Menjadi pengguna media sosial bukanlah matlamat pembangunan negara.",
        },
      },
    },
    {
      id: "ict-q19",
      text: "Kesepaduan nasional melalui ICT boleh dipupuk dengan…\nI. Cara menasihati dengan sopan di platform digital\nII. Cara berkongsi maklumat secara bijak dan bertanggungjawab\nIII. Cara menonjolkan diri dengan menyebarkan fitnah\nIV. Cara menghormati perbezaan pendapat dalam perdebatan",
      options: [
        { id: "a", text: "I, II dan IV sahaja" },
        { id: "b", text: "I, III dan IV sahaja" },
        { id: "c", text: "II dan III sahaja" },
        { id: "d", text: "Semua di atas" },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Menasihati dengan sopan, berkongsi secara bijak, dan menghormati perbezaan pendapat adalah cara-cara positif untuk menggunakan ICT bagi memupuk perpaduan.",
        incorrect: {
          b: "Pernyataan III (menyebarkan fitnah) adalah tindakan yang merosakkan perpaduan.",
          c: "Pernyataan III adalah salah.",
          d: "Pilihan ini tidak betul kerana Pernyataan III.",
        },
      },
    },
    {
      id: "ict-q20",
      text: "Menurut kajian yang dipetik oleh Internet Society, apakah faktor utama yang menyebabkan 'Fake News' tersebar dengan pantas?",
      options: [
        { id: "a", text: "Penggunaan bot automatik yang canggih." },
        { id: "b", text: "Kelemahan algoritma media sosial." },
        { id: "c", text: "Tindakan manusia sebenar yang menyebarkannya." },
        { id: "d", text: "Kekurangan undang-undang siber yang tegas." },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Artikel tersebut menyatakan, 'Fake news spreads much faster than real news, and real people – not bots – are to blame, according to a recent study'.",
        incorrect: {
          a: "Tajuk artikel dalam slide dengan jelas menyatakan 'Fake News Spreads Fast, But Don’t Blame the Bots'.",
          b: "Walaupun algoritma memainkan peranan, kajian tersebut secara spesifik menuding kepada peranan manusia.",
          d: "Walaupun undang-undang penting, kajian ini memfokuskan kepada mekanisme penyebaran berita itu sendiri.",
        },
      },
    },
    {
      id: "ict-q21",
      text: "Apakah yang dimaksudkan dengan teknologi 'Deepfake'?",
      options: [
        {
          id: "a",
          text: "Teknologi untuk mengesan berita palsu menggunakan kecerdasan buatan.",
        },
        {
          id: "b",
          text: "Teknologi untuk mewujudkan audio dan video palsu yang sangat meyakinkan.",
        },
        {
          id: "c",
          text: "Satu bentuk perisian hasad yang mencuri data peribadi secara senyap.",
        },
        {
          id: "d",
          text: "Satu platform media sosial yang direka untuk perbincangan mendalam.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "slide menerangkan Deepfake sebagai kemajuan dalam kecerdasan buatan yang boleh mencipta audio dan video palsu yang meyakinkan, menjadikan 'seeing is no longer believing'.",
        incorrect: {
          a: "Ini adalah fungsi teknologi lain; Deepfake adalah tentang penciptaan, bukan pengesanan.",
          c: "Ini merujuk kepada perisian hasad seperti spyware atau malware.",
          d: "Deepfake adalah teknologi media sintetik, bukan platform media sosial.",
        },
      },
    },
    {
      id: "ict-q22",
      text: "Apakah tujuan utama 'Social Listening Tools' seperti yang dibincangkan dalam slide?",
      options: [
        {
          id: "a",
          text: "Alat yang digunakan oleh kerajaan untuk mendengar perbualan telefon rakyat.",
        },
        {
          id: "b",
          text: "Perisian yang digunakan oleh jenama untuk menjejaki perbualan pelanggan di media sosial.",
        },
        {
          id: "c",
          text: "Aplikasi yang membantu individu bermasalah pendengaran berkomunikasi.",
        },
        {
          id: "d",
          text: "Teknologi yang membolehkan penceramah menganalisis reaksi audiens.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "slide menunjukkan artikel yang menjelaskan 'As more brands turn to social media for customer insights, social listening tools are gaining momentum'.",
        incorrect: {
          a: "Konteksnya adalah media sosial untuk tujuan komersial, bukan pengawasan panggilan telefon.",
          c: "Ini adalah teknologi bantuan, bukan alat pemantauan media sosial.",
          d: "Ini adalah teknologi analisis audiens, manakala social listening berfokus pada platform dalam talian.",
        },
      },
    },
    {
      id: "ict-q23",
      text: "Antara berikut, yang manakah BUKAN kesan negatif atau 'beban' ICT yang dibincangkan dalam slide?",
      options: [
        { id: "a", text: "Menjadi mangsa penipuan kewangan (scam)." },
        { id: "b", text: "Terdedah kepada ucapan kebencian (hate speech)." },
        { id: "c", text: "Memupuk kesepaduan digital (digital cohesion)." },
        { id: "d", text: "Mengalami tekanan kerja 24/7 (technostress)." },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Kesepaduan digital atau digital cohesion adalah matlamat positif yang ingin dicapai melalui penggunaan ICT yang beretika, bukan kesan negatif.",
        incorrect: {
          a: "Menjadi mangsa scam adalah salah satu beban hidup baharu yang disenaraikan.",
          b: "Hate speech juga disebut sebagai salah satu beban hidup baharu.",
          d: "Technostress akibat tuntutan kerja berterusan adalah salah satu beban utama ICT.",
        },
      },
    },
    {
      id: "ict-q24",
      text: "Istilah 'digital jungle' digunakan dalam sinopsis untuk menggambarkan keadaan ICT. Apakah maksud yang paling tepat bagi istilah ini?",
      options: [
        {
          id: "a",
          text: "Perkembangan ICT yang sangat subur dan berkembang pesat.",
        },
        {
          id: "b",
          text: "Perkembangan ICT yang tidak dikawal oleh mana-mana institusi sejagat, menjadikannya liar dan berpotensi bahaya.",
        },
        {
          id: "c",
          text: "Penggunaan ICT yang memerlukan pengguna meneroka pelbagai aplikasi.",
        },
        {
          id: "d",
          text: "ICT sebagai satu bidang yang dipenuhi dengan peluang ekonomi.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Sinopsis menyatakan bahawa 'tiada satu institusi sejagat yang mengawal perkembangan ini, menjadikannya seperti digital jungle', yang bermaksud ia boleh menjadi kawan atau lawan.",
        incorrect: {
          a: "Walaupun ICT berkembang pesat, konteks 'jungle' di sini merujuk kepada ketiadaan undang-undang atau kawalan.",
          c: "Istilah ini bukan merujuk kepada pengalaman pengguna, tetapi kepada ekosistem ICT secara keseluruhannya.",
          d: "Istilah ini digunakan dalam konteks negatif, merujuk kepada bahaya, bukan peluang semata-mata.",
        },
      },
    },
    {
      id: "ict-q25",
      text: "Apakah kesimpulan utama tentang ICT menurut modul yang dibentangkan?",
      options: [
        {
          id: "a",
          text: "ICT perlu dielakkan penggunaannya untuk mengurangkan risiko.",
        },
        {
          id: "b",
          text: "ICT hanyalah sebuah alat untuk hiburan dan tidak memberi kesan besar.",
        },
        {
          id: "c",
          text: "ICT perlu dipelajari, dikuasai, dan dimanfaatkan dengan penuh etika.",
        },
        {
          id: "d",
          text: "ICT akan menyebabkan semua pekerjaan diambil alih oleh robot.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Ini adalah rumusan tepat daripada slide kesimpulan yang menyatakan ICT perlu dipelajari dan diurus dengan penuh etika untuk meneraju peradaban manusia.",
        incorrect: {
          a: "Kesimpulan slide adalah ICT perlu 'dipelajari, dikuasai dan dimanfaatkan', bukan dielakkan.",
          b: "Kesimpulan menekankan bahawa ICT adalah 'realiti kehidupan masa kini' dan ejen penting.",
          d: "Walaupun automasi adalah satu isu, ini bukanlah kesimpulan utama modul ini.",
        },
      },
    },
    {
      id: "ict-q26",
      text: "Gambar yang menunjukkan aplikasi seperti Lazada dan laman web Bank Islam digunakan untuk menggambarkan bahawa ICT kini adalah sebahagian daripada cara kita...",
      options: [
        { id: "a", text: "Menjalankan aktiviti riadah dan sosial." },
        { id: "b", text: "Menguruskan urusan kewangan dan jual beli." },
        { id: "c", text: "Mendapatkan rawatan kesihatan secara maya." },
        { id: "d", text: "Mengakses perkhidmatan kerajaan dalam talian." },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "slide yang memaparkan imej-imej ini mempunyai tajuk 'menguruskan urusan kewangan dan jual beli kita'.",
        incorrect: {
          a: "Imej spesifik ini merujuk kepada e-dagang dan perbankan, bukan riadah.",
          c: "Ini merujuk kepada telemedicine, yang tidak digambarkan oleh imej Lazada dan Bank Islam.",
          d: "Ini merujuk kepada e-kerajaan, yang juga bukan fokus utama imej-imej tersebut.",
        },
      },
    },
    {
      id: "ict-q27",
      text: "Apakah mesej utama yang cuba disampaikan melalui imej bertajuk 'When seeing is no longer believing'?",
      options: [
        {
          id: "a",
          text: "Orang ramai tidak lagi mempercayai berita di media tradisional.",
        },
        {
          id: "b",
          text: "Teknologi deepfake mencabar keupayaan kita untuk mempercayai bukti video atau audio secara mutlak.",
        },
        {
          id: "c",
          text: "Kualiti kamera pada telefon pintar semakin menurun.",
        },
        {
          id: "d",
          text: "Masyarakat lebih mempercayai maklumat yang didengar berbanding yang dilihat.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Frasa ini secara langsung merujuk kepada kesan teknologi deepfake, di mana video dan audio yang kelihatan tulen boleh dicipta, sekali gus mencabar persepsi kita terhadap realiti.",
        incorrect: {
          a: "Konteksnya lebih spesifik kepada teknologi media sintetik, bukan media tradisional.",
          c: "Ini adalah tafsiran literal yang salah; teknologi kamera semakin maju.",
          d: "Mesej ini adalah tentang ketidakpercayaan terhadap bukti visual akibat manipulasi teknologi.",
        },
      },
    },
    {
      id: "ict-q28",
      text: "Apakah tiga daripada '9 Elements of Digital Citizenship' yang dipaparkan dalam slide?",
      options: [
        { id: "a", text: "Digital Access, Digital Commerce, Digital Law" },
        { id: "b", text: "Digital Speed, Digital Storage, Digital Graphics" },
        {
          id: "c",
          text: "Digital Marketing, Digital Branding, Digital Profit",
        },
        {
          id: "d",
          text: "Digital Hardware, Digital Software, Digital Network",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Rajah dalam slide 19 PDF menunjukkan elemen-elemen seperti Digital Access, Digital Commerce, dan Digital Law sebagai sebahagian daripada 9 Elemen Kewarganegaraan Digital.",
        incorrect: {
          b: "Ini adalah istilah teknikal berkaitan prestasi komputer.",
          c: "Ini adalah istilah berkaitan perniagaan dalam talian.",
          d: "Ini adalah komponen asas sistem ICT.",
        },
      },
    },
    {
      id: "ict-q29",
      text: "Antara berikut, yang manakah contoh salah guna ICT?",
      options: [
        { id: "a", text: "Menjalankan perniagaan e-dagang yang sah." },
        {
          id: "b",
          text: "Menggunakan aplikasi untuk pembelajaran dalam talian.",
        },
        {
          id: "c",
          text: "Menyebarkan propaganda politik yang bersifat fitnah.",
        },
        {
          id: "d",
          text: "Membina jaringan sosial yang sihat dan profesional.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "slide kesimpulan menyatakan bahawa ICT sering 'disalah guna untuk kepentingan... politik', dan propaganda fitnah adalah contoh jelas.",
        incorrect: {
          a: "E-dagang yang sah adalah manfaat ICT.",
          b: "Pembelajaran dalam talian adalah penggunaan ICT yang positif.",
          d: "Membina jaringan sosial yang sihat adalah penggunaan ICT yang positif.",
        },
      },
    },
    {
      id: "ict-q30",
      text: "Penggunaan ICT tanpa kawalan etika boleh menyebabkan…",
      options: [
        { id: "a", text: "Perpaduan masyarakat menjadi semakin kukuh." },
        { id: "b", text: "Penularan berita palsu dan ucapan kebencian." },
        {
          id: "c",
          text: "Peningkatan penggunaan bahasa yang sopan dalam talian.",
        },
        { id: "d", text: "Perkongsian maklumat yang bermanfaat sahaja." },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "slide secara konsisten memberi amaran tentang bahaya berita palsu (fake news) dan ucapan kebencian (hate speech) sebagai akibat penggunaan ICT tanpa etika.",
        incorrect: {
          a: "Tanpa kawalan, ICT lebih cenderung memecahbelahkan masyarakat.",
          c: "Tanpa etika, bahasa yang digunakan lebih cenderung menjadi kasar.",
          d: "Tanpa kawalan, maklumat berbahaya lebih mudah tersebar.",
        },
      },
    },
    {
      id: "ict-q31",
      text: "Apakah antara cabaran utama dalam hubungan manusia dan ICT yang digambarkan melalui imej seorang lelaki tertekan di hadapan komputer riba?",
      options: [
        { id: "a", text: "Kos peranti ICT yang semakin mahal." },
        {
          id: "b",
          text: "Kesukaran mendapatkan sambungan internet yang stabil.",
        },
        { id: "c", text: "Beban kerja yang melampau dan technostress." },
        { id: "d", text: "Ancaman penggodam dan perisian hasad." },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Imej tersebut diletakkan di bawah tajuk 'ICT juga dilihat sebagai BEBAN...' dan bersebelahan dengan penerangan tentang Technostress.",
        incorrect: {
          a: "Imej tersebut tidak menggambarkan masalah kos, tetapi tekanan mental.",
          b: "Imej itu menunjukkan interaksi dengan pelbagai tugas, bukan masalah sambungan.",
          d: "Imej itu menggambarkan tekanan psikologi, bukan ancaman keselamatan siber secara teknikal.",
        },
      },
    },
    {
      id: "ict-q32",
      text: "ICT dianggap sebagai 'kawan' apabila ia...",
      options: [
        { id: "a", text: "Menyebabkan ketagihan media sosial." },
        {
          id: "b",
          text: "Membantu komunikasi dan mempercepatkan urusan manusia.",
        },
        { id: "c", text: "Meningkatkan penyebaran berita palsu." },
        { id: "d", text: "Menjadi platform untuk buli siber." },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "slide menerangkan bahawa ICT sebagai 'alat' boleh mempercepatkan urusan dan menjadikan komunikasi lebih efisien, menjadikannya 'kawan' kepada manusia.",
        incorrect: {
          a: "Ini adalah kesan negatif atau sisi 'lawan' ICT.",
          c: "Ini adalah contoh ICT sebagai 'lawan'.",
          d: "Ini adalah penyalahgunaan ICT dan menjadikannya 'lawan'.",
        },
      },
    },
    {
      id: "ict-q33",
      text: "Antara berikut, yang manakah contoh aplikasi ICT moden yang disebut dalam slide?",
      options: [
        { id: "a", text: "Kecerdasan Buatan (AI) & Internet Benda (IoT)." },
        { id: "b", text: "Mesin taip manual dan telegraf." },
        { id: "c", text: "Surat pos tradisional dan telefon awam." },
        { id: "d", text: "Radio analog dan televisyen hitam putih." },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "slide secara khusus memaparkan imej dengan tajuk 'AI & IoT' sebagai contoh evolusi teknologi terkini.",
        incorrect: {
          b: "Ini adalah teknologi komunikasi lama.",
          c: "Ini adalah kaedah komunikasi tradisional.",
          d: "Ini adalah teknologi penyiaran lama.",
        },
      },
    },
    {
      id: "ict-q34",
      text: "Berdasarkan kronologi sejarah ICT di Malaysia, susun peristiwa berikut mengikut urutan yang betul.\nI. Pelancaran JARING\nII. Penubuhan RangKoM\nIII. Pengisytiharan Rukun Negara yang bermatlamat masyarakat progresif\nIV. Idea awal internet oleh Dr. Mohamed Awang-Lah",
      options: [
        { id: "a", text: "III, IV, II, I" },
        { id: "b", text: "IV, III, II, I" },
        { id: "c", text: "III, II, IV, I" },
        { id: "d", text: "IV, II, I, III" },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Urutan yang betul adalah: 1. Rukun Negara (1970). 2. Idea awal internet (1983). 3. Penubuhan RangKoM (1989). 4. Pelancaran JARING (1991).",
        incorrect: {
          b: "Rukun Negara (III) mendahului idea awal internet (IV).",
          c: "Idea awal internet (IV) berlaku sebelum RangKoM (II).",
          d: "Rukun Negara (III) adalah peristiwa paling awal dalam senarai ini.",
        },
      },
    },
    {
      id: "ict-q35",
      text: "Apakah persoalan utama yang ditimbulkan berkaitan dengan Kecerdasan Buatan (AI) dalam slide terakhir?",
      options: [
        {
          id: "a",
          text: "Bagaimanakah AI boleh digunakan untuk mengautomasikan kerja-kerja di kilang?",
        },
        {
          id: "b",
          text: "Apakah jenama telefon pintar yang mempunyai teknologi AI terbaik?",
        },
        {
          id: "c",
          text: "Apakah rupa masyarakat kita apabila AI berada di mana-mana dan apakah status robot pada masa hadapan?",
        },
        {
          id: "d",
          text: "Berapakah kos untuk membangunkan sebuah robot yang mempunyai kesedaran kendiri?",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Imej dalam slide terakhir secara jelas bertanya 'WHAT WILL OUR SOCIETY LOOK LIKE WHEN ARTIFICIAL INTELLIGENCE IS EVERYWHERE?' dan diikuti dengan soalan-soalan seperti 'Will robots become self-aware? Will they have rights?'.",
        incorrect: {
          a: "Ini adalah soalan teknikal, bukan soalan falsafah dan sosial yang ditimbulkan.",
          b: "Ini adalah soalan komersial, bukan perbincangan mendalam tentang impak sosial AI.",
          d: "Ini adalah soalan kewangan dan teknikal, bukan persoalan etika dan peradaban.",
        },
      },
    },
    {
      id: "ict-q36",
      text: "Antara isu semasa ICT di Malaysia ialah…\nI. Berita palsu (Fake news)\nII. Deep fake\nIII. Alat pendengaran sosial (Social listening tools)\nIV. Kekurangan talian telefon awam",
      options: [
        { id: "a", text: "I, II dan III sahaja" },
        { id: "b", text: "I, III dan IV sahaja" },
        { id: "c", text: "II dan IV sahaja" },
        { id: "d", text: "Semua di atas" },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Ketiga-tiga isu iaitu Fake News, Deep Fake, dan Social Listening Tools dibincangkan secara khusus dalam slide sebagai isu semasa ICT.",
        incorrect: {
          b: "Kekurangan talian telefon awam (IV) bukan lagi isu ICT semasa yang relevan.",
          c: "Pilihan ini tidak lengkap dan memasukkan isu yang tidak relevan (IV).",
          d: "Kerana pernyataan IV salah, pilihan ini tidak tepat.",
        },
      },
    },
    {
      id: "ict-q37",
      text: "Dalam konteks kesepaduan nasional, mengapakah isu seperti 'Fake News' dan 'Hate Speech' sangat berbahaya?",
      options: [
        {
          id: "a",
          text: "Kerana ia boleh melambatkan kelajuan internet di seluruh negara.",
        },
        {
          id: "b",
          text: "Kerana ia boleh menyebabkan kerugian kepada syarikat e-dagang.",
        },
        {
          id: "c",
          text: "Kerana ia boleh menimbulkan salah faham, permusuhan antara kaum, dan menggugat kestabilan sosial.",
        },
        {
          id: "d",
          text: "Kerana ia boleh menyebabkan nilai mata wang negara jatuh.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Berita palsu dan ucapan kebencian, terutamanya yang menyentuh sentimen perkauman, boleh memecahbelahkan perpaduan, selari dengan kebimbangan yang dinyatakan dalam sinopsis.",
        incorrect: {
          a: "Isu-isu ini berkaitan dengan kandungan dan impak sosial, bukan infrastruktur teknikal.",
          b: "Kesan utamanya adalah kepada keharmonian masyarakat, bukan ekonomi e-dagang secara langsung.",
          d: "Impak kepada nilai mata wang adalah terlalu jauh dan tidak langsung.",
        },
      },
    },
    {
      id: "ict-q38",
      text: "Antara berikut, manakah padanan yang BETUL antara tahun dan peristiwa sejarah ICT Malaysia?",
      options: [
        { id: "a", text: "1970 - Pelancaran JARING" },
        { id: "b", text: "1983 - Penubuhan RangKoM" },
        {
          id: "c",
          text: "1989 - Rangkaian Komputer Malaysia (RangKoM) ditubuhkan",
        },
        { id: "d", text: "1991 - Koridor Raya Multimedia (MSC) dilancarkan" },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "slide menyatakan dengan jelas bahawa RangKoM ditubuhkan pada tahun 1989.",
        incorrect: {
          a: "1970 adalah tahun Rukun Negara; JARING dilancarkan pada 1991.",
          b: "1983 adalah tahun idea awal internet; RangKoM ditubuhkan pada 1989.",
          d: "1991 adalah tahun pelancaran JARING; MSC dilancarkan pada 1996.",
        },
      },
    },
    {
      id: "ict-q39",
      text: "Apakah yang ditekankan sebagai disiplin dan adab dalam 'Keibubapaan Siber'?\nI. Cara bertutur dan berkongsi\nII. Cara menasihati dan berdebat\nIII. Cara menyantuni etnik berbeza\nIV. Cara mengurus privasi diri",
      options: [
        { id: "a", text: "I dan II sahaja" },
        { id: "b", text: "III dan IV sahaja" },
        { id: "c", text: "I, II dan III sahaja" },
        { id: "d", text: "Semua di atas" },
      ],
      correctOptionId: "d",
      explanation: {
        correct:
          "Semua perkara (I, II, III, dan IV) disenaraikan dalam slide 'Keibubapaan Siber' sebagai adab yang perlu dipupuk dalam penggunaan ICT untuk kesepaduan sosial.",
        incorrect: {
          a: "Pilihan ini tidak lengkap kerana III dan IV juga disenaraikan.",
          b: "Pilihan ini juga tidak lengkap.",
          c: "Pernyataan IV juga merupakan adab penting yang disenaraikan.",
        },
      },
    },
    {
      id: "ict-q40",
      text: "slide pertama menunjukkan frasa 'Are you ready for DIGITAL COHESION?'. Apakah mesej yang ingin disampaikan?",
      options: [
        {
          id: "a",
          text: "Gesaan untuk membeli peranti digital yang terbaharu.",
        },
        {
          id: "b",
          text: "Amaran tentang bahaya ketagihan digital yang menular.",
        },
        {
          id: "c",
          text: "Cabaran kepada masyarakat untuk bersedia menggunakan ICT secara positif bagi mengukuhkan perpaduan.",
        },
        {
          id: "d",
          text: "Pengumuman tentang satu dasar baharu kerajaan berkaitan ICT.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Frasa ini bertujuan untuk membuat penonton berfikir tentang peranan mereka dalam menggunakan teknologi untuk kebaikan sosial dan perpaduan, yang merupakan tema utama topik ini.",
        incorrect: {
          a: "Mesejnya bukan bersifat komersial.",
          b: "Frasa 'digital cohesion' merujuk kepada aspek positif dan perpaduan, bukan ketagihan.",
          d: "Ia bukan pengumuman rasmi, tetapi tajuk yang merangsang pemikiran untuk sebuah topik akademik.",
        },
      },
    },
  ],
};
