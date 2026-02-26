import { useState } from 'react';
import { OVERRIDE_ITEMS, HARGA } from '../utils/rabCalculator';

const MAX_PRICE = 1_000_000_000; // 1 billion IDR

/** Normalize the city label to the key used in HARGA price tables */
function normalizeCityKey(kotaLabel) {
    if (!kotaLabel) return 'daerah';
    const lower = kotaLabel.toLowerCase().trim();
    // Handle "Daerah lainnya" or any variant that doesn't exactly match a city key
    const knownCities = ['jakarta', 'bandung', 'surabaya', 'yogyakarta', 'medan', 'makassar'];
    if (knownCities.includes(lower)) return lower;
    return 'daerah';
}

export default function PriceOverrides({ overrides, onChangeOverride, kotaLabel = 'jakarta' }) {
    const [isOpen, setIsOpen] = useState(false);
    const cityKey = normalizeCityKey(kotaLabel);

    // Group items by section
    const groupedItems = [];
    let currentSection = null;

    OVERRIDE_ITEMS.forEach(item => {
        if (item.section) {
            currentSection = { label: item.section, items: [] };
            groupedItems.push(currentSection);
        }
        if (currentSection) {
            currentSection.items.push(item);
        }
    });

    const formatRupiah = (angka) => {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(angka);
    };

    const getDefaultPrice = (key) => {
        const item = HARGA[key];
        if (!item) return 0;
        return item.harga[cityKey] || item.harga.daerah || 0;
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen(v => !v);
        }
    };

    return (
        <div className="card" style={{ marginBottom: '24px' }}>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    userSelect: 'none'
                }}
                onClick={() => setIsOpen(!isOpen)}
                onKeyDown={handleKeyDown}
                role="button"
                aria-expanded={isOpen}
                tabIndex={0}
            >
                <div>
                    <div className="card-title" style={{ marginBottom: '4px' }}>
                        <span className="icon">⚙️</span> Sesuaikan Standar Biaya (Opsional)
                    </div>
                    <p className="card-subtitle">
                        Timpa harga default SBM TA 2026 atau harga pasar sesuai dengan kondisi riil di lapangan.
                    </p>
                </div>
                <div style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
                    ▼
                </div>
            </div>

            <div className={`collapsible-body ${isOpen ? 'show' : ''}`}>
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '20px' }}>
                    {groupedItems.map((group, idx) => (
                        <div key={idx} style={{ marginBottom: '24px' }}>
                            <h3 style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '16px', color: 'var(--text-muted)' }}>
                                {group.label}
                            </h3>
                            <div className="grid-2">
                                {group.items.map(item => {
                                    const defaultPrice = getDefaultPrice(item.key);
                                    const value = overrides[item.key] !== undefined ? overrides[item.key] : '';

                                    return (
                                        <div key={item.key} className="field">
                                            <label>{item.label}</label>
                                            <div style={{ position: 'relative' }}>
                                                <span style={{
                                                    position: 'absolute',
                                                    left: '12px',
                                                    top: '50%',
                                                    transform: 'translateY(-50%)',
                                                    color: 'var(--text-muted)',
                                                    fontSize: '13px'
                                                }}>Rp</span>
                                                <input
                                                    type="number"
                                                    inputMode="numeric"
                                                    style={{ paddingLeft: '32px' }}
                                                    placeholder={defaultPrice.toLocaleString('id-ID')}
                                                    value={value}
                                                    min="0"
                                                    max={MAX_PRICE}
                                                    autoComplete="off"
                                                    onChange={(e) => {
                                                        const val = e.target.value;
                                                        if (val === '') {
                                                            onChangeOverride(item.key, undefined);
                                                        } else {
                                                            let parsed = parseInt(val, 10);
                                                            if (isNaN(parsed) || parsed < 0) parsed = 0;
                                                            if (parsed > MAX_PRICE) parsed = MAX_PRICE;
                                                            onChangeOverride(item.key, parsed);
                                                        }
                                                    }}
                                                />
                                            </div>
                                            <small style={{ color: 'var(--text-dim)', fontSize: '11px', marginTop: '4px', display: 'block' }}>
                                                Default {kotaLabel}: {formatRupiah(defaultPrice)}
                                            </small>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}

                    <div style={{
                        marginTop: '16px',
                        padding: '12px',
                        backgroundColor: 'var(--accent-bg)',
                        borderRadius: '8px',
                        border: '1px solid var(--border2)',
                        display: 'flex',
                        gap: '12px',
                        alignItems: 'flex-start'
                    }}>
                        <span style={{ fontSize: '20px' }}>💡</span>
                        <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                            <strong>Tips:</strong> Kosongkan kolom isian untuk menggunakan harga default sistem. Harga default SBM dapat berubah sewaktu-waktu sesuai ketentuan Kemenkeu.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
