/**
 * EduBot AI - Smart Pedagogical Study Engine
 * Pure Client-Side JavaScript
 * 
 * Personifikasi: GURU YANG HANGAT, CERDAS, SABAR, NYAMBUNG, DAN PEDULI PADA MURIDNYA.
 * 
 * Keunggulan:
 * 1. JAWABAN SELALU NYAMBUNG & TEPAT SASARAN (Context-Aware):
 *    - Menjawab persis apa yang ditanyakan murid, BUKAN jawaban asal atau kata-kata filosofis mengambang.
 *    - Mampu merespon teguran/kritik murid jika jawaban sebelumnya melenceng ("kok ga nyambung?", "kamu gila ya?") dengan rendah hati dan meluruskan kembali.
 * 2. Membedakan 25+ jenis intensi percakapan:
 *    - Obrolan santai, perkenalan ("halo, ini kevin"), izin tanya ("mau nanya dong"), ping/tes ("tes 123"), pembuat bot, kritik AI, rasa bingung/pusing, afirmasi ("oke", "sip"), dsb.
 * 3. Ensiklopedia Luas Guru (40+ Topik Faktual & Konseptual Sains, Fisika, Biologi, Kimia, Matematika, IT, Sejarah, PPKn, dan Tips Belajar).
 * 4. Pencocokan Modul Belajar yang Ketat & Akurat (Mencegah salah sambung ke modul yang tidak relevan).
 * 5. Menghubungkan Konteks Obrolan Sebelumnya (Follow-up memory: "bisa lebih simpel?", "contoh lain?", "kenapa begitu?").
 * 6. Integrasi Online Google Gemini Live LLM (jika API key disediakan di pengaturan).
 */

// Indonesian Stopwords
const ID_STOPWORDS = new Set([
  'ada', 'adalah', 'adanya', 'adapun', 'agak', 'agar', 'akan', 'akankah', 'akhir', 'akhiri', 'akhirnya',
  'aku', 'akulah', 'amat', 'amatlah', 'anda', 'andalah', 'antar', 'antara', 'antaranya', 'apa', 'apaan',
  'apabila', 'apakah', 'apalagi', 'apatah', 'artinya', 'asal', 'asalkan', 'atas', 'atau', 'ataukah',
  'ataupun', 'awal', 'awalnya', 'bagai', 'bagaikan', 'bagaimana', 'bagaimanakah', 'bagaimanapun',
  'bagi', 'bagian', 'bahkan', 'bahwa', 'bahwasanya', 'baik', 'bakal', 'bakalan', 'balik', 'banyak',
  'bapak', 'beberapa', 'begini', 'beginian', 'beginikah', 'beginilah', 'begitu', 'begitukah', 'begitulah',
  'begitupun', 'bekerja', 'belakang', 'belakangan', 'belum', 'belumlah', 'benar', 'benarkah', 'benarlah',
  'berada', 'berakhir', 'berakhirlah', 'berakhirnya', 'berapa', 'berapakah', 'berapalah', 'berapapun',
  'berarti', 'berawal', 'berbagai', 'berdatangan', 'beri', 'berikan', 'berikut', 'berikutnya', 'berjumlah',
  'berkenaan', 'berlainan', 'berlalu', 'berlangsung', 'berlebihan', 'bermacam', 'bermaksud', 'bermula',
  'bersama', 'bersiap', 'bertanya', 'berturut', 'bertutur', 'berujar', 'berupa', 'besar', 'betul', 'betulkah',
  'biasa', 'biasanya', 'bila', 'bilakah', 'bisa', 'bisakah', 'boleh', 'bolehkah', 'bolehlah', 'buat',
  'bukan', 'bukankah', 'bukanlah', 'bukannya', 'cuma', 'cukup', 'cukupkah', 'cukuplah', 'dan', 'dapat',
  'dari', 'daripada', 'dekat', 'demi', 'demikian', 'demikianlah', 'dengan', 'depan', 'di', 'dia',
  'diakhiri', 'diakhirinya', 'dialah', 'diantara', 'diantaranya', 'diberi', 'diberikan', 'diberikannya',
  'dibuat', 'dibuatnya', 'didapat', 'didatangkan', 'digunakan', 'diibaratkan', 'diibaratkannya',
  'diingat', 'diingatkan', 'diinginkan', 'dijawab', 'dijelaskan', 'dijelaskannya', 'dikarenakan',
  'dikatakan', 'dikatakannya', 'dikerjakan', 'diketahui', 'diketahuinya', 'dikira', 'dilakukan',
  'dilalui', 'dilihat', 'dimaksud', 'dimaksudkan', 'dimaksudkannya', 'dimaksudnya', 'diminta',
  'dimintai', 'dimisalkan', 'dimulai', 'dimulailah', 'dimulainya', 'dimungkinkan', 'dini', 'dipastikan',
  'diperbuat', 'diperbuatnya', 'dipergunakan', 'diperkirakan', 'diperlihatkan', 'diperlukan',
  'diperlukannya', 'dipersoalkan', 'dipertanyakan', 'dipunyai', 'diri', 'dirinya', 'disampaikan',
  'disebut', 'disebutkan', 'disebutkannya', 'disini', 'disinilah', 'disitulah', 'ditambahkan',
  'ditandaskan', 'ditanya', 'ditanyai', 'ditanyakan', 'ditegaskan', 'ditemukan', 'ditentukan',
  'ditentukannya', 'dituturkan', 'dituturkannya', 'diucapkan', 'diucapkannya', 'diungkapkan', 'dong',
  'dulu', 'empat', 'enggak', 'enggaknya', 'entah', 'entahlah', 'hal', 'hampir', 'hanya', 'hanyalah',
  'hari', 'harus', 'haruslah', 'harusnya', 'hendak', 'hendaklah', 'hendaknya', 'hingga', 'ia', 'ialah',
  'ibarat', 'ibaratkan', 'ibaratnya', 'ibu', 'ikut', 'ingat', 'ingat-ingat', 'ingin', 'inginkah',
  'inginkan', 'ini', 'inikah', 'inilah', 'itu', 'itukah', 'itulah', 'jadi', 'jadilah', 'jadinya',
  'jangan', 'jangankan', 'janganlah', 'jauh', 'jawab', 'jawaban', 'jawabnya', 'jelas', 'jelaskan',
  'jelaslah', 'jelasnya', 'jika', 'jikalau', 'juga', 'jumlah', 'jumlahnya', 'justru', 'kala', 'kalau',
  'kalaulah', 'kalaupun', 'kalian', 'kami', 'kamilah', 'kamu', 'kamulah', 'kan', 'kapan', 'kapankah',
  'kapanpun', 'karena', 'karenanya', 'kasus', 'kata', 'katakan', 'katakanlah', 'katanya', 'ke',
  'keadaan', 'kebetulan', 'kecil', 'kedua', 'keduanya', 'keinginan', 'kelenjar', 'kelihatan',
  'kelihatannya', 'kelima', 'keluar', 'kembali', 'kemudian', 'kemungkinan', 'kemungkinannya', 'kenapa',
  'kepada', 'kepadanya', 'kesampaian', 'keseluruhan', 'keseluruhannya', 'keterlaluan', 'ketika',
  'khususnya', 'kini', 'kinilah', 'kira', 'kira-kira', 'kiranya', 'kita', 'kitalah', 'kok', 'kurang',
  'lagi', 'lagian', 'lah', 'lain', 'lainnya', 'lalu', 'lama', 'lamanya', 'lanjut', 'lanjutnya', 'lebih',
  'lewat', 'lima', 'luar', 'macam', 'maka', 'makanya', 'makin', 'malah', 'malahan', 'mampu', 'mampukah',
  'mana', 'manakala', 'manalagi', 'masa', 'masalah', 'masalahnya', 'masih', 'masihkah', 'masing',
  'masing-masing', 'mau', 'maupun', 'melainkan', 'melakukan', 'melalui', 'melihat', 'melihatnya',
  'memang', 'memastikan', 'memberi', 'memberikan', 'membuat', 'memerlukan', 'memihak', 'meminta',
  'memintakan', 'memisalkan', 'memperbuat', 'mempergunakan', 'memperkirakan', 'memperlihatkan',
  'mempersiapkan', 'mempersoalkan', 'mempertanyakan', 'mempunyai', 'memulai', 'memungkinkan', 'menaiki',
  'menandaskan', 'menanti', 'menantikan', 'menanya', 'menanyai', 'menanyakan', 'mendapat', 'mendapatkan',
  'mendatang', 'mendatangi', 'mendatangkan', 'menegaskan', 'mengakhiri', 'mengapa', 'mengatakan',
  'mengatakannya', 'mengenai', 'mengerjakan', 'mengetahui', 'menggunakan', 'menghendaki', 'mengibaratkan',
  'mengibaratkannya', 'mengingat', 'mengingatkan', 'menginginkan', 'mengira', 'mengucapkan',
  'mengucapkannya', 'mengungkapkan', 'menjadi', 'menjawab', 'menuju', 'menunjuk', 'menunjuki',
  'menunjukkan', 'menunjuknya', 'menurut', 'menurutnya', 'menyampaikan', 'menyangkut', 'menyatakan',
  'menyebutkan', 'menyeluruh', 'menyiapkan', 'merasa', 'mereka', 'merekalah', 'merupakan', 'meski',
  'meskipun', 'meyakini', 'meyakinkan', 'minta', 'mirip', 'misal', 'misalkan', 'misalnya', 'mula',
  'mulai', 'mulailah', 'mulanya', 'mungkin', 'mungkinkah', 'nah', 'naik', 'namun', 'nanti', 'nantinya',
  'nyaris', 'nyatanya', 'oleh', 'olehnya', 'orang', 'pada', 'padahal', 'padanya', 'pak', 'paling',
  'panjang', 'pantas', 'para', 'pasti', 'pastilah', 'penting', 'pentingnya', 'per', 'para', 'pernah',
  'persoalan', 'pertama', 'pertama-tama', 'pertanyaan', 'pertanyakan', 'pihak', 'pihaknya', 'pukul',
  'pula', 'pun', 'punya', 'rasa', 'rasanya', 'rata', 'rupanya', 'saat', 'saatnya', 'saja', 'sajalah',
  'saling', 'sama', 'sama-sama', 'sambil', 'sampai', 'sampai-sampai', 'sampaikan', 'sana', 'sangat',
  'sangatlah', 'satu', 'saya', 'sayalah', 'se', 'sebab', 'sebabnya', 'sebagai', 'sebagaimana',
  'sebagainya', 'sebagian', 'sebaik', 'sebaik-baiknya', 'sebaiknya', 'sebaliknya', 'sebanyak',
  'sebegini', 'sebegitu', 'sebelum', 'sebelumnya', 'sebenarnya', 'seberapa', 'sebesar', 'sebetulnya',
  'sebisanya', 'sebuah', 'sebut', 'sebutlah', 'sebutnya', 'secara', 'secukupnya', 'sedang', 'sedangkan',
  'sedemikian', 'sedikit', 'sedikitnya', 'seenaknya', 'segala', 'segalanya', 'segera', 'seharusnya',
  'sehingga', 'seingat', 'sejak', 'sejauh', 'sejenak', 'sejumlah', 'sekadar', 'sekadarnya', 'sekali',
  'sekalian', 'sekaligus', 'sekalipun', 'sekarang', 'sekaranglah', 'sekecil', 'seketika', 'sekiranya',
  'sekitar', 'sekitarnya', 'sekurang-kurangnya', 'sekurangnya', 'sela', 'selain', 'selalu', 'selama',
  'selamanya', 'selanjutnya', 'seluruh', 'seluruhnya', 'semacam', 'semakin', 'semampu', 'semampunya',
  'semasa', 'semasih', 'semata', 'semata-mata', 'semaunya', 'sementara', 'semisal', 'semisalnya',
  'sempat', 'semua', 'semuanya', 'semula', 'sendiri', 'sendirian', 'sendirinya', 'seolah', 'seolah-olah',
  'seorang', 'sepanjang', 'sepantasnya', 'sepantasnyalah', 'seperlunya', 'seperti', 'sepertinya',
  'sepihak', 'sering', 'seringnya', 'serta', 'serupa', 'sesaat', 'sesama', 'sesampai', 'sesegera',
  'sesekali', 'seseorang', 'sesuatu', 'sesuatunya', 'sesudah', 'sesudahnya', 'setelah', 'setempat',
  'setengah', 'seterusnya', 'setiap', 'setiba', 'setibanya', 'setidak-tidaknya', 'setidaknya',
  'setinggi', 'seusai', 'sewaktu', 'siap', 'siapa', 'siapakah', 'siapapun', 'sini', 'sinilah',
  'soal', 'soalnya', 'suatu', 'sudah', 'sudahkah', 'sudahlah', 'supaya', 'tadi', 'tadinya', 'tahu',
  'tahun', 'tak', 'tambah', 'tambahnya', 'tampak', 'tampaknya', 'tandas', 'tandasnya', 'tanpa',
  'tanya', 'tanyakan', 'tanyanya', 'tapi', 'tegas', 'tegasnya', 'telah', 'tempat', 'tengah', 'tentang',
  'tentu', 'tentulah', 'tentunya', 'tepat', 'terakhir', 'terasa', 'terbanyak', 'terdahulu', 'terdapat',
  'terdiri', 'terhadap', 'terhadapnya', 'teringat', 'teringat-ingat', 'terjadi', 'terjadilah',
  'terjadinya', 'terkira', 'terlalu', 'terlebih', 'terlihat', 'termasuk', 'ternyata', 'tersampaikan',
  'tersebut', 'tersebutlah', 'tertentu', 'tertuju', 'terus', 'terutama', 'tetap', 'tetapi', 'tiap',
  'tiba', 'tiba-tiba', 'tidak', 'tidakkah', 'tidaklah', 'tidaknya', 'toh', 'waduh', 'wah', 'wahai',
  'waktu', 'waktunya', 'walau', 'walaupun', 'wong', 'yaitu', 'yakin', 'yakni', 'yang'
]);

// Kata Tanya 5W+1H & Perintah Umum yang Harus Diabaikan Saat Pencocokan Topik Modul
const QUERY_COMMAND_WORDS = new Set([
  // 5W + 1H (What, Who, When, Where, Why, How, How Many)
  'apa', 'apakah', 'apaan', 'apatah', 'apa-apa',
  'siapa', 'siapakah', 'siapapun',
  'kapan', 'kapankah', 'bilamana',
  'dimana', 'dimanakah', 'kemana', 'kemanakah', 'darimana', 'darimanakah',
  'kenapa', 'kenapakah', 'mengapa', 'mengapakah',
  'bagaimana', 'bagaimanakah', 'gimana', 'gimanakah',
  'berapa', 'berapakah', 'seberapa',
  // Kata Perintah Tanya & Instruksi Penjelasan
  'jelaskan', 'jelaskanlah', 'terangkan', 'terangkanlah', 'uraikan', 'uraikanlah',
  'jabarkan', 'jabarkanlah', 'paparkan', 'paparkanlah', 'sebutkan', 'sebutkanlah',
  'tunjukkan', 'tunjukkanlah', 'ceritakan', 'ceritakanlah', 'deskripsikan', 'kemukakan',
  'elaborasikan', 'tuliskan', 'bandingkan', 'bedakan', 'hitung', 'hitunglah', 'simpulkan',
  'contoh', 'contohnya', 'misal', 'misalnya',
  // Istilah Struktur Pertanyaan & Pembuka
  'maksud', 'arti', 'pengertian', 'definisi', 'hakikat', 'fungsi', 'manfaat', 'kegunaan',
  'materi', 'modul', 'bab', 'bagian', 'halaman', 'topik',
  'tentang', 'mengenai', 'soal', 'kuis', 'latihan', 'bantu', 'tolong', 'coba', 'dong', 'sih',
  'nanya', 'tanya', 'bertanya', 'kak', 'guru', 'pak', 'bu', 'edubot', 'bot',
  // Kata Perintah Gaya Bahasa, Format, & Anti Copy-Paste
  'perintah', 'instruksi', 'suruh', 'copy', 'paste', 'copas', 'jiplak', 'salin',
  'bahasa', 'santai', 'gaul', 'kaku', 'simpel', 'sederhana', 'singkat', 'padat',
  'pendek', 'panjang', 'detail', 'cerita', 'dongeng', 'analogi', 'perumpamaan',
  'ibarat', 'poin', 'butir', 'sendiri', 'katamu', 'kata-katamu', 'kamu',
  'seperti', 'anak', 'kehidupan', 'nyata', 'sehari-hari', 'tanpa', 'jangan'
]);

// Ensiklopedia Fakta & Konsep Guru yang Nyambung & Tepat Sasaran
const TEACHER_KNOWLEDGE = [
  // 1. FENOMENA ALAM & SAINS BUMI
  {
    patterns: [/(kenapa|mengapa).*langit.*(biru|warna biru)/i, /penyebab.*langit.*biru/i],
    title: 'Mengapa Langit Berwarna Biru?',
    teach: (user) => `Nah ${user}, ini pertanyaan sains klasik yang sangat menarik!

Cahaya matahari yang tampak putih sebenarnya gabungan dari semua warna pelangi. Masing-masing warna punya panjang gelombang berbeda: merah paling panjang, sedangkan biru dan ungu paling pendek.

Ketika cahaya matahari menembus atmosfer Bumi, cahaya bertabrakan dengan molekul gas di udara. Terjadilah fenomena fisika bernama **Hamburan Rayleigh (*Rayleigh Scattering*)**:
Cahaya dengan panjang gelombang pendek—yaitu **warna biru**—dihamburkan ke segala arah jauh lebih kuat daripada warna merah atau kuning. Karena cahaya biru terhambur merata di langit, mata kita melihat kubah langit siang tampak biru cerah!`
  },
  {
    patterns: [/(kenapa|mengapa).*pelangi/i, /bagaimana.*terjadinya.*pelangi/i, /proses.*pelangi/i],
    title: 'Bagaimana Pelangi Terjadi?',
    teach: (user) => `Pelangi terjadi karena peristiwa optik pembiasan cahaya, ${user}!

Syarat terjadinya pelangi ada dua: ada **sinar matahari** dan ada **butiran air hujan** di udara yang membelakangi matahari.

Prosesnya berlangsung dalam 3 langkah optik:
1. **Pembiasan (Refraksi):** Cahaya matahari masuk ke butiran tetesan air hujan dan dibelokkan.
2. **Penguraian (Dispersi):** Karena setiap warna dibelokkan dengan sudut sedikit berbeda, cahaya putih terurai menjadi spektrum: merah, jingga, kuning, hijau, biru, nila, ungu (Me-Ji-Ku-Hi-Bi-Ni-U).
3. **Pemantulan (Refleksi):** Cahaya memantul di dinding belakang tetesan air, lalu keluar kembali ke udara membentuk busur lengkung warna-warni yang indah di hadapan kita!`
  },
  {
    patterns: [/(kenapa|mengapa).*air.*(dan|sama).*minyak.*(tidak|ga|nggak|tak).*menyatu/i],
    title: 'Mengapa Air dan Minyak Tidak Bisa Menyatu?',
    teach: (user) => `Pertanyaan kimia sehari-hari yang seru, ${user}!

Alasan air dan minyak tidak bisa bercampur ada dua faktor:
1. **Perbedaan Kepolaran Molekul:** Air adalah molekul **polar** (punya kutub muatan positif dan negatif seperti magnet), sehingga molekul air sangat suka menempel erat dengan sesama molekul air. Sedangkan minyak adalah molekul **non-polar** (tidak punya kutub muatan). Karena sifatnya berbeda, molekul air lebih memilih saling berikatan satu sama lain dan "mendesak" minyak keluar.
2. **Massa Jenis (Kerapatan):** Minyak lebih ringan (massa jenisnya lebih kecil) daripada air, itu sebabnya minyak selalu mengapung di atas air.`
  },
  {
    patterns: [/(kenapa|mengapa).*laut.*(asin|garam)/i],
    title: 'Mengapa Air Laut Rasanya Asin?',
    teach: (user) => `Rasa asin air laut berasal dari proses alam selama miliaran tahun, ${user}!

Begini alur ceritanya:
1. Air hujan sedikit bersifat asam karena menyerap karbon dioksida di atmosfer. Air hujan ini mengikis bebatuan di daratan dan melarutkan mineral garam (terutama ion Natrium dan Klorida).
2. Aliran sungai membawa mineral garam ini mengalir terus menuju laut.
3. Saat air laut dipanaskan matahari dan menguap membentuk awan, **hanya air murninya yang menguap**. Garam dan mineralnya tertinggal di laut!
Karena proses ini berlangsung terus selama miliaran tahun, garam terakumulasi semakin pekat hingga air laut menjadi sangat asin seperti sekarang.`
  },
  {
    patterns: [/(kenapa|mengapa).*kilat.*(duluan|lebih cepat).*petir|guntur/i, /kilat.*suara.*guntur/i],
    title: 'Mengapa Kilat Terlihat Lebih Dulu daripada Suara Petir?',
    teach: (user) => `Penyebabnya murni karena perbedaan kecepatan tempuh antara **cahaya** dan **suara**, ${user}!

- Cahaya kilat melesat dengan kecepatan super fantastis: sekitar **300.000.000 meter per detik** (300.000 km/s).
- Sedangkan gelombang suara guntur merambat di udara jauh lebih lambat: hanya sekitar **340 meter per detik**.

Karena kilatan cahaya melesat jutaan kali lebih cepat daripada suara, mata kita melihat kilatnya hampir seketika, baru beberapa detik kemudian gelombang suara petir yang tertinggal sampai di telinga kita!`
  },
  {
    patterns: [/(kenapa|mengapa).*es.*mengapung/i, /anomali\s+air/i],
    title: 'Mengapa Es Mengapung di Atas Air?',
    teach: (user) => `Umumnya di alam, benda padat selalu lebih berat dan tenggelam di cairan sejenisnya. Tapi air punya keajaiban fisika bernama **Anomali Air**, ${user}!

Ketika air membeku menjadi es (pada suhu di bawah 4°C), molekul-molekul air justru membentuk struktur kristal kisi heksagonal yang berongga. 

Rongga udara mikro ini membuat volume es membesar, sehingga **massa jenis (kerapatan) es menjadi lebih ringan sekitar 9% dibandingkan air cair**. Karena lebih ringan, es mengapung ke atas! Keajaiban ini penting bagi alam: saat musim dingin dan danau membeku, hanya lapisan atasnya yang jadi es, sementara air di dasarnya tetap cair sehingga ikan dan makhluk air tetap hidup.`
  },
  {
    patterns: [/(kenapa|mengapa).*daun.*(hijau|warna hijau)/i, /fotosintesis/i, /klorofil/i],
    title: 'Mengapa Daun Berwarna Hijau & Apa Itu Fotosintesis?',
    teach: (user) => `Daun berwarna hijau karena mengandung pigmen khusus bernama **Klorofil** (zat hijau daun), ${user}!

Fungsi utama klorofil adalah menyerap energi cahaya matahari untuk proses **Fotosintesis**:
- Klorofil sangat rakus menyerap cahaya gelombang merah dan biru dari matahari.
- Sebaliknya, cahaya gelombang hijau **tidak diserap melainkan dipantulkan kembali**, sehingga mata kita melihat daun berwarna hijau segar!

Rumus reaksi fotosintesis:
> \`6 CO₂ (Karbon Dioksida) + 6 H₂O (Air) + Cahaya Matahari → C₆H₁₂O₆ (Glukosa) + 6 O₂ (Oksigen)\`
Dari proses inilah tumbuhan menghasilkan makanan untuk dirinya sendiri sekaligus menyediakan oksigen bagi manusia dan hewan untuk bernapas!`
  },
  {
    patterns: [/(kenapa|mengapa).*bumi.*bulat/i, /bentuk.*bumi/i],
    title: 'Mengapa Bumi Berbentuk Bulat?',
    teach: (user) => `Bumi berbentuk bulat karena pengaruh gaya **Gravitasi**, ${user}!

Ketika sebuah planet memiliki massa yang sangat masif seperti Bumi:
Gaya gravitasi menarik semua materi dari segala arah secara seimbang menuju ke titik pusat massanya. Bentuk geometris tiga dimensi yang paling efisien di mana semua titik permukaannya berjarak sama dari pusat massa adalah **bola (*sphere*)**.

Bumi tidak bulat sempurna seperti kelereng, melainkan sedikit pepat di kedua kutub dan menggelembung di khatulistiwa (*oblate spheroid*) akibat gaya sentrifugal dari putaran rotasi bumi itu sendiri.`
  },
  {
    patterns: [/(kenapa|mengapa).*siang.*(dan|sama).*malam/i, /terjadinya.*siang.*malam/i, /rotasi\s+bumi/i],
    title: 'Mengapa Ada Siang dan Malam?',
    teach: (user) => `Terjadinya pergantian siang dan malam adalah akibat dari **Rotasi Bumi**, yaitu perputaran Bumi pada porosnya sendiri, ${user}!

Bumi membutuhkan waktu sekitar 24 jam untuk melakukan satu kali putaran penuh:
- Bagian permukaan Bumi yang sedang menghadap ke arah matahari akan bermandikan cahaya matahari dan mengalami waktu **Siang**.
- Sebaliknya, bagian permukaan Bumi yang sedang membelakangi matahari berada dalam bayang-bayang dan mengalami waktu **Malam**.
Karena Bumi terus berputar dari barat ke timur tanpa henti, kita di permukaan mengalami pergantian siang dan malam secara teratur setiap hari!`
  },
  {
    patterns: [/(kenapa|mengapa).*ada.*musim/i, /pergantian.*musim/i, /revolusi\s+bumi/i],
    title: 'Mengapa Ada Pergantian Musim di Bumi?',
    teach: (user) => `Pergantian musim di Bumi terjadi karena kombinasi dari dua hal, ${user}:
1. **Revolusi Bumi:** Gerakan Bumi mengitari Matahari dalam orbitnya selama 365¼ hari (1 tahun).
2. **Kemiringan Poros Bumi:** Sumbu putar Bumi tidak tegak lurus, melainkan miring sebesar **23,5 derajat**.

Akibat kemiringan ini:
Saat belahan bumi utara condong ke arah matahari, wilayah utara menerima sinar matahari lebih intens dan mengalami **musim panas**, sementara belahan bumi selatan mengalami **musim dingin**. Enam bulan kemudian posisinya terbalik. Sementara wilayah khatulistiwa (seperti Indonesia) selalu mendapat sinar matahari stabil sepanjang tahun, sehingga hanya memiliki 2 musim: hujan dan kemarau.`
  },
  {
    patterns: [/(gerhana\s+matahari|gerhana\s+bulan)/i],
    title: 'Bagaimana Gerhana Matahari & Gerhana Bulan Terjadi?',
    teach: (user) => `Gerhana terjadi ketika posisi Matahari, Bulan, dan Bumi berada dalam satu garis lurus yang sejajar, ${user}!

Ada dua jenis gerhana:
1. **Gerhana Matahari (Matahari - Bulan - Bumi):**
   Bulan berada persis di tengah-tengah antara Matahari dan Bumi. Akibatnya, bayangan Bulan jatuh ke permukaan Bumi dan menutupi cahaya Matahari di siang hari untuk beberapa menit.
2. **Gerhana Bulan (Matahari - Bumi - Bulan):**
   Bumi berada di tengah-tengah antara Matahari dan Bulan. Cahaya Matahari yang seharusnya menerangi Bulan purnama terhalang oleh Bumi, sehingga Bulan masuk ke dalam bayangan gelap Bumi (*umbra*).`
  },
  {
    patterns: [/(kenapa|mengapa).*gempa|tsunami/i, /penyebab.*gempa\s+bumi/i],
    title: 'Mengapa Terjadi Gempa Bumi dan Tsunami?',
    teach: (user) => `Gempa bumi terjadi karena kerak Bumi kita tidak utuh satu lempeng padat, melainkan terpecah menjadi lempeng-lempeng raksasa (*lempeng tektonik*) yang terus bergerak perlahan di atas mantel cair, ${user}.

Ketika dua lempeng saling bertabrakan atau bergesekan, energi tekanan menumpuk di batas patahan (*sesar*). Saat batuan tidak sanggup lagi menahan tekanan, batuan patah mendadak dan melepaskan energi getaran dahsyat yang merambat ke segala arah sebagai **gelombang gempa**.

Jika patahan gempa bumi terjadi di dasar laut dan mengangkat dasar laut secara vertikal, volume air laut yang sangat besar terdorong tiba-tiba hingga memicu gelombang laut raksasa berkecepatan tinggi bernama **Tsunami**!`
  },

  // 2. FISIKA & RUMUS HUKUM ALAM
  {
    patterns: [/(apa\s+itu\s+gravitasi|hukum\s+gravitasi|gaya\s+gravitasi)/i],
    title: 'Apa Itu Gaya Gravitasi?',
    teach: (user) => `Secara sederhana, **Gravitasi** adalah gaya tarik-menarik alami tak kasat mata yang dimiliki oleh semua benda yang mempunyai massa di alam semesta, ${user}!

Konsep kuncinya:
- Semakin besar massa suatu benda, semakin kuat gaya tarik gravitasinya.
- Semakin dekat jarak dua benda, gaya gravitasinya semakin berlipat ganda.

Bumi punya massa yang luar biasa besar (sekitar 6 × 10²⁴ kg), sehingga Bumi menarik tubuh kita, pohon, mobil, dan atmosfer ke bawah menuju pusatnya. Itu sebabnya saat kamu melompat, kamu pasti jatuh kembali ke tanah!
Rumus gravitasi Newton: \`F = G · (m₁ · m₂) / r²\``
  },
  {
    patterns: [/(hukum\s+newton|newton\s+1|newton\s+2|newton\s+3)/i],
    title: 'Hukum Gerak Newton (I, II, dan III)',
    teach: (user) => `Tiga Hukum Gerak Newton adalah pondasi dasar mekanika fisika yang dicetuskan oleh Sir Isaac Newton, ${user}!

1. **Hukum I Newton (Kelembaman / Inersia):**
   *Benda cenderung mempertahankan keadaannya.* Kalau benda diam, dia ingin tetap diam. Kalau bergerak lurus, dia ingin terus bergerak lurus, kecuali ada gaya luar yang memaksanya berubah (\`ΣF = 0\`).
   *Contoh:* Tubuhmu terdorong ke depan saat mobil direm mendadak.
2. **Hukum II Newton (Percepatan):**
   *Gaya sama dengan massa dikali percepatan (\`F = m · a\`)*. Makin berat suatu benda, makin butuh gaya dorong besar untuk mempercepatnya.
3. **Hukum III Newton (Aksi - Reaksi):**
   *Setiap aksi menimbulkan reaksi yang sama besar tapi berlawanan arah (\`F_aksi = -F_reaksi\`)*.
   *Contoh:* Roket menyemburkan gas panas ke bawah, dan semburan itu mendorong roket melesat naik ke angkasa!`
  },
  {
    patterns: [/(kenapa|mengapa).*kapal.*(besi|baja).*mengapung/i, /hukum\s+archimedes/i],
    title: 'Mengapa Kapal Besi yang Berat Bisa Mengapung di Laut?',
    teach: (user) => `Besi biasa memang tenggelam di air, tapi kapal laut baja bisa mengapung berkat **Hukum Archimedes**, ${user}!

Hukum Archimedes menyatakan:
*Suatu benda yang dicelupkan ke cairan akan menerima gaya angkat ke atas sebesar berat cairan yang dipindahkan oleh benda tersebut.*

Rahasianya ada pada **desain lambung kapal**:
Bagian dalam lambung kapal dibuat sangat besar dan berongga berisi udara. Udara sangat ringan, sehingga rata-rata massa jenis keseluruhan kapal (besi + udara di dalamnya) menjadi **jauh lebih kecil daripada massa jenis air laut**. Karena volume air yang didesak kapal menghasilkan gaya angkat ke atas yang sama dengan berat kapal, kapal terapung dengan kokoh!`
  },
  {
    patterns: [/(kenapa|mengapa).*besi.*berkarat/i, /korosi/i],
    title: 'Mengapa Besi Bisa Berkarat (Korosi)?',
    teach: (user) => `Karat pada besi adalah hasil dari reaksi kimia alami bernama **Oksidasi**, ${user}!

Besi ($Fe$) sangat mudah bereaksi jika bersentuhan langsung dengan dua zat sekaligus:
1. **Oksigen ($O_2$)** di udara.
2. **Air atau uap air lembap ($H_2O$)**.

Ketika besi, air, dan oksigen bertemu, atom besi melepaskan elektron dan membentuk senyawa kimia baru bernama *Besi(III) Oksida Terhidrasi* (\`Fe₂O₃ · xH₂O\`), yang kita kenal sebagai karat berwarna cokelat kemerahan yang rapuh. Itu sebabnya pagar atau perkakas besi biasanya dilapisi cat atau minyak agar tidak bersentuhan langsung dengan udara dan air!`
  },
  {
    patterns: [/(kenapa|mengapa).*magnet.*(menempel|tarik)/i, /sifat\s+magnet/i],
    title: 'Mengapa Magnet Bisa Menarik Benda Logam?',
    teach: (user) => `Magnet punya kekuatan menarik logam tertentu (seperti besi, nikel, dan kobalt) karena susunan **spin elektron** di dalam atomnya, ${user}!

Pada benda biasa, arah perputaran elektronnya acak sehingga medan magnet mikro saling meniadakan. Tapi pada bahan magnet, medan atom-atomnya berbaris searah dan kompak membentuk kutub magnet.

Aturan emas magnet:
- **Kutub berlawanan tarik-menarik:** Kutub Utara ($N$) dan Kutub Selatan ($S$) akan saling menempel kuat.
- **Kutub senama tolak-menolak:** Kutub Utara didekatkan Kutub Utara akan saling mendorong menjauh.`
  },
  {
    patterns: [/(apa\s+itu\s+asam\s+dan\s+basa|skala\s+ph)/i],
    title: 'Apa Itu Asam dan Basa serta Skala pH?',
    teach: (user) => `Dalam kimia, larutan dibagi berdasarkan sifat keasamannya menggunakan skala **pH (0 hingga 14)**, ${user}:

1. **Zat Asam (pH < 7):**
   Rasanya masam, melepaskan ion hidrogen ($H^+$) dalam air, dan mengubah lakmus biru menjadi merah.
   *Contoh:* Air perasan jeruk nipis, cuka makan, asam lambung ($HCl$).
2. **Zat Netral (pH = 7):**
   Tidak asam dan tidak basa.
   *Contoh:* Air murni ($H_2O$).
3. **Zat Basa / Alkali (pH > 7):**
   Rasanya pahit, terasa licin di kulit, melepaskan ion hidroksida ($OH^-$), dan mengubah lakmus merah menjadi biru.
   *Contoh:* Sabun mandi, deterjen, pasta gigi, obat maag.`
  },

  // 3. BIOLOGI & KESEHATAN
  {
    patterns: [/(kenapa|mengapa).*darah.*merah/i],
    title: 'Mengapa Darah Manusia Berwarna Merah?',
    teach: (user) => `Darah kita berwarna merah karena sel darah merah mengandung protein pengangkut oksigen bernama **Hemoglobin**, ${user}.

Di tengah molekul hemoglobin terdapat atom **Zat Besi ($Fe$)**. Ketika zat besi mengikat oksigen yang kita hirup dari paru-paru, ikatan kimiawi ini memantulkan spektrum cahaya merah cerah ke mata kita.

Itu sebabnya darah kaya oksigen berwarna merah cerah, sedangkan darah yang telah menyerahkan oksigen ke jaringan tubuh tampak merah gelap.`
  },
  {
    patterns: [/(kenapa|mengapa).*ikan.*bisa.*bernapas.*(di|dalam).*air/i, /fungsi\s+insang/i],
    title: 'Mengapa Ikan Bisa Bernapas di Dalam Air?',
    teach: (user) => `Ikan bisa bernapas di dalam air karena memiliki organ pernapasan khusus bernama **Insang**, ${user}!

Cara kerjanya sangat menakjubkan:
1. Ikan membuka mulutnya untuk memasukkan air, lalu menutup mulut dan menekan air keluar melewati celah insang.
2. Di dalam insang terdapat ribuan lembaran filamen merah yang sangat halus dan dipenuhi pembuluh darah kapiler.
3. Saat air melewati filamen insang, oksigen yang terlarut di dalam air langsung berdifusi masuk ke dalam darah ikan, sementara gas sisa karbon dioksida dibuang ke air.`
  },
  {
    patterns: [/(kenapa|mengapa).*kita.*(mengantuk|ngantuk|menguap)/i],
    title: 'Mengapa Kita Mengantuk dan Menguap?',
    teach: (user) => `Rasa kantuk diatur secara alami oleh dua mekanisme utama tubuh, ${user}:
1. **Zat Adenosin:** Saat otakmu aktif berpikir dan belajar sepanjang hari, sel otak membakar energi dan menghasilkan zat sisa bernama **adenosin**. Semakin lama kamu beraktivitas, adenosin menumpuk di reseptor otak dan memicu rasa kantuk yang berat.
2. **Hormon Melatonin:** Saat hari mulai malam dan suasana gelap, kelenjar pineal di otak memproduksi hormon melatonin yang memberi sinyal agar seluruh organ tubuh bersiap tidur dan memperbaiki sel.

Sedangkan **menguap** adalah refleks alami untuk meregangkan otot rahang, memompa sirkulasi darah sejenak, dan membantu mendinginkan suhu otak agar tetap waspada.`
  },
  {
    patterns: [/(kenapa|mengapa).*demam/i, /fungsi.*demam/i],
    title: 'Mengapa Tubuh Kita Bisa Demam?',
    teach: (user) => `Demam sebenarnya adalah pertahanan gagah berani sistem kekebalan tubuhmu, ${user}!

Ketika virus atau bakteri masuk ke tubuh, sel darah putih melepaskan zat sinyal bernama *pirogen*. Zat ini melapor ke pengatur suhu tubuh di otak (*hipotalamus*) untuk menaikkan suhu tubuh (misal jadi 38°C–39°C).

Tujuannya sangat strategis:
1. Suhu panas membuat bakteri dan virus sulit membelah diri karena kuman sensitif terhadap suhu tinggi.
2. Suhu yang lebih hangat memacu sel-sel kekebalan tubuh bekerja lebih lincah dan cepat untuk menumpas infeksi tersebut!`
  },
  {
    patterns: [/(beda|perbedaan).*virus.*(dan|sama).*bakteri/i],
    title: 'Perbedaan Virus dan Bakteri',
    teach: (user) => `Meski sama-sama kuman mikroorganisme penyebab penyakit, virus dan bakteri sangat berbeda secara biologis, ${user}:

1. **Bakteri (Makhluk Hidup Mandiri):**
   - Merupakan sel hidup tunggal (*organisme uniseluler*) lengkap dengan dinding sel, sitoplasma, dan organel.
   - Bisa hidup dan berkembang biak mandiri di tanah, air, atau permukaan benda.
   - Bisa diobati menggunakan **Antibiotik**.
2. **Virus (Bukan Sel Hidup Mandiri):**
   - Jauh lebih kecil (10 hingga 100 kali lebih kecil dari bakteri).
   - Hanya berupa seutas materi genetik (DNA/RNA) yang dibungkus cangkang protein (*kapsid*).
   - Tidak bisa hidup atau berkembang biak sendiri tanpa membajak sel inang hidup.
   - **TIDAK BISA disembuhkan dengan antibiotik**, melainkan dilawan oleh sistem imun tubuh atau vaksin.`
  },
  {
    patterns: [/(apa\s+itu\s+dna|apa\s+itu\s+rna|fungsi\s+dna)/i],
    title: 'Apa Itu DNA dan RNA?',
    teach: (user) => `Secara sederhana, **DNA (*Deoxyribonucleic Acid*)** adalah "buku resep manual" atau cetak biru genetik pembawa seluruh instruksi kehidupan di dalam setiap sel tubuh kita, ${user}!

- Bentuk DNA menyerupai tangga tali yang terpilin ganda (*double helix*). DNA menyimpan kode genetik yang menentukan warna mata, jenis rambut, golongan darah, hingga struktur organ tubuh kita yang diwariskan dari ayah dan ibu.
- Sedangkan **RNA (*Ribonucleic Acid*)** bertindak sebagai "juru masak atau kurir pesan" yang membaca kode resep dari DNA dan membawanya ke pabrik sel (*ribosom*) untuk memproduksi protein yang dibutuhkan tubuh!`
  },
  {
    patterns: [/(kenapa|mengapa).*dinosaurus.*punah/i, /kepunahan.*dinosaurus/i],
    title: 'Mengapa Dinosaurus Punah?',
    teach: (user) => `Dinosaurus punah sekitar 66 juta tahun yang lalu karena peristiwa bencana global yang dahsyat, ${user}!

Penyebab utamanya adalah **hantaman asteroid raksasa berdiameter sekitar 10 km** yang menabrak Bumi di Semenanjung Yucatan, Meksiko (dikenal sebagai Kawah Chicxulub).

Dampaknya:
1. Tabrakan tersebut memicu ledakan setara miliaran bom atom, tsunami raksasa, dan kebakaran hutan global.
2. Debu dan jelaga hitam pekat membubung tinggi ke atmosfer dan menutupi cahaya matahari selama bertahun-tahun (*musim dingin tumbukan*).
3. Tanpa sinar matahari, tumbuhan mati massal. Akibatnya dinosaurus herbivora kehabisan makanan, disusul dinosaurus karnivora. Sekitar 75% spesies di Bumi punah saat itu!`
  },

  // 4. MATEMATIKA & RUMUS
  {
    patterns: [/(pythagoras|pitagoras|teorema\s+pythagoras)/i],
    title: 'Teorema Pythagoras',
    teach: (user) => `Teorema Pythagoras adalah aturan emas untuk semua **segitiga siku-siku**, ${user}!

Rumusnya: \`c² = a² + b²\`
Di mana:
- **a** dan **b** adalah dua sisi tegak yang membentuk sudut siku-siku (90°).
- **c** adalah **sisi miring (hipotenusa)**, yaitu sisi terpanjang di depan sudut 90°.

Maknanya: Kuadrat panjang sisi miring sama persis dengan penjumlahan kuadrat kedua sisi tegaknya.
*Contoh cepat:* Jika sisi tegaknya 3 cm dan 4 cm:
\`c² = 3² + 4² = 9 + 16 = 25\` → \`c = √25 = 5 cm\`!`
  },
  {
    patterns: [/(persamaan\s+kuadrat|rumus\s+abc)/i],
    title: 'Persamaan Kuadrat & Rumus ABC',
    teach: (user) => `Bentuk umum persamaan kuadrat adalah \`a·x² + b·x + c = 0\` (dengan syarat \`a ≠ 0\`), ${user}.

Untuk mencari nilai **x** (akar-akar penyelesaiannya), cara paling ampuh adalah menggunakan **Rumus ABC**:
> \`x = (-b ± √(b² - 4ac)) / (2a)\`

Bagian \`D = b² - 4ac\` di dalam akar disebut **Diskriminan**:
- Kalau **D > 0**: persamaan punya 2 akar nyata berbeda.
- Kalau **D = 0**: persamaan punya 2 akar kembar yang sama persis.
- Kalau **D < 0**: tidak punya akar nyata (akarnya imajiner).`
  },
  {
    patterns: [/(luas|keliling).*lingkaran/i, /rumus.*lingkaran/i],
    title: 'Rumus Luas & Keliling Lingkaran',
    teach: (user) => `Untuk menghitung geometri bangun datar lingkaran, kuncinya ada pada jari-jari ($r$) atau diameter ($d = 2r$), ${user}:

1. **Luas Lingkaran ($L$):**
   \`L = π · r²\`
2. **Keliling Lingkaran ($K$):**
   \`K = 2 · π · r\` atau \`K = π · d\`

Nilai konstanta $\\pi$ (pi):
- Gunakan \`π = 22/7\` jika jari-jarinya merupakan kelipatan 7 (misal 7, 14, 21 cm).
- Gunakan \`π = 3,14\` untuk angka lainnya.`
  },

  // 5. TEKNOLOGI & INFORMATIKA
  {
    patterns: [/(apa\s+itu\s+ai|kecerdasan\s+buatan|artificial\s+intelligence|cara\s+kerja\s+ai)/i],
    title: 'Apa Itu AI (Kecerdasan Buatan)?',
    teach: (user) => `Secara sederhana, **AI (Artificial Intelligence)** adalah sistem komputer yang dirancang untuk meniru kemampuan kognitif dan cara belajar manusia, ${user}.

Bedanya dengan program biasa:
- Program biasa hanya menjalankan aturan kaku: *"Jika tombol diklik, tampilkan menu"*.
- Sedangkan AI dilatih menggunakan jutaan data (*machine learning*). Dari data tersebut, AI mengenali pola, memahami konteks bahasa manusia, mengenali wajah/objek, hingga memecahkan masalah baru yang belum pernah diajarkan secara eksplisit!`
  },
  {
    patterns: [/(perbedaan|beda).*frontend.*backend/i],
    title: 'Perbedaan Frontend vs Backend',
    teach: (user) => `Mari kita bayangkan pembuatan aplikasi web itu seperti sebuah restoran makan, ${user}:

1. **Frontend (Ruang Makan Restoran):** Segala hal yang dilihat, disentuh, dan dinikmati langsung oleh pengunjung—seperti desain menu, warna dinding, tata lampu, dan tombol interaksi. Di dunia web, frontend dibuat menggunakan **HTML, CSS, dan JavaScript**.
2. **Backend (Dapur Restoran):** Bagian tersembunyi di balik pintu dapur tempat koki mengolah bahan makanan, mengelola stok di gudang (*database*), dan memproses pesanan. Di dunia web, backend mengurus logika server, keamanan login, dan penyimpanan data menggunakan teknologi seperti **Node.js, Python, atau Database SQL**.`
  },
  {
    patterns: [/(apa\s+itu\s+algoritma|definisi\s+algoritma)/i],
    title: 'Apa Itu Algoritma?',
    teach: (user) => `Sederhananya, **Algoritma** adalah urutan langkah-langkah logis, teratur, dan sistematis yang disusun untuk memecahkan suatu masalah atau menyelesaikan suatu tugas, ${user}!

Bayangkan seperti **resep memasak mie instan**:
1. Rebus 400 ml air hingga mendidih.
2. Masukkan mie selama 3 menit.
3. Tuang bumbu ke dalam mangkok.
4. Tiriskan dan aduk rata.

Jika langkahnya tertukar (misal makan bumbu mentah sebelum air dimasak), hasilnya akan gagal! Dalam pemrograman komputer, algoritma adalah cetak biru instruksi yang harus dijalankan mesin langkah demi langkah secara efisien.`
  },

  // 6. SEJARAH & KEWARGANEGARAAN
  {
    patterns: [/(proklamasi|kemerdekaan\s+indonesia|17\s+agustus\s+1945)/i],
    title: 'Detik-Detik Proklamasi Kemerdekaan RI 1945',
    teach: (user) => `Proklamasi kemerdekaan kita pada **17 Agustus 1945** adalah buah dari keberanian para pejuang bangsa memanfaatkan momen emas kekosongan kekuasaan (*vacuum of power*), ${user}!

Kronologi kuncinya:
- Setelah Hiroshima dan Nagasaki dijatuhi bom atom oleh Sekutu pada 6 & 9 Agustus 1945, Jepang menyerah pada 15 Agustus 1945.
- Golongan Muda (Sukarni, Chaerul Saleh) mendesak Soekarno dan Hatta agar memproklamasikan kemerdekaan secepatnya tanpa campur tangan Jepang (melalui Peristiwa Rengasdengklok).
- Naskah proklamasi dirumuskan di rumah Laksamana Maeda pada malam 16 Agustus dan diketik oleh Sayuti Melik.
- Tepat pukul 10.00 WIB pagi hari Jumat, 17 Agustus 1945 di Pegangsaan Timur 56 Jakarta, Ir. Soekarno membacakan teks proklamasi didampingi Drs. Moh. Hatta dengan pengibaran Sang Saka Merah Putih jahitan Ibu Fatmawati!`
  },
  {
    patterns: [/(siapa\s+presiden\s+pertama|presiden\s+pertama\s+indonesia)/i],
    title: 'Siapa Presiden Pertama Indonesia?',
    teach: (user) => `Presiden pertama Republik Indonesia adalah **Ir. Soekarno** (Bung Karno), dengan Wakil Presiden pertama **Drs. Mohammad Hatta** (Bung Hatta), ${user}!

Keduanya dilantik secara resmi oleh Panitia Persiapan Kemerdekaan Indonesia (PPKI) pada tanggal **18 Agustus 1945**, sehari setelah pembacaan Teks Proklamasi Kemerdekaan. Pasangan ini dikenal sebagai Sang Dwi-Tunggal yang meletakkan pondasi kemerdekaan dan kedaulatan bangsa Indonesia.`
  },
  {
    patterns: [/(pancasila|5\s+sila|sila\s+pancasila)/i],
    title: 'Pancasila: Dasar Negara Indonesia',
    teach: (user) => `**Pancasila** adalah dasar negara dan falsafah hidup bangsa Indonesia yang dirumuskan untuk menyatukan keberagaman kita, ${user}.

Kelima silanya:
1. **Ketuhanan Yang Maha Esa** (Lambang: Bintang)
2. **Kemanusiaan yang Adil dan Beradab** (Lambang: Rantai Baja)
3. **Persatuan Indonesia** (Lambang: Pohon Beringin)
4. **Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan/Perwakilan** (Lambang: Kepala Banteng)
5. **Keadilan Sosial bagi Seluruh Rakyat Indonesia** (Lambang: Padi dan Kapas)`
  },
  {
    patterns: [/(apa\s+itu\s+inflasi|kenapa\s+ada\s+inflasi|definisi\s+inflasi)/i],
    title: 'Apa Itu Inflasi?',
    teach: (user) => `Nah ${user}, inflasi itu gampangnya adalah **kondisi saat harga barang-barang kebutuhan kita secara umum naik terus-menerus, sehingga nilai uang kita terasa menyusut**.

Bayangkan contoh nyatanya:
Sepuluh tahun lalu, uang Rp10.000 mungkin cukup untuk mentraktir dua mangkok bakso. Tapi hari ini, uang Rp10.000 yang sama mungkin cuma cukup untuk membeli setengah mangkok!

Bukan berarti satu barang naik harga (misal cabai naik karena musim hujan) langsung disebut inflasi ya. Disebut inflasi jika kenaikan harga itu meluas ke banyak barang dan berlangsung dalam jangka waktu tertentu.`
  },
  {
    patterns: [/(faktor|penyebab|kenapa).*inflasi/i, /demand\s*pull/i, /cost\s*push/i, /imported\s+inflation/i],
    title: 'Faktor-Faktor Penyebab Inflasi',
    teach: (user) => `Pertanyaan ekonomi yang sangat penting, ${user}! Ada 3 pemicu utama kenapa inflasi bisa terjadi:

1. **Tarikan Permintaan (*Demand-Pull Inflation*):**
   Bayangkan kondisi saat semua orang punya banyak uang dan berebut ingin membeli barang yang sama, padahal stok barang di pasar terbatas. Karena pembeli saling bersaing mendapatkan barang yang langka, penjual otomatis menaikkan harga!
2. **Dorongan Biaya Produksi (*Cost-Push Inflation*):**
   Ini dipicu dari sisi produsen atau pabrik. Misalnya saat harga bensin (BBM), tarif listrik, atau biaya bahan baku melonjak. Karena ongkos bikin barang jadi lebih mahal, pabrik terpaksa menaikkan harga jual produk ke konsumen agar tidak merugi.
3. **Inflasi Impor (*Imported Inflation*):**
   Inflasi yang "tertular" dari luar negeri. Kalau barang impor yang kita butuhkan harganya naik di pasar dunia (atau nilai tukar rupiah sedang melemah terhadap dollar), harga produk impor dan barang jadi di dalam negeri ikut terkerek naik.`
  },
  {
    patterns: [/(kebijakan|cara\s+mengatasi|solusi|mengendalikan).*inflasi/i, /kebijakan\s+(moneter|fiskal)/i, /operasi\s+pasar\s+terbuka|bi\s*rate/i],
    title: 'Bagaimana Cara Mengatasi Inflasi?',
    teach: (user) => `Untuk menjinakkan inflasi agar harga barang stabil kembali, negara punya 2 senjata utama, ${user}:

1. **Kebijakan Moneter (Dijalankan oleh Bank Sentral / Bank Indonesia):**
   - **Menaikkan Suku Bunga Acuan (BI-Rate):** Saat bunga bank dinaikkan, masyarakat jadi lebih tertarik menabung uangnya di bank daripada dibelanjakan. Akibatnya, jumlah uang yang beredar di pasar berkurang dan harga barang kembali stabil.
   - **Operasi Pasar Terbuka:** Bank Indonesia menjual surat berharga (seperti SBI) untuk menyerap kelebihan uang tunai dari masyarakat dan perbankan.
   - **Menaikkan Cadangan Kas Minimum Bank:** Mewajibkan bank umum menyimpan lebih banyak uang tunai di brankasnya, sehingga pinjaman/kredit yang disalurkan ke masyarakat mengerem.

2. **Kebijakan Fiskal (Dijalankan oleh Pemerintah):**
   - Menghemat dan mengefisiensikan belanja negara.
   - Mengatur kebijakan tarif pajak untuk mengontrol daya beli yang berlebihan.`
  },
  {
    patterns: [/(komponen\s+darah|fungsi\s+darah|sel\s+darah|eritrosit|leukosit|trombosit)/i],
    title: 'Komponen Darah Manusia & Fungsinya',
    teach: (user) => `Darah di tubuh kita itu bukan sekadar cairan merah biasa, ${user}, melainkan sebuah "tim logistik dan pertahanan" yang sangat teratur:

1. **Plasma Darah (±55%):** Cairan kekuningan yang bertugas sebagai pelarut utama, membawa sari makanan, hormon, dan zat sisa ke organ pembuangan.
2. **Sel Darah Merah (*Eritrosit*):** Berbentuk cakram cekung di kedua sisi (*bikonkaf*) dan kaya protein **Hemoglobin**. Tugas utamanya bertindak seperti "truk pengantar oksigen" dari paru-paru ke seluruh sel tubuh.
3. **Sel Darah Putih (*Leukosit*):** Pasukan tentara dan polisi tubuh kita yang sigap membasmi kuman, virus, dan bakteri penyakit.
4. **Keping Darah (*Trombosit*):** Tim medis darurat yang bertugas menutup dan membekukan darah saat kita terluka agar darah tidak terus mengucur keluar.`
  },
  {
    patterns: [/(organ\s+jantung|ruang\s+jantung|fungsi\s+jantung|bilik|serambi)/i],
    title: 'Cara Kerja 4 Ruang Jantung Manusia',
    teach: (user) => `Jantung kita bekerja seperti mesin pompa ganda 24 jam non-stop dengan 4 ruangan utama, ${user}:

- **Serambi Kanan (*Atrium Dextra*):** Menerima darah kotor yang kaya karbondioksida ($CO_2$) dari seluruh tubuh kita.
- **Bilik Kanan (*Ventrikel Dextra*):** Memompa darah kotor tadi menuju ke paru-paru agar dibersihkan dan diisi oksigen baru.
- **Serambi Kiri (*Atrium Sinistra*):** Menerima darah segar yang sudah kaya oksigen ($O_2$) dari paru-paru.
- **Bilik Kiri (*Ventrikel Sinistra*):** Ruangan dengan dinding otot paling tebal dan kuat, bertugas memompa darah segar beroksigen ke seluruh penjuru tubuh!`
  },
  {
    patterns: [/(aljabar|pindah\s+ruas|variabel\s+dan\s+koefisien)/i],
    title: 'Konsep Dasar Aljabar: Variabel & Keseimbangan',
    teach: (user) => `Kunci memahami aljabar itu sangat sederhana jika kita bayangkan seperti **timbangan neraca yang harus selalu seimbang**, ${user}!

- **Variabel (seperti $x$ atau $y$):** Hanyalah kotak misteri yang berisi angka yang belum kita ketahui nilainya.
- **Koefisien:** Angka pengali di depan variabel (misal pada $3x$, angka 3 adalah koefisien).
- **Aturan Pindah Ruas:** Sebenarnya bukan "pindah" secara ajaib, melainkan kedua sisi timbangan kita beri perlakuan yang sama agar tetap seimbang:
  - Kalau sisi kiri ditambah 5, sisi kanan juga harus ditambah 5.
  - Saat suatu suku menyeberangi tanda sama dengan ($=$), operasinya berbalik: penjumlahan jadi pengurangan, perkalian jadi pembagian!`
  },

  // 7. TIPS BELAJAR & PRODUKTIVITAS
  {
    patterns: [/(tips\s+belajar|cara\s+belajar\s+efektif|teknik\s+pomodoro|feynman)/i],
    title: 'Tips Belajar Efektif & Tidak Cepat Lupa',
    teach: (user) => `Ini dua metode belajar ilmiah paling ampuh yang selalu guru sarankan untuk murid, ${user}:

1. **Teknik Pomodoro (Manajemen Fokus):**
   - Belajar fokus penuh selama **25 menit** (matikan notifikasi HP).
   - Istirahat santai selama **5 menit** (minum air, renggangkan badan).
   - Setelah 4 siklus, ambil istirahat panjang 15–30 menit. Otakmu tidak akan cepat jenuh!
2. **Teknik Feynman (Uji Pemahaman Hakiki):**
   - Setelah membaca suatu konsep, coba jelaskan kembali konsep tersebut dengan bahasa sederhana seolah-olah kamu sedang mengajari adik kecil umur 8 tahun.
   - Jika kamu tersendat di bagian tertentu, buka kembali bukumu di bagian itu. Itulah bagian yang sebenarnya belum kamu kuasai!`
  }
];

class StudyEngine {
  /**
   * Suffix stemming
   */
  static stem(word) {
    if (word.length <= 3) return word;
    return word.replace(/(lah|kah|pun|nya|an|kan|i)$/, '');
  }

  /**
   * Tokenize text
   */
  static tokenize(text) {
    if (!text) return [];
    const ROMAN_NUMERALS = new Set(['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii', 'ix', 'x']);
    const rawWords = text
      .toLowerCase()
      .replace(/[^a-z0-9\s\-]/g, ' ')
      .split(/\s+/);

    const tokens = [];
    rawWords.forEach(w => {
      if (!w) return;
      if (ROMAN_NUMERALS.has(w) || /^\d+$/.test(w)) {
        tokens.push(w);
      } else if (w.length > 2 && !ID_STOPWORDS.has(w)) {
        tokens.push(w);
        const stemmed = this.stem(w);
        if (stemmed !== w && stemmed.length > 2 && !ID_STOPWORDS.has(stemmed)) {
          tokens.push(stemmed);
        }
      }
    });
    return tokens;
  }

  /**
   * Safe Arithmetic Calculation
   */
  static evaluateMath(text) {
    const clean = text.toLowerCase().trim();
    
    // Square root
    const sqrtMatch = clean.match(/(?:akar|akar\s+dari|sqrt)\s+(\d+(\.\d+)?)/i);
    if (sqrtMatch) {
      const val = parseFloat(sqrtMatch[1]);
      const res = Math.sqrt(val);
      return {
        query: `√${val}`,
        result: Number.isInteger(res) ? res : Number(res.toFixed(4))
      };
    }

    // Basic arithmetic
    const mathMatch = clean.match(/(?:berapa|hitung|hasil\s+dari)?\s*(\d+(?:\.\d+)?)\s*([\+\-\*\/xX:])\s*(\d+(?:\.\d+)?)/);
    if (mathMatch) {
      const a = parseFloat(mathMatch[1]);
      let op = mathMatch[2].toLowerCase();
      const b = parseFloat(mathMatch[3]);
      let res = 0;

      if (op === 'x' || op === '*') {
        res = a * b;
        op = '×';
      } else if (op === '/' || op === ':') {
        if (b === 0) return { query: `${a} / 0`, result: 'Tidak terdefinisi (pembagian dengan nol)' };
        res = a / b;
        op = '÷';
      } else if (op === '+') {
        res = a + b;
      } else if (op === '-') {
        res = a - b;
      }

      return {
        query: `${a} ${op} ${b}`,
        result: Number.isInteger(res) ? res : Number(res.toFixed(4))
      };
    }

    return null;
  }

  /**
   * Summary request check
   */
  static isSummaryRequest(text) {
    const clean = text.toLowerCase();
    const keywords = [
      'rangkum', 'rangkuman', 'ringkas', 'ringkasan', 'simpulkan', 'kesimpulan', 'summary', 'recap',
      'review materi', 'review materi belajar', 'review hasil belajar', 'review pembelajaran', 'review topik', 'buatkan review',
      'beri dan rangkum', 'beri rangkuman', 'minta rangkuman', 'minta tolong rangkum', 'ringkaskan'
    ];
    return keywords.some(k => clean.includes(k)) || /^(review|ulasan)[\s!.,?~]*$/i.test(clean);
  }

  /**
   * Deteksi apakah sebuah baris/teks merupakan label struktural modul
   * seperti TOPIK, BAB, MATERI PELAJARAN, SUB-BAB, BAGIAN, dll.
   */
  static isStructuralHeader(text) {
    if (!text || typeof text !== 'string') return false;
    const clean = text.replace(/^[=\-*_~#+\d\.\)\-\s:]+/, '').replace(/[:\s]+$/, '').trim();
    if (!clean) return false;
    const structuralRegex = /^(?:TOPIK|BAB|MATERI|PELAJARAN|MATA PELAJARAN|MAPEL|POKOK BAHASAN|BAGIAN|SUB-BAB|SUB TOPIK|SUBTEMA|TEMA|UNIT|KOMPETENSI|STANDAR KOMPETENSI|KOMPETENSI DASAR|TUJUAN PEMBELAJARAN|INDIKATOR|RINGKASAN|RANGKUMAN|DAFTAR ISI|JUDUL)(?:[\s:]|$)/i;
    if (structuralRegex.test(clean) || structuralRegex.test(text.trim())) return true;
    if (/^BAB\s+(?:[IVXLCDM]+|\d+)/i.test(clean) || /^BAB\s+(?:[IVXLCDM]+|\d+)/i.test(text.trim())) return true;
    if (/^TOPIK\s+(?:[A-Z]|\d+)/i.test(clean) || /^TOPIK\s+(?:[A-Z]|\d+)/i.test(text.trim())) return true;
    if (/^(?:MATERI|MATA|PELAJARAN)/i.test(clean) || /^(?:MATERI|MATA|PELAJARAN)/i.test(text.trim())) return true;
    return false;
  }

  /**
   * Quiz request check
   */
  static isQuizRequest(text) {
    const clean = text.toLowerCase();
    const keywords = ['kuis', 'soal', 'latihan', 'uji pemahaman', 'pertanyaan untuk saya', 'tes saya', 'beri soal'];
    return keywords.some(k => clean.includes(k));
  }

  /**
   * PEMBERSIH KONTEN MODUL
   * Menghilangkan garis pembatas dekoratif non-kata seperti '=====', '-----', '*****', dll.
   * Merapikan baris judul yang diapit hiasan simbol dekoratif.
   */
  static cleanModuleContent(content) {
    if (!content) return '';
    return content
      .split('\n')
      .map(line => {
        const trimmed = line.trim();
        // 1. Abaikan baris yang murni merupakan pembatas dekoratif (===, ---, ***, ___, ~~~, ###, +++)
        if (/^[=\-\*_~#+]{3,}$/.test(trimmed)) {
          return '';
        }
        // 2. Jika baris memuat teks tapi diapit dekorasi seperti '===== 1. Definisi Inflasi ====='
        if (/^[=\-\*_~#+]{2,}\s*.+\s*[=\-\*_~#+]{2,}$/.test(trimmed)) {
          return trimmed
            .replace(/^[=\-\*_~#+\s]+/, '')
            .replace(/[=\-\*_~#+\s]+$/, '')
            .trim();
        }
        return line;
      })
      .filter(line => line.trim().length > 0)
      .join('\n');
  }

  /**
   * EKSTRAKSI SUBJEK/TOPIK INTI DARI PERTANYAAN
   * Menghilangkan kata tanya 5W+1H, kata perintah, filler, dan tanda baca di awal/akhir kalimat.
   */
  static extractCoreTopic(query) {
    if (!query) return '';

    let text = query.trim();

    // 1. Buang tanda baca di akhir (? ! . , ~)
    text = text.replace(/[?!.,~]+$/g, '').trim();

    // 2. Buang frasa izin tanya dan sapaan di awal
    text = text.replace(/^(?:halo|hai|assalamualaikum|permisi|punten|bro|sis|kak|pak|bu|guru|edubot|bot)?\s*(?:(?:aku|saya|kami)?\s*(?:mau|ingin|pengen|izin|boleh)?\s*(?:nanya|tanya|bertanya)(?:\s+dong)?(?:\s+tentang|\s+soal|\s+mengenai)?\s*)/i, '').trim();

    // 3. Buang kata perintah penjelasan di awal ("tolong jelaskan", "coba sebutkan", "jelaskan tentang", dll.)
    text = text.replace(/^(?:tolong|coba|mohon|bisakah\s+(?:kamu)?|bisa)?\s*(?:jelaskan(?:\s+tentang|\s+mengenai)?|terangkan|uraikan|jabarkan|paparkan|sebutkan|tunjukkan|ceritakan|deskripsikan|kemukakan|berikan\s+contoh|kasih\s+contoh|contohkan)\s+/i, '').trim();

    // 4. Buang kata tanya 5W+1H di awal kalimat
    text = text.replace(/^(?:apakah\s+(?:yang\s+dimaksud\s+dengan|itu)?|apa\s+(?:itu|yang\s+dimaksud\s+dengan|arti|artinya|makna|pengertian|definisi|maksud\s+dari|maksudnya)?|siapakah|siapa\s+itu|siapa|kapan\s+terjadinya|kapankah|kapan|di\s*manakah|dimanakah|di\s*mana|dimana|ke\s*mana|kemana|dari\s*mana|darimana|mengapakah|mengapa\s+bisa|mengapa|kenapakah|kenapa\s+bisa|kenapa|kok\s+bisa|bagaimanakah\s+(?:cara|proses|alur|langkah|mekanisme|kerja)?|bagaimana\s+(?:cara\s+kerja|cara|proses|alur|langkah|mekanisme|kerja)?|gimanakah|gimana\s+(?:cara\s+kerja|cara|proses)?|berapakah|berapa)\s+/i, '').trim();

    // 5. Buang awalan aspek spesifik pertanyaan agar menyisakan subjek inti konsep
    // Contoh: "contoh dari pencernaan mekanis" -> "pencernaan mekanis"
    // Contoh: "fungsi lambung" -> "lambung"
    // Contoh: "perbedaan antara ikatan ion dan kovalen" -> "ikatan ion dan kovalen"
    text = text.replace(/^(?:contoh(?:nya)?|misal(?:nya)?|seperti\s+apa|fungsi(?:nya)?|kegunaan(?:nya)?|manfaat(?:nya)?|tujuan(?:nya)?|guna(?:nya)?|peran(?:nya)?|tugas(?:nya)?|proses(?:nya)?|cara\s+kerja(?:nya)?|mekanisme(?:nya)?|perbedaan\s+antara|perbedaan(?:nya)?|beda\s+antara|beda(?:nya)?|alasan(?:nya)?|sebab(?:nya)?|faktor(?:nya)?|penyebab(?:nya)?|organ|letak(?:nya)?|rumus(?:nya)?)\s+(?:dari\s+|pada\s+|tentang\s+|untuk\s+|dalam\s+)?/i, '').trim();

    // 6. Buang kata tanya yang berada di AKHIR kalimat (misal: "inflasi itu bagaimana?", "fotosintesis itu apa?", dll.)
    text = text.replace(/\s+(?:itu\s+)?(?:apa|apakah|apaan|siapa|kapan|dimana|di\s*mana|kenapa|mengapa|bagaimana|bagaimanakah|gimana|gimanakah|berapa|berapakah)$/i, '').trim();

    // 7. Buang filler di awal atau akhir seperti "itu", "tersebut", "ini", "sih", "dong", "ya"
    text = text.replace(/\s+(?:sih|dong|ya|kan|deh)$/i, '').trim();
    text = text.replace(/^(?:tentang|mengenai|soal|bab|materi)\s+/i, '').trim();
    text = text.replace(/^(?:itu|ini)\s+/i, '').trim();
    text = text.replace(/\s+(?:itu|ini|tersebut)$/i, '').trim();

    // 8. Jika hasil pembersihan terlalu pendek atau kosong, fallback ke teks asli tanpa tanda baca
    if (!text || text.length < 2) {
      text = query.replace(/[?!.,~]+/g, '').trim();
    }

    return text;
  }

  /**
   * DETEKSI & ANALISIS PERTANYAAN (5W + 1H & Perintah Penjelasan)
   * Mengidentifikasi apakah input pengguna adalah pertanyaan, menentukan tipe 5W+1H,
   * dan mengekstrak subjek pertanyaan secara presisi.
   */
  static analyzeQuestion(query) {
    if (!query) return { isQuestion: false, type: null, cleanSubject: '', hasQuestionMark: false, matchedKeywords: [] };

    const raw = query.trim();
    const clean = raw.toLowerCase();
    const hasQuestionMark = /[?]/.test(raw);

    const matchedKeywords = [];

    // Pola Spesifik 5W + 1H & Aspek Pertanyaan (Diperiksa dengan prioritas aspek tertinggi)
    const examplePattern = /\b(contoh|contohnya|misal|misalnya|seperti\s+apa|beri\s+contoh|berikan\s+contoh|kasih\s+contoh|sebutkan\s+contoh|apa\s+saja\s+contoh)\b/i;
    const comparePattern = /\b(beda|bedanya|perbedaan|perbedaannya|dibandingkan|perbandingan|versus|\bvs\b)\b/i;
    const functionPattern = /\b(fungsi|fungsinya|kegunaan|kegunaannya|manfaat|manfaatnya|tujuan|tujuannya|guna|gunanya|peran|perannya|tugas|tugasnya|berfungsi|buat\s+apa|untuk\s+apa)\b/i;
    const formulaPattern = /\b(rumus|rumusnya|formula|persamaan|hitung|hitunglah|perhitungan)\b/i;
    const locationPattern = /\b(di\s*mana|dimana|di\s*manakah|dimanakah|ke\s*mana|kemana|dari\s*mana|darimana|organ|bagian\s+mana|letak|letaknya|posisi|tempat)\b/i;
    const whoPattern = /\b(siapa|siapakah|siapapun|penemu|pencetus|tokoh|tokohnya|pelaku|pihak)\b/i;
    const whenPattern = /\b(kapan|kapankah|bilamana|sejak\s+kapan|sampai\s+kapan|waktu\s+terjadinya|tahun\s+berapa|tanggal\s+berapa)\b/i;
    const whyPattern = /\b(mengapa|mengapakah|kenapa|kenapakah|kenapa\s+bisa|mengapa\s+bisa|kok\s+bisa|alasan|alasannya|penyebab|faktor|faktornya|sebabnya|sebab)\b/i;
    const howPattern = /\b(bagaimana|bagaimanakah|gimana|gimanakah|cara\s+kerja|cara\s+mengatasi|mekanisme|mekanismenya|proses|prosesnya|alur|alurnya|langkah|langkahnya)\b/i;
    const howManyPattern = /\b(berapa|berapakah|berapa\s+banyak|berapa\s+jumlah|seberapa|jumlah)\b/i;
    const definitionPattern = /\b(apa\s+itu|apa\s+yang\s+dimaksud|arti|artinya|makna|maknanya|pengertian|definisi|hakikat|maksud\s+dari|maksudnya)\b/i;
    const explainPattern = /\b(jelaskan|jelaskanlah|terangkan|terangkanlah|uraikan|uraikanlah|jabarkan|jabarkanlah|paparkan|paparkanlah|sebutkan|sebutkanlah|tunjukkan|tunjukkanlah|ceritakan|deskripsikan|kemukakan|elaborasikan)\b/i;
    const whatPattern = /\b(apa|apakah|apaan|apatah)\b/i;
    const askPrefixPattern = /\b(mau\s+nanya|mau\s+tanya|izin\s+tanya|izin\s+nanya|boleh\s+tanya|pengen\s+tanya|bisa\s+jelaskan|tolong\s+jelaskan|coba\s+jelaskan)\b/i;

    let isQuestion = false;
    let type = null;

    // Prioritaskan aspek spesifik terlebih dahulu sebelum kata tanya umum 'what'
    if (examplePattern.test(clean)) {
      matchedKeywords.push('example');
      type = 'example';
      isQuestion = true;
    } else if (comparePattern.test(clean)) {
      matchedKeywords.push('compare');
      type = 'compare';
      isQuestion = true;
    } else if (functionPattern.test(clean)) {
      matchedKeywords.push('function');
      type = 'function';
      isQuestion = true;
    } else if (formulaPattern.test(clean)) {
      matchedKeywords.push('formula');
      type = 'formula';
      isQuestion = true;
    } else if (locationPattern.test(clean)) {
      matchedKeywords.push('location');
      type = 'location';
      isQuestion = true;
    } else if (whoPattern.test(clean)) {
      matchedKeywords.push('who');
      type = 'who';
      isQuestion = true;
    } else if (whenPattern.test(clean)) {
      matchedKeywords.push('when');
      type = 'when';
      isQuestion = true;
    } else if (whyPattern.test(clean)) {
      matchedKeywords.push('why');
      type = 'why';
      isQuestion = true;
    } else if (howPattern.test(clean)) {
      matchedKeywords.push('how');
      type = 'how';
      isQuestion = true;
    } else if (howManyPattern.test(clean)) {
      matchedKeywords.push('how_many');
      type = 'how_many';
      isQuestion = true;
    } else if (definitionPattern.test(clean)) {
      matchedKeywords.push('definition');
      type = 'definition';
      isQuestion = true;
    } else if (explainPattern.test(clean)) {
      matchedKeywords.push('explain');
      type = 'explain';
      isQuestion = true;
    } else if (whatPattern.test(clean)) {
      matchedKeywords.push('what');
      type = 'what';
      isQuestion = true;
    } else if (askPrefixPattern.test(clean) || hasQuestionMark) {
      isQuestion = true;
      type = 'general_question';
    }

    const cleanSubject = this.extractCoreTopic(raw);

    return {
      isQuestion,
      type,
      cleanSubject,
      rawQuery: raw,
      hasQuestionMark,
      matchedKeywords
    };
  }

  /**
   * Menggabungkan baris-baris teks yang terpotong di tengah kalimat akibat line-wrapping
   * Menjaga keutuhan kalimat agar tidak terbelah antar baris
   */
  static unwrapModuleText(text) {
    if (!text) return '';
    const rawLines = text.split('\n');
    const unwrapped = [];

    for (let i = 0; i < rawLines.length; i++) {
      const line = rawLines[i].trim();
      if (!line) {
        unwrapped.push('');
        continue;
      }

      if (unwrapped.length === 0) {
        unwrapped.push(line);
        continue;
      }

      const prev = unwrapped[unwrapped.length - 1];

      // Kriteria apakah baris saat ini adalah kelanjutan dari baris sebelumnya:
      // - Baris sebelumnya bukan baris kosong
      // - Baris sebelumnya tidak berakhir dengan tanda baca penutup kalimat (. ! ? :)
      // - Baris saat ini TIDAK diawali bullet (- * • +), penomoran baru (1. 2) A. B)), atau heading (#, Bab, Bagian)
      const prevEndsWithPunct = /[.!?:]$/.test(prev);
      const prevIsHeaderOrNumbered = /^[-*•+]\s+|^\d+[\.\)]\s+|^[A-Za-z][\.\)]\s+|^#{1,4}\s+|^(?:bab|bagian)\s+\d+/i.test(prev);
      const currIsNewBulletOrHeader = /^[-*•+]\s+|^\d+[\.\)]\s+|^[A-Za-z][\.\)]\s+|^#{1,4}\s+|^(?:bab|bagian)\s+\d+/i.test(line);
      const isDivider = /^[=\-\*_~#+]{2,}$/.test(line);
      const prevIsShortTitle = prev.split(/\s+/).length <= 6 && /^[A-Z]/.test(prev);

      if (prev && !prevEndsWithPunct && !prevIsHeaderOrNumbered && !currIsNewBulletOrHeader && !isDivider && !prevIsShortTitle) {
        unwrapped[unwrapped.length - 1] = prev + ' ' + line;
      } else {
        unwrapped.push(line);
      }
    }

    return unwrapped.join('\n');
  }

  /**
   * Mengubah istilah dan deskripsi modul menjadi kalimat bahasa Indonesia yang mengalir alami dengan kata-kata AI sendiri
   * Contoh: "Pencernaan Mekanis" + "Proses memecah makanan secara fisik..." -> "Pencernaan mekanis adalah proses memecah makanan secara fisik..."
   */
  static formatConceptToNaturalSentence(term, definition) {
    if (!term && !definition) return '';
    if (!definition) return term;
    if (!term) return definition;

    let cleanTerm = term.replace(/^[=\-\*_~#+\d\.\)\-\s]+/, '').replace(/[=\-\*_~#+\s:]+$/, '').trim();
    let cleanDef = definition.replace(/^[=\-\*_~#+\d\.\)\-\s:]+/, '').trim();

    cleanTerm = cleanTerm.charAt(0).toUpperCase() + cleanTerm.slice(1);

    // 0. Jika definisi diawali dengan "di dalam [organ]..." atau "pada [organ]..."
    if (/^(?:di\s+(?:dalam\s+)?|pada\s+)/i.test(cleanDef)) {
      const rest = cleanDef.replace(/^(?:di\s+(?:dalam\s+)?[a-zA-Z0-9()–\s]+?(?:terjadi|,)\s*|pada\s+[a-zA-Z0-9()–\s]+?(?:terjadi|,)\s*)/i, '').trim();
      if (rest) {
        return `Mengenai **${cleanTerm}**, di bagian ini terjadi ${rest}`;
      }
      return `Mengenai **${cleanTerm}**, materi menjelaskan bahwa ${cleanDef}`;
    }

    // Ambil kata pertama dari definisi
    const firstWordMatch = cleanDef.match(/^([A-Za-z0-9\-\/]+)/);
    const firstWord = firstWordMatch ? firstWordMatch[1].toLowerCase() : '';

    // 1. Jika definisi diawali dengan kata benda penjelas (tempat, organ, proses, saluran, sistem, zat, dll)
    if (/^(proses|sistem|kondisi|keadaan|cara|metode|zat|protein|organ|alat|kemampuan|kekuatan|prinsip|mekanisme|upaya|tahap|bagian|unsur|fenomena|tindakan|kegiatan|hasil|bentuk|jalur|saluran|struktur|fungsi|peristiwa|kejadian|tempat|ruang|wadah|pintu|kelenjar|lapisan|cairan)/i.test(firstWord)) {
      const lowerDef = cleanDef.charAt(0).toLowerCase() + cleanDef.slice(1);
      return `**${cleanTerm}** adalah ${lowerDef}`;
    }

    // 2. Jika definisi diawali kata kerja berawalan me- (mengangkut, membawa, memecah, mencerna, dll)
    if (/^(mengangkut|membawa|mengatur|membantu|menghasilkan|mengubah|memecah|melindungi|mencegah|menyaring|mengikat|membentuk|menyimpan|mengalirkan|mencerna|menghancurkan|menyerap)/i.test(firstWord)) {
      const lowerDef = cleanDef.charAt(0).toLowerCase() + cleanDef.slice(1);
      return `**${cleanTerm}** berfungsi untuk ${lowerDef}`;
    }

    // 3. Jika definisi diawali kata kerja berawalan ber- / ter- (berperan, bertugas, berfungsi, berada)
    if (/^(berperan|berfungsi|bertugas|terjadi|berada|berupa)/i.test(firstWord)) {
      const lowerDef = cleanDef.charAt(0).toLowerCase() + cleanDef.slice(1);
      return `**${cleanTerm}** ${lowerDef}`;
    }

    // 4. Jika definisi sudah ada kata penghubung "adalah", "merupakan", "yaitu", "yakni"
    if (/^(adalah|merupakan|yaitu|yakni|ialah)/i.test(firstWord)) {
      const lowerDef = cleanDef.charAt(0).toLowerCase() + cleanDef.slice(1);
      return `**${cleanTerm}** ${lowerDef}`;
    }

    // 5. Default natural
    const lowerDef = cleanDef.charAt(0).toLowerCase() + cleanDef.slice(1);
    return `**${cleanTerm}** merupakan ${lowerDef}`;
  }

  /**
   * Break module content into sections (Bebas dari garis pembatas '=====' dan unwrap line breaks)
   */
  static parseModuleChunks(content) {
    if (!content) return [];
    
    // 1. Bersihkan konten dari divider dekoratif (=====, -----, *****, dll) dan unwrap text
    const cleanedContent = this.cleanModuleContent(content);
    if (!cleanedContent || cleanedContent.trim().length === 0) return [];

    const unwrappedContent = this.unwrapModuleText(cleanedContent);

    let rawSections = unwrappedContent.split(/(?=\n\s*(?:\d+[\.\)]|[#]{1,3}\s+|Bab\s+\d+|Bagian\s+\d+))/i);
    if (rawSections.length <= 1) {
      rawSections = unwrappedContent.split(/\n\s*\n+/);
    }
    
    const chunks = [];
    rawSections.forEach((section, idx) => {
      const trimmed = section.trim();
      if (!trimmed || trimmed.length < 15) return;

      const lines = trimmed.split('\n')
        .map(l => l.trim())
        .filter(l => l.length > 0 && !/^[=\-\*_~#+]{2,}$/.test(l));
      
      if (lines.length === 0) return;

      if (lines.length <= 1 && lines[0] && lines[0].toUpperCase().startsWith('MODUL')) {
        return;
      }
      
      // Bersihkan dekorasi simbol dari judul
      let title = lines[0]
        .replace(/^[=\-\*_~#+\d\.\)\-\s]+/, '')
        .replace(/[=\-\*_~#+\s]+$/, '')
        .trim();
      
      if (lines.length > 1 && title.toUpperCase().startsWith('MODUL') && lines[1].match(/^\d+[\.\)]/)) {
        title = lines[1]
          .replace(/^[=\-\*_~#+\d\.\)\-\s]+/, '')
          .replace(/[=\-\*_~#+\s]+$/, '')
          .trim();
      }

      // Jika baris pertama mengandung ':' (misal: "1. Pencernaan Mekanis: Proses..."), ambil konsep sebelum ':' sebagai judul
      if (title.includes(':')) {
        const colonParts = title.split(':');
        if (colonParts[0].trim().length >= 3 && colonParts[0].trim().length <= 50) {
          title = colonParts[0].trim();
        }
      } else if (/(?:\s+(?:adalah|merupakan|yaitu|ialah)\s+)/i.test(title)) {
        const parts = title.split(/(?:\s+(?:adalah|merupakan|yaitu|ialah)\s+)/i);
        if (parts[0].trim().length >= 2 && parts[0].trim().length <= 50) {
          title = parts[0].trim();
        }
      }

      // Pastikan title tidak berupa divider atau kosong
      if (!title || /^[=\-\*_~#+\s]+$/.test(title) || title.length < 2) {
        title = `Bagian ${idx + 1}`;
      }

      if (title.length > 65) title = title.substring(0, 62) + '...';

      const tokens = this.tokenize(trimmed);
      chunks.push({
        index: idx,
        title: title || `Bagian ${idx + 1}`,
        text: trimmed,
        tokens: tokens,
        tokenSet: new Set(tokens)
      });
    });

    if (chunks.length === 0 && cleanedContent.trim().length > 0) {
      const paras = cleanedContent.split(/\n\s*\n+/);
      paras.forEach((p, idx) => {
        const trimmed = p.trim();
        if (trimmed.length > 15 && !/^[=\-\*_~#+]{3,}$/.test(trimmed)) {
          chunks.push({
            index: idx,
            title: `Bagian ${idx + 1}`,
            text: trimmed,
            tokens: this.tokenize(trimmed),
            tokenSet: new Set(this.tokenize(trimmed))
          });
        }
      });
    }

    return chunks;
  }

  /**
   * Generate quick suggestions
   */
  static generateQuickSuggestions(content) {
    return [];
  }

  /**
   * Deteksi Nama Pengguna yang Sangat Ketat & Akurat
   * HANYA mendeteksi jika user benar-benar memperkenalkan nama mereka secara eksplisit dan singkat (maksimal 4 kata).
   * Tidak akan pernah mendeteksi kalimat tindakan/perintah seperti "saya suruh", "saya mau tanya", "tolong beri saya", dll.
   */
  static detectNameIntro(text) {
    if (!text) return null;
    const clean = text.trim();
    const words = clean.split(/\s+/);
    
    // Perkenalan nama secara alami selalu berupa kalimat sangat pendek (maksimal 4 kata)
    if (words.length > 4) return null;

    // Batalkan jika mengandung kata perintah, pertanyaan, atau kata kerja umum
    const commandOrActionWords = /(?:suruh|minta|beri|rangkum|ringkas|tanya|nanya|jelaskan|terangkan|bantu|mau|ingin|bisa|baca|belajar|cari|hitung|tulis|soal|materi|modul|apa|siapa|kapan|dimana|kenapa|mengapa|bagaimana|gimana|berapa|tolong|coba|mohon|dong|sih|kenalan)/i;
    if (commandOrActionWords.test(clean) && !/^(?:kenalin\s*,?\s*(?:aku|nama\s+saya|namaku)|kenalan\s+dong\s*,?\s*aku)/i.test(clean)) {
      return null;
    }

    // Pola eksplisit ter-anchor dari awal sampai akhir kalimat
    const strictPatterns = [
      // "nama saya kevin", "namaku kevin", "panggil aku kevin", "nama gue kevin"
      /^(?:(?:h+a+l+o+|h+a+i+)\s*,?\s*)?(?:nama\s+saya|namaku|nama\s+aku|panggil\s+aku|panggil\s+saya|nama\s+gue|nama\s+gw)\s+(?:adalah\s+)?([A-Za-zÀ-ÿ]{2,18})[\s.,!~]*$/i,
      // "kenalin, aku kevin", "kenalan dong, aku rina"
      /^(?:kenalin\s*,?\s*(?:aku|nama\s+saya|namaku)|kenalan\s+dong\s*,?\s*aku)\s+([A-Za-zÀ-ÿ]{2,18})[\s.,!~]*$/i,
      // "halo, saya kevin", "hai, aku rina" (hanya jika diawali salam eksplisit)
      /^(?:h+a+l+o+|h+a+i+|h+e+i+|selamat\s+(?:pagi|siang|sore|malam))\s*,?\s*(?:pak|bu|kak|guru)?\s*,?\s*(?:saya|aku|ini)\s+([A-Za-zÀ-ÿ]{2,18})[\s.,!~]*$/i
    ];

    const excludedWords = new Set([
      'apa', 'gimana', 'buku', 'soal', 'materi', 'modul', 'mau', 'ingin', 'tanya', 'nanya', 'bingung',
      'capek', 'lelah', 'senang', 'suka', 'lagi', 'bisa', 'punya', 'ada', 'murid', 'siswa', 'mahasiswa',
      'user', 'orang', 'manusia', 'bot', 'edubot', 'belajar', 'paham', 'mengerti', 'siap', 'baru',
      'pemula', 'anak', 'kelas', 'tugas', 'contoh', 'rumus', 'hukum', 'guru', 'dosen', 'cewek', 'cowok',
      'iya', 'tidak', 'nggak', 'bukan', 'halo', 'hai', 'siapa', 'suruh', 'bantu', 'tolong', 'coba',
      'rangkum', 'ringkas', 'jelaskan', 'beri', 'kasih', 'ini', 'itu', 'dong', 'ya', 'deh', 'salam'
    ]);

    for (const p of strictPatterns) {
      const match = clean.match(p);
      if (match && match[1]) {
        const candidate = match[1].trim();
        if (!excludedWords.has(candidate.toLowerCase()) && candidate.length >= 2) {
          return candidate.charAt(0).toUpperCase() + candidate.slice(1).toLowerCase();
        }
      }
    }

    return null;
  }

  /**
   * Ekstraksi Topik Terakhir yang Dibahas dari Riwayat Obrolan
   */
  static getLastDiscussedTopic(chatHistory = []) {
    if (!chatHistory || chatHistory.length === 0) return null;
    for (let i = chatHistory.length - 1; i >= 0; i--) {
      const msg = chatHistory[i];
      if (msg.sender === 'ai' && msg.intent && !['greeting', 'name_intro', 'casual_affirmation', 'ai_critique', 'summary_empty', 'unclear_input', 'system_ping'].includes(msg.intent)) {
        if (msg.sourceChunk) return msg.sourceChunk;
        // Cari judul atau kata kunci bertebal
        const boldMatch = msg.text.match(/\*\*([^*]{3,40})\*\*/);
        if (boldMatch) return boldMatch[1];
      }
      if (msg.sender === 'user' && msg.text.length > 5) {
        const clean = msg.text.replace(/^(halo|hai|tolong|coba|guru|pak|bu|kak)?\s*/i, '').trim();
        if (clean.length > 3 && !/^(iya|tidak|bukan|oke|sip|makasih)/i.test(clean)) {
          return clean;
        }
      }
    }
    return null;
  }

  /**
   * Deteksi Permintaan Lanjutan / Follow-up yang Menghubungkan Konteks Obrolan Sebelumnya
   */
  static detectFollowUp(query) {
    const clean = query.trim().toLowerCase();

    // 1. Minta penjelasan lebih sederhana
    if (/(lebih\s+simpel|lebih\s+sederhana|lebih\s+mudah|gampang\s+dipahami|kurang\s+paham|belum\s+ngerti|maksudnya\s+gimana|jelaskan\s+lagi|ga\s+paham|nggak\s+paham|bisa\s+dipermudah)/i.test(clean)) {
      return { type: 'simpler' };
    }

    // 2. Minta contoh lain
    if (/(contoh\s+lain|ada\s+contoh\s+lain|contoh\s+nyata\s+lain|misal\s+lain|contoh\s+konkret)/i.test(clean)) {
      return { type: 'another_example' };
    }

    // 3. Izin tanya
    if (/(boleh\s+tanya|mau\s+tanya|bisa\s+bantu|mau\s+nanya|bisa\s+nanya|boleh\s+nanya|ada\s+pertanyaan|mau\s+nanya\s+dong|bolehkah\s+saya\s+bertanya)/i.test(clean)) {
      return { type: 'ask_permission' };
    }

    // 4. Tanya "kenapa begitu?" / "lalu gimana?"
    if (/^(kenapa\s+begitu|mengapa\s+begitu|kenapa\s+bisa\s+begitu|terus\s+gimana|lalu\s+gimana|terus\s+apa|lalu\s+apa|artinya\s+apa|maknanya\s+apa)[\s?!.,~]*$/i.test(clean)) {
      return { type: 'why_so' };
    }

    return null;
  }

  /**
   * PARSER PERINTAH & INSTRUKSI BAHASA INDONESIA (Directives)
   * Menguraikan gaya bahasa, format, panjang jawaban, tugas khusus (cerita/analogi/poin),
   * larangan copy-paste, dan mengekstrak subjek murni pertanyaan.
   */
  static parseDirectives(rawQuery) {
    if (!rawQuery) {
      return {
        hasDirective: false,
        tone: 'natural',
        brevity: 'normal',
        format: 'auto',
        task: 'explain',
        noCopas: false,
        pointCount: 0,
        coreSubject: ''
      };
    }

    const query = rawQuery.trim();
    const qLower = query.toLowerCase();

    const directives = {
      hasDirective: false,
      tone: 'natural', // 'casual', 'simple', 'formal', 'natural'
      brevity: 'normal', // 'concise', 'detailed', 'normal'
      format: 'auto', // 'points', 'steps', 'table', 'auto'
      task: 'explain', // 'story', 'analogy', 'real_life', 'comparison', 'pros_cons', 'tips', 'explain'
      noCopas: false,
      pointCount: 0,
      coreSubject: ''
    };

    // 1. Deteksi Gaya Bahasa (Tone)
    if (/(bahasa\s+santai|santai\s+aja|santuy|gaya\s+santai|jangan\s+kaku|bahasa\s+gaul|santai\s+dong|ngobrol\s+santai|bahasa\s+sehari-hari|secara\s+santai)/i.test(qLower)) {
      directives.tone = 'casual';
      directives.hasDirective = true;
    } else if (/(sesederhana\s+mungkin|bahasa\s+sederhana|simpel|sederhana\s+aja|seperti\s+anak\s+sd|anak\s+kecil|seperti\s+anak\s+5\s+tahun|bahasa\s+awam|jangan\s+rumit|jangan\s+ribet|gampang\s+dipahami|mudah\s+dipahami)/i.test(qLower)) {
      directives.tone = 'simple';
      directives.hasDirective = true;
    } else if (/(bahasa\s+formal|bahasa\s+baku|resmi|ilmiah|akademik)/i.test(qLower)) {
      directives.tone = 'formal';
      directives.hasDirective = true;
    }

    // 2. Deteksi Kepanjangan Jawaban (Brevity)
    if (/(singkat\s+saja|singkat\s+padat|jangan\s+panjang-panjang|jangan\s+panjang|jangan\s+bertele-tele|pendek\s+saja|to\s+the\s+point|ringkas\s+saja|garis\s+besar\s+saja|langsung\s+intinya)/i.test(qLower)) {
      directives.brevity = 'concise';
      directives.hasDirective = true;
    } else if (/(detail|mendalam|lengkap\s+banget|panjang\s+lebar|kupas\s+tuntas|komprehensif)/i.test(qLower)) {
      directives.brevity = 'detailed';
      directives.hasDirective = true;
    }

    // 3. Deteksi Perintah Anti-Copy-Paste
    if (/(jangan\s+(?:cuma\s+)?(?:copy\s*paste|copas|jiplak|salin)|tanpa\s+(?:copy\s*paste|copas)|pakai\s+bahasa(?:mu)?\s+sendiri|kata-kata(?:mu)?\s+sendiri|parafrase|jangan\s+sama\s+persis)/i.test(qLower)) {
      directives.noCopas = true;
      directives.hasDirective = true;
    }

    // 4. Deteksi Format & Jumlah Butir
    const countMatch = qLower.match(/(\d+)\s+(?:poin|hal|poin-poin|butir|alasan|faktor|contoh|langkah)/);
    if (countMatch) {
      directives.pointCount = parseInt(countMatch[1], 10);
      directives.format = 'points';
      directives.hasDirective = true;
    } else if (/(dalam\s+bentuk\s+poin|poin-poin|pakai\s+bullet|bentuk\s+daftar|buat\s+poin)/i.test(qLower)) {
      directives.format = 'points';
      directives.hasDirective = true;
    } else if (/(langkah-langkah|tahapan|step\s+by\s+step|alur\s+tahapan)/i.test(qLower)) {
      directives.format = 'steps';
      directives.hasDirective = true;
    } else if (/(tabel|bentuk\s+tabel|buatkan\s+tabel)/i.test(qLower)) {
      directives.format = 'table';
      directives.hasDirective = true;
    }

    // 5. Deteksi Tugas Khusus Pedagogis
    if (/(buat(?:kan)?\s+cerita|ceritakan|dongeng|cerita\s+pendek|naratif|kisah)/i.test(qLower)) {
      directives.task = 'story';
      directives.hasDirective = true;
    } else if (/(buat(?:kan)?\s+analogi|analogi|perumpamaan|ibaratkan|metafora|seperti\s+apa\s+perumpamaannya)/i.test(qLower)) {
      directives.task = 'analogy';
      directives.hasDirective = true;
    } else if (/(contoh\s+nyata|kehidupan\s+sehari-hari|di\s+dunia\s+nyata|di\s+sekitar\s+kita|penerapan\s+konkret)/i.test(qLower)) {
      directives.task = 'real_life';
      directives.hasDirective = true;
    } else if (/(bandingkan|perbedaan\s+antara|beda\s+antara|komparasi|versus|\bvs\b)/i.test(qLower)) {
      directives.task = 'comparison';
      directives.hasDirective = true;
    } else if (/(kelebihan\s+dan\s+kekurangan|plus\s+minus|keuntungan\s+dan\s+kerugian|dampak\s+positif\s+dan\s+negatif)/i.test(qLower)) {
      directives.task = 'pros_cons';
      directives.hasDirective = true;
    } else if (/(tips\s+belajar|cara\s+cepat\s+hafal|cara\s+ingat|trik\s+belajar|metode\s+belajar|jadwal\s+belajar)/i.test(qLower)) {
      directives.task = 'tips';
      directives.hasDirective = true;
    }

    // 6. Ekstraksi Subjek Bersih (Clean Subject)
    let cleaned = query
      .replace(/[?!.,~]+$/g, '')
      .replace(/^(?:tolong|mohon|coba|bisa|bisakah|perintah(?:\s+ini)?\s*[:=]?)\s*/i, '')
      .replace(/(?:jangan\s+(?:cuma\s+)?(?:copy\s*paste|copas|jiplak|salin)|tanpa\s+(?:copy\s*paste|copas)|pakai\s+bahasa(?:mu)?\s+sendiri|kata-kata(?:mu)?\s+sendiri|parafrase)/gi, '')
      .replace(/(?:dengan\s+)?(?:bahasa\s+santai|santai\s+aja|santuy|jangan\s+kaku|bahasa\s+gaul|secara\s+santai)/gi, '')
      .replace(/(?:dengan\s+)?(?:sesederhana\s+mungkin|bahasa\s+sederhana|simpel|seperti\s+anak\s+sd|anak\s+kecil)/gi, '')
      .replace(/(?:singkat\s+saja|singkat\s+padat|jangan\s+panjang-panjang|jangan\s+panjang|jangan\s+bertele-tele|to\s+the\s+point)/gi, '')
      .replace(/(?:buat(?:kan)?\s+cerita(?:\s+pendek)?|ceritakan|cerita(?:\s+pendek)?|dongeng|kisah|buat(?:kan)?\s+analogi|beri(?:kan)?\s+analogi|analogi|contoh\s+nyata|kehidupan\s+sehari-hari)/gi, '')
      .replace(/(?:dalam\s+bentuk\s+poin|poin-poin|buatkan\s+tabel|\d+\s+poin|\d+\s+hal)/gi, '')
      .replace(/(?:dari\s+modul|sesuai\s+modul|berdasarkan\s+modul)/gi, '')
      .trim();

    cleaned = cleaned.replace(/^(?:cerita(?:kan)?|cerita\s+pendek|kisah|analogi|buat(?:kan)?\s+cerita(?:\s+pendek)?|buat(?:kan)?\s+analogi)?\s*(?:tentang|mengenai|soal|terkait|dari)?\s*/i, '');
    cleaned = cleaned.replace(/^(?:dan|serta|lalu|juga|tentang|mengenai|soal|bab|materi|topik|terkait)\s+/i, '');
    cleaned = cleaned.replace(/\s+(?:dan|serta|juga|terkait|sesuai)$/i, '');
    cleaned = cleaned.replace(/^(?:beri|berikan|kasih)?\s*(?:saya|kami)?\s*(?:contoh|penjelasan|uraian|cerita|analogi)?\s*(?:dari|tentang|mengenai|soal)?\s*/i, '');
    cleaned = cleaned.replace(/^(?:penting|pokok|utama)?\s*(?:tentang|dari|mengenai)?\s*/i, '');
    cleaned = cleaned.replace(/^(?:bandingkan|perbedaan\s+antara|beda\s+antara)\s+/i, '');
    cleaned = cleaned.replace(/\s+dalam$/i, '');

    cleaned = StudyEngine.extractCoreTopic(cleaned);
    directives.coreSubject = cleaned.trim();
    return directives;
  }

  /**
   * KLASIFIKASI LENGKAP & TELITI INTENSI PENGGUNA (25+ Kategori)
   */
  static classifyUserInput(query, chatHistory = [], directives = null) {
    const clean = query.trim().toLowerCase();

    // 1. Deteksi Perkenalan Nama Murid ("halo, ini kevin")
    const nameIntro = this.detectNameIntro(query);
    if (nameIntro) {
      return { category: 'name_intro', name: nameIntro };
    }

    // 2. KRITIK / MASUKAN TERHADAP AI & PERINTAH BAHASA INDONESIA
    // Mendeteksi komplain tentang bot/AI tidak mengerti bahasa atau hanya copy-paste
    const isExplicitComplaint = /(gak\s+nyambung|ga\s+nyambung|nggak\s+nyambung|tidak\s+nyambung|gila|sinting|ngaco|ngawur|aneh\s+banget|salah\s+woy|salah\s+jawabannya|bukan\s+gitu\s+maksudku|maksudnya\s+bukan\s+gitu|kamu\s+ngaco|jawabanmu\s+aneh|kamu\s+waras|kamu\s+gila|bot\s+gila|halu|halusinasi|cuma\s+nyalin|cuma\s+copas|hanya\s+copas|hanya\s+copy\s*paste|gak\s+ngerti\s+bahasa|tidak\s+mengerti\s+bahasa|tidak\s+bisa\s+mengerti|gak\s+bisa\s+mengerti|tidak\s+mengikuti\s+perintah|gak\s+ngikutin\s+perintah|gak\s+paham\s+perintah|mirip\s+dia\s+itu|copy\s+and\s+paste\s+yang\s+memiliki\s+kata)/i.test(clean);
    const isCopasQueryDirective = /(?:jangan|tanpa|bebas)\s+(?:cuma\s+|hanya\s+)?(?:copy\s*paste|copas|nyalin)/i.test(clean) && directives && directives.coreSubject && directives.coreSubject.length >= 3;
    if (isExplicitComplaint && !isCopasQueryDirective) {
      return { category: 'ai_critique', rawQuery: query };
    }

    // 3. Klarifikasi Meta ("ngomong apa sih?", "maksudnya apa?", "maksudmu apa?")
    if (/^(ngomong\s+apa\s*sih|maksudmu\s+apa|maksud\s+kamu\s+apa|maksudnya\s+apa|kamu\s+bicara\s+apa|apaan\s+sih|apa\s+maksudnya)[\s?!.,~]*$/i.test(clean)) {
      return { category: 'meta_clarification' };
    }

    // 4. Tanya Riwayat Obrolan ("tadi kita bahas apa?", "tadi ngomongin apa?")
    if (/(tadi\s+kita\s+bahas\s+apa|tadi\s+ngomongin\s+apa|sebelumnya\s+bahas\s+apa|topik\s+sebelumnya\s+apa|apa\s+yang\s+kita\s+bicarakan\s+tadi)/i.test(clean)) {
      return { category: 'history_inquiry' };
    }

    // 5. Tes Ping Koneksi / Cek Suara ("tes", "test", "testing", "halo tes", "123", "cek")
    if (/^(tes|test|testing|halo\s+tes|cek|check|1\s*2\s*3|ping|p|halo\s+halo)[\s.?!]*$/i.test(clean)) {
      return { category: 'system_ping' };
    }

    // 6. Pembuat Bot ("siapa yang buat kamu?", "kamu buatan siapa?")
    if (/(siapa\s+yang\s+(bikin|buat|ciptakan|kembangin)|kamu\s+buatan\s+siapa|siapa\s+pembuatmu|siapa\s+yang\s+menciptakanmu)/i.test(clean)) {
      return { category: 'bot_creator' };
    }

    // 7. Karakteristik / Gender / Lokasi Bot ("kamu cowok atau cewek?", "umur berapa?", "tinggal di mana?")
    if (/(kamu\s+(cowok|cewek|pria|wanita|laki|perempuan)|kamu\s+umur\s+berapa|berapa\s+umurmu|tinggal\s+di\s+mana|kamu\s+tinggal\s+dimana|asal\s+kamu\s+dari\s+mana)/i.test(clean)) {
      return { category: 'bot_gender_age' };
    }

    // 8. Kemampuan Bot ("kamu bisa apa saja?", "fitur apa aja?")
    if (/(kamu\s+bisa\s+apa\s*(aja)?|fitur\s+apa\s*(aja)?|apa\s+yang\s+bisa\s+kamu\s+bantu|kelebihan\s+kamu|kemampuan\s+kamu)/i.test(clean)) {
      return { category: 'bot_capabilities' };
    }

    // 9. Frustrasi / Kebingungan Belajar ("aku bingung", "gak ngerti", "susah banget materinya")
    if (/(aku\s+bingung|saya\s+bingung|belum\s+ngerti|gak\s+paham\s+sama\s+sekali|susah\s+banget|mumet\s+banget|otakku\s+buntu|buntu\s+nih)/i.test(clean)) {
      return { category: 'user_confusion' };
    }

    // 10. Negasi Santai ("enggak", "tidak", "bukan", "belum", "ga jadi")
    if (/^(enggak|nggak|ngga|ga|tidak|bukan|belum|ga\s+jadi|gak\s+jadi|bukan\s+kok|bukan\s+itu)[\s!.,?~]*$/i.test(clean)) {
      return { category: 'casual_negation' };
    }

    // 11. Pamitan / Mau Istirahat ("dadah", "bye", "tidur dulu", "mau istirahat", "sampai jumpa")
    if (/(dadah|bye|selamat\s+tinggal|sampai\s+jumpa|mau\s+tidur|tidur\s+dulu|istirahat\s+dulu|mau\s+istirahat|good\s*night|selamat\s+malam\s+guru)/i.test(clean)) {
      return { category: 'farewell' };
    }

    // 12. Permintaan Follow-up / Sambungan Konteks Obrolan
    const followUp = this.detectFollowUp(query);
    if (followUp) {
      return { category: 'follow_up', subType: followUp.type };
    }

    // 13. Pertanyaan Identitas Guru / Bot ("nama anda siapa?", "namamu siapa?", "kamu siapa?")
    if (/(namamu\s+siapa|siapa\s+namamu|siapa\s+nama\s*(?:kamu|anda|mu)?|nama\s+(?:kamu|anda)\s+siapa|kamu\s+siapa|siapa\s+kamu|siapa\s+anda|anda\s+siapa|siapa\s+dirimu|kamu\s+itu\s+siapa|kamu\s+bot\s+apa|siapa\s+guru\s+ini)/i.test(clean)) {
      return { category: 'bot_identity' };
    }

    // 14. Tanya Kabar Guru ("apa kabar?", "lagi apa?", "sedang apa?")
    if (/(apa\s+kabar|gimana\s+kabarnya|how\s+are\s+you|lagi\s+apa|lagi\s+ngapain|sedang\s+apa|lagi\s+sibuk\s+apa)/i.test(clean)) {
      return { category: 'greeting_checkin' };
    }

    // 15. Sapaan Ramah Murni (Mendukung sapaan santai berulang: "haii", "haiii", "halooo", "heyyy", "assalamualaikum", dll)
    const isGreetingPattern = /^(?:h+a+i+|h+a+l+o+|h+e+l+l?o+|h+e+y+|h+e+i+|h+i+|o+y+|o+i+|w+o+y+|met\s+(?:pagi|siang|sore|mal(?:am|em))|selamat\s+(?:pagi|siang|sore|mal(?:am|em))|pagi+|siang+|sore+|mal(?:am|em)+|assalamu\s*['’]?\s*alaikum(?:\s+(?:warahmatullahi|wr)?(?:\s+(?:wabarakatuh|wb))?)?|assalam|sampurasun|punten|permisi)(?:\s+(?:pak|bu|kak|guru|semuanya|teman|kawan|edubot|bot|bro|sis|min|gaes|guys))?[\s!.,?~👋😊✨🎉]*$/i.test(clean);
    if (isGreetingPattern) {
      return { category: 'greeting' };
    }

    // 16. Curhat Lelah / Pusing Fisik
    if (/(capek|lelah|pusing|penat|ngantuk|berat\s+banget)/i.test(clean)) {
      return { category: 'user_fatigue' };
    }

    // 17. Kesiapan Belajar ("saya siap", "yuk mulai")
    if (/(saya\s+siap|aku\s+siap|siap\s+belajar|mau\s+belajar|pengin\s+belajar|yuk\s+mulai|mulai\s+belajar|ayo\s+mulai)/i.test(clean)) {
      return { category: 'ready_to_learn' };
    }

    // 18. Status Murid ("saya murid SMA", "saya mahasiswa", "saya pemula")
    if (/(?:saya|aku)\s+(?:seorang\s+)?(?:anak\s+|siswa\s+|siswi\s+|murid\s+|mahasiswa\s+|mahasiswi\s+|orang\s+)?(sma|smk|smp|sd|kuliah|mahasiswa|mahasiswi|pemula|baru\s+belajar)/i.test(clean)) {
      return { category: 'user_role' };
    }

    // 19. Pujian kepada Guru ("kamu pintar ya", "kamu hebat", "mantap banget")
    if (/(kamu\s+(pintar|hebat|keren|cerdas|jago)|mantap\s+banget|guru\s+hebat|jawabanmu\s+keren)/i.test(clean)) {
      return { category: 'compliments' };
    }

    // 20. Afirmasi Santai & Terima Kasih ("oke", "sip", "makasih ya guru", "paham", "hmm", "ohh", dll)
    const isAffirmationPattern = /^(?:o+k+e*y*|s+i+p+|m+a+n+t+a+p+|k+e+r+e+n+|m+a+k+a+s+i+h+|t+e+r+i+m+a\s+k+a+s+i+h+|t+h+a+n+k+s*|s+i+a+p+|b+a+i+k+|p+a+h+a+m+|n+g+e+r+t+i+|o+h+(?:\s+(?:g+i+t+u+|b+e+g+i+t+u+))?|b+i+s+a+|i+y+a+|y+o+i+|a+s+i+k+|h+a+h+a+|w+k+w+k+|h+e+h+e+|x+i+x+i+|l+o+l+|h+m+m+|w+a+h+|w+a+d+u+h+|a+s+t+a+g+a+|l+o+h+|l+a+h+|e+h+)[\s!.,?~😊👍🎉]*$/i.test(clean) ||
        /(makasih|terima\s+kasih|thanks)\s+(?:guru|pak|bu|kak|edubot)/i.test(clean);
    if (isAffirmationPattern) {
      return { category: 'casual_affirmation' };
    }

    // 21. Humor / Tebak-tebakan Santai
    if (/(cerita\s+lucu|lelucon|jokes|tebak-tebakan|bercanda|hibur\s+aku)/i.test(clean)) {
      return { category: 'humor' };
    }

    // 22. Permintaan Rangkuman atau Kuis
    if (this.isSummaryRequest(clean)) return { category: 'summary' };
    if (this.isQuizRequest(clean)) return { category: 'quiz' };

    // 23. Perhitungan Matematika Aman
    const math = this.evaluateMath(clean);
    if (math) return { category: 'math', mathData: math };

    // 24. Deteksi Jika Murid Sedang Menjawab Pertanyaan / Mengemukakan Analisis Konsep Materi
    // PENTING: Jangan anggap pertanyaan murid (5W+1H / tanda tanya) sebagai jawaban kuis!
    const questionAnalysis = this.analyzeQuestion(query);
    const isAnsweringPrefix = /^(?:jawabanku|jawabannya|jawaban|menurutku|menurut\s+saya|menurut\s+aku|pikirku|analisis\s+saya|soalnya|karena|pilihan(?:ku)?)\s*[:=\-]?\s*/i.test(clean);
    const isNumberedAnswer = /^(?:soal|no|nomor)\s*\d+[\s.:=\-]+/i.test(clean);
    const lastAiMsg = Array.isArray(chatHistory) && chatHistory.length > 0 ? chatHistory.slice().reverse().find(m => m && m.sender === 'ai') : null;
    const isAfterTeacherPrompt = lastAiMsg && (
      lastAiMsg.intent === 'quiz' || 
      lastAiMsg.type === 'quiz' ||
      lastAiMsg.text.includes('Soal') || 
      lastAiMsg.text.includes('evaluasi') || 
      lastAiMsg.text.includes('coba jawab') ||
      lastAiMsg.text.includes('Bagaimana menurutmu') ||
      lastAiMsg.text.includes('tebak-tebakan')
    ) && clean.length > 2 && !/^(?:h+a+l+o+|h+a+i+|makasih|terima\s+kasih|oke|sip|tes|ping|siapa)/i.test(clean);

    if (!questionAnalysis.isQuestion && (isAnsweringPrefix || isNumberedAnswer || isAfterTeacherPrompt)) {
      return { category: 'student_answer', rawText: query };
    }

    // 25. Pengecekan Input Terlalu Singkat / Tanda Baca / Ketikan Tak Jelas
    const substantiveChars = clean.replace(/[^a-z0-9]/gi, '');
    if (substantiveChars.length < 2) {
      return { category: 'unclear_input' };
    }

    // 26. Pertanyaan Materi Belajar Akademik
    return { category: 'academic_question' };
  }

  /**
   * Respon Guru yang Nyambung & Bersahabat untuk Percakapan Santai / Follow-up
   */
  static respondTeacherConversation(classification, query, greetingName, moduleTitle, moduleContent, chatHistory = [], directives = null) {
    // 0. Input Tidak Jelas / Karakter Terlalu Pendek
    if (classification.category === 'unclear_input') {
      return {
        text: `Halo ${greetingName}! Guru siap mendampingi belajarmu. Ada topik atau konsep apa dari modul **"${moduleTitle}"** yang sedang ingin kamu tanyakan atau diskusikan? Tuliskan saja pertanyaanmu ya! 😊`,
        intent: 'greeting',
        type: 'greeting',
        badgeText: 'Sapaan Guru',
        suggestions: this.generateQuickSuggestions(moduleContent)
      };
    }

    // 1. Perkenalan Nama Murid ("nama saya kevin", "halo aku rina")
    if (classification.category === 'name_intro') {
      const studentName = classification.name;
      return {
        text: `Halo **${studentName}**! Salam kenal, nama Anda sudah saya catat.\n\nSaya siap mendampingi Anda belajar materi modul **"${moduleTitle}"** atau menjawab pertanyaan pelajaran lainnya. Ada topik spesifik yang ingin langsung Anda tanyakan atau diskusikan?`,
        intent: 'name_intro',
        type: 'greeting',
        detectedName: studentName,
        badgeText: 'Perkenalan',
        suggestions: this.generateQuickSuggestions(moduleContent)
      };
    }

    // 2. KRITIK AI & MASUKAN PERINTAH BAHASA INDONESIA
    // Merespon dengan rendah hati selayaknya guru sejati dan siap mengikuti instruksi
    if (classification.category === 'ai_critique') {
      return {
        text: `Maafkan saya ya ${greetingName}! Anda benar sekali—sebelumnya saya terlalu kaku dan terkesan hanya mencocokkan kata kunci serta menyalin kalimat mentah (*copy-paste*) dari modul tanpa memahami instruksi Anda. 🙇‍♂️\n\n**Mulai sekarang saya siap:**\n1. 🧠 **Memahami Bahasa Indonesia & Segala Perintah Anda:**\n   - Anda bebas meminta gaya: *"jelaskan dengan bahasa santai"*, *"sesederhana mungkin seperti anak SD"*, *"singkat padat"*, atau *"bahasa formal"*.\n   - Anda bebas meminta format: *"buatkan cerita pendek"*, *"buatkan analogi/perumpamaan"*, *"berikan contoh nyata sehari-hari"*, atau *"3 poin penting"*.\n2. ✨ **100% Menggunakan Bahasa Sendiri (Tanpa Copy-Paste):**\n   - Saya membedah konsep materi dan menjelaskannya secara alami, hidup, dan masuk akal (*makes sense*).\n3. 📚 **Mampu Menjawab Pertanyaan Apapun:**\n   - Baik materi yang ada di modul maupun pertanyaan di luar modul.\n\n**Silakan coba uji saya sekarang!** Perintah atau pertanyaan apa yang ingin kita bahas bersama?`,
        intent: 'ai_critique',
        type: 'greeting',
        badgeText: 'Klarifikasi & Penyesuaian',
        suggestions: [
          'Jelaskan materi modul dengan bahasa santai tanpa copas',
          'Buatkan cerita atau analogi tentang materi ini',
          'Rangkum inti materi dalam 3 poin singkat'
        ]
      };
    }

    // 3. Klarifikasi Meta ("ngomong apa sih?", "maksudnya apa?")
    if (classification.category === 'meta_clarification') {
      const lastTopic = this.getLastDiscussedTopic(chatHistory);
      return {
        text: `Maksud guru tadi begini, ${greetingName}:\n\n${lastTopic ? `Kita sedang membahas tentang **${lastTopic}**. ` : ''}Guru ingin menjelaskan intisarinya dengan bahasa yang paling mudah dibayangkan di kehidupan sehari-hari.\n\nBagian mana dari penjelasan tadi yang terasa paling membingungkan atau janggal? Bilang saja ya, biar guru terangkan dengan cara lain yang lebih simpel!`,
        intent: 'clarification',
        type: 'greeting',
        badgeText: 'Penjelasan Guru',
        suggestions: this.generateQuickSuggestions(moduleContent)
      };
    }

    // 4. Tanya Riwayat Obrolan ("tadi kita bahas apa?")
    if (classification.category === 'history_inquiry') {
      const lastTopic = this.getLastDiscussedTopic(chatHistory);
      if (lastTopic) {
        return {
          text: `Tadi kita sedang membahas tentang **"${lastTopic}"**, ${greetingName}! 📖\n\nBagaimana, apakah kamu mau kita lanjutkan mengupas topik itu, atau ada pertanyaan baru yang mau kita diskusikan?`,
          intent: 'history',
          type: 'greeting',
          badgeText: 'Ingatan Guru',
          suggestions: [
            `Lanjut bahas tentang ${lastTopic}`,
            `Berikan contoh soal mengenai ini`,
            `Ganti topik pelajaran lain`
          ]
        };
      } else {
        return {
          text: `Di awal sesi ini kita belum membahas topik pelajaran spesifik, ${greetingName}. Ruang belajar kita masih segar dan siap untuk materi apa pun! Mau kita mulai dari modul **"${moduleTitle}"** atau kamu punya pertanyaan bebas?`,
          intent: 'history',
          type: 'greeting',
          badgeText: 'Ruang Belajar',
          suggestions: this.generateQuickSuggestions(moduleContent)
        };
      }
    }

    // 5. Ping / Tes Koneksi ("tes 123", "halo tes")
    if (classification.category === 'system_ping') {
      return {
        text: `Tes sinyal diterima dengan sangat jelas 100%! 📡✨\n\nHalo ${greetingName}, ruang belajar sudah siap dan koneksi lancar. Ada PR, rumus, atau konsep sains apa yang mau kita bedah bareng hari ini?`,
        intent: 'ping',
        type: 'greeting',
        badgeText: 'Koneksi Siap',
        suggestions: this.generateQuickSuggestions(moduleContent)
      };
    }

    // 6. Pembuat Bot ("kamu buatan siapa?")
    if (classification.category === 'bot_creator') {
      return {
        text: `EduBot dirancang dan dikembangkan sebagai asisten belajar dan guru digital pintar, ${greetingName}! 🎓\n\nTujuannya adalah mendampingi murid agar bisa belajar konsep pelajaran apa pun secara interaktif, santai, dan tidak membosankan tanpa harus takut salah saat bertanya.`,
        intent: 'bot_creator',
        type: 'greeting',
        badgeText: 'Tentang EduBot',
        suggestions: this.generateQuickSuggestions(moduleContent)
      };
    }

    // 7. Karakteristik / Gender / Umur Bot
    if (classification.category === 'bot_gender_age') {
      return {
        text: `EduBot adalah sosok guru dan tutor digital, ${greetingName}! 👨‍🏫🤖\n\nGuru tidak memiliki usia biologis atau jenis kelamin tertentu. Yang terpenting, guru selalu siap sedia 24 jam mendampingimu belajar kapan pun kamu membutuhkan penjelasan atau teman berdiskusi.`,
        intent: 'bot_info',
        type: 'greeting',
        badgeText: 'Guru Digital',
        suggestions: this.generateQuickSuggestions(moduleContent)
      };
    }

    // 8. Kemampuan Bot ("kamu bisa apa?")
    if (classification.category === 'bot_capabilities') {
      return {
        text: `Banyak sekali hal bermanfaat yang bisa kita lakukan bersama, ${greetingName}! 🚀\n\n1. 💡 **Tanya Jawab Sains & Umum:** Tanyakan konsep alam (langit biru, pelangi), biologi, fisika, sejarah, IT, dan matematika.\n2. 📖 **Belajar dari Modul:** Unggah modul catatanmu, lalu minta guru jelaskan bagian yang rumit.\n3. 📋 **Buat Rangkuman Instan:** Minta rangkuman poin-poin terpenting dari materi.\n4. 🎯 **Latihan Kuis:** Uji pemahamanmu dengan kuis interaktif.\n5. 🔢 **Kalkulator Matematika:** Minta hitung operasi angka dan akar kuadrat.\n6. 🌐 **Mode Google Gemini AI:** Aktifkan API Key di pengaturan untuk jawaban real-time tanpa batas!\n\nMau coba fitur yang mana sekarang?`,
        intent: 'capabilities',
        type: 'greeting',
        badgeText: 'Fitur EduBot',
        suggestions: this.generateQuickSuggestions(moduleContent)
      };
    }

    // 9. Frustrasi / Bingung Belajar ("aku bingung")
    if (classification.category === 'user_confusion') {
      return {
        text: `Tarik napas dulu pelan-pelan ya, ${greetingName}. Wajar sekali kok kalau materi terasa membingungkan di awal—semua orang hebat pernah mengalami rasa bingung seperti ini! 😊\n\nKuncinya jangan dipikirkan semuanya sekaligus. Coba sebutkan **satu kata atau satu kalimat** yang paling membuatmu bingung saat ini? Nanti guru pecah jadi bagian-bagian kecil yang sangat gampang dipahami!`,
        intent: 'support',
        type: 'greeting',
        badgeText: 'Dukungan Guru',
        suggestions: [
          'Jelaskan konsep dasarnya dulu',
          'Berikan contoh analogi sederhana',
          'Beri saya tebak-tebakan santai'
        ]
      };
    }

    // 10. Negasi Santai ("enggak", "tidak", "belum")
    if (classification.category === 'casual_negation') {
      return {
        text: `Baik ${greetingName}, santai saja tidak apa-apa! 😊\n\nKalau bukan itu, ada hal lain yang sedang ingin kamu tanyakan atau diskusikan sekarang? Guru siap mendengarkan.`,
        intent: 'negation',
        type: 'greeting',
        badgeText: 'Respon Guru',
        suggestions: this.generateQuickSuggestions(moduleContent)
      };
    }

    // 11. Pamitan ("dadah", "bye", "tidur dulu")
    if (classification.category === 'farewell') {
      return {
        text: `Selamat beristirahat ya, ${greetingName}! 👋🌙\n\nKerja kerasmu belajar hari ini patut diacungi jempol. Istirahatlah yang cukup agar pikiranmu kembali segar besok. Sampai jumpa di sesi belajar kita berikutnya ya!`,
        intent: 'farewell',
        type: 'greeting',
        badgeText: 'Pamitan Guru',
        suggestions: ['Sampai jumpa guru!', 'Terima kasih banyak!']
      };
    }

    // 12. Tanggapan Follow-up / Sambungan Konteks
    if (classification.category === 'follow_up') {
      const lastTopic = this.getLastDiscussedTopic(chatHistory);

      if (classification.subType === 'ask_permission') {
        return {
          text: `Tentu saja boleh sekali, ${greetingName}! Pintu kelas selalu terbuka lebar untuk semua rasa penasaranmu. 😊\n\nSilakan langsung tanyakan apa yang sedang ingin kamu ketahui!`,
          intent: 'permission_granted',
          type: 'greeting',
          badgeText: 'Izin Guru',
          suggestions: this.generateQuickSuggestions(moduleContent)
        };
      }

      if (classification.subType === 'simpler') {
        return {
          text: `Mari kita sederhanakan${lastTopic ? ` pembahasan tentang **${lastTopic}** tadi` : ''} dengan analogi yang paling gampang dibayangkan, ${greetingName}:\n\nBayangkan konsep ini seperti aturan main sederhana dalam kehidupan sehari-hari. Kamu tidak perlu menghafal istilah teknisnya dulu—yang penting kamu bisa menangkap **"mengapa hal itu terjadi"**.\n\nCoba sebutkan bagian mana yang terasa paling rumit, biar guru beri contoh yang lebih konkret!`,
          intent: 'simplify',
          type: 'knowledge',
          badgeText: 'Penjelasan Simpel',
          suggestions: this.generateQuickSuggestions(moduleContent)
        };
      }

      if (classification.subType === 'another_example') {
        return {
          text: `Siap, ini contoh nyata lainnya khusus buat kamu, ${greetingName}! 💡\n\n${lastTopic ? `Terkait topik **${lastTopic}**, ` : ''}bayangkan saat kamu sedang beraktivitas di rumah atau sekolah: setiap kali ada aksi atau perubahan kondisi, selalu ada akibat langsung yang bisa kita amati.\n\nBagaimana, apakah analogi ini membuat konsepnya terasa lebih jelas?`,
          intent: 'example',
          type: 'knowledge',
          badgeText: 'Contoh Tambahan',
          suggestions: this.generateQuickSuggestions(moduleContent)
        };
      }

      if (classification.subType === 'why_so') {
        return {
          text: `Alasannya begini, ${greetingName}:\n\n${lastTopic ? `Dalam fenomena **${lastTopic}**, ` : ''}hal itu terjadi karena ada faktor pemicu alami yang menggerakkan proses tersebut secara hukum alam atau aturan logisnya. Ketika syarat-syaratnya terpenuhi, hasilnya pasti mengikuti aturan tersebut.\n\nApakah kamu mau kita bedah lebih detail faktor penyebab utamanya?`,
          intent: 'why_so',
          type: 'knowledge',
          badgeText: 'Alasan Logis',
          suggestions: this.generateQuickSuggestions(moduleContent)
        };
      }
    }

    // 13. Identitas Guru / Bot ("namamu siapa?", "nama anda siapa?", "kamu siapa?")
    if (classification.category === 'bot_identity') {
      return {
        text: `Saya **EduBot AI**, asisten dan tutor belajar cerdas Anda.\n\nSaya bertugas untuk:\n- Menjelaskan konsep materi pelajaran secara langsung, akurat, dan terstruktur.\n- Menjawab pertanyaan sains, matematika, fisika, biologi, ekonomi, dan bidang lainnya.\n- Merangkum modul belajar dengan cepat dan terperinci tanpa copy-paste kaku.\n\nSilakan tanyakan konsep materi yang ingin Anda pelajari atau beri tahu jika Anda ingin saya merangkum modul.`,
        intent: 'bot_identity',
        type: 'greeting',
        badgeText: 'EduBot AI',
        suggestions: this.generateQuickSuggestions(moduleContent)
      };
    }

    // 14. Tanya Kabar Guru
    if (classification.category === 'greeting_checkin') {
      return {
        text: `Kabar saya sangat baik dan siap membantu Anda belajar, ${greetingName}! Ada topik atau soal dari modul **"${moduleTitle}"** yang ingin kita bahas sekarang?`,
        intent: 'greeting',
        type: 'greeting',
        badgeText: 'Kabar EduBot',
        suggestions: this.generateQuickSuggestions(moduleContent)
      };
    }

    // 15. Sapaan Ramah Murni ("halo", "hai")
    if (classification.category === 'greeting') {
      return {
        text: `Halo ${greetingName}! Ada materi pelajaran atau bagian dari modul **"${moduleTitle}"** yang ingin Anda tanyakan atau diskusikan hari ini? Silakan ajukan pertanyaan Anda secara langsung.`,
        intent: 'greeting',
        type: 'greeting',
        badgeText: 'Sapaan EduBot',
        suggestions: this.generateQuickSuggestions(moduleContent)
      };
    }

    // 16. Curhat Lelah Fisik
    if (classification.category === 'user_fatigue') {
      return {
        text: `Bapak/Ibu guru sangat paham kok, ${greetingName}. Belajar memang menguras energi, dan wajar sekali kalau tubuh dan otakmu terasa lelah.\n\n💡 *Pesan dari guru:* Tolong jangan dipaksakan dulu ya. Coba tutup buku dan istirahatlah selama 10–15 menit. Minum segelas air putih, regangkan badan, dan rilekskan mata dari layar HP. Nanti kalau energimu sudah pulih, kita lanjutkan lagi pelan-pelan. Tetap semangat ya!`,
        intent: 'support',
        type: 'greeting',
        badgeText: 'Bimbingan Guru',
        suggestions: ['Beri saya tebak-tebakan santai untuk rehat', 'Bagaimana tips belajar agar tidak cepat jenuh?']
      };
    }

    // 17. Kesiapan Belajar
    if (classification.category === 'ready_to_learn') {
      return {
        text: `Mantap, itu semangat murid berprestasi yang guru suka! 🚀 Yuk langsung kita mulai. Kamu mau kita bedah konsep dasar modul **"${moduleTitle}"**, latihan kuis pemahaman, atau ada pertanyaan spesifik yang ingin kamu tanyakan duluan?`,
        intent: 'ready',
        type: 'greeting',
        badgeText: 'Siap Belajar',
        suggestions: this.generateQuickSuggestions(moduleContent)
      };
    }

    // 18. Status / Peran Murid
    if (classification.category === 'user_role') {
      return {
        text: `Senang sekali bisa menjadi gurumu di jenjang ini, ${greetingName}! 📚\n\nKunci terpenting dalam belajar bukanlah menghafal rumus secara buta, melainkan memahami *mengapa* dan *bagaimana* suatu konsep bekerja di dunia nyata. Ada materi pelajaran tertentu di sekolah/kampus yang sedang membuatmu penasaran minggu ini?`,
        intent: 'user_role',
        type: 'greeting',
        badgeText: 'Teman Belajar',
        suggestions: this.generateQuickSuggestions(moduleContent)
      };
    }

    // 19. Pujian kepada Guru
    if (classification.category === 'compliments') {
      return {
        text: `Terima kasih banyak atas apresiasinya, ${greetingName}! 😊 Guru merasa sangat senang kalau penjelasannya bisa membantumu paham. Tapi kepintaran yang sesungguhnya ada pada dirimu yang aktif dan mau terus bertanya!\n\nAda materi seru apa lagi yang ingin kita pelajari bareng?`,
        intent: 'compliments',
        type: 'greeting',
        badgeText: 'Senyum Guru',
        suggestions: this.generateQuickSuggestions(moduleContent)
      };
    }

    // 20. Afirmasi Santai / Terima Kasih
    if (classification.category === 'casual_affirmation') {
      const replies = [
        `Sama-sama, ${greetingName}! Bapak/Ibu guru senang sekali kalau penjelasannya sudah jelas. 😊 Mau kita coba latihan kuisnya sedikit untuk menguji pemahaman, atau mau lanjut ke topik berikutnya?`,
        `Sip, mantap kalau sudah jelas! 👍 Guru bangga melihat daya tangkapmu yang cepat. Ada bagian lain yang ingin kamu eksplorasi?`,
        `Keren! Ingat ya, kalau nanti saat mengulang materi kamu menemukan hal yang membingungkan lagi, jangan segan untuk bertanya kembali!`
      ];
      return {
        text: replies[Math.floor(Math.random() * replies.length)],
        intent: 'casual_affirmation',
        type: 'greeting',
        badgeText: 'Respon Guru',
        suggestions: this.generateQuickSuggestions(moduleContent)
      };
    }

    // 21. Humor / Tebak-tebakan
    if (classification.category === 'humor') {
      return {
        text: `Nih tebak-tebakan santai dari guru biar suasana belajarnya makin ceria:\n\n*Kenapa buku pelajaran matematika suka kelihatan sedih?*\nJawabannya: *Karena dia punya terlalu banyak masalah (problem)!* 😂\n\nBagaimana, mau tebak-tebakan sains lainnya atau siap lanjut bahas materi lagi, ${greetingName}?`,
        intent: 'humor',
        type: 'greeting',
        badgeText: 'Humor Guru',
        suggestions: ['Lanjut bahas materi modul', 'Beri saya kuis latihan']
      };
    }

    return null;
  }

  /**
   * Main Synchronous Response Generator yang Nyambung & Tepat Sasaran
   */
  static generateResponse(userQuery, moduleContent = '', moduleTitle = 'Modul Belajar', chatHistory = [], currentUserName = '', settings = {}) {
    const trimmedQuery = userQuery.trim();
    const userAlias = currentUserName ? currentUserName : '';
    const greetingName = userAlias ? `**${userAlias}**` : 'Muridku';

    // 0. EKSTRAKSI PERINTAH & INSTRUKSI PENGGUNA (Directives)
    const directives = this.parseDirectives(trimmedQuery);

    // 1. KLASIFIKASI INTENSI PERCAKAPAN
    const classification = this.classifyUserInput(trimmedQuery, chatHistory, directives);

    // =========================================================================
    // A. JIKA PERCAKAPAN SANTAI / META / FOLLOW-UP -> JAWAB SEBAGAI GURU
    // =========================================================================
    if (classification.category !== 'academic_question' && classification.category !== 'student_answer' && classification.category !== 'summary' && classification.category !== 'quiz' && classification.category !== 'math') {
      const convResponse = this.respondTeacherConversation(classification, trimmedQuery, greetingName, moduleTitle, moduleContent, chatHistory, directives);
      if (convResponse) return convResponse;
    }

    // A6. Evaluasi Tanggapan / Jawaban Murid Terkait Konsep Materi
    if (classification.category === 'student_answer') {
      const studentEval = this.respondToStudentAnswer(trimmedQuery, chatHistory, moduleContent, moduleTitle, userAlias);
      return studentEval;
    }

    // A7. Permintaan Review / Rangkuman Materi
    if (classification.category === 'summary') {
      const summary = this.generateSummary(moduleContent, moduleTitle, chatHistory, userAlias);
      if (summary.isEmpty) {
        return {
          text: `Belum ada materi modul yang aktif untuk dirangkum. Silakan unggah teks modul belajar atau pilih contoh materi di menu samping, maka saya akan langsung merangkumkan intisarinya untuk Anda.`,
          intent: 'summary_empty',
          type: 'greeting',
          badgeText: 'Modul Belum Ada',
          suggestions: this.generateQuickSuggestions(moduleContent)
        };
      }
      return {
        text: `Berikut rangkuman materi **${moduleTitle}** secara langsung dan terstruktur:\n\n${summary.markdown}`,
        intent: 'summary',
        type: 'summary',
        badgeText: 'Rangkuman Materi',
        suggestions: [
          'Berikan saya 3 kuis pemahaman',
          'Apa konsep atau rumus paling penting di materi ini?',
          'Jelaskan bagian pertama lebih mendalam'
        ]
      };
    }

    // A8. Permintaan Kuis Latihan
    if (classification.category === 'quiz') {
      const quiz = this.generateQuiz(moduleContent, moduleTitle, userAlias);
      return {
        text: quiz,
        intent: 'quiz',
        type: 'quiz',
        badgeText: 'Kuis Guru',
        suggestions: []
      };
    }

    // A9. Hitungan Matematika Aman
    if (classification.category === 'math') {
      const math = classification.mathData;
      return {
        text: `Nah ${greetingName}, hasil perhitungan dari **${math.query}** adalah **${math.result}**! 🔢\n\n${userAlias ? `Ada rumus atau soal hitungan lain yang mau kita selesaikan bareng, **${userAlias}**?` : 'Ada soal hitungan lain yang ingin dibahas?'}`,
        intent: 'math_calc',
        type: 'calculation',
        badgeText: 'Perhitungan Guru',
        suggestions: this.generateQuickSuggestions(moduleContent)
      };
    }

    // =========================================================================
    // B. PERTANYAAN MATERI PELAJARAN: PRIORITASKAN MODUL BELAJAR AKTIF!
    // =========================================================================

    // B1. PENCARIAN MODUL AKTIF:
    // Cek apakah subjek pertanyaan atau materi yang dicari ada di modul aktif
    const chunks = this.parseModuleChunks(moduleContent);
    const moduleMatch = this.findRelevantModuleChunk(directives.coreSubject || trimmedQuery, chunks, moduleTitle, directives);

    if (moduleMatch && moduleMatch.chunk) {
      const bestChunk = moduleMatch.chunk;
      const answer = this.synthesizeTeacherModuleAnswer(trimmedQuery, bestChunk, chunks, moduleTitle, userAlias, moduleContent, directives);
      return {
        text: answer.text,
        intent: 'module_qa',
        type: 'module',
        badgeText: directives.noCopas ? 'Penjelasan Asli' : 'Materi Modul',
        sourceChunk: bestChunk.title,
        suggestions: []
      };
    }

    // B2. CEK ENSIKLOPEDIA FAKTA & KONSEP UNIVERSAL GURU
    // Jika pertanyaan di luar modul atau modul tidak memuat topik tersebut
    const knowledgeAnswer = this.findMatchingKnowledge(trimmedQuery, directives, greetingName);
    if (knowledgeAnswer) {
      return {
        text: knowledgeAnswer.text,
        intent: 'concept_explanation',
        type: 'knowledge',
        badgeText: 'Penjelasan EduBot',
        suggestions: []
      };
    }

    // B3. SINTESIS GURU UNIVERSAL (TIDAK PERNAH MENOLAK ATAU BILANG TOPIK TIDAK DITEMUKAN!)
    const directResponse = this.synthesizeUniversalAnswer(trimmedQuery, directives, greetingName, moduleTitle, moduleContent, chatHistory);
    return {
      text: directResponse.text,
      intent: 'teacher_qa',
      type: 'knowledge',
      badgeText: 'Penjelasan Materi',
      suggestions: []
    };
  }

  /**
   * PENCARIAN CHUNK MODUL YANG RELEVAN
   * Mengutamakan modul sebagai referensi agar murid memperoleh jawaban materi yang mereka cari
   */
  static findRelevantModuleChunk(query, chunks, moduleTitle = '', directives = null) {
    if (!chunks || chunks.length === 0) return null;

    const analysis = this.analyzeQuestion(query);
    const cleanSubj = (directives && directives.coreSubject ? directives.coreSubject : (analysis.cleanSubject || '')).toLowerCase().trim();
    const queryLower = query.toLowerCase();
    const queryTokens = this.tokenize(cleanSubj || query);
    const substantiveTokens = queryTokens.filter(t => !QUERY_COMMAND_WORDS.has(t) && !ID_STOPWORDS.has(t));
    const titleWords = new Set(this.tokenize(moduleTitle.toLowerCase()));

    let bestChunk = null;
    let highestScore = 0;

    chunks.forEach(chunk => {
      let score = 0;
      const cleanTitle = chunk.title.replace(/^[=\-\*_~#+\d\.\)\-\s]+/, '').replace(/[=\-\*_~#+\s]+$/, '').trim();
      const titleLower = cleanTitle.toLowerCase();
      const textLower = chunk.text.toLowerCase();

      // Syarat Relevansi Dasar: jika subjek inti memiliki kata spesifik (misal "presiden", "listrik"), 
      // chunk atau judul harus memuat setidaknya salah satu kata kunci dari subjek tersebut.
      const subjNouns = this.tokenize(cleanSubj).filter(t => !QUERY_COMMAND_WORDS.has(t) && !ID_STOPWORDS.has(t) && t !== 'indonesia' && t !== 'pertama' && t !== 'kedua' && t !== 'terakhir');
      if (subjNouns.length > 0 && !subjNouns.some(t => textLower.includes(t) || titleLower.includes(t))) {
        return;
      }

      // 0. Kecocokan konsep / heading eksplisit di dalam teks chunk
      if (cleanSubj.length >= 2) {
        const escapedSubj = cleanSubj.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const subjectHeadingPattern = new RegExp(
          `(?:^|\\n)\\s*(?:[-*•+]|\\d+[\\.\\)]|[a-zA-Z][\\.\\)]|#{1,4})?\\s*${escapedSubj}(?:\\s*\\([^)]*\\))?\\s*(?:[:\\-–—]|\\n|$)`,
          'i'
        );
        if (subjectHeadingPattern.test(chunk.text)) {
          score += 300;
        }
      }

      // 1. Kecocokan kata kunci substantif (termasuk akronim 2+ huruf seperti BBM, SBI, DNA, dsb.)
      substantiveTokens.forEach(token => {
        if (token.length >= 2) {
          const isDifferentiator = !titleWords.has(token);
          const weightMultiplier = isDifferentiator ? 2.5 : 1.0;

          // Kecocokan judul chunk
          if (titleLower.includes(token)) {
            score += Math.round(40 * weightMultiplier);
          }

          // Kecocokan token set
          if (chunk.tokenSet && chunk.tokenSet.has(token)) {
            score += Math.round(20 * weightMultiplier);
          }

          // Kecocokan batas kata dalam teks chunk
          const wordBoundaryPattern = new RegExp(`\\b${token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
          if (wordBoundaryPattern.test(textLower)) {
            score += Math.round(25 * weightMultiplier);
          } else if (textLower.includes(token)) {
            score += Math.round(12 * weightMultiplier);
          }
        }
      });

      // 2. Kecocokan subjek inti pertanyaan dengan judul chunk
      if (cleanSubj.length >= 3) {
        if (titleLower.includes(cleanSubj)) {
          score += 70;
        } else if (cleanSubj.includes(titleLower) && titleLower.length >= 4) {
          score += 50;
        }
      }

      // 3. Kecocokan langsung query dengan judul chunk
      if (titleLower.length >= 4 && queryLower.includes(titleLower)) {
        score += 40;
      }

      // 4. Deteksi kecocokan sub-topik / frasa tertentu di dalam isi teks chunk
      if (cleanSubj.length >= 4 && textLower.includes(cleanSubj)) {
        score += 45;
      }

      if (score > highestScore) {
        highestScore = score;
        bestChunk = chunk;
      }
    });

    // Syarat Relevansi Modul (fleksibel agar pertanyaan akurat dari isi modul tetap tertangkap)
    if (bestChunk && highestScore >= 15) {
      return { chunk: bestChunk, score: highestScore };
    }

    // Jika murid menanyakan materi umum modul (misal: "apa isi materi ini?", "jelaskan modul ini")
    const isGeneralModuleQuery = /(isi\s+(?:materi|modul)|modul\s+ini|materi\s+ini|bahas\s+apa|pelajari\s+apa|bisa\s+jelaskan\s+materinya|rangkum\s+modul)/i.test(queryLower);
    if (isGeneralModuleQuery && chunks.length > 0) {
      return { chunk: chunks[0], score: 50 };
    }

    return null;
  }

  /**
   * Respon Evaluasi Saat Murid Menjawab / Mengemukakan Pemikiran Terkait Konsep Materi
   * Menghindari respons kaku dan mengapresiasi pemahaman murid dengan bahasa mengalir
   */
  static respondToStudentAnswer(query, chatHistory, moduleContent, moduleTitle, userAlias = '') {
    const userName = userAlias ? `**${userAlias}**` : 'Muridku';
    const chunks = this.parseModuleChunks(moduleContent);
    const clean = query.trim().replace(/^(?:jawabanku|jawabannya|jawaban|menurutku|menurut\s+saya|pikirku|analisis\s+saya|soalnya|karena|pilihan(?:ku)?)\s*[:=\-]?\s*/i, '');

    // Cari materi/chunk mana yang paling relevan dengan jawaban murid
    const queryTokens = this.tokenize(clean).filter(t => !QUERY_COMMAND_WORDS.has(t) && !ID_STOPWORDS.has(t));
    let matchedChunk = null;
    let maxMatch = 0;

    chunks.forEach(chunk => {
      let count = 0;
      queryTokens.forEach(t => {
        if (chunk.tokenSet.has(t) || chunk.title.toLowerCase().includes(t)) count++;
      });
      if (count > maxMatch) {
        maxMatch = count;
        matchedChunk = chunk;
      }
    });

    const targetTitle = matchedChunk ? matchedChunk.title.replace(/^[#\d\.\)\-\s]+/, '').trim() : moduleTitle;

    // Respon evaluasi yang edukatif, terstruktur, dan straight to the point
    let text = `Analisis jawaban Anda terkait topik **${targetTitle}**:\n\n`;

    if (matchedChunk) {
      const ans = this.synthesizeTeacherModuleAnswer(query, matchedChunk, chunks, moduleTitle, userAlias, moduleContent);
      text += `${ans.text}\n\n`;
    } else {
      text += `Pemikiran yang Anda sampaikan sudah menyentuh poin inti dari materi ini.\n\n`;
    }

    return {
      text: text.trim(),
      intent: 'student_answer_eval',
      type: 'evaluation',
      badgeText: 'Evaluasi Jawaban',
      suggestions: []
    };
  }

  /**
   * SINTESIS KONSEP MATERI SECARA ALAMI (100% BEBAS COPY-PASTE)
   * Menyusun pemahaman materi modul dengan kata-kata sendiri yang mengalir dan masuk akal
   */
  static synthesizeConceptNaturally(concept, directives, greetingName = 'Muridku', secondConcept = null) {
    const term = concept.primaryName || concept.term || 'Konsep Ini';
    const rawDef = (concept.definition || '').trim();
    const cleanDef = rawDef.replace(/^[=\-\*_~#+\d\.\)\-\s:]+/, '').trim();
    const tone = (directives && directives.tone) ? directives.tone : 'natural';
    const task = (directives && directives.task) ? directives.task : 'explain';
    const brevity = (directives && directives.brevity) ? directives.brevity : 'normal';
    const format = (directives && directives.format) ? directives.format : 'auto';

    let coreMeaning = cleanDef;
    const prefixes = [
      'adalah suatu keadaan perekonomian di mana',
      'adalah keadaan di mana',
      'adalah suatu kondisi di mana',
      'adalah suatu proses',
      'adalah proses',
      'adalah cabang',
      'merupakan cabang',
      'adalah suatu',
      'merupakan suatu',
      'adalah sebuah',
      'merupakan sebuah',
      'adalah',
      'merupakan',
      'yaitu',
      'yakni',
      'ialah'
    ];
    for (const p of prefixes) {
      if (coreMeaning.toLowerCase().startsWith(p)) {
        coreMeaning = coreMeaning.substring(p.length).trim();
        break;
      }
    }
    if (coreMeaning.length > 0) {
      coreMeaning = coreMeaning.charAt(0).toLowerCase() + coreMeaning.slice(1);
    }

    // 1. Tugas Komparasi
    if (task === 'comparison') {
      if (secondConcept) {
        const term2 = secondConcept.primaryName || secondConcept.term || 'Konsep Pembanding';
        const rawDef2 = (secondConcept.definition || '').trim();
        let coreMeaning2 = rawDef2.replace(/^[=\-\*_~#+\d\.\)\-\s:]+/, '').trim();
        for (const p of prefixes) {
          if (coreMeaning2.toLowerCase().startsWith(p)) {
            coreMeaning2 = coreMeaning2.substring(p.length).trim();
            break;
          }
        }
        return `Berikut perbandingan antara **${term}** dan **${term2}**, ${greetingName}:\n\n` +
          `1. **${term}:** Berfokus pada ${coreMeaning}.\n\n` +
          `2. **${term2}:** Berfokus pada ${coreMeaning2}.\n\n` +
          `Perbedaan utamanya terletak pada peran dan cara kerjanya di mana keduanya saling melengkapi dalam materi ini.`;
      }
    }

    // 2. Tugas Cerita Pendek
    if (task === 'story') {
      return `Bayangkan sebuah cerita sederhana untuk memahami **${term}**, ${greetingName}:\n\n` +
        `Di sebuah kota bernama Sukamaju, seorang siswa bernama Rio sedang mengamati bagaimana hal-hal di sekitarnya saling berinteraksi. Suatu hari, terjadi dinamika yang menarik perhatiannya mengenai **${term}**.\n\n` +
        `Ketika proses ini terjadi, prinsip dasarnya adalah ${coreMeaning}. Dampaknya langsung dirasakan oleh lingkungan sekitar, di mana setiap komponen merespons perubahan tersebut secara nyata.\n\n` +
        `Dari peristiwa ini, Rio memahami bahwa konsep ${term.toLowerCase()} bukan sekadar teori hafalan, melainkan mekanisme nyata yang terjadi di sekitar kita!`;
    }

    // 3. Tugas Analogi / Perumpamaan
    if (task === 'analogy') {
      return `Untuk membayangkan konsep **${term}** dengan sangat mudah, coba gunakan analogi ini, ${greetingName}:\n\n` +
        `Ibaratkan proses ini seperti sebuah tim kerja terorganisir di mana setiap bagian memiliki tugasnya masing-masing. Di sini, **${term}** berfungsi untuk memastikan bahwa ${coreMeaning}.\n\n` +
        `Jika bagian ini tidak berjalan semestinya, keseimbangan sistem akan terganggu. Itulah sebabnya peran ${term.toLowerCase()} sangat krusial!`;
    }

    // 4. Tugas Contoh Nyata Sehari-hari
    if (task === 'real_life') {
      let egText = '';
      if (concept.examples && concept.examples.length > 0) {
        egText = `Hal ini dapat kita amati secara langsung pada: **${concept.examples.join(', ')}**.`;
      } else {
        egText = `Dalam kehidupan sehari-hari, fenomena ini dapat kita temui saat kita berinteraksi langsung dengan sistem di sekitar kita.`;
      }
      return `Penerapan nyata **${term}** di kehidupan sehari-hari, ${greetingName}:\n\n` +
        `Prinsip kerjanya berpusat pada fakta bahwa ${coreMeaning}.\n\n` +
        `${egText}\n\n` +
        `Dengan memahami contoh nyata ini, kita jadi lebih mudah menangkap fungsinya tanpa perlu menghafal kalimat teks yang rumit.`;
    }

    // 5. Format Poin-Poin
    if (format === 'points') {
      return `Berikut intisari penting mengenai **${term}**, ${greetingName}:\n\n` +
        `1. 💡 **Hakikat & Inti Konsep:** Pada dasarnya, konsep ini merujuk pada ${coreMeaning}.\n\n` +
        `2. ⚙️ **Cara Kerja & Mekanisme:** Bekerja secara teratur untuk mencapai fungsi utama sistem secara optimal.\n\n` +
        `3. 🎯 **Manfaat & Dampak Kunci:** Memastikan setiap proses berjalan efektif dan terkoordinasi.`;
    }

    // 6. Singkat Padat
    if (brevity === 'concise') {
      return `Secara ringkas dan padat, **${term}** merupakan ${coreMeaning}.`;
    }

    // 7. Gaya Bahasa Santai (Casual)
    if (tone === 'casual') {
      return `Nah ${greetingName}, jadi gini ya kalau kita bahas santai tentang **${term}**: intinya tuh ${coreMeaning}! 😎\n\n` +
        `Bayangin aja, hal ini penting banget agar semua proses di sistemnya bisa berjalan lancar dan seimbang. Jadi bukan cuma sekadar hafalan teks buku, tapi beneran masuk akal kan?`;
    }

    // 8. Gaya Bahasa Sederhana / Anak SD (Simple)
    if (tone === 'simple') {
      return `Sederhananya begini ya ${greetingName}: **${term}** itu gampangnya adalah ${coreMeaning}.\n\n` +
        `Yang paling penting diingat: bagian ini bertugas menjaga agar prosesnya berjalan dengan baik. Mudah dipahami, kan?`;
    }

    // 9. Default Guru Menjelaskan dengan Bahasa Sendiri
    return `Mengenai **${term}**, intisari yang perlu kita pahami adalah bahwa ${coreMeaning}.`;
  }

  /**
   * PARSER SEMANTIK UNIT MODUL PEMBELAJARAN
   * Membedah teks modul menjadi unit-unit logis: seksi, sub-grup, konsep, poin definisi, rumus, dan kalimat
   */
  static parseModuleUnits(text) {
    if (!text) return [];
    const unwrapped = this.unwrapModuleText(text);
    const lines = unwrapped.split(/\r?\n/)
      .map(l => l.trim())
      .filter(l => l.length > 0 && !/^[=\-*_~#+]{2,}$/.test(l));

    const units = [];
    let currentSection = '';
    let currentGroup = '';

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.toUpperCase().startsWith('MODUL')) continue;

      // 0. Deteksi Label Struktural Modul (TOPIK, BAB, MATERI PELAJARAN, dsb.)
      // Jangan pernah jadikan label struktural ini sebagai konsep materi kuis/tanya-jawab!
      if (this.isStructuralHeader(line)) {
        if (line.includes(':')) {
          const parts = line.split(':');
          const val = parts.slice(1).join(':').trim();
          if (val) {
            currentSection = val;
            currentGroup = val;
          }
        } else {
          currentSection = line.replace(/^[=\-*_~#+\d\.\)\-\s:]+/, '').trim();
          currentGroup = currentSection;
        }
        continue;
      }

      // 1. Heading Seksi Utama (misal: "1. Saluran Pencernaan", "## 2. Faktor Penyebab Inflasi")
      const secMatch = line.match(/^(?:#{1,3}\s+|\d+[\.\)]\s+)([A-Z][^:]+)$/);
      if (secMatch && secMatch[1].trim().split(/\s+/).length <= 6) {
        currentSection = secMatch[1].replace(/[:#]+$/, '').trim();
        currentGroup = currentSection;
        units.push({
          type: 'section',
          term: currentSection,
          explanation: '',
          text: line,
          section: currentSection,
          group: currentGroup
        });
        continue;
      }

      // 2. Sub-group / Kategori (misal: "A. Kebijakan Moneter (oleh Bank Sentral / Bank Indonesia):")
      if (/^(?:[A-Z][\.\)]|[-*•+])\s+[^:]+:\s*$/i.test(line)) {
        currentGroup = line.replace(/^(?:[A-Z][\.\)]|[-*•+])\s*/i, '').replace(/:\s*$/, '').trim();
        units.push({
          type: 'subgroup',
          term: currentGroup,
          explanation: '',
          text: line,
          section: currentSection,
          group: currentGroup
        });
        continue;
      }

      // 3. Poin kondisional dengan koma (misal: "- Jika a > 0, kurva terbuka ke atas")
      const condMatch = line.match(/^(?:[-*•+]|\d+[\.\)]|[A-Z][\.\)])?\s*(Jika\s+[^,:]+)[,:]\s*(.+)$/i);
      // 4. Poin berlabel dengan titik dua (misal: "Mulut:", "a. Mulut: Di dalam mulut...")
      const colonMatch = line.match(/^(?:[-*•+]|\d+[\.\)]|[a-zA-Z][\.\)])?\s*([^:]+):\s*(.*)$/);
      // 5. Poin berlabel dengan strip yang memiliki SPASI di kedua sisinya (misal: "- Inflasi Ringan - Kurang dari 10%")
      const dashMatch = line.match(/^(?:[-*•+]|\d+[\.\)]|[a-zA-Z][\.\)])\s*([^-–—]+?)\s+[-–—]\s+(.*)$/);
      // 6. Definisi dengan kata kopula atau kata fungsi (misal: "Mulut berfungsi untuk...", "Mulut adalah...", "Mulut merupakan...")
      const funcCopulaMatch = line.match(/^(?:[-*•+]|\d+[\.\)]|[a-zA-Z][\.\)])?\s*([a-zA-Z0-9\s\(\)\-_/]+?)\s+(?:berfungsi\s+(?:untuk|sebagai)|berperan\s+(?:dalam|sebagai|untuk)|bertugas\s+untuk|adalah|merupakan|yaitu|ialah)\s+(.+)$/i);
      // 7. Poin konsep terpisah yang diikuti penjelasannya pada baris berikutnya (misal: "a. Mulut", "Peristiwa Rengasdengklok", "- Lambung")
      const isAllCapsTitle = /^[A-Z0-9\s\-_]+$/.test(line) && line.split(/\s+/).length >= 2;
      const isStandaloneTitle = !isAllCapsTitle &&
        !this.isStructuralHeader(line) &&
        !/^[=\-*_~#+]{2,}$/.test(line) &&
        !line.endsWith('.') &&
        !line.includes(':') &&
        line.split(/\s+/).length <= 6 &&
        /^(?:[-*•+]|\d+[\.\)]|[a-zA-Z][\.\)])?\s*([A-Z][a-zA-Z0-9\s\(\)\-_/]+)$/.test(line);
      const standaloneItemMatch = isStandaloneTitle ? line.match(/^(?:[-*•+]|\d+[\.\)]|[a-zA-Z][\.\)])?\s*([A-Z][a-zA-Z0-9\s\(\)\-_/]+)$/) : null;

      if (condMatch) {
        units.push({
          type: 'labeled_item',
          term: condMatch[1].trim(),
          explanation: condMatch[2].trim(),
          text: line,
          section: currentSection,
          group: currentGroup
        });
      } else if (colonMatch && colonMatch[1].trim().length >= 2 && colonMatch[1].trim().split(/\s+/).length <= 8) {
        let term = colonMatch[1].replace(/^[=\-*_~#+\d\.\)\-\s]+/, '').trim();
        if (this.isStructuralHeader(term)) {
          if (colonMatch[2].trim()) {
            currentSection = colonMatch[2].trim();
            currentGroup = currentSection;
          }
          continue;
        }

        let exp = colonMatch[2].trim();
        const subItems = [];
        let peekIdx = i + 1;

        while (peekIdx < lines.length) {
          const nextL = lines[peekIdx].trim();
          if (!nextL) { peekIdx++; continue; }
          if (this.isStructuralHeader(nextL)) break;
          if (/^#{1,3}\s+/.test(nextL)) break;

          const subBulletMatch = nextL.match(/^(?:[-*•+]|\d+[\.\)]|[a-zA-Z][\.\)])\s*(.+)$/);
          const isNextTermWithColon = /^[^:]{2,30}:\s*(?:.*)$/.test(nextL) && !subBulletMatch;
          if (isNextTermWithColon) break;

          if (subBulletMatch) {
            subItems.push(nextL);
            peekIdx++;
          } else if (!exp && subItems.length === 0 && nextL.length >= 3 && !nextL.endsWith(':')) {
            subItems.push(nextL);
            peekIdx++;
            break;
          } else {
            break;
          }
        }

        if (subItems.length > 0) {
          exp = exp ? (exp + '\n' + subItems.join('\n')) : subItems.join('\n');
          i = peekIdx - 1;
        }

        units.push({
          type: 'labeled_item',
          term: term,
          explanation: exp,
          text: line + (exp ? ' ' + exp : ''),
          section: currentSection,
          group: currentGroup
        });
      } else if (dashMatch && dashMatch[1].trim().length >= 2 && dashMatch[1].trim().split(/\s+/).length <= 8) {
        units.push({
          type: 'labeled_item',
          term: dashMatch[1].replace(/^[=\-*_~#+\d\.\)\-\s]+/, '').trim(),
          explanation: dashMatch[2].trim(),
          text: line,
          section: currentSection,
          group: currentGroup
        });
      } else if (standaloneItemMatch && standaloneItemMatch[1].trim().length >= 2 && standaloneItemMatch[1].trim().split(/\s+/).length <= 6 && !standaloneItemMatch[1].trim().endsWith('.')) {
        let term = standaloneItemMatch[1].trim();
        if (this.isStructuralHeader(term)) continue;

        let exp = '';
        const subItems = [];
        let peekIdx = i + 1;

        while (peekIdx < lines.length) {
          const nextL = lines[peekIdx].trim();
          if (!nextL) { peekIdx++; continue; }
          if (this.isStructuralHeader(nextL)) break;
          if (/^#{1,3}\s+/.test(nextL)) break;

          const subBulletMatch = nextL.match(/^(?:[-*•+]|\d+[\.\)]|[a-zA-Z][\.\)])\s*(.+)$/);
          const isNextTerm = /^[^:]{2,30}:?$/.test(nextL) && !subBulletMatch && nextL.split(/\s+/).length <= 6 && !nextL.endsWith('.');
          if (isNextTerm) break;

          if (subBulletMatch) {
            subItems.push(nextL);
            peekIdx++;
          } else if (subItems.length === 0 && nextL.length >= 3 && !nextL.endsWith(':')) {
            subItems.push(nextL);
            peekIdx++;
            break;
          } else {
            break;
          }
        }

        if (subItems.length > 0) {
          exp = subItems.join('\n');
          i = peekIdx - 1;
        }

        units.push({
          type: 'labeled_item',
          term: term,
          explanation: exp,
          text: line + (exp ? ' ' + exp : ''),
          section: currentSection,
          group: currentGroup
        });
      } else if (funcCopulaMatch && funcCopulaMatch[1].trim().length >= 2 && funcCopulaMatch[1].trim().split(/\s+/).length <= 6) {
        units.push({
          type: 'definition',
          term: funcCopulaMatch[1].replace(/^[=\-*_~#+\d\.\)\-\s]+/, '').trim(),
          explanation: funcCopulaMatch[2].trim(),
          text: line,
          section: currentSection,
          group: currentGroup
        });
      } else {
        const cleanL = line.replace(/^[=\-*_~#+\d\.\)\-\s]+/, '').trim();
        if (cleanL.length >= 3) {
          units.push({
            type: 'sentence',
            term: '',
            explanation: cleanL,
            text: line,
            section: currentSection,
            group: currentGroup
          });
        }
      }
    }

    return units;
  }

  /**
   * SINTESIS JAWABAN MODUL GURU CERDAS & ALAMI
   * Menjawab pertanyaan murid secara langsung, akurat, dan tidak pernah mengulang kalimat kaku
   */
  static synthesizeTeacherModuleAnswer(query, bestChunk, allChunks, moduleTitle, userAlias = '', fullModuleContent = '', directives = null) {
    const greetingName = userAlias ? `**${userAlias}**` : 'Muridku';
    const qLower = query.toLowerCase().trim();
    const cleanModTitle = moduleTitle || 'Modul Belajar';

    // 1. Ekstraksi unit-unit teks modul lengkap dan chunk
    const combinedContent = fullModuleContent || (allChunks && allChunks.length > 0 ? allChunks.map(c => c.text).join('\n\n') : (bestChunk ? bestChunk.text : ''));
    const units = this.parseModuleUnits(combinedContent);

    // 2. Analisis aspek pertanyaan 5W+1H
    const analysis = this.analyzeQuestion(query);
    const aspect = analysis.type || 'general';

    // 3. Ekstraksi kata kunci spesifik
    const commonWords = new Set([
      'dan', 'atau', 'pada', 'yang', 'ini', 'itu', 'adalah', 'merupakan', 'dari', 'untuk', 'dengan', 
      'dalam', 'di', 'ke', 'apa', 'apakah', 'bagaimana', 'gimana', 'mengapa', 'kenapa', 'bisa', 
      'terjadi', 'karena', 'oleh', 'suatu', 'secara', 'ada', 'saja', 'tersebut', 'tentang', 'mengenai', 
      'soal', 'tolong', 'coba', 'jelaskan', 'sebutkan', 'uraikan'
    ]);
    const titleWords = new Set(this.tokenize(cleanModTitle.toLowerCase()));
    const rawTokens = this.tokenize(qLower);
    const specificTokens = rawTokens.filter(w => !commonWords.has(w) && w.length >= 2);

    let answerText = '';

    // =========================================================================
    // SKENARIO 1: PERTANYAAN PERBANDINGAN (COMPARISON)
    // "Apa perbedaan X dan Y?", "Beda antara mulut dan lambung"
    // =========================================================================
    if (aspect === 'compare' || /(?:beda|bedanya|perbedaan|bandingkan|versus|\bvs\b)/i.test(qLower)) {
      const items = units.filter(u => u.term);
      const matchedItems = [];

      items.forEach(u => {
        const tLow = u.term.toLowerCase();
        const tWords = tLow.split(/[\s\(\)/]+/).filter(w => w.length >= 3 && !commonWords.has(w));
        if (tWords.length > 0 && tWords.every(w => qLower.includes(w))) {
          matchedItems.push({ weight: tWords.length + 5, unit: u });
        } else if (tWords.some(w => qLower.includes(w))) {
          matchedItems.push({ weight: 1, unit: u });
        }
      });

      matchedItems.sort((a, b) => b.weight - a.weight);
      const uniqueMatches = [];
      const seen = new Set();
      matchedItems.forEach(m => {
        if (!seen.has(m.unit.term)) {
          seen.add(m.unit.term);
          uniqueMatches.push(m.unit);
        }
      });

      if (uniqueMatches.length >= 2) {
        const u1 = uniqueMatches[0];
        const u2 = uniqueMatches[1];

        if (directives && directives.tone === 'casual') {
          answerText = `Nah ${greetingName}, ini dia bedanya antara **${u1.term}** sama **${u2.term}** menurut modul:

` +
            `1. 🔹 **${u1.term}:** ${u1.explanation}

` +
            `2. 🔸 **${u2.term}:** ${u2.explanation}

` +
            `Gampangannya tuh, keduanya punya fungsi dan peranan yang saling melengkapi dalam sistem materi ini!`;
        } else {
          answerText = `Berdasarkan modul **${cleanModTitle}**, berikut perbandingan antara **${u1.term}** dan **${u2.term}**, ${greetingName}:

` +
            `1. 🔹 **${u1.term}:** ${u1.explanation}

` +
            `2. 🔸 **${u2.term}:** ${u2.explanation}

` +
            `💡 **Inti Perbedaannya:** Keduanya memiliki karakteristik dan peran yang berbeda dalam materi ini, di mana masing-masing mempengaruhi kondisi sistem secara spesifik.`;
        }
      }
    }

    // =========================================================================
    // SKENARIO 2: PENCOCOKAN ISTILAH/KONSEP SPESIFIK (EXACT TERM TARGETING)
    // Jika pertanyaan menyebutkan konsep spesifik (misal: "mulut", "lambung", "kebijakan diskonto", "inflasi berat")
    // PENTING: Item konsep anak (labeled_item/definition) SELALU MENGALAHKAN seksi umum induk (seperti "Saluran Pencernaan")!
    // =========================================================================
    if (!answerText) {
      const termUnits = units.filter(u => u.term);
      const matchedTermCandidates = [];

      termUnits.forEach(u => {
        const tLow = u.term.toLowerCase();
        const tWords = tLow.split(/[\s\(\)/]+/).filter(w => w.length >= 2 && !commonWords.has(w));
        if (tWords.length === 0) return;

        let priority = 0;
        // Prioritas lebih tinggi untuk item/konsep anak daripada judul seksi induk
        if (u.type === 'labeled_item' || u.type === 'definition') {
          priority += 120;
        } else if (u.type === 'subgroup') {
          priority += 60;
        } else {
          priority += 30;
        }

        // Cek kecocokan seluruh istilah dalam query
        if (qLower.includes(tLow)) {
          priority += 150 + tLow.length;
          matchedTermCandidates.push({ priority, unit: u });
        } else {
          // Cek kecocokan seluruh kata kunci konsep
          const allWordsMatch = tWords.every(w => qLower.includes(w));
          if (allWordsMatch) {
            priority += 90 + tWords.length * 10;
            matchedTermCandidates.push({ priority, unit: u });
          } else {
            const matchCount = tWords.filter(w => qLower.includes(w)).length;
            if (matchCount > 0 && !titleWords.has(tWords[0])) {
              priority += matchCount * 25;
              matchedTermCandidates.push({ priority, unit: u });
            }
          }
        }
      });

      if (matchedTermCandidates.length > 0) {
        matchedTermCandidates.sort((a, b) => b.priority - a.priority);
        const topTerm = matchedTermCandidates[0].unit;

        // A. Jika menanyakan fungsi / peran
        if (aspect === 'function' || /(?:fungsi|fungsinya|peran|perannya|tugas|tugasnya|guna|gunanya|manfaat|manfaatnya)/i.test(qLower)) {
          answerText = `Berdasarkan materi modul **${cleanModTitle}**, fungsi dan peranan dari **${topTerm.term}** adalah, ${greetingName}:

` +
            `> ${topTerm.explanation}

` +
            `Hal ini merupakan bagian penting dalam topik *${topTerm.section}*.`;
        } else if (aspect === 'definition' || /^(?:apa\s+(?:itu|yang\s+dimaksud|arti|artinya|pengertian|definisi)|jelaskan\s+(?:pengertian|arti)?)/i.test(qLower)) {
          // B. Jika menanyakan definisi / pengertian
          answerText = `Berdasarkan modul **${cleanModTitle}**, **${topTerm.term}** adalah:

` +
            `> ${topTerm.explanation}

` +
            `Konsep ini merupakan materi penting dalam bab *${topTerm.section}*.`;
        } else if (directives && directives.tone === 'casual') {
          // C. Jika instruksi santai
          answerText = `Nah ${greetingName}, kalau dibahas santai tentang **${topTerm.term}** di modul **${cleanModTitle}**:

` +
            `Intinya tuh: ${topTerm.explanation}! 😎

` +
            `Hal ini merupakan poin penting yang dibahas pada bab *${topTerm.section}*.`;
        } else if (directives && directives.task === 'analogy') {
          // D. Jika instruksi analogi
          answerText = `Untuk memahami **${topTerm.term}** dengan sangat mudah, coba gunakan perumpamaan ini, ${greetingName}:

` +
            `Ibaratkan sistem ini seperti sebuah alur kerja terpadu di mana **${topTerm.term}** bertugas untuk ${topTerm.explanation.toLowerCase()}.

` +
            `Dengan perumpamaan ini, fungsinya jadi jauh lebih mudah dibayangkan.`;
        } else {
          // E. Penjelasan umum konsep
          answerText = `Mengenai **${topTerm.term}** dalam materi modul **${cleanModTitle}**, ${greetingName}:

` +
            `${topTerm.explanation}

` +
            `Hal ini merupakan bagian penting yang dibahas pada topik *${topTerm.section}*.`;
        }
      }
    }

    // =========================================================================
    // SKENARIO 3: SKOR BOBOT TOKEN TINGGI (High-Value / Discriminator Token Matching)
    // Menangkap token langka seperti BBM, SBI, BI-Rate, Cash Ratio, Parabola, dsb.
    // =========================================================================
    const scoredUnits = [];
    units.forEach(u => {
      let score = 0;
      const tLow = u.term.toLowerCase();
      const expLow = u.explanation.toLowerCase();

      specificTokens.forEach(tok => {
        const isDifferentiator = !titleWords.has(tok);
        const weight = isDifferentiator ? 80 : 15;

        if (tLow && tLow.includes(tok)) score += weight * 2.5;
        const wordRegex = new RegExp(`\b${tok.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\b`, 'i');
        if (wordRegex.test(expLow)) {
          score += weight * 2;
        } else if (expLow.includes(tok)) {
          score += weight;
        }
      });

      if (score > 0) {
        scoredUnits.push({ score, unit: u });
      }
    });
    scoredUnits.sort((a, b) => b.score - a.score);

    // =========================================================================
    // SKENARIO 4: PERTANYAAN JUMLAH / PERSENTASE / TINGKAT (QUANTITY / DEGREE)
    // "Berapa persentase inflasi berat?", "Berapa tingkat keparahan inflasi?"
    // =========================================================================
    if (!answerText && (aspect === 'how_many' || /(?:berapa|persentase|tingkat|rentang|kadar|jumlah)/i.test(qLower))) {
      if (scoredUnits.length > 0) {
        const topU = scoredUnits[0].unit;
        answerText = `Menurut materi modul pada bagian *${topU.section}*, **${topU.term}** adalah: **${topU.explanation}**, ${greetingName}.`;
      }
    }

    // =========================================================================
    // SKENARIO 5: PERTANYAAN PENYEBAB / FAKTOR / MENGAPA (CAUSES & REASONS)
    // "Apa penyebab inflasi?", "Mengapa kenaikan BBM bisa menyebabkan inflasi?"
    // =========================================================================
    if (!answerText && (aspect === 'why' || /(?:penyebab|faktor|pemicu|sumber|alasan|sebab|mengapa|kenapa)/i.test(qLower))) {
      if (scoredUnits.length > 0 && specificTokens.some(tok => !titleWords.has(tok) && !['faktor', 'penyebab', 'mengapa', 'kenapa'].includes(tok))) {
        const matchedU = scoredUnits[0].unit;
        const termLabel = matchedU.term ? `**${matchedU.term}**` : `pembahasan *${matchedU.section}*`;
        answerText = `Berdasarkan penjelasan modul **${cleanModTitle}**, hal tersebut berkaitan erat dengan ${termLabel}, ${greetingName}.

` +
          `Penjelasannya: ${matchedU.explanation}

` +
          `Dengan kata lain, faktor ini memicu peningkatan biaya operasional atau beban produksi yang kemudian mendorong kenaikan harga barang dan jasa secara keseluruhan.`;
      } else {
        const causeUnits = units.filter(u => u.section.toLowerCase().includes('penyebab') || u.group.toLowerCase().includes('penyebab'));
        const itemsUnderCause = causeUnits.filter(u => ['labeled_item', 'definition', 'sentence'].includes(u.type) && u.explanation);

        if (itemsUnderCause.length > 0) {
          answerText = `Berdasarkan modul **${cleanModTitle}**, faktor penyebab utama dapat dikelompokkan sebagai berikut, ${greetingName}:

`;
          itemsUnderCause.forEach((item, idx) => {
            const termPart = item.term ? `**${item.term}:** ` : '';
            answerText += `${idx + 1}. 📌 ${termPart}${item.explanation}

`;
          });
          answerText += `Faktor-faktor di atas menunjukkan bahwa fenomena ini dapat dipicu oleh tarikan permintaan masyarakat maupun dorongan dari kenaikan biaya produksi.`;
        }
      }
    }

    // =========================================================================
    // SKENARIO 6: PERTANYAAN CARA KERJA / LANGKAH / KEBIJAKAN (PROCESS & HOW)
    // "Bagaimana cara Bank Indonesia mengatasi inflasi?", "Langkah kebijakan moneter"
    // =========================================================================
    if (!answerText && (aspect === 'how' || /(?:bagaimana|gimana|cara|langkah|tahap|tahapan|kebijakan|mengatasi|solusi|upaya)/i.test(qLower))) {
      let targetGroup = null;
      units.forEach(u => {
        if (u.type === 'subgroup') {
          const gWords = u.term.toLowerCase().split(/[\s\(\)/]+/).filter(w => w.length >= 3 && !commonWords.has(w));
          if (gWords.some(w => qLower.includes(w))) {
            targetGroup = u.term;
          }
        }
      });

      if (targetGroup) {
        const groupItems = units.filter(u => u.group === targetGroup && ['labeled_item', 'sentence'].includes(u.type) && u.explanation);
        if (groupItems.length > 0) {
          answerText = `Berdasarkan penjelasan modul terkait **${targetGroup}**, langkah-langkah yang dilakukan meliputi, ${greetingName}:

`;
          groupItems.forEach((item, idx) => {
            const termPart = item.term ? `**${item.term}:** ` : '';
            answerText += `${idx + 1}. 🔹 ${termPart}${item.explanation}

`;
          });
          answerText += `Instrumen-instrumen ini ditujukan untuk mengendalikan peredaran likuiditas dan menstabilkan kondisi perekonomian secara terpadu.`;
        }
      } else {
        const howUnits = units.filter(u => 
          u.section.toLowerCase().includes('mengatasi') || 
          u.section.toLowerCase().includes('kebijakan') || 
          u.section.toLowerCase().includes('cara') ||
          u.section.toLowerCase().includes('persamaan')
        );
        const itemsUnderHow = howUnits.filter(u => ['labeled_item', 'sentence'].includes(u.type) && u.explanation);
        if (itemsUnderHow.length > 0) {
          answerText = `Berdasarkan modul **${cleanModTitle}**, langkah dan metodenya adalah sebagai berikut, ${greetingName}:

`;
          itemsUnderHow.slice(0, 4).forEach((item, idx) => {
            const termPart = item.term ? `**${item.term}:** ` : '';
            answerText += `${idx + 1}. 🔹 ${termPart}${item.explanation}

`;
          });
        }
      }
    }

    // =========================================================================
    // SKENARIO 7: FALLBACK PADA UNIT DENGAN SKOR TERTINGGI DARI CHUNK TERPILIH
    // =========================================================================
    if (!answerText && scoredUnits.length > 0) {
      const topU = scoredUnits[0].unit;
      const termTitle = topU.term ? `**${topU.term}**` : `bagian *${topU.section}*`;

      if (directives && directives.tone === 'casual') {
        answerText = `Nah ${greetingName}, terkait ${termTitle} dalam modul **${cleanModTitle}**:

` +
          `Intinya tuh: ${topU.explanation}

` +
          `Hal ini merupakan poin penting yang dibahas pada topik *${topU.section}*.`;
      } else {
        answerText = `Mengenai ${termTitle} dalam materi modul **${cleanModTitle}**, ${greetingName}:

` +
          `Intisari penjelasannya: ${topU.explanation}.

` +
          `Hal ini merupakan poin penting yang dibahas pada bagian *${topU.section}*.`;
      }
    }

    // =========================================================================
    // SKENARIO 8: FALLBACK UMUM MODUL DENGAN SINTESIS BEBAS COPY-PASTE
    // =========================================================================
    if (!answerText) {
      const chunkUnits = units.filter(u => u.explanation && u.explanation.length > 10);
      const topThree = chunkUnits.slice(0, 3);
      answerText = `Berdasarkan rangkuman materi modul **${cleanModTitle}**, berikut poin-poin utama yang perlu diperhatikan, ${greetingName}:

`;
      topThree.forEach((u, idx) => {
        const tLabel = u.term ? `**${u.term}:** ` : '';
        answerText += `${idx + 1}. ${tLabel}${u.explanation}

`;
      });
    }

    return {
      text: answerText.trim(),
      suggestions: []
    };
  }

  /**
   * Alias kompatibilitas mundur untuk parafrase chunk materi
   */
  static rephraseChunkWithTeacherVoice(chunk, query, userName, allChunks = [], fullModuleContent = '', directives = null) {
    const res = this.synthesizeTeacherModuleAnswer(query, chunk, allChunks, chunk ? chunk.title : 'Modul', userName, fullModuleContent, directives);
    return {
      explanation: res.text,
      formulaSection: null
    };
  }

  /**
   * PENCARIAN PENGETAHUAN ENSIKLOPEDIA GURU
   */
  static findMatchingKnowledge(query, directives, greetingName) {
    const qLower = query.toLowerCase();
    const coreSubj = (directives && directives.coreSubject ? directives.coreSubject : '').toLowerCase();

    for (const item of TEACHER_KNOWLEDGE) {
      let matched = false;

      // 1. Cek pola regex
      for (const pattern of item.patterns) {
        if (pattern.test(query) || (coreSubj && pattern.test(coreSubj))) {
          matched = true;
          break;
        }
      }

      // 2. Cek kecocokan judul atau kata kunci
      if (!matched && coreSubj.length >= 3) {
        const itemTitle = (item.title || '').toLowerCase();
        if (itemTitle.includes(coreSubj) || coreSubj.includes(itemTitle)) {
          matched = true;
        } else if (item.keywords && item.keywords.some(k => coreSubj.includes(k.toLowerCase()) || qLower.includes(k.toLowerCase()))) {
          matched = true;
        }
      }

      if (matched) {
        const text = this.formatKnowledgeWithDirectives(item, greetingName, directives);
        return {
          text: text,
          title: item.title,
          suggestions: item.suggestions || [
            'Beri tahu saya fakta menarik lainnya',
            'Bagaimana kaitan hal ini dengan kehidupan sehari-hari?',
            'Beri saya kuis singkat tentang ini'
          ]
        };
      }
    }

    return null;
  }

  /**
   * FORMAT PENJELASAN ENSIKLOPEDIA GURU SESUAI DIRECTIVES
   */
  static formatKnowledgeWithDirectives(item, greetingName, directives) {
    if (!directives || !directives.hasDirective) {
      return typeof item.teach === 'function' ? item.teach(greetingName) : item.teach;
    }

    const baseTeach = typeof item.teach === 'function' ? item.teach(greetingName) : item.teach;

    // 1. Tugas Cerita
    if (directives.task === 'story') {
      if (typeof item.story === 'function') return item.story(greetingName);
      if (typeof item.story === 'string') return item.story;
      return `Bayangkan sebuah cerita untuk memahami **${item.title}**, ${greetingName}:\n\n` +
        `Alkisah di sebuah desa yang tenang, seorang anak muda sering mengamati keajaiban di sekitarnya. Suatu hari ia menyaksikan peristiwa yang berkaitan langsung dengan fenomena ini.\n\n` +
        `${baseTeach}\n\n` +
        `Dari cerita ini, kita belajar bahwa setiap rahasia ilmu pengetahuan selalu bekerja nyata di sekitar kita!`;
    }

    // 2. Tugas Analogi
    if (directives.task === 'analogy') {
      if (typeof item.analogy === 'function') return item.analogy(greetingName);
      if (typeof item.analogy === 'string') return item.analogy;
      return `Untuk memahami **${item.title}** dengan sangat mudah, coba bayangkan perumpamaan ini, ${greetingName}:\n\n` +
        baseTeach;
    }

    // 3. Tugas Contoh Nyata Sehari-hari
    if (directives.task === 'real_life') {
      if (typeof item.realLife === 'function') return item.realLife(greetingName);
      if (typeof item.realLife === 'string') return item.realLife;
      return `Penerapan dan contoh nyata dari **${item.title}** dalam kehidupan sehari-hari, ${greetingName}:\n\n` +
        baseTeach;
    }

    // 4. Format Poin-Poin
    if (directives.format === 'points') {
      if (typeof item.points === 'function') return item.points(greetingName);
      if (Array.isArray(item.points)) {
        return `Berikut poin-poin penting mengenai **${item.title}**, ${greetingName}:\n\n` +
          item.points.map((pt, idx) => `${idx + 1}. ${pt}`).join('\n\n');
      }
      const sentences = baseTeach.split(/\n\n+/).filter(s => s.trim().length > 20);
      if (sentences.length > 1) {
        return `Berikut intisari dalam bentuk poin mengenai **${item.title}**, ${greetingName}:\n\n` +
          sentences.slice(0, directives.pointCount || 4).map((s, idx) => `${idx + 1}. ${s.replace(/^Nah [^,]+,\s*/i, '').trim()}`).join('\n\n');
      }
    }

    // 5. Singkat Padat (Concise)
    if (directives.brevity === 'concise') {
      if (typeof item.concise === 'function') return item.concise(greetingName);
      const firstParagraph = baseTeach.split(/\n\n+/)[0] || baseTeach;
      return `Secara singkat dan padat mengenai **${item.title}**, ${greetingName}:\n\n${firstParagraph}`;
    }

    // 6. Gaya Bahasa Santai (Casual)
    if (directives.tone === 'casual') {
      if (typeof item.casual === 'function') return item.casual(greetingName);
      return `Nah ${greetingName}, jadi gini ya kalau kita bahas secara santai tentang **${item.title}**! 😎\n\n` +
        baseTeach.replace(/^Nah [^,]+,\s*/i, '').replace(/^[A-Za-z]+, /i, '') +
        `\n\nGimana, penjelasannya masuk akal dan gampang dibayangin kan?`;
    }

    // 7. Gaya Bahasa Sederhana / Anak SD (Simple)
    if (directives.tone === 'simple') {
      if (typeof item.simple === 'function') return item.simple(greetingName);
      return `Sederhananya begini ya ${greetingName}, biar sangat gampang dipahami sejelas-jelasnya:\n\n` +
        baseTeach;
    }

    return baseTeach;
  }

  /**
   * SINTESIS JAWABAN UNIVERSAL GURU
   * Menjawab pertanyaan apapun secara edukatif, logis, dan ramah tanpa pernah menolak
   */
  static synthesizeUniversalAnswer(query, directives, greetingName, moduleTitle = '', moduleContent = '', chatHistory = []) {
    const analysis = this.analyzeQuestion(query);
    const coreTopic = (directives && directives.coreSubject) ? directives.coreSubject : (analysis.cleanSubject || query.replace(/[?.,!]+$/, '').trim());
    const qLower = query.toLowerCase();

    // 1. Cek Topik Populer Pendidikan & Pengetahuan Umum
    // A. Tokoh Proklamasi & Kemerdekaan
    if (/sayuti\s+melik/i.test(qLower)) {
      return {
        text: `Tokoh yang mengetik naskah Proklamasi Kemerdekaan Indonesia adalah **Mohamad Ibnu Sayuti** atau yang lebih dikenal sebagai **Sayuti Melik**, ${greetingName}!\n\nNaskah proklamasi dirumuskan oleh Ir. Soekarno, Drs. Moh. Hatta, dan Mr. Achmad Soebardjo di rumah Laksamana Maeda pada dini hari 17 Agustus 1945. Sayuti Melik kemudian mengetik naskah tersebut menggunakan mesin tik dengan beberapa perubahan kata (seperti kata 'tempoh' diubah menjadi 'tempo', dan 'wakil-wakil bangsa Indonesia' diubah menjadi 'Atas nama bangsa Indonesia').`,
        suggestions: ['Siapa yang menjahit bendera Merah Putih?', 'Kapan teks proklamasi dibacakan?', 'Siapa presiden pertama Indonesia?']
      };
    }

    if (/fatmawati/i.test(qLower) || /(siapa|tokoh).*menjahit.*bendera/i.test(qLower)) {
      return {
        text: `Tokoh yang menjahit Bendera Pusaka Sang Saka Merah Putih adalah **Ibu Fatmawati** (istri dari Presiden pertama RI, Bung Karno), ${greetingName}!\n\nBendera tersebut dijahit tangan dengan kain katun merah dan putih pada bulan Oktober 1944 saat Ibu Fatmawati sedang mengandung putra sulungnya, Guntur Soekarnoputra. Bendera inilah yang kemudian dikibarkan pada detik-detik Proklamasi Kemerdekaan 17 Agustus 1945 di Jalan Pegangsaan Timur 56 Jakarta.`,
        suggestions: ['Siapa yang mengetik naskah proklamasi?', 'Siapa presiden pertama Indonesia?']
      };
    }

    if (/(ibukota|ibu\s+kota).*indonesia/i.test(qLower)) {
      return {
        text: `Secara historis dan yuridis, ibu kota Indonesia saat ini sedang berada dalam masa transisi, ${greetingName}:\n\n1. **DKI Jakarta:** Pusat pemerintahan dan ekonomi utama Republik Indonesia saat ini.\n2. **Ibu Kota Nusantara (IKN):** Ibu kota masa depan yang dibangun di wilayah Kabupaten Penajam Paser Utara dan Kutai Kartanegara, Kalimantan Timur, berdasarkan Undang-Undang No. 3 Tahun 2022.\n\nPemindahan ini bertujuan untuk pemerataan pembangunan ekonomi (*Indonesia-sentris*) dan mengurangi beban ekologis pulau Jawa.`,
        suggestions: ['Kapan proklamasi kemerdekaan Indonesia?', 'Apa dasar negara Indonesia?']
      };
    }

    if (/(sumpah\s+pemuda)/i.test(qLower)) {
      return {
        text: `**Sumpah Pemuda** diikrarkan pada tanggal **28 Oktober 1928** dalam Kongres Pemuda II di Batavia (Jakarta), ${greetingName}!\n\nIsi tiga ikrar keramat Sumpah Pemuda:\n1. *Kami putra dan putri Indonesia, mengaku bertumpah darah yang satu, tanah air Indonesia.*\n2. *Kami putra dan putri Indonesia, mengaku berbangsa yang satu, bangsa Indonesia.*\n3. *Kami putra dan putri Indonesia, menjunjung bahasa persatuan, bahasa Indonesia.*\n\nPeristiwa inilah yang menjadi tonggak utama persatuan nasional bangsa Indonesia!`,
        suggestions: ['Kapan kemerdekaan Indonesia?', 'Apa isi 5 sila Pancasila?']
      };
    }

    // B. Sains & Tubuh Manusia
    if (/(sistem\s+pencernaan|organ\s+pencernaan|alur\s+makanan)/i.test(qLower)) {
      return {
        text: `Sistem pencernaan manusia bekerja seperti jalur pabrik pemrosesan makanan yang luar biasa, ${greetingName}!\n\nAlurnya secara berurutan:\n1. 👄 **Rongga Mulut:** Pencernaan mekanis (gigi & lidah) dan kimiawi (enzim amilase/ptialin memecah karbohidrat).\n2. 🥖 **Kerongkongan (*Esofagus*):** Menyalurkan makanan ke lambung melalui gerakan meremas dan mendorong (*gerak peristaltik*).\n3. 🫄 **Lambung:** Asam lambung (HCl) mematikan kuman dan enzim pepsin memecah protein menjadi pepton.\n4. 🌀 **Usus Halus (*Intestinum Tenue*):** Tempat utama penyerapan sari-sari makanan dengan bantuan enzim pankreas dan cairan empedu.\n5. 🧻 **Usus Besar (*Kolon*):** Menyerap sisa air dan mineral serta membusukkan ampas makanan dengan bantuan bakteri *E. coli* sebelum dibuang melalui anus.`,
        suggestions: ['Apa fungsi empedu?', 'Apa beda pencernaan mekanis dan kimiawi?']
      };
    }

    if (/(sel\s+hewan|sel\s+tumbuhan|beda.*sel\s+hewan.*tumbuhan)/i.test(qLower)) {
      return {
        text: `Perbedaan mendasar antara **Sel Hewan** dan **Sel Tumbuhan**, ${greetingName}:\n\n` +
          `1. **Dinding Sel:** Sel tumbuhan memiliki dinding sel yang kaku dari selulosa sehingga bentuknya tetap. Sel hewan tidak punya dinding sel, hanya membran sel yang lentur.\n` +
          `2. **Kloroplas:** Sel tumbuhan memiliki kloroplas untuk fotosintesis (membuat makanan sendiri). Sel hewan tidak memiliki kloroplas.\n` +
          `3. **Vakuola:** Sel tumbuhan memiliki satu vakuola berukuran sangat besar. Sel hewan vakuolanya sangat kecil atau tidak ada sama sekali.\n` +
          `4. **Sentriol:** Sel hewan memiliki sentriol untuk pembelahan sel, sedangkan sebagian besar tumbuhan tinggi tidak memilikinya.`,
        suggestions: ['Apa fungsi mitokondria?', 'Apa fungsi membran sel?']
      };
    }

    // C. Tips Belajar & Jadwal
    if (/(jadwal\s+belajar|buatkan\s+jadwal|atur\s+waktu\s+belajar)/i.test(qLower)) {
      return {
        text: `Berikut rekomendasi **Template Jadwal Belajar Harian yang Efektif**, ${greetingName} 📅:\n\n` +
          `1. 🌅 **Sesi Pagi (06.00 - 07.00):** Pelajari konsep berat/rumus baru saat otak masih segar.\n` +
          `2. 🏫 **Siang Hari:** Ikuti pembelajaran sekolah/kuliah dan catat poin-poin yang belum dipahami.\n` +
          `3. 🌆 **Sore Hari (16.30 - 17.30):** Kerjakan latihan soal atau review santai dengan Teknik Pomodoro (25 menit belajar + 5 menit istirahat).\n` +
          `4. 🌙 **Malam Hari (19.30 - 20.30):** Active recall (jelaskan kembali konsep hari ini tanpa melihat buku).\n` +
          `5. 💤 **Tidur Cukup (22.00):** Wajib tidur 7-8 jam agar memori tersimpan permanen di otak (*konsolidasi memori*).`,
        suggestions: ['Bagaimana teknik Pomodoro bekerja?', 'Bagaimana cara mengatasi malas belajar?']
      };
    }

    if (/(malas\s+belajar|mengatasi\s+malas|prokrastinasi|suka\s+nunda)/i.test(qLower)) {
      return {
        text: `Rasa malas atau menunda belajar (*prokrastinasi*) biasanya muncul bukan karena kita tidak pintar, melainkan karena target belajar terasa terlalu besar dan memberatkan otak, ${greetingName}!\n\n3 Trik Psikologis Ampuh Mengatasinya:\n1. ⏱️ **Aturan 2 Menit (*2-Minute Rule*):** Katakan pada dirimu: *"Aku cuma mau buka buku dan baca 2 menit saja, setelah itu boleh berhenti."* Begitu tubuhmu mulai bergerak, rasa malas akan hilang dengan sendirinya!\n2. 🧩 **Pecah Jadi Tugas Sangat Kecil:** Jangan pasang target "belajar 1 bab fisika". Ganti dengan "kerjakan 1 nomor soal saja".\n3. 📵 **Jauhkan HP dari Jangkauan Tangan:** Taruh smartphone di ruangan lain saat belajar agar dopamin tidak terdistraksi scrolling medsos.`,
        suggestions: ['Buatkan jadwal belajar harian', 'Apa itu teknik Pomodoro?']
      };
    }

    // D. Tanggapan Pedagogis Terstruktur untuk Topik Lainnya
    let explanation = '';
    const tone = directives && directives.tone ? directives.tone : 'natural';
    const task = directives && directives.task ? directives.task : 'explain';

    if (task === 'story') {
      explanation = `Bayangkan sebuah cerita mengenai **${coreTopic}**, ${greetingName}:\n\n` +
        `Dalam perjalanan sains dan pengetahuan manusia, konsep ${coreTopic} lahir ketika para ilmuwan dan pengamat berusaha memecahkan teka-teki alam di hadapan mereka. Ketika fenomena ini diteliti lebih dalam, terungkap bahwa hal tersebut memiliki keteraturan yang luar biasa.\n\n` +
        `Mekanisme ini mengajarkan kita bahwa apa pun yang terjadi di dunia nyata selalu memiliki prinsip sebab-akibat yang rasional dan terstruktur.`;
    } else if (task === 'analogy') {
      explanation = `Untuk membayangkan konsep **${coreTopic}** dengan sangat mudah, ${greetingName}:\n\n` +
        `Ibaratkan konsep ini seperti aturan main dalam sebuah permainan strategi. Setiap elemen memiliki peranan yang saling mempengaruhi: saat satu faktor mengalami perubahan, bagian lainnya akan menyesuaikan secara dinamis agar keseimbangan tetap terjaga.`;
    } else if (directives && directives.format === 'points') {
      explanation = `Berikut 3 poin penting mengenai **${coreTopic}**, ${greetingName}:\n\n` +
        `1. 💡 **Hakikat & Makna Inti:** Mempelajari prinsip dasar bagaimana konsep ini didefinisikan dan bekerja.\n\n` +
        `2. ⚙️ **Mekanisme & Cara Kerja:** Alur proses yang mendasari terjadinya fenomena atau hukum tersebut.\n\n` +
        `3. 🎯 **Manfaat & Penerapan Nyata:** Bagaimana konsep ini diterapkan dalam sains, teknologi, dan kehidupan kita.`;
    } else if (tone === 'casual') {
      explanation = `Nah ${greetingName}, jadi gini ya kalau kita bahas santai mengenai **${coreTopic}**! 😎\n\n` +
        `Intinya, topik ini membahas bagaimana suatu prinsip dasar atau fenomena bekerja secara logis. Kalau kita bayangkan di kehidupan sehari-hari, hal ini berkaitan erat dengan cara sistem atau alam menjaga fungsinya tetap optimal. Ada bagian spesifik yang bikin kamu paling penasaran?`;
    } else {
      explanation = `Mengenai topik **${coreTopic}**, ${greetingName}:\n\n` +
        `Konsep ini merupakan salah satu bahasan penting dalam pembelajaran. Intisari utamanya terletak pada bagaimana prinsip-prinsip dasarnya bekerja dan memberikan dampak nyata pada sistem yang bersangkutan.\n\n` +
        `Setiap aturan atau fakta dalam topik ini dibangun atas dasar hubungan sebab-akibat yang runtut dan ilmiah.`;
    }

    return {
      text: explanation,
      suggestions: [
        `Jelaskan contoh nyata mengenai ${coreTopic}`,
        `Beri saya kuis singkat tentang topik ini`,
        `Rangkum intisari pentingnya`
      ]
    };
  }

  // Alias agar kompatibel dengan pemanggilan fungsi lama
  static synthesizeTeacherDirectAnswer(query, moduleContent, moduleTitle, userAlias = '', chatHistory = []) {
    const directives = this.parseDirectives(query);
    const greetingName = userAlias ? `**${userAlias}**` : 'Muridku';
    return this.synthesizeUniversalAnswer(query, directives, greetingName, moduleTitle, moduleContent, chatHistory);
  }

  /**
   * Google Gemini Live Generative LLM
   */
  static async generateGeminiResponse(apiKey, modelName = 'gemini-1.5-flash', userQuery, moduleContent = '', moduleTitle = '', chatHistory = [], currentUserName = '') {
    const userAlias = currentUserName ? currentUserName : '';
    const cleanModel = modelName || 'gemini-1.5-flash';
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${cleanModel}:generateContent?key=${apiKey.trim()}`;

    const systemPrompt = `Kamu adalah EduBot AI, seorang asisten tutor belajar cerdas, ramah, dan komunikatif dalam Bahasa Indonesia untuk muridmu (${userAlias ? `Nama murid: ${userAlias}` : 'Murid'}).
Modul belajar rujukan saat ini: "${moduleTitle || 'Modul Belajar'}".
Teks modul pendukung:
"""
${(moduleContent || '').substring(0, 5000)}
"""

PANDUAN UTAMA:
1. PAHAMI BAHASA INDONESIA & PATUHI PERINTAH/INSTRUKSI PENGGUNA 100%:
   - Pengguna bebas memberikan instruksi atau perintah mengenai gaya bahasa dan format.
   - Jika pengguna meminta gaya tertentu ("bahasa santai/gaul", "sesederhana mungkin seperti anak SD", "singkat padat", "bahasa formal"), IKUTI instruksi tersebut dengan konsisten!
   - Jika pengguna meminta format kreatif ("buatkan cerita pendek", "buatkan analogi/perumpamaan", "beri contoh nyata sehari-hari", "buat tabel perbandingan", atau "buat dalam 3 poin"), BUATKAN sesuai permintaan dengan sangat baik.
2. DILARANG KERAS COPY-PASTE KAKU DARI TEKS MODUL:
   - Teks modul di atas hanya referensi data dan fakta ilmiah/konseptual.
   - Kamu WAJIB menjelaskan dengan KATA-KATA SENDIRI yang mengalir, hidup, mudah dibayangkan, dan masuk akal (makes sense). Jangan pernah menyalin mentah-mentah kalimat dari teks modul!
3. JAWAB PERTANYAAN DENGAN AKURAT & TEPAT SASARAN:
   - Jawab langsung apa yang ditanyakan murid.
   - Jika murid menanyakan topik di luar modul (sains umum, matematika, sejarah, IT, tips belajar, dll.), jawablah secara lengkap, tepat sasaran, dan mendalam. Jangan pernah menolak dengan mengatakan topik tidak ada di modul.
4. INTERAKSI HANGAT:
   - Selalu bersikap ramah, suportif, dan edukatif selayaknya guru pembimbing terbaik.`;

    const contents = [];
    const recentHistory = chatHistory.slice(-8);
    recentHistory.forEach(msg => {
      contents.push({
        role: msg.sender === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }]
      });
    });

    contents.push({
      role: 'user',
      parts: [{ text: userQuery }]
    });

    const payload = {
      systemInstruction: { parts: [{ text: systemPrompt }] },
      contents: contents,
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 4096
      }
    };

    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      const errMsg = errData.error && errData.error.message ? errData.error.message : `HTTP ${res.status}`;
      throw new Error(errMsg);
    }

    const data = await res.json();
    const candidate = data.candidates && data.candidates[0];
    const outputText = candidate && candidate.content && candidate.content.parts && candidate.content.parts[0] 
      ? candidate.content.parts[0].text 
      : 'Maaf, saya tidak dapat menghasilkan respon.';

    return {
      text: outputText,
      intent: 'gemini_response',
      type: 'gemini',
      badgeText: `Guru AI (${cleanModel})`,
      suggestions: [
        'Beri saya contoh kasus lain',
        'Jelaskan lebih sederhana lagi',
        'Buatkan kuis latihan singkat'
      ]
    };
  }

  /**
   * Google Gemini Live Summary Review Generator
   * Menyusun Dokumen Review Materi Pembelajaran Menggunakan LLM Gemini
   */
  static async generateGeminiSummary(apiKey, modelName = 'gemini-1.5-flash', moduleContent = '', moduleTitle = '', chatHistory = [], currentUserName = '') {
    const userAlias = currentUserName ? currentUserName : '';
    const cleanModel = modelName || 'gemini-1.5-flash';

    // Periksa apakah user dan AI sudah mendiskusikan materi dalam obrolan
    const { hasDiscussed, academicInteractions } = this.extractAcademicDiscussions(chatHistory, moduleContent);
    if (!hasDiscussed) {
      return {
        title: `Review: ${moduleTitle}`,
        isEmpty: true,
        markdown: '',
        source: 'gemini'
      };
    }

    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${cleanModel}:generateContent?key=${apiKey.trim()}`;

    const summaryPrompt = `Kamu adalah EduBot AI, seorang guru dan tutor belajar pribadi yang cerdas, hangat, dan komunikatif.
Tugasmu adalah membuat DOKUMEN REVIEW RANGKUMAN HASIL BELAJAR untuk muridmu bernama ${userAlias || 'Muridku'}.
Modul rujukan: "${moduleTitle || 'Materi Belajar'}"

PANDUAN MUTLAK REVIEW MATERI (BERDASARKAN HASIL CHAT BERSAMA):
1. INI ADALAH REVIEW MATERI DARI HASIL CHAT/DISKUSI BERSAMA: HANYA ulas konsep-konsep materi yang BENAR-BENAR TELAH DIBAHAS atau DITANYAKAN oleh murid dalam sesi chat ini!
2. JANGAN MENGULAS ATAU MENGISI BAB LAIN DARI MODUL yang belum pernah dibahas sama sekali dalam obrolan!
3. DILARANG KERAS membuat log chat (JANGAN membuat daftar '1. Murid bertanya...', '2. Guru menjawab...'). Rangkumlah intisari konsep, fakta ilmiah, pemahaman, dan analogi yang telah dipelajari bersama.
4. Format Markdown yang Rapi:
   - ## 📋 Review Hasil Belajar: ${moduleTitle || 'Materi Pembelajaran'}
   - ### 🎯 Topik Materi yang Telah Kita Pelajari Bersama
   - ### 📖 Intisari & Pembahasan Konsep yang Telah Dibahas
   - ### 🔑 Poin Kunci & Rumus Terkait
   - ### 💡 Refleksi & Uji Pemahaman Mandiri`;

    const contents = [];
    const recentHistory = (academicInteractions.length > 0 ? academicInteractions : chatHistory).slice(-16);
    recentHistory.forEach(msg => {
      contents.push({
        role: msg.sender === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }]
      });
    });

    contents.push({
      role: 'user',
      parts: [{ text: 'Tolong buatkan dokumen review materi pembelajaran yang telah kita bahas bersama terkait materi ini sesuai panduan.' }]
    });

    const payload = {
      systemInstruction: { parts: [{ text: summaryPrompt }] },
      contents: contents,
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 1800
      }
    };

    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      const errMsg = errData.error && errData.error.message ? errData.error.message : `HTTP ${res.status}`;
      throw new Error(errMsg);
    }

    const data = await res.json();
    const candidate = data.candidates && data.candidates[0];
    const outputText = candidate && candidate.content && candidate.content.parts && candidate.content.parts[0] 
      ? candidate.content.parts[0].text 
      : 'Maaf, gagal menyusun review materi.';

    return {
      title: `Review: ${moduleTitle}`,
      markdown: outputText,
      source: 'gemini'
    };
  }

  /**
   * Helper Sintesis Review Singkat Satu Bagian Modul (Tanpa Copy-Paste)
   */
  static synthesizeChunkReviewText(chunk) {
    const lines = chunk.text.split('\n')
      .map(l => l.trim())
      .filter(l => l.length > 0 && !/^[=\-\*_~#+]{2,}$/.test(l));
    const cleanTitle = chunk.title.replace(/^[=\-\*_~#+\d\.\)\-\s]+/, '').replace(/[=\-\*_~#+\s]+$/, '').trim();
    const titleLower = cleanTitle.toLowerCase();

    // Mapping ringkasan review untuk materi modul populer
    if (/faktor.*inflasi|penyebab.*inflasi|demand\s*pull|cost\s*push/i.test(titleLower)) {
      return `Membahas 3 pemicu kenaikan harga barang secara umum: **Tarikan Permintaan** (barang langka diperebutkan banyak orang berduit), **Dorongan Biaya** (pabrik menaikkan harga karena biaya BBM, listrik, dan upah melonjak), dan **Inflasi Impor** (penularan harga mahal dari pasar luar negeri).`;
    }
    if (/kebijakan.*inflasi|mengatasi.*inflasi|moneter|fiskal/i.test(titleLower)) {
      return `Membahas instrumen penjinak inflasi melalui **Kebijakan Moneter Bank Indonesia** (menaikkan BI-Rate agar masyarakat menabung dan mengerem pinjaman, operasi pasar terbuka, serta cadangan kas) dan **Kebijakan Fiskal Pemerintah** (efisiensi belanja negara dan pengaturan pajak) untuk menstabilkan kembali harga pasar.`;
    }
    if (/definisi\s+inflasi/i.test(titleLower)) {
      return `Membahas hakikat inflasi sebagai kenaikan harga barang dan jasa secara luas dan berkelanjutan, yang menyebabkan daya beli uang kita menyusut dari waktu ke waktu.`;
    }
    if (/hukum.*newton|inersia/i.test(titleLower)) {
      return `Membahas 3 aturan emas dinamika gerak: sifat kelembaman benda yang mempertahankan keadaannya (Hukum I), hubungan gaya dorong, massa, dan percepatan (Hukum II: \`F = m · a\`), serta prinsip gaya timbal balik aksi-reaksi (Hukum III).`;
    }
    if (/komponen\s+darah/i.test(titleLower)) {
      return `Membahas susunan cairan hidup tubuh: **Plasma darah** sebagai pelarut nutrisi, **Eritrosit** pengantar oksigen berkat hemoglobin, **Leukosit** sebagai benteng kekebalan dari penyakit, dan **Trombosit** penutup luka pendarahan.`;
    }
    if (/jantung|peredaran\s+darah/i.test(titleLower)) {
      return `Membahas mekanisme pompa ganda 4 ruang jantung (serambi dan bilik) yang menggerakkan dua rute sirkulasi: peredaran kecil untuk membersihkan darah di paru-paru dan peredaran besar untuk menghidupi seluruh jaringan tubuh.`;
    }
    if (/aljabar|persamaan/i.test(titleLower)) {
      return `Membahas prinsip keseimbangan matematika di mana variabel dan koefisien diperlakukan seperti neraca timbangan yang adil melalui operasi pindah ruas yang teratur.`;
    }

    // Default sintetis umum yang ditulis ulang
    const contentLines = lines.filter((l, idx) => idx > 0 && !l.toLowerCase().startsWith('modul'));
    if (contentLines.length > 0) {
      const summaryLine = contentLines[0]
        .replace(/^[#\d\.\)\-\s]+/, '')
        .replace(/adalah cabang (?:ilmu )?yang mempelajari/i, 'membahas prinsip')
        .replace(/merupakan sistem/i, 'berfungsi sebagai sistem')
        .replace(/terjadi karena/i, 'dipicu oleh')
        .replace(/didefinisikan sebagai/i, 'mengulas tentang');
      return `Membahas intisari konsep terkait **${cleanTitle}**, yaitu ${summaryLine.charAt(0).toLowerCase() + summaryLine.slice(1)}. Bagian ini memberikan pemahaman dasar tentang bagaimana konsep tersebut diaplikasikan secara nyata.`;
    }

    return `Membahas konsep penting pada topik **${cleanTitle}** yang melandasi pemahaman keseluruhan materi.`;
  }

  /**
   * Ekstraksi dan Analisis Riwayat Obrolan Terkait Materi Pelajaran
   * Memastikan review materi HANYA merangkum hasil diskusi nyata antara user dan AI
   */
  static extractAcademicDiscussions(chatHistory = [], moduleContent = '') {
    const chunks = this.parseModuleChunks(moduleContent);
    const nonAcademicIntents = new Set([
      'greeting', 'name_intro', 'greeting_checkin', 'module_loaded',
      'bot_creator', 'bot_identity', 'bot_capabilities', 'bot_gender_age',
      'casual_affirmation', 'casual_negation', 'user_fatigue', 'farewell',
      'humor', 'system_ping', 'ai_critique', 'meta_clarification',
      'summary_empty', 'unclear_input'
    ]);

    // Kumpulan pesan yang substantif membahas pelajaran
    const academicInteractions = [];
    const discussedChunks = [];
    const discussedChunkTitles = new Set();
    const additionalTopics = [];

    // Filter pesan chat
    for (let i = 0; i < chatHistory.length; i++) {
      const msg = chatHistory[i];
      if (!msg || !msg.text) continue;

      // Lewati pesan sambutan bot awal saat modul baru dibuka
      if (msg.sender === 'ai' && msg.intent === 'module_loaded') continue;

      // Cek apakah pesan AI merupakan respons non-akademis
      if (msg.sender === 'ai' && msg.intent && nonAcademicIntents.has(msg.intent)) continue;

      const cleanText = msg.text.trim();

      // Cek apakah pesan user adalah sapaan murni, afirmasi, atau non-materi
      if (msg.sender === 'user') {
        const userClassification = this.classifyUserInput(cleanText);
        if (userClassification.category !== 'academic_question' && 
            userClassification.category !== 'student_answer' && 
            userClassification.category !== 'math') {
          continue;
        }
      }

      academicInteractions.push(msg);
    }

    // Jika tidak ada interaksi akademis sama sekali
    if (academicInteractions.length === 0) {
      return {
        hasDiscussed: false,
        discussedChunks: [],
        additionalTopics: [],
        academicInteractions: []
      };
    }

    // Cocokkan interaksi akademis dengan chunk modul
    chunks.forEach(chunk => {
      const titleLower = chunk.title.toLowerCase();
      const chunkTokens = chunk.tokens.filter(t => !QUERY_COMMAND_WORDS.has(t) && !ID_STOPWORDS.has(t));
      let isDiscussed = false;

      for (const msg of academicInteractions) {
        // Jika AI mencatat sourceChunk
        if (msg.sourceChunk && msg.sourceChunk.toLowerCase().includes(titleLower)) {
          isDiscussed = true;
          break;
        }

        const msgLower = msg.text.toLowerCase();
        // Pencocokan judul modul dalam teks
        if (msgLower.includes(titleLower) && titleLower.length > 3) {
          isDiscussed = true;
          break;
        }

        // Pencocokan token substantif chunk
        let matchCount = 0;
        for (const token of chunkTokens) {
          if (token.length > 2 && msgLower.includes(token)) {
            matchCount++;
          }
          if (matchCount >= 2) break;
        }
        if (matchCount >= 2) {
          isDiscussed = true;
          break;
        }
      }

      if (isDiscussed && !discussedChunkTitles.has(chunk.title)) {
        discussedChunkTitles.add(chunk.title);
        discussedChunks.push(chunk);
      }
    });

    // Cari topik diskusi di luar modul yang ditanyakan user dan dijawab guru
    academicInteractions.forEach((msg, idx) => {
      if (msg.sender === 'user') {
        const qClean = msg.text.trim();
        if (qClean.length >= 6) {
          const alreadyInChunk = discussedChunks.some(c => 
            c.title.toLowerCase().includes(qClean.toLowerCase()) || 
            qClean.toLowerCase().includes(c.title.toLowerCase())
          );
          if (!alreadyInChunk) {
            const shortTitle = this.extractCoreTopic(qClean);
            if (shortTitle.length >= 3 && !additionalTopics.some(t => t.title.toLowerCase() === shortTitle.toLowerCase())) {
              const nextAiMsg = academicInteractions.slice(idx + 1).find(m => m.sender === 'ai');
              additionalTopics.push({
                title: shortTitle.charAt(0).toUpperCase() + shortTitle.slice(1),
                query: qClean,
                answerSnippet: nextAiMsg ? nextAiMsg.text : ''
              });
            }
          }
        }
      }
    });

    const hasDiscussed = discussedChunks.length > 0 || additionalTopics.length > 0;

    return {
      hasDiscussed,
      discussedChunks,
      additionalTopics,
      academicInteractions
    };
  }

  /**
   * RANGKUMAN MATERI PEMBELAJARAN
   * Merangkum intisari materi modul secara langsung, padat, dan to-the-point tanpa copy-paste kaku.
   */
  static generateSummary(moduleContent, moduleTitle, chatHistory = [], userAlias = '') {
    const chunks = this.parseModuleChunks(moduleContent);
    if (!chunks || chunks.length === 0) {
      return {
        title: `Rangkuman: ${moduleTitle}`,
        isEmpty: true,
        markdown: '',
        sectionsCount: 0,
        discussedCount: 0
      };
    }

    const { hasDiscussed, discussedChunks, additionalTopics } = this.extractAcademicDiscussions(chatHistory, moduleContent);

    // Jika user sudah berdiskusi, utamakan topik yang telah dibahas. Jika belum, rangkum seluruh bagian modul!
    const targetChunks = (hasDiscussed && discussedChunks.length > 0) ? discussedChunks : chunks;

    let summaryMarkdown = `## 📋 Rangkuman Materi: ${moduleTitle}\n\n`;

    // A. Pokok Bahasan Utama
    summaryMarkdown += `### 🎯 Pokok Bahasan Utama\n`;
    let topicIdx = 1;
    targetChunks.forEach((chunk) => {
      const cleanTitle = chunk.title.replace(/^[=\-\*_~#+\d\.\)\-\s]+/, '').replace(/[=\-\*_~#+\s]+$/, '').trim();
      summaryMarkdown += `${topicIdx++}. **${cleanTitle}**\n`;
    });
    if (additionalTopics && additionalTopics.length > 0) {
      additionalTopics.forEach((topic) => {
        summaryMarkdown += `${topicIdx++}. **${topic.title}** *(Diskusi Chat)*\n`;
      });
    }
    summaryMarkdown += `\n`;

    // B. Intisari Konsep Penting
    summaryMarkdown += `### 📖 Intisari Konsep per Bagian\n`;
    targetChunks.forEach((chunk) => {
      const cleanTitle = chunk.title.replace(/^[=\-\*_~#+\d\.\)\-\s]+/, '').replace(/[=\-\*_~#+\s]+$/, '').trim();
      summaryMarkdown += `#### 🔹 ${cleanTitle}\n`;
      const synthesis = this.synthesizeChunkReviewText(chunk);
      summaryMarkdown += `${synthesis}\n\n`;
    });

    if (additionalTopics && additionalTopics.length > 0) {
      additionalTopics.forEach((topic) => {
        summaryMarkdown += `#### 🔹 Diskusi: ${topic.title}\n`;
        if (topic.answerSnippet) {
          const firstPara = topic.answerSnippet.split('\n\n')[0]
            .replace(/^(Halo|Hai|Pertanyaan yang|Tentu)[^!.]*[!.]\s*/i, '')
            .trim();
          summaryMarkdown += `Membahas konsep terkait pertanyaan *"\"${topic.query}\"*: ${firstPara}\n\n`;
        } else {
          summaryMarkdown += `Membahas konsep dan penerapan topik **${topic.title}**.\n\n`;
        }
      });
    }

    // C. Formulasi / Rumus Kunci & Poin Penting
    const relevantFormulas = [];
    const relevantKeyRules = [];

    targetChunks.forEach(chunk => {
      const lines = chunk.text.split('\n');
      lines.forEach(l => {
        const trimmed = l.trim();
        if (trimmed.includes('=') || /rumus/i.test(trimmed) || trimmed.includes('Σ') || trimmed.includes('∑')) {
          const cleanTitle = chunk.title.replace(/^[=\-\*_~#+\d\.\)\-\s]+/, '').replace(/[=\-\*_~#+\s]+$/, '').trim();
          relevantFormulas.push({ chunkTitle: cleanTitle, formula: trimmed.replace(/^[-*]\s*/, '') });
        } else if (trimmed.startsWith('-') || trimmed.startsWith('*') || /^[A-Z]\./.test(trimmed)) {
          if (trimmed.length > 15 && trimmed.length < 130) {
            relevantKeyRules.push(trimmed.replace(/^[-*]\s*|^[A-Z]\.\s*/, '').trim());
          }
        }
      });
    });

    if (relevantFormulas.length > 0) {
      summaryMarkdown += `### 🔑 Formulasi / Rumus Kunci\n`;
      relevantFormulas.slice(0, 5).forEach(f => {
        summaryMarkdown += `- **${f.chunkTitle}:** \`${f.formula}\`\n`;
      });
      summaryMarkdown += `\n`;
    }

    if (relevantKeyRules.length > 0) {
      summaryMarkdown += `### 📌 Poin Kunci Ringkas\n`;
      relevantKeyRules.slice(0, 5).forEach((rule, idx) => {
        summaryMarkdown += `${idx + 1}. **${rule.split(':')[0]}**: ${rule.includes(':') ? rule.split(':')[1].trim() : rule}\n`;
      });
      summaryMarkdown += `\n`;
    }

    return {
      title: `Rangkuman: ${moduleTitle}`,
      isEmpty: false,
      markdown: summaryMarkdown.trim(),
      sectionsCount: chunks.length,
      discussedCount: targetChunks.length
    };
  }

  /**
   * Kuis Evaluasi Pemahaman Murid (Legacy Text Version)
   */
    /**
   * Kuis Evaluasi Pemahaman Murid (Pertanyaan Materi Substantif)
   */
  static generateQuiz(moduleContent, moduleTitle, userAlias = '') {
    const greeting = userAlias ? `untuk **${userAlias}**` : '';
    let quizText = `🎯 **Kuis Evaluasi Pemahaman: ${moduleTitle} ${greeting}**\n\n`;
    quizText += `Yuk coba jawab pertanyaan evaluasi materi berikut dengan pemahamanmu sendiri ya:\n\n`;

    const units = this.parseModuleUnits(moduleContent);
    // Ambil konsep-konsep substantif spesifik (bukan sekadar judul bab)
    const substantiveConcepts = units.filter(u => 
      u.term && u.term.length >= 2 && u.explanation && u.explanation.length >= 10 &&
      !/^(?:\d+[\.\)]\s+|bab\s+\d+|bagian\s+\d+)/i.test(u.term)
    );

    if (substantiveConcepts.length > 0) {
      const chosen = substantiveConcepts.slice(0, 3);
      chosen.forEach((c, idx) => {
        quizText += `**Soal ${idx + 1}:** Berdasarkan materi modul, jelaskan proses atau peranan penting yang berkaitan dengan **${c.term}**!\n`;
      });
    } else {
      const chunks = this.parseModuleChunks(moduleContent);
      const sample = chunks.slice(0, 3);
      sample.forEach((chunk, idx) => {
        const cleanTitle = chunk.title.replace(/^[=\-\*_~#+\d\.\)\-\s]+/, '').replace(/[=\-\*_~#+\s]+$/, '').trim();
        quizText += `**Soal ${idx + 1}:** Jelaskan fakta dan intisari materi yang dipaparkan mengenai topik **${cleanTitle || 'ini'}**!\n`;
      });
    }

    quizText += `\n*Ketik jawabanmu di kolom chat, atau tanyakan jika ada konsep materi yang ingin diperdalam bersama guru!*`;
    return quizText;
  }

  /**
   * Generator Kuis Pilihan Ganda Interaktif Berdasarkan Modul Belajar
   * Menghasilkan pool soal pilihan ganda, kunci jawaban, dan pembahasan mendalam oleh AI.
   * Pertanyaan berfokus pada materi fakta/mekanisme di dalam modul (bukan judul bab).
   * Opsi pilihan ganda adalah substansi materi yang realistis (bukan "pernyataan di atas" atau "konsep").
   *
   * @param {string} moduleContent - Isi teks modul
   * @param {string} moduleTitle - Judul modul
   * @param {number} count - Jumlah pertanyaan yang diinginkan
   * @returns {Array<Object>} List pertanyaan kuis pilihan ganda
   */
  static generateMultipleChoiceQuiz(moduleContent = '', moduleTitle = '', count = 5) {
    const contentLower = (moduleContent || '').toLowerCase();
    const titleLower = (moduleTitle || '').toLowerCase();
    const pool = [];

    // =========================================================================
    // 1. QUESTION POOL SPESIFIK: EKONOMI & INFLASI
    // =========================================================================
    if (contentLower.includes('inflasi') || titleLower.includes('inflasi')) {
      pool.push({
        id: 'inf_1',
        topic: 'Definisi Inflasi',
        question: 'Apa definisi paling mendasar dari fenomena inflasi dalam suatu perekonomian?',
        correctText: 'Kenaikan harga barang dan jasa secara umum dan terus-menerus dalam periode waktu tertentu.',
        distractors: [
          'Kenaikan harga satu komoditas tertentu saja yang berlangsung sesaat karena kelangkaan musiman.',
          'Penurunan jumlah uang yang beredar di masyarakat sehingga nilai nominal uang menjadi berlipat ganda.',
          'Peningkatan daya beli riil masyarakat yang mendorong penurunan harga seluruh barang di pasar.'
        ],
        aiExplanation: 'Secara prinsip ekonomi, inflasi bukanlah lonjakan harga satu komoditas musiman semata (seperti cabai saat gagal panen), melainkan kenaikan harga yang bersifat umum pada sebagian besar barang dan jasa secara terus-menerus. Akibatnya, nilai riil uang mengalami penurunan daya beli.'
      });

      pool.push({
        id: 'inf_2',
        topic: 'Penyebab Inflasi (Demand-Pull)',
        question: 'Kondisi manakah yang paling tepat menggambarkan terjadinya Demand-Pull Inflation?',
        correctText: 'Tingginya permintaan agregat masyarakat terhadap barang dan jasa yang melampaui kapasitas produksi yang tersedia.',
        distractors: [
          'Kenaikan biaya bahan baku impor akibat depresiasi nilai tukar mata uang domestik.',
          'Kenaikan upah buruh dan tarif listrik pabrik yang menekan batas keuntungan produsen.',
          'Pemerintah menaikkan suku bunga acuan bank sentral sehingga minat meminjam kredit menurun drastis.'
        ],
        aiExplanation: 'Demand-Pull Inflation dipicu dari sisi konsumen (permintaan). Ketika daya beli dan uang beredar tinggi, permintaan barang melonjak melebihi kapasitas suplai produsen (excess demand), sehingga harga pasar terdorong naik sesuai hukum penawaran dan permintaan.'
      });

      pool.push({
        id: 'inf_3',
        topic: 'Penyebab Inflasi (Cost-Push)',
        question: 'Manakah faktor pemicu utama timbulnya Cost-Push Inflation pada sektor industri?',
        correctText: 'Kenaikan biaya operasional produksi seperti harga bahan bakar minyak (BBM), tarif energi, dan bahan baku.',
        distractors: [
          'Peningkatan jumlah bantuan tunai masyarakat yang membuat konsumsi barang sekunder meroket.',
          'Masyarakat memindahkan simpanannya ke bank umum karena tingginya bunga deposito.',
          'Penurunan tarif pajak pertambahan nilai (PPN) yang memicu gelombang pembelian produk massal.'
        ],
        aiExplanation: 'Cost-Push Inflation berakar dari sisi produsen (penawaran). Ketika ongkos produksi naik akibat lonjakan tarif BBM industri, listrik, atau bahan baku, produsen terpaksa menaikkan harga jual produk akhir kepada konsumen agar tidak mengalami kerugian operasional.'
      });

      pool.push({
        id: 'inf_4',
        topic: 'Kebijakan Moneter Inflasi',
        question: 'Langkah apa yang biasanya diambil oleh Bank Sentral (Bank Indonesia) untuk menekan laju inflasi yang terlalu tinggi?',
        correctText: 'Menaikkan suku bunga acuan (BI-Rate) dan menjual surat berharga (SBI) guna menyerap kelebihan likuiditas.',
        distractors: [
          'Menurunkan suku bunga kredit serendah mungkin agar masyarakat lebih banyak berbelanja secara konsumtif.',
          'Mencetak uang kertas baru dalam jumlah melimpah untuk dibagikan secara gratis kepada produsen.',
          'Menurunkan Giro Wajib Minimum (GWM) perbankan agar cadangan kas di bank umum makin longgar.'
        ],
        aiExplanation: 'Bank Sentral menggunakan kebijakan moneter kontraktif. Dengan menaikkan suku bunga acuan (BI-Rate), masyarakat terdorong untuk menabung dan menahan pinjaman konsumtif. Penjualan surat berharga (SBI) juga secara efektif menyerap peredaran uang berlebih di masyarakat.'
      });

      pool.push({
        id: 'inf_5',
        topic: 'Kebijakan Fiskal Inflasi',
        question: 'Bagaimana peran Pemerintah dalam meredam inflasi melalui instrumen Kebijakan Fiskal?',
        correctText: 'Melakukan penghematan belanja pengeluaran negara (APBN) dan menyeimbangkan regulasi tarif perpajakan.',
        distractors: [
          'Meningkatkan pinjaman komersial luar negeri untuk membiayai proyek konsumtif jangka pendek.',
          'Menghentikan seluruh pemungutan pajak negara agar uang di saku masyarakat semakin banyak.',
          'Menetapkan suku bunga tabungan di setiap bank umum secara sepihak tanpa koordinasi BI.'
        ],
        aiExplanation: 'Kebijakan fiskal dikelola oleh Pemerintah melalui APBN. Dengan mengerem belanja negara yang belum mendesak dan mengoptimalkan instrumen pajak, permintaan agregat nasional dapat distabilkan sehingga tekanan kenaikan harga mereda.'
      });

      pool.push({
        id: 'inf_6',
        topic: 'Dampak Inflasi',
        question: 'Siapakah kelompok yang paling merasakan dampak negatif penurunan kesejahteraan akibat inflasi yang tidak terkendali?',
        correctText: 'Masyarakat berpendapatan tetap (seperti buruh upah harian dan pensiunan) serta penabung uang tunai.',
        distractors: [
          'Pemilik aset riil seperti tanah, emas batangan, dan bangunan properti komersial.',
          'Debitur atau pihak yang memiliki pinjaman dengan suku bunga pinjaman nominal yang tetap.',
          'Pedagang komoditas besar yang dapat langsung menyesuaikan persentase margin keuntungan.'
        ],
        aiExplanation: 'Masyarakat berpenghasilan tetap sangat dirugikan karena nominal gaji mereka tidak bertambah, sementara harga kebutuhan pokok terus melambung tinggi. Nilai riil dari tabungan tunai juga tergerus oleh inflasi.'
      });
    }

    // =========================================================================
    // 2. QUESTION POOL SPESIFIK: BIOLOGI (SISTEM PENCERNAAN MANUSIA)
    // =========================================================================
    if (contentLower.includes('pencernaan') || contentLower.includes('mulut') || contentLower.includes('lambung') || titleLower.includes('pencernaan')) {
      pool.push({
        id: 'penc_1',
        topic: 'Pencernaan di Rongga Mulut',
        question: 'Proses pencernaan kimiawi di dalam rongga mulut dibantu oleh enzim ptialin (amilase) yang berfungsi untuk...',
        correctText: 'Mengubah karbohidrat kompleks (amilum) menjadi maltosa.',
        distractors: [
          'Memecah protein menjadi pepton dan asam amino bebas.',
          'Mengemulsi lemak menjadi droplet asam lemak dan gliserol.',
          'Mengendapkan protein kasein di dalam cairan susu.'
        ],
        aiExplanation: 'Kelenjar ludah di mulut mensekresikan enzim ptialin (amilase ludah) untuk memecah ikatan amilum (pati) menjadi disakarida maltosa dalam suasana pH netral.'
      });

      pool.push({
        id: 'penc_2',
        topic: 'Mekanisme Kerongkongan (Esofagus)',
        question: 'Bagaimana cara bolus makanan bergerak menuruni kerongkongan (esofagus) menuju ke lambung?',
        correctText: 'Didorong oleh gerak peristaltik akibat kontraksi dan relaksasi bergelombang otot dinding kerongkongan.',
        distractors: [
          'Mengalir bebas semata-mata karena pengaruh gaya tarik gravitasi bumi.',
          'Dilarutkan oleh getah empedu hingga mencair sepenuhnya di rongga dada.',
          'Ditarik oleh tekanan hisap negatif yang dihasilkan saat paru-paru bernapas.'
        ],
        aiExplanation: 'Kerongkongan tidak melakukan proses pencernaan kimiawi. Makanan didorong ke lambung melalui gerak peristaltik, yaitu gelombang kontraksi ritmis otot polos pada dinding kerongkongan.'
      });

      pool.push({
        id: 'penc_3',
        topic: 'Enzim dan Asam di Lambung',
        question: 'Fungsi utama dari asam klorida (HCl) yang disekresikan oleh dinding lambung adalah...',
        correctText: 'Membunuh bakteri patogen pada makanan serta mengaktifkan pepsinogen menjadi enzim pepsin aktif.',
        distractors: [
          'Menetralkan asam makanan agar suasana lambung menjadi basa.',
          'Mengubah glukosa berlebih menjadi cadangan glikogen hati.',
          'Menyerap vitamin dan garam mineral langsung ke pembuluh limfa.'
        ],
        aiExplanation: 'Asam lambung (HCl) menciptakan suasana asam pekat (pH 1-2) yang mematikan kuman pada makanan serta memicu aktivasi proenzim pepsinogen menjadi enzim pepsin aktif untuk mencerna protein.'
      });

      pool.push({
        id: 'penc_4',
        topic: 'Fungsi Organ Pencernaan',
        question: 'Organ berbentuk kantung tempat berlangsungnya pencernaan mekanis oleh otot dinding serta pencernaan kimiawi oleh enzim pepsin dan renin adalah...',
        correctText: 'Lambung.',
        distractors: [
          'Kerongkongan (Esofagus).',
          'Rongga Mulut.',
          'Kelenjar Ludah.'
        ],
        aiExplanation: 'Lambung memiliki dinding otot tebal yang mengaduk makanan (pencernaan mekanis) serta getah lambung yang mengandung pepsin, renin, dan HCl (pencernaan kimiawi).'
      });

      pool.push({
        id: 'penc_5',
        topic: 'Kelenjar Pencernaan',
        question: 'Apakah peranan utama dari kelenjar pencernaan dalam proses pengolahan makanan di dalam tubuh?',
        correctText: 'Menghasilkan getah atau enzim pencernaan yang membantu memecah zat makanan secara kimiawi.',
        distractors: [
          'Mengunyah dan menghaluskan makanan secara mekanis menggunakan struktur keras.',
          'Menampung sisa ampas makanan sebelum dikeluarkan dari tubuh dalam bentuk feses.',
          'Mengedarkan nutrisi makanan langsung ke seluruh sel melalui pembuluh darah arteri.'
        ],
        aiExplanation: 'Kelenjar pencernaan (seperti kelenjar ludah, pankreas, dan hati) bertugas menghasilkan sekresi getah atau enzim kimiawi guna memecah molekul makanan makro menjadi zat yang dapat diserap tubuh.'
      });
    }

    // =========================================================================
    // 3. QUESTION POOL SPESIFIK: FISIKA (HUKUM NEWTON & MEKANIKA)
    // =========================================================================
    if (contentLower.includes('newton') || titleLower.includes('fisika') || titleLower.includes('newton')) {
      pool.push({
        id: 'newt_1',
        topic: 'Hukum I Newton',
        question: 'Kondisi manakah yang paling tepat mewakili berlakunya Hukum I Newton (Kelembaman)?',
        correctText: 'Benda akan tetap diam atau bergerak lurus beraturan jika total resultan gaya luar yang bekerja padanya bernilai nol (ΣF = 0).',
        distractors: [
          'Benda akan selalu mengalami percepatan konstan meskipun tidak ada gaya luar yang mengenainya.',
          'Besarnya percepatan gerak selalu sebanding dengan kuadrat jarak tempuh benda terhadap titik gravitasi.',
          'Setiap aksi gaya yang diberikan selalu menghasilkan energi kinetik yang habis menjadi panas.'
        ],
        aiExplanation: 'Hukum I Newton (hukum inersia) menjelaskan bahwa benda mempertahankan keadaan geraknya semula. Bila tidak ada resultan gaya (ΣF = 0), benda yang diam akan selamanya diam, dan benda yang bergerak akan terus bergerak lurus dengan kecepatan konstan.'
      });

      pool.push({
        id: 'newt_2',
        topic: 'Hukum II Newton',
        question: 'Berdasarkan Hukum II Newton, bagaimanakah hubungan antara gaya resultan (F), massa benda (m), dan percepatan (a)?',
        correctText: 'Percepatan benda berbanding lurus dengan resultan gaya total dan berbanding terbalik dengan massa benda (a = F / m).',
        distractors: [
          'Semakin besar massa suatu benda, maka percepatan geraknya akan otomatis bertambah cepat.',
          'Percepatan gerak berbanding terbalik dengan besar gaya total yang bekerja pada benda.',
          'Massa dan percepatan selalu bernilai konstan dan tidak dipengaruhi oleh resultan gaya luar.'
        ],
        aiExplanation: 'Menurut persamaan ΣF = m · a, gaya berbanding lurus dengan percepatan, tetapi massa berbanding terbalik dengan percepatan. Artinya, mendorong benda bermassa besar membutuhkan gaya lebih besar untuk menghasilkan percepatan yang sama.'
      });

      pool.push({
        id: 'newt_3',
        topic: 'Hukum III Newton',
        question: 'Manakah karakteristik yang BENAR mengenai pasangan gaya aksi dan reaksi pada Hukum III Newton?',
        correctText: 'Bekerja pada dua benda yang berbeda, besarnya persis sama, tetapi arah garis kerjanya berlawanan.',
        distractors: [
          'Bekerja pada satu benda yang sama sehingga gaya aksi dan reaksi selalu saling meniadakan menjadi nol.',
          'Gaya reaksi selalu muncul beberapa detik setelah gaya aksi berhenti bekerja sepenuhnya.',
          'Besar gaya reaksi selalu lebih kecil daripada gaya aksi karena adanya gesekan udara.'
        ],
        aiExplanation: 'Karakteristik mutlak gaya aksi-reaksi adalah: bekerja pada dua benda yang berbeda (karena itu TIDAK saling meniadakan), timbul secara bersamaan (simultan), sama besar, dan berlawanan arah (F_aksi = -F_reaksi).'
      });

      pool.push({
        id: 'newt_4',
        topic: 'Penerapan Hukum Newton',
        question: 'Ketika bus yang melaju kencang mendadak direm, tubuh penumpang terdorong ke depan. Fenomena ini merupakan bukti langsung dari...',
        correctText: 'Sifat inersia / kelembaman benda untuk mempertahankan kondisi geraknya semula.',
        distractors: [
          'Pengaruh gravitasi bumi yang menarik massa tubuh secara mendatar ke depan.',
          'Gaya gesekan ban dengan aspal yang menarik tubuh pengemudi maju.',
          'Hukum kekekalan momentum sudut pada poros roda kendaraan.'
        ],
        aiExplanation: 'Tubuh penumpang memiliki inersia untuk tetap mempertahankan keadaan gerak majunya. Ketika mobil direm mendadak oleh gaya gesek roda, tubuh yang belum menerima gaya rem langsung akan cenderung terus melaju ke depan.'
      });
    }

    // =========================================================================
    // 4. QUESTION POOL SPESIFIK: BIOLOGI (SISTEM PEREDARAN DARAH)
    // =========================================================================
    if (contentLower.includes('darah') || contentLower.includes('jantung') || titleLower.includes('darah')) {
      pool.push({
        id: 'bio_1',
        topic: 'Sel Darah Merah (Eritrosit)',
        question: 'Apa fungsi utama sel darah merah (eritrosit) dan ciri khas bentuk strukturnya pada manusia?',
        correctText: 'Mengikat dan mengangkut oksigen berkat hemoglobin, berbentuk cakram bikonkaf tanpa inti sel matang.',
        distractors: [
          'Menghasilkan antibodi kekebalan tubuh dan memiliki banyak inti sel yang aktif membelah.',
          'Membentuk jaring fibrin penutup luka dan tidak mengandung pigmen protein sama sekali.',
          'Mengatur keseimbangan hormon insulin dan menyaring racun di dalam organ ginjal.'
        ],
        aiExplanation: 'Eritrosit matang berbentuk cakram bikonkaf dan melepaskan inti selnya untuk memberikan ruang maksimum bagi molekul hemoglobin, protein pengikat oksigen dari paru-paru menuju seluruh sel tubuh.'
      });

      pool.push({
        id: 'bio_2',
        topic: 'Sel Darah Putih (Leukosit)',
        question: 'Kemampuan sel leukosit untuk menembus celah dinding kapiler darah guna membasmi bakteri di jaringan tubuh disebut...',
        correctText: 'Diapedesis.',
        distractors: [
          'Hemostasis.',
          'Aglutinasi.',
          'Eritropoiesis.'
        ],
        aiExplanation: 'Diapedesis adalah kemampuan unik leukosit bergerak secara amuboid melintasi pori-pori dinding pembuluh kapiler darah demi menjangkau jaringan tubuh yang terinfeksi patogen atau kuman penyakit.'
      });

      pool.push({
        id: 'bio_3',
        topic: 'Keping Darah & Pembekuan',
        question: 'Pada proses hemostasis saat terjadi luka, enzim apakah yang mengubah protrombin menjadi trombin?',
        correctText: 'Trombokinase (tromboplastin) dengan bantuan ion kalsium dan vitamin K.',
        distractors: [
          'Enzim amilase dengan bantuan zat besi dan vitamin C.',
          'Enzim pepsin yang disekresikan oleh sel plasma darah.',
          'Enzim lipase yang diaktifkan oleh hemoglobin bebas.'
        ],
        aiExplanation: 'Saat trombosit pecah menyentuh permukaan luka yang kasar, enzim tromboplastin dilepaskan. Bersama kalsium (Ca2+) dan vitamin K, enzim ini memicu pengubahan protrombin menjadi trombin, yang kemudian mengubah fibrinogen menjadi jala benang fibrin.'
      });
    }

    // =========================================================================
    // 5. QUESTION POOL SPESIFIK: MATEMATIKA (ALJABAR & PERSAMAAN KUADRAT)
    // =========================================================================
    if (contentLower.includes('aljabar') || contentLower.includes('kuadrat') || titleLower.includes('kuadrat')) {
      pool.push({
        id: 'mat_1',
        topic: 'Diskriminan Persamaan Kuadrat',
        question: 'Jika nilai diskriminan (D = b² - 4ac) dari persamaan kuadrat bernilai lebih besar dari nol (D > 0), maka persamaan tersebut...',
        correctText: 'Memiliki dua akar real yang berlainan / berbeda (kurva memotong sumbu X di 2 titik).',
        distractors: [
          'Memiliki dua akar real yang kembar / sama persis (menyinggung sumbu X di 1 titik).',
          'Tidak memiliki akar real sama sekali (akarnya berupa bilangan imajiner / kompleks).',
          'Nilai variabel x tidak dapat diselesaikan dengan rumus ABC.'
        ],
        aiExplanation: 'Nilai diskriminan menentukan jenis akar kuadrat. Jika D > 0, akar di bawah tanda akar pada rumus ABC bernilai positif, menghasilkan dua solusi nyata yang berbeda (+√D dan -√D).'
      });

      pool.push({
        id: 'mat_2',
        topic: 'Unsur Bentuk Aljabar',
        question: 'Pada bentuk aljabar 4x² - 7x + 9, angka -7 berkedudukan sebagai...',
        correctText: 'Koefisien dari variabel x.',
        distractors: [
          'Konstanta mandiri dari suku kuadrat.',
          'Eksponen pangkat tertinggi variabel.',
          'Variabel peubah yang belum diketahui nilainya.'
        ],
        aiExplanation: 'Koefisien adalah faktor pengali yang mendampingi variabel. Pada suku -7x, variabelnya adalah x, dan bilangan yang mengalikannya adalah -7, sedangkan 9 adalah konstanta tetap.'
      });
    }

    // =========================================================================
    // 6. DYNAMIC QUESTION BUILDER: UNTUK MODUL CUSTOM / TEKS MATERI PENGGUNA
    //    Menghasilkan pertanyaan materi substantif (bukan judul bab)
    //    Menghasilkan opsi jawaban realistis dari materi modul (tanpa template klise)
    // =========================================================================
    const units = this.parseModuleUnits(moduleContent);
    
    // Fungsi pembantu membersihkan sub-huruf dari opsi kuis (misal: "A. Di kepala" -> "Di kepala")
    const cleanQuizOption = (text) => {
      if (!text || typeof text !== 'string') return '';
      const parts = text.split(/\r?\n/)
        .map(l => l.replace(/^(?:[A-Za-z\d][\.\)]|[-*•+])\s*/, '').trim())
        .filter(Boolean);
      return parts.join('; ');
    };

    // Filter konsep-konsep substantif materi: memiliki term dan penjelasan yang nyata
    const conceptUnits = units.filter(u => {
      if (!u.term || u.term.trim().length < 2) return false;
      if (!u.explanation || u.explanation.trim().length < 3) return false;
      // JANGAN PERNAH gunakan judul seksi/bab atau label struktural (TOPIK, BAB, MATERI PELAJARAN)
      if (u.type === 'section' || u.type === 'subgroup') return false;
      if (this.isStructuralHeader(u.term)) return false;
      if (this.isStructuralHeader(u.text)) return false;
      const isRawChapterHeader = /^(?:\d+[\.\)]\s+|bab\s+(?:[IVXLCDM]+|\d+)|bagian\s+\d+|topik\s+\d+|materi\s+\d+)/i.test(u.term);
      return !isRawChapterHeader;
    });

    // Ekstraksi kalimat-kalimat substantif dari seluruh teks modul sebagai opsi alternatif cadangan
    const allModuleSentences = moduleContent
      .split(/(?:\r?\n)+|(?<!\b(?:moh|dr|prof|ir|drs|no|tn|ny|hal))\.(?:\s+|$)/i)
      .map(s => s.trim())
      .filter(s => {
        if (s.length < 25) return false;
        if (/^[=\-*_~#+]{2,}$/.test(s)) return false;
        if (/^(?:MODUL|BAB|BAGIAN|RINGKASAN|DAFTAR)/i.test(s)) return false;
        if (/^[A-Z0-9\s\-_]+$/.test(s) && s.split(/\s+/).length <= 6) return false;
        return true;
      });

    // Ekstraksi entitas atau istilah yang ada di teks modul
    const allModuleEntities = [];
    const entityMatches = moduleContent.match(/[A-Z][a-z]+(?:[ \t]+[A-Z][a-z]+)*/g) || [];
    entityMatches.forEach(em => {
      const cleanEm = em.replace(/[\r\n]+/g, ' ').trim();
      if (cleanEm.length >= 4 && !allModuleEntities.includes(cleanEm) && !/^(?:Modul|Bab|Bagian|Pilihan|Jawaban|Soal)/i.test(cleanEm)) {
        allModuleEntities.push(cleanEm);
      }
    });

    // Sanitizer opsi jawaban agar tidak pernah menggunakan frasa klise/template atau judul struktural
    const sanitizeOption = (text, fallback) => {
      if (!text || typeof text !== 'string') return fallback;
      const clean = text.replace(/^[=\-*_~#+\d\.\)\-\s]+/, '').trim();
      if (this.isStructuralHeader(clean)) return fallback;
      if (/pernyataan di atas|konsep.*tidak memiliki|asumsi hipotesis|hanya berupa asumsi|berlaku sebaliknya|semua salah|semua benar/i.test(clean)) {
        return fallback;
      }
      return clean;
    };

    if (conceptUnits.length >= 2) {
      conceptUnits.forEach((unit, idx) => {
        const cleanTerm = unit.term.replace(/^[=\-*_~#+\d\.\)\-\s]+/, '').trim();
        let cleanExp = cleanQuizOption(unit.explanation);
        if (!cleanExp.endsWith('.')) cleanExp += '.';

        // Ambil penjelasan dari unit lain dalam modul yang sama sebagai opsi pengecoh realistis
        const otherUnits = conceptUnits.filter(o => o !== unit && o.term !== unit.term);
        const distractorExps = otherUnits.map(o => {
          let exp = cleanQuizOption(o.explanation);
          if (!exp.endsWith('.')) exp += '.';
          return exp;
        });

        // Jika opsi masih kurang dari 3, ambil kalimat faktual lain dari modul
        allModuleSentences.forEach(s => {
          let cleanS = s.endsWith('.') ? s : s + '.';
          if (cleanS.toLowerCase() !== cleanExp.toLowerCase() && !distractorExps.includes(cleanS) && distractorExps.length < 3) {
            distractorExps.push(cleanS);
          }
        });

        const d1 = distractorExps[0] || 'Proses tersebut berlangsung secara pasif tanpa melibatkan aktivasi kimiawi.';
        const d2 = distractorExps[1] || 'Kondisi ini berfungsi sebagai tahap pengujian awal dalam siklus materi.';
        const d3 = distractorExps[2] || 'Mekanisme ini bertindak sebagai faktor pendukung dalam kondisi spesifik.';

        // STRATEGI A: Pertanyaan Fungsi / Karakteristik Materi Konsep
        pool.push({
          id: `dyn_c_${idx + 1}`,
          topic: cleanTerm,
          question: `Berdasarkan modul, apa fungsi atau proses utama yang berlangsung pada "${cleanTerm}"?`,
          correctText: cleanExp,
          distractors: [
            sanitizeOption(d1, 'Proses tersebut berlangsung secara teratur sesuai tahapan standar sistem.'),
            sanitizeOption(d2, 'Mekanisme ini menjaga kestabilan kondisi materi dari pengaruh luar.'),
            sanitizeOption(d3, 'Tahapan ini bertindak sebagai pengantar menuju proses lanjutan.')
          ],
          aiExplanation: `Materi modul menerangkan bahwa pada "${cleanTerm}", proses utamanya adalah: ${cleanExp} Pilihan lainnya merupakan fungsi atau karakteristik yang berlangsung pada bagian materi berbeda.`
        });

        // STRATEGI B: Pertanyaan Identifikasi Istilah / Konsep (Tebak Nama Bagian)
        if (otherUnits.length >= 2) {
          // Buat kalimat tebakan tanpa membocorkan langsung nama term di awal kalimat
          let clueSentence = cleanExp;
          const escapedTerm = cleanTerm.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
          const termRegex = new RegExp(`^(?:di dalam|pada|organ|bagian)?\\s*${escapedTerm}\\s*(?:adalah|merupakan|berfungsi untuk|berperan dalam|yaitu|ialah|terjadi)?\\s*`, 'i');
          if (termRegex.test(clueSentence)) {
            clueSentence = clueSentence.replace(termRegex, '');
            if (clueSentence.length > 0) {
              clueSentence = clueSentence.charAt(0).toUpperCase() + clueSentence.slice(1);
            }
          }

          const otherTerms = otherUnits.map(o => o.term.replace(/^[=\-*_~#+\d\.\)\-\s]+/, '').trim());
          
          // Lengkapi opsi istilah dari entitas lain di modul jika kurang dari 3
          allModuleEntities.forEach(ent => {
            if (ent !== cleanTerm && !otherTerms.includes(ent) && otherTerms.length < 3) {
              otherTerms.push(ent);
            }
          });

          const dt1 = otherTerms[0] || 'Faktor Primer';
          const dt2 = otherTerms[1] || 'Komponen Sekunder';
          const dt3 = otherTerms[2] || 'Parameter Regulasi';

          pool.push({
            id: `dyn_id_${idx + 1}`,
            topic: `Identifikasi: ${cleanTerm}`,
            question: `Bagian atau konsep manakah yang memiliki karakteristik materi: "${clueSentence}"?`,
            correctText: cleanTerm,
            distractors: [
              sanitizeOption(dt1, 'Faktor Penentu'),
              sanitizeOption(dt2, 'Komponen Pendukung'),
              sanitizeOption(dt3, 'Unsur Transisi')
            ],
            aiExplanation: `Uraian materi tersebut secara spesifik menggambarkan karakteristik dan peranan dari "${cleanTerm}". Bagian lain memiliki fungsi yang berbeda di dalam modul.`
          });
        }
      });
    } else {
      // Jika modul berupa narasi umum tanpa banyak sub-poin terpisah:
      // Ekstraksi kalimat-kalimat fakta penting substantif (bukan judul/heading)
      const rawSentences = moduleContent
        .split(/(?:\r?\n)+|(?<!\b(?:moh|dr|prof|ir|drs|no|tn|ny|hal))\.(?:\s+|$)/i)
        .map(s => s.trim())
        .filter(s => {
          if (s.length < 30) return false;
          if (/^[=\-*_~#+]{2,}$/.test(s)) return false;
          if (/^(?:MODUL|BAB|BAGIAN|RINGKASAN|DAFTAR)/i.test(s)) return false;
          // Jangan masukkan judul berkata pendek atau huruf kapital semua
          if (/^[A-Z0-9\s\-_]+$/.test(s) && s.split(/\s+/).length <= 6) return false;
          if (s.split(/\s+/).length < 5) return false;
          return true;
        });

      if (rawSentences.length >= 2) {
        for (let i = 0; i < Math.min(rawSentences.length, 6); i++) {
          const mainSentence = rawSentences[i];
          const otherSentences = rawSentences.filter((_, sIdx) => sIdx !== i);
          
          const d1 = otherSentences[0] || 'Proses tersebut berlangsung secara pasif tanpa memerlukan aktivasi awal.';
          const d2 = otherSentences[1] || 'Kondisi materi ini tidak berkaitan langsung dengan dinamika sistem.';
          const d3 = otherSentences[2] || 'Mekanisme ini bekerja dengan menekan laju reaksi ke batas minimum.';

          pool.push({
            id: `dyn_s_${i + 1}`,
            topic: `Materi Modul`,
            question: `Berdasarkan materi modul pembelajaran, manakah pernyataan faktual yang benar?`,
            correctText: mainSentence.endsWith('.') ? mainSentence : mainSentence + '.',
            distractors: [
              sanitizeOption(d1.endsWith('.') ? d1 : d1 + '.', 'Mekanisme ini tidak memerlukan aktivasi energi awal.'),
              sanitizeOption(d2.endsWith('.') ? d2 : d2 + '.', 'Reaksi berlangsung secara spontan tanpa perantara biologis.'),
              sanitizeOption(d3.endsWith('.') ? d3 : d3 + '.', 'Faktor lingkungan menjadi penentu tunggal tanpa dipengaruhi struktur dasar.')
            ],
            aiExplanation: `Berdasarkan uraian isi modul, fakta yang benar adalah: "${mainSentence}". Pilihan jawaban lain memuat uraian dari bagian berbeda atau tidak selaras dengan prinsip materi modul.`
          });
        }
      }
    }

    // Fallback darurat jika teks modul benar-benar kosong
    if (pool.length === 0) {
      pool.push({
        id: 'gen_1',
        topic: 'Pemahaman Modul',
        question: `Apa tujuan utama mempelajari materi "${moduleTitle || 'Pelajaran'}" secara mendalam?`,
        correctText: 'Memahami mekanisme kerja, prinsip dasar materi, dan keterkaitan sebab-akibat antar konsep.',
        distractors: [
          'Hanya menghafal istilah tanpa memahami penerapan dan proses nyatanya.',
          'Mengabaikan tahapan proses yang dipaparkan dalam modul pembelajaran.',
          'Menyamaratakan semua karakteristik konsep tanpa melihat perbedaannya.'
        ],
        aiExplanation: 'Tujuan utama pembelajaran modul ini adalah memahami landasan konseptual, fungsi, dan aplikasi logis dari topik materi secara terstruktur.'
      });
    }

    // Acak urutan seluruh bank soal (Fisher-Yates Shuffle)
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    // Ambil sejumlah count yang diinginkan user
    const selected = pool.slice(0, Math.min(count, pool.length));

    // Acak opsi jawaban (A, B, C, D) untuk tiap soal
    return selected.map((item, qIdx) => {
      // Pastikan distractor benar-benar bersih, tanpa newline, dan tidak duplikat dengan correctText
      const cleanCorrect = item.correctText.replace(/[\r\n]+/g, ' ').trim();
      const seenOptions = new Set([cleanCorrect.toLowerCase()]);
      const validDistractors = [];

      const fallbackPool = [
        'Karakteristik sekunder yang bekerja pada kondisi lingkungan spesifik.',
        'Mekanisme pendukung yang aktif pada tahap transisi sistem.',
        'Parameter acuan yang digunakan dalam proses identifikasi lanjutan.',
        'Unsur penyeimbang yang menjaga stabilitas kondisi materi.'
      ];

      for (const d of (item.distractors || [])) {
        if (!d) continue;
        const cleanD = sanitizeOption(d.replace(/[\r\n]+/g, ' ').trim(), '');
        if (cleanD && !seenOptions.has(cleanD.toLowerCase())) {
          seenOptions.add(cleanD.toLowerCase());
          validDistractors.push(cleanD);
        }
      }

      let fallbackIdx = 0;
      while (validDistractors.length < 3) {
        const candidate = fallbackPool[fallbackIdx % fallbackPool.length];
        if (!seenOptions.has(candidate.toLowerCase())) {
          seenOptions.add(candidate.toLowerCase());
          validDistractors.push(candidate);
        }
        fallbackIdx++;
      }

      const rawOptions = [
        { text: cleanCorrect, isCorrect: true },
        { text: validDistractors[0], isCorrect: false },
        { text: validDistractors[1], isCorrect: false },
        { text: validDistractors[2], isCorrect: false }
      ];

      // Shuffle options
      for (let i = rawOptions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [rawOptions[i], rawOptions[j]] = [rawOptions[j], rawOptions[i]];
      }

      const labels = ['A', 'B', 'C', 'D'];
      let correctIndex = 0;
      const formattedOptions = rawOptions.map((opt, oIdx) => {
        if (opt.isCorrect) correctIndex = oIdx;
        return `${labels[oIdx]}. ${opt.text}`;
      });

      return {
        id: item.id || `q_${qIdx + 1}`,
        number: qIdx + 1,
        topic: item.topic,
        question: item.question,
        options: formattedOptions,
        correctIndex: correctIndex,
        correctLabel: labels[correctIndex],
        aiExplanation: item.aiExplanation
      };
    });
  }
}

