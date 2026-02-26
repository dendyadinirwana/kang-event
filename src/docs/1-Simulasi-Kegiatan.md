# Modul 1: Simulasi Kegiatan

Modul **Simulasi Kegiatan** merupakan fitur inti dan titik awal dari sistem Event Generator PP DT. Melalui form sederhana ini, seluruh variabel, biaya, penentuan *flow* kepanitiaan, hingga daftar kebutuhan peralatan akan dihitung secara dinamis.

---

## 📅 Pengaturan Dasar Acara

### 1. Jenis Acara
Menentukan kategori dasar kegiatan, karena setiap format acara (Seminar, Rapat, FGD, dsb.) memiliki pendekatan manajemen anggaran yang berbeda.

*   **Pilihan:** Seminar, Workshop, Focus Group Discussion (FGD), Pelatihan/Bimtek, Rapat Koordinasi, Sosialisasi, Bimbingan Teknis, Konsumsi Rapat (Snack Only), dan Malam Ramah Tamah (Gala Dinner).
*   **Dampak Dinamis:** Perubahan jenis acara dapat me-*trigger* honorarium tertentu, estimasi luasan kursi (contoh: Workshop butuh luasan meja yang lebih besar ketimbang Seminar bergaya Teater), dan porsi konsumsi standar SBM.

### 2. Lokasi Kegiatan
Memilih tempat pelaksanaan.
*   **Pilihan:** Kantor Pusat (Jakarta), Luar Kota (Bandung, Surabaya, Yogyakarta, dll.), atau Kabupaten/Kota Daerah Tertinggal.
*   **Dampak Dinamis:** Harga dasar (SBM) untuk Paket Meeting Halfday/Fullday dan Konsumsi harian akan disesuaikan secara otomatis berdasarkan regional harga yang berlaku.

---

## 👥 Pengaturan Peserta & Tamu

Sistem ini menghitung kebutuhan logistik, cetakan, dan konsumsi hingga angka satuan (*headcount*).

### 1. Kategori Tamu Utama
Berdasarkan protokol kedinasan, Anda wajib mendefinisikan siapa saja tamu yang akan hadir.
*   **Reguler (Peserta Umum):** Alokasi konsumsi dan seminar kit basic.
*   **VIP/Pejabat Eselon:** Trigger kebutuhan ruangan transit VIP terpisah dan kursi VIP di barisan muka (*Front Row*).
*   **VVIP (Menteri/Setingkat):** Men-trigger **Protokol Khusus VVIP**, seperti penyediaan Sofa Eksekutif, menu *Fine Dining*, dan koordinasi keamanan ketat di halaman Panduan Kegiatan.

### 2. Komposisi Personil
Masukkan jumlah personel inti:
*   **Total Peserta:** Jumlah *Audience* dasar. Angka ini vital untuk menghitung luasan minimal (*m²*) ruangan.
*   **Narasumber & Moderator:** Secara otomatis menghitung paket honor per-OJP (Orang Jam Pelajaran) berdasar SBM. Menambah narasumber juga menambah hitungan unit *mic wireless*.
*   **MC (Master of Ceremony) & Panitia Penyelenggara.**

---

## 🛠 Konfigurasi Tim Pendukung

Anda dapat melakukan *checklist* (centang) pada tim pendukung apa saja yang akan dikerahkan.

1.  **Sewa Fotografer & Videografer:** Membuka item anggaran honor dan sewa alat dokumentasi. Menambah panduan spesifik bagi tim Humas untuk *brief* angle liputan.
2.  **Jasa Live Streaming / Zoom:** Menambah kalkulasi jaringan internet *dedicated* dan peralatan *switch* ke RAB.
3.  **Tim Notulen & Pelaporan:** Standar RAB untuk penyusunan laporan kegiatan.
4.  **Asisten Sorot (Asrot) / Operator:** Menambahkan tugas dan timeline persiapan gladi bersih beserta ketersediaan poin jaringan ke Panduan Kegiatan Teknis.

---

## 📐 Layout & Furniture

Memilih formasi meja akan menentukan berapa luas ruang yang ideal agar tidak berdesakan. Sistem Event Generator secara cerdas menghitung rasio *seat-to-space*.

*   **Theater (Tanpa Meja):** ~1.5m² / orang. Efektif untuk jumlah peserta banyak.
*   **Classroom (Pake Meja):** ~2.5m² / orang.
*   **U-Shape:** ~3.0m² / orang. Ruangan yang dibutuhkan sangat besar.
*   **Round Table (Banquet):** ~2.8m² / orang. Premium, biasa digunakan untuk Gala Dinner atau VIP Meeting.
*   **Hollow Square:** ~3.0m² / orang. Cocok untuk FGD atau sesi pleno.

---

*Lanjutkan membaca ke [Modul 2: RAB Otomatis](./2-RAB-Otomatis.md) untuk melihat bagaimana input ini diterjemahkan menjadi angka anggaran.*
