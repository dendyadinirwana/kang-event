import { useState } from 'react';

export default function ChecklistPage({ checklist, inputData, eventName, kotaLabel, onSwitchToSimulasi }) {
    const [doneState, setDoneState] = useState({});
    const [picState, setPicState] = useState({});

    const toggleDone = (gIdx, iIdx) => {
        const k = `${gIdx}-${iIdx}`;
        setDoneState(prev => ({ ...prev, [k]: !prev[k] }));
    };
    const setPIC = (gIdx, iIdx, val) => {
        const k = `${gIdx}-${iIdx}`;
        setPicState(prev => ({ ...prev, [k]: val }));
    };

    const totalItems = (checklist || []).reduce((s, g) => s + g.items.length, 0);
    const doneCount = Object.values(doneState).filter(Boolean).length;
    const progress = totalItems > 0 ? Math.round((doneCount / totalItems) * 100) : 0;

    if (!checklist || checklist.length === 0) {
        return (
            <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>📋</div>
                <h2 style={{ fontSize: '18px', color: 'var(--text-muted)', marginBottom: '8px' }}>Belum ada checklist</h2>
                <p style={{ fontSize: '14px', color: 'var(--text-dim)', marginBottom: '24px' }}>
                    Jalankan simulasi kegiatan terlebih dahulu untuk menghasilkan checklist persiapan otomatis.
                </p>
                {onSwitchToSimulasi && (
                    <button
                        className="claude-btn claude-btn-primary"
                        onClick={onSwitchToSimulasi}
                        style={{ margin: '0 auto' }}
                    >
                        <span>✨</span> Mulai Simulasi
                    </button>
                )}
            </div>
        );
    }

    return (
        <div id="checklist-page">
            {/* Info input context */}
            {inputData && (
                <div className="layout-info no-print" style={{ marginBottom: '20px' }}>
                    <div className="layout-info-title">📋 Detail Kegiatan</div>
                    <div className="layout-info-grid">
                        <div className="linfo-item"><span>Jenis Acara:</span><strong>{inputData.eventType}</strong></div>
                        <div className="linfo-item"><span>Lokasi:</span><strong>{kotaLabel}</strong></div>
                        <div className="linfo-item"><span>Peserta:</span><strong>{inputData.peserta} orang</strong></div>
                        <div className="linfo-item"><span>Panitia:</span><strong>{inputData.panitia} orang</strong></div>
                        <div className="linfo-item"><span>Narasumber:</span><strong>{inputData.narasumber} orang</strong></div>
                        <div className="linfo-item"><span>Durasi:</span><strong>{inputData.duration} jam</strong></div>
                    </div>
                </div>
            )}

            {/* Header */}
            <div className="result-hdr" style={{ marginBottom: '20px' }}>
                <div className="result-title">{eventName || 'Checklist Persiapan'}</div>
                <div className="result-meta">
                    {kotaLabel && <span className="badge badge-accent">{kotaLabel}</span>}
                    {inputData?.eventType && (
                        <span className="badge badge-gold">{inputData.eventType}</span>
                    )}
                </div>
            </div>

            {/* Progress bar */}
            <div className="card" style={{ marginBottom: '20px', padding: '16px 20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)' }}>
                        Progress Persiapan
                    </span>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: progress === 100 ? '#22c55e' : 'var(--accent)' }}>
                        {doneCount}/{totalItems} selesai ({progress}%)
                    </span>
                </div>
                <div
                    style={{ height: '8px', background: 'var(--surface2)', borderRadius: '4px', overflow: 'hidden' }}
                    role="progressbar"
                    aria-valuenow={progress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label="Progress persiapan kegiatan"
                >
                    <div style={{
                        height: '100%',
                        width: `${progress}%`,
                        background: progress === 100 ? '#22c55e' : 'var(--accent)',
                        borderRadius: '4px',
                        transition: 'width 0.4s ease',
                    }} />
                </div>
            </div>

            {/* Checklist groups */}
            <div id="checklist-content">
                {checklist.map((group, gIdx) => (
                    <ChecklistGroup
                        key={gIdx}
                        group={group}
                        gIdx={gIdx}
                        doneState={doneState}
                        picState={picState}
                        onToggle={toggleDone}
                        onPIC={setPIC}
                    />
                ))}
            </div>

            {/* Action buttons */}
            <div className="claude-btn-container no-print" style={{ marginTop: '24px' }}>
                <button
                    className="claude-btn claude-btn-secondary"
                    onClick={() => {
                        setDoneState({});
                        setPicState({});
                    }}
                >
                    <span>🔄</span> Reset Progress
                </button>
                <button
                    className="claude-btn claude-btn-primary"
                    onClick={() => window.print()}
                >
                    <span>🖨️</span> Save as PDF / Cetak
                </button>
            </div>

        </div>
    );
}

function ChecklistGroup({ group, gIdx, doneState, picState, onToggle, onPIC }) {
    const [open, setOpen] = useState(true);
    const total = group.items.length;
    const done = group.items.filter((_, iIdx) => doneState[`${gIdx}-${iIdx}`]).length;

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setOpen(v => !v);
        }
    };

    return (
        <div className="cl-group" style={{ marginBottom: '12px' }}>
            <div
                className="cl-cat"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}
                onClick={() => setOpen(!open)}
                onKeyDown={handleKeyDown}
                role="button"
                aria-expanded={open}
                tabIndex={0}
            >
                <span>{group.cat}</span>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <span style={{ fontSize: '11px', color: done === total ? '#22c55e' : 'var(--text-dim)' }}>
                        {done}/{total}
                    </span>
                    <span style={{ fontSize: '12px', color: 'var(--text-dim)', transform: open ? 'rotate(180deg)' : '', transition: 'transform 0.2s' }}>▼</span>
                </div>
            </div>

            {open && group.items.map((item, iIdx) => {
                const key = `${gIdx}-${iIdx}`;
                const isDone = !!doneState[key];
                const text = typeof item === 'string' ? item : item.text;
                const detail = typeof item === 'object' ? item.detail : null;
                const vendor = typeof item === 'object' ? item.vendor : null;

                return (
                    <div
                        key={iIdx}
                        className={`cl-item ${isDone ? 'done' : ''}`}
                        style={{ cursor: 'pointer' }}
                        onClick={() => onToggle(gIdx, iIdx)}
                        role="checkbox"
                        aria-checked={isDone}
                        tabIndex={0}
                        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onToggle(gIdx, iIdx); } }}
                    >
                        <div className="cl-check" />
                        <div style={{ flex: 1 }}>
                            <div className="cl-text">{text}</div>
                            {detail && (
                                <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px', lineHeight: 1.4 }}>
                                    {detail}
                                </div>
                            )}
                            {vendor && (
                                <div style={{ fontSize: '10px', color: 'var(--text-dim)', marginTop: '2px' }}>
                                    📌 Vendor/PIC: {vendor}
                                </div>
                            )}
                        </div>
                        <div className="cl-pic-wrap" onClick={e => e.stopPropagation()}>
                            <span className="cl-pic-label" style={{ fontSize: '10px', color: 'var(--text-muted)' }}>PIC:</span>
                            <input
                                className="cl-pic-input"
                                type="text"
                                placeholder="Nama PIC..."
                                value={picState[key] || ''}
                                onChange={e => onPIC(gIdx, iIdx, e.target.value)}
                                autoComplete="off"
                                style={{
                                    border: 'none', background: 'transparent',
                                    borderBottom: '1px dashed var(--border)', outline: 'none',
                                    fontSize: '11px', marginLeft: '4px', width: '80px'
                                }}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
