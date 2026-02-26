# Simulasi Kegiatan & Perlengkapan Acara (Event Generator PPDT)

Aplikasi web berbasis React untuk membantu panitia acara merencanakan kegiatan secara terstruktur — mulai dari estimasi Rencana Anggaran Biaya (RAB), konfigurasi seminar kit per kelas tamu, hingga checklist persiapan otomatis per timeline.

> Referensi harga default mengacu pada **PMK Nomor 32 Tahun 2025 tentang Standar Biaya Masukan (SBM) Tahun Anggaran 2026**.

---

## ✨ Fitur Utama

### 🎯 Simulasi Kegiatan
- Pilih jenis acara: Seminar, Workshop, FGD, Webinar, Konferensi, Gala Dinner, dll
- Atur kelas tamu: Reguler, VIP, VVIP, atau Campuran
- Input jumlah peserta, narasumber, moderator, MC, dan panitia
- Pilih tim pendukung: Fotografer, Videografer, Live Streaming, Notulen, dll
- Konfigurasi dekorasi dan formasi duduk

### 📊 RAB Otomatis
- Kalkulasi RAB lengkap: Honorarium, Konsumsi, Venue & AV, Furniture, Dekorasi, Materi, Logistik, Desain Digital
- Estimasi luas ruangan minimal & ideal
- Estimasi kebutuhan proyektor dan mic
- Harga multi-kota (Jakarta, Bandung, Surabaya, Yogyakarta, Medan, Makassar, dan Daerah)
- **Override harga** — sesuaikan setiap item dengan harga aktual di lapangan
- Copy RAB ke clipboard atau Save as PDF

### 🎒 Seminar Kit Fleksibel
- Konfigurasi seminar kit per kelas tamu (Reguler ≠ VIP ≠ VVIP)
- Pilih dari katalog (tas, lanyard, flashdisk, modul, sertifikat, souvenir) atau tambah item custom
- Estimasi biaya langsung di UI sebelum simulasi dijalankan

### ✅ Checklist Persiapan Otomatis
- Halaman terpisah dengan checklist per timeline: **H-14, H-7, H-1, Hari H, Pasca Acara**
- Detail per item dengan keterangan vendor/PIC
- Progress bar interaktif
- Input PIC per item checklist
- Tombol cetak / Save as PDF

### 📖 Panduan Kegiatan
- Panduan lengkap untuk venue, AV, konsumsi, transportasi, dokumentasi, dan lainnya
- Tautan langsung dari checklist ke panduan terkait

### 🌗 Tema & UX
- Light mode (default) / Dark mode toggle
- Semua section collapsible (Tim Pendukung, Dekorasi, Seminar Kit, Override Harga)
- Inline error toast (bukan browser alert)

---

## 🚀 Tech Stack

| Layer | Teknologi |
|-------|-----------|
| Framework | [React 18](https://react.dev) + [Vite](https://vitejs.dev) |
| Styling | Vanilla CSS dengan CSS Variables |
| State | React `useState` (client-only, no backend) |
| Deployment | [Vercel](https://vercel.com) |

---

## 🛠️ Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
```

---

## 📋 Changelog

Lihat [CHANGELOG.md](./CHANGELOG.md) untuk riwayat perubahan lengkap.

---

## 📄 Referensi

- [PMK Nomor 32 Tahun 2025 — SBM TA 2026](https://jdih.kemenkeu.go.id)
- [Keep a Changelog](https://keepachangelog.com)
