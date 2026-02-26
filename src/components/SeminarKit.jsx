import { useState } from 'react';
import { HARGA } from '../utils/rabCalculator';

const KIT_CATALOG = [
    { key: 'seminar_kit', label: '🎒 Tas / Tote Bag + Blocknote + Pulpen' },
    { key: 'lanyard', label: '🔖 Lanyard + ID Card Holder' },
    { key: 'flashdisk_materi', label: '💾 Flashdisk Materi (4GB)' },
    { key: 'modul', label: '📋 Materi Cetak / Modul' },
    { key: 'sertifikat', label: '🏅 Sertifikat' },
    { key: 'souvenir', label: '🎁 Souvenir / Goodie Bag' },
];

const fmt = (n) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(n);

const CLASS_META = {
    reguler: { emoji: '🟡', label: 'Reguler', color: '#f59e0b' },
    vip: { emoji: '🔵', label: 'VIP', color: '#3b82f6' },
    vvip: { emoji: '🟠', label: 'VVIP', color: '#f97316' },
};

function ClassKitEditor({ cls, kitData, onChange, defaultQty, priceFor }) {
    const meta = CLASS_META[cls];
    const items = kitData?.items || [];
    const customItems = kitData?.customItems || [];
    const qty = kitData?.qty !== undefined ? kitData.qty : defaultQty;
    const [showCustomForm, setShowCustomForm] = useState(false);
    const [customName, setCustomName] = useState('');
    const [customPrice, setCustomPrice] = useState('');

    const update = (patch) => onChange({ ...kitData, items, customItems, qty, ...patch });

    const toggleItem = (key) => {
        const next = items.includes(key) ? items.filter(k => k !== key) : [...items, key];
        update({ items: next });
    };

    const addCustom = () => {
        if (!customName.trim()) return;
        const newItem = { id: Date.now(), name: customName.trim(), harga: parseInt(customPrice, 10) || 0 };
        update({ customItems: [...customItems, newItem] });
        setCustomName(''); setCustomPrice(''); setShowCustomForm(false);
    };

    const removeCustom = (id) => update({ customItems: customItems.filter(c => c.id !== id) });

    const subtotal = items.reduce((s, k) => s + priceFor(k) * qty, 0)
        + customItems.reduce((s, c) => s + c.harga * qty, 0);

    return (
        <div style={{ marginBottom: '16px' }}>
            {/* Qty row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <span style={{ fontSize: '13px', fontWeight: 600, color: meta.color }}>
                    {meta.emoji} {meta.label}
                </span>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Jumlah:</span>
                <button
                    className="qty-btn"
                    onClick={() => update({ qty: Math.max(0, qty - 1) })}
                    disabled={qty <= 0}
                    aria-label={`Kurangi qty ${meta.label}`}
                >−</button>
                <input
                    type="number"
                    inputMode="numeric"
                    className="qty-input"
                    value={qty}
                    min="0"
                    max="5000"
                    autoComplete="off"
                    onChange={e => {
                        let v = parseInt(e.target.value, 10);
                        if (isNaN(v) || v < 0) v = 0;
                        if (v > 5000) v = 5000;
                        update({ qty: v });
                    }}
                />
                <button
                    className="qty-btn"
                    onClick={() => update({ qty: qty + 1 })}
                    aria-label={`Tambah qty ${meta.label}`}
                >+</button>
                {subtotal > 0 && (
                    <span style={{ marginLeft: 'auto', fontSize: '12px', fontWeight: 700, color: 'var(--accent)' }}>
                        {fmt(subtotal)}
                    </span>
                )}
            </div>

            {/* Catalog items */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '8px' }}>
                {KIT_CATALOG.map(({ key, label }) => {
                    const selected = items.includes(key);
                    const price = priceFor(key);
                    return (
                        <button
                            key={key}
                            onClick={() => toggleItem(key)}
                            aria-pressed={selected}
                            style={{
                                padding: '5px 10px',
                                borderRadius: '20px',
                                border: `1.5px solid ${selected ? meta.color : 'var(--border2)'}`,
                                background: selected ? `${meta.color}15` : 'var(--surface2)',
                                color: selected ? meta.color : 'var(--text-muted)',
                                fontSize: '12px',
                                fontWeight: selected ? 600 : 400,
                                cursor: 'pointer',
                                transition: 'all 0.15s',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px',
                            }}
                        >
                            {selected ? '✓ ' : ''}{label}
                            <span style={{ fontSize: '10px', opacity: 0.7 }}>{fmt(price)}</span>
                        </button>
                    );
                })}
            </div>

            {/* Custom items */}
            {customItems.map(c => (
                <div key={c.id} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', padding: '5px 10px', background: 'var(--surface2)', borderRadius: '8px', border: '1px dashed var(--border2)' }}>
                    <span style={{ flex: 1, fontSize: '12px', color: 'var(--text)' }}>✏️ {c.name}</span>
                    <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{fmt(c.harga)}/pax</span>
                    <button
                        onClick={() => removeCustom(c.id)}
                        style={{ background: 'none', border: 'none', color: 'var(--text-dim)', cursor: 'pointer', fontSize: '14px' }}
                        aria-label={`Hapus item ${c.name}`}
                    >×</button>
                </div>
            ))}

            {/* Custom form */}
            {showCustomForm ? (
                <div style={{ display: 'flex', gap: '6px', alignItems: 'center', marginTop: '6px' }}>
                    <input
                        type="text"
                        placeholder="Nama item..."
                        value={customName}
                        onChange={e => setCustomName(e.target.value)}
                        autoComplete="off"
                        spellCheck={false}
                        style={{ flex: 1, padding: '5px 10px', borderRadius: '6px', border: '1px solid var(--border2)', background: 'var(--surface)', color: 'var(--text)', fontSize: '12px' }}
                    />
                    <input
                        type="number"
                        inputMode="numeric"
                        placeholder="Harga/pax"
                        value={customPrice}
                        onChange={e => setCustomPrice(e.target.value)}
                        autoComplete="off"
                        style={{ width: '100px', padding: '5px 8px', borderRadius: '6px', border: '1px solid var(--border2)', background: 'var(--surface)', color: 'var(--text)', fontSize: '12px' }}
                    />
                    <button onClick={addCustom} style={{ padding: '5px 10px', borderRadius: '6px', background: 'var(--accent)', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '12px', fontWeight: 600 }}>Tambah</button>
                    <button onClick={() => setShowCustomForm(false)} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '16px' }} aria-label="Tutup form custom item">×</button>
                </div>
            ) : (
                <button
                    onClick={() => setShowCustomForm(true)}
                    style={{ marginTop: '4px', padding: '4px 10px', borderRadius: '6px', border: '1px dashed var(--border2)', background: 'transparent', color: 'var(--text-muted)', fontSize: '11px', cursor: 'pointer' }}
                >
                    + Tambah Item Custom
                </button>
            )}
        </div>
    );
}

export default function SeminarKit({ seminarKitData, onChange, peserta = 30, vip = 0, vvip = 0, guestClass = 'reguler', location = 'jakarta' }) {
    const [isOpen, setIsOpen] = useState(true);
    const kota = location.toLowerCase();

    const showVIP = vip > 0 || ['vip', 'campuran'].includes(guestClass);
    const showVVIP = vvip > 0 || ['vvip', 'campuran'].includes(guestClass);

    const priceFor = (key) => HARGA[key]?.harga?.[kota] || HARGA[key]?.harga?.daerah || 0;

    const classes = ['reguler', showVIP && 'vip', showVVIP && 'vvip'].filter(Boolean);

    const getClassData = (cls) => seminarKitData[cls] || { items: [], customItems: [], qty: cls === 'reguler' ? peserta : cls === 'vip' ? vip : vvip };

    const setClassData = (cls, data) => onChange({ ...seminarKitData, [cls]: data });

    const totalItemsActive = classes.reduce((sum, cls) => {
        const d = getClassData(cls);
        return sum + (d.items?.length || 0) + (d.customItems?.length || 0);
    }, 0);

    const grandTotal = classes.reduce((sum, cls) => {
        const d = getClassData(cls);
        const qty = d.qty !== undefined ? d.qty : (cls === 'reguler' ? peserta : cls === 'vip' ? vip : vvip);
        const cat = (d.items || []).reduce((s, k) => s + priceFor(k) * qty, 0);
        const cust = (d.customItems || []).reduce((s, c) => s + c.harga * qty, 0);
        return sum + cat + cust;
    }, 0);

    const handleToggleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen(v => !v);
        }
    };

    return (
        <div className="card" style={{ marginBottom: '16px' }}>
            <div
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', userSelect: 'none' }}
                onClick={() => setIsOpen(!isOpen)}
                onKeyDown={handleToggleKeyDown}
                role="button"
                aria-expanded={isOpen}
                tabIndex={0}
            >
                <div>
                    <div className="card-title" style={{ marginBottom: '4px' }}>
                        <span className="icon">🎒</span> Seminar Kit
                        {totalItemsActive > 0 && (
                            <span style={{ marginLeft: '8px', fontSize: '11px', background: 'var(--accent-bg)', color: 'var(--accent)', padding: '2px 8px', borderRadius: '20px', fontWeight: 600 }}>
                                {totalItemsActive} item aktif
                            </span>
                        )}
                    </div>
                    <p className="card-subtitle">Konfigurasikan seminar kit berbeda untuk setiap kelas tamu.</p>
                </div>
                <div style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>▼</div>
            </div>

            <div className={`collapsible-body ${isOpen ? 'show' : ''}`}>
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '20px' }}>
                    {classes.map((cls, i) => (
                        <div key={cls}>
                            {i > 0 && <div style={{ borderTop: '1px solid var(--border)', marginBottom: '16px', marginTop: '4px' }} />}
                            <ClassKitEditor
                                cls={cls}
                                kitData={getClassData(cls)}
                                onChange={(d) => setClassData(cls, d)}
                                defaultQty={cls === 'reguler' ? peserta : cls === 'vip' ? vip : vvip}
                                priceFor={priceFor}
                            />
                        </div>
                    ))}

                    {grandTotal > 0 && (
                        <div style={{ marginTop: '12px', padding: '10px 14px', background: 'var(--gold-bg)', border: '1px solid var(--border2)', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Total estimasi seminar kit (semua kelas)</span>
                            <span style={{ fontSize: '15px', fontWeight: 700, color: 'var(--gold)' }}>{fmt(grandTotal)}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
