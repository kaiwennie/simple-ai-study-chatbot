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

// Simple Markdown Parser for beautiful text formatting
function renderMarkdown(text) {
  if (!text) return '';
  let html = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // Code blocks ```code```
  html = html.replace(/```([a-z]*)\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>');
  // Inline code `code`
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
  // Headers ###
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
  // Blockquotes >
  html = html.replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>');
  // Bold & Italic
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  // Horizontal Rule ---
  html = html.replace(/^\-\-\-$/gim, '<hr>');
  // Unordered list items - item or * item
  html = html.replace(/^\s*[\-\*]\s+(.*$)/gim, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>)/gims, '<ul>$1</ul>');
  // Ordered lists
  html = html.replace(/^\s*\d+\.\s+(.*$)/gim, '<li>$1</li>');
  // Line breaks to paragraphs
  const paragraphs = html.split(/\n\n+/);
  html = paragraphs.map(p => {
    p = p.trim();
    if (!p) return '';
    if (p.startsWith('<h') || p.startsWith('<ul>') || p.startsWith('<pre>') || p.startsWith('<blockquote>') || p.startsWith('<hr>')) {
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
    if (msg.intent === 'general_knowledge' || msg.intent === 'unrelated') {
      badgeHtml = `<span class="intent-badge out-of-scope">Pertanyaan Umum / Luar Modul</span>`;
    } else if (msg.intent === 'greeting') {
      badgeHtml = `<span class="intent-badge greeting">Sapaan</span>`;
    } else {
      badgeHtml = `<span class="intent-badge module">${activeSession ? activeSession.category : 'Modul'}</span>`;
    }
  }

  const avatar = msg.sender === 'ai' 
    ? `<div class="message-avatar ai" title="EduBot">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
       </div>`
    : `<div class="message-avatar user" title="Anda">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
       </div>`;

  // Render suggestions chips if provided
  let suggestionsHtml = '';
  if (msg.suggestions && msg.suggestions.length > 0) {
    suggestionsHtml = `
      <div class="quick-suggestions">
        ${msg.suggestions.map(s => `
          <button class="suggestion-chip" data-query="${s.replace(/"/g, '&quot;')}">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
            ${s}
          </button>
        `).join('')}
      </div>
    `;
  }

  const currentUserName = StorageManager.getUserName();
  const userDisplayName = currentUserName ? `Anda (${currentUserName})` : 'Anda';

  wrapper.innerHTML = `
    ${avatar}
    <div class="message-content-box">
      <div class="message-meta">
        <strong>${msg.sender === 'ai' ? 'EduBot AI' : userDisplayName}</strong>
        <span>${formatTimestamp(msg.timestamp)}</span>
        ${badgeHtml}
      </div>
      <div class="message-bubble ${msg.sender}">
        ${renderMarkdown(msg.text)}
      </div>
      ${suggestionsHtml}
    </div>
  `;

  // Attach event listeners to suggestion chips inside this message
  wrapper.querySelectorAll('.suggestion-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      const query = btn.dataset.query;
      handleSendMessage(query);
    });
  });

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
      chatInputEl.placeholder = `Tanyakan materi ini, ${name}... (Tekan Enter untuk kirim)`;
    } else {
      badge.style.display = 'none';
      chatInputEl.placeholder = `Tanyakan konsep, rumus, atau bagian dari modul ini... (Tekan Enter untuk kirim)`;
    }
  }
}

// Send Message Handler
function handleSendMessage(overrideText = null) {
  const text = overrideText !== null ? overrideText : chatInputEl.value.trim();
  if (!text || !activeSession) return;

  // Check if user is introducing their name
  const detectedName = StudyEngine.detectNameIntro(text);
  if (detectedName) {
    StorageManager.setUserName(detectedName);
    updateUserBadge(detectedName);
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

  // Generate AI Response with simulated natural thinking time
  setTimeout(() => {
    typingIndicatorEl.style.display = 'none';

    const currentUserName = StorageManager.getUserName();
    const aiResult = StudyEngine.generateResponse(
      text,
      activeSession.moduleContent,
      activeSession.title,
      activeSession.messages,
      currentUserName
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
      suggestions: aiResult.suggestions || []
    };

    StorageManager.addMessage(activeSession.id, aiMsg);
    appendMessageElement(aiMsg, true);
    scrollToBottom();

    // Refresh history metadata in sidebar
    renderHistory(searchInputEl.value);
    activeChatUpdatedEl.textContent = `Diperbarui ${formatTimestamp(Date.now())}`;
  }, 450);
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

btnSummarizeChat.addEventListener('click', () => {
  if (!activeSession) return;

  const summary = StudyEngine.generateSummary(
    activeSession.moduleContent,
    activeSession.title,
    activeSession.messages
  );

  currentSummaryData = summary;
  summaryModalTitleEl.textContent = `Rangkuman: ${activeSession.title}`;
  summaryContentEl.innerHTML = renderMarkdown(summary.markdown);
  openModal(modalSummary);
});

btnCopySummary.addEventListener('click', () => {
  if (!currentSummaryData) return;
  navigator.clipboard.writeText(currentSummaryData.markdown).then(() => {
    showToast('Rangkuman berhasil disalin ke clipboard!', 'success');
  }).catch(() => {
    showToast('Gagal menyalin rangkuman', 'error');
  });
});

btnDownloadSummary.addEventListener('click', () => {
  if (!currentSummaryData || !activeSession) return;
  const blob = new Blob([currentSummaryData.markdown], { type: 'text/markdown;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Rangkuman_${activeSession.title.replace(/[^a-zA-Z0-9]/g, '_')}.md`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('File rangkuman (.md) berhasil diunduh!', 'success');
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
