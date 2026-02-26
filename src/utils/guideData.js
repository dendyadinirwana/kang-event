/**
 * DATA PANDUAN KEGIATAN
 * Berisi panduan langkah-demi-langkah untuk persiapan acara/kegiatan.
 */

export function buildGuideSections(inputParams, computedParams) {
    const input = inputParams || {};
    const computed = computedParams || {};
    // Determine dynamic flags based on input
    const isWebinar = input.eventType === 'webinar';
    const hasStreaming = (input.team || []).includes('live_streaming');
    const hasVVIP = input.vvip > 0 || input.guestClass === 'vvip';
    const hasVIP = input.vip > 0 || ['vip', 'vvip', 'campuran'].includes(input.guestClass);
    const hasAsrot = (input.team || []).includes('asrot');
    const hasFotografer = (input.team || []).includes('fotografer');
    const hasVideografer = (input.team || []).includes('videografer');

    // Determine numbers
    const totalHadir = computed.totalHadir || input.peserta || 30;
    const narasumberCount = input.narasumber || 0;
    const proyektorCount = computed.proyektorJml || 1;
    const layoutType = computed.formasi || 'Theater';
    const luasMin = computed.luasMin || 0;
    const backdropMeters = Math.max(6, Math.ceil(narasumberCount * 1.2) + 2);

    const sections = [];

    // 1. BIRO UMUM
    sections.push({
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
                    `Lampirkan detail: estimasi **${totalHadir} orang** hadir, dan layout **${layoutType}** (butuh minimal **${luasMin} m²**).`,
                    hasVVIP ? 'Sebutkan kebutuhan khusus: **Ruang transit VVIP/VIP** dengan standar pengamanan.' : 'Sebutkan kebutuhan khusus: akses disable, ruang transit narasumber.',
                    'Konfirmasi ketersediaan ruangan & tandatangan persetujuan',
                    'Lakukan survei lokasi (site visit) untuk memastikan kesesuaian ruangan',
                ],
            },
            {
                title: '2. Peminjaman Peralatan AV & Teknis',
                items: [
                    'Isi formulir peminjaman peralatan ke Biro Umum',
                    `Spesifikasikan kebutuhan proyektor sebanyak **${proyektorCount} unit** beserta layarnya.`,
                    'Tanyakan ketersediaan laptop presentasi, pointer, dan kabel HDMI cadangan',
                    (isWebinar || hasStreaming) ? 'Karena ada Live Streaming: request kamera, streaming kit, dan bandwith internet ke IT.' : null,
                    'Pastikan ada teknisi standby dari Biro Umum di hari H',
                ].filter(Boolean),
            },
            {
                title: '3. Permintaan Furniture & Layout',
                items: [
                    `Pastikan formasi duduk sesuai dengan rencana: **${layoutType}**.`,
                    `Hitung kebutuhan: kursi peserta (${input.peserta || 0} pax), meja, dan podium.`,
                    hasVIP ? `Siapkan kursi VIP khusus sebanyak **${input.vip || 0} unit**.` : null,
                    hasVVIP ? `Sediakan sofa eksekutif / kursi VVIP sebanyak **${input.vvip || 0} unit** di barisan terdepan.` : null,
                    'Pastikan ada meja tambahan untuk: konsumsi, registrasi, merchandise/material',
                ].filter(Boolean),
            },
            {
                title: '4. Keamanan & Akses',
                items: [
                    'Koordinasi jumlah petugas keamanan/satpam yang dibutuhkan',
                    'Atur jalur akses masuk: peserta umum, dan loading dock vendor',
                    hasVVIP ? '**[PROTOKOL VVIP]** Siapkan area parkir khusus dan jalur masuk *clear-area* untuk VVIP.' : null,
                    'Buat name tag / ID card untuk panitia, vendor, dan media',
                    'Pastikan jalur evakuasi darurat sudah briefed ke seluruh panitia',
                ].filter(Boolean),
            },
            {
                title: '5. Jaringan IT & Infrastruktur',
                items: [
                    (isWebinar || hasStreaming) ? 'Request bandwidth internet dedicated khusus live streaming (minimal 10Mbps).' : 'Pastikan WiFi peserta tersedia dan test kecepatan minimal H-3.',
                    'Siapkan kabel LAN cadangan untuk stabilitas koneksi meja panitia/operator',
                    'Koordinasi kebutuhan stop kontak / power extension untuk peralatan',
                    'Pastikan AC / pendingin ruangan berfungsi baik',
                ],
            },
        ],
        tips: [
            'Selalu ajukan permintaan secara tertulis (memo/email resmi) untuk dokumentasi',
            'Foto kondisi ruangan saat survei sebagai referensi layout',
            'Minta nomor kontak teknisi Biro Umum yang bisa dihubungi langsung di hari H',
        ],
        timeline: [
            { time: 'H-30', task: 'Ajukan memo permintaan ruangan & fasilitas' },
            { time: 'H-14', task: 'Kirim detail kebutuhan peralatan AV & furniture' },
            { time: 'H-1', task: 'Setup ruangan & gladi resik dengan peralatan lengkap' },
        ],
    });

    // 2. BIRO HUMAS
    sections.push({
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
                ],
            },
            (hasFotografer || hasVideografer) ? {
                title: '2. Dokumentasi Foto & Video',
                items: [
                    hasFotografer ? 'Briefing fotografer mengenai shot list momen penting yang wajib didokumentasikan.' : null,
                    hasVideografer ? 'Koordinasikan dengan videografer untuk timeline editing video highlight.' : null,
                    'Siapkan release form jika peserta akan didokumentasikan',
                ].filter(Boolean),
            } : null,
            {
                title: '3. Desain & Produksi Materi',
                items: [
                    `Koordinasi desain: backdrop utama (minimal ${backdropMeters} meter), spanduk, roll-up banner.`,
                    'Cetak materi fisik: undangan, sertifikat, name tag, flyer',
                ],
            },
            (isWebinar || hasStreaming) ? {
                title: '4. Media Sosial & Live Streaming',
                items: [
                    'Tentukan hashtag resmi acara',
                    'Siapkan desain thumbnail YouTube dan Virtual Background Zoom',
                    'Pastikan operator live streaming / humas memantau live chat',
                ],
            } : null,
            {
                title: '5. Protokol & MC',
                items: [
                    'Koordinasi susunan acara / rundown dengan Humas',
                    `Tentukan MC / Pembawa Acara (${input.mc || 1} orang).`,
                    hasVVIP ? '**[PROTOKOL VVIP]** Koordinasi ketat untuk penyambutan pejabat, kursi kehormatan, dan foto bersama.' : null,
                ].filter(Boolean),
            },
        ].filter(Boolean),
        tips: [
            'Gunakan branding yang konsisten di semua materi (warna, font, logo)',
            'Brief narasi/angle publikasi ke Humas sebelum acara dimulai',
        ],
        timeline: [
            { time: 'H-21', task: 'Kirim brief acara & request dukungan Humas' },
            { time: 'H-10', task: 'Produksi & cetak semua materi publikasi' },
            { time: 'H-1', task: 'Pasang backdrop, spanduk, banner di lokasi' },
        ],
    });

    // 3. KONSUMSI
    const hasKonsumsiTeam = (input.team || []).includes('konsumsi');
    sections.push({
        id: 'konsumsi',
        icon: '🍽️',
        title: 'Koordinasi Konsumsi & Catering',
        subtitle: 'Menu, coffee break, dan pengaturan makan',
        color: '#f59e0b',
        steps: [
            {
                title: '1. Perencanaan Menu',
                items: [
                    `Total peserta & panitia yang hadir: **${totalHadir} orang**.`,
                    hasVVIP ? 'Siapkan menu **Fine dining / set menu premium** khusus untuk tamu VVIP.' : null,
                    hasVIP && !hasVVIP ? 'Siapkan menu VIP tersendiri / prasmanan premium.' : null,
                    'Siapkan konsumsi reguler (nasi box / prasmanan standar) untuk peserta umum.',
                    'Sesuaikan dengan SBM (Standar Biaya Masukan) yang berlaku di lokasi acara.',
                ].filter(Boolean),
            },
            {
                title: '2. Pengaturan Tata Letak & Pemesanan',
                items: [
                    'Survei minimal 3 vendor catering untuk perbandingan harga',
                    `Order catering minimal **H-10** untuk **${totalHadir} pax**.`,
                    'Siapkan buffer 10% dari jumlah pesanan (antisipasi walk-in/panitia cadangan)',
                    'Tentukan area konsumsi: pisahkan antara alur peserta reguler dan area transit VIP/VVIP.',
                    hasKonsumsiTeam ? 'Tim konsumsi standby memastikan vendor melakukan setup tepat waktu.' : 'Vendor harus siap mensetup semuanya.',
                ],
            },
        ],
        tips: [
            'Selalu sediakan air mineral di setiap meja peserta',
            'Tanyakan alergi/dietary restriction saat registrasi',
        ],
        timeline: [
            { time: 'H-10', task: 'Pilih vendor & pesan konsumsi' },
            { time: 'H-3', task: 'Konfirmasi jumlah kehadiran final ke catering' },
        ],
    });

    // 4. ADMINISTRASI (Always present, but could be dynamic)
    sections.push({
        id: 'administrasi',
        icon: '📑',
        title: 'Persiapan Administrasi & Dokumen',
        subtitle: 'TOR, RAB, surat, sertifikat, dan LPJ',
        color: '#10b981',
        steps: [
            {
                title: '1. Perencanaan Evaluasi & Anggaran',
                items: [
                    'Buat Term of Reference (TOR / KAK) yang mencakup sasaran kegiatan.',
                    'Lampirkan simulasi RAB yang sudah dibuat dari sistem ini dan sesuaikan dengan SBM.',
                    'TOR harus disetujui pimpinan sebelum proses selanjutnya',
                ],
            },
            {
                title: '2. Surat & Undangan',
                items: [
                    `Siapkan surat undangan untuk narasumber (${narasumberCount} orang) dan moderator.`,
                    'Buat surat tugas untuk kepanitiaan.',
                ],
            },
            {
                title: '3. Dokumen Pelaksanaan & LPJ',
                items: [
                    'Buat rundown acara detail (per menit)',
                    'Siapkan daftar hadir / absensi',
                    'Kumpulkan semua kwitansi & bukti pembayaran vendor setelah acara',
                    'Buat rekapitulasi realisasi anggaran vs RAB',
                ],
            },
        ],
        tips: [
            'Gunakan numbering surat yang konsisten',
            'Simpan soft copy secara terpusat di cloud drive folder bersama panitia.',
        ],
        timeline: [
            { time: 'H-30', task: 'Buat TOR & RAB, ajukan persetujuan' },
            { time: 'H-14', task: 'Kirim undangan narasumber & peserta' },
            { time: 'H+7', task: 'Selesaikan & serahkan LPJ' },
        ],
    });

    // 5. TEKNIS
    sections.push({
        id: 'teknis',
        icon: '🎤',
        title: 'Persiapan Teknis & Perlengkapan',
        subtitle: 'Sound system, proyektor, registrasi, dan layout ruangan',
        color: '#ef4444',
        steps: [
            {
                title: '1. Peralatan Spesifik Acara',
                items: [
                    `Siapkan **${proyektorCount} unit proyektor** sesuai kapasitas ruangan.`,
                    `Siapkan **${computed.micNS || 2} unit mic** khusus narasumber/moderator (clip-on atau condenser).`,
                    `Siapkan **${computed.micPes || 1} unit mic wireless** untuk floor / peserta.`,
                    'Siapkan minimal 1 laptop utama dan 1 laptop cadangan untuk presentasi.',
                ],
            },
            {
                title: '2. Konfigurasi Area',
                items: [
                    `Susun letak kursi dalam mode **${layoutType}** memastikan jarak aman antar delegasi.`,
                    'Posisikan screen proyektor sehingga tidak terhalangi narasumber maupun podium.',
                    (input.team || []).includes('registrasi') ? 'Siapkan 2 meja registrasi dengan pembagian huruf awal absen (A-M, N-Z).' : 'Siapkan area meja registrasi form kehadiran.',
                ],
            },
        ],
        tips: [
            'Lakukan full rehearsal / gladi resik di H-1 dengan semua peralatan menyala',
        ],
        timeline: [
            { time: 'H-7', task: 'Terima slide materi dari narasumber' },
            { time: 'H-1', task: 'Full setup ruangan & gladi resik' },
        ],
    });

    // 6. ASROT (Conditional)
    if (hasAsrot) {
        sections.push({
            id: 'asrot',
            icon: '🎛️',
            title: 'Persiapan Asisten Sorot (Asrot) / Operator Teknis',
            subtitle: 'Tugas, posisi, dan panduan operator teknis di hari H',
            color: '#0ea5e9',
            steps: [
                {
                    title: '1. Peran & Tanggung Jawab',
                    items: [
                        'Asrot mengontrol slide presentasi narasumber agar mulus tanpa hambatan.',
                        'Kontrol on/off microphone floor & podium sesuai dengan rundown MC.',
                    ],
                },
                {
                    title: '2. Eksekusi Hari H',
                    items: [
                        'Operator hadir minimal H-2 jam sebelum acara untuk final check',
                        'Posisikan meja di tempat strategis yang bisa melihat "cue" ketukan tangan dari MC/Narasumber.',
                        'Jika ada masalah (freeze/koneksi putus), segera switch tampilan ke white-screen/logo acara.',
                    ],
                },
            ],
            tips: [
                'Test hot-swap: latih prosedur ganti kabel display dari laptop 1 ke 2 secara instan.',
                'Hafalkan tombol shortcut presentasi: "B" (Blank), "F5" (Start Slideshow), dll.',
            ],
            timeline: [
                { time: 'H-3', task: 'Tes file PPT di laptop operasional' },
                { time: 'H-1', task: 'Latih cue perpindahan slide' },
            ],
        });
    }

    // 7. DEKORASI
    const hasDecor = (input.decorChips || []).length > 0;
    if (hasDecor || hasVVIP || input.eventType === 'gala') {
        sections.push({
            id: 'dekorasi',
            icon: '🎨',
            title: 'Persiapan Dekorasi & Branding',
            subtitle: 'Backdrop, bunga, signage, dan visual branding',
            color: '#ec4899',
            steps: [
                {
                    title: '1. Item Dekorasi',
                    items: [
                        `Backdrop utama minimal ukuran **${backdropMeters} x 3 meter**.`,
                        (input.decorChips || []).includes('standing_flower') ? 'Sediakan Standing Flower Array di sisi panggung.' : null,
                        (input.decorChips || []).includes('table_flower') ? 'Sediakan Bunga Meja / Centerpiece untuk meja Narasumber / VIP.' : null,
                        (input.decorChips || []).includes('karpet_merah') || hasVVIP ? 'Gelarkan karpet merah pada jalur utama (Protokoler VVIP).' : null,
                    ].filter(Boolean),
                },
                {
                    title: '2. Wayfinding & Signage',
                    items: [
                        'Pasang standing banner panunjuk jalan dari lobi kedatangan ke ruangan / venue.',
                        'Cetak dan posisikan name-tent (papan nama meja) untuk narasumber / tamu VIP.',
                    ],
                }
            ],
            tips: [
                'Pesan dekorasi bunga agar tiba di lokasi paling lambat 3 jam sebelum acara dimulai supaya tetap segar.',
            ],
            timeline: [
                { time: 'H-10', task: 'Order backdrop cetak' },
                { time: 'Hari H', task: 'Delivery bunga segar' },
            ],
        });
    }

    // 8. SDM & PANITIA
    sections.push({
        id: 'sdm',
        icon: '👥',
        title: 'Koordinasi SDM & Tim Panitia',
        subtitle: 'Struktur organisasi, tupoksi, dan briefing',
        color: '#06b6d4',
        steps: [
            {
                title: '1. Manajemen Tim',
                items: [
                    `Organisasikan total kepanitiaan yang terdiri dari **${input.panitia || 5} orang panitia**.`,
                    `Assign spesifik operator/pj untuk Narsum (${narasumberCount} pax) & Moderator.`,
                    hasVVIP ? `Tunjuk Liaison Officer (LO) khusus untuk mengawal tiap VVIP yang hadir.` : null,
                ].filter(Boolean),
            },
            {
                title: '2. Jadwal Briefing',
                items: [
                    'Lakukan briefing umum **H-7** membagi rundown.',
                    'Briefing teknis **H-1** (gladi lapangan).',
                    'Bagikan HT / perangkat komunikasi untuk tim kunci.',
                ],
            },
        ],
        tips: [
            'Buat grup WhatsApp/Telegram khusus per divisi dan seluruh panitia.',
        ],
        timeline: [
            { time: 'H-14', task: 'Pembagian tupoksi' },
            { time: 'H-1', task: 'Gladi di lapangan' },
        ],
    });

    return sections;
}
