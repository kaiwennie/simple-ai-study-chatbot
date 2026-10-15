/**
 * LocalStorage Manager for Study AI Assistant
 */
const STORAGE_KEY_SESSIONS = 'study_ai_sessions_v1';
const STORAGE_KEY_ACTIVE_ID = 'study_ai_active_session_id';
const STORAGE_KEY_SETTINGS = 'study_ai_settings_v1';

const DEFAULT_SAMPLES = [
  {
    id: 'sample-fisika',
    title: 'Fisika Dasar: Dinamika & Hukum Newton',
    category: 'Fisika',
    createdAt: Date.now() - 3600000 * 2,
    updatedAt: Date.now() - 3600000 * 2,
    moduleContent: `MODUL FISIKA DASAR: HUKUM NEWTON & GRAVITASI

1. Pendahuluan
Dinamika adalah cabang fisika yang mempelajari gerak benda dengan meninjau penyebab terjadinya gerak tersebut, yaitu gaya. Tokoh utama peletak dasar dinamika klasik adalah Sir Isaac Newton.

2. Hukum I Newton (Hukum Kelembaman / Inersia)
Setiap benda akan tetap berada dalam keadaan diam atau bergerak lurus beraturan, kecuali jika ada gaya resultan yang bekerja padanya dan memaksa benda tersebut mengubah keadaannya.
Rumus matematis: ΣF = 0.
Contoh: Ketika mobil direm mendadak, tubuh penumpang akan terdorong ke depan karena mempertahankan keadaan geraknya.

3. Hukum II Newton (Hukum Percepatan)
Percepatan yang dialami oleh suatu benda berbanding lurus dengan resultan gaya yang bekerja padanya dan berbanding terbalik dengan massa benda tersebut.
Rumus matematis: ΣF = m * a
Di mana:
- F = Gaya (Newton / N)
- m = Massa benda (kg)
- a = Percepatan (m/s²)
Contoh soal: Sebuah benda bermassa 5 kg ditarik dengan gaya 20 N pada permukaan licin. Berapakah percepatannya?
Penyelesaian: a = F / m = 20 / 5 = 4 m/s².

4. Hukum III Newton (Aksi-Reaksi)
Untuk setiap aksi selalu ada reaksi yang sama besar dan berlawanan arah. Pasangan gaya aksi dan reaksi bekerja pada dua benda yang berbeda.
Rumus matematis: F_aksi = -F_reaksi
Contoh: Roket yang meluncur ke atas akibat semburan gas bertekanan tinggi ke arah bawah, atau seseorang mendayung perahu ke belakang sehingga perahu melaju ke depan.

5. Hukum Gravitasi Universal Newton
Dua benda bermassa saling tarik-menarik dengan gaya yang sebanding dengan hasil kali kedua massa dan berbanding terbalik dengan kuadrat jarak antara keduanya.
Rumus: F = G * (m1 * m2) / r²
Di mana G adalah konstanta gravitasi universal (6.674 × 10⁻¹¹ N m²/kg²).

6. Gaya Gesek (Friksi)
Gaya gesek terjadi saat dua permukaan bersentuhan.
- Gaya gesek statis (fs): Mencegah benda mulai bergerak. Rumus: fs = μs * N
- Gaya gesek kinetis (fk): Bekerja saat benda sudah bergerak. Rumus: fk = μk * N
Nilai koefisien gesek kinetis selalu lebih kecil atau sama dengan koefisien gesek statis (μk ≤ μs).`,
    messages: [
      {
        id: 'msg-init-1',
        sender: 'ai',
        text: 'Halo! Saya Asisten Belajar offline Anda untuk modul **Fisika Dasar: Dinamika & Hukum Newton**. Silakan tanyakan konsep, rumus, atau contoh soal yang ingin Anda pelajari!',
        timestamp: Date.now() - 3600000 * 2,
        intent: 'greeting',
        suggestions: [
          'Jelaskan Hukum I Newton dan contohnya',
          'Apa rumus Hukum II Newton?',
          'Bagaimana cara kerja Hukum III Newton pada roket?',
          'Apa perbedaan gaya gesek statis dan kinetis?'
        ]
      }
    ]
  },
  {
    id: 'sample-biologi',
    title: 'Biologi: Sistem Peredaran Darah Manusia',
    category: 'Biologi',
    createdAt: Date.now() - 86400000,
    updatedAt: Date.now() - 86400000,
    moduleContent: `MODUL SISTEM PEREDARAN DARAH MANUSIA (KARDIOVASKULAR)

1. Pengantar
Sistem peredaran darah manusia merupakan sistem peredaran darah tertutup dan ganda. Tertutup berarti darah selalu mengalir di dalam pembuluh darah, dan ganda berarti darah melewati jantung sebanyak dua kali dalam satu peredaran lengkap.

2. Komponen Darah
Darah manusia terdiri dari:
A. Plasma Darah (55%): Cairan kekuningan yang terdiri dari 90% air, protein darah (albumin, globulin, fibrinogen), nutrisi, hormon, dan zat sisa.
B. Sel Darah Merah (Eritrosit): Berbentuk cakram bikonkaf tanpa inti sel, mengandung hemoglobin (Hb) untuk mengikat oksigen dari paru-paru ke seluruh tubuh. Masa hidup sekitar 120 hari.
C. Sel Darah Putih (Leukosit): Berperan dalam sistem kekebalan tubuh membasmi patogen. Terbagi menjadi granulosit (neutrofil, eosinofil, basofil) dan agranulosit (limfosit, monosit).
D. Keping Darah (Trombosit): Berperan vital dalam pembekuan darah ketika terjadi luka dengan melepaskan trombokinase.

3. Organ Jantung
Jantung manusia memiliki 4 ruang utama:
- Serambi Kanan (Atrium Dextra): Menerima darah kaya CO₂ dari seluruh tubuh.
- Bilik Kanan (Ventrikel Dextra): Memompa darah kaya CO₂ menuju paru-paru.
- Serambi Kiri (Atrium Sinistra): Menerima darah kaya O₂ dari paru-paru.
- Bilik Kiri (Ventrikel Sinistra): Memompa darah kaya O₂ ke seluruh tubuh (memiliki dinding otot paling tebal).

4. Pembuluh Darah
- Arteri (Nadi): Membawa darah keluar dari jantung, dinding tebal dan elastis, tekanan tinggi. Arteri terbesar disebut Aorta.
- Vena (Balik): Membawa darah kembali ke jantung, memiliki katup di sepanjang pembuluh, aliran lambat.
- Kapiler: Pembuluh mikroskopis tempat pertukaran zat dan gas antara darah dan sel-sel tubuh.

5. Mekanisme Peredaran Darah
- Peredaran Darah Kecil (Pulmonal): Jantung (Bilik Kanan) -> Arteri Pulmonalis -> Paru-paru -> Vena Pulmonalis -> Jantung (Serambi Kiri).
- Peredaran Darah Besar (Sistemik): Jantung (Bilik Kiri) -> Aorta -> Seluruh Tubuh -> Vena Cava -> Jantung (Serambi Kanan).`,
    messages: [
      {
        id: 'msg-init-2',
        sender: 'ai',
        text: 'Halo! Saya siap membantu belajar modul **Biologi: Sistem Peredaran Darah Manusia**. Silakan tanyakan bagian jantung, komponen darah, atau alur peredaran darah!',
        timestamp: Date.now() - 86400000,
        intent: 'greeting',
        suggestions: [
          'Sebutkan 4 ruang pada jantung dan fungsinya',
          'Apa fungsi eritrosit dan hemoglobin?',
          'Jelaskan jalur peredaran darah kecil dan besar',
          'Apa beda pembuluh arteri dan vena?'
        ]
      }
    ]
  }
];

class StorageManager {
  static getSessions() {
    try {
      const data = localStorage.getItem(STORAGE_KEY_SESSIONS);
      if (!data) {
        this.saveSessions(DEFAULT_SAMPLES);
        return DEFAULT_SAMPLES;
      }
      return JSON.parse(data);
    } catch (e) {
      console.error('Failed to parse sessions from localStorage', e);
      return DEFAULT_SAMPLES;
    }
  }

  static saveSessions(sessions) {
    try {
      localStorage.setItem(STORAGE_KEY_SESSIONS, JSON.stringify(sessions));
    } catch (e) {
      console.error('Failed to save sessions to localStorage', e);
    }
  }

  static getActiveSessionId() {
    const activeId = localStorage.getItem(STORAGE_KEY_ACTIVE_ID);
    const sessions = this.getSessions();
    if (activeId && sessions.some(s => s.id === activeId)) {
      return activeId;
    }
    return sessions.length > 0 ? sessions[0].id : null;
  }

  static setActiveSessionId(id) {
    localStorage.setItem(STORAGE_KEY_ACTIVE_ID, id);
  }

  static getSessionById(id) {
    const sessions = this.getSessions();
    return sessions.find(s => s.id === id) || null;
  }

  static createSession(title, moduleContent, category = 'Umum') {
    const sessions = this.getSessions();
    const newSession = {
      id: 'session-' + Date.now() + '-' + Math.random().toString(36).substr(2, 6),
      title: title.trim() || 'Modul Baru',
      category: category.trim() || 'Materi',
      createdAt: Date.now(),
      updatedAt: Date.now(),
      moduleContent: moduleContent.trim(),
      messages: []
    };

    // Extract potential quick questions from module headings
    const previewSuggestions = StudyEngine.generateQuickSuggestions(moduleContent);

    newSession.messages.push({
      id: 'msg-' + Date.now(),
      sender: 'ai',
      text: `Modul **${newSession.title}** berhasil dimuat! 🎉\n\nSaya telah menganalisis materi Anda. Anda dapat langsung menanyakan topik apapun terkait materi ini, atau klik salah satu rekomendasi pertanyaan di bawah:`,
      timestamp: Date.now(),
      intent: 'module_loaded',
      suggestions: previewSuggestions
    });

    sessions.unshift(newSession);
    this.saveSessions(sessions);
    this.setActiveSessionId(newSession.id);
    return newSession;
  }

  static renameSession(id, newTitle) {
    const sessions = this.getSessions();
    const target = sessions.find(s => s.id === id);
    if (target) {
      target.title = newTitle.trim() || target.title;
      target.updatedAt = Date.now();
      this.saveSessions(sessions);
      return true;
    }
    return false;
  }

  static deleteSession(id) {
    let sessions = this.getSessions();
    sessions = sessions.filter(s => s.id !== id);
    this.saveSessions(sessions);

    const activeId = this.getActiveSessionId();
    if (activeId === id) {
      const nextId = sessions.length > 0 ? sessions[0].id : null;
      if (nextId) {
        this.setActiveSessionId(nextId);
      } else {
        localStorage.removeItem(STORAGE_KEY_ACTIVE_ID);
      }
      return nextId;
    }
    return activeId;
  }

  static addMessage(sessionId, message) {
    const sessions = this.getSessions();
    const target = sessions.find(s => s.id === sessionId);
    if (target) {
      target.messages.push(message);
      target.updatedAt = Date.now();
      this.saveSessions(sessions);
      return true;
    }
    return false;
  }

  static getUserName() {
    try {
      return localStorage.getItem('study_ai_user_name') || '';
    } catch (e) {
      return '';
    }
  }

  static setUserName(name) {
    try {
      if (name && name.trim()) {
        localStorage.setItem('study_ai_user_name', name.trim());
      } else {
        localStorage.removeItem('study_ai_user_name');
      }
    } catch (e) {
      console.error('Failed to set user name', e);
    }
  }

  static resetToDefault() {
    this.saveSessions(DEFAULT_SAMPLES);
    this.setActiveSessionId(DEFAULT_SAMPLES[0].id);
    this.setUserName('');
    return DEFAULT_SAMPLES;
  }
}
