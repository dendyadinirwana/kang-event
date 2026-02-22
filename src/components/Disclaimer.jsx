import { useState } from 'react';

export default function Disclaimer() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="disclaimer">
            <div
                className="disclaimer-title"
                onClick={() => setIsOpen(!isOpen)}
                style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
                <span>⚠️ Perhatian — Status Referensi Harga</span>
                <span
                    style={{
                        fontSize: '11px',
                        color: '#92400e',
                        transition: 'transform .2s',
                        display: 'inline-block',
                        transform: isOpen ? 'rotate(180deg)' : 'none'
                    }}
                >
                    ▼
                </span>
            </div>
            {isOpen && (
                <div className="disclaimer-body" style={{ marginTop: '8px' }}>
                    Harga dalam tool ini adalah <strong>estimasi pasar</strong>, bukan angka resmi dari dokumen SBM. Pastikan diverifikasi ke sumber resmi sebelum digunakan untuk dokumen anggaran negara:
                    <ul>
                        <li><strong>Instansi Pemerintah (RKA-K/L):</strong> Wajib mengacu pada <strong>PMK 32/2025 tentang SBM TA 2026</strong> — download di <a href="https://jdih.kemenkeu.go.id" target="_blank" rel="noreferrer">jdih.kemenkeu.go.id</a></li>
                        <li><strong>Pengadaan Barang/Jasa:</strong> Cek harga e-Katalog di <a href="https://e-katalog.lkpp.go.id" target="_blank" rel="noreferrer">e-katalog.lkpp.go.id</a></li>
                        <li><strong>Swasta / Non-APBN:</strong> Lakukan survei harga pasar lokal</li>
                    </ul>
                    Bisa <strong>override harga satuan</strong> di panel di bawah ini (opsional) sesuai SBM atau hasil survei.
                </div>
            )}
        </div>
    );
}
