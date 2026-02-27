import { useState } from 'react';

const rp = (n) => 'Rp ' + Math.round(n).toLocaleString('id-ID');

export default function RABResult({ result, eventName, kotaLabel, eventTypeLabel, guestClassLabel, onNavigateToChecklist, onReset, onRemoveItem }) {
    const [copySuccess, setCopySuccess] = useState(false);

    if (!result) return null;

    const { sections, formasi, luasMin, luasIdeal, proyektorJml, micNS, micPes, hari, totalHadir, mixedSeating } = result;
    const formasiLabel = {
        theater: 'Theater / Bioskop',
        classroom: 'Classroom / Kelas',
        roundtable: 'Round Table / FGD',
        'u-shape': 'U-Shape',
        banquet: 'Banquet / Meja Bundar'
    };

    const mixedSeatingLabel = {
        mixed_roundtable: 'Round Table Mix (VVIP/VIP terpisah)',
        mixed_sofa_lounge: 'Sofa Lounge + Kursi (VIP di terdepan)',
        mixed_banquet: 'Banquet Mix (Head Table VIP/VVIP)',
        mixed_cabaret: 'Cabaret Mix (Cluster, VIP di depan)',
        mixed_ushape_plus: 'U-Shape + Pax (VIP di dalam U)',
    };

    const grandTotal = sections.reduce((acc, sec) => acc + sec.items.reduce((a, b) => a + b.total, 0), 0);
    const ppn = grandTotal * 0.11;

    const copyRAB = () => {
        let txt = 'RENCANA ANGGARAN BIAYA (RAB)\n';
        txt += eventName + '\n';
        txt += '='.repeat(80) + '\n';
        txt += ['No', 'Uraian', 'Vol', 'Satuan', 'Harga Satuan', 'Total'].join('\t') + '\n';
        txt += '-'.repeat(80) + '\n';
        let rowIdx = 1;
        sections.forEach(sec => {
            sec.items.forEach(it => {
                txt += [rowIdx++, it.nama + (it.note ? ` (${it.note})` : ''), it.qty, it.satuan, rp(it.harga), rp(it.total)].join('\t') + '\n';
            });
        });
        txt += '='.repeat(80) + '\n';
        txt += 'GRAND TOTAL\t\t\t\t' + rp(grandTotal) + '\n';
        txt += `Belum termasuk PPN 11% (${rp(ppn)}) • Total+PPN: ${rp(grandTotal + ppn)}\n`;
        txt += `Referensi: PMK 32/2025 tentang SBM TA 2026\n`;
        navigator.clipboard.writeText(txt)
            .then(() => {
                setCopySuccess(true);
                setTimeout(() => setCopySuccess(false), 2500);
            })
            .catch(err => console.error(err));
    };

    return (
        <div id="result" className="show">
            <div className="result-hdr" style={{ marginBottom: '20px' }}>
                <div className="result-title" id="result-title">{eventName}</div>
                <div className="result-meta">
                    <span className="badge badge-accent" id="badge-location">{kotaLabel}</span>
                    <span className="badge badge-gold" id="badge-type">{eventTypeLabel}</span>
                    <span className="badge badge-silver" id="badge-class">{guestClassLabel}</span>
                </div>
            </div>

            <div className="summary-row" id="summary-row">
                <div className="stat-card"><div className="stat-icon">👥</div><div className="stat-val">{totalHadir} orang</div><div className="stat-key">Total Peserta &amp; Tim</div></div>
                <div className="stat-card"><div className="stat-icon">📅</div><div className="stat-val">{hari} hari</div><div className="stat-key">Durasi Pelaksanaan</div></div>
                <div className="stat-card"><div className="stat-icon">📐</div><div className="stat-val">{luasMin}–{luasIdeal} m²</div><div className="stat-key">Luas Ruangan</div></div>
                <div className="stat-card"><div className="stat-icon">📽️</div><div className="stat-val">{proyektorJml} unit</div><div className="stat-key">Proyektor</div></div>
                <div className="stat-card"><div className="stat-icon">🎙️</div><div className="stat-val">{micNS} unit</div><div className="stat-key">Mic Narasumber</div></div>
                <div className="stat-card"><div className="stat-icon">🎤</div><div className="stat-val">{micPes} unit</div><div className="stat-key">Floor Mic</div></div>
            </div>

            <div className="layout-info">
                <div className="layout-info-title">📋 Parameter Setup Ruangan &amp; Harga</div>
                <div className="layout-info-grid">
                    <div className="linfo-item"><span>Formasi Duduk:</span><strong>{formasiLabel[formasi] || formasi}</strong></div>
                    {mixedSeating && (
                        <div className="linfo-item"><span>Formasi Campuran:</span><strong>{mixedSeatingLabel[mixedSeating] || mixedSeating}</strong></div>
                    )}
                    <div className="linfo-item"><span>Luas Minimal:</span><strong>{luasMin} m²</strong></div>
                    <div className="linfo-item"><span>Luas Ideal:</span><strong>{luasIdeal} m²</strong></div>
                    <div className="linfo-item"><span>Proyektor:</span><strong>{proyektorJml} unit</strong></div>
                    <div className="linfo-item"><span>Mic Narasumber:</span><strong>{micNS} unit (clip/condenser)</strong></div>
                    <div className="linfo-item"><span>Floor Mic Peserta:</span><strong>{micPes} unit</strong></div>
                    <div className="linfo-item"><span>Backdrop Utama:</span><strong>Diperlukan</strong></div>
                </div>
            </div>

            <div id="rab-container">
                {sections.map((sec, idx) => (
                    <RABSection key={idx} section={sec} onRemoveItem={onRemoveItem} />
                ))}
            </div>

            <div className="grand-total" style={{ marginTop: '20px' }}>
                <div className="gt-left">
                    <div className="gt-label">Total Estimasi RAB</div>
                    <div className="gt-sub" id="gt-sub">
                        Belum termasuk PPN 11% ({rp(ppn)}) • Total+PPN: {rp(grandTotal + ppn)}<br />
                        Referensi: PMK 32/2025 tentang SBM TA 2026 — {kotaLabel}
                    </div>
                </div>
                <div className="gt-val" id="gt-val">{rp(grandTotal)}</div>
            </div>

            {/* Checklist CTA banner */}
            {onNavigateToChecklist && (
                <div
                    onClick={onNavigateToChecklist}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onNavigateToChecklist(); } }}
                    style={{
                        marginTop: '24px', padding: '16px 20px',
                        background: 'linear-gradient(135deg, rgba(34,197,94,0.08) 0%, rgba(34,197,94,0.03) 100%)',
                        border: '1.5px solid rgba(34,197,94,0.25)', borderRadius: '12px',
                        display: 'flex', alignItems: 'center', gap: '12px',
                        cursor: 'pointer', transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(34,197,94,0.5)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(34,197,94,0.25)'}
                >
                    <span style={{ fontSize: '24px' }}>✅</span>
                    <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '14px', fontWeight: 700, color: '#16a34a', marginBottom: '2px' }}>
                            Checklist Persiapan Otomatis Sudah Siap!
                        </div>
                        <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                            Klik untuk melihat detail checklist lengkap per timeline — H-14, H-7, H-1, Hari H, dan Pasca Acara
                        </div>
                    </div>
                    <span style={{ fontSize: '18px', color: '#16a34a' }}>→</span>
                </div>
            )}

            {/* Copy success toast */}
            {copySuccess && (
                <div className="copy-toast" role="status" aria-live="polite">
                    ✅ RAB berhasil di-copy ke clipboard!
                </div>
            )}

            <div className="claude-btn-container">
                <button className="claude-btn claude-btn-secondary" onClick={copyRAB}>
                    <span style={{ fontSize: '16px' }}>📋</span> Copy Tabel RAB
                </button>
                <button className="claude-btn claude-btn-secondary" onClick={onReset}>
                    <span style={{ fontSize: '16px' }}>🔄</span> Reset Data
                </button>
                <button className="claude-btn claude-btn-primary" onClick={() => window.print()}>
                    <span style={{ fontSize: '16px' }}>🖨️</span> Save as PDF (RAB)
                </button>
            </div>
        </div>
    );
}

function RABSection({ section, onRemoveItem }) {
    const [open, setOpen] = useState(true);
    const secTotal = section.items.reduce((a, b) => a + b.total, 0);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setOpen(v => !v);
        }
    };

    return (
        <div className="rab-wrap">
            <div
                className={`rab-section-hdr ${open ? 'open' : ''}`}
                onClick={() => setOpen(!open)}
                onKeyDown={handleKeyDown}
                role="button"
                aria-expanded={open}
                tabIndex={0}
            >
                <div className="rab-section-title">{section.label}</div>
                <div className="rab-section-total">{rp(secTotal)}</div>
                <div className="rab-section-arrow">▼</div>
            </div>
            <div className={`rab-body ${open ? 'show' : ''}`}>
                <div className="table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th style={{ width: '28%' }}>Uraian</th>
                                <th style={{ width: '10%' }}>Vol</th>
                                <th style={{ width: '15%' }}>Satuan</th>
                                <th style={{ width: '21%' }}>Harga Satuan</th>
                                <th style={{ width: '22%' }}>Total</th>
                                <th style={{ width: '4%' }}></th>
                            </tr>
                        </thead>
                        <tbody>
                            {section.items.map((it, i) => (
                                <tr key={it.key || i} className="rab-row">
                                    <td>
                                        {it.nama}
                                        {it.note && <div className="td-note">{it.note}</div>}
                                    </td>
                                    <td className="td-num">{it.qty}</td>
                                    <td className="td-sat">{it.satuan}</td>
                                    <td className="td-harga">{rp(it.harga)}</td>
                                    <td>{rp(it.total)}</td>
                                    <td className="td-del">
                                        <button
                                            className="del-btn"
                                            onClick={() => onRemoveItem && onRemoveItem(it.key)}
                                            title="Hapus item ini dari RAB"
                                            aria-label={`Hapus ${it.nama}`}
                                        >
                                            🗑️
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="4">Subtotal {section.label}</td>
                                <td colSpan="2">{rp(secTotal)}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    );
}
