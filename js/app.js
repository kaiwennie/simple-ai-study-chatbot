/**
 * EduBot AI - Main Application Logic & UI Controller
 */

// Sample Module Templates for quick testing
const PRESET_SAMPLES = {
  kimia: {
    title: 'Kimia Dasar: Struktur Atom & Ikatan Kimia',
    category: 'Kimia',
    content: `MODUL KIMIA DASAR: STRUKTUR ATOM DAN IKATAN KIMIA

1. Struktur Dasar Atom
Atom terdiri dari inti atom (nukleus) yang bermuatan positif dan dikelilingi oleh awan elektron yang bermuatan negatif.
Partikel penyusun atom:
- Proton: Bermuatan positif (+1), massa ~ 1 sma, berada di inti.
- Neutron: Tidak bermuatan (netral), massa ~ 1 sma, berada di inti.
- Elektron: Bermuatan negatif (-1), massa ~ 1/1836 sma, bergerak mengitari inti pada orbital tertentu.
Nomor atom (Z) menyatakan jumlah proton dalam atom. Nomor massa (A) menyatakan jumlah proton + neutron.

2. Konfigurasi Elektron dan Elektron Valensi
Elektron valensi adalah elektron pada kulit terluar yang berperan dalam pembentukan ikatan kimia. Kaidah Oktet menyatakan bahwa atom cenderung stabil bila memiliki 8 elektron valensi (seperti gas mulia), atau 2 elektron (kaidah duplet untuk helium dan hidrogen).

3. Ikatan Ion (Elektrovalen)
Terjadi akibat serah terima (transfer) elektron antara atom logam (yang melepaskan elektron membentuk kation) dan atom nonlogam (yang menangkap elektron membentuk anion).
Contoh: Pembentukan NaCl dari Na (melepas 1 elektron) dan Cl (menerima 1 elektron).
Sifat senyawa ion: Titik leleh dan titik didih tinggi, rapuh, larut dalam air, dan menghantarkan listrik dalam bentuk lelehan atau larutan.

4. Ikatan Kovalen
Terjadi akibat pemakaian bersama pasangan elektron antara dua atom nonlogam.
Jenis ikatan kovalen:
- Ikatan Kovalen Tunggal: Berbagi 1 pasang elektron (contoh: H₂O, CH₄, HCl).
- Ikatan Kovalen Rangkap Dua: Berbagi 2 pasang elektron (contoh: O₂, CO₂).
- Ikatan Kovalen Rangkap Tiga: Berbagi 3 pasang elektron (contoh: N₂).
- Ikatan Kovalen Koordinasi: Pasangan elektron ikatan hanya berasal dari salah satu atom (contoh: NH₄⁺).

5. Ikatan Logam
Terjadi pada unsur logam dengan teori "lautan elektron", di mana kation logam teratur dalam kisi kristal dikelilingi elektron yang bergerak bebas. Hal ini menyebabkan logam bersifat konduktor panas dan listrik yang baik serta dapat ditempa.`
  },
  sejarah: {
    title: 'Sejarah Indonesia: Detik-Detik Proklamasi Kemerdekaan 1945',
    category: 'Sejarah',
    content: `MODUL SEJARAH NASIONAL: PERISTIWA PROKLAMASI KEMERDEKAAN RI 1945

1. Latar Belakang: Menyerahnya Jepang
Pada tanggal 6 dan 9 Agustus 1945, kota Hiroshima dan Nagasaki di Jepang dijatuhi bom atom oleh Sekutu. Akibatnya, pada 15 Agustus 1945, Kaisar Hirohito mengumumkan penyerahan tanpa syarat Jepang kepada Sekutu. Berita ini memicu kekosongan kekuasaan (vacuum of power) di Indonesia.

2. Peristiwa Rengasdengklok (16 Agustus 1945)
Terjadi perbedaan pandangan antara Golongan Muda (Sukarni, Chaerul Saleh, Wikana) dan Golongan Tua (Ir. Soekarno, Drs. Moh. Hatta, Mr. Achmad Soebardjo).
- Golongan Muda mendesak agar kemerdekaan segera diproklamasikan tanpa campur tangan PPKI buatan Jepang.
- Dini hari 16 Agustus 1945, Soekarno dan Hatta dibawa ke Rengasdengklok (Karawang) untuk mengamankan mereka dari pengaruh Jepang.
- Sore harinya, Achmad Soebardjo menjemput Soekarno-Hatta dengan jaminan proklamasi dilaksanakan selambat-lambatnya 17 Agustus 1945 pukul 12.00 WIB.

3. Perumusan Teks Proklamasi
Perumusan dilakukan di rumah Laksamana Tadashi Maeda di Jl. Imam Bonjol No. 1, Jakarta pada malam 16 Agustus hingga dini hari 17 Agustus 1945.
- Konsep naskah ditulis tangan oleh Ir. Soekarno, dibantu Moh. Hatta dan Achmad Soebardjo.
- Pengetikan naskah otentik dilakukan oleh Sayuti Melik dengan beberapa perubahan kata (seperti 'tempoh' menjadi 'tempo', 'wakil-wakil bangsa Indonesia' menjadi 'atas nama bangsa Indonesia').
- Ditandatangani oleh Soekarno dan Hatta atas usul Sukarni.

4. Pembacaan Teks Proklamasi (17 Agustus 1945)
Pukul 10.00 WIB di halaman rumah Ir. Soekarno, Jalan Pegangsaan Timur No. 56 Jakarta:
- Naskah dibacakan oleh Ir. Soekarno didampingi Drs. Moh. Hatta.
- Pengibaran bendera Sang Saka Merah Putih yang dijahit oleh Ibu Fatmawati, dikibarkan oleh Latief Hendraningrat dan Suhud Sastrokusumo.
- Upacara diiringi lagu Indonesia Raya karya W.R. Supratman.`
  },
  it: {
    title: 'Pemrograman: Dasar Algoritma & Struktur Data',
    category: 'Pemrograman',
    content: `MODUL PEMROGRAMAN: DASAR ALGORITMA DAN STRUKTUR KONTROL

1. Definisi Algoritma
Algoritma adalah urutan langkah-langkah logis dan sistematis untuk memecahkan suatu masalah komputasi secara terstruktur dan terukur.
Karakteristik algoritma yang baik:
- Finiteness (ada batas berhenti, tidak loop tak terhingga)
- Definiteness (langkah terdefinisi jelas, tidak ambigu)
- Input & Output (memiliki input dan menghasilkan luaran yang diharapkan)
- Effectiveness (langkah efektif dan dapat diimplementasikan).

2. Tipe Data Dasar
- Integer: Bilangan bulat (contoh: 1, 42, -10).
- Float/Double: Bilangan pecahan berkoma (contoh: 3.14, 0.05).
- String: Kumpulan karakter teks (contoh: "Halo Dunia").
- Boolean: Nilai logika kebenaran (True atau False).
- Array/List: Kumpulan elemen berurutan yang dapat diakses melalui nomor indeks.

3. Struktur Kontrol Percabangan (Branching)
Digunakan untuk menentukan jalur eksekusi program berdasarkan kondisi boolean:
- IF: Eksekusi jika kondisi bernilai benar (True).
- IF-ELSE: Memilih salah satu dari dua blok instruksi.
- SWITCH / ELIF: Memeriksa multi-kondisi atau pilihan diskret.

4. Struktur Kontrol Perulangan (Looping)
- FOR Loop: Perulangan dengan jumlah iterasi yang sudah diketahui secara pasti (counted loop).
- WHILE Loop: Perulangan yang terus berjalan selama suatu kondisi masih terpenuhi (uncounted loop).
- DO-WHILE: Blok perulangan dieksekusi minimal satu kali sebelum kondisi diperiksa.

5. Kompleksitas Algoritma (Big-O Notation)
Notasi matematis untuk mengukur efisiensi algoritma terhadap waktu (Time Complexity) dan memori (Space Complexity):
- O(1): Constant time (paling cepat, misal akses indeks array).
- O(log n): Logarithmic time (misal Binary Search).
- O(n): Linear time (misal Linear Search iterasi array).
- O(n²): Quadratic time (misal Bubble Sort bertingkat).`
  }
};

// UI State
let activeSession = null;
let currentSummaryData = null;

// DOM Elements
const historyListEl = document.getElementById('history-list');
const messagesContainerEl = document.getElementById('messages-container');
const chatInputEl = document.getElementById('chat-input');
const btnSendEl = document.getElementById('btn-send-message');
const activeChatTitleEl = document.getElementById('active-chat-title');
const activeChatCategoryEl = document.getElementById('active-chat-category');
const activeChatUpdatedEl = document.getElementById('active-chat-updated');
const typingIndicatorEl = document.getElementById('typing-indicator');
const searchInputEl = document.getElementById('search-history');
const toastContainerEl = document.getElementById('toast-container');
const sidebarEl = document.getElementById('sidebar');

// Modals
const modalUpload = document.getElementById('modal-upload');
const modalRename = document.getElementById('modal-rename');
const modalDelete = document.getElementById('modal-delete');
const modalSummary = document.getElementById('modal-summary');
const modalViewModule = document.getElementById('modal-view-module');
const modalSettings = document.getElementById('modal-settings');
const btnOpenSettings = document.getElementById('btn-open-settings');

// Markdown Parser for clean, straight-to-the-point text formatting
function renderMarkdown(text) {
  if (!text) return '';

  // Hapus teks referensi modul di bawah jawaban secara menyeluruh
  let clean = text
    .replace(/\n*\s*\*\(\s*📍\s*Referensi Modul:[^\)]*\)\*/gi, '')
    .replace(/\n*\s*\(📍\s*Referensi Modul:[^\)]*\)/gi, '')
    .replace(/\n*\s*\*\([^\)]*Referensi Modul:[^\)]*\)\*/gi, '')
    .replace(/\n*\s*\*(?:📍|📌)?\s*Referensi\s*:?[^\n]*\*/gi, '')
    .trim();

  // Escape HTML dasar untuk keamanan
  let html = clean
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // Kembalikan entity bullet atau render aman untuk tag metadata legacy
  html = html.replace(/&amp;bull;/g, '•');
  html = html.replace(/&lt;small(?:\s+style="[^"]*")?&gt;(.*?)&lt;\/small&gt;/gi, '<small style="color: var(--text-dim); display: block; margin-top: 6px; font-size: 0.8rem;">$1</small>');

  // Code blocks ```code```
  html = html.replace(/```([a-z]*)\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>');
  // Inline code `code`
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

  // Format teks langsung tanpa judul blok terpisah (h1, h2, h3 dijadikan teks penekanan langsung)
  html = html.replace(/^### (.*$)/gim, '<p><strong>$1</strong></p>');
  html = html.replace(/^## (.*$)/gim, '<p><strong>$1</strong></p>');
  html = html.replace(/^# (.*$)/gim, '<p><strong>$1</strong></p>');

  // Blockquotes >
  html = html.replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>');

  // Bold & Italic
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');

  // Horizontal Rule ---
  html = html.replace(/^\-\-\-$/gim, '<hr>');

  // List processing per-line yang AMAN dan TIDAK MEMOTONG TEKS (bebas bug greedy regex)
  const lines = html.split('\n');
  const processed = [];
  let inUl = false;
  let inOl = false;

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const ulMatch = rawLine.match(/^\s*[\-\*]\s+(.*)$/);
    const olMatch = rawLine.match(/^\s*(\d+)[\.\)]\s+(.*)$/);

    if (ulMatch) {
      if (inOl) { processed.push('</ol>'); inOl = false; }
      if (!inUl) { processed.push('<ul>'); inUl = true; }
      processed.push(`<li>${ulMatch[1]}</li>`);
    } else if (olMatch) {
      if (inUl) { processed.push('</ul>'); inUl = false; }
      if (!inOl) { processed.push('<ol>'); inOl = true; }
      processed.push(`<li>${olMatch[2]}</li>`);
    } else {
      if (inUl) { processed.push('</ul>'); inUl = false; }
      if (inOl) { processed.push('</ol>'); inOl = false; }
      processed.push(rawLine);
    }
  }
  if (inUl) processed.push('</ul>');
  if (inOl) processed.push('</ol>');

  // Line breaks to clean paragraphs
  const joined = processed.join('\n');
  const paragraphs = joined.split(/\n\n+/);
  html = paragraphs.map(p => {
    p = p.trim();
    if (!p) return '';
    if (p.startsWith('<ul>') || p.startsWith('<ol>') || p.startsWith('<pre>') || p.startsWith('<blockquote>') || p.startsWith('<hr>') || p.startsWith('<p>')) {
      return p;
    }
    return `<p>${p.replace(/\n/g, '<br>')}</p>`;
  }).join('');

  return html;
}

// Format relative date
function formatTimestamp(timestamp) {
  const diff = Date.now() - timestamp;
  const mins = Math.floor(diff / 60000);
  const hours = Math.floor(mins / 60);
  const days = Math.floor(hours / 24);

  if (mins < 1) return 'Baru saja';
  if (mins < 60) return `${mins} mnt lalu`;
  if (hours < 24) return `${hours} jam lalu`;
  return `${days} hari lalu`;
}

// Show Toast Notification
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = 'toast';
  
  let icon = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--accent-cyan);"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
  `;
  if (type === 'success') {
    icon = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--accent-emerald);"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
    `;
  } else if (type === 'error') {
    icon = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--accent-rose);"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
    `;
  }

  toast.innerHTML = `${icon}<span>${message}</span>`;
  toastContainerEl.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Modal Open/Close helpers
function openModal(modalEl) {
  if (modalEl) modalEl.classList.add('active');
}
function closeModal(modalEl) {
  if (modalEl) modalEl.classList.remove('active');
}

// Render Sessions in Sidebar History
function renderHistory(filterText = '') {
  const sessions = StorageManager.getSessions();
  const activeId = StorageManager.getActiveSessionId();
  historyListEl.innerHTML = '';

  const filtered = sessions.filter(s => 
    s.title.toLowerCase().includes(filterText.toLowerCase()) || 
    (s.category && s.category.toLowerCase().includes(filterText.toLowerCase()))
  );

  if (filtered.length === 0) {
    historyListEl.innerHTML = `
      <div class="empty-history">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 8px; opacity: 0.5;"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        <p>Tidak ada sesi yang cocok</p>
      </div>
    `;
    return;
  }

  filtered.forEach(session => {
    const li = document.createElement('li');
    li.className = `history-item ${session.id === activeId ? 'active' : ''}`;
    li.dataset.id = session.id;

    li.innerHTML = `
      <div class="history-item-left">
        <div class="history-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        </div>
        <div class="history-text-wrapper">
          <div class="history-title" title="${session.title}">${session.title}</div>
          <div class="history-meta">
            <span class="category-tag">${session.category || 'Materi'}</span>
            <span>&bull; ${formatTimestamp(session.updatedAt || session.createdAt)}</span>
          </div>
        </div>
      </div>
      <div class="history-actions">
        <button class="action-btn-sm btn-rename" title="Ubah Nama Sesi" data-id="${session.id}">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>
        </button>
        <button class="action-btn-sm btn-delete" title="Hapus Sesi" data-id="${session.id}">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
        </button>
      </div>
    `;

    // Click to select session
    li.addEventListener('click', (e) => {
      if (e.target.closest('.action-btn-sm')) return; // Ignore if clicked action
      switchSession(session.id);
      if (window.innerWidth <= 768) {
        sidebarEl.classList.remove('open');
      }
    });

    // Rename button handler
    const btnRename = li.querySelector('.btn-rename');
    btnRename.addEventListener('click', (e) => {
      e.stopPropagation();
      openRenameModal(session.id, session.title);
    });

    // Delete button handler
    const btnDelete = li.querySelector('.btn-delete');
    btnDelete.addEventListener('click', (e) => {
      e.stopPropagation();
      openDeleteModal(session.id, session.title);
    });

    historyListEl.appendChild(li);
  });
}

// Switch active session
function switchSession(sessionId) {
  StorageManager.setActiveSessionId(sessionId);
  activeSession = StorageManager.getSessionById(sessionId);
  renderHistory(searchInputEl.value);
  showChatView();
  renderActiveChat();
}

// Render active chat messages
function renderActiveChat() {
  if (!activeSession) {
    activeChatTitleEl.textContent = 'Pilih atau Unggah Modul';
    activeChatCategoryEl.textContent = '-';
    activeChatUpdatedEl.textContent = '';
    messagesContainerEl.innerHTML = `
      <div style="text-align: center; margin: auto; max-width: 400px; color: var(--text-dim);">
        <p style="font-size: 1.1rem; font-weight: 600; color: #fff; margin-bottom: 8px;">Belum Ada Sesi yang Dipilih</p>
        <p style="font-size: 0.9rem;">Unggah materi atau pilih modul dari riwayat di sebelah kiri untuk mulai belajar.</p>
      </div>
    `;
    return;
  }

  activeChatTitleEl.textContent = activeSession.title;
  activeChatCategoryEl.textContent = activeSession.category || 'Materi';
  activeChatUpdatedEl.textContent = `Diperbarui ${formatTimestamp(activeSession.updatedAt || activeSession.createdAt)}`;

  messagesContainerEl.innerHTML = '';

  activeSession.messages.forEach(msg => {
    appendMessageElement(msg, false);
  });

  scrollToBottom();
}

// Append a single message element to DOM
function appendMessageElement(msg, animated = true) {
  const wrapper = document.createElement('div');
  wrapper.className = `message-wrapper ${msg.sender}`;
  if (!animated) {
    wrapper.style.animation = 'none';
  }

  // Choose intent badge
  let badgeHtml = '';
  if (msg.sender === 'ai') {
    const badgeText = msg.badgeText || (msg.type === 'module' ? (activeSession ? activeSession.category : 'Modul') : 'Asisten AI');
    let badgeClass = 'dynamic';
    if (msg.type === 'knowledge' || msg.intent === 'broad_knowledge') {
      badgeClass = 'knowledge';
    } else if (msg.type === 'gemini' || msg.intent === 'gemini_response') {
      badgeClass = 'gemini';
    } else if (msg.type === 'calculation' || msg.intent === 'math_calc') {
      badgeClass = 'calculation';
    } else if (msg.type === 'quiz' || msg.intent === 'quiz') {
      badgeClass = 'quiz';
    } else if (msg.type === 'summary' || msg.intent === 'summary') {
      badgeClass = 'summary';
    } else if (msg.type === 'greeting' || msg.intent === 'greeting') {
      badgeClass = 'greeting';
    } else if (msg.type === 'module' || msg.intent === 'module_qa') {
      badgeClass = 'module';
    }
    badgeHtml = `<span class="intent-badge ${badgeClass}">${badgeText}</span>`;
  }

  const avatar = msg.sender === 'ai' 
    ? `<div class="message-avatar ai" title="EduBot">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
       </div>`
    : `<div class="message-avatar user" title="Anda">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
       </div>`;

  const currentUserName = StorageManager.getUserName();
  const userDisplayName = currentUserName ? `Anda (${currentUserName})` : 'Anda';

  wrapper.innerHTML = `
    ${avatar}
    <div class="message-content-box">
      <div class="message-meta">
        <strong>${msg.sender === 'ai' ? 'EduBot (Guru Belajar)' : userDisplayName}</strong>
        <span>${formatTimestamp(msg.timestamp)}</span>
        ${badgeHtml}
      </div>
      <div class="message-bubble ${msg.sender}">
        ${renderMarkdown(msg.text)}
      </div>
    </div>
  `;

  messagesContainerEl.appendChild(wrapper);
}

// Scroll messages to bottom smoothly
function scrollToBottom() {
  messagesContainerEl.scrollTop = messagesContainerEl.scrollHeight;
}

// Update user badge in brand header and input placeholder
function updateUserBadge(name) {
  const badge = document.getElementById('user-name-badge');
  if (badge) {
    if (name) {
      badge.textContent = `👤 ${name}`;
      badge.style.display = 'inline-flex';
      chatInputEl.placeholder = `Mau belajar apa hari ini, ${name}? Ketik pertanyaan atau sapamu... (Enter)`;
    } else {
      badge.style.display = 'none';
      chatInputEl.placeholder = `Tanyakan materi pelajaran, rumus, atau sapa gurumu di sini... (Enter untuk kirim)`;
    }
  }
}

// Send Message Handler
function handleSendMessage(overrideText = null) {
  const text = overrideText !== null ? overrideText : chatInputEl.value.trim();
  if (!text) return;

  // Ensure activeSession exists
  if (!activeSession) {
    const sessions = StorageManager.getSessions();
    if (sessions && sessions.length > 0) {
      activeSession = sessions[0];
      StorageManager.setActiveSessionId(activeSession.id);
    } else {
      activeSession = StorageManager.createSession('Sesi Belajar Umum', 'Catatan Belajar & Tanya Jawab Bebas', 'Umum');
    }
    renderHistory();
    renderActiveChat();
  }

  // Check if user is introducing their name
  try {
    if (typeof StudyEngine.detectNameIntro === 'function') {
      const detectedName = StudyEngine.detectNameIntro(text);
      if (detectedName) {
        StorageManager.setUserName(detectedName);
        updateUserBadge(detectedName);
      }
    }
  } catch (e) {
    console.warn('Name detection check:', e);
  }

  // Add User Message
  const userMsg = {
    id: 'msg-' + Date.now(),
    sender: 'user',
    text: text,
    timestamp: Date.now()
  };

  StorageManager.addMessage(activeSession.id, userMsg);
  appendMessageElement(userMsg, true);
  scrollToBottom();

  if (overrideText === null) {
    chatInputEl.value = '';
    chatInputEl.style.height = 'auto';
    btnSendEl.disabled = true;
  }

  // Show typing indicator
  typingIndicatorEl.style.display = 'flex';
  scrollToBottom();

  const settings = StorageManager.getSettings();
  const currentUserName = StorageManager.getUserName();

  if (settings.aiProvider === 'gemini' && settings.geminiApiKey) {
    // Online Gemini API request
    StudyEngine.generateGeminiResponse(
      settings.geminiApiKey,
      settings.geminiModel,
      text,
      activeSession.moduleContent,
      activeSession.title,
      activeSession.messages,
      currentUserName
    ).then(aiResult => {
      typingIndicatorEl.style.display = 'none';

      const aiMsg = {
        id: 'msg-' + Date.now(),
        sender: 'ai',
        text: aiResult.text,
        timestamp: Date.now(),
        intent: aiResult.intent,
        type: aiResult.type,
        badgeText: aiResult.badgeText,
        suggestions: aiResult.suggestions || []
      };

      StorageManager.addMessage(activeSession.id, aiMsg);
      appendMessageElement(aiMsg, true);
      scrollToBottom();
      renderHistory(searchInputEl.value);
      activeChatUpdatedEl.textContent = `Diperbarui ${formatTimestamp(Date.now())}`;
    }).catch(err => {
      console.warn('Gemini API call failed, falling back to local engine:', err);
      showToast(`Koneksi Gemini gagal (${err.message}). Menggunakan Smart Engine lokal.`, 'warning');
      
      // Fallback to local dynamic engine
      setTimeout(() => {
        typingIndicatorEl.style.display = 'none';
        const fallbackResult = StudyEngine.generateResponse(
          text,
          activeSession.moduleContent,
          activeSession.title,
          activeSession.messages,
          currentUserName,
          settings
        );

        const aiMsg = {
          id: 'msg-' + Date.now(),
          sender: 'ai',
          text: fallbackResult.text,
          timestamp: Date.now(),
          intent: fallbackResult.intent,
          type: fallbackResult.type,
          badgeText: fallbackResult.badgeText,
          suggestions: fallbackResult.suggestions || []
        };

        StorageManager.addMessage(activeSession.id, aiMsg);
        appendMessageElement(aiMsg, true);
        scrollToBottom();
        renderHistory(searchInputEl.value);
        activeChatUpdatedEl.textContent = `Diperbarui ${formatTimestamp(Date.now())}`;
      }, 300);
    });
  } else {
    // Generate AI Response with smart dynamic local engine
    setTimeout(() => {
      typingIndicatorEl.style.display = 'none';

      const aiResult = StudyEngine.generateResponse(
        text,
        activeSession.moduleContent,
        activeSession.title,
        activeSession.messages,
        currentUserName,
        settings
      );

      if (aiResult.detectedName) {
        StorageManager.setUserName(aiResult.detectedName);
        updateUserBadge(aiResult.detectedName);
      }

      const aiMsg = {
        id: 'msg-' + Date.now(),
        sender: 'ai',
        text: aiResult.text,
        timestamp: Date.now(),
        intent: aiResult.intent,
        type: aiResult.type,
        badgeText: aiResult.badgeText,
        suggestions: aiResult.suggestions || []
      };

      StorageManager.addMessage(activeSession.id, aiMsg);
      appendMessageElement(aiMsg, true);
      scrollToBottom();

      // Refresh history metadata in sidebar
      renderHistory(searchInputEl.value);
      activeChatUpdatedEl.textContent = `Diperbarui ${formatTimestamp(Date.now())}`;
    }, 380);
  }
}

// ============================================================================
// MODAL ACTIONS
// ============================================================================

// 1. Rename Modal
function openRenameModal(sessionId, currentTitle) {
  document.getElementById('rename-session-id').value = sessionId;
  document.getElementById('rename-input').value = currentTitle;
  openModal(modalRename);
  document.getElementById('rename-input').focus();
}

document.getElementById('btn-save-rename').addEventListener('click', () => {
  const sessionId = document.getElementById('rename-session-id').value;
  const newTitle = document.getElementById('rename-input').value.trim();
  if (newTitle) {
    StorageManager.renameSession(sessionId, newTitle);
    if (activeSession && activeSession.id === sessionId) {
      activeSession.title = newTitle;
      activeChatTitleEl.textContent = newTitle;
    }
    renderHistory(searchInputEl.value);
    closeModal(modalRename);
    showToast('Nama sesi berhasil diperbarui!', 'success');
  }
});

// 2. Delete Modal
function openDeleteModal(sessionId, sessionTitle) {
  document.getElementById('delete-session-id').value = sessionId;
  document.getElementById('delete-session-title').textContent = sessionTitle;
  openModal(modalDelete);
}

document.getElementById('btn-confirm-delete').addEventListener('click', () => {
  const sessionId = document.getElementById('delete-session-id').value;
  const nextActiveId = StorageManager.deleteSession(sessionId);
  closeModal(modalDelete);
  showToast('Sesi chat berhasil dihapus', 'info');

  if (nextActiveId) {
    switchSession(nextActiveId);
  } else {
    activeSession = null;
    renderHistory();
    renderActiveChat();
  }
});

// 3. Upload Modal & File Handling
const btnOpenUpload = document.getElementById('btn-open-upload');
const btnSubmitUpload = document.getElementById('btn-submit-upload');
const dropzone = document.getElementById('file-dropzone');
const fileInput = document.getElementById('file-input');
const moduleTitleInput = document.getElementById('module-title-input');
const moduleCategoryInput = document.getElementById('module-category-input');
const moduleContentInput = document.getElementById('module-content-input');

btnOpenUpload.addEventListener('click', () => {
  // Clear inputs
  moduleTitleInput.value = '';
  moduleCategoryInput.value = '';
  moduleContentInput.value = '';
  openModal(modalUpload);
});

// Dropzone trigger
dropzone.addEventListener('click', () => fileInput.click());

dropzone.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropzone.classList.add('dragover');
});

dropzone.addEventListener('dragleave', () => {
  dropzone.classList.remove('dragover');
});

dropzone.addEventListener('drop', (e) => {
  e.preventDefault();
  dropzone.classList.remove('dragover');
  if (e.dataTransfer.files.length > 0) {
    handleFileUpload(e.dataTransfer.files[0]);
  }
});

fileInput.addEventListener('change', (e) => {
  if (e.target.files.length > 0) {
    handleFileUpload(e.target.files[0]);
  }
});

function handleFileUpload(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    const content = e.target.result;
    moduleContentInput.value = content;
    
    // Auto populate title from filename
    const cleanFileName = file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');
    if (!moduleTitleInput.value) {
      moduleTitleInput.value = cleanFileName.charAt(0).toUpperCase() + cleanFileName.slice(1);
    }
    showToast(`File "${file.name}" berhasil dimuat!`, 'success');
  };
  reader.readAsText(file);
}

// Preset sample chip clicks
document.querySelectorAll('.sample-chip-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const key = btn.dataset.sample;
    const preset = PRESET_SAMPLES[key];
    if (preset) {
      moduleTitleInput.value = preset.title;
      moduleCategoryInput.value = preset.category;
      moduleContentInput.value = preset.content;
      showToast(`Materi contoh ${preset.category} berhasil dipilih`, 'info');
    }
  });
});

// Submit Upload -> Creates new chat session
btnSubmitUpload.addEventListener('click', () => {
  const title = moduleTitleInput.value.trim();
  const category = moduleCategoryInput.value.trim() || 'Materi';
  const content = moduleContentInput.value.trim();

  if (!title) {
    showToast('Harap masukkan judul modul!', 'error');
    moduleTitleInput.focus();
    return;
  }
  if (!content) {
    showToast('Harap masukkan atau unggah isi teks modul!', 'error');
    moduleContentInput.focus();
    return;
  }

  const newSession = StorageManager.createSession(title, content, category);
  closeModal(modalUpload);
  switchSession(newSession.id);
  showToast(`Sesi "${newSession.title}" siap digunakan! 🎉`, 'success');
});

// 4. Summarize Chat Modal
const btnSummarizeChat = document.getElementById('btn-summarize-chat');
const summaryContentEl = document.getElementById('summary-content');
const summaryModalTitleEl = document.getElementById('summary-modal-title');
const btnCopySummary = document.getElementById('btn-copy-summary');
const btnDownloadSummary = document.getElementById('btn-download-summary');

btnSummarizeChat.addEventListener('click', async () => {
  if (!activeSession) return;

  const currentUserName = StorageManager.getUserName();
  const settings = StorageManager.getSettings();

  summaryModalTitleEl.textContent = `Review Materi: ${activeSession.title}`;
  summaryContentEl.innerHTML = `
    <div style="text-align: center; padding: 36px 20px; color: var(--text-dim);">
      <div class="typing-indicator" style="display: inline-flex; justify-content: center; margin-bottom: 14px;">
        <div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>
      </div>
      <p style="color: #fff; font-weight: 600; font-size: 1rem; margin-bottom: 6px;">Guru AI sedang menganalisis sesi obrolan...</p>
      <p style="font-size: 0.84rem;">Menyusun review intisari konsep dan pemahaman yang telah dibahas bersama.</p>
    </div>
  `;
  openModal(modalSummary);

  let summary = null;
  if (settings.aiProvider === 'gemini' && settings.geminiApiKey) {
    try {
      summary = await StudyEngine.generateGeminiSummary(
        settings.geminiApiKey,
        settings.geminiModel,
        activeSession.moduleContent,
        activeSession.title,
        activeSession.messages,
        currentUserName
      );
    } catch (e) {
      console.warn('Gemini summary error, fallback to local engine:', e);
      showToast('Koneksi Gemini lambat/gagal. Menggunakan Smart Engine lokal.', 'warning');
    }
  }

  if (!summary) {
    // Smart Offline Material Review Engine
    summary = StudyEngine.generateSummary(
      activeSession.moduleContent,
      activeSession.title,
      activeSession.messages,
      currentUserName
    );
  }

  currentSummaryData = summary;

  if (summary.isEmpty) {
    btnCopySummary.disabled = true;
    btnDownloadSummary.disabled = true;
    btnCopySummary.style.opacity = '0.4';
    btnDownloadSummary.style.opacity = '0.4';
    btnCopySummary.style.cursor = 'not-allowed';
    btnDownloadSummary.style.cursor = 'not-allowed';

    summaryContentEl.innerHTML = `
      <div class="summary-empty-state" style="text-align: center; padding: 32px 18px;">
        <div style="width: 58px; height: 58px; border-radius: 50%; background: rgba(99, 102, 241, 0.12); border: 1px solid rgba(99, 102, 241, 0.25); display: inline-flex; align-items: center; justify-content: center; margin-bottom: 16px; color: var(--primary-light);">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
        </div>
        <h3 style="font-size: 1.1rem; font-weight: 600; color: #fff; margin-bottom: 8px;">Belum Ada Materi yang Dibahas</h3>
        <p style="color: var(--text-dim); font-size: 0.88rem; line-height: 1.6; max-width: 440px; margin: 0 auto 20px auto;">
          Review materi dirangkum otomatis dari hasil obrolan dan konsep pelajaran yang telah kamu diskusikan bersama Guru EduBot. Karena kamu belum mulai membahas materi modul <strong>"${activeSession.title.replace(/</g, '&lt;')}"</strong> di ruang chat, review ini masih kosong.
        </p>
        <button id="btn-start-study-prompt" class="btn-primary" style="padding: 9px 18px; font-size: 0.88rem; display: inline-flex; align-items: center; gap: 8px; margin: 0 auto;">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          Mulai Diskusi Materi Sekarang
        </button>
      </div>
    `;

    const startBtn = document.getElementById('btn-start-study-prompt');
    if (startBtn) {
      startBtn.addEventListener('click', () => {
        closeModal(modalSummary);
        chatInputEl.focus();
        if (!chatInputEl.value) {
          const suggestions = StudyEngine.generateQuickSuggestions(activeSession.moduleContent);
          if (suggestions && suggestions.length > 0) {
            chatInputEl.value = suggestions[0];
            btnSendEl.disabled = false;
          }
        }
      });
    }
  } else {
    btnCopySummary.disabled = false;
    btnDownloadSummary.disabled = false;
    btnCopySummary.style.opacity = '1';
    btnDownloadSummary.style.opacity = '1';
    btnCopySummary.style.cursor = 'pointer';
    btnDownloadSummary.style.cursor = 'pointer';
    summaryContentEl.innerHTML = renderMarkdown(summary.markdown);
  }
});

btnCopySummary.addEventListener('click', () => {
  if (!currentSummaryData || currentSummaryData.isEmpty) {
    showToast('Belum ada materi yang dibahas untuk disalin!', 'warning');
    return;
  }
  navigator.clipboard.writeText(currentSummaryData.markdown).then(() => {
    showToast('Review materi berhasil disalin ke clipboard!', 'success');
  }).catch(() => {
    showToast('Gagal menyalin review materi', 'error');
  });
});

btnDownloadSummary.addEventListener('click', () => {
  if (!currentSummaryData || currentSummaryData.isEmpty || !activeSession) {
    showToast('Belum ada materi yang dibahas untuk diunduh!', 'warning');
    return;
  }
  const blob = new Blob([currentSummaryData.markdown], { type: 'text/markdown;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Review_Materi_${activeSession.title.replace(/[^a-zA-Z0-9]/g, '_')}.md`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('File review materi (.md) berhasil diunduh!', 'success');
});

// 5. View Module Modal
const btnViewModule = document.getElementById('btn-view-module');
const viewModuleContentEl = document.getElementById('view-module-content');
const viewModuleTitleEl = document.getElementById('view-module-title');

btnViewModule.addEventListener('click', () => {
  if (!activeSession) return;
  viewModuleTitleEl.textContent = `Teks Modul: ${activeSession.title}`;
  viewModuleContentEl.textContent = activeSession.moduleContent;
  openModal(modalViewModule);
});

// 6. Settings Modal Handler
function initSettingsModal() {
  const settings = StorageManager.getSettings();

  // Flexibility radio
  if (settings.flexibility === 'strict') {
    document.getElementById('flex-strict').checked = true;
  } else {
    document.getElementById('flex-high').checked = true;
  }

  // Provider radio
  if (settings.aiProvider === 'gemini') {
    document.getElementById('prov-gemini').checked = true;
    document.getElementById('gemini-config-box').style.display = 'block';
  } else {
    document.getElementById('prov-offline').checked = true;
    document.getElementById('gemini-config-box').style.display = 'none';
  }

  // Inputs
  document.getElementById('gemini-api-key').value = settings.geminiApiKey || '';
  if (settings.geminiModel) {
    document.getElementById('gemini-model-select').value = settings.geminiModel;
  }

  openModal(modalSettings);
}

// Toggle Gemini Box on provider radio change
document.querySelectorAll('input[name="ai-provider"]').forEach(radio => {
  radio.addEventListener('change', (e) => {
    const box = document.getElementById('gemini-config-box');
    if (e.target.value === 'gemini') {
      box.style.display = 'block';
      document.getElementById('gemini-api-key').focus();
    } else {
      box.style.display = 'none';
    }
  });
});

if (btnOpenSettings) {
  btnOpenSettings.addEventListener('click', () => {
    initSettingsModal();
  });
}

document.getElementById('btn-save-settings').addEventListener('click', () => {
  const flexibility = document.querySelector('input[name="ai-flexibility"]:checked').value;
  const aiProvider = document.querySelector('input[name="ai-provider"]:checked').value;
  const geminiApiKey = document.getElementById('gemini-api-key').value.trim();
  const geminiModel = document.getElementById('gemini-model-select').value;

  if (aiProvider === 'gemini' && !geminiApiKey) {
    showToast('Silakan masukkan Google Gemini API Key Anda!', 'warning');
    document.getElementById('gemini-api-key').focus();
    return;
  }

  StorageManager.saveSettings({
    flexibility,
    aiProvider,
    geminiApiKey,
    geminiModel
  });

  closeModal(modalSettings);
  const providerLabel = aiProvider === 'gemini' ? `Google Gemini (${geminiModel})` : 'Smart Dynamic Offline Engine';
  showToast(`Pengaturan berhasil disimpan! Mode: ${providerLabel}`, 'success');
});

// Close Modal buttons
document.querySelectorAll('.close-modal-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.dataset.target;
    if (modalId) {
      closeModal(document.getElementById(modalId));
    }
  });
});

// Close modal on backdrop click
document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      closeModal(backdrop);
    }
  });
});

// Reset data button
// Reset data button
document.getElementById('btn-reset-data').addEventListener('click', () => {
  if (confirm('Kembalikan modul ke contoh bawaan (Fisika & Biologi)?')) {
    StorageManager.resetToDefault();
    const activeId = StorageManager.getActiveSessionId();
    switchSession(activeId);
    showToast('Data berhasil direset ke contoh default!', 'info');
  }
});

// Sidebar Toggle for Mobile
const btnToggleSidebar = document.getElementById('btn-toggle-sidebar');
btnToggleSidebar.addEventListener('click', () => {
  sidebarEl.classList.toggle('open');
});

// Search history input
searchInputEl.addEventListener('input', (e) => {
  renderHistory(e.target.value);
});

// Input textarea auto-resize & keyboard submission
chatInputEl.addEventListener('input', () => {
  chatInputEl.style.height = 'auto';
  chatInputEl.style.height = Math.min(chatInputEl.scrollHeight, 160) + 'px';
  btnSendEl.disabled = chatInputEl.value.trim().length === 0;
});

chatInputEl.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    handleSendMessage();
  }
});

btnSendEl.addEventListener('click', () => {
  handleSendMessage();
});

// =========================================================================
// INTERACTIVE QUIZ FEATURE CONTROLLER
// =========================================================================
let currentQuizQuestions = [];
let currentQuizAnswers = {}; // map: { [questionId]: optionIndex }
let selectedQuizCount = 5;
let isQuizTimerEnabled = false;
let selectedTimerMinutes = 3;
let quizTimerInterval = null;
let quizRemainingSeconds = 0;
let quizTotalDurationSeconds = 0;

const chatFlowViewEl = document.getElementById('chat-flow-view');
const quizPageViewEl = document.getElementById('quiz-page-view');
const btnOpenQuizView = document.getElementById('btn-open-quiz-view');
const btnQuizBackChat = document.getElementById('btn-quiz-back-chat');
const btnResultBackChat = document.getElementById('btn-result-back-chat');
const btnStartQuiz = document.getElementById('btn-start-quiz');
const btnSubmitQuiz = document.getElementById('btn-submit-quiz');
const btnTryAgainQuiz = document.getElementById('btn-try-again-quiz');

const quizSetupPanel = document.getElementById('quiz-setup-panel');
const quizActivePanel = document.getElementById('quiz-active-panel');
const quizResultPanel = document.getElementById('quiz-result-panel');

const quizBadgeModule = document.getElementById('quiz-badge-module');
const quizHeaderTitle = document.getElementById('quiz-header-title');
const quizQuestionsList = document.getElementById('quiz-questions-list');
const quizProgressText = document.getElementById('quiz-progress-text');
const quizAnsweredBadge = document.getElementById('quiz-answered-badge');
const quizProgressFill = document.getElementById('quiz-progress-fill');

// Timer & Custom Count DOM Elements
const quizCustomCountInput = document.getElementById('quiz-custom-count');
const quizTimerToggle = document.getElementById('quiz-timer-toggle');
const quizTimerOptions = document.getElementById('quiz-timer-options');
const quizTimerCustomInput = document.getElementById('quiz-timer-custom-minutes');
const quizActiveTimerBox = document.getElementById('quiz-active-timer-box');
const quizTimerCountdown = document.getElementById('quiz-timer-countdown');
const quizStatTime = document.getElementById('quiz-stat-time');

function formatSecondsToMMSS(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function stopQuizTimer() {
  if (quizTimerInterval) {
    clearInterval(quizTimerInterval);
    quizTimerInterval = null;
  }
  if (quizActiveTimerBox) {
    quizActiveTimerBox.classList.remove('urgent');
  }
}

function showChatView() {
  stopQuizTimer();
  if (quizPageViewEl) quizPageViewEl.style.display = 'none';
  if (chatFlowViewEl) chatFlowViewEl.style.display = 'flex';
}

function showQuizView() {
  stopQuizTimer();
  if (!activeSession) {
    showToast('Silakan pilih atau unggah modul terlebih dahulu untuk memulai kuis!', 'warning');
    return;
  }

  if (chatFlowViewEl) chatFlowViewEl.style.display = 'none';
  if (quizPageViewEl) quizPageViewEl.style.display = 'flex';

  quizBadgeModule.textContent = activeSession.category || 'Modul Belajar';
  quizHeaderTitle.textContent = `Kuis: ${activeSession.title}`;

  // Reset to setup panel
  quizSetupPanel.style.display = 'block';
  quizActivePanel.style.display = 'none';
  quizResultPanel.style.display = 'none';
}

function handleStartQuiz() {
  stopQuizTimer();
  if (!activeSession) {
    showToast('Sesi modul belajar belum dipilih.', 'warning');
    return;
  }

  // Ambil jumlah soal dari input kustom jika ada nilai valid
  if (quizCustomCountInput) {
    const customVal = parseInt(quizCustomCountInput.value, 10);
    if (!isNaN(customVal) && customVal >= 1) {
      selectedQuizCount = Math.min(Math.max(customVal, 1), 50);
    }
  }

  currentQuizAnswers = {};
  currentQuizQuestions = StudyEngine.generateMultipleChoiceQuiz(
    activeSession.moduleContent,
    activeSession.title,
    selectedQuizCount
  );

  if (!currentQuizQuestions || currentQuizQuestions.length === 0) {
    showToast('Belum ada materi cukup pada modul ini untuk disusun kuis.', 'warning');
    return;
  }

  quizSetupPanel.style.display = 'none';
  quizActivePanel.style.display = 'block';
  quizResultPanel.style.display = 'none';

  renderQuizQuestions();
  updateQuizProgress();

  // Inisialisasi Timer jika opsi timer diaktifkan
  if (isQuizTimerEnabled) {
    if (quizTimerCustomInput) {
      const customMin = parseInt(quizTimerCustomInput.value, 10);
      if (!isNaN(customMin) && customMin >= 1) {
        selectedTimerMinutes = Math.min(Math.max(customMin, 1), 120);
      }
    }

    quizRemainingSeconds = selectedTimerMinutes * 60;
    quizTotalDurationSeconds = quizRemainingSeconds;

    if (quizActiveTimerBox) quizActiveTimerBox.style.display = 'inline-flex';
    if (quizTimerCountdown) quizTimerCountdown.textContent = formatSecondsToMMSS(quizRemainingSeconds);

    quizTimerInterval = setInterval(() => {
      quizRemainingSeconds--;

      if (quizTimerCountdown) {
        quizTimerCountdown.textContent = formatSecondsToMMSS(Math.max(quizRemainingSeconds, 0));
      }

      // Beri animasi visual peringatan jika waktu tersisa <= 30 detik
      if (quizRemainingSeconds <= 30 && quizActiveTimerBox) {
        quizActiveTimerBox.classList.add('urgent');
      }

      // Waktu habis: otomatis submit kuis!
      if (quizRemainingSeconds <= 0) {
        stopQuizTimer();
        showToast('⏱️ Waktu pengerjaan kuis telah habis! Jawaban Anda otomatis dikumpulkan.', 'info');
        handleSubmitQuiz();
      }
    }, 1000);
  } else {
    if (quizActiveTimerBox) quizActiveTimerBox.style.display = 'none';
  }

  quizPageViewEl.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderQuizQuestions() {
  quizQuestionsList.innerHTML = '';

  currentQuizQuestions.forEach((q, idx) => {
    const card = document.createElement('div');
    card.className = 'quiz-question-card';
    card.id = `quiz-card-${q.id}`;

    let optionsHtml = '';
    q.options.forEach((optText, optIdx) => {
      const isSelected = currentQuizAnswers[q.id] === optIdx;
      optionsHtml += `
        <button type="button" class="quiz-option-btn ${isSelected ? 'selected' : ''}" data-qid="${q.id}" data-oidx="${optIdx}">
          <span class="option-check-circle"></span>
          <span class="option-text">${optText}</span>
        </button>
      `;
    });

    card.innerHTML = `
      <div class="quiz-q-header">
        <span class="quiz-q-badge">Soal ${idx + 1} dari ${currentQuizQuestions.length}</span>
        <span class="quiz-q-topic">${q.topic || 'Materi Modul'}</span>
      </div>
      <h3 class="quiz-q-title">${q.question}</h3>
      <div class="quiz-options-group">
        ${optionsHtml}
      </div>
    `;

    quizQuestionsList.appendChild(card);
  });

  // Attach click listener for option selection
  const optionBtns = quizQuestionsList.querySelectorAll('.quiz-option-btn');
  optionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const qid = btn.getAttribute('data-qid');
      const oidx = parseInt(btn.getAttribute('data-oidx'), 10);
      selectQuizOption(qid, oidx);
    });
  });
}

function selectQuizOption(qid, oidx) {
  currentQuizAnswers[qid] = oidx;

  const card = document.getElementById(`quiz-card-${qid}`);
  if (card) {
    const btns = card.querySelectorAll('.quiz-option-btn');
    btns.forEach(b => {
      const bIdx = parseInt(b.getAttribute('data-oidx'), 10);
      if (bIdx === oidx) {
        b.classList.add('selected');
      } else {
        b.classList.remove('selected');
      }
    });
  }

  updateQuizProgress();
}

function updateQuizProgress() {
  const answeredCount = Object.keys(currentQuizAnswers).length;
  const total = currentQuizQuestions.length;
  const pct = total > 0 ? Math.round((answeredCount / total) * 100) : 0;

  quizProgressText.textContent = `${total} Pertanyaan Modul`;
  quizAnsweredBadge.textContent = `${answeredCount} dari ${total} Terjawab`;
  quizProgressFill.style.width = `${pct}%`;

  if (answeredCount === total) {
    btnSubmitQuiz.disabled = false;
    btnSubmitQuiz.classList.add('ready');
  } else {
    btnSubmitQuiz.disabled = true;
    btnSubmitQuiz.classList.remove('ready');
  }
}

function handleSubmitQuiz() {
  stopQuizTimer();

  const total = currentQuizQuestions.length;
  let correctCount = 0;

  const reviewListEl = document.getElementById('quiz-review-list');
  reviewListEl.innerHTML = '';

  currentQuizQuestions.forEach((q, idx) => {
    const userChoice = currentQuizAnswers[q.id];
    const isCorrect = userChoice === q.correctIndex;
    if (isCorrect) correctCount++;

    const reviewItem = document.createElement('div');
    reviewItem.className = `quiz-review-item ${isCorrect ? 'correct' : 'wrong'}`;

    let reviewOptionsHtml = '';
    q.options.forEach((optText, optIdx) => {
      let optClass = 'review-opt';
      let tagHtml = '';

      if (optIdx === q.correctIndex) {
        optClass += ' opt-key';
        tagHtml = '<span class="review-tag key">Kunci Jawaban Benar</span>';
      }
      if (optIdx === userChoice) {
        if (isCorrect) {
          optClass += ' opt-user-correct';
          tagHtml = '<span class="review-tag user-correct">Jawaban Anda (Benar)</span>';
        } else {
          optClass += ' opt-user-wrong';
          tagHtml = '<span class="review-tag user-wrong">Pilihan Anda (Salah)</span>';
        }
      }

      reviewOptionsHtml += `
        <div class="${optClass}">
          <span class="opt-text">${optText}</span>
          ${tagHtml}
        </div>
      `;
    });

    reviewItem.innerHTML = `
      <div class="review-item-header">
        <span class="review-number">Soal ${idx + 1}</span>
        <span class="review-status-badge ${isCorrect ? 'correct' : 'wrong'}">
          ${isCorrect ? '✅ Jawaban Anda Benar' : '❌ Jawaban Kurang Tepat'}
        </span>
      </div>
      <h4 class="review-question-text">${q.question}</h4>
      <div class="review-options-list">
        ${reviewOptionsHtml}
      </div>
      <div class="ai-explanation-box">
        <div class="ai-exp-header">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20"/><path d="m17 5-5-3-5 3"/><path d="m17 19-5 3-5-3"/><path d="M2 12h20"/><path d="m5 7-3 5 3 5"/><path d="m19 7 3 5-3 5"/></svg>
          <strong>Pembahasan Logis AI:</strong>
        </div>
        <p class="ai-exp-text">${q.aiExplanation}</p>
      </div>
    `;

    reviewListEl.appendChild(reviewItem);
  });

  const score = Math.round((correctCount / total) * 100);
  document.getElementById('quiz-score-num').textContent = score;

  const headlineEl = document.getElementById('quiz-score-headline');
  const descEl = document.getElementById('quiz-score-desc');
  if (score === 100) {
    headlineEl.textContent = 'Luar Biasa! Skor Sempurna! 🌟';
    descEl.textContent = `Hebat! Anda berhasil menjawab seluruh ${total} pertanyaan dengan tepat tanpa kesalahan.`;
  } else if (score >= 70) {
    headlineEl.textContent = 'Bagus Sekali! Pemahaman Mantap! 🎉';
    descEl.textContent = `Anda berhasil menjawab ${correctCount} dari ${total} pertanyaan dengan benar. Pelajari catatan pembahasan AI di bawah untuk menyempurnakannya.`;
  } else {
    headlineEl.textContent = 'Tetap Semangat, Mari Pelajari Lagi! 💪';
    descEl.textContent = `Anda menjawab ${correctCount} dari ${total} pertanyaan dengan benar. Simak ulasan pembahasan logis AI di bawah ini dan coba lagi (Try Again)!`;
  }

  document.getElementById('quiz-stat-correct').textContent = `✅ ${correctCount} Benar`;
  document.getElementById('quiz-stat-wrong').textContent = `❌ ${total - correctCount} Salah`;

  // Tampilkan waktu pengerjaan jika timer diaktifkan
  if (isQuizTimerEnabled && quizStatTime) {
    const elapsed = Math.max(quizTotalDurationSeconds - quizRemainingSeconds, 1);
    quizStatTime.textContent = `⏱️ Waktu: ${formatSecondsToMMSS(elapsed)} / ${selectedTimerMinutes}m`;
    quizStatTime.style.display = 'inline-flex';
  } else if (quizStatTime) {
    quizStatTime.style.display = 'none';
  }

  quizActivePanel.style.display = 'none';
  quizResultPanel.style.display = 'block';

  quizPageViewEl.scrollTo({ top: 0, behavior: 'smooth' });
}

// Event Listeners for Quiz Feature
if (btnOpenQuizView) {
  btnOpenQuizView.addEventListener('click', () => {
    showQuizView();
  });
}

if (btnQuizBackChat) {
  btnQuizBackChat.addEventListener('click', () => {
    showChatView();
  });
}

if (btnResultBackChat) {
  btnResultBackChat.addEventListener('click', () => {
    showChatView();
  });
}

// Question count presets selector
const countOptBtns = document.querySelectorAll('.btn-count-opt');
countOptBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    countOptBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cnt = parseInt(btn.getAttribute('data-count'), 10) || 5;
    selectedQuizCount = cnt;
    if (quizCustomCountInput) {
      quizCustomCountInput.value = cnt;
    }
  });
});

// Custom Question Count input listener (Bisa ketik nomor kustom sendiri)
if (quizCustomCountInput) {
  quizCustomCountInput.addEventListener('input', (e) => {
    let val = parseInt(e.target.value, 10);
    if (!isNaN(val) && val >= 1) {
      if (val > 50) val = 50;
      selectedQuizCount = val;

      // Update highlight pada preset buttons jika nilainya cocok
      countOptBtns.forEach(b => {
        const bCount = parseInt(b.getAttribute('data-count'), 10);
        if (bCount === val) {
          b.classList.add('active');
        } else {
          b.classList.remove('active');
        }
      });
    }
  });
}

// Timer Toggle switch listener
if (quizTimerToggle) {
  quizTimerToggle.addEventListener('change', (e) => {
    isQuizTimerEnabled = e.target.checked;
    if (quizTimerOptions) {
      quizTimerOptions.style.display = isQuizTimerEnabled ? 'block' : 'none';
    }
  });
}

// Timer Presets selector
const timerOptBtns = document.querySelectorAll('.btn-timer-opt');
timerOptBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    timerOptBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const mins = parseInt(btn.getAttribute('data-minutes'), 10) || 3;
    selectedTimerMinutes = mins;
    if (quizTimerCustomInput) {
      quizTimerCustomInput.value = mins;
    }
  });
});

// Custom Timer Minutes input listener (Bisa atur menit sendiri)
if (quizTimerCustomInput) {
  quizTimerCustomInput.addEventListener('input', (e) => {
    let val = parseInt(e.target.value, 10);
    if (!isNaN(val) && val >= 1) {
      if (val > 120) val = 120;
      selectedTimerMinutes = val;

      // Update highlight pada timer preset buttons jika nilainya cocok
      timerOptBtns.forEach(b => {
        const bMins = parseInt(b.getAttribute('data-minutes'), 10);
        if (bMins === val) {
          b.classList.add('active');
        } else {
          b.classList.remove('active');
        }
      });
    }
  });
}

if (btnStartQuiz) {
  btnStartQuiz.addEventListener('click', handleStartQuiz);
}

if (btnSubmitQuiz) {
  btnSubmitQuiz.addEventListener('click', handleSubmitQuiz);
}

if (btnTryAgainQuiz) {
  btnTryAgainQuiz.addEventListener('click', () => {
    handleStartQuiz();
  });
}

// App Initialization
document.addEventListener('DOMContentLoaded', () => {
  updateUserBadge(StorageManager.getUserName());
  const activeId = StorageManager.getActiveSessionId();
  if (activeId) {
    switchSession(activeId);
  } else {
    renderHistory();
    renderActiveChat();
  }
});
