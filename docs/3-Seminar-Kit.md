# Modul 3: Seminar Kit Kustom

Fitur **Seminar Kit** dirancang dengan pendekatan modular dan berbasis "Kelas Undangan" (Tiers). Panitia sering kali harus membedakan isi merchandise antara peserta biasa dengan undangan khusus (VVIP/Menteri). Modul ini mengotomatiskan agregasi biaya tersebut secara *real-time*.

---

## 🎒 Konsep Multi-Tier

Daripada membagi anggaran seminar kit menjadi satu harga pukul rata, sistem menyediakan tiga penampungan terpisah:

1.  **Seminar Kit: REGULER** (Dialokasikan ke jumlah `Total Peserta` + `Panitia`)
2.  **Seminar Kit: VIP** (Dialokasikan ke jumlah `Tamu VIP` + `Narasumber` + `Moderator` + `MC`)
3.  **Seminar Kit: VVIP** (Dialokasikan ke jumlah `Tamu VVIP` jika opsi VVIP dicentang)

Jumlah masing-masing kit (Qty) akan dikalikan otomatis dengan estimasi *headcount* pada saat simulasi RAB dijalankan.

---

## 🛒 Katalog Item Modular

Di setiap kelas/tier, aplikasi menyediakan komponen pre-defined (Katalog Item). Anda cukup mencentang (Checkbox) item apa saja yang masuk ke dalam kantong merchandise kelas tersebut.

*   **Pilihan Katalog:** Tas (Tote/Goodie Bag), Tas Eksklusif (Backpack/Sling VIP), Blocknote & Pulpen, Lanyard & ID Card (Standar vs Premium), Kaos/Polo Shirt, Flask/Tumbler, Flashdisk (4GB/16GB), Sertifikat (Cetak/E-Sertifikat), Modul Cetak, hingga Plakat/Cenderamata Khusus VVIP.

**Contoh Skenario Praktis:**
*   *Reguler:* Centang hanya Tote Bag, Blocknote, Pulpen, E-Sertifikat, Lanyard Standar. (Estimasi Rp 120.000 / pax)
*   *VVIP:* Centang Tas Eksklusif, Tumbler Premium, Plakat, Pulpen Parker. (Estimasi Rp 850.000 / pax)

Setiap Anda mencentang, **Real-time Price Estimator** di bagian atas card kelas tersebut akan terus menghitung total estimasi per-pax, sehingga Anda tahu jika *budget* membengkak sebelum menekan tombol Simulasikan.

---

## ➕ Penambahan Custom Item

Katalog tidak mengakomodir semua kreativitas panitia. Jika Anda ingin memberikan item tambahan seperti "Jaket Bomber", "Buku Saku SBM", atau "Payung", disediakan tombol **"Tambah Item Custom"**.

Anda bisa memberikan Nama Item bebas, dan mendefinisikan Harga Satuan dengan mata uang Rupiah. Item ini akan melekat pada *tier* tersebut.

---

## 💡 Status Toggle (OnOff)

Jika acara berupa diskusi internal singkat (seperti *Rapat Koordinasi*) yang sama sekali tidak membutuhkan Seminar Kit, Anda tidak perlu un-check satu-satu. Cukup gunakan saklar toggle utama (Switch di sebelah judul Seminar Kit) untuk mematikan **seluruh perhitungan anggaran Seminar Kit** ke dalam RAB.

---

*Tahap selanjutnya adalah proses eksekusi acara. Ketahui daftar persiapan Anda di [Modul 4: Checklist Persiapan](./4-Checklist-Persiapan.md).*
