/**
 * DATA PANDUAN KEGIATAN
 * Berisi panduan langkah-demi-langkah untuk persiapan acara/kegiatan.
 */

export const GUIDE_SECTIONS = [
    {
        id: 'biro-umum',
        icon: '📋',
        title: 'Koordinasi dengan Biro Umum',
        subtitle: 'Ruangan, peralatan, keamanan, dan fasilitas pendukung',
        color: '#3b82f6',
        steps: [
            {
                title: '1. Booking Ruangan / Venue',
                items: [
                    'Ajukan memo permintaan penggunaan ruangan ke Biro Umum minimal **H-30**',
                    'Lampirkan detail: tanggal, waktu, estimasi peserta, dan layout yang diinginkan',
                    'Sebutkan kebutuhan khusus: akses disable, ruang transit VIP, ruang istirahat narasumber',
                    'Konfirmasi ketersediaan ruangan & tandatangan persetujuan',
                    'Lakukan survei lokasi (site visit) untuk memastikan kesesuaian ruangan',
                ],
            },
            {
                title: '2. Peminjaman Peralatan AV & Teknis',
                items: [
                    'Isi formulir peminjaman peralatan ke Biro Umum',
                    'Spesifikasikan: jumlah proyektor, screen, mic (wireless/clip-on/podium), sound system',
                    'Tanyakan ketersediaan laptop presentasi, pointer, dan kabel HDMI cadangan',
                    'Jika acara hybrid/webinar: request kamera, streaming kit, dan Video Switcher',
                    'Pastikan ada teknisi standby dari Biro Umum di hari H',
                ],
            },
            {
                title: '3. Permintaan Furniture & Layout',
                items: [
                    'Tentukan formasi duduk: Theater, Classroom, U-Shape, Roundtable, atau Banquet',
                    'Hitung kebutuhan: kursi peserta, meja, meja narasumber, podium, meja registrasi',
                    'Untuk tamu VIP/VVIP: request kursi khusus (sofa/executive chair)',
                    'Koordinasikan layout ruangan dengan denah yang sudah disiapkan',
                    'Pastikan ada meja tambahan untuk: konsumsi, registrasi, merchandise/material',
                ],
            },
            {
                title: '4. Keamanan & Akses',
                items: [
                    'Koordinasi jumlah petugas keamanan/satpam yang dibutuhkan',
                    'Atur jalur akses masuk: peserta umum, VIP/VVIP, loading dock vendor',
                    'Siapkan area parkir khusus untuk tamu VIP/VVIP',
                    'Buat name tag / ID card untuk panitia, vendor, dan media',
                    'Pastikan jalur evakuasi darurat sudah briefed ke seluruh panitia',
                    'Koordinasi dengan keamanan gedung untuk akses di luar jam kerja (jika perlu)',
                ],
            },
            {
                title: '5. Jaringan IT & Infrastruktur',
                items: [
                    'Request bandwidth internet khusus jika ada live streaming',
                    'Pastikan WiFi tersedia dan test kecepatan minimal H-3',
                    'Siapkan kabel LAN cadangan untuk stabilitas koneksi',
                    'Koordinasi kebutuhan stop kontak / power extension untuk peralatan',
                    'Pastikan AC / pendingin ruangan berfungsi baik',
                ],
            },
        ],
        tips: [
            'Selalu ajukan permintaan secara tertulis (memo/email resmi) untuk dokumentasi',
            'Foto kondisi ruangan saat survei sebagai referensi layout',
            'Minta nomor kontak teknisi Biro Umum yang bisa dihubungi langsung di hari H',
            'Siapkan rencana cadangan (Plan B) jika ruangan utama tidak tersedia',
        ],
        timeline: [
            { time: 'H-30', task: 'Ajukan memo permintaan ruangan & fasilitas' },
            { time: 'H-21', task: 'Konfirmasi persetujuan & lakukan site visit' },
            { time: 'H-14', task: 'Kirim detail kebutuhan peralatan AV & furniture' },
            { time: 'H-7', task: 'Konfirmasi ulang semua permintaan & cek ketersediaan' },
            { time: 'H-3', task: 'Test peralatan AV, internet, dan AC' },
            { time: 'H-1', task: 'Setup ruangan & gladi resik dengan peralatan lengkap' },
        ],
    },

    {
        id: 'biro-humas',
        icon: '📢',
        title: 'Koordinasi dengan Biro Humas',
        subtitle: 'Publikasi, liputan, media, dan protokol',
        color: '#8b5cf6',
        steps: [
            {
                title: '1. Pemberitaan & Liputan Internal',
                items: [
                    'Kirim brief acara ke Biro Humas minimal **H-14** untuk liputan internal',
                    'Sertakan: nama acara, tanggal, lokasi, VIP yang hadir, highlight acara',
                    'Tentukan output yang diinginkan: berita website, newsletter, social media post',
                    'Koordinasikan angle pemberitaan dan key message',
                ],
            },
            {
                title: '2. Dokumentasi Foto & Video',
                items: [
                    'Request fotografer & videografer resmi melalui Biro Humas',
                    'Buat shot list: momen penting yang wajib didokumentasikan',
                    'Tentukan deliverable: foto hi-res, video highlight, after-movie',
                    'Koordinasikan timeline editing & publikasi hasil dokumentasi',
                    'Siapkan release form jika peserta akan didokumentasikan',
                ],
            },
            {
                title: '3. Desain & Produksi Materi Publikasi',
                items: [
                    'Koordinasi desain: backdrop, spanduk, x-banner, roll-up banner',
                    'Siapkan logo, tagline, dan colour palette acara',
                    'Produksi undangan digital (e-invitation) & poster acara',
                    'Cetak materi fisik: undangan, sertifikat, name tag, flyer',
                    'Buat template social media untuk live posting',
                ],
            },
            {
                title: '4. Koordinasi Media Eksternal (jika acara publik)',
                items: [
                    'Buat & distribusikan press release minimal H-7',
                    'Siapkan media kit: fact sheet, profil narasumber, foto kegiatan sebelumnya',
                    'Atur media briefing / doorstop interview dengan narasumber utama',
                    'Siapkan area khusus media (press area) dengan akses listrik & WiFi',
                    'Tentukan juru bicara / spokesperson resmi',
                ],
            },
            {
                title: '5. Media Sosial & Live Streaming',
                items: [
                    'Tentukan hashtag resmi acara',
                    'Buat content plan: pre-event, during event, post-event',
                    'Koordinasi live streaming (YouTube/Instagram/Zoom)',
                    'Siapkan operator social media untuk live posting',
                    'Plan after-movie / video highlight untuk publikasi pasca acara',
                ],
            },
            {
                title: '6. Protokol & MC',
                items: [
                    'Koordinasi susunan acara / rundown dengan Humas',
                    'Tentukan MC: internal atau profesional',
                    'Buat script MC termasuk pembacaan susunan acara, sambutan, & transisi',
                    'Jika ada pejabat tinggi: koordinasi protokol ketat (penyambutan, kursi kehormatan, foto bersama)',
                    'Siapkan pronunciation guide untuk nama tamu penting',
                ],
            },
        ],
        tips: [
            'Gunakan branding yang konsisten di semua materi (warna, font, logo)',
            'Siapkan backup materi digital di USB/cloud jika ada perubahan mendadak',
            'Brief fotografer tentang angle & momen penting sebelum acara dimulai',
            'Pastikan ada 1 orang dedicated untuk mengelola social media selama acara',
        ],
        timeline: [
            { time: 'H-21', task: 'Kirim brief acara & request dukungan Humas' },
            { time: 'H-14', task: 'Finalisasi desain backdrop, spanduk, & materi cetak' },
            { time: 'H-10', task: 'Produksi & cetak semua materi publikasi' },
            { time: 'H-7', task: 'Distribusi press release (jika acara publik)' },
            { time: 'H-3', task: 'Briefing fotografer, videografer, & tim social media' },
            { time: 'H-1', task: 'Pasang backdrop, spanduk, banner di lokasi' },
        ],
    },

    {
        id: 'konsumsi',
        icon: '🍽️',
        title: 'Koordinasi Konsumsi & Catering',
        subtitle: 'Menu, coffee break, dan pengaturan makan',
        color: '#f59e0b',
        steps: [
            {
                title: '1. Perencanaan Menu',
                items: [
                    'Tentukan kelas konsumsi sesuai kelas tamu:',
                    '**VVIP**: Fine dining / set menu premium dengan welcome drink',
                    '**VIP**: Prasmanan premium dengan variasi menu lebih banyak',
                    '**Reguler**: Nasi box / prasmanan standar',
                    'Pertimbangkan preferensi dietary: halal, vegetarian, alergi',
                    'Sesuaikan dengan SBM (Standar Biaya Masukan) yang berlaku',
                ],
            },
            {
                title: '2. Coffee Break',
                items: [
                    'Standar minimum: kopi, teh, air mineral, 2 jenis snack',
                    'Acara half-day: 1 sesi coffee break',
                    'Acara full-day: 2 sesi coffee break (pagi & sore)',
                    'Untuk tamu VIP: tambahan jus, pastry premium',
                    'Siapkan area coffee break yang tidak mengganggu sesi utama',
                ],
            },
            {
                title: '3. Prosedur Pemesanan',
                items: [
                    'Survei minimal 3 vendor catering untuk perbandingan harga',
                    'Lakukan food tasting / sampling sebelum memilih vendor',
                    'Order catering minimal **H-10** untuk memastikan ketersediaan',
                    'Konfirmasi jumlah final peserta di **H-3**',
                    'Siapkan buffer 10% dari jumlah peserta (antisipasi walk-in)',
                    'Pastikan vendor siap setup minimal 1 jam sebelum jadwal makan',
                ],
            },
            {
                title: '4. Pengaturan Tata Letak',
                items: [
                    'Tentukan area konsumsi: di dalam ruangan atau di luar (foyer)',
                    'Siapkan meja prasmanan, skirting, dan peralatan pemanas (chafing dish)',
                    'Atur flow antrian agar tidak menumpuk',
                    'Sediakan tempat sampah yang cukup di area konsumsi',
                    'Pastikan akses air bersih & cuci tangan tersedia',
                ],
            },
        ],
        tips: [
            'Selalu sediakan air mineral di setiap meja peserta',
            'Tanyakan alergi/dietary restriction saat registrasi',
            'Jangan letakkan area makan terlalu jauh dari ruangan utama',
            'Untuk acara pagi, pastikan coffee break siap 30 menit sebelum peserta datang',
            'Dokumentasikan menu untuk lampiran LPJ',
        ],
        timeline: [
            { time: 'H-14', task: 'Survei vendor catering & minta penawaran harga' },
            { time: 'H-10', task: 'Pilih vendor & pesan konsumsi' },
            { time: 'H-7', task: 'Konfirmasi menu final & jadwal delivery' },
            { time: 'H-3', task: 'Konfirmasi jumlah peserta final ke catering' },
            { time: 'H-1', task: 'Cek kesiapan area konsumsi & peralatan' },
            { time: 'Hari H', task: 'Vendor setup 1 jam sebelum jadwal makan' },
        ],
    },

    {
        id: 'administrasi',
        icon: '📑',
        title: 'Persiapan Administrasi & Dokumen',
        subtitle: 'TOR, RAB, surat, sertifikat, dan LPJ',
        color: '#10b981',
        steps: [
            {
                title: '1. Term of Reference (TOR / KAK)',
                items: [
                    'Buat TOR yang mencakup: latar belakang, tujuan, sasaran, ruang lingkup',
                    'Cantumkan: waktu, tempat, peserta, narasumber, susunan acara',
                    'Lampirkan estimasi anggaran (RAB)',
                    'TOR harus disetujui pimpinan sebelum proses selanjutnya',
                    'Gunakan TOR sebagai dasar untuk semua koordinasi',
                ],
            },
            {
                title: '2. Rencana Anggaran Biaya (RAB)',
                items: [
                    'Gunakan fitur **Simulasi Kegiatan** di aplikasi ini untuk membuat RAB otomatis',
                    'Sesuaikan harga dengan SBM (PMK 32/2025) untuk instansi pemerintah',
                    'Breakdown biaya per komponen: venue, AV, konsumsi, honorarium, dll',
                    'RAB harus diverifikasi oleh bagian keuangan',
                    'Simpan RAB sebagai lampiran TOR',
                ],
            },
            {
                title: '3. Surat & Undangan',
                items: [
                    'Buat nota dinas permohonan penyelenggaraan acara',
                    'Siapkan surat undangan untuk peserta (minimal H-14)',
                    'Buat surat tugas untuk narasumber, moderator, & panitia',
                    'Siapkan surat permohonan dukungan ke Biro Umum & Biro Humas',
                    'Untuk narasumber eksternal: surat undangan resmi + konfirmasi kehadiran',
                ],
            },
            {
                title: '4. Dokumen Pelaksanaan',
                items: [
                    'Buat rundown acara detail (per menit)',
                    'Siapkan daftar hadir / absensi peserta',
                    'Cetak name tag untuk semua peserta, narasumber, & panitia',
                    'Siapkan ATK peserta: map, bolpen, notes, modul/materi',
                    'Cetak sertifikat peserta (jika ada)',
                    'Siapkan formulir evaluasi / feedback',
                ],
            },
            {
                title: '5. Laporan Pertanggungjawaban (LPJ)',
                items: [
                    'Kumpulkan semua kwitansi & bukti pembayaran vendor',
                    'Buat laporan narasi pelaksanaan acara',
                    'Lampirkan: daftar hadir, foto kegiatan, materi presentasi',
                    'Buat rekapitulasi realisasi anggaran vs RAB',
                    'LPJ harus diselesaikan maksimal **H+7** setelah acara',
                    'Arsipkan seluruh dokumen secara digital & fisik',
                ],
            },
        ],
        tips: [
            'Gunakan numbering yang konsisten di semua dokumen',
            'Simpan soft copy semua dokumen di Google Drive / OneDrive bersama',
            'Buat checklist dokumen dan centang saat sudah selesai',
            'Minta review atasan untuk TOR dan RAB sebelum mengirim undangan',
        ],
        timeline: [
            { time: 'H-30', task: 'Buat TOR & RAB, ajukan persetujuan pimpinan' },
            { time: 'H-21', task: 'Proses surat tugas & nota dinas' },
            { time: 'H-14', task: 'Kirim undangan ke peserta & narasumber' },
            { time: 'H-7', task: 'Finalisasi rundown, cetak materi & sertifikat' },
            { time: 'H-3', task: 'Cetak name tag, daftar hadir, formulir evaluasi' },
            { time: 'H+7', task: 'Selesaikan & serahkan LPJ' },
        ],
    },

    {
        id: 'teknis',
        icon: '🎤',
        title: 'Persiapan Teknis & Perlengkapan',
        subtitle: 'Sound system, proyektor, registrasi, dan layout ruangan',
        color: '#ef4444',
        steps: [
            {
                title: '1. Checklist Peralatan AV',
                items: [
                    '**Proyektor**: 1 unit (< 100 peserta), 2 unit (> 100 peserta)',
                    '**Screen**: sesuai jumlah proyektor',
                    '**Sound System**: 1 paket (termasuk amplifier, speaker)',
                    '**Microphone**: clip-on/condenser untuk narasumber, wireless handheld untuk peserta & MC',
                    '**Laptop presentasi**: minimal 1 unit + kabel HDMI/VGA cadangan',
                    '**Pointer / clicker**: 1 unit untuk presentasi',
                    'Cek semua peralatan di H-3  dan gunakan di H-1 saat gladi resik',
                ],
            },
            {
                title: '2. Setup Sound System',
                items: [
                    'Posisikan speaker agar menjangkau seluruh ruangan merata',
                    'Test volume di titik terjauh ruangan',
                    'Pastikan tidak ada feedback (dengung) saat mic aktif',
                    'Siapkan baterai cadangan untuk wireless mic',
                    'Cek ground loop & buzzing noise',
                    'Assigned 1 operator sound selama acara berlangsung',
                ],
            },
            {
                title: '3. Konfigurasi Proyektor & Screen',
                items: [
                    'Posisikan screen agar terlihat dari semua sudut ruangan',
                    'Atur keystone correction agar gambar tidak miring',
                    'Set resolusi projector sesuai laptop presentasi (biasanya 1920x1080)',
                    'Test semua file presentasi narasumber di laptop yang sama',
                    'Siapkan laptop cadangan dengan semua file presentasi ter-backup',
                ],
            },
            {
                title: '4. Internet & Live Streaming',
                items: [
                    'Test kecepatan internet: minimal 10 Mbps upload untuk live streaming',
                    'Gunakan kabel LAN (bukan WiFi) untuk stabilitas streaming',
                    'Setup platform streaming: YouTube Live / Zoom / Google Meet',
                    'Test audio & video quality dari sisi penonton online',
                    'Siapkan operator streaming dedicated',
                    'Buat link streaming & bagikan ke peserta online sebelum acara',
                ],
            },
            {
                title: '5. Sistem Registrasi',
                items: [
                    'Pilih sistem: QR code scan, form digital (Google Form), atau manual (daftar hadir kertas)',
                    'Siapkan 2 meja registrasi (minimum) untuk menghindari antrian panjang',
                    'Siapkan name tag, seminar kit, & goodie bag di meja registrasi',
                    'Test sistem registrasi digital sebelum hari H',
                    'Siapkan stiker/gelang identitas untuk membedakan kelas tamu',
                ],
            },
            {
                title: '6. Layout Ruangan per Formasi',
                items: [
                    '**Theater**: 0.8–1.0 m² per orang, cocok untuk seminar/konferensi besar',
                    '**Classroom**: 1.2–1.5 m² per orang, ada meja untuk menulis',
                    '**U-Shape**: 1.5–1.8 m² per orang, cocok untuk workshop/rapat',
                    '**Roundtable**: 1.8–2.2 m² per orang, cocok untuk FGD',
                    '**Banquet**: 1.4–1.8 m² per orang, cocok untuk gala dinner',
                    'Pastikan ada jalur sirkulasi minimal 1.5 meter',
                    'Sediakan area khusus untuk: registrasi, konsumsi, media, VIP lounge',
                ],
            },
        ],
        tips: [
            'Selalu bawa peralatan cadangan: baterai, kabel, adapter, extension',
            'Lakukan full rehearsal / gladi resik di H-1 dengan semua peralatan',
            'Tandai posisi peralatan dengan gaffer tape agar tidak bergeser',
            'Buat contact list semua vendor teknis untuk panggilan darurat',
        ],
        timeline: [
            { time: 'H-14', task: 'Konfirmasi semua vendor AV & peralatan' },
            { time: 'H-7', task: 'Terima file presentasi dari semua narasumber' },
            { time: 'H-3', task: 'Test semua peralatan AV & internet' },
            { time: 'H-1', task: 'Full setup ruangan & gladi resik' },
            { time: 'Hari H -2jam', task: 'Final check semua peralatan sebelum peserta datang' },
        ],
    },

    {
        id: 'dekorasi',
        icon: '🎨',
        title: 'Persiapan Dekorasi & Branding',
        subtitle: 'Backdrop, bunga, signage, dan visual branding',
        color: '#ec4899',
        steps: [
            {
                title: '1. Desain Backdrop & Spanduk',
                items: [
                    'Ukuran backdrop panggung: minimal 6×3 meter (sesuaikan dengan jumlah narasumber)',
                    'Cantumkan: logo instansi, nama acara, tanggal, tagline',
                    'Gunakan resolusi cetak minimal 150 DPI untuk kualitas tajam',
                    'Pesan ke vendor cetak minimal **H-10** (proses produksi 3-5 hari)',
                    'Siapkan 2-3 spanduk pelengkap untuk penunjuk arah',
                ],
            },
            {
                title: '2. Standing Flower & Bunga Meja',
                items: [
                    'Acara reguler: 4 rangkaian standing flower di sisi panggung',
                    'Acara VVIP: 6 rangkaian standing flower + bunga meja di setiap meja VIP',
                    'Pilih bunga yang tahan lama & tidak terlalu wangi (mengganggu peserta)',
                    'Pesan ke florist minimal **H-3**, request delivery di H-1 sore atau Hari H pagi',
                ],
            },
            {
                title: '3. Photo Booth & Area Selfie',
                items: [
                    'Buat backdrop foto terpisah dengan desain yang menarik',
                    'Sediakan properti foto (frame, topi, wig, dll) untuk interaksi peserta',
                    'Pastikan lighting area foto memadai',
                    'Buat hashtag resmi & tampilkan di area photo booth',
                ],
            },
            {
                title: '4. Signage & Wayfinding',
                items: [
                    'Buat sign penunjuk arah dari parkir/lobby ke ruangan acara',
                    'Siapkan floor plan / denah di area registrasi',
                    'Label setiap area: registrasi, ruang utama, area konsumsi, toilet, mushola',
                    'Gunakan branding yang konsisten dengan tema acara',
                ],
            },
            {
                title: '5. Dress Code & Visual Consistency',
                items: [
                    'Tentukan dress code panitia: seragam / warna tertentu',
                    'Buat ID card panitia yang jelas terlihat',
                    'Pastikan semua visual element menggunakan colour palette yang sama',
                    'Koordinasikan dengan vendor agar semua output sesuai branding guide',
                ],
            },
        ],
        tips: [
            'Minta proof desain digital sebelum cetak untuk koreksi',
            'Backdrop sebaiknya anti-silau (matte finish) untuk hasil foto lebih baik',
            'Bunga sebaiknya diantar paling lambat 3 jam sebelum acara agar masih segar',
            'Siapkan double-tape, paku tembak, dan tali untuk pemasangan darurat',
        ],
        timeline: [
            { time: 'H-14', task: 'Finalisasi desain backdrop, spanduk, & banner' },
            { time: 'H-10', task: 'Order produksi ke percetakan' },
            { time: 'H-5', task: 'Terima hasil cetak & cek kualitas' },
            { time: 'H-3', task: 'Order bunga & dekorasi' },
            { time: 'H-1', task: 'Pasang backdrop, spanduk, & dekorasi di venue' },
            { time: 'Hari H', task: 'Delivery bunga segar, final touch dekorasi' },
        ],
    },

    {
        id: 'sdm',
        icon: '👥',
        title: 'Koordinasi SDM & Tim Panitia',
        subtitle: 'Struktur organisasi, tupoksi, dan briefing',
        color: '#06b6d4',
        steps: [
            {
                title: '1. Struktur Organisasi Panitia',
                items: [
                    '**Penanggung Jawab**: Pejabat yang bertanggung jawab atas keseluruhan kegiatan',
                    '**Ketua Panitia**: Koordinator lapangan seluruh kepanitiaan',
                    '**Seksi Acara**: Rundown, MC, moderator, narasumber',
                    '**Seksi Logistik**: Venue, peralatan, dekorasi, transportasi',
                    '**Seksi Konsumsi**: Catering, coffee break, air mineral',
                    '**Seksi Registrasi**: Daftar hadir, name tag, seminar kit',
                    '**Seksi Dokumentasi**: Foto, video, social media',
                    '**Seksi Humas**: Publikasi, media, protokol',
                    '**Seksi Keuangan**: RAB, pembayaran vendor, kwitansi',
                ],
            },
            {
                title: '2. Pembagian Tugas (Tupoksi)',
                items: [
                    'Buat job description tertulis untuk setiap seksi',
                    'Tentukan PIC (Person in Charge) untuk setiap tugas spesifik',
                    'Pastikan setiap seksi punya backup person (antisipasi berhalangan)',
                    'Buat grup komunikasi (WhatsApp/Telegram) per seksi + grup konsolidasi',
                    'Distribusikan contact list seluruh panitia & vendor',
                ],
            },
            {
                title: '3. Briefing Panitia',
                items: [
                    'Lakukan briefing umum **H-7** untuk seluruh panitia',
                    'Briefing teknis **H-1** (gladi resik) di lokasi acara',
                    'Briefing final **Hari H - 1 jam** sebelum registrasi dibuka',
                    'Sampaikan: rundown, posisi masing-masing, prosedur darurat',
                    'Bagikan walkie-talkie / headset komunikasi untuk koordinasi real-time',
                ],
            },
            {
                title: '4. Liaison Officer (LO) untuk Tamu VIP/VVIP',
                items: [
                    'Tunjuk 1 LO per tamu VIP/VVIP utama',
                    'LO bertanggung jawab: penjemputan, pendampingan, dan pengantaran',
                    'Brief LO tentang profil, preferensi, dan jadwal tamu yang didampingi',
                    'Siapkan: kartu nama, nomor HP, dan itinerary untuk tamu VIP',
                    'LO harus berpakaian formal dan membawa ID card panitia',
                ],
            },
            {
                title: '5. Rencana Darurat / Contingency',
                items: [
                    'Buat prosedur jika narasumber tidak hadir / terlambat',
                    'Siapkan rencana jika peralatan AV bermasalah (backup manual)',
                    'Tentukan jalur evakuasi & titik kumpul darurat',
                    'Siapkan P3K dan kontak RS/klinik terdekat',
                    'Buat rantai komando: siapa yang mengambil keputusan jika terjadi masalah',
                ],
            },
        ],
        tips: [
            'Buat briefing singkat & padat (max 30 menit), gunakan visual/denah',
            'Distribusikan rundown versi final dalam format yang mudah dibaca di HP',
            'Pastikan semua panitia tahu lokasi toilet, mushola, dan P3K',
            'Siapkan makanan/snack khusus untuk panitia yang bertugas lebih awal',
        ],
        timeline: [
            { time: 'H-21', task: 'Bentuk panitia & distribusikan SK/surat tugas' },
            { time: 'H-14', task: 'Rapat koordinasi pertama, bagi tupoksi' },
            { time: 'H-7', task: 'Briefing umum seluruh panitia' },
            { time: 'H-3', task: 'Koordinasi final setiap seksi' },
            { time: 'H-1', task: 'Gladi resik & briefing teknis di lokasi' },
            { time: 'Hari H -1jam', task: 'Briefing final & pengecekan kesiapan' },
        ],
    },

    {
        id: 'timeline',
        icon: '⏰',
        title: 'Master Timeline Persiapan',
        subtitle: 'Jadwal keseluruhan dari H-30 sampai H+7',
        color: '#f97316',
        steps: [
            {
                title: 'H-30 : Perencanaan Awal',
                items: [
                    'Buat TOR dan RAB (gunakan fitur Simulasi Kegiatan)',
                    'Ajukan persetujuan pimpinan',
                    'Booking ruangan / venue ke Biro Umum',
                    'Tentukan tanggal, waktu, dan tema acara',
                    'Buat timeline & pembagian tugas panitia',
                ],
            },
            {
                title: 'H-21 : Koordinasi Awal',
                items: [
                    'Kirim brief ke Biro Humas untuk dukungan publikasi',
                    'Konfirmasi narasumber & moderator',
                    'Bentuk panitia & distribusikan surat tugas',
                    'Survei vendor: catering, dekorasi, AV, percetakan',
                    'Lakukan site visit ruangan',
                ],
            },
            {
                title: 'H-14 : Finalisasi Desain & Vendor',
                items: [
                    'Kirim undangan ke seluruh peserta',
                    'Finalisasi desain backdrop, spanduk, & materi cetak',
                    'Konfirmasi vendor AV & dekorasi',
                    'Kirim detail kebutuhan peralatan ke Biro Umum',
                    'Rapat koordinasi pertama seluruh panitia',
                ],
            },
            {
                title: 'H-10 : Produksi & Pemesanan',
                items: [
                    'Order catering & konsumsi',
                    'Produksi backdrop, spanduk, banner ke percetakan',
                    'Cetak modul, materi, & sertifikat peserta',
                    'Pilih & pesan souvenir / goodie bag',
                ],
            },
            {
                title: 'H-7 : Konfirmasi Final',
                items: [
                    'Konfirmasi jumlah peserta final',
                    'Konfirmasi ulang semua vendor',
                    'Distribusi press release (jika acara publik)',
                    'Terima file presentasi dari narasumber',
                    'Cetak name tag, ID card, & daftar hadir',
                    'Briefing umum seluruh panitia',
                ],
            },
            {
                title: 'H-3 : Persiapan Fisik',
                items: [
                    'Konfirmasi jumlah final ke catering',
                    'Test semua peralatan AV & internet',
                    'Terima hasil cetak dari vendor & cek kualitas',
                    'Order bunga & dekorasi',
                    'Koordinasi final setiap seksi panitia',
                ],
            },
            {
                title: 'H-1 : Gladi Resik',
                items: [
                    'Full setup ruangan: furniture, AV, dekorasi',
                    'Pasang backdrop & spanduk',
                    'Test semua peralatan end-to-end',
                    'Test live streaming (jika ada)',
                    'Briefing teknis di lokasi',
                    'Siapkan meja registrasi & seminar kit',
                    'Konfirmasi ulang rundown dengan MC',
                ],
            },
            {
                title: 'Hari H : Eksekusi',
                items: [
                    'Panitia arrive **H-2 jam** sebelum acara',
                    'Final check AV & sound',
                    'Delivery bunga segar & final touch dekorasi',
                    'Coffee break siap 30 menit sebelum peserta datang',
                    'Buka registrasi 1 jam sebelum acara',
                    'Briefing final panitia 1 jam sebelum acara',
                    'Posisikan LO & petugas keamanan (jika ada VIP)',
                    'EKSEKUSI ACARA sesuai rundown ✨',
                ],
            },
            {
                title: 'H+3 s/d H+7 : Pasca Acara',
                items: [
                    'Distribusi sertifikat ke peserta',
                    'Kumpulkan feedback / evaluasi',
                    'Pengembalian peralatan sewa',
                    'Terima & review hasil dokumentasi foto/video',
                    'Buat laporan pertanggungjawaban (LPJ)',
                    'Rekap realisasi anggaran vs RAB',
                    'Arsipkan seluruh dokumen',
                    'Evaluasi internal panitia (lessons learned)',
                ],
            },
        ],
        tips: [
            'Gunakan project management tool (Trello, Notion, Google Sheets) untuk tracking progress',
            'Set reminder di kalender untuk setiap milestone',
            'Buat status report mingguan ke pimpinan',
            'Dokumentasikan setiap perubahan rencana & alasannya',
        ],
        timeline: [],
    },
];
