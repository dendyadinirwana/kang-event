import { useState } from 'react';
import { HARGA } from '../utils/rabCalculator';

const KIT_ITEMS = [
    { key: 'seminar_kit', label: '🎒 Tas / Tote Bag + Blocknote + Pulpen' },
    { key: 'lanyard', label: '🔖 Lanyard + ID Card Holder' },
    { key: 'flashdisk_materi', label: '💾 Flashdisk Materi (4GB)' },
    { key: 'modul', label: '📋 Materi Cetak / Modul' },
    { key: 'sertifikat', label: '🏅 Sertifikat' },
    { key: 'souvenir', label: '🎁 Souvenir / Goodie Bag' },
];

const fmt = (n) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(n);

export default function SeminarKit({ seminarKitData, onChange, peserta = 30, vip = 0, vvip = 0, guestClass = 'reguler', location = 'jakarta' }) {
    const [isOpen, setIsOpen] = useState(false);
    const kota = location.toLowerCase();

    const selectedItems = seminarKitData.items || [];
    const qtys = seminarKitData.qtys || {};

    const showVIP = vip > 0 || ['vip', 'campuran'].includes(guestClass);
    const showVVIP = vvip > 0 || ['vvip', 'campuran'].includes(guestClass);

    const getDefaultQty = (cls) => {
        if (cls === 'reguler') return peserta;
        if (cls === 'vip') return vip;
        if (cls === 'vvip') return vvip;
        return 0;
    };

    const getQty = (kitKey, cls) => {
        const k = `${kitKey}_${cls}`;
        return qtys[k] !== undefined ? qtys[k] : getDefaultQty(cls);
    };

    const setQty = (kitKey, cls, val) => {
        const k = `${kitKey}_${cls}`;
        onChange({ ...seminarKitData, qtys: { ...qtys, [k]: Math.max(0, Number(val) || 0) } });
    };

    const toggleItem = (key) => {
        const next = selectedItems.includes(key)
            ? selectedItems.filter(k => k !== key)
            : [...selectedItems, key];
        onChange({ ...seminarKitData, items: next });
    };

    const priceFor = (key) => HARGA[key]?.harga?.[kota] || HARGA[key]?.harga?.daerah || 0;

    // Compute subtotal per kit item
    const calcTotal = (kitKey) => {
        const price = priceFor(kitKey);
        let total = price * getQty(kitKey, 'reguler');
        if (showVIP) total += price * getQty(kitKey, 'vip');
        if (showVVIP) total += price * getQty(kitKey, 'vvip');
        return total;
    };

    const grandTotal = selectedItems.reduce((sum, key) => sum + calcTotal(key), 0);
    const hasActive = selectedItems.length > 0;

    return (
        <div className="card" style={{ marginBottom: '16px' }}>
            <div
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', userSelect: 'none' }}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div>
                    <div className="card-title" style={{ marginBottom: '4px' }}>
                        <span className="icon">🎒</span> Seminar Kit
                        {hasActive && (
                            <span style={{ marginLeft: '8px', fontSize: '11px', background: 'var(--accent-bg)', color: 'var(--accent)', padding: '2px 8px', borderRadius: '20px', fontWeight: 600 }}>
                                {selectedItems.length} item aktif
                            </span>
                        )}
                    </div>
                    <p className="card-subtitle">Pilih jenis kit dan sesuaikan qty per kelas tamu undangan.</p>
                </div>
                <div style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>▼</div>
            </div>

            {isOpen && (
                <div style={{ marginTop: '20px', borderTop: '1px solid var(--border)', paddingTop: '20px' }}>
                    {KIT_ITEMS.map(({ key, label }) => {
                        const isSelected = selectedItems.includes(key);
                        const unitPrice = priceFor(key);
                        return (
                            <div key={key} style={{
                                borderRadius: '10px',
                                border: `1.5px solid ${isSelected ? 'var(--accent)' : 'var(--border)'}`,
                                background: isSelected ? 'var(--accent-bg)' : 'var(--surface2)',
                                marginBottom: '10px',
                                overflow: 'hidden',
                                transition: 'all 0.15s'
                            }}>
                                {/* Header row */}
                                <div
                                    style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', cursor: 'pointer' }}
                                    onClick={() => toggleItem(key)}
                                >
                                    <div style={{
                                        width: '18px', height: '18px', borderRadius: '4px', flexShrink: 0,
                                        border: `2px solid ${isSelected ? 'var(--accent)' : 'var(--border2)'}`,
                                        background: isSelected ? 'var(--accent)' : 'transparent',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: '#fff', fontSize: '11px', fontWeight: 700
                                    }}>
                                        {isSelected ? '✓' : ''}
                                    </div>
                                    <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text)', flex: 1 }}>{label}</span>
                                    <span style={{ fontSize: '12px', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{fmt(unitPrice)}/pax</span>
                                </div>

                                {/* Quantity rows — only if selected */}
                                {isSelected && (
                                    <div style={{ padding: '0 14px 12px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                        {/* Reguler */}
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '120px' }}>
                                            <span style={{ fontSize: '10px', fontWeight: 600, color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>🟡 Reguler</span>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                                <button className="qty-btn" onClick={() => setQty(key, 'reguler', getQty(key, 'reguler') - 1)}>−</button>
                                                <input
                                                    type="number"
                                                    className="qty-input"
                                                    value={getQty(key, 'reguler')}
                                                    onChange={e => setQty(key, 'reguler', e.target.value)}
                                                />
                                                <button className="qty-btn" onClick={() => setQty(key, 'reguler', getQty(key, 'reguler') + 1)}>+</button>
                                            </div>
                                            <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>{fmt(getQty(key, 'reguler') * unitPrice)}</span>
                                        </div>

                                        {showVIP && (
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '120px' }}>
                                                <span style={{ fontSize: '10px', fontWeight: 600, color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>🔵 VIP</span>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                                    <button className="qty-btn" onClick={() => setQty(key, 'vip', getQty(key, 'vip') - 1)}>−</button>
                                                    <input
                                                        type="number"
                                                        className="qty-input"
                                                        value={getQty(key, 'vip')}
                                                        onChange={e => setQty(key, 'vip', e.target.value)}
                                                    />
                                                    <button className="qty-btn" onClick={() => setQty(key, 'vip', getQty(key, 'vip') + 1)}>+</button>
                                                </div>
                                                <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>{fmt(getQty(key, 'vip') * unitPrice)}</span>
                                            </div>
                                        )}

                                        {showVVIP && (
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '120px' }}>
                                                <span style={{ fontSize: '10px', fontWeight: 600, color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>🟠 VVIP</span>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                                    <button className="qty-btn" onClick={() => setQty(key, 'vvip', getQty(key, 'vvip') - 1)}>−</button>
                                                    <input
                                                        type="number"
                                                        className="qty-input"
                                                        value={getQty(key, 'vvip')}
                                                        onChange={e => setQty(key, 'vvip', e.target.value)}
                                                    />
                                                    <button className="qty-btn" onClick={() => setQty(key, 'vvip', getQty(key, 'vvip') + 1)}>+</button>
                                                </div>
                                                <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>{fmt(getQty(key, 'vvip') * unitPrice)}</span>
                                            </div>
                                        )}

                                        <div style={{ alignSelf: 'flex-end', marginLeft: 'auto', textAlign: 'right' }}>
                                            <div style={{ fontSize: '10px', color: 'var(--text-dim)' }}>Subtotal</div>
                                            <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--accent)' }}>{fmt(calcTotal(key))}</div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}

                    {hasActive && (
                        <div style={{ marginTop: '12px', padding: '10px 14px', background: 'var(--gold-bg)', border: '1px solid var(--border2)', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Total estimasi seminar kit</span>
                            <span style={{ fontSize: '15px', fontWeight: 700, color: 'var(--gold)' }}>{fmt(grandTotal)}</span>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
