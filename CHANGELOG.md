# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [0.6.3] - 2026-02-27

### Changed
- **Page Layout Architecture**: Menyeragamkan kerangka tata letak halaman `Home`, `Feedback`, dan `About` menggunakan komponen `Layout.jsx` tunggal.
- **Top Navigation UX**: Menambahkan visualisasi judul dan subjudul statis secara dinamis untuk setiap halaman di dalam komponen Layout.
- **Header Navigation Fix**: Memperbaiki issue styling CSS `.wrapper` di mana judul halaman tertutup oleh navigasi sticky di atas layar.

---

## [0.6.2] - 2026-02-27

### Added
- **Mobile Drawer UX:** Menambahkan tombol tutup (X) eksplisit yang lebih jelas di dalam mobile menu drawer.
- **Mobile Drawer Overlay:** Menambahkan area *backdrop/overlay* gelap semi-transparan di belakang menu. Kini *hamburger menu* akan otomatis menutup saat pengguna mengeklik area di luar kotak menu.

---

## [0.6.1] - 2026-02-27

### Fixed
- **Critical:** Tombol "Simulasikan Kegiatan" tidak menghasilkan output RAB, Checklist, maupun Panduan karena fungsi `buildRAB` dan `buildChecklist` tidak diimpor ke `Home.jsx`. Diperbaiki dengan menambahkan import yang hilang dari `utils/rabCalculator`.
- Sisa CSS lama (`flex-direction: column` pada `.app-header`) yang menyebabkan hamburger menu mobile bergeser ke tengah halaman dan tidak sejajar dengan logo.

---

## [0.6.0] - 2026-02-27

### Added
- **Multi-page Architecture**: Implementasi `react-router-dom` untuk navigasi antar halaman (Home, Feedback, About).
- **Global Sticky Header**: Header mengambang bergaya pill yang bertransisi mulus (cubic-bezier) menjadi sticky bar saat scroll.
- **Halaman Feedback (Beri Masukan)**: Form interaktif yang terintegrasi dengan API **Web3Forms** untuk pengiriman email otomatis tanpa backend.
- **Halaman About (Tentang Aplikasi)**: Menampilkan statistik, fitur utama, dan informasi developer.
- Opsi perangkat **Handy Talkie (HT)** pada section Tim Pendukung.
- **Formasi Duduk Campuran**: 5 opsi formasi duduk khusus (Round Table Mix, Sofa Lounge + Kursi, Banquet Mix, Cabaret Mix, U-Shape + Pax) otomatis muncul saat Kelas Tamu "Campuran VVIP/VIP/Reguler" dipilih.

### Changed
- **Mobile UX**: Theme toggle dipindahkan dari header ke dalam overlay hamburger menu navigation drawer pada layar kecil agar tidak sesak.
- **Mobile Navbar**: Drawer navigasi diubah menjadi fixed overlay yang muncul di atas konten halaman (tidak mendorong konten ke bawah).
- Transisi Theme Toggle diubah menggunakan style "Pill" modern dengan sliding emoji indicator (☀️/🌙).
- Tipografi judul halaman About dan Feedback disamakan secara konsisten dengan logo header home page.

### Removed
- Tautan dan route ke halaman Documentation dihapus sesuai kebutuhan simplifikasi.

---

## [0.5.0] - 2026-02-27
- **Checklist Persiapan** sebagai halaman tab tersendiri (terpisah dari halaman Simulasi Kegiatan)
- Halaman Checklist dilengkapi: progress bar, grouping per timeline (H-14, H-7, H-1, Hari H, Pasca Acara), per-item detail & vendor, PIC input, dan tombol "Save as PDF"
- CTA banner di bawah RAB untuk navigasi langsung ke halaman Checklist
- **Seminar Kit** kini memiliki konfigurasi per kelas tamu (Reguler / VIP / VVIP) dengan item berbeda
- Dukungan **custom item** di Seminar Kit (nama bebas + estimasi harga per pax)
- Section **Tim Pendukung** dan **Dekorasi** kini collapsible (show/hide) dengan badge jumlah item aktif
- Notifikasi green dot badge pada tab Checklist di navigation bar setelah simulasi dijalankan

### Changed
- Seminar Kit terbuka secara default (bukan collapsed)
- Tema default aplikasi diubah ke **Light Mode** (sebelumnya mengikuti system preference)
- Label section Honorarium dan Konsumsi di Override Harga dipersingkat (tanpa " — SBM TA 2026 (PMK 32/2025)")
- Section Logistik di RAB diubah nama menjadi "Logistik & Pasca-Acara" dengan keterangan kontekstual yang lebih jelas
- RAB kini menampilkan baris Seminar Kit terpisah per kelas (Reguler/VIP/VVIP) termasuk item custom

### Fixed
- RABResult.jsx dibersihkan dari kode duplikat yang menyebabkan error redeclaration

---

## [0.4.0] - 2026-02-26

### Added
- Komponen baru: `SeminarKit.jsx` — section khusus seminar kit setelah Dekorasi
- 5 fitur baru di RAB: Seminar Kit, Virtual Background Zoom, YouTube Thumbnail, Video Bumper, Konsumsi Panitia H-1/H-2
- Override harga diperluas dengan 8 item baru (ATK, Modul, Sertifikat, Nametag, Souvenir, Air Mineral, Transportasi, Dokumentasi)
- Inline error toast menggantikan `alert()` native browser (auto-dismiss 4 detik)

### Fixed
- Bug override harga `0` tidak diterapkan ke RAB (null vs `0` check)
- Section Transportasi diberi context note yang jelas

---

## [0.3.0] - 2026-02-26

### Added
- Panel **Override Harga** (Sesuaikan Standar Biaya) — user dapat mengubah harga default per item, tersimpan selama sesi
- Dukungan multi-kota untuk referensi harga (Jakarta, Bandung, Surabaya, Yogyakarta, Medan, Makassar, Daerah)
- Dark mode & Light mode toggle (ThemeToggle fixed di pojok layar)
- Checklist Persiapan Otomatis di bawah RAB (H-14, H-7, H-1, Hari H)
- Tautan "Lihat Panduan" dari checklist ke section Panduan Kegiatan terkait

### Changed
- Menu "RAB Generator" diubah nama menjadi "Simulasi Kegiatan"
- Harga default diperbarui mengacu PMK Nomor 32 Tahun 2025 tentang SBM TA 2026

---

## [0.2.0] - 2026-02-24

### Added
- Panduan Kegiatan (tab terpisah) dengan accordion section: Venue, AV, Konsumsi, Transportasi, dll
- Fitur Typography standardisasi di seluruh UI
- Komponen Footer

### Changed
- Layout responsif diperbaiki untuk mobile

---

## [0.1.0] - 2026-02-23

### Added
- Initial release — RAB Generator Kegiatan
- Input: jenis acara, jumlah peserta, kelas tamu (Reguler/VIP/VVIP/Campuran), tim, durasi, lokasi
- Kalkulasi otomatis: honorarium, konsumsi, venue & AV, furniture, dekorasi, materi, logistik
- Formasi duduk otomatis (theater, classroom, roundtable, u-shape, banquet)
- Estimasi luas ruangan minimal dan ideal
- Copy RAB ke clipboard & Save as PDF via browser print
