# Event Generator PP DT

Selamat datang di Dokumentasi Resmi **Event Generator Pusat Pengembangan Desa Tertinggal (PP DT)**.

Sistem web berbasis React ini diciptakan khusus untuk membantu panitia acara PP DT dalam merencanakan, memvisualisasikan anggaran, dan mengeksekusi kegiatan dengan presisi tinggi. Keseluruhan modul dalam sistem ini saling terhubung; perubahan pada parameter acara awal Anda akan langsung mempengaruhi perhitungan biaya, daftar persiapan tugas, hingga panduan koordinasi teknis.

---

## 🚀 Mengapa Menggunakan Sistem Ini?

Dalam penyelenggaraan event pemerintahan atau kedinasan, sering kali terdapat banyak regulasi biaya, protokol kepanitiaan, dan kebutuhan teknis yang rumit. Event Generator menyelesaikan masalah tersebut dengan:
1.  **Standar PMK SBM Terintegrasi:** Menghilangkan salah hitung biaya karena semua *default price* merujuk pada Peraturan Menteri Keuangan.
2.  **Otomatisasi Lintas Divisi:** Satu input data akan didistribusikan langsung menjadi Checklist Tugas dan Panduan per-Divisi.
3.  **Dinamis dan Resilens:** Angka-angka akan menyesuaikan lokasi acara (Jakarta vs luar daerah), jenis undangan (VVIP vs Reguler), hingga skala aula.

---

## 📦 Arsitektur Modul

Platform ini terbagi atas lima pilar utama. Silakan telusuri masing-masing halaman wiki berikut untuk penjelasan detail:

1.  [**1. Simulasi Kegiatan**](./1-Simulasi-Kegiatan.md)
    *   Pengaturan awal acara: Jumlah Peserta, Tamu, Tim Pendukung, Konfigurasi Ruangan, dan Lokasi Kegiatan.
2.  [**2. RAB Otomatis (Rencana Anggaran Biaya)**](./2-RAB-Otomatis.md)
    *   Detail kalkulasi 8 kategori anggaran: Honorarium, Konsumsi, Venue, Furniture, Dekorasi, Produksi Materi, Logistik, dan Desain Digital. Termasuk fitur Override Harga.
3.  [**3. Seminar Kit Kustom**](./3-Seminar-Kit.md)
    *   Pengaturan tas, buku, sertifikat, lanyard yang dibedakan per kelas undangan (Reguler, VIP, VVIP).
4.  [**4. Checklist Persiapan H-14 hingga Pasca Acara**](./4-Checklist-Persiapan.md)
    *   Tugas persiapan dengan sistem timeline beserta penetapan PIC (*Person In Charge*).
5.  [**5. Panduan Kegiatan Dinamis**](./5-Panduan-Kegiatan.md)
    *   Petunjuk spesifik divisi Biro Umum, Humas, Teknis, dan Konsumsi yang di-*generate* berdasarkan input form awal Anda.

---

## 🛠 Tech Stack Sekilas
- **Frontend:** React 18, Vite
- **Styling:** CSS3 Vanilla (Responsive & Dark Mode Support)
- **Deployment:** Vercel (Auto-deploy dari GitHub `main` branch)
- **Export Motor:** Native Browser Print (PDF Generation)

> *Gunakan menu navigasi di sebelah kanan untuk menjelajahi seluruh fitur platform secara detail.*
