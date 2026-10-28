# EduBot AI - Asisten Belajar Cerdas Offline

Aplikasi web (*Single Page Application*) asisten belajar offline berbasis **HTML, CSS, dan JavaScript murni** tanpa framework rumit (tanpa React, tanpa bundler, tanpa dependency eksternal). Semua pemrosesan NLP, penyimpanan modul, dan riwayat obrolan berjalan 100% lokal di browser pengguna.

---

## ✨ Fitur Utama

1. **Unggah Modul / Materi Mandiri & Multi-Session**:
   - Tombol **"Unggah Modul Baru"** untuk memasukkan materi teks (.txt, .md) atau mengetik/menempel materi langsung.
   - Tersedia tombol cepat template materi contoh (Kimia, Sejarah, Pemrograman, dll.).
   - Setiap kali modul baru diunggah, sistem otomatis membuat **sesi chat baru** yang didedikasikan khusus untuk modul tersebut.

2. **AI Chatbot Belajar Dinamis & Luwes (Tidak Terikat Kaku pada Modul)**:
   - **Fleksibilitas Tinggi**: Modul berfungsi sebagai referensi kontekstual, tetapi AI tidak dibatasi oleh modul. AI bebas dan mampu menjawab pertanyaan apapun (sains, matematika, pemrograman, sejarah, bahasa, tips belajar, dll.) dengan akurat dan bahasa yang alami.
   - **Sintesis Bahasa Mengalir & Dinamis**: Tidak sekadar menyalin poin modul secara kaku, melainkan menyusun penjelasan seperti tutor pribadi yang ramah, komunikatif, dan interaktif sesuai jenis pertanyaan (definisi, alasan, cara kerja, perbandingan, atau rumus).
   - **Ensiklopedi Akademik Luas**: Dilengkapi basis pengetahuan offline komprehensif (Fisika, Biologi, Kimia, Matematika, Informatika, Sejarah, Produktivitas Belajar).
   - **Pengaturan AI & Model (Mode AI)**: Tombol di header untuk mengatur keterikatan modul (Sangat Luwes vs Fokus Modul) serta opsi integrasi Google Gemini API gratis jika ingin kemampuan generative LLM langsung di browser.
   - **Quick Suggestions**: Menampilkan rekomendasi pertanyaan interaktif yang dapat langsung diklik.

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