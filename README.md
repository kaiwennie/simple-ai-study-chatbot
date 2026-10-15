# EduBot AI - Asisten Belajar Cerdas Offline

Aplikasi web (*Single Page Application*) asisten belajar offline berbasis **HTML, CSS, dan JavaScript murni** tanpa framework rumit (tanpa React, tanpa bundler, tanpa dependency eksternal). Semua pemrosesan NLP, penyimpanan modul, dan riwayat obrolan berjalan 100% lokal di browser pengguna.

---

## ✨ Fitur Utama

1. **Unggah Modul / Materi Mandiri & Multi-Session**:
   - Tombol **"Unggah Modul Baru"** untuk memasukkan materi teks (.txt, .md) atau mengetik/menempel materi langsung.
   - Tersedia tombol cepat template materi contoh (Kimia, Sejarah, Pemrograman, dll.).
   - Setiap kali modul baru diunggah, sistem otomatis membuat **sesi chat baru** yang didedikasikan khusus untuk modul tersebut.

2. **AI Chatbot Belajar Cerdas & Diferensiasi Pertanyaan**:
   - **Pertanyaan Materi Modul**: Menjawab dengan mengambil konsep, rumus, dan contoh dari modul aktif disertai kutipan sumber bagian materi.
   - **Pertanyaan Umum / Di Luar Modul**: Membedakan pertanyaan umum (contoh: *"Siapa presiden Indonesia sekarang"*) dan memberi tanda jelas bahwa topik tersebut berada di luar cakupan materi modul aktif.
   - **Sapaan & Percakapan Ramah**: Merespons sapaan (contoh: *"Halo"*, *"Selamat pagi"*) secara hangat dan mengarahkan kembali ke topik belajar.
   - **Quick Suggestions**: Menampilkan chip rekomendasi pertanyaan yang dapat langsung diklik.

3. **Manajemen Riwayat Chat (Sidebar Kiri)**:
   - Menampilkan daftar semua sesi modul sebelumnya dengan waktu dan kategori.
   - Fitur **Pencarian / Filter Riwayat** secara instan.
   - Tombol **Rename Sesi** untuk mengubah nama chat.
   - Tombol **Delete Sesi** dilengkapi **Modal Konfirmasi Hapus** untuk mencegah penghapusan yang tidak disengaja.

4. **Rangkum Chat & Modul**:
   - Tombol **"Rangkum Chat & Modul"** di bagian atas ruang percakapan.
   - Menghasilkan rangkuman komprehensif: Ikhtisar Modul, Poin-Poin Pokok Bahasan, Jejak Pertanyaan yang telah dibahas, dan Tips Belajar.
   - Menyediakan tombol **Salin ke Clipboard** dan **Unduh File Markdown (.md)**.

5. **Desain Modern & Glassmorphism**:
   - Tema *Dark Mode* elegan dengan tipografi modern (*Plus Jakarta Sans* & *JetBrains Mono*).
   - Animasi transisi halus, indikator mengetik cerdas (*typing bounce*), dan sistem notifikasi *toast*.

---

## 🚀 Cara Menjalankan

### Cara 1: Buka Langsung di Browser
Cukup klik dua kali (double-click) file `index.html` di komputer Anda, atau buka file tersebut menggunakan Google Chrome, Microsoft Edge, atau Firefox.

### Cara 2: Menjalankan dengan Local Server (Opsional)
Jalankan perintah berikut di terminal:
```bash
node server.js
```
Lalu buka browser di alamat:
[http://localhost:3000](http://localhost:3000)

---

## 📁 Struktur File Proyek

```
simple-ai-study-chatbot/
│
├── index.html                 # Antarmuka utama aplikasi web
├── server.js                  # Server lokal ringan (Node.js murni tanpa npm install)
├── README.md                  # Dokumentasi proyek
│
├── css/
│   └── style.css              # Desain Glassmorphism, dark mode, animasi & responsivitas
│
├── js/
│   ├── engine.js              # Engine NLP offline (tokenisasi, BM25, deteksi intent, summarizer)
│   ├── storage.js             # Pengelola sesi dan riwayat berbasis localStorage
│   └── app.js                 # Kontroler UI, interaksi modal, event handler
│
└── sample-modules/            # Berkas contoh materi siap diunggah
    ├── modul-matematika-aljabar.txt
    └── modul-ekonomi-inflasi.txt
```