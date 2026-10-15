/**
 * Offline AI Study Assistant NLP & Semantic Answering Engine
 * Pure Client-Side JavaScript - Interactive, Personalized & Dynamic
 */

// Indonesian Stopwords for keyword extraction
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

// Knowledge Base for General Queries & Common Topics
const GENERAL_KNOWLEDGE = [
  {
    patterns: [/presiden.*(indonesia|ri|sekarang|saat ini)/i, /siapa.*presiden/i, /presiden ri/i],
    title: 'Presiden Republik Indonesia',
    answer: 'Presiden Republik Indonesia saat ini (periode 2024–2029) adalah **Prabowo Subianto**, didampingi oleh Wakil Presiden **Gibran Rakabuming Raka**. Mereka resmi dilantik pada 20 Oktober 2024.'
  },
  {
    patterns: [/ibukota.*(indonesia|nusantara|jakarta)/i, /ibu kota.*indonesia/i],
    title: 'Ibu Kota Indonesia',
    answer: 'Ibu Kota Negara Indonesia saat ini sedang dalam masa transisi historis dari **DKI Jakarta** menuju **Ibu Kota Nusantara (IKN)** yang terletak di Penajam Paser Utara, Kalimantan Timur.'
  },
  {
    patterns: [/siapa.*(kamu|anda|asisten|bot|edubot)/i, /kamu siapa/i, /tentang aplikasi/i],
    title: 'Siapa EduBot',
    answer: 'Aku adalah **EduBot AI**, teman belajar digitalmu yang ramah dan siap membantu memahami modul apapun! Aku bisa menjawab pertanyaan materi secara santai tapi jelas, menghitung rumus, memberi kuis, dan merangkum hasil belajar secara offline.'
  },
  {
    patterns: [/(terima kasih|makasih|thanks|thank you|matur nuwun|nuhun)/i],
    title: 'Apresiasi',
    answer: 'Sama-sama! Senang banget bisa membantu kamu belajar. Kalau ada hal lain yang masih membingungkan, tanyakan saja ya!'
  },
  {
    patterns: [/(capek|lelah|pusing|mumet|ngantuk|berat banget)/i],
    title: 'Dukungan Semangat',
    answer: 'Wajar banget kalau otak terasa penuh setelah belajar! Coba istirahat dulu sejenak 5–10 menit, minum air putih, dan regangkan badan. Nanti kalau sudah segar lagi, kita lanjutkan bareng-bareng ya. Semangat!'
  },
  {
    patterns: [/(kamu pintar|kamu hebat|keren|kamu cerdas|mantap)/i],
    title: 'Pujian Balik',
    answer: 'Wah, terima kasih banyak! Tapi kamu juga keren banget karena aktif bertanya dan punya rasa ingin tahu tinggi. Itu kunci paling penting dalam belajar!'
  },
  {
    patterns: [/(cerita|lelucon|jokes|tebak-tebakan|bercanda)/i],
    title: 'Tebak-tebakan Santai',
    answer: 'Nih tebak-tebakan santai buat menyegarkan pikiran:\n\n*Kenapa buku matematika suka kelihatan sedih?*\nJawabannya: *Karena dia punya terlalu banyak masalah (problem)!* 😂\n\nGimana, mau rehat sejenak atau lanjut bahas materi?'
  },
  {
    patterns: [/(lagi apa|lagi ngapain|sedang apa|sibuk apa)/i],
    title: 'Aktivitas Asisten',
    answer: 'Aku lagi siaga penuh nih, siap menemani kamu belajar dan membedah materi apapun yang kamu butuhkan. Ada konsep yang mau kita bahas sekarang?'
  },
  {
    patterns: [/(fotosintesis|bagaimana tumbuhan makan)/i],
    title: 'Fotosintesis',
    answer: 'Secara sederhana, **fotosintesis** adalah proses tumbuhan hijau membuat makanan (glukosa) sendiri dengan bantuan sinar matahari. Tumbuhan menyerap air ($H_2O$) dari tanah dan karbon dioksida ($CO_2$) dari udara, lalu dengan klorofil mengubahnya menjadi energi serta melepaskan oksigen ($O_2$) ke udara.'
  },
  {
    patterns: [/(apa itu ai|kecerdasan buatan|artificial intelligence)/i],
    title: 'Kecerdasan Buatan (AI)',
    answer: '**AI (Artificial Intelligence)** adalah teknologi komputer yang dirancang untuk meniru kecerdasan manusia, seperti kemampuan mengenali pola, belajar dari data, memecahkan masalah, hingga memahami bahasa. Seperti halnya aku yang membantu kamu menganalisis materi belajar ini!'
  }
];

class StudyEngine {
  /**
   * Suffix stemming for Indonesian words
   */
  static stem(word) {
    if (word.length <= 3) return word;
    return word.replace(/(lah|kah|pun|nya|an|kan|i)$/, '');
  }

  /**
   * Tokenize text with stemming and numerical/roman support
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
   * Detect if the user is introducing their name
   * Examples: "nama saya Budi", "namaku Rina", "panggil aku Alex", "kenalin aku Dimas", "aku Sarah"
   */
  static detectNameIntro(text) {
    const clean = text.trim();
    const patterns = [
      /(?:nama\s+saya|namaku|nama\s+aku|panggil\s+aku|panggil\s+saya|nama\s+gw|nama\s+gue)\s+(?:adalah\s+)?([A-Za-zÀ-ÿ]+)/i,
      /(?:kenalin\s*,?\s*(?:aku|nama\s+saya|namaku)|kenalan\s+dong\s*,?\s*aku)\s+([A-Za-zÀ-ÿ]+)/i,
      /^(?:halo\s*,?\s*|hai\s*,?\s*)?(?:aku|saya)\s+([A-Z][a-z]{1,20})$/i,
      /^(?:nama\s+saya|namaku|nama\s+aku)\s*[:=]\s*([A-Za-zÀ-ÿ]+)/i
    ];

    const excludedWords = new Set([
      'mau', 'ingin', 'tanya', 'nanya', 'bingung', 'capek', 'lelah', 'senang',
      'suka', 'lagi', 'bisa', 'punya', 'ada', 'murid', 'siswa', 'mahasiswa',
      'user', 'orang', 'manusia', 'bot', 'edubot', 'belajar', 'paham', 'mengerti'
    ]);

    for (const p of patterns) {
      const match = clean.match(p);
      if (match && match[1]) {
        const candidate = match[1].trim();
        if (!excludedWords.has(candidate.toLowerCase()) && candidate.length >= 2) {
          return candidate.charAt(0).toUpperCase() + candidate.slice(1);
        }
      }
    }
    return null;
  }

  /**
   * Safe Arithmetic Calculation Detection
   * Evaluates expressions like: "berapa 25 * 4", "120 / 6", "hitung 15 + 45", "akar dari 144"
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
        result: Number.isInteger(res) ? res : res.toFixed(4)
      };
    }

    // Basic arithmetic: numbers separated by +, -, *, x, :, /
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
   * Check if query is a greeting
   */
  static isGreeting(text) {
    const clean = text.trim().toLowerCase();
    const greetings = [
      'halo', 'hai', 'hello', 'hi', 'hei', 'hey',
      'selamat pagi', 'selamat siang', 'selamat sore', 'selamat malam',
      'pagi', 'siang', 'sore', 'malam',
      'assalamualaikum', "assalamu'alaikum", 'shalom', 'sampurasun',
      'apa kabar', 'how are you', 'halo edubot', 'hai edubot'
    ];
    return greetings.some(g => clean === g || clean.startsWith(g + ' ') || clean.endsWith(' ' + g));
  }

  /**
   * Check if query is asking for a summary
   */
  static isSummaryRequest(text) {
    const clean = text.toLowerCase();
    const keywords = ['rangkum', 'rangkuman', 'ringkas', 'ringkasan', 'simpulkan', 'kesimpulan', 'summary', 'recap'];
    return keywords.some(k => clean.includes(k));
  }

  /**
   * Check if query is asking for quiz/practice
   */
  static isQuizRequest(text) {
    const clean = text.toLowerCase();
    const keywords = ['kuis', 'soal', 'latihan', 'uji pemahaman', 'pertanyaan untuk saya', 'tes saya', 'beri soal'];
    return keywords.some(k => clean.includes(k));
  }

  /**
   * Match against common out-of-scope general knowledge
   */
  static checkGeneralKnowledge(query) {
    for (const item of GENERAL_KNOWLEDGE) {
      for (const pattern of item.patterns) {
        if (pattern.test(query)) {
          return item;
        }
      }
    }
    return null;
  }

  /**
   * Break module content into logical structured chunks/sections
   */
  static parseModuleChunks(content) {
    if (!content) return [];
    
    // Split by numbered sections like \n1. , \n2. , markdown \n# , \n## , or double newline
    let rawSections = content.split(/(?=\n\s*(?:\d+[\.\)]|[#]{1,3}\s+|Bab\s+\d+|Bagian\s+\d+))/i);
    if (rawSections.length <= 1) {
      rawSections = content.split(/\n\s*\n+/);
    }
    
    const chunks = [];
    rawSections.forEach((section, idx) => {
      const trimmed = section.trim();
      if (!trimmed || trimmed.length < 20) return;

      const lines = trimmed.split('\n').map(l => l.trim()).filter(l => l.length > 0);
      if (lines.length <= 1 && lines[0] && lines[0].toUpperCase().startsWith('MODUL')) {
        return; // Standalone document header
      }
      let title = lines[0].replace(/^[#\d\.\)\-\s]+/, '').trim();
      
      // If the first line is just the general module title and there is a subtitle/section on line 2
      if (lines.length > 1 && title.toUpperCase().startsWith('MODUL') && lines[1].match(/^\d+[\.\)]/)) {
        title = lines[1].replace(/^[#\d\.\)\-\s]+/, '').trim();
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

    // Fallback if chunks couldn't be parsed cleanly
    if (chunks.length === 0 && content.trim().length > 0) {
      const paras = content.split(/\n\s*\n+/);
      paras.forEach((p, idx) => {
        const trimmed = p.trim();
        if (trimmed.length > 15) {
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
   * Generate quick suggestions based on headings in the module
   */
  static generateQuickSuggestions(content) {
    const chunks = this.parseModuleChunks(content);
    const suggestions = [];

    chunks.forEach(chunk => {
      const cleanTitle = chunk.title.replace(/[#\*_]/g, '').trim();
      if (cleanTitle && cleanTitle.length > 3 && !cleanTitle.toLowerCase().includes('pendahuluan')) {
        if (suggestions.length < 4) {
          suggestions.push(`Jelaskan tentang ${cleanTitle}`);
        }
      }
    });

    if (suggestions.length === 0) {
      suggestions.push(
        'Apa poin utama dari modul ini?',
        'Jelaskan konsep penting dalam materi ini',
        'Berikan contoh penerapan materi ini'
      );
    }

    return suggestions;
  }

  /**
   * Core Answering Logic with Dynamic Persona & Memory
   */
  static generateResponse(userQuery, moduleContent, moduleTitle = 'Modul Belajar', chatHistory = [], currentUserName = '') {
    const trimmedQuery = userQuery.trim();
    const userAlias = currentUserName ? currentUserName : '';
    const greetingName = userAlias ? `**${userAlias}**` : 'Teman Belajar';

    // 1. Check if user is introducing their name
    const detectedName = this.detectNameIntro(trimmedQuery);
    if (detectedName) {
      return {
        text: `Halo **${detectedName}**! 🎉 Senang sekali bisa kenalan denganmu!\n\nMulai sekarang aku bakal panggil kamu **${detectedName}** ya. Di modul **"${moduleTitle}"** ini, ada topik apa yang ingin kita diskusikan bareng? Aku siap bantu jelaskan konsepnya secara santai dan seru!`,
        intent: 'name_intro',
        type: 'general',
        detectedName: detectedName,
        suggestions: this.generateQuickSuggestions(moduleContent)
      };
    }

    // 2. Check for Math Calculation request
    const mathResult = this.evaluateMath(trimmedQuery);
    if (mathResult) {
      return {
        text: `Hasil perhitungan dari **${mathResult.query}** adalah **${mathResult.result}**! 🔢\n\n${userAlias ? `Ada rumus atau perhitungan lain yang mau kita coba hitung bareng, **${userAlias}**?` : 'Ada perhitungan lain yang ingin dihitung?'}`,
        intent: 'math_calc',
        type: 'general',
        suggestions: this.generateQuickSuggestions(moduleContent)
      };
    }

    // 3. Check for Greetings
    if (this.isGreeting(trimmedQuery)) {
      const intros = [
        `Halo ${greetingName}! 👋 Senang banget bisa ketemu lagi! Saat ini kita lagi pegang modul **"${moduleTitle}"**. Mau mulai dari konsep apa hari ini?`,
        `Hai ${greetingName}! Semangat belajarnya mantap nih! 🚀 Ada bagian dari modul **"${moduleTitle}"** yang mau kita kupas tuntas?`,
        `Halo ${greetingName}! Aku siap nemenin kamu belajar **"${moduleTitle}"**. Tanyakan aja apapun—dari definisi, rumus, sampai contoh sehari-hari!`
      ];
      const randomIntro = intros[Math.floor(Math.random() * intros.length)];
      return {
        text: randomIntro,
        intent: 'greeting',
        type: 'general',
        suggestions: this.generateQuickSuggestions(moduleContent)
      };
    }

    // 4. Check for Summary request via chat
    if (this.isSummaryRequest(trimmedQuery)) {
      const summary = this.generateSummary(moduleContent, moduleTitle, chatHistory, userAlias);
      return {
        text: `Nih rangkuman materi khusus buat kamu, ${greetingName}! 📋\n\n${summary.markdown}`,
        intent: 'summary',
        type: 'module',
        suggestions: [
          'Berikan saya 3 kuis pemahaman',
          'Apa rumus atau konsep paling krusial di materi ini?',
          'Bagaimana penerapan konsep ini dalam kehidupan nyata?'
        ]
      };
    }

    // 5. Check for Quiz request
    if (this.isQuizRequest(trimmedQuery)) {
      const quiz = this.generateQuiz(moduleContent, moduleTitle, userAlias);
      return {
        text: quiz,
        intent: 'quiz',
        type: 'module',
        suggestions: [
          'Tunjukkan kunci jawaban dan penjelasannya',
          'Berikan soal hitungan / studi kasus lain',
          'Rangkum kembali bagian yang sulit'
        ]
      };
    }

    // 6. Check for General Knowledge / Casual Conversations
    const gkMatch = this.checkGeneralKnowledge(trimmedQuery);
    const queryTokens = this.tokenize(trimmedQuery);
    const chunks = this.parseModuleChunks(moduleContent);

    // Calculate score of query against the module
    let bestChunk = null;
    let highestScore = 0;

    chunks.forEach(chunk => {
      let score = 0;
      queryTokens.forEach(token => {
        if (chunk.tokenSet.has(token)) {
          score += 2;
        }
      });

      // Bonus for title matches
      const titleLower = chunk.title.toLowerCase();
      queryTokens.forEach(token => {
        if (titleLower.includes(token)) {
          score += 5;
        }
      });

      // Exact substring match bonus
      if (chunk.text.toLowerCase().includes(trimmedQuery.toLowerCase())) {
        score += 8;
      }

      if (score > highestScore) {
        highestScore = score;
        bestChunk = chunk;
      }
    });

    // 6a. Direct General Knowledge Match
    if (gkMatch) {
      let responseText = `${gkMatch.answer}\n\n`;
      responseText += `> 💡 *Catatan Belajar:* Topik ini pertanyaan umum di luar modul **"${moduleTitle}"**. Kalau ${userAlias ? `kamu, **${userAlias}**,` : 'Anda'} ingin menghubungkannya ke modul atau lanjut membahas materi, beri tahu aku ya!`;
      return {
        text: responseText,
        intent: 'general_knowledge',
        type: 'out_of_scope',
        outOfScopeNotice: true,
        suggestions: this.generateQuickSuggestions(moduleContent)
      };
    }

    // 6b. Conversational Out-of-Scope (Flexible & Friendly, not restrictive)
    if (highestScore === 0 || (queryTokens.length > 2 && highestScore < 2)) {
      let friendlyGeneralAnswer = `Pertanyaan yang menarik, ${greetingName}!\n\nMengenai hal tersebut, pembahasannya memang belum tercantum secara spesifik di modul **"${moduleTitle}"** yang sedang kita buka.\n\nNamun jangan khawatir, sebagai teman belajarmu aku tetap bisa menemani diskusi! Jika kamu ingin lanjut membedah materi **${moduleTitle}**, ini beberapa topik utama yang tersedia:`;

      return {
        text: friendlyGeneralAnswer,
        intent: 'unrelated',
        type: 'out_of_scope',
        outOfScopeNotice: true,
        suggestions: this.generateQuickSuggestions(moduleContent)
      };
    }

    // 7. Dynamic Paraphrased Module Answer (Not copy-pasted raw chunk!)
    const answer = this.synthesizeDynamicAnswer(trimmedQuery, bestChunk, chunks, moduleTitle, userAlias);
    return {
      text: answer.text,
      intent: 'module_qa',
      type: 'module',
      sourceChunk: bestChunk ? bestChunk.title : null,
      suggestions: answer.suggestions
    };
  }

  /**
   * Synthesize Dynamic, Engaging & Pedagogical Explanations
   * (Does NOT copy-paste raw chunk text verbatim; rephrases dynamically like a real tutor)
   */
  static synthesizeDynamicAnswer(query, bestChunk, allChunks, moduleTitle, userAlias = '') {
    if (!bestChunk) {
      return {
        text: `Materi tersebut belum dibahas secara rinci di modul **${moduleTitle}**. Coba gunakan istilah lain ya!`,
        suggestions: []
      };
    }

    const userName = userAlias ? `**${userAlias}**` : '';
    const cleanTitle = bestChunk.title.replace(/^[#\d\.\)\-\s]+/, '').trim();

    // Friendly, dynamic tutor intros
    const tutorIntros = [
      `Nah ${userName ? userName + ', ' : ''}mengenai **${cleanTitle}**, konsep intinya begini:`,
      `Pertanyaan yang bagus banget${userName ? ' dari ' + userName : ''}! Mari kita bedah topik **${cleanTitle}** secara santai:`,
      `Oke ${userName ? userName + ', ' : ''}coba bayangkan konsep **${cleanTitle}** ini dengan cara yang sederhana:`,
      `Topik **${cleanTitle}** ini seru banget! Biar gampang dipahami, berikut intisari penjelasannya:`
    ];
    const chosenIntro = tutorIntros[Math.floor(Math.random() * tutorIntros.length)];

    // Parse chunk contents: extract definitions, formulas, and examples
    const lines = bestChunk.text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
    
    // Filter out redundant title lines
    const contentLines = lines.filter((line, i) => {
      const cleanLine = line.replace(/^[#\d\.\)\-\s]+/, '').trim();
      if (i === 0 || cleanLine.toLowerCase() === cleanTitle.toLowerCase() || line.toLowerCase().startsWith('modul')) return false;
      return true;
    });

    let mainExplanation = [];
    let formulas = [];
    let examples = [];
    let subpoints = [];

    contentLines.forEach(line => {
      if (line.toLowerCase().startsWith('rumus') || line.includes('=') || line.includes('∑') || line.includes('Σ')) {
        formulas.push(line);
      } else if (line.toLowerCase().startsWith('contoh') || line.toLowerCase().includes('misal')) {
        examples.push(line);
      } else if (line.startsWith('-') || line.startsWith('*') || /^[A-Z]\./.test(line)) {
        subpoints.push(line);
      } else {
        mainExplanation.push(line);
      }
    });

    let result = `${chosenIntro}\n\n`;

    // 1. Core Concept in friendly phrasing
    if (mainExplanation.length > 0) {
      result += `🎯 **Pemahaman Inti:**\n`;
      mainExplanation.forEach(p => {
        result += `${p}\n\n`;
      });
    }

    // 2. Formulas / Key Rules if present
    if (formulas.length > 0) {
      result += `⚡ **Rumus & Formulasi Kunci:**\n`;
      formulas.forEach(f => {
        result += `> \`${f.replace(/^rumus\s*(?:matematis)?\s*[:=]\s*/i, '')}\`\n`;
      });
      result += `\n`;
    }

    // 3. Sub-points / Components if present
    if (subpoints.length > 0) {
      result += `📌 **Poin-Poin Penting:**\n`;
      subpoints.slice(0, 5).forEach(sp => {
        result += `${sp}\n`;
      });
      result += `\n`;
    }

    // 4. Practical Real-Life Examples
    if (examples.length > 0) {
      result += `💡 **Biar Makin Kebayang (Contoh Nyata):**\n`;
      examples.forEach(ex => {
        const cleanEx = ex.replace(/^contoh\s*(?:soal)?\s*[:=]\s*/i, '');
        result += `- *${cleanEx}*\n`;
      });
      result += `\n`;
    }

    // 5. Interactive Tutor Check-in at the end
    const closings = [
      `Gimana ${userName ? userName : 'kamu'}, penjelasannya sudah cukup jelas, atau ada istilah yang ingin kita bedah lebih dalam lagi?`,
      `Kira-kira sampai sini sudah kebayang ${userName ? 'ya, ' + userName : 'konsepnya'}? Mau kita coba latihan soalnya?`,
      `Semoga makin paham ya ${userName ? userName : ''}! Kalau mau lanjut ke bab berikutnya atau mau tanya yang lain, tinggal bilang aja.`
    ];
    result += `---\n💬 ${closings[Math.floor(Math.random() * closings.length)]}\n\n`;
    result += `📍 *Sumber Materi:* Modul **${moduleTitle}** &bull; *${cleanTitle}*`;

    // Dynamic suggestions
    const suggestions = [];
    const otherChunks = allChunks.filter(c => c.index !== bestChunk.index);
    if (otherChunks.length > 0) {
      const randChunk = otherChunks[Math.floor(Math.random() * otherChunks.length)];
      suggestions.push(`Bagaimana kaitannya dengan ${randChunk.title}?`);
    }
    suggestions.push(`Berikan contoh soal mengenai ${cleanTitle}`);
    suggestions.push(`Rangkum poin terpenting dari materi ini`);

    return {
      text: result,
      suggestions: suggestions.slice(0, 3)
    };
  }

  /**
   * Generate comprehensive summary with personalized note
   */
  static generateSummary(moduleContent, moduleTitle, chatHistory = [], userAlias = '') {
    const chunks = this.parseModuleChunks(moduleContent);
    const userQuestions = chatHistory
      .filter(m => m.sender === 'user')
      .map(m => m.text);

    const userName = userAlias ? `untuk **${userAlias}**` : '';

    let summaryMarkdown = `## 📋 Rangkuman Belajar: ${moduleTitle} ${userName}\n\n`;

    // 1. Overview
    summaryMarkdown += `### 🎯 Ikhtisar Modul\n`;
    summaryMarkdown += `Modul ini mencakup **${chunks.length} bagian utama** materi pembelajaran. Materi terstruktur untuk memberikan pemahaman konseptual dan aplikasi praktis.\n\n`;

    // 2. Key Topics Table / List
    summaryMarkdown += `### 🔑 Poin-Poin Pokok Bahasan\n`;
    chunks.forEach((chunk) => {
      const firstSentence = chunk.text.split('\n')[1] || chunk.text.split('.')[0] || 'Topik pembahasan materi.';
      summaryMarkdown += `- **${chunk.title}**: ${firstSentence.trim().replace(/^[-*]\s*/, '')}\n`;
    });
    summaryMarkdown += `\n`;

    // 3. Discussion Track in Chat
    summaryMarkdown += `### 💬 Jejak Diskusi & Pertanyaan yang Dibahas\n`;
    if (userQuestions.length > 0) {
      summaryMarkdown += `Dalam sesi ini, kita telah mendiskusikan **${userQuestions.length} pertanyaan**:\n`;
      userQuestions.slice(-5).forEach((q, idx) => {
        summaryMarkdown += `${idx + 1}. *"${q}"*\n`;
      });
      if (userQuestions.length > 5) {
        summaryMarkdown += `*...dan ${userQuestions.length - 5} pertanyaan lainnya.*\n`;
      }
    } else {
      summaryMarkdown += `*Belum ada interaksi pertanyaan spesifik pada sesi ini.*\n`;
    }
    summaryMarkdown += `\n`;

    // 4. Key Takeaways & Study Tips
    summaryMarkdown += `### 💡 Tips Belajar Efektif\n`;
    summaryMarkdown += `1. **Pahami Definisi Fundamental**: Kuasai istilah-istilah utama sebelum melanjutkan ke rumus atau studi kasus.\n`;
    summaryMarkdown += `2. **Gunakan Teknik Feynman**: Coba jelaskan kembali konsep dari setiap bagian dengan kata-kata Anda sendiri.\n`;
    summaryMarkdown += `3. **Latihan Berkelanjutan**: Uji diri dengan membuat variasi contoh soal dari materi di atas.\n`;

    return {
      title: `Rangkuman: ${moduleTitle}`,
      markdown: summaryMarkdown,
      sectionsCount: chunks.length,
      questionsCount: userQuestions.length
    };
  }

  /**
   * Generate interactive quiz based on module content
   */
  static generateQuiz(moduleContent, moduleTitle, userAlias = '') {
    const chunks = this.parseModuleChunks(moduleContent);
    const greeting = userAlias ? `Buat **${userAlias}**` : '';
    let quizText = `🎯 **Kuis Evaluasi Pemahaman: ${moduleTitle} ${greeting}**\n\n`;
    quizText += `Yuk uji pemahamanmu dengan menjawab pertanyaan berikut:\n\n`;

    const sampleChunks = chunks.slice(0, 3);
    sampleChunks.forEach((chunk, idx) => {
      quizText += `**Soal ${idx + 1}:** Jelaskan konsep utama dan contoh yang terkait dengan **${chunk.title}**!\n`;
    });

    quizText += `\n*Ketik jawabanmu di kolom chat, atau ketik "Tunjukkan kunci jawaban" untuk melihat pembahasannya!*`;
    return quizText;
  }
}
