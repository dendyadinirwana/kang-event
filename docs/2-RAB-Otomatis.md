# Modul 2: RAB Otomatis (Rencana Anggaran Biaya)

Modul **RAB Otomatis** adalah *engine* kalkulasi utama dalam aplikasi ini. Segera setelah Anda menekan tombol **"Simulasikan Kegiatan"**, semua data input akan diolah menjadi susunan Rencana Anggaran Biaya yang siap diajukan, diaudit, atau dieksekusi berdasarkan referensi standar yang berlaku.

---

## ⚖️ Basis Standar Biaya Masukan (SBM)

Aplikasi ini tidak sekadar menebak harga pasar. Seluruh baseline harga (default price)—mulai dari honor narasumber, paket *halfday meeting* hotel, hingga harga satuan *coffee break*—merujuk langsung pada **Peraturan Menteri Keuangan (PMK) Nomor 32 Tahun 2025 tentang Standar Biaya Masukan (SBM) Tahun Anggaran 2026**. 

Fitur ini memastikan bahwa rancangan anggaran Anda sejak awal telah memenuhi kepatuhan regulasi pemerintah (compliance).

---

## 🧮 8 Kategori Kalkulasi Anggaran

Setiap item dijabarkan dalam 8 kategori besar:

1.  **Honorarium & Jasa Profesi:** Honor narasumber (per Jam Pelajaran/OJP), moderator, MC, panitia, notulen, hingga jasa tim dokumentasi (Fotografer/Videografer).
2.  **Konsumsi & Katering Menu:** Penggandaan jumlah tamu dengan harga satuan nasi box, prasmanan, atau *coffee break*. Jika VVIP hadir, sistem akan menghitung porsi menu ekstra / *Fine Dining*.
3.  **Venue, Audio, & Visual:** Paket *meeting room*, sewa proyektor (jumlah layar dihitung otomatis jika peserta sangat banyak), dan sewa *sound system/mic*.
4.  **Furniture & Perlengkapan:** Estimasi kebutuhan tambahan meja registrasi, sewa sofa eksekutif (VVIP), dan kursi panggung.
5.  **Dekorasi & Tata Ruang:** Perhitungan cetak *backdrop* (luasan diestimasi dari skala acara), mini garden, spanduk, hingga *X-Banner* selamat datang.
6.  **Desain Digital:** Jasa desain materi grafis, undangan digital, dan tayangan multimedia.
7.  **Seminar Kit:** Hitungan akumulasi dari *Modul 3 (Seminar Kit)* untuk tas, notes, lanyard yang telah dikonfigurasi per kelas.
8.  **Logistik & Lain-lain:** Alokasi untuk sewa kendaraan, jasa pengiriman barang, obat-obatan P3K, dan pengadaan internet cadangan.

---

## 💵 Fitur "Override Harga" (Penyesuaian Fleksibel)

SBM berfungsi sebagai harga pagu maksimal atau referensi dasar. Kenyataan di lapangan mungkin membutuhkan negosiasi harga vendor yang lebih murah atau ada alat yang tersedia secara gratis.

Melalui bagian **"Override Harga & Pengaturan Lanjut"**, Anda dapat dengan bebas mengubah Harga Satuan (*Unit Price*) untuk item apa pun.
*   **Ubah ke `0`:** Jika fasilitas tersebut didapatkan secara gratis (misal: Ruangan milik kantor sendiri, atau Proyektor meminjam divisi IT). RAB total akan otomatis berkurang.
*   **Naik/Turun:** Jika harga penawaran vendor berbeda dari SBM.

---

## 🖨 Export dan Distribusi RAB

Setelah angka RAB final dan dirasa pas, sistem menyediakan tools untuk memudahkan ekstraksi data:
1.  **Salin ke Clipboard:** Salin seluruh rincian RAB dalam format teks yang rapi. Anda bisa langsung melakukan *Paste/Tempel* (CTRL+V) ke Microsoft Excel, Google Sheets, atau Badan Email. Semua baris dan kolom akan terpetakan dengan sempurna.
2.  **Simpan sebagai PDF:** Mengenerate hasil RAB siap cetak (Print-ready) lengkap dengan kop dan penataan margin profesional. Sistem secara otomatis menyembunyikan tombol UI (*no-print*) agar dokumen terlihat rapi saat dicetak.

---

*Untuk detail pengaturan harga merchandise/tas/notes, silakan berlanjut ke [Modul 3: Seminar Kit Kustom](./3-Seminar-Kit.md).*
