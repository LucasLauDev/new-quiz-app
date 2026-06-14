import { Quiz } from "@/app/types/quiz";

export const ideologi: Quiz = {
  id: "falsafah-topik-7",
  categoryId: "falsafah",
  subcategoryId: "topik-7",
  title: "Topik 7 - Ideologi",
  questions: [
    {
      id: "ideology-q1",
      text: "Apakah maksud asas ideologi menurut definisi yang dipetik daripada Ensiklopedia Britannica dalam nota?",
      options: [
        {
          id: "a",
          text: "Satu teori ekonomi yang mengawal selia kekayaan dan sumber negara.",
        },
        {
          id: "b",
          text: "Satu set prinsip yang hanya berkaitan dengan falsafah politik dan pemerintahan.",
        },
        {
          id: "c",
          text: "Pengetahuan tentang gagasan, idea, *science of ideas*, atau ajaran tentang pengertian dasar.",
        },
        {
          id: "d",
          text: "Pandangan hidup sesebuah masyarakat yang tidak mempunyai kaitan dengan faktor sejarah atau geografi.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Pilihan ini secara tepat merumuskan definisi harfiah dan konseptual ideologi seperti yang dinyatakan dalam nota, iaitu 'pengetahuan tentang gagasan, idea, science of ideas atau ajaran tentang pengertian dasar'.",
        incorrect: {
          a: "Pilihan ini terlalu sempit. Walaupun ekonomi adalah sebahagian daripada skop ideologi, ia bukan satu-satunya komponen.",
          b: "Ideologi merangkumi skop yang lebih luas daripada politik semata-mata, termasuk sosial, ekonomi, dan sejarah.",
          d: "Nota secara jelas menyatakan bahawa ideologi bersangkut paut dengan 'sejarah dan sosio-geografi manusia'.",
        },
      },
    },
    {
      id: "ideology-q2",
      text: "Berdasarkan garis masa pemikiran yang dibentangkan, apakah aliran utama yang lahir selepas zaman Medieval dan sebelum zaman Pascamoden?",
      options: [
        { id: "a", text: "Romantisisme" },
        { id: "b", text: "Modenisme" },
        { id: "c", text: "Eksistensialisme" },
        { id: "d", text: "Relativisme" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Garis masa dalam nota menunjukkan urutan: Medieval (agama), diikuti oleh Moden (modenisme, sekularisme), dan kemudian Pascamoden (relativisme).",
        incorrect: {
          a: "Romantisisme adalah gerakan seni dan sastera yang berlaku dalam era Moden, tetapi bukan aliran utama yang mentakrifkan keseluruhan era falsafah itu.",
          c: "Eksistensialisme, walaupun disebut dalam konteks pascamoden, muncul lewat dalam era Moden dan tidak mentakrifkan keseluruhan peralihan dari Medieval.",
          d: "Relativisme adalah ciri utama yang dikaitkan dengan zaman Pascamoden, bukan zaman yang mendahuluinya.",
        },
      },
    },
    {
      id: "ideology-q3",
      text: "Siapakah tokoh utama dari Jerman yang dikaitkan dengan permulaan Gerakan Enlightenment, yang menjadi asas kepada Modenisme?",
      options: [
        { id: "a", text: "John Locke" },
        { id: "b", text: "David Hume" },
        { id: "c", text: "Immanuel Kant" },
        { id: "d", text: "Karl Popper" },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota secara spesifik menyebut 'Immanuel Kant di Jerman' sebagai tokoh utama Gerakan Enlightenment.",
        incorrect: {
          a: "John Locke adalah tokoh utama Gerakan Enlightenment di Britain, bukan Jerman.",
          b: "David Hume adalah tokoh utama Gerakan Enlightenment di Britain, bukan Jerman.",
          d: "Karl Popper adalah ahli falsafah abad ke-20 yang meneruskan aliran modenisme, bukan tokoh permulaan pada abad ke-18.",
        },
      },
    },
    {
      id: "ideology-q4",
      text: "Apakah penekanan utama aliran pemikiran Modenisme?",
      options: [
        {
          id: "a",
          text: "Penerimaan kebenaran yang relatif berdasarkan emosi dan intuisi.",
        },
        {
          id: "b",
          text: "Penolakan total terhadap kaedah saintifik sebagai sumber pengetahuan.",
        },
        {
          id: "c",
          text: "Kepentingan akal fikiran yang rasional dalam menentukan kebenaran.",
        },
        {
          id: "d",
          text: "Kebergantungan kepada dogma agama sebagai penentu utama nilai masyarakat.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Teras utama Modenisme ialah 'menekankan kepentingan akal fikiran yang rasional di dalam menentukan kebenaran'.",
        incorrect: {
          a: "Penekanan kepada emosi dan kebenaran relatif adalah ciri Pascamodenisme.",
          b: "Modenisme sangat 'mengagungkan akan kejayaan sains dan kaedah saintifik / empirikal'.",
          d: "Modenisme muncul sebagai reaksi yang 'meninggalkan ciri-ciri lama seperti yang terdapat dalam masyarakat Medieval yang berteraskan kepada keagamaan'.",
        },
      },
    },
    {
      id: "ideology-q5",
      text: "Apakah ciri utama pemikiran Pascamodenisme yang membezakannya daripada Modenisme?",
      options: [
        {
          id: "a",
          text: "Penekanan kepada objektiviti mutlak dalam semua bidang ilmu.",
        },
        {
          id: "b",
          text: "Penolakan terhadap *logocentrism*, rasionaliti, dan kaedah saintifik sebagai satu-satunya sumber kebenaran.",
        },
        {
          id: "c",
          text: "Pengagungan terhadap naratif besar (*grand narratives*) mengenai kemajuan peradaban manusia.",
        },
        {
          id: "d",
          text: "Kepercayaan bahawa nilai dan budaya bersifat universal dan terpakai untuk semua masyarakat.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota menyatakan dengan jelas bahawa Pascamodenisme 'menentang logocentrism, rasionaliti, objektiviti dan kaedah saintifik' yang menjadi teras Modenisme.",
        incorrect: {
          a: "Ini adalah ciri Modenisme. Pascamodenisme sebaliknya menekankan subjektiviti.",
          c: "Pascamodenisme menolak 'naratif besar' dan lebih memihak kepada 'naratif kecil' yang bersifat individu dan peribadi.",
          d: "Universalisme adalah ciri Modenisme, manakala Pascamodenisme meraikan kepelbagaian sub-budaya dan menolak keseragaman.",
        },
      },
    },
    {
      id: "ideology-q6",
      text: "Apakah maksud konsep 'relativisme' yang menjadi teras dalam pemikiran Pascamodenisme?",
      options: [
        {
          id: "a",
          text: "Kepercayaan bahawa hanya terdapat satu pandangan yang benar dan ia boleh dicapai melalui sains.",
        },
        {
          id: "b",
          text: "Pendirian bahawa kebenaran adalah sesuatu yang mutlak, objektif, dan tidak berubah.",
        },
        {
          id: "c",
          text: "Anggapan bahawa kebenaran boleh dilihat dari pelbagai sudut pandangan dan tiada satu pun yang bersifat mutlak.",
        },
        {
          id: "d",
          text: "Teori yang menyatakan bahawa sains adalah satu-satunya sumber pengetahuan yang sah mengenai alam.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota mentakrifkan relativisme sebagai teori yang 'menganggap KEBENARAN itu boleh dilihat dari pelbagai sudut' dan menolak kebenaran objektif.",
        incorrect: {
          a: "Pilihan ini menggambarkan pendirian positivisme saintifik yang merupakan sebahagian daripada Modenisme, yang ditentang oleh Pascamodenisme.",
          b: "Ini adalah konsep 'absolutisme,' yang merupakan antitesis atau lawan kepada relativisme.",
          d: "Pilihan ini juga menggambarkan pendirian positivisme saintifik yang merupakan sebahagian daripada Modenisme.",
        },
      },
    },
    {
      id: "ideology-q7",
      text: "Antara berikut, manakah merupakan implikasi dan cabaran relativisme pascamoden dalam kehidupan semasa?\n\nI. Perkembangan gaya hidup hedonisme dan narsisisme.\nII. Penafian terhadap hakikat insan yang bersifat universal.\nIII. Kemunculan fenomena politik pasca-kebenaran (*post-truth politics*).\nIV. Pengukuhan konsensus budaya tradisional dalam masyarakat.",
      options: [
        { id: "a", text: "I dan II sahaja" },
        { id: "b", text: "I, II dan III sahaja" },
        { id: "c", text: "II, III dan IV sahaja" },
        { id: "d", text: "Semua di atas" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Pilihan I, II, dan III adalah manifestasi Pascamodenisme yang disenaraikan dalam nota: Hedonisme & Narsisisme (Etika), Penafian Hakikat Insan (Psikologi/Sosiologi), dan Politik Pasca-Kebenaran (Politik).",
        incorrect: {
          a: "Pilihan ini tidak lengkap kerana III juga merupakan implikasi penting.",
          c: "Pilihan ini salah kerana IV (budaya tradisional) adalah ciri yang ditentang oleh Pascamodenisme.",
          d: "Pilihan ini salah kerana IV tidak termasuk.",
        },
      },
    },
    {
      id: "ideology-q8",
      text: "Siapakah tokoh yang menyumbang kepada pemikiran Pascamoden dengan mengemukakan idea bahawa pertukaran teori dalam sains (*paradigm shift*) tidak semata-mata rasional tetapi dipengaruhi faktor psikologi & sosiologi?",
      options: [
        { id: "a", text: "Jacques Derrida" },
        { id: "b", text: "Thomas Kuhn" },
        { id: "c", text: "Michel Foucault" },
        { id: "d", text: "Albert Camus" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota secara spesifik mengaitkan Thomas Kuhn dengan pandangan bahawa pertukaran teori dalam sains dipengaruhi oleh faktor psikologi dan sosiologi, yang mencabar pandangan rasionalis Modenisme.",
        incorrect: {
          a: "Jacques Derrida terkenal dengan konsep dekonstruksi.",
          c: "Michel Foucault mengkaji hubungan antara ilmu dan kuasa.",
          d: "Albert Camus adalah seorang ahli falsafah eksistensialis.",
        },
      },
    },
    {
      id: "ideology-q9",
      text: "Apakah yang dimaksudkan dengan fahaman 'Sosial Konstruktivisme' yang dikaitkan dengan Pascamodenisme?",
      options: [
        {
          id: "a",
          text: "Ilmu adalah cerminan hakikat alam yang bersifat mutlak dan objektif.",
        },
        {
          id: "b",
          text: "Ilmu adalah suatu konstruk atau binaan yang dikaitkan dengan kepentingan masyarakat.",
        },
        {
          id: "c",
          text: "Ilmu hanya boleh dicapai oleh individu secara terasing tanpa pengaruh masyarakat.",
        },
        {
          id: "d",
          text: "Ilmu sains adalah bebas daripada sebarang pengaruh sosial, politik, atau budaya.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota menerangkan bahawa golongan sosial konstruktivis berfahaman bahawa 'ilmu adalah suatu konstruk yang dikaitkan dengan kepentingan masyarakat dalam pembinaan ilmu sains itu'.",
        incorrect: {
          a: "Ini adalah pandangan realisme atau objektivisme yang ditentang oleh sosial konstruktivisme.",
          c: "Fahaman ini menekankan peranan 'sosial' (masyarakat) dalam pembinaan ilmu.",
          d: "Contoh Ludwik Fleck dalam nota menunjukkan sebaliknya, iaitu istilah perubatan pun dipengaruhi oleh konstruk sosial.",
        },
      },
    },
    {
      id: "ideology-q10",
      text: "'Dekonstruksi,' sebuah kaedah analisis yang berpengaruh dalam Pascamodenisme, dikaitkan dengan tokoh...",
      options: [
        { id: "a", text: "Jacques Derrida" },
        { id: "b", text: "Immanuel Kant" },
        { id: "c", text: "David Hume" },
        { id: "d", text: "John Locke" },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Nota secara jelas menyatakan 'Deconstruction oleh Darrida' sebagai salah satu fahaman yang berkait dengan Pascamodenisme.",
        incorrect: {
          b: "Kant adalah tokoh utama era Enlightenment dan Modenisme.",
          c: "Hume adalah tokoh utama era Enlightenment dan Modenisme.",
          d: "Locke adalah tokoh utama era Enlightenment dan Modenisme.",
        },
      },
    },
    {
      id: "ideology-q11",
      text: "Analisis tentang hubungan erat antara ilmu dan kekuasaan (*knowledge and power*) merupakan idea utama yang dikemukakan oleh...",
      options: [
        { id: "a", text: "Michel Foucault" },
        { id: "b", text: "Karl Popper" },
        { id: "c", text: "Bertrand Russell" },
        { id: "d", text: "Thomas Kuhn" },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Nota mengaitkan 'Konsep ilmu dan hubungannya dengan kekuasaan (power) oleh Michael Foucault' sebagai sebahagian daripada pemikiran Pascamoden.",
        incorrect: {
          b: "Karl Popper terkenal dengan falsafah sains, terutamanya konsep pemalsuan (*falsification*).",
          c: "Bertrand Russell adalah tokoh utama dalam falsafah analitik dan logik.",
          d: "Thomas Kuhn terkenal dengan konsep anjakan paradigma (*paradigm shift*).",
        },
      },
    },
    {
      id: "ideology-q12",
      text: "Mengapakah fahaman relativisme dikritik dari sudut pandang logik?",
      options: [
        {
          id: "a",
          text: "Kerana ia terlalu menyokong kebenaran mutlak yang ditawarkan oleh agama.",
        },
        {
          id: "b",
          text: "Kerana kenyataan 'tidak ada kebenaran yang mutlak' itu sendiri adalah satu dakwaan kebenaran yang mutlak, justeru ia menafikan dirinya sendiri.",
        },
        {
          id: "c",
          text: "Kerana ia terlalu mengagungkan kaedah saintifik dan menolak pandangan alternatif.",
        },
        {
          id: "d",
          text: "Kerana ia gagal memberikan ruang untuk perbezaan pendapat dan kepelbagaian pandangan.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota menjelaskan kritikan ini secara terperinci, iaitu kenyataan tersebut 'sebenarnya telah menafikan dirinya sendiri' kerana jika ia benar, maka wujudlah sekurang-kurangnya satu kebenaran mutlak, iaitu kenyataan itu sendiri.",
        incorrect: {
          a: "Relativisme secara asasnya menentang kebenaran mutlak agama.",
          c: "Relativisme mengkritik, bukan mengagungkan, kaedah saintifik Modenisme.",
          d: "Relativisme secara melampau memberikan ruang kepada semua pandangan sehingga kebenaran itu sendiri menjadi kabur.",
        },
      },
    },
    {
      id: "ideology-q13",
      text: "Bagaimanakah fahaman keagamaan seperti Islam memberi jawapan terhadap cabaran relativisme?",
      options: [
        {
          id: "a",
          text: "Dengan menerima bahawa semua agama adalah sama benar dan menuju ke arah yang sama.",
        },
        {
          id: "b",
          text: "Dengan berhujah bahawa kepercayaan asas seperti kewujudan Tuhan adalah kebenaran mutlak dan tidak boleh diragui.",
        },
        {
          id: "c",
          text: "Dengan menggunakan kaedah dekonstruksi untuk menunjukkan bahawa teks suci mempunyai pelbagai makna yang relatif.",
        },
        {
          id: "d",
          text: "Dengan bersetuju bahawa fahaman ateisme dan teisme kedua-duanya boleh diterima sebagai benar.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota menyatakan bahawa bagi agama, 'kepercayaan kepada Tuhan adalah suatu kebenaran yang mutlak dan tidak diragui,' dan pendekatan ini menolak relativisme yang menimbulkan keraguan.",
        incorrect: {
          a: "Ini adalah fahaman pluralisme agama yang lahir dari relativisme, bukan jawapan tradisi terhadapnya.",
          c: "Ini adalah aplikasi kaedah pascamoden, bukan jawapan tradisi agama.",
          d: "Nota menggunakan contoh ini untuk menunjukkan percanggahan logik yang tidak boleh diterima oleh agama.",
        },
      },
    },
    {
      id: "ideology-q14",
      text: "Dalam domain politik, apakah manifestasi utama relativisme pascamoden?",
      options: [
        {
          id: "a",
          text: "Pengukuhan legitimasi negara bangsa berdasarkan konsensus bersama.",
        },
        {
          id: "b",
          text: "Kemunculan politik pasca-kebenaran dan politik identiti.",
        },
        {
          id: "c",
          text: "Penekanan kepada pertarungan kelas sebagai enjin utama sejarah.",
        },
        {
          id: "d",
          text: "Pembentukan kerajaan yang berasaskan hierarki dan autoriti tradisional.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota menyenaraikan 'Politik Pasca-Kebenaran & Anarki' serta 'Politik Identiti' sebagai cabaran utama dalam domain politik/ekonomi.",
        incorrect: {
          a: "Legitimasi dan konsensus adalah konsep yang dikaitkan dengan Modenisme.",
          c: "Pertarungan kelas adalah konsep Modenisme (khususnya Marxisme). Pascamodenisme lebih tertumpu pada pertarungan etnik atau identiti.",
          d: "Hierarki dan autoriti tradisional ditolak oleh Pascamodenisme.",
        },
      },
    },
    {
      id: "ideology-q15",
      text: "Apakah yang dimaksudkan dengan 'nihilisme' yang sering dikaitkan dengan Pascamodenisme?",
      options: [
        {
          id: "a",
          text: "Satu pendekatan untuk mencari makna yang paling benar dan universal melalui pentafsiran.",
        },
        {
          id: "b",
          text: "Penafian atau penolakan terhadap kewujudan makna, nilai, dan kebenaran yang objektif atau mutlak.",
        },
        {
          id: "c",
          text: "Kepercayaan bahawa budaya tinggi (seperti sastera klasik) adalah sumber utama nilai murni.",
        },
        {
          id: "d",
          text: "Satu kaedah saintifik untuk membuktikan bahawa alam semesta tidak mempunyai tujuan.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Dalam jadual perbandingan, nihilisme dipadankan sebagai lawan kepada hermeneutik (ilmu tafsir makna) Modenisme. Ia merujuk kepada pandangan bahawa nilai dan makna tidak mempunyai asas yang kukuh.",
        incorrect: {
          a: "Ini adalah definisi bagi hermeneutik (*hermeneutics*), yang dikaitkan dengan Modenisme.",
          c: "Kepercayaan pada budaya tinggi adalah ciri Modenisme.",
          d: "Nihilisme adalah pendirian falsafah, bukan kaedah saintifik.",
        },
      },
    },
    {
      id: "ideology-q16",
      text: "Manakah antara berikut adalah kesan langsung relativisme terhadap bidang etika dan moral?",
      options: [
        {
          id: "a",
          text: "Pengukuhan prinsip moral universal yang diterima oleh semua tamadun.",
        },
        {
          id: "b",
          text: "Penegasan bahawa hanya wahyu agama yang boleh menjadi sumber moral.",
        },
        {
          id: "c",
          text: "Pemikiran bahawa masyarakat atau individu menjadi pemutus utama sesuatu nilai itu baik atau buruk.",
        },
        {
          id: "d",
          text: "Penerimaan undang-undang negara sebagai satu-satunya penentu mutlak bagi tingkah laku yang bermoral.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota menyenaraikan 'Masyarakat sebagai Pemutus Nilai' di bawah domain Etika sebagai salah satu manifestasi relativisme. Jika tiada kebenaran moral yang mutlak, maka nilailah yang ditentukan oleh konteks sosial atau pilihan individu.",
        incorrect: {
          a: "Ini merujuk kepada pencarian asas moral yang objektif atau mutlak, yang ditolak oleh relativisme etika.",
          b: "Ini adalah pendekatan etika keagamaan (absolutisme), bukan relativisme.",
          d: "Ini juga merujuk kepada pencarian asas moral yang objektif, yang ditolak oleh relativisme etika.",
        },
      },
    },
    {
      id: "ideology-q17",
      text: "Bagaimanakah pandangan Pascamodenisme terhadap sejarah berbeza daripada Modenisme?",
      options: [
        {
          id: "a",
          text: "Modenisme melihat sejarah sebagai fiksyen, manakala Pascamodenisme melihatnya sebagai fakta mutlak.",
        },
        {
          id: "b",
          text: "Modenisme melihat sejarah sebagai fakta yang linear dan progresif, manakala Pascamodenisme melihat sejarah sebagai naratif yang 'ditulis oleh pemenang' dan boleh ditulis semula.",
        },
        {
          id: "c",
          text: "Kedua-dua aliran bersetuju sejarah adalah objektif, tetapi berbeza dari segi kaedah penyelidikan.",
        },
        {
          id: "d",
          text: "Modenisme mengabaikan sejarah, manakala Pascamodenisme menjadikannya satu-satunya sumber kebenaran.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota secara jelas membezakan pandangan Modenisme ('Sejarah sebagai fakta') dengan Pascamodenisme ('Sejarah ditulis oleh pemenang'). Ini bermakna sejarah bukan lagi satu kebenaran objektif tetapi satu teks yang boleh ditafsir semula.",
        incorrect: {
          a: "Pilihan ini terbalik.",
          c: "Pascamodenisme menolak objektiviti sejarah.",
          d: "Modenisme sangat mementingkan sejarah untuk membina naratif kemajuannya.",
        },
      },
    },
    {
      id: "ideology-q18",
      text: "Apakah yang dimaksudkan dengan 'Pluralisme Agama' sebagai salah satu cabaran relativisme pascamoden?",
      options: [
        {
          id: "a",
          text: "Pandangan bahawa semua agama adalah salah dan harus dihapuskan.",
        },
        {
          id: "b",
          text: "Gerakan untuk memaksa semua orang menganut satu agama yang universal.",
        },
        {
          id: "c",
          text: "Pandangan relativistik yang menganggap semua agama adalah jalan yang sama-sama benar dan sah menuju matlamat yang sama.",
        },
        {
          id: "d",
          text: "Kajian perbandingan antara agama untuk mencari agama yang paling benar secara saintifik.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota mengaitkan 'Pluralisme Agama' dengan 'Liberalisme dalam akidah & agama yang menjadikan semua agama benar & sama'. Ini adalah aplikasi langsung relativisme kebenaran kepada domain agama.",
        incorrect: {
          a: "Ini lebih merujuk kepada ateisme radikal.",
          b: "Ini adalah totalitarianisme, bukan pluralisme.",
          d: "Ini adalah pendekatan modenis, yang cuba mencari 'kebenaran' objektif, bukan pendekatan relativistik.",
        },
      },
    },
    {
      id: "ideology-q19",
      text: "Pilih kombinasi yang betul antara ciri Modenisme dengan ciri Pascamodenisme.",
      options: [
        {
          id: "a",
          text: "Modenisme: Desentralisasi; Pascamodenisme: Sentralisasi",
        },
        {
          id: "b",
          text: "Modenisme: Konstruksi; Pascamodenisme: Dekonstruksi",
        },
        {
          id: "c",
          text: "Modenisme: Budaya Rendah; Pascamodenisme: Budaya Tinggi",
        },
        {
          id: "d",
          text: "Modenisme: Nihilisme; Pascamodenisme: Hermeneutis",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Jadual perbandingan dalam nota secara jelas memadankan 'Konstruksi' (membina sistem besar) dengan Modenisme, dan 'Dekonstruksi' (membongkar sistem) dengan Pascamodenisme.",
        incorrect: {
          a: "Padanan ini terbalik. Modenisme = Sentralisasi, Pascamodenisme = Desentralisasi.",
          c: "Padanan ini terbalik. Modenisme = Budaya Tinggi, Pascamodenisme = Budaya Rendah.",
          d: "Padanan ini terbalik. Modenisme = Hermeneutis, Pascamodenisme = Nihilisme.",
        },
      },
    },
    {
      id: "ideology-q20",
      text: "Menurut Thomas Kuhn, ilmu sains mengandungi aspek bukan rasional. Apakah contoh yang diberikan untuk menyokong kenyataan ini?",
      options: [
        {
          id: "a",
          text: "Ahli sains sering menggunakan formula matematik yang kompleks dan logikal.",
        },
        {
          id: "b",
          text: "Penemuan saintifik sentiasa melalui proses pengesahan empirikal yang ketat.",
        },
        {
          id: "c",
          text: "Pertukaran teori dalam sains boleh dipengaruhi oleh faktor psikologi dan sosiologi.",
        },
        {
          id: "d",
          text: "Setiap teori saintifik yang baharu adalah lebih baik secara objektif berbanding teori lama.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota menyatakan bahawa menurut Kuhn, 'pertukaran teori dalam sains bukannya bersandarkan faktor rasional atau logikal semata-mata, tetapi boleh dipengaruhi faktor psikologi & sosiologi'.",
        incorrect: {
          a: "Ini adalah ciri-ciri proses sains yang dianggap rasional dan logikal oleh Modenisme.",
          b: "Ini juga adalah ciri-ciri proses sains yang dianggap rasional oleh Modenisme.",
          d: "Kuhn mencabar idea kemajuan linear dan objektif ini, dengan menyatakan paradigma yang berbeza mungkin tidak dapat dibandingkan secara langsung (*incommensurable*).",
        },
      },
    },
    {
      id: "ideology-q21",
      text: "Dalam domain undang-undang, apakah cabaran utama yang dibawa oleh relativisme pascamoden?",
      options: [
        {
          id: "a",
          text: "Penguatkuasaan undang-undang yang lebih ketat dan berhierarki.",
        },
        {
          id: "b",
          text: "Penolakan terhadap autoriti dan tradisi sebagai asas perundangan.",
        },
        {
          id: "c",
          text: "Penerimaan teks-teks perundangan kuno sebagai sumber yang tidak boleh dipersoalkan.",
        },
        {
          id: "d",
          text: "Penyeragaman sistem undang-undang di seluruh dunia berdasarkan satu model universal.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota secara spesifik menyenaraikan 'UNDANG-UNDANG: Penolakan Autoriti & Tradisi' sebagai salah satu cabaran utama. Jika kebenaran dan moral adalah relatif, maka autoriti undang-undang akan goyah.",
        incorrect: {
          a: "Ini adalah konsep yang bertentangan dengan semangat Pascamodenisme yang anti-autoriti.",
          c: "Ini adalah ciri zaman pra-moden yang menolak sebarang kritikan.",
          d: "Ini adalah projek universalisme Modenisme, bukan Pascamodenisme.",
        },
      },
    },
    {
      id: "ideology-q22",
      text: "Apakah perbezaan pandangan terhadap 'keluarga' antara Modenisme dan Pascamodenisme?",
      options: [
        {
          id: "a",
          text: "Modenisme mempromosikan keluarga alternatif, manakala Pascamodenisme mempertahankan keluarga tradisional.",
        },
        {
          id: "b",
          text: "Modenisme melihat perkahwinan sebagai syarat utama keluarga, manakala Pascamodenisme melihat keluarga sebagai alternatif termasuk pasangan sama jantina dan *cohabitation*.",
        },
        {
          id: "c",
          text: "Kedua-dua aliran menolak institusi keluarga dan mempromosikan kehidupan individualistik sepenuhnya.",
        },
        {
          id: "d",
          text: "Modenisme menekankan keluarga besar (*extended family*), manakala Pascamodenisme menekankan keluarga nuklear.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota membezakan 'Perkahwinan ialah ciri utama' (Modenisme) dengan 'Keluarga sebagai alternatif... Perkahwinan tidak lagi menjadi syarat' (Pascamodenisme).",
        incorrect: {
          a: "Pilihan ini terbalik.",
          c: "Modenisme masih mempertahankan institusi keluarga asas.",
          d: "Perbezaan utamanya adalah pada penolakan terhadap struktur tradisional itu sendiri, bukan saiz keluarga.",
        },
      },
    },
    {
      id: "ideology-q23",
      text: "Apakah yang dimaksudkan dengan 'politik identiti' sebagai manifestasi Pascamodenisme?",
      options: [
        {
          id: "a",
          text: "Politik yang berasaskan kesetiaan kepada negara bangsa yang satu dan seragam.",
        },
        {
          id: "b",
          text: "Politik yang menumpukan kepada perjuangan dan pengiktirafan kumpulan-kumpulan berdasarkan identiti khusus seperti etnik, jantina, atau orientasi seksual.",
        },
        {
          id: "c",
          text: "Sistem politik yang menafikan semua bentuk identiti individu dan kumpulan.",
        },
        {
          id: "d",
          text: "Gerakan politik yang bertujuan untuk menghapuskan perbezaan budaya dan mewujudkan satu identiti global.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota menyenaraikan 'Politik Identiti' sebagai cabaran Pascamoden. Ia berbeza daripada politik Modenisme yang berasaskan kelas atau ideologi besar.",
        incorrect: {
          a: "Ini lebih cenderung kepada projek nasionalisme Modenisme.",
          c: "Politik identiti justru terlalu menekankan, bukan menafikan, identiti kumpulan.",
          d: "Ini lebih cenderung kepada projek universalisme Modenisme.",
        },
      },
    },
    {
      id: "ideology-q24",
      text: "Bagaimanakah sistem ekonomi konsumerisme mencerminkan semangat Pascamodenisme?",
      options: [
        {
          id: "a",
          text: "Dengan memberi tumpuan kepada pengeluaran barangan keperluan asas secara besar-besaran.",
        },
        {
          id: "b",
          text: "Dengan mewujudkan nilai dan keuntungan melalui imej, jenama, dan prestij, bukan sekadar fungsi produk.",
        },
        {
          id: "c",
          text: "Dengan memastikan pengagihan kekayaan yang saksama kepada semua lapisan masyarakat.",
        },
        {
          id: "d",
          text: "Dengan menggalakkan industri berat yang menjadi lambang kekuatan dan kemajuan negara.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota menyatakan bahawa ekonomi konsumerisme 'mementingkan keuntungan dengan menggunakan imej, simbol, jenama, produk & prestij'. Ini selari dengan idea Pascamoden tentang 'simulacra'.",
        incorrect: {
          a: "Ini adalah ciri ekonomi era industri Modenisme.",
          c: "Pascamodenisme dikaitkan dengan 'Jurang Ekonomi & Peminggiran'.",
          d: "Ini adalah ciri ekonomi era industri Modenisme.",
        },
      },
    },
    {
      id: "ideology-q25",
      text: "Apakah yang dimaksudkan dengan istilah 'Simulacra dan realiti ciptaan' dalam konteks Pascamodenisme?",
      options: [
        {
          id: "a",
          text: "Penghasilan karya seni yang meniru alam semula jadi dengan sangat tepat.",
        },
        {
          id: "b",
          text: "Keadaan di mana salinan, imej, atau simulasi menjadi lebih nyata dan penting daripada realiti asal, sehingga perbezaan antara keduanya menjadi kabur.",
        },
        {
          id: "c",
          text: "Usaha untuk mencari keaslian dan kesahihan di sebalik kepalsuan dunia moden.",
        },
        {
          id: "d",
          text: "Penggunaan simulasi komputer untuk tujuan penyelidikan saintifik yang objektif.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota membezakan 'Kesahihan dan keaslian' (Modenisme) dengan 'Simulcara dan realiti ciptaan' (Pascamodenisme). Ini merujuk kepada dunia yang dipenuhi imej yang mencipta realitinya sendiri.",
        incorrect: {
          a: "Ini adalah teknik seni (*mimesis*), bukan konsep falsafah Pascamoden.",
          c: "Pencarian keaslian adalah projek Modenisme.",
          d: "Ini adalah penggunaan teknologi, bukan konsep falsafah yang mempersoalkan realiti itu sendiri.",
        },
      },
    },
    {
      id: "ideology-q26",
      text: "Antara berikut, manakah ciri-ciri pemikiran Modenisme?\n\nI. Rasionaliti sebagai asas kebenaran.\nII. Kepercayaan kepada kemajuan (*progress*) dan transformasi.\nIII. Pandangan bahawa prinsip kebenaran bersifat universal.\nIV. Skeptisisme terhadap naratif besar (*grand narratives*).",
      options: [
        { id: "a", text: "I, II dan III sahaja" },
        { id: "b", text: "I, II dan IV sahaja" },
        { id: "c", text: "II, III dan IV sahaja" },
        { id: "d", text: "Semua di atas" },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Nota menggariskan rasionaliti, kemajuan (progresif, transformasi), dan universalisme sebagai unsur-unsur utama Modenisme.",
        incorrect: {
          b: "Pilihan ini salah kerana IV (skeptisisme terhadap naratif besar) adalah ciri Pascamodenisme.",
          c: "Pilihan ini salah kerana IV adalah ciri Pascamodenisme.",
          d: "Pilihan ini salah kerana IV adalah ciri Pascamodenisme.",
        },
      },
    },
    {
      id: "ideology-q27",
      text: "Apakah cabaran utama Pascamodenisme dalam domain 'Sains'?",
      options: [
        {
          id: "a",
          text: "Menuntut agar semua penyelidikan saintifik disahkan oleh autoriti agama.",
        },
        {
          id: "b",
          text: "Menggalakkan penggunaan metodologi 'Anything Goes' dan menyebarkan sentimen anti-sains.",
        },
        {
          id: "c",
          text: "Mendorong pembiayaan yang lebih besar untuk penyelidikan dalam bidang sains tulen.",
        },
        {
          id: "d",
          text: "Berusaha untuk menjadikan kaedah saintifik sebagai satu-satunya cara untuk memahami realiti.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota menyenaraikan 'SAINS: Metodologi “Anything Goes”, Anti-Sains' sebagai cabaran pascamoden. Ini merujuk kepada idea bahawa tiada metodologi saintifik yang unggul.",
        incorrect: {
          a: "Ini adalah ciri zaman pra-moden (Medieval).",
          c: "Sentimen anti-sains tidak akan mendorong kepada pembiayaan yang lebih besar.",
          d: "Ini adalah cita-cita Modenisme (positivisme logikal) yang ditentang oleh Pascamodenisme.",
        },
      },
    },
    {
      id: "ideology-q28",
      text: "Mengapakah ahli sains turut menolak fahaman relativisme?",
      options: [
        {
          id: "a",
          text: "Kerana relativisme adalah teori yang sukar dibuktikan melalui eksperimen di makmal.",
        },
        {
          id: "b",
          text: "Kerana relativisme mencadangkan bahawa kajian sains menjadi sia-sia jika tiada kebenaran objektif untuk dicari.",
        },
        {
          id: "c",
          text: "Kerana relativisme mengutamakan emosi dan intuisi berbanding data empirikal.",
        },
        {
          id: "d",
          text: "Kerana relativisme adalah fahaman yang hanya relevan dalam bidang sastera dan seni.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota menjelaskan bahawa ahli sains menolak relativisme kerana 'jika mereka menerima fahaman tersebut bermaksud membawa implikasi bahawa kajian sains ini tidak dapat dilakukan dengan sebaik mungkin'.",
        incorrect: {
          a: "Relativisme adalah pendirian falsafah, bukan hipotesis saintifik yang perlu dibuktikan di makmal.",
          c: "Sebab utama penolakan saintis adalah implikasinya terhadap tujuan sains itu sendiri.",
          d: "Implikasi relativisme adalah sangat mendalam terhadap sains kerana ia menyentuh konsep 'kebenaran'.",
        },
      },
    },
    {
      id: "ideology-q29",
      text: "Apakah yang dimaksudkan dengan kerapuhan sistem keluarga sebagai implikasi Pascamodenisme?",
      options: [
        {
          id: "a",
          text: "Peningkatan kadar perceraian akibat tekanan ekonomi zaman moden.",
        },
        {
          id: "b",
          text: "Pengukuhan ikatan keluarga besar (*extended family*) sebagai ganti kepada keluarga nuklear.",
        },
        {
          id: "c",
          text: "Mempelopori gaya hidup bersekedudukan (*cohabitation*) tanpa ikatan perkahwinan yang sah.",
        },
        {
          id: "d",
          text: "Gerakan untuk kembali kepada model keluarga patriarki tradisional.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota secara spesifik menyebut bahawa Pascamodenisme 'mempelopori kehidupan bersekedudukan (cohabitation) tanpa ikatan perkahwinan yang sah' yang membawa kepada kerapuhan institusi keluarga tradisional.",
        incorrect: {
          a: "Hujah pascamoden lebih tertumpu pada penolakan struktur perkahwinan itu sendiri.",
          b: "Ini adalah gerakan yang berlawanan dengan semangat Pascamodenisme yang menolak tradisi.",
          d: "Ini juga adalah gerakan yang berlawanan dengan semangat Pascamodenisme.",
        },
      },
    },
    {
      id: "ideology-q30",
      text: "Pandangan Modenisme bahawa sejarah adalah linear, unik, dan progresif bermakna...",
      options: [
        {
          id: "a",
          text: "Peristiwa sejarah akan sentiasa berulang dalam satu kitaran yang sama.",
        },
        {
          id: "b",
          text: "Sejarah bergerak ke hadapan menuju satu keadaan yang lebih baik dan tidak akan berbalik.",
        },
        {
          id: "c",
          text: "Sejarah adalah sesuatu yang subjektif dan bergantung pada tafsiran individu.",
        },
        {
          id: "d",
          text: "Tiada corak atau hala tuju yang boleh dikesan dalam perjalanan sejarah manusia.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Kata kunci 'linear,' 'unik,' 'tidak berulang,' dan 'progresif' menunjukkan kepercayaan Modenisme bahawa sejarah manusia bergerak maju ke arah kemajuan dan pencerahan.",
        incorrect: {
          a: "Ini adalah pandangan kitaran (*cyclical*) yang lebih lazim dalam pemikiran pra-moden.",
          c: "Ini lebih mencerminkan pandangan Pascamoden.",
          d: "Ini juga lebih mencerminkan pandangan Pascamoden yang skeptikal.",
        },
      },
    },
    {
      id: "ideology-q31",
      text: "Pascamodenisme lahir sebagai reaksi dari...",
      options: [
        {
          id: "a",
          text: "Dominasi gereja dan dogma agama pada zaman Medieval.",
        },
        {
          id: "b",
          text: "'Kegagalan Modeniti' yang dianggap tidak berjaya memenuhi janjinya untuk kemajuan dan pembebasan manusia.",
        },
        {
          id: "c",
          text: "Gerakan falsafah eksistensialisme yang terlalu pesimistik.",
        },
        {
          id: "d",
          text: "Perkembangan pesat teknologi maklumat dan internet.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Tajuk dalam nota secara eksplisit menyatakan 'Ideologi Relativisme Pascamoden sebagai Reaksi dari Kegagalan Modeniti'.",
        incorrect: {
          a: "Reaksi terhadap dogma agama Medieval melahirkan Modenisme, bukan Pascamodenisme.",
          c: "Eksistensialisme dilihat sebagai sebahagian daripada, bukan penyebab, pemikiran yang mengkritik Modenisme.",
          d: "Teknologi maklumat adalah pemangkin, bukan punca falsafah kelahirannya.",
        },
      },
    },
    {
      id: "ideology-q32",
      text: "Antara berikut, yang manakah tokoh falsafah dari tradisi Kontinental (Perancis/Jerman) yang dikaitkan dengan pemikiran Pascamoden dalam nota?",
      options: [
        { id: "a", text: "John Locke" },
        { id: "b", text: "Albert Camus" },
        { id: "c", text: "Bertrand Russell" },
        { id: "d", text: "David Hume" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota menyebut 'Continental Philosophy dikaitkan dengan ahli falsafah Perancis & Jerman seperti Albert Camus dengan eksistansialisme' sebagai fahaman yang bertentangan dengan Modenisme.",
        incorrect: {
          a: "Locke adalah ahli falsafah British dari era Enlightenment.",
          c: "Russell adalah ahli falsafah British dari tradisi analitik.",
          d: "Hume adalah ahli falsafah British dari era Enlightenment.",
        },
      },
    },
    {
      id: "ideology-q33",
      text: "Apakah yang menjadi ukuran kebahagiaan hidup menurut 'nilai relatif' yang menggariskan konsep asas pemodenan?",
      options: [
        {
          id: "a",
          text: "Keuntungan kebendaan dan pencapaian ekonomi.",
        },
        {
          id: "b",
          text: "Ketaatan kepada ajaran agama dan amalan kerohanian.",
        },
        {
          id: "c",
          text: "Kepatuhan kepada tradisi dan adat resam nenek moyang.",
        },
        {
          id: "d",
          text: "Pencapaian kebijaksanaan melalui pemikiran falsafah yang mendalam.",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Nota menyatakan dengan jelas bahawa salah satu konsepnya ialah 'Kebahagiaan hidup diukur dari keuntungan kebendaan'.",
        incorrect: {
          b: "Ini adalah sumber nilai yang disingkirkan oleh pemodenan materialistik.",
          c: "Ini adalah sumber nilai yang disingkirkan oleh pemodenan materialistik.",
          d: "Ini adalah sumber nilai yang disingkirkan oleh pemodenan materialistik.",
        },
      },
    },
    {
      id: "ideology-q34",
      text: "Bagaimanakah perubahan struktur sosial dalam era Pascamoden memberi kesan kepada individu?",
      options: [
        {
          id: "a",
          text: "Mewujudkan masyarakat yang lebih kolektif dan mengutamakan kepentingan bersama.",
        },
        {
          id: "b",
          text: "Melahirkan individu yang lebih individualistik, ego, dan gemar bermegah-megah.",
        },
        {
          id: "c",
          text: "Menggalakkan pembentukan identiti yang seragam dan patuh kepada norma masyarakat.",
        },
        {
          id: "d",
          text: "Memperkukuh ikatan sosial berdasarkan kelas ekonomi yang jelas.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota menghuraikan bahawa perubahan struktur sosial membawa kepada 'kehidupan masyarakat yang lebih individualistik, ego, sombong & bermegah-megah'.",
        incorrect: {
          a: "Ini bertentangan dengan individualisme yang disebut.",
          c: "Pascamodenisme meraikan perbezaan, bukan keseragaman.",
          d: "Kelas ekonomi yang jelas adalah ciri Modenisme ('Pertarungan Kelas').",
        },
      },
    },
    {
      id: "ideology-q35",
      text: "Antara berikut, manakah BUKAN cabaran atau manifestasi ideologi relativisme pascamoden?",
      options: [
        {
          id: "a",
          text: "Skeptisisme terhadap kebenaran mutlak.",
        },
        {
          id: "b",
          text: "Liberalisme dalam akidah dan agama.",
        },
        {
          id: "c",
          text: "Penekanan terhadap rasionaliti dan pembinaan naratif besar.",
        },
        {
          id: "d",
          text: "Kemunculan gerakan hak asasi untuk kelompok minoriti dan devian.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Penekanan terhadap rasionaliti dan pembinaan naratif besar (konstruksi) adalah ciri-ciri utama Modenisme, bukan cabaran Pascamodenisme.",
        incorrect: {
          a: "Skeptisisme adalah ciri Pascamodenisme.",
          b: "Liberalisme agama adalah implikasi Pascamodenisme.",
          d: "Gerakan hak asasi minoriti adalah implikasi Pascamodenisme.",
        },
      },
    },
    {
      id: "ideology-q36",
      text: "Apakah kritikan utama terhadap penghasilan produk hiburan dalam era Pascamoden?",
      options: [
        {
          id: "a",
          text: "Produk hiburan menjadi terlalu serius dan berat dengan mesej moral.",
        },
        {
          id: "b",
          text: "Produk hiburan lebih mementingkan keuntungan dan mengabaikan nilai seni.",
        },
        {
          id: "c",
          text: "Produk hiburan tidak lagi mementingkan makna dan tujuan yang mendalam, sebaliknya hanya melekakan masyarakat.",
        },
        {
          id: "d",
          text: "Produk hiburan dikawal ketat oleh pihak berkuasa untuk tujuan propaganda.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Nota menyatakan ia sebagai 'Penghasilan produk hiburan yang tidak mementingkan makna & tujuan' dan boleh diperhatikan dalam 'lirik, muzik, filem & maginasi yang melekakan masyarakat'.",
        incorrect: {
          a: "Ini adalah kritikan yang berlawanan; hiburan pascamoden sering dianggap kurang serius.",
          b: "Walaupun mungkin benar, kritikan falsafah yang spesifik dalam nota adalah mengenai 'ketiadaan makna.'",
          d: "Walaupun mungkin benar, kritikan falsafah yang spesifik dalam nota adalah mengenai 'ketiadaan makna.'",
        },
      },
    },
    {
      id: "ideology-q37",
      text: "Apakah perbezaan asas antara 'budaya tinggi' (Modenisme) dan 'budaya rendah' (Pascamodenisme)?",
      options: [
        {
          id: "a",
          text: "Modenisme meraikan budaya pop, manakala Pascamodenisme menghargai seni klasik.",
        },
        {
          id: "b",
          text: "Modenisme mewujudkan hierarki antara seni elit (tinggi) dan budaya massa (rendah), manakala Pascamodenisme mengaburkan perbezaan ini.",
        },
        {
          id: "c",
          text: "Modenisme bersifat anti-seni, manakala Pascamodenisme menggalakkan semua bentuk ekspresi budaya.",
        },
        {
          id: "d",
          text: "Tiada perbezaan; kedua-dua aliran menolak semua bentuk budaya.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota mengaitkan Modenisme dengan 'Budaya Tinggi' dan 'Hierarki,' manakala Pascamodenisme dikaitkan dengan 'Budaya Rendah' dan nota lain menyatakan 'Budaya tinggi & rendah menjadi kabur'.",
        incorrect: {
          a: "Pilihan ini terbalik.",
          c: "Ini adalah penyataan yang tidak tepat dan terlalu ekstrim.",
          d: "Ini adalah penyataan yang tidak tepat dan terlalu ekstrim.",
        },
      },
    },
    {
      id: "ideology-q38",
      text: "Antara berikut, manakah ciri-ciri pemikiran Pascamodenisme?\n\nI. Kebenaran bersifat Relatif & Subjektif\nII. Desentralisasi\nIII. Pertarungan Etnik\nIV. Legitimasi berdasarkan konsensus",
      options: [
        { id: "a", text: "I dan II sahaja" },
        { id: "b", text: "I, II dan III sahaja" },
        { id: "c", text: "II, III dan IV sahaja" },
        { id: "d", text: "Semua di atas" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Berdasarkan jadual perbandingan, Kebenaran Relatif, Desentralisasi, dan Pertarungan Etnik adalah ciri-ciri Pascamodenisme.",
        incorrect: {
          a: "Pilihan ini tidak lengkap kerana III juga ciri Pascamodenisme.",
          c: "Pilihan ini salah kerana IV (Legitimasi) adalah ciri Modenisme.",
          d: "Pilihan ini salah kerana IV adalah ciri Modenisme.",
        },
      },
    },
    {
      id: "ideology-q39",
      text: "Mengapakah fahaman relativisme dianggap sebagai satu cabaran serius kepada kepercayaan keagamaan?",
      options: [
        {
          id: "a",
          text: "Kerana ia menggalakkan penganut agama untuk berfikir secara lebih rasional dan logikal.",
        },
        {
          id: "b",
          text: "Kerana ia menafikan kewujudan kebenaran mutlak, sekaligus menimbulkan keraguan terhadap doktrin asas agama yang bersifat dogmatik.",
        },
        {
          id: "c",
          text: "Kerana ia memaksa institusi agama untuk mematuhi undang-undang sekular negara.",
        },
        {
          id: "d",
          text: "Kerana ia mempromosikan kajian saintifik terhadap teks-teks suci.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Nota menekankan bahawa relativisme menjadi cabaran kerana 'agama itu bersifat dogmatic, maksudnya sesuatu kepercayaan agama itu tidak boleh diubah ataupun dicabar, penerimaanya haruslah bersifat mutlak'.",
        incorrect: {
          a: "Cabaran utamanya bukan pada rasionaliti, tetapi pada penolakan kebenaran mutlak.",
          c: "Ini adalah isu politik sekularisme, bukan isu falsafah relativisme secara langsung.",
          d: "Kajian saintifik adalah pendekatan Modenisme, bukan Pascamodenisme.",
        },
      },
    },
    {
      id: "ideology-q40",
      text: "Secara ringkas, apakah perbezaan falsafah yang paling fundamental antara Modenisme dan Pascamodenisme?",
      options: [
        {
          id: "a",
          text: "Modenisme berpegang pada kebenaran yang mutlak dan objektif; Pascamodenisme berpegang pada kebenaran yang relatif dan subjektif.",
        },
        {
          id: "b",
          text: "Modenisme menolak agama sepenuhnya; Pascamodenisme cuba mengembalikan agama sebagai kuasa mutlak.",
        },
        {
          id: "c",
          text: "Modenisme bersifat subjektif dan mementingkan emosi; Pascamodenisme bersifat objektif dan rasional.",
        },
        {
          id: "d",
          text: "Modenisme meraikan budaya rendah dan sub-budaya; Pascamodenisme mengagungkan budaya tinggi dan hierarki.",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Ini adalah rumusan paling tepat yang merangkumi perbezaan teras antara kedua-dua aliran pemikiran ini, seperti yang digariskan pada permulaan jadual perbandingan dalam nota.",
        incorrect: {
          b: "Pascamodenisme tidak mengembalikan agama sebagai kuasa mutlak; ia merelatifkan kebenaran agama melalui pluralisme.",
          c: "Pilihan ini terbalik.",
          d: "Pilihan ini terbalik.",
        },
      },
    },
  ],
};
