import { useState, useRef } from 'react';

// Format Rupiah helper
const rp = (n) => 'Rp ' + Math.round(n).toLocaleString('id-ID');

export default function RABResult({ result, checklist, eventName, kotaLabel, eventTypeLabel, guestClassLabel }) {
    if (!result) return null;

    const { sections, formasi, luasMin, luasIdeal, proyektorJml, micNS, micPes, hari, totalHadir } = result;
    const formasiLabel = {
        theater: 'Theater / Bioskop',
        classroom: 'Classroom / Kelas',
        roundtable: 'Round Table / FGD',
        'u-shape': 'U-Shape',
        banquet: 'Banquet / Meja Bundar'
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
        navigator.clipboard.writeText(txt).then(() => alert('RAB berhasil di-copy! ✅')).catch(err => console.error(err));
    };

    return (
        <div id="result" className="show">
            <div className="result-hdr">
                <div className="result-title" id="result-title">{eventName}</div>
                <div className="result-meta">
                    <span className="badge badge-accent" id="badge-type">{eventTypeLabel}</span>
                    <span className="badge badge-gold" id="badge-class">{guestClassLabel}</span>
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
                    <div className="linfo-item"><span>Luas Minimal:</span><strong>{luasMin} m²</strong></div>
                    <div className="linfo-item"><span>Luas Ideal:</span><strong>{luasIdeal} m²</strong></div>
                    <div className="linfo-item"><span>Proyektor:</span><strong>{proyektorJml} unit</strong></div>
                    <div className="linfo-item"><span>Mic Narasumber:</span><strong>{micNS} unit (clip/condenser)</strong></div>
                    <div className="linfo-item"><span>Floor Mic Peserta:</span><strong>{micPes} unit</strong></div>
                    <div className="linfo-item"><span>Backdrop Utama:</span><strong>Diperlukan</strong></div>
                    <div className="linfo-item"><span>Referensi Harga:</span><strong>Standar Biaya Masukan Kemenkeu 2026 — {kotaLabel}</strong></div>
                </div>
            </div>

            <div id="rab-container">
                {sections.map((sec, idx) => (
                    <RABSection key={idx} section={sec} />
                ))}
            </div>

            <div className="grand-total" style={{ marginTop: '20px' }}>
                <div className="gt-left">
                    <div className="gt-label">Total Estimasi RAB</div>
                    <div className="gt-sub" id="gt-sub">Belum termasuk PPN 11% ({rp(ppn)}) • Total+PPN: {rp(grandTotal + ppn)}<br />Referensi: SBM Kemenkeu &amp; e-Katalog LKPP — {kotaLabel}</div>
                </div>
                <div className="gt-val" id="gt-val">{rp(grandTotal)}</div>
            </div>

            <h3 style={{ fontSize: '15px', marginTop: '36px', marginBottom: '16px' }}>
                <span className="icon">✅</span> Checklist Persiapan Otomatis
            </h3>

            <div id="checklist">
                {checklist.map((group, gIdx) => (
                    <div className="cl-group" key={gIdx}>
                        <div className="cl-cat">{group.cat}</div>
                        {group.items.map((it, iIdx) => (
                            <ChecklistItem key={iIdx} text={it} />
                        ))}
                    </div>
                ))}
            </div>

            <div className="claude-btn-container">
                <button className="claude-btn claude-btn-secondary" onClick={copyRAB}>
                    <span style={{ fontSize: '16px' }}>📋</span> Copy Tabel RAB
                </button>
                <button className="claude-btn claude-btn-secondary" onClick={() => window.location.reload()}>
                    <span style={{ fontSize: '16px' }}>🔄</span> Reset Data
                </button>
                <button className="claude-btn claude-btn-primary" onClick={() => window.print()}>
                    <span style={{ fontSize: '16px' }}>🖨️</span> Save as PDF
                </button>
            </div>

        </div>
    );
}

function RABSection({ section }) {
    const [open, setOpen] = useState(true);
    const secTotal = section.items.reduce((a, b) => a + b.total, 0);

    return (
        <div className="rab-wrap">
            <div className={`rab-section-hdr ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
                <div className="rab-section-title">{section.label}</div>
                <div className="rab-section-total">{rp(secTotal)}</div>
                <div className="rab-section-arrow">▼</div>
            </div>
            <div className={`rab-body ${open ? 'show' : ''}`}>
                <table>
                    <thead>
                        <tr>
                            <th style={{ width: '36%' }}>Uraian</th>
                            <th style={{ width: '8%' }}>Vol</th>
                            <th style={{ width: '14%' }}>Satuan</th>
                            <th style={{ width: '18%' }}>Harga Satuan</th>
                            <th style={{ width: '18%' }}>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {section.items.map((it, i) => (
                            <tr key={i}>
                                <td>
                                    {it.nama}
                                    {it.note && <div className="td-note">{it.note}</div>}
                                </td>
                                <td className="td-num">{it.qty}</td>
                                <td className="td-sat">{it.satuan}</td>
                                <td className="td-harga">{rp(it.harga)}</td>
                                <td>{rp(it.total)}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="4">Subtotal {section.label}</td>
                            <td>{rp(secTotal)}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}

function ChecklistItem({ text }) {
    const [done, setDone] = useState(false);

    return (
        <div className={`cl-item ${done ? 'done' : ''}`} onClick={() => setDone(!done)} style={{ cursor: 'pointer' }}>
            <div className="cl-check"></div>
            <div className="cl-text">{text}</div>
            <div className="cl-pic-wrap">
                <span className="cl-pic-label" style={{ fontSize: '10px', color: 'var(--text-muted)' }}>PIC:</span>
                <input
                    className="cl-pic-input"
                    type="text"
                    placeholder="Nama PIC..."
                    onClick={(e) => e.stopPropagation()}
                    style={{
                        border: 'none',
                        background: 'transparent',
                        borderBottom: '1px dashed var(--border)',
                        outline: 'none',
                        fontSize: '11px',
                        marginLeft: '4px',
                        width: '80px'
                    }}
                />
            </div>
        </div>
    );
}
