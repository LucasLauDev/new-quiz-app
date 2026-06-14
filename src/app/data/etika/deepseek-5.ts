import { Quiz } from "@/app/types/quiz";

export const DSTopik5: Quiz = {
  id: "ds-topik-5",
  categoryId: "etika",
  subcategoryId: "deepseek-topik-5",
  title: "Topik 5 - Deepseek",
  questions: [
    {
      id: "subject-q1",
      text: "Apakah yang dimaksudkan dengan 'peradaban majmuk' di Malaysia?",
      options: [
        {
          id: "a",
          text: "Gabungan peradaban Melayu sahaja.",
        },
        {
          id: "b",
          text: "Gabungan peradaban Pribumi, Asia, Barat, dan globalisasi.",
        },
        {
          id: "c",
          text: "Hanya peradaban Barat dan Asia.",
        },
        {
          id: "d",
          text: "Peradaban tanpa pengaruh luar.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Peradaban majmuk Malaysia terbentuk daripada gabungan peradaban Pribumi Alam Melayu, Asia (India, Cina, Timur Tengah), Barat, dan globalisasi :cite[2].",
        incorrect: {
          a: "Peradaban majmuk bukan hanya Melayu tetapi termasuk pengaruh lain.",
          c: "Ia termasuk lebih daripada sekadar Barat dan Asia, seperti Pribumi dan globalisasi.",
          d: "Malaysia menerima banyak pengaruh luar dalam pembentukan peradabannya.",
        },
      },
    },
    {
      id: "subject-q2",
      text: "Bilakah pembinaan peradaban beridentitikan Malaysia bermula?",
      options: [
        {
          id: "a",
          text: "Penjajahan British.",
        },
        {
          id: "b",
          text: "Kemerdekaan 1957.",
        },
        {
          id: "c",
          text: "Pembentukan Malaysia 1963.",
        },
        {
          id: "d",
          text: "Zaman pra-kolonial.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Pembinaan peradaban beridentitikan Malaysia bermula dengan Kemerdekaan 1957 melalui usaha mewujudkan Negara-Bangsa.",
        incorrect: {
          a: "Penjajahan British adalah zaman pengaruh Barat, tetapi identiti Malaysia belum dibentuk.",
          c: "Pembentukan Malaysia 1963 menyatukan lebih banyak wilayah, tetapi asas identiti sudah bermula sejak 1957.",
          d: "Zaman pra-kolonial adalah asas peradaban, tetapi identiti Malaysia khusus hanya bermula pasca-merdeka.",
        },
      },
    },
    {
      id: "subject-q3",
      text: "Manakah antara berikut merupakan elemen utama pembentukan negara? I. Wilayah II. Rakyat III. Kerajaan IV. Bahasa kebangsaan",
      options: [
        {
          id: "a",
          text: "I, II, III",
        },
        {
          id: "b",
          text: "II, III, IV",
        },
        {
          id: "c",
          text: "I, III, IV",
        },
        {
          id: "d",
          text: "I, II, IV",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Elemen utama negara ialah wilayah, rakyat, kerajaan, kedaulatan, dan undang-undang. Bahasa kebangsaan bukan elemen asas negara.",
        incorrect: {
          a: "Ini adalah jawapan yang betul.",
          b: "Bahasa kebangsaan bukan elemen asas pembentukan negara.",
          c: "Bahasa kebangsaan bukan elemen asas pembentukan negara.",
          d: "Bahasa kebangsaan bukan elemen asas pembentukan negara.",
        },
      },
    },
    {
      id: "subject-q4",
      text: "Siapakah yang memperkenalkan konsep 'imagined community'?",
      options: [
        {
          id: "a",
          text: "Shamsul Amri Baharuddin",
        },
        {
          id: "b",
          text: "Benedict Anderson",
        },
        {
          id: "c",
          text: "Abdul Rahman Embong",
        },
        {
          id: "d",
          text: "Max Weber",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Benedict Anderson memperkenalkan konsep 'imagined community' untuk menjelaskan pembentukan bangsa.",
        incorrect: {
          a: "Shamsul Amri Baharuddin memperkenalkan konsep 'nation of intent'.",
          c: "Abdul Rahman Embong menulis tentang negara bangsa tetapi bukan 'imagined community'.",
          d: "Max Weber mentakrifkan negara dari perspektif sosiologi.",
        },
      },
    },
    {
      id: "subject-q5",
      text: "Apakah bentuk negara bangsa yang diamalkan di Malaysia?",
      options: [
        {
          id: "a",
          text: "Settler nation state",
        },
        {
          id: "b",
          text: "Indigenous nation state",
        },
        {
          id: "c",
          text: "Nation without state",
        },
        {
          id: "d",
          text: "State without nation",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Malaysia ialah indigenous nation state di mana anak watan (Bumiputera) diakui dan diterima.",
        incorrect: {
          a: "Settler nation state seperti AS dan Australia, di mana pendatang dominan.",
          c: "Nation without state merujuk kepada bangsa tanpa negara seperti Kurd.",
          d: "State without nation merujuk kepada negara tanpa identiti bangsa yang jelas.",
        },
      },
    },
    {
      id: "subject-q6",
      text: "Manakah antara berikut bukan ciri negara bangsa ideal?",
      options: [
        {
          id: "a",
          text: "Satu bangsa, satu negara",
        },
        {
          id: "b",
          text: "Majoriti rakyat berkongsi identiti nasional",
        },
        {
          id: "c",
          text: "Kepelbagaian etnik tanpa integrasi",
        },
        {
          id: "d",
          text: "Perkongsian budaya dan sejarah",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Negara bangsa ideal memerlukan integrasi dan perkongsian identiti, bukan hanya kepelbagaian tanpa penyatuan.",
        incorrect: {
          a: "Ini adalah ciri ideal negara bangsa.",
          b: "Ini adalah ciri ideal negara bangsa.",
          d: "Ini adalah ciri ideal negara bangsa.",
        },
      },
    },
    {
      id: "subject-q7",
      text: "Apakah yang dimaksudkan dengan 'nation without state'?",
      options: [
        {
          id: "a",
          text: "Negara tanpa wilayah",
        },
        {
          id: "b",
          text: "Bangsa tanpa kedaulatan sendiri",
        },
        {
          id: "c",
          text: "Negara dengan pelbagai bangsa",
        },
        {
          id: "d",
          text: "Bangsa yang diiktiraf oleh PBB",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "'Nation without state' merujuk kepada bangsa yang mempunyai identiti sendiri tetapi tidak mempunyai negara berdaulat (contoh: bangsa Kurdi).",
        incorrect: {
          a: "Negara tanpa wilayah adalah mustahil dalam definisi moden.",
          c: "Ini merujuk kepada negara multietnik, bukan nation without state.",
          d: "Pengiktirafan PBB tidak mengubah status nation without state.",
        },
      },
    },
    {
      id: "subject-q8",
      text: "Siapakah yang mentakrifkan negara sebagai 'monopoli keganasan sah dalam wilayah'?",
      options: [
        {
          id: "a",
          text: "Karl Marx",
        },
        {
          id: "b",
          text: "Max Weber",
        },
        {
          id: "c",
          text: "Anthony Giddens",
        },
        {
          id: "d",
          text: "Robert Dahl",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Max Weber mentakrifkan negara sebagai entiti yang memonopoli keganasan sah dalam suatu wilayah.",
        incorrect: {
          a: "Karl Marx melihat negara sebagai produk perjuangan kelas.",
          c: "Anthony Giddens mentakrifkan negara sebagai organisasi politik berkuasa.",
          d: "Robert Dahl mentakrifkan negara sebagai sistem politik.",
        },
      },
    },
    {
      id: "subject-q9",
      text: "Manakah antara berikut merupakan contoh 'settler nation state'?",
      options: [
        {
          id: "a",
          text: "Malaysia",
        },
        {
          id: "b",
          text: "Indonesia",
        },
        {
          id: "c",
          text: "Australia",
        },
        {
          id: "d",
          text: "Thailand",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Australia ialah settler nation state di komuniti migran mendominasi dan meminggirkan anak watan asal.",
        incorrect: {
          a: "Malaysia ialah indigenous nation state.",
          b: "Indonesia ialah negara kepulauan dengan penduduk pribumi.",
          d: "Thailand ialah negara dengan majoriti etnik Thai.",
        },
      },
    },
    {
      id: "subject-q10",
      text: "Apakah konsep 'Bangsa Idaman' yang diterima British di Tanah Melayu?",
      options: [
        {
          id: "a",
          text: "Malaysian Malaysia",
        },
        {
          id: "b",
          text: "Malay-led plural society",
        },
        {
          id: "c",
          text: "Daulah Islamiah",
        },
        {
          id: "d",
          text: "Malaya Raya",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Konsep 'Malay-led plural society' diterima British dan menjadi asas pembentukan negara :cite[3]:cite[4].",
        incorrect: {
          a: "Malaysian Malaysia diperkenalkan oleh Lee Kuan Yew pada 1960-an.",
          c: "Daulah Islamiah diperjuangkan oleh PAS.",
          d: "Malaya Raya ialah gagasan penyatuan dengan Indonesia.",
        },
      },
    },
    {
      id: "subject-q11",
      text: "Bilakah konsep 'Malaysian Malaysia' mula diperkenalkan?",
      options: [
        {
          id: "a",
          text: "Era Tunku Abdul Rahman",
        },
        {
          id: "b",
          text: "Era Lee Kuan Yew (1960-an)",
        },
        {
          id: "c",
          text: "Era Mahathir Mohamad",
        },
        {
          id: "d",
          text: "Era DAP pasca-2000",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Konsep 'Malaysian Malaysia' diperkenalkan oleh Lee Kuan Yew ketika Singapura dalam Persekutuan Tanah Melayu :cite[3]:cite[5].",
        incorrect: {
          a: "Tunku Abdul Rahman menentang konsep Malaysian Malaysia.",
          c: "Mahathir memperkenalkan Wawasan 2020, bukan Malaysian Malaysia.",
          d: "DAP menyokong konsep ini tetapi bukan pengasas.",
        },
      },
    },
    {
      id: "subject-q12",
      text: "Apakah yang dimaksudkan dengan etos bangsa?",
      options: [
        {
          id: "a",
          text: "Sistem pemerintahan negara",
        },
        {
          id: "b",
          text: "Nilai, tradisi, dan identiti bersama sesuatu bangsa",
        },
        {
          id: "c",
          text: "Dasar ekonomi negara",
        },
        {
          id: "d",
          text: "Struktur sosial masyarakat",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Etos bangsa merujuk kepada nilai, tradisi, identiti, dan wawasan bersama yang dikongsi oleh sesuatu bangsa.",
        incorrect: {
          a: "Sistem pemerintahan adalah sebahagian daripada negara, bukan etos bangsa.",
          c: "Dasar ekonomi adalah alat kerajaan, bukan teras etos.",
          d: "Struktur sosial adalah bentuk organisasi, bukan etos.",
        },
      },
    },
    {
      id: "subject-q13",
      text: "Manakah antara berikut bukan elemen etos bangsa menurut Tun Mahathir?",
      options: [
        {
          id: "a",
          text: "Pengalaman sejarah bersama",
        },
        {
          id: "b",
          text: "Identiti kaum yang terpisah",
        },
        {
          id: "c",
          text: "Kesetiaan kepada negara",
        },
        {
          id: "d",
          text: "Perasaan destinasi bersama",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Tun Mahathir menekankan identiti bersama yang merentasi batas etnik, bukan identiti kaum yang terpisah.",
        incorrect: {
          a: "Ini adalah elemen etos bangsa menurut Tun Mahathir.",
          c: "Ini adalah elemen etos bangsa menurut Tun Mahathir.",
          d: "Ini adalah elemen etos bangsa menurut Tun Mahathir.",
        },
      },
    },
    {
      id: "subject-q14",
      text: "Apakah peranan Perlembagaan Malaysia dalam pembinaan negara bangsa?",
      options: [
        {
          id: "a",
          text: "Menetapkan bahasa Cina sebagai bahasa rasmi",
        },
        {
          id: "b",
          text: "Mengiktiraf hanya satu etnik",
        },
        {
          id: "c",
          text: "Menjadi pasak integrasi pelbagai kaum",
        },
        {
          id: "d",
          text: "Menolak pengaruh Barat",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Perlembagaan Malaysia berperanan sebagai pasak integrasi dengan mengimbangi kepentingan semua kaum.",
        incorrect: {
          a: "Bahasa kebangsaan ialah Bahasa Melayu, bukan Cina.",
          b: "Perlembagaan mengiktiraf kepelbagaian etnik.",
          d: "Perlembagaan menerima pengaruh Barat dalam beberapa aspek.",
        },
      },
    },
    {
      id: "subject-q15",
      text: "Apakah maksud 'kewarganegaraan'?",
      options: [
        {
          id: "a",
          text: "Keturunan etnik tertentu",
        },
        {
          id: "b",
          text: "Kedudukan sah seseorang dalam negara",
        },
        {
          id: "c",
          text: "Pengiktirafan antarabangsa",
        },
        {
          id: "d",
          text: "Hak istimewa Bumiputera",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Kewarganegaraan merujuk kepada kedudukan sah yang mengikat individu dengan negara, memberikan hak dan perlindungan.",
        incorrect: {
          a: "Kewarganegaraan bukan berdasarkan keturunan semata-mata.",
          c: "Pengiktirafan antarabangsa adalah berbeza dengan kewarganegaraan.",
          d: "Hak istimewa Bumiputera adalah perkara perlembagaan, bukan definisi kewarganegaraan.",
        },
      },
    },
    {
      id: "subject-q16",
      text: "Manakah berikut merupakan ciri masyarakat pasca-2000 di Malaysia?",
      options: [
        {
          id: "a",
          text: "Batas etnik yang tebal",
        },
        {
          id: "b",
          text: "Hubungan sosial menegak",
        },
        {
          id: "c",
          text: "Kerencaman sosial dan hubungan horizontal",
        },
        {
          id: "d",
          text: "Pengasingan etnik",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Masyarakat pasca-2000 dicirikan oleh kerencaman sosial, batas etnik yang nipis, dan hubungan horizontal.",
        incorrect: {
          a: "Batas etnik menjadi semakin nipis, bukan tebal.",
          b: "Hubungan sosial menjadi lebih horizontal, bukan menegak.",
          d: "Pengasingan etnik berkurangan akibat integrasi.",
        },
      },
    },
    {
      id: "subject-q17",
      text: "Siapakah yang menyatakan 'negara adalah produk perjuangan kelas'?",
      options: [
        {
          id: "a",
          text: "Max Weber",
        },
        {
          id: "b",
          text: "Karl Marx",
        },
        {
          id: "c",
          text: "Anthony Giddens",
        },
        {
          id: "d",
          text: "Benedict Anderson",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Karl Marx melihat negara sebagai produk kontradiksi dan perjuangan kelas.",
        incorrect: {
          a: "Max Weber mentakrifkan negara sebagai monopoli keganasan sah.",
          c: "Anthony Giddens melihat negara sebagai organisasi politik.",
          d: "Benedict Anderson memperkenalkan 'imagined community'.",
        },
      },
    },
    {
      id: "subject-q18",
      text: "Apakah impak globalisasi terhadap peradaban Malaysia?",
      options: [
        {
          id: "a",
          text: "Menghapuskan kepelbagaian budaya",
        },
        {
          id: "b",
          text: "Memperkukuh peradaban tempatan sahaja",
        },
        {
          id: "c",
          text: "Mewujudkan kacukan peradaban tanpa sempadan",
        },
        {
          id: "d",
          text: "Mengurangkan pengaruh Barat",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Globalisasi membawa kepada kacukan pelbagai peradaban melalui jaringan digital tanpa sempadan.",
        incorrect: {
          a: "Globalisasi meningkatkan kepelbagaian, bukan menghapuskannya.",
          b: "Globalisasi menerima pengaruh luar, bukan hanya tempatan.",
          d: "Globalisasi mungkin meningkatkan pengaruh Barat dalam beberapa aspek.",
        },
      },
    },
    {
      id: "subject-q19",
      text: "Mengapakah Malaysia dianggap sebagai 'negara tanpa bangsa'?",
      options: [
        {
          id: "a",
          text: "Tiada penduduk tetap",
        },
        {
          id: "b",
          text: "Tiada identiti nasional bersama",
        },
        {
          id: "c",
          text: "Kependudukan pelbagai etnik dengan identiti berbeza",
        },
        {
          id: "d",
          text: "Tidak diiktiraf antarabangsa",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Malaysia mempunyai penduduk pelbagai etnik yang mengekalkan identiti masing-masing, menjadikan pembentukan satu bangsa sukar.",
        incorrect: {
          a: "Malaysia mempunyai penduduk tetap yang besar.",
          b: "Identiti nasional wujud tetapi masih dalam pembangunan.",
          d: "Malaysia diiktiraf antarabangsa sebagai negara berdaulat.",
        },
      },
    },
    {
      id: "subject-q20",
      text: "Apakah konsep 'Daulah Islamiah' yang diperjuangkan oleh PAS?",
      options: [
        {
          id: "a",
          text: "Negara sekular",
        },
        {
          id: "b",
          text: "Negara berasaskan Islam",
        },
        {
          id: "c",
          text: "Negara multietnik",
        },
        {
          id: "d",
          text: "Negara monarchi",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "'Daulah Islamiah' merujuk kepada pembentukan negara berasaskan hukum dan prinsip Islam :cite[3].",
        incorrect: {
          a: "PAS menentang negara sekular.",
          c: "PAS fokus pada Islam, bukan multietnik.",
          d: "Monarki adalah sistem pemerintahan, bukan matlamat utama PAS.",
        },
      },
    },
    {
      id: "subject-q21",
      text: "Manakah antara berikut bukan institusi utama dalam pembinaan negara?",
      options: [
        {
          id: "a",
          text: "Sistem birokrasi",
        },
        {
          id: "b",
          text: "Pelan Pembangunan Lima Tahun",
        },
        {
          id: "c",
          text: "Pilihan raya",
        },
        {
          id: "d",
          text: "Sistem kelas feudal",
        },
      ],
      correctOptionId: "d",
      explanation: {
        correct:
          "Sistem kelas feudal bukan institusi moden pembinaan negara; ia sistem lama yang ditentang dalam pembentukan negara bangsa.",
        incorrect: {
          a: "Sistem birokrasi adalah institusi utama dalam pentadbiran negara.",
          b: "Pelan Pembangunan Lima Tahun adalah alat pembangunan negara.",
          c: "Pilihan raya adalah mekanisme demokrasi dalam pembinaan negara.",
        },
      },
    },
    {
      id: "subject-q22",
      text: "Apakah yang dimaksudkan dengan 'hegemoni politik' dalam konteks negara bangsa?",
      options: [
        {
          id: "a",
          text: "Penguasaan oleh satu kumpulan etnik",
        },
        {
          id: "b",
          text: "Perkongsian kuasa sama rata",
        },
        {
          id: "c",
          text: "Pemerintahan oleh raja",
        },
        {
          id: "d",
          text: "Sistem demokrasi langsung",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Hegemoni politik merujuk kepada penguasaan dan pengiktirafan satu kumpulan etnik tertentu dalam pemerintahan.",
        incorrect: {
          a: "Ini adalah jawapan yang betul.",
          b: "Hegemoni politik tidak melibatkan perkongsian kuasa sama rata.",
          c: "Pemerintahan oleh raja adalah sistem monarki, bukan hegemoni politik.",
          d: "Demokrasi langsung adalah sistem pengundian, bukan hegemoni.",
        },
      },
    },
    {
      id: "subject-q23",
      text: "Bagaimana Perlembagaan Malaysia mengiktiraf kedudukan Bumiputera?",
      options: [
        {
          id: "a",
          text: "Melalui Akta 153",
        },
        {
          id: "b",
          text: "Melalui bahasa kebangsaan",
        },
        {
          id: "c",
          text: "Melalui agama rasmi",
        },
        {
          id: "d",
          text: "Melalui sistem pendidikan",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Akta 153 (Perkara 153) Perlembagaan Malaysia menjamin kedudukan istimewa Bumiputera.",
        incorrect: {
          a: "Ini adalah jawapan yang betul.",
          b: "Bahasa kebangsaan mengiktiraf Bahasa Melayu, tetapi bukan kedudukan Bumiputera secara langsung.",
          c: "Agama rasmi mengiktiraf Islam, tetapi bukan kedudukan Bumiputera.",
          d: "Sistem pendidikan mempunyai dasar affirmatif, tetapi bukan asas perlembagaan.",
        },
      },
    },
    {
      id: "subject-q24",
      text: "Apakah yang dimaksudkan dengan 'transformasi sosial' dalam konteks Malaysia?",
      options: [
        {
          id: "a",
          text: "Perubahan daripada masyarakat pertanian kepada perindustrian",
        },
        {
          id: "b",
          text: "Pengukuhan sistem feudal",
        },
        {
          id: "c",
          text: "Penyingkiran migran",
        },
        {
          id: "d",
          text: "Pemansuhan dasar affirmatif",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Transformasi sosial merujuk kepada perubahan daripada masyarakat pertanian sara hidup kepada komersial-industri, serta urbanisasi.",
        incorrect: {
          a: "Ini adalah jawapan yang betul.",
          b: "Sistem feudal telah dihapuskan, bukan dikukuhkan.",
          c: "Migran adalah sebahagian daripada masyarakat Malaysia.",
          d: "Dasar affirmatif masih diterapkan dalam beberapa bentuk.",
        },
      },
    },
    {
      id: "subject-q25",
      text: "Siapakah yang memperkenalkan konsep 'nation of intent'?",
      options: [
        {
          id: "a",
          text: "Benedict Anderson",
        },
        {
          id: "b",
          text: "Shamsul Amri Baharuddin",
        },
        {
          id: "c",
          text: "Abdul Rahman Embong",
        },
        {
          id: "d",
          text: "Mansor Mohd Noor",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Shamsul Amri Baharuddin memperkenalkan konsep 'nation of intent' untuk menjelaskan contestation bangsa dalam negara.",
        incorrect: {
          a: "Benedict Anderson memperkenalkan 'imagined community'.",
          c: "Abdul Rahman Embong menulis tentang negara bangsa.",
          d: "Mansor Mohd Noor menulis tentang etos bangsa.",
        },
      },
    },
    {
      id: "subject-q26",
      text: "Mengapakah pembinaan bangsa di Malaysia dianggap mencabar?",
      options: [
        {
          id: "a",
          text: "Ketiadaan wilayah",
        },
        {
          id: "b",
          text: "Kepelbagaian etnik dan sejarah",
        },
        {
          id: "c",
          text: "Kurangnya sumber semula jadi",
        },
        {
          id: "d",
          text: "Tekanan antarabangsa",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Kepelbagaian etnik, budaya, dan sejarah menjadikan usaha membina satu bangsa yang bersatu sangat mencabar.",
        incorrect: {
          a: "Malaysia mempunyai wilayah yang jelas.",
          b: "Ini adalah jawapan yang betul.",
          c: "Malaysia kaya dengan sumber semula jadi.",
          d: "Tekanan antarabangsa bukan faktor utama.",
        },
      },
    },
    {
      id: "subject-q27",
      text: "Apakah peranan media sosial dalam era globalisasi?",
      options: [
        {
          id: "a",
          text: "Mengukuhkan sempadan negara",
        },
        {
          id: "b",
          text: "Mempercepatkan interaksi peradaban",
        },
        {
          id: "c",
          text: "Menghapuskan kepelbagaian budaya",
        },
        {
          id: "d",
          text: "Mengurangkan pengaruh Barat",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Media sosial memudahkan interaksi dan jaringan peradaban merentasi sempadan melalui platform digital.",
        incorrect: {
          a: "Media sosial melangkaui sempadan, bukan mengukuhkannya.",
          b: "Ini adalah jawapan yang betul.",
          c: "Media sosial mungkin meningkatkan pendedahan kepada kepelbagaian.",
          d: "Media sosial mungkin meningkatkan pengaruh Barat.",
        },
      },
    },
    {
      id: "subject-q28",
      text: "Manakah antara berikut bukan nilai politik yang ditekankan dalam pembinaan negara bangsa?",
      options: [
        {
          id: "a",
          text: "Amanah dan integriti",
        },
        {
          id: "b",
          text: "Keadilan",
        },
        {
          id: "c",
          text: "Diskriminasi",
        },
        {
          id: "d",
          text: "Ketelusan",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Diskriminasi bukan nilai politik yang ditekankan; sebaliknya, keadilan, amanah, dan ketelusan dipromosikan.",
        incorrect: {
          a: "Amanah dan integriti adalah nilai politik penting.",
          b: "Keadilan adalah nilai politik penting.",
          c: "Ini adalah jawapan yang betul.",
          d: "Ketelusan adalah nilai politik penting.",
        },
      },
    },
    {
      id: "subject-q29",
      text: "Apakah maksud 'kerencaman sosial'?",
      options: [
        {
          id: "a",
          text: "Pengasingan etnik",
        },
        {
          id: "b",
          text: "Kepelbagaian hubungan sosial rentas etnik",
        },
        {
          id: "c",
          text: "Dominasi satu budaya",
        },
        {
          id: "d",
          text: "Penolakan terhadap modeniti",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Kerencaman sosial merujuk kepada kepelbagaian dan hubungan horizontal yang merentasi batas etnik dan agama.",
        incorrect: {
          a: "Kerencaman sosial mengurangkan pengasingan.",
          b: "Ini adalah jawapan yang betul.",
          c: "Kerencaman sosial menerima kepelbagaian, bukan dominasi satu budaya.",
          d: "Kerencaman sosial mungkin berkait dengan modeniti.",
        },
      },
    },
    {
      id: "subject-q30",
      text: "Bilakah Malaysia dibentuk?",
      options: [
        {
          id: "a",
          text: "31 Ogos 1957",
        },
        {
          id: "b",
          text: "16 September 1963",
        },
        {
          id: "c",
          text: "31 Ogos 1963",
        },
        {
          id: "d",
          text: "16 September 1957",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Malaysia dibentuk pada 16 September 1963 dengan penyertaan Sabah, Sarawak, dan Singapura :cite[2]:cite[5].",
        incorrect: {
          a: "31 Ogos 1957 adalah tarikh kemerdekaan Persekutuan Tanah Melayu.",
          b: "Ini adalah jawapan yang betul.",
          c: "31 Ogos 1963 tidak signifikan dalam sejarah Malaysia.",
          d: "16 September 1957 tidak signifikan.",
        },
      },
    },
    {
      id: "subject-q31",
      text: "Apakah yang dimaksudkan dengan 'imagined political community'?",
      options: [
        {
          id: "a",
          text: "Komuniti tanpa sempadan",
        },
        {
          id: "b",
          text: "Bangsa yang dibayangkan sebagai komuniti politik",
        },
        {
          id: "c",
          text: "Negara tanpa kerajaan",
        },
        {
          id: "d",
          text: "Komuniti berasaskan keturunan",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Konsep 'imagined political community' oleh Benedict Anderson merujuk kepada bangsa yang dibayangkan sebagai komuniti politik yang bersatu.",
        incorrect: {
          a: "Komuniti tanpa sempadan adalah konsep globalisasi.",
          b: "Ini adalah jawapan yang betul.",
          c: "Negara tanpa kerajaan adalah mustahil.",
          d: "Komuniti berasaskan keturunan adalah etnik, bukan imagined community.",
        },
      },
    },
    {
      id: "subject-q32",
      text: "Manakah antara berikut bukan ciri negara bangsa Eropah?",
      options: [
        {
          id: "a",
          text: "Penentangan terhadap feudal",
        },
        {
          id: "b",
          text: "Pembentukan sistem kapitalis",
        },
        {
          id: "c",
          text: "Penguasaan oleh migran",
        },
        {
          id: "d",
          text: "Sempadan dan wilayah tertentu",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Negara bangsa Eropah terbentuk melalui penentangan feudal dan kapitalis, bukannya penguasaan migran.",
        incorrect: {
          a: "Penentangan feudal adalah ciri negara bangsa Eropah.",
          b: "Pembentukan sistem kapitalis adalah ciri negara bangsa Eropah.",
          c: "Ini adalah jawapan yang betul.",
          d: "Sempadan dan wilayah tertentu adalah ciri negara bangsa.",
        },
      },
    },
    {
      id: "subject-q33",
      text: "Apakah yang menjadi teras peradaban majmuk Malaysia?",
      options: [
        {
          id: "a",
          text: "Peradaban Cina",
        },
        {
          id: "b",
          text: "Peradaban Melayu",
        },
        {
          id: "c",
          text: "Peradaban India",
        },
        {
          id: "d",
          text: "Peradaban Barat",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Peradaban Melayu menjadi teras kepada peradaban majmuk Malaysia.",
        incorrect: {
          a: "Peradaban Cina adalah pengaruh, bukan teras.",
          b: "Ini adalah jawapan yang betul.",
          c: "Peradaban India adalah pengaruh, bukan teras.",
          d: "Peradaban Barat adalah pengaruh, bukan teras.",
        },
      },
    },
    {
      id: "subject-q34",
      text: "Siapakah yang mentakrifkan bangsa sebagai 'komuniti terbesar yang percaya mereka berkongsi hubungan wilayah dan keturunan'?",
      options: [
        {
          id: "a",
          text: "Penrose",
        },
        {
          id: "b",
          text: "Weber",
        },
        {
          id: "c",
          text: "Marx",
        },
        {
          id: "d",
          text: "Giddens",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Penrose mendefinisikan bangsa sebagai komuniti terbesar yang percaya mereka berkongsi hubungan wilayah dan keturunan.",
        incorrect: {
          a: "Ini adalah jawapan yang betul.",
          b: "Weber mentakrifkan negara, bukan bangsa.",
          c: "Marx fokus pada kelas, bukan bangsa.",
          d: "Giddens mentakrifkan negara.",
        },
      },
    },
    {
      id: "subject-q35",
      text: "Mengapakah konsep 'Sabah for Sabahan' wujud?",
      options: [
        {
          id: "a",
          text: "Tekanan daripada kerajaan pusat",
        },
        {
          id: "b",
          text: "Tuntutan autonomi dan identiti tempatan",
        },
        {
          id: "c",
          text: "Pengaruh penjajah",
        },
        {
          id: "d",
          text: "Dasar assimilasi",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Konsep 'Sabah for Sabahan' wujud akibat tuntutan autonomi dan pengukuhan identiti tempatan.",
        incorrect: {
          a: "Ia lahir dari tuntutan tempatan, bukan tekanan pusat.",
          b: "Ini adalah jawapan yang betul.",
          c: "Pengaruh penjajah tidak langsung menyebabkan konsep ini.",
          d: "Dasar assimilasi mungkin ditentang, tetapi bukan punca langsung.",
        },
      },
    },
    {
      id: "subject-q36",
      text: "Apakah elemen utama etos simbolisme bangsa?",
      options: [
        {
          id: "a",
          text: "Ekonomi dan politik",
        },
        {
          id: "b",
          text: "Warisan etno-simbolisme seperti bendera, bahasa, dan budaya",
        },
        {
          id: "c",
          text: "Teknologi dan modeniti",
        },
        {
          id: "d",
          text: "Dasar kerajaan",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Etos simbolisme bangsa merangkumi warisan seperti bendera, bahasa, pakaian, dan budaya yang menjadi asas identiti bangsa.",
        incorrect: {
          a: "Ekonomi dan politik adalah aspek praktikal, bukan simbolik.",
          b: "Ini adalah jawapan yang betul.",
          c: "Teknologi dan modeniti adalah moden, bukan tradisi simbolik.",
          d: "Dasar kerajaan adalah alat, bukan warisan simbolik.",
        },
      },
    },
    {
      id: "subject-q37",
      text: "Bagaimana pembangunan ekonomi mempengaruhi pembinaan bangsa?",
      options: [
        {
          id: "a",
          text: "Mempercepatkan assimilasi",
        },
        {
          id: "b",
          text: "Mewujudkan kelas menengah dan transformasi sosial",
        },
        {
          id: "c",
          text: "Menyebabkan pengasingan etnik",
        },
        {
          id: "d",
          text: "Mengukuhkan sistem feudal",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Pembangunan ekonomi membawa kepada transformasi sosial, kelahiran kelas menengah, dan urbanisasi, yang menyumbang kepada pembinaan bangsa.",
        incorrect: {
          a: "Pembangunan ekonomi mungkin meningkatkan integrasi, bukan assimilasi.",
          b: "Ini adalah jawapan yang betul.",
          c: "Pembangunan ekonomi mungkin mengurangkan pengasingan.",
          d: "Sistem feudal telah dihapuskan.",
        },
      },
    },
    {
      id: "subject-q38",
      text: "Apakah yang dimaksudkan dengan 'state without nation'?",
      options: [
        {
          id: "a",
          text: "Negara tanpa penduduk",
        },
        {
          id: "b",
          text: "Negara dengan bangsa yang tidak diiktiraf",
        },
        {
          id: "c",
          text: "Negara dengan identiti bangsa yang tidak jelas",
        },
        {
          id: "d",
          text: "Negara tanpa kerajaan",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "'State without nation' merujuk kepada negara yang diiktiraf kedaulatannya tetapi tidak mempunyai identiti bangsa yang jelas.",
        incorrect: {
          a: "Negara tanpa penduduk adalah mustahil.",
          b: "Bangsa yang tidak diiktiraf adalah nation without state.",
          c: "Ini adalah jawapan yang betul.",
          d: "Negara tanpa kerajaan adalah mustahil.",
        },
      },
    },
    {
      id: "subject-q39",
      text: "Manakah antara berikut merupakan contoh 'nation without state'?",
      options: [
        {
          id: "a",
          text: "Jepun",
        },
        {
          id: "b",
          text: "Jerman",
        },
        {
          id: "c",
          text: "Bangsa Kurdi",
        },
        {
          id: "d",
          text: "Malaysia",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Bangsa Kurdi ialah contoh 'nation without state' kerana mereka mempunyai identiti bangsa tetapi tidak mempunyai negara berdaulat.",
        incorrect: {
          a: "Jepun adalah negara bangsa.",
          b: "Jerman adalah negara bangsa.",
          c: "Ini adalah jawapan yang betul.",
          d: "Malaysia adalah state dengan multiple nations.",
        },
      },
    },
    {
      id: "subject-q40",
      text: "Apakah matlamat akhir pembinaan peradaban acuan Malaysia?",
      options: [
        {
          id: "a",
          text: "Menjadi negara settler",
        },
        {
          id: "b",
          text: "Membentuk etno-nation dengan etika sivik",
        },
        {
          id: "c",
          text: "Menolak pengaruh globalisasi",
        },
        {
          id: "d",
          text: "Mengasingkan etnik",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Matlamatnya ialah membentuk etno-nation yang digabungkan dengan etika sivik, demokrasi, dan pembangunan inklusif.",
        incorrect: {
          a: "Malaysia bukan settler nation.",
          b: "Ini adalah jawapan yang betul.",
          c: "Globalisasi diterima sebagai sebahagian daripada peradaban.",
          d: "Pengasingan etnik bercanggah dengan matlamat integrasi.",
        },
      },
    },
  ],
};
