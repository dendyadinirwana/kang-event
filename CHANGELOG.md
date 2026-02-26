# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [0.5.0] - 2026-02-27

### Added
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
