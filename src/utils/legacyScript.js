
    function toggleDisclaimer() {
      const body = document.getElementById('disclaimer-body');
      const arrow = document.getElementById('disc-arrow');
      const shown = body.style.display !== 'none';
      body.style.display = shown ? 'none' : 'block';
      arrow.classList.toggle('open', !shown);
    }

    // ── STATE
    const C = { peserta: 30, narasumber: 2, moderator: 1, mc: 1, panitia: 5 };
    let guestClass = 'reguler';

    function cnt(k, d) {
      C[k] = Math.max(k === 'peserta' ? 5 : 0, C[k] + d);
      document.getElementById('v-' + k).value = C[k];
    }
    function cset(k, v) {
      const min = k === 'peserta' ? 5 : 0;
      C[k] = Math.max(min, parseInt(v) || 0);
      document.getElementById('v-' + k).value = C[k];
    }

    document.getElementById('gc-grid').addEventListener('click', e => {
      const card = e.target.closest('.gc-card'); if (!card) return;
      document.querySelectorAll('.gc-card').forEach(c => c.className = 'gc-card');
      guestClass = card.dataset.class; card.classList.add('sel-' + guestClass);
      const showVip = ['vip', 'vvip', 'campuran'].includes(guestClass);
      document.getElementById('vip-row').classList.toggle('show', showVip);
      // Atur label & visibilitas field sesuai kelas
      const vvipField = document.getElementById('vvip-field');
      const vipField = document.getElementById('vip-field');
      if (guestClass === 'vip') {
        vvipField.style.display = 'none';
        vipField.style.display = 'flex';
      } else if (guestClass === 'vvip') {
        vvipField.style.display = 'flex';
        vipField.style.display = 'none';
      } else {
        vvipField.style.display = 'flex';
        vipField.style.display = 'flex';
      }
    });
    ['team-chips', 'decor-chips'].forEach(id => {
      document.getElementById(id).addEventListener('click', e => { const c = e.target.closest('.toggle-chip'); if (c) c.classList.toggle('active'); });
    });
    const getChips = id => [...document.querySelectorAll('#' + id + ' .toggle-chip.active')].map(el => el.dataset.value);

    // ── HARGA REFERENSI (Rp, per-satuan, acuan Standar Biaya Masukan Kemenkeu & e-Katalog LKPP 2024)
    const HARGA = {
      // AV & Teknis
      proyektor: { nama: 'Proyektor (sewa)', sat: 'unit/hari', harga: { jakarta: 750000, bandung: 600000, surabaya: 650000, yogyakarta: 550000, medan: 600000, makassar: 600000, daerah: 500000 } },
      screen_proyektor: { nama: 'Screen Proyektor (sewa)', sat: 'unit/hari', harga: { jakarta: 300000, bandung: 250000, surabaya: 275000, yogyakarta: 225000, medan: 250000, makassar: 250000, daerah: 200000 } },
      sound_system: { nama: 'Sound System (sewa)', sat: 'paket/hari', harga: { jakarta: 2500000, bandung: 2000000, surabaya: 2200000, yogyakarta: 1800000, medan: 2000000, makassar: 2000000, daerah: 1500000 } },
      mic_podium: { nama: 'Microphone Podium/Clip', sat: 'unit/hari', harga: { jakarta: 200000, bandung: 175000, surabaya: 185000, yogyakarta: 150000, medan: 175000, makassar: 175000, daerah: 150000 } },
      mic_wireless: { nama: 'Wireless Handheld Mic', sat: 'unit/hari', harga: { jakarta: 250000, bandung: 200000, surabaya: 225000, yogyakarta: 175000, medan: 200000, makassar: 200000, daerah: 175000 } },
      laptop_presentasi: { nama: 'Laptop Presentasi (sewa)', sat: 'unit/hari', harga: { jakarta: 350000, bandung: 300000, surabaya: 325000, yogyakarta: 275000, medan: 300000, makassar: 300000, daerah: 250000 } },
      switcher: { nama: 'Video Switcher/Mixer (sewa)', sat: 'unit/hari', harga: { jakarta: 1500000, bandung: 1200000, surabaya: 1350000, yogyakarta: 1100000, medan: 1200000, makassar: 1200000, daerah: 1000000 } },
      streaming_kit: { nama: 'Live Streaming Kit (sewa)', sat: 'paket/hari', harga: { jakarta: 3500000, bandung: 3000000, surabaya: 3200000, yogyakarta: 2800000, medan: 3000000, makassar: 3000000, daerah: 2500000 } },

      // Furniture & Layout
      kursi_peserta: { nama: 'Kursi Peserta (sewa)', sat: 'unit/hari', harga: { jakarta: 25000, bandung: 20000, surabaya: 22000, yogyakarta: 18000, medan: 20000, makassar: 20000, daerah: 15000 } },
      meja_peserta: { nama: 'Meja Peserta Lipat (sewa)', sat: 'unit/hari', harga: { jakarta: 35000, bandung: 28000, surabaya: 30000, yogyakarta: 25000, medan: 28000, makassar: 28000, daerah: 22000 } },
      meja_narasumber: { nama: 'Meja Narasumber (sewa)', sat: 'unit/hari', harga: { jakarta: 150000, bandung: 125000, surabaya: 135000, yogyakarta: 110000, medan: 125000, makassar: 125000, daerah: 100000 } },
      podium: { nama: 'Podium Kayu/Akrilik (sewa)', sat: 'unit/hari', harga: { jakarta: 500000, bandung: 400000, surabaya: 450000, yogyakarta: 375000, medan: 400000, makassar: 400000, daerah: 350000 } },
      kursi_vip: { nama: 'Kursi VIP/Sofa (sewa)', sat: 'unit/hari', harga: { jakarta: 100000, bandung: 80000, surabaya: 90000, yogyakarta: 75000, medan: 80000, makassar: 80000, daerah: 65000 } },
      meja_registrasi: { nama: 'Meja Registrasi (sewa)', sat: 'unit/hari', harga: { jakarta: 100000, bandung: 80000, surabaya: 90000, yogyakarta: 75000, medan: 80000, makassar: 80000, daerah: 65000 } },
      partisi: { nama: 'Partisi Ruangan (sewa)', sat: 'panel/hari', harga: { jakarta: 75000, bandung: 60000, surabaya: 65000, yogyakarta: 55000, medan: 60000, makassar: 60000, daerah: 50000 } },
      karpet: { nama: 'Karpet Merah (sewa)', sat: 'm/hari', harga: { jakarta: 50000, bandung: 40000, surabaya: 45000, yogyakarta: 38000, medan: 40000, makassar: 40000, daerah: 35000 } },

      // Dekorasi
      backdrop: { nama: 'Backdrop / Spanduk Besar (produksi)', sat: 'm²', harga: { jakarta: 85000, bandung: 70000, surabaya: 75000, yogyakarta: 65000, medan: 70000, makassar: 70000, daerah: 60000 } },
      spanduk: { nama: 'Spanduk (produksi)', sat: 'm²', harga: { jakarta: 55000, bandung: 45000, surabaya: 50000, yogyakarta: 42000, medan: 45000, makassar: 45000, daerah: 38000 } },
      standing_flower: { nama: 'Standing Flower Arrangement', sat: 'rangkaian', harga: { jakarta: 650000, bandung: 500000, surabaya: 550000, yogyakarta: 450000, medan: 500000, makassar: 500000, daerah: 400000 } },
      table_flower: { nama: 'Bunga Meja / Centerpiece', sat: 'rangkaian', harga: { jakarta: 250000, bandung: 200000, surabaya: 220000, yogyakarta: 185000, medan: 200000, makassar: 200000, daerah: 175000 } },
      tanaman_pot: { nama: 'Tanaman Hias / Pot (sewa)', sat: 'pot', harga: { jakarta: 150000, bandung: 120000, surabaya: 135000, yogyakarta: 110000, medan: 120000, makassar: 120000, daerah: 100000 } },
      photo_booth: { nama: 'Photo Booth Set (sewa)', sat: 'paket', harga: { jakarta: 2500000, bandung: 2000000, surabaya: 2200000, yogyakarta: 1800000, medan: 2000000, makassar: 2000000, daerah: 1700000 } },
      lampu_hias: { nama: 'Lampu Hias / LED Dekor (sewa)', sat: 'paket', harga: { jakarta: 1500000, bandung: 1200000, surabaya: 1350000, yogyakarta: 1100000, medan: 1200000, makassar: 1200000, daerah: 1000000 } },
      nametag: { nama: 'Name Tag + Holder', sat: 'pcs', harga: { jakarta: 8000, bandung: 7000, surabaya: 7500, yogyakarta: 6500, medan: 7000, makassar: 7000, daerah: 6000 } },
      meja_backdrop: { nama: 'Frame Backdrop + Besi (sewa)', sat: 'unit', harga: { jakarta: 350000, bandung: 280000, surabaya: 300000, yogyakarta: 250000, medan: 280000, makassar: 280000, daerah: 230000 } },

      // SDM
      mc_honor: { nama: 'Honorarium MC / Host', sat: 'orang/hari', harga: { jakarta: 2000000, bandung: 1500000, surabaya: 1750000, yogyakarta: 1300000, medan: 1500000, makassar: 1500000, daerah: 1200000 } },
      moderator_honor: { nama: 'Honorarium Moderator', sat: 'orang/hari', harga: { jakarta: 2500000, bandung: 2000000, surabaya: 2200000, yogyakarta: 1800000, medan: 2000000, makassar: 2000000, daerah: 1500000 } },
      narasumber_honor: { nama: 'Honorarium Narasumber', sat: 'orang/hari', harga: { jakarta: 5000000, bandung: 4000000, surabaya: 4500000, yogyakarta: 3500000, medan: 4000000, makassar: 4000000, daerah: 3000000 } },
      operator_honor: { nama: 'Honorarium Operator / Asrot', sat: 'orang/hari', harga: { jakarta: 500000, bandung: 400000, surabaya: 450000, yogyakarta: 375000, medan: 400000, makassar: 400000, daerah: 350000 } },
      fotografer_honor: { nama: 'Honorarium Fotografer', sat: 'orang/hari', harga: { jakarta: 1500000, bandung: 1200000, surabaya: 1350000, yogyakarta: 1100000, medan: 1200000, makassar: 1200000, daerah: 1000000 } },
      videografer_honor: { nama: 'Honorarium Videografer', sat: 'orang/hari', harga: { jakarta: 2000000, bandung: 1600000, surabaya: 1800000, yogyakarta: 1500000, medan: 1600000, makassar: 1600000, daerah: 1350000 } },
      interpreter_honor: { nama: 'Honorarium Interpreter', sat: 'orang/hari', harga: { jakarta: 3000000, bandung: 2500000, surabaya: 2750000, yogyakarta: 2200000, medan: 2500000, makassar: 2500000, daerah: 2000000 } },
      notulen_honor: { nama: 'Honorarium Notulen', sat: 'orang/hari', harga: { jakarta: 500000, bandung: 400000, surabaya: 450000, yogyakarta: 375000, medan: 400000, makassar: 400000, daerah: 350000 } },
      keamanan_honor: { nama: 'Honor Petugas Keamanan', sat: 'orang/hari', harga: { jakarta: 350000, bandung: 280000, surabaya: 300000, yogyakarta: 250000, medan: 280000, makassar: 280000, daerah: 230000 } },
      panitia_honor: { nama: 'Honorarium Panitia Pelaksana', sat: 'orang/hari', harga: { jakarta: 400000, bandung: 320000, surabaya: 350000, yogyakarta: 290000, medan: 320000, makassar: 320000, daerah: 270000 } },

      // Konsumsi
      snack: { nama: 'Snack / Coffee Break', sat: 'orang/sesi', harga: { jakarta: 45000, bandung: 38000, surabaya: 40000, yogyakarta: 35000, medan: 38000, makassar: 38000, daerah: 32000 } },
      makan_siang: { nama: 'Makan Siang (prasmanan/box)', sat: 'orang', harga: { jakarta: 95000, bandung: 80000, surabaya: 85000, yogyakarta: 75000, medan: 80000, makassar: 80000, daerah: 70000 } },
      makan_vip: { nama: 'Makan VIP / Welcome Dinner', sat: 'orang', harga: { jakarta: 250000, bandung: 200000, surabaya: 220000, yogyakarta: 185000, medan: 200000, makassar: 200000, daerah: 175000 } },
      air_mineral: { nama: 'Air Mineral (galon + gelas)', sat: 'paket/hari', harga: { jakarta: 150000, bandung: 120000, surabaya: 135000, yogyakarta: 110000, medan: 120000, makassar: 120000, daerah: 100000 } },

      // Materi & Cetakan
      modul: { nama: 'Modul / Materi Cetak (jilid)', sat: 'eks', harga: { jakarta: 35000, bandung: 28000, surabaya: 30000, yogyakarta: 25000, medan: 28000, makassar: 28000, daerah: 22000 } },
      sertifikat: { nama: 'Sertifikat (cetak)', sat: 'eks', harga: { jakarta: 15000, bandung: 12000, surabaya: 13000, yogyakarta: 11000, medan: 12000, makassar: 12000, daerah: 10000 } },
      atk: { nama: 'ATK Peserta (map, bolpen, blok)', sat: 'set/orang', harga: { jakarta: 25000, bandung: 20000, surabaya: 22000, yogyakarta: 18000, medan: 20000, makassar: 20000, daerah: 16000 } },
      souvenir: { nama: 'Souvenir / Goodie Bag Peserta', sat: 'pcs', harga: { jakarta: 75000, bandung: 60000, surabaya: 65000, yogyakarta: 55000, medan: 60000, makassar: 60000, daerah: 50000 } },

      // Venue & Logistik
      sewa_ruang: { nama: 'Sewa Ruang / Ballroom', sat: 'hari', harga: { jakarta: 15000000, bandung: 10000000, surabaya: 12000000, yogyakarta: 8000000, medan: 10000000, makassar: 10000000, daerah: 7000000 } },
      transportasi: { nama: 'Transport / Koordinasi Lapangan', sat: 'paket', harga: { jakarta: 1500000, bandung: 1200000, surabaya: 1350000, yogyakarta: 1100000, medan: 1200000, makassar: 1200000, daerah: 1000000 } },
      dokumentasi_edit: { nama: 'Editing Dokumentasi Foto/Video', sat: 'paket', harga: { jakarta: 2500000, bandung: 2000000, surabaya: 2200000, yogyakarta: 1800000, medan: 2000000, makassar: 2000000, daerah: 1500000 } },
    };


    // ── OVERRIDE HARGA ────────────────────────────────────────
    const OVERRIDE_ITEMS = [
      // Honorarium (SBM-regulated)
      { key: 'narasumber_honor', label: 'Honor Narasumber (per orang/hari)', section: '👤 Honorarium (SBM PMK 32/2025)' },
      { key: 'moderator_honor', label: 'Honor Moderator (per orang/hari)', section: null },
      { key: 'mc_honor', label: 'Honor MC / Host (per orang/hari)', section: null },
      { key: 'panitia_honor', label: 'Honor Panitia (per orang/hari)', section: null },
      { key: 'operator_honor', label: 'Honor Operator/Asrot (per orang/hari)', section: null },
      { key: 'fotografer_honor', label: 'Honor Fotografer (per orang/hari)', section: null },
      { key: 'videografer_honor', label: 'Honor Videografer (per orang/hari)', section: null },
      { key: 'interpreter_honor', label: 'Honor Interpreter (per orang/hari)', section: null },
      { key: 'notulen_honor', label: 'Honor Notulen (per orang/hari)', section: null },
      // Konsumsi (SBM-regulated)
      { key: 'snack', label: 'Snack / Coffee Break (per orang/sesi)', section: '☕ Konsumsi (SBM PMK 32/2025)' },
      { key: 'makan_siang', label: 'Makan Siang (per orang)', section: null },
      { key: 'makan_vip', label: 'Makan VIP/Gala Dinner (per orang)', section: null },
      // Venue & AV (harga pasar)
      { key: 'sewa_ruang', label: 'Sewa Ruang / Ballroom (per hari)', section: '🏛️ Venue & AV (harga pasar/e-Katalog)' },
      { key: 'proyektor', label: 'Sewa Proyektor (per unit/hari)', section: null },
      { key: 'sound_system', label: 'Sewa Sound System (per paket/hari)', section: null },
      { key: 'streaming_kit', label: 'Sewa Streaming Kit (per paket/hari)', section: null },
      // Furniture
      { key: 'kursi_peserta', label: 'Sewa Kursi Peserta (per unit/hari)', section: '🪑 Furniture (harga pasar)' },
      { key: 'meja_peserta', label: 'Sewa Meja Peserta (per unit/hari)', section: null },
      { key: 'kursi_vip', label: 'Sewa Kursi VIP (per unit/hari)', section: null },
      // Dekorasi
      { key: 'backdrop', label: 'Backdrop/Spanduk (per m²)', section: '🌸 Dekorasi (harga pasar)' },
      { key: 'standing_flower', label: 'Standing Flower (per rangkaian)', section: null },
      { key: 'table_flower', label: 'Bunga Meja (per rangkaian)', section: null },
    ];

    const hargaOverrides = {}; // key -> nilai override (Rp)

    function buildOverrideGrid() {
      let html = '';
      let lastSection = null;
      OVERRIDE_ITEMS.forEach(item => {
        if (item.section && item.section !== lastSection) {
          lastSection = item.section;
          html += `<div class="override-section-label" style="grid-column:1/-1">${item.section}</div>`;
        }
        html += `<div class="override-item">
      <label>${item.label}</label>
      <input type="number" id="ov-${item.key}" placeholder="default" min="0"
        oninput="onOverrideChange('${item.key}', this)">
    </div>`;
      });
      document.getElementById('override-grid').innerHTML = html;
    }
    buildOverrideGrid();

    function onOverrideChange(key, input) {
      const val = parseInt(input.value);
      if (!isNaN(val) && val > 0) {
        hargaOverrides[key] = val;
        input.classList.add('modified');
      } else {
        delete hargaOverrides[key];
        input.classList.remove('modified');
      }
      const count = Object.keys(hargaOverrides).length;
      document.getElementById('override-count').textContent = count + ' diubah';
    }

    function resetOverrides() {
      Object.keys(hargaOverrides).forEach(k => delete hargaOverrides[k]);
      OVERRIDE_ITEMS.forEach(item => {
        const el = document.getElementById('ov-' + item.key);
        if (el) { el.value = ''; el.classList.remove('modified'); }
      });
      document.getElementById('override-count').textContent = '0 diubah';
    }

    function toggleOverride() {
      const hdr = document.getElementById('override-hdr');
      const body = document.getElementById('override-body');
      hdr.classList.toggle('open');
      body.classList.toggle('show');
    }

    // Patch h() to respect overrides
    const _h_original = h;

    function h(kota, key) {
      if (hargaOverrides[key]) return hargaOverrides[key];
      return HARGA[key]?.harga?.[kota] || HARGA[key]?.harga?.daerah || 0;
    }
    function row(key, kota, qty, sat_override, note = '') {
      const item = HARGA[key];
      if (!item) return null;
      const satuan = sat_override || item.sat;
      const harga = h(kota, key);
      const total = harga * qty;
      return { key, nama: item.nama, qty, satuan, harga, total, note };
    }

    // ── RULE ENGINE
    function buildRAB(input) {
      const { kota, evType, duration, peserta, narasumber, moderator, mc, panitia,
        guestClass, vvip, vip, team, decorChips, decorStyle, seating } = input;

      const totalPeserta = peserta + vvip + vip;
      const hari = duration <= 4 ? 1 : Math.ceil(duration / 8);
      const isGala = evType === 'gala';
      const isFGD = evType === 'fgd';
      const isExpo = evType === 'expo';
      const hasVVIP = vvip > 0 || guestClass === 'vvip';
      const hasVIP = vip > 0 || ['vip', 'vvip', 'campuran'].includes(guestClass);
      const hasSnack = duration >= 2;
      const hasMakan = duration >= 4;

      // ── FORMASI OTOMATIS
      let formasi = seating;
      if (seating === 'auto') {
        if (isFGD || peserta <= 20) formasi = 'roundtable';
        else if (isGala) formasi = 'banquet';
        else if (['workshop', 'rapat'].includes(evType)) formasi = 'u-shape';
        else if (['seminar', 'konferensi', 'talkshow', 'panel'].includes(evType)) formasi = 'theater';
        else formasi = 'classroom';
      }

      // ── LUAS RUANGAN
      let luasMin, luasIdeal;
      const tp = totalPeserta;
      if (formasi === 'theater') { luasMin = tp * 0.8; luasIdeal = tp * 1.0; }
      else if (formasi === 'classroom') { luasMin = tp * 1.2; luasIdeal = tp * 1.5; }
      else if (formasi === 'roundtable') { luasMin = tp * 1.8; luasIdeal = tp * 2.2; }
      else if (formasi === 'u-shape') { luasMin = tp * 1.5; luasIdeal = tp * 1.8; }
      else if (formasi === 'banquet') { luasMin = tp * 1.4; luasIdeal = tp * 1.8; }
      else { luasMin = tp * 1.0; luasIdeal = tp * 1.3; }

      // ── PERALATAN AV
      const proyektorJml = peserta > 100 ? 2 : 1;
      const micNS = narasumber + moderator;
      const micPes = isFGD ? Math.ceil(peserta / 4) : formasi === 'roundtable' ? Math.ceil(peserta / 5) : 2;

      // ── KURSI & MEJA
      const kursiPesertaJml = peserta;
      const kursiVIPJml = vip;
      const kursiVVIPJml = vvip;
      const mejaPesertaJml = ['classroom', 'roundtable', 'u-shape'].includes(formasi) ? Math.ceil(peserta / 2) : 0;
      const mejaNSJml = narasumber + moderator > 0 ? 1 : 0;

      // ── DEKORASI SIZE
      const backdropW = Math.max(6, Math.ceil(narasumber * 1.2) + 2); // meter lebar
      const backdropH = 3;
      const spandukJml = hasVVIP ? 3 : 2;

      // ── BUILD ITEMS PER SECTION
      const sections = [];

      // == SEKSI 1: SEWA VENUE & RUANGAN ==
      const venue = [];
      venue.push(row('sewa_ruang', kota, hari, 'hari'));
      if (isExpo) venue.push({ key: 'partisi_ex', nama: 'Partisi Booth Expo (sewa)', qty: Math.ceil(totalPeserta / 10), satuan: 'panel/hari', harga: h(kota, 'partisi'), total: Math.ceil(totalPeserta / 10) * h(kota, 'partisi') * hari, note: 'estimasi 10 peserta per booth' });
      sections.push({ label: '🏛️ Sewa Venue & Ruangan', items: venue });

      // == SEKSI 2: PERALATAN AV & TEKNIS ==
      const av = [];
      av.push(row('proyektor', kota, proyektorJml * hari));
      av.push(row('screen_proyektor', kota, proyektorJml * hari));
      av.push(row('sound_system', kota, hari, 'paket/hari'));
      av.push(row('mic_podium', kota, micNS * hari, 'unit/hari', `${micNS} mic untuk narasumber & moderator`));
      av.push(row('mic_wireless', kota, micPes * hari, 'unit/hari', `floor mic peserta`));
      av.push(row('laptop_presentasi', kota, hari));
      if (team.includes('live_streaming')) av.push(row('streaming_kit', kota, hari, 'paket/hari'));
      if (team.includes('live_streaming')) av.push(row('switcher', kota, hari, 'unit/hari'));
      sections.push({ label: '📽️ Peralatan AV & Teknis', items: av });

      // == SEKSI 3: FURNITURE & LAYOUT ==
      const furn = [];
      furn.push(row('kursi_peserta', kota, kursiPesertaJml * hari, 'unit/hari'));
      if (mejaPesertaJml > 0) furn.push(row('meja_peserta', kota, mejaPesertaJml * hari, 'unit/hari'));
      if (mejaNSJml > 0) furn.push(row('meja_narasumber', kota, mejaNSJml * hari, 'unit/hari'));
      if (hasVIP && kursiVIPJml > 0) furn.push(row('kursi_vip', kota, kursiVIPJml * hari, 'unit/hari', 'kursi VIP'));
      if (hasVVIP && kursiVVIPJml > 0) furn.push({ ...row('kursi_vip', kota, kursiVVIPJml * hari, 'unit/hari'), nama: 'Kursi VVIP / Sofa Eksekutif (sewa)', harga: h(kota, 'kursi_vip') * 1.5, total: h(kota, 'kursi_vip') * 1.5 * kursiVVIPJml * hari, note: 'harga VVIP +50%' });
      if (evType !== 'gala') furn.push(row('podium', kota, hari));
      if (team.includes('registrasi')) furn.push(row('meja_registrasi', kota, 2 * hari, 'unit/hari', '2 meja registrasi'));
      if (decorChips.includes('karpet_merah') || hasVVIP) furn.push(row('karpet', kota, 10, 'm/hari', 'karpet merah protokol'));
      sections.push({ label: '🪑 Furniture & Tata Ruang', items: furn });

      // == SEKSI 4: DEKORASI ==
      const decor = [];
      decor.push({ ...row('backdrop', kota, backdropW * backdropH, 'm²'), nama: `Backdrop Utama ${backdropW}×${backdropH}m (produksi)`, note: `ukuran ${backdropW}×${backdropH} meter` });
      decor.push(row('spanduk', kota, spandukJml * 6, 'm²', `${spandukJml} spanduk @2×3m`));
      decor.push(row('meja_backdrop', kota, 1));
      if (decorChips.includes('standing_flower') || hasVVIP) decor.push(row('standing_flower', kota, hasVVIP ? 6 : 4, 'rangkaian'));
      if (decorChips.includes('table_flower') || isGala) decor.push(row('table_flower', kota, mejaNSJml + (isGala ? Math.ceil(totalPeserta / 8) : 2), 'rangkaian'));
      if (decorChips.includes('tanaman')) decor.push(row('tanaman_pot', kota, 6, 'pot'));
      if (decorChips.includes('photo_booth') || decorChips.includes('backdrop_foto')) decor.push(row('photo_booth', kota, 1, 'paket'));
      if (decorChips.includes('lampu_hias')) decor.push(row('lampu_hias', kota, 1, 'paket'));
      sections.push({ label: '🌸 Dekorasi & Properti', items: decor });

      // == SEKSI 5: SDM / HONORARIUM ==
      const sdm = [];
      sdm.push(row('narasumber_honor', kota, narasumber * hari));
      if (moderator > 0) sdm.push(row('moderator_honor', kota, moderator * hari));
      if (mc > 0) sdm.push(row('mc_honor', kota, mc * hari));
      sdm.push(row('panitia_honor', kota, panitia * hari));
      if (team.includes('asrot')) sdm.push(row('operator_honor', kota, 2 * hari, 'orang/hari', '2 operator teknis'));
      if (team.includes('fotografer')) sdm.push(row('fotografer_honor', kota, 1 * hari));
      if (team.includes('videografer')) sdm.push(row('videografer_honor', kota, 1 * hari));
      if (team.includes('interpreter')) sdm.push(row('interpreter_honor', kota, 1 * hari));
      if (team.includes('notulen')) sdm.push(row('notulen_honor', kota, 1 * hari));
      if (team.includes('keamanan')) sdm.push(row('keamanan_honor', kota, 3 * hari, 'orang/hari', '3 petugas keamanan'));
      sections.push({ label: '👤 SDM & Honorarium', items: sdm });

      // == SEKSI 6: KONSUMSI ==
      const konsumsi = [];
      const totalHadir = totalPeserta + narasumber + moderator + mc + panitia;
      if (hasSnack) {
        const sesiSnack = duration >= 8 ? 2 : 1;
        konsumsi.push({ ...row('snack', kota, totalHadir * sesiSnack, 'orang/sesi'), note: `${sesiSnack} sesi coffee break, ${totalHadir} orang` });
      }
      if (hasMakan && !isGala) konsumsi.push({ ...row('makan_siang', kota, totalHadir), note: `${totalHadir} orang` });
      if (isGala || hasVVIP) konsumsi.push({ ...row('makan_vip', kota, (vvip + vip + narasumber + moderator + mc) || 10), note: 'gala dinner / makan VVIP' });
      konsumsi.push(row('air_mineral', kota, hari, 'paket/hari'));
      if (team.includes('konsumsi')) {
        konsumsi.push({ key: 'konsumsi_tim', nama: 'Konsumsi Panitia & Tim Teknis', qty: panitia * hari, satuan: 'orang/hari', harga: h(kota, 'makan_siang') * 0.8, total: panitia * hari * h(kota, 'makan_siang') * 0.8, note: 'makan panitia & tim' });
      }
      sections.push({ label: '☕ Konsumsi & Catering', items: konsumsi });

      // == SEKSI 7: MATERI & CETAKAN ==
      const materi = [];
      materi.push(row('nametag', kota, totalHadir));
      materi.push(row('atk', kota, totalPeserta));
      if (['seminar', 'workshop', 'konferensi', 'fgd'].includes(evType)) materi.push(row('modul', kota, totalPeserta));
      if (['seminar', 'workshop', 'konferensi'].includes(evType)) materi.push(row('sertifikat', kota, totalPeserta));
      if (hasVVIP || hasVIP || isGala) materi.push(row('souvenir', kota, (vvip + vip) || 10));
      sections.push({ label: '📄 Materi & Perlengkapan Peserta', items: materi });

      // == SEKSI 8: TRANSPORTASI & LAIN ==
      const logistik = [];
      logistik.push(row('transportasi', kota, 1, 'paket'));
      if (team.includes('fotografer') || team.includes('videografer')) logistik.push(row('dokumentasi_edit', kota, 1, 'paket'));
      sections.push({ label: '🚛 Transportasi & Logistik', items: logistik });

      return {
        sections, formasi, luasMin: Math.round(luasMin), luasIdeal: Math.round(luasIdeal),
        proyektorJml, micNS, micPes, hari, totalHadir
      };
    }

    // ── FORMAT RUPIAH
    function rp(n) {
      return 'Rp ' + Math.round(n).toLocaleString('id-ID');
    }

    // ── MAIN GENERATE
    function generate() {
      const evType = document.getElementById('event-type').value;
      if (!evType) { alert('Pilih jenis acara dulu ya!'); return; }

      const kota = document.getElementById('event-kota').value;
      const duration = parseInt(document.getElementById('event-duration').value);
      const seating = document.getElementById('seating-pref').value;
      const vvipN = parseInt(document.getElementById('count-vvip').value) || 0;
      const vipN = parseInt(document.getElementById('count-vip').value) || 0;
      // Validasi: kalau pilih VIP/VVIP tapi count 0, set minimal 1
      if (guestClass === 'vvip' && vvipN === 0) {
        alert('Jumlah tamu VVIP harus diisi minimal 1 orang!'); return;
      }
      if (guestClass === 'vip' && vipN === 0) {
        alert('Jumlah tamu VIP harus diisi minimal 1 orang!'); return;
      }
      if (guestClass === 'campuran' && vvipN === 0 && vipN === 0) {
        alert('Untuk kelas Campuran, isi minimal jumlah VVIP atau VIP!'); return;
      }
      const team = getChips('team-chips');
      const decorChips = getChips('decor-chips');

      // Sync C dari input fields (in case user typed directly)
      ['peserta', 'narasumber', 'moderator', 'mc', 'panitia'].forEach(k => {
        const el = document.getElementById('v-' + k);
        if (el) { const min = k === 'peserta' ? 5 : 0; C[k] = Math.max(min, parseInt(el.value) || 0); el.value = C[k]; }
      });

      const input = {
        kota, evType, duration,
        peserta: C.peserta,
        narasumber: C.narasumber,
        moderator: C.moderator,
        mc: C.mc,
        panitia: C.panitia,
        guestClass, vvip: vvipN, vip: vipN,
        team, decorChips,
        decorStyle: document.getElementById('decor-style').value,
        seating,
      };

      const { sections, formasi, luasMin, luasIdeal, proyektorJml, micNS, micPes, hari, totalHadir } = buildRAB(input);

      const evLabels = { seminar: 'Seminar', workshop: 'Workshop', fgd: 'FGD', panel: 'Panel Discussion', expo: 'Expo/Pameran', konferensi: 'Konferensi', talkshow: 'Talkshow', rapat: 'Rapat Koordinasi', webinar: 'Webinar/Hybrid', gala: 'Gala Dinner' };
      const gcLabels = { reguler: 'Tamu Reguler', vip: 'Tamu VIP', vvip: 'Tamu VVIP', campuran: 'Campuran VVIP/VIP/Reguler' };
      const kotaLabel = kota.charAt(0).toUpperCase() + kota.slice(1);
      const eventName = document.getElementById('event-name').value || evLabels[evType];

      document.getElementById('result-title').textContent = eventName;
      document.getElementById('badge-type').textContent = evLabels[evType];
      document.getElementById('badge-class').textContent = gcLabels[guestClass];

      // Summary
      const totalPax = C.peserta + vvipN + vipN;
      document.getElementById('summary-row').innerHTML = [
        { icon: '👥', val: totalPax + ' orang', key: 'Total Peserta' },
        { icon: '📅', val: hari + ' hari', key: 'Durasi Pelaksanaan' },
        { icon: '📐', val: luasMin + '–' + luasIdeal + ' m²', key: 'Luas Ruangan' },
        { icon: '📽️', val: proyektorJml + ' unit', key: 'Proyektor' },
        { icon: '🎙️', val: micNS + ' unit', key: 'Mic Narasumber' },
        { icon: '🎤', val: micPes + ' unit', key: 'Floor Mic' },
      ].map(s => `<div class="stat-card"><div class="stat-icon">${s.icon}</div><div class="stat-val">${s.val}</div><div class="stat-key">${s.key}</div></div>`).join('');

      // Layout info
      const formasiLabel = { theater: 'Theater / Bioskop', classroom: 'Classroom / Kelas', roundtable: 'Round Table / FGD', 'u-shape': 'U-Shape', banquet: 'Banquet / Meja Bundar' };
      document.getElementById('layout-info-grid').innerHTML = [
        ['Formasi Duduk', formasiLabel[formasi] || formasi],
        ['Luas Minimal', luasMin + ' m²'],
        ['Luas Ideal', luasIdeal + ' m²'],
        ['Proyektor', proyektorJml + ' unit'],
        ['Mic Narasumber', micNS + ' unit (clip/condenser)'],
        ['Floor Mic Peserta', micPes + ' unit'],
        ['Backdrop Utama', 'Diperlukan'],
        ['Referensi Harga', 'Standar Biaya Masukan Kemenkeu 2024 — ' + kotaLabel],
      ].map(([k, v]) => `<div class="linfo-item"><span>${k}:</span><strong>${v}</strong></div>`).join('');
      // RAB
      let grandTotal = 0;
      let rabHTML = '';
      sections.forEach((sec, si) => {
        const secTotal = sec.items.reduce((a, b) => a + b.total, 0);
        grandTotal += secTotal;
        rabHTML += `
    <div class="rab-wrap" style="margin-bottom:10px">
      <div class="rab-section-hdr open" onclick="toggleSection(this)">
        <div class="rab-section-title">${sec.label}</div>
        <div class="rab-section-total">${rp(secTotal)}</div>
        <div class="rab-section-arrow">▼</div>
      </div>
      <div class="rab-body show">
        <table>
          <thead><tr>
            <th style="width:36%">Uraian</th>
            <th style="width:8%">Vol</th>
            <th style="width:14%">Satuan</th>
            <th style="width:18%">Harga Satuan</th>
            <th style="width:18%">Total</th>
          </tr></thead>
          <tbody>
            ${sec.items.map(it => `
              <tr>
                <td>
                  ${it.nama}
                  ${it.note ? `<div class="td-note">${it.note}</div>` : ''}
                </td>
                <td class="td-num">${it.qty}</td>
                <td class="td-sat">${it.satuan}</td>
                <td class="td-harga">${rp(it.harga)}</td>
                <td>${rp(it.total)}</td>
              </tr>`).join('')}
          </tbody>
          <tfoot><tr><td colspan="4">Subtotal ${sec.label}</td><td>${rp(secTotal)}</td></tr></tfoot>
        </table>
      </div>
    </div>`;
      });
      document.getElementById('rab-container').innerHTML = rabHTML;

      // PPN 11% note
      const ppn = grandTotal * 0.11;
      document.getElementById('gt-val').textContent = rp(grandTotal);
      document.getElementById('gt-sub').textContent = `Belum termasuk PPN 11% (${rp(ppn)}) • Total+PPN: ${rp(grandTotal + ppn)} • Referensi: SBM Kemenkeu 2024 & e-Katalog LKPP — ${kotaLabel}`;

      // Checklist
      buildChecklist(input, formasi);

      document.getElementById('result').classList.add('show');
      document.getElementById('result').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function toggleSection(hdr) {
      hdr.classList.toggle('open');
      hdr.nextElementSibling.classList.toggle('show');
    }

    // ── CHECKLIST
    function buildChecklist(input, formasi) {
      const { evType, team, vvip, vip, guestClass, duration } = input;
      const hasVVIP = vvip > 0 || guestClass === 'vvip';
      const hasVIP = vip > 0 || ['vip', 'vvip', 'campuran'].includes(guestClass);
      const hari = duration <= 4 ? 1 : Math.ceil(duration / 8);

      const groups = {
        'H-14 (2 Minggu Sebelum)': [
          'Konfirmasi booking venue & jadwal',
          'Kirim undangan & konfirmasi narasumber',
          'Finalisasi rundown acara',
          'Order backdrop & spanduk ke vendor',
          hasVVIP ? 'Koordinasi protokol VVIP dengan pihak keamanan' : null,
          hasVVIP ? 'Siapkan jalur akses khusus VVIP' : null,
        ],
        'H-7 (1 Minggu Sebelum)': [
          'Konfirmasi jumlah peserta final',
          'Order konsumsi ke catering',
          'Konfirmasi seluruh vendor AV & dekorasi',
          'Cetak materi, modul & sertifikat',
          'Cetak name tag & ID card peserta',
          team.includes('live_streaming') ? 'Test koneksi internet & streaming setup' : null,
          'Siapkan ATK & goodie bag peserta',
        ],
        'H-1 (Hari Sebelum)': [
          'Cek kondisi ruangan & layout furniture',
          'Pasang backdrop, spanduk & dekorasi',
          'Test semua peralatan AV (mic, proyektor, sound)',
          team.includes('live_streaming') ? 'Test livestream end-to-end' : null,
          'Briefing seluruh panitia & vendor',
          hasVVIP ? 'Konfirmasi ulang rundown protokol VVIP' : null,
          'Persiapkan meja registrasi & sistem absensi',
        ],
        'Hari H — Pagi': [
          'Arrive H-2 jam sebelum acara',
          'Final check AV & sound',
          'Dekorasi standing flower & bunga meja',
          'Siapkan konsumsi coffee break pertama',
          hasVVIP ? 'Posisikan petugas protokol & keamanan VVIP' : null,
          'Buka meja registrasi H-1 jam',
          team.includes('fotografer') ? 'Briefing fotografer & videografer' : null,
        ],
        'Hari H — Selama Acara': [
          'Monitor mic & sound selama sesi',
          'Catat absensi & tanda tangan peserta',
          team.includes('notulen') ? 'Notulen aktif mencatat poin diskusi' : null,
          'Distribusi konsumsi tepat waktu',
          hari > 1 ? 'Koordinasi setup ulang untuk hari berikutnya' : null,
        ],
        'Pasca Acara': [
          'Distribusi sertifikat ke peserta',
          'Kumpulkan evaluasi / feedback form',
          'Pengembalian peralatan sewa',
          team.includes('fotografer') || team.includes('videografer') ? 'Terima & review hasil dokumentasi' : null,
          'Buat laporan pertanggungjawaban (LPJ)',
          'Arsipkan dokumen RAB & kwitansi vendor',
        ],
      };

      let html = '';
      for (const [cat, items] of Object.entries(groups)) {
        const filteredItems = items.filter(Boolean);
        if (!filteredItems.length) continue;
        html += `<div class="cl-group">
      <div class="cl-cat">${cat}</div>
      ${filteredItems.map((it, idx) => `
        <div class="cl-item" id="cli-${cat.replace(/\s/g, '-')}-${idx}">
          <div class="cl-check" onclick="toggleCL(this)"></div>
          <div class="cl-text">${it}</div>
          <div class="cl-pic-wrap">
            <span class="cl-pic-label">PIC:</span>
            <input class="cl-pic-input" type="text" placeholder="Nama PIC..." onclick="event.stopPropagation()">
          </div>
        </div>`).join('')}
    </div>`;
      }
      document.getElementById('checklist').innerHTML = html;
    }

    // ── DISCLAIMER ACCORDION
    let disclaimerOpen = true;
    function toggleDisclaimer() {
      disclaimerOpen = !disclaimerOpen;
      const body = document.getElementById('disclaimer-body');
      const arrow = document.getElementById('disclaimer-arrow');
      body.style.display = disclaimerOpen ? '' : 'none';
      arrow.style.transform = disclaimerOpen ? 'rotate(0deg)' : 'rotate(-90deg)';
    }

    // ── CHECKLIST TOGGLE (klik check saja, bukan seluruh row)
    function toggleCL(checkEl) {
      checkEl.closest('.cl-item').classList.toggle('done');
    }

    // ── COUNTER CSS untuk input
    // ── COPY RAB
    function copyRAB() {
      const rows = [...document.querySelectorAll('tbody tr')];
      let txt = 'RENCANA ANGGARAN BIAYA (RAB)\n';
      txt += document.getElementById('result-title').textContent + '\n';
      txt += '='.repeat(80) + '\n';
      txt += ['No', 'Uraian', 'Vol', 'Satuan', 'Harga Satuan', 'Total'].join('\t') + '\n';
      txt += '-'.repeat(80) + '\n';
      rows.forEach((tr, i) => {
        const cells = [...tr.querySelectorAll('td')].map(td => td.innerText.trim().replace(/\n/g, ' '));
        txt += [(i + 1), ...cells].join('\t') + '\n';
      });
      txt += '='.repeat(80) + '\n';
      txt += 'GRAND TOTAL\t\t\t\t' + document.getElementById('gt-val').textContent + '\n';
      txt += document.getElementById('gt-sub').textContent + '\n';
      navigator.clipboard.writeText(txt).then(() => alert('RAB berhasil di-copy! ✅'));
    }
