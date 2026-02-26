import { useState } from 'react';
import ToggleChips from './ToggleChips';

// Mixed-class seating formations specific to when guestClass is 'campuran'
const MIXED_SEATING_OPTIONS = [
    {
        value: 'mixed_roundtable',
        label: '🪑 Round Table Mix',
        desc: 'Meja bundar untuk VVIP/VIP di area terpisah, kursi biasa untuk peserta reguler. Nuansa formal eksklusif.',
    },
    {
        value: 'mixed_sofa_lounge',
        label: '🛋️ Sofa Lounge + Kursi',
        desc: 'Sofa atau kursi lounge untuk tamu VIP/VVIP di area terdepan, sisanya kursi konferensi standar.',
    },
    {
        value: 'mixed_banquet',
        label: '🍽️ Banquet Mix',
        desc: 'Meja makan 8–10 pax, letak VVIP/VIP di meja utama (head table) dengan dekorasi terpisah.',
    },
    {
        value: 'mixed_cabaret',
        label: '🎭 Cabaret Mix',
        desc: 'Meja cluster (setengah lingkaran), cocok untuk workshop atau diskusi panel. Zona VIP di depan.',
    },
    {
        value: 'mixed_ushape_plus',
        label: '🔱 U-Shape + Pax',
        desc: 'U-Shape untuk panitia inti & VIP, kursi tambahan di luar U untuk peserta reguler.',
    },
];

export default function Decorations({ data, onChangeData, selectedDecor, onChangeDecor, guestClass, mixedSeating, onChangeMixedSeating }) {
    const [isOpen, setIsOpen] = useState(true);
    const isMixed = guestClass === 'campuran';

    const options = [
        { value: 'standing_flower', label: '🌸 Standing Flower' },
        { value: 'table_flower', label: '💐 Bunga Meja' },
        { value: 'backdrop_foto', label: '🖼️ Backdrop Foto' },
        { value: 'tanaman', label: '🪴 Tanaman / Pot' },
        { value: 'photo_booth', label: '📸 Photo Booth' },
        { value: 'lampu_hias', label: '💡 Lampu Hias' },
        { value: 'karpet_merah', label: '🟥 Karpet Merah' },
        { value: 'podium_dekor', label: '🎙️ Podium Dekorasi' },
        { value: 'balon', label: '🎈 Balon Dekorasi' },
        { value: 'neon_sign', label: '✨ Neon Sign' },
        { value: 'gate_balon', label: '🎪 Gate Balon / Arch' },
        { value: 'tenda', label: '⛺ Tenda / Canopy' },
        { value: 'panggung', label: '🎭 Panggung / Stage' },
        { value: 'display_board', label: '📋 Display Board / Easel' },
        { value: 'aisle_decor', label: '🎀 Dekorasi Lorong' },
        { value: 'screen_led', label: '📺 LED Screen' },
        { value: 'meja_pameran', label: '🗂️ Meja Pameran' },
        { value: 'banner_roll', label: '📜 Roll-up Banner' }
    ];

    const activeCount = selectedDecor.length;
    const currentMixed = mixedSeating || 'mixed_roundtable';

    const handleToggleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen(v => !v);
        }
    };

    return (
        <div className="card">
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
                        <span className="icon">🌸</span> Dekorasi
                        {activeCount > 0 && (
                            <span style={{ marginLeft: '8px', fontSize: '11px', background: 'var(--accent-bg)', color: 'var(--accent)', padding: '2px 8px', borderRadius: '20px', fontWeight: 600 }}>
                                {activeCount} dipilih
                            </span>
                        )}
                    </div>
                    <p className="card-subtitle">Pilih gaya, formasi duduk, dan elemen dekorasi.</p>
                </div>
                <div style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>▼</div>
            </div>

            <div className={`collapsible-body ${isOpen ? 'show' : ''}`}>
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
                    {/* Standard seating and style */}
                    <div className="grid-2" style={{ marginBottom: '12px' }}>
                        <div className="field">
                            <label>Gaya Dekorasi</label>
                            <select value={data.decorStyle} onChange={(e) => onChangeData('decorStyle', e.target.value)}>
                                <option value="formal">🏛️ Formal / Profesional</option>
                                <option value="elegant">✨ Elegan / Mewah</option>
                                <option value="natural">🌿 Natural / Botanikal</option>
                                <option value="modern">💎 Modern / Minimalis</option>
                                <option value="festive">🎉 Festive / Meriah</option>
                                <option value="government">🇮🇩 Pemerintahan / Kenegaraan</option>
                            </select>
                        </div>
                        <div className="field">
                            <label>Formasi Duduk</label>
                            <select value={data.seatingPref} onChange={(e) => onChangeData('seatingPref', e.target.value)}>
                                <option value="auto">🤖 Otomatis (sesuai jenis acara)</option>
                                <option value="theater">Theater</option>
                                <option value="classroom">Classroom</option>
                                <option value="roundtable">Round Table</option>
                                <option value="u-shape">U-Shape</option>
                                <option value="banquet">Banquet</option>
                            </select>
                        </div>
                    </div>

                    {/* MIXED-CLASS SEATING SECTION — only visible when guestClass === 'campuran' */}
                    {isMixed && (
                        <div className="mixed-seating-section">
                            <div className="mixed-seating-header">
                                <span>🔀</span>
                                <div>
                                    <div className="mixed-seating-title">Formasi Khusus Kelas Campuran</div>
                                    <div className="mixed-seating-sub">Pilih tata letak yang memisahkan/mengintegrasikan zona VVIP, VIP, dan Reguler secara elegan.</div>
                                </div>
                            </div>
                            <div className="mixed-seating-options">
                                {MIXED_SEATING_OPTIONS.map((opt) => (
                                    <label
                                        key={opt.value}
                                        className={`mixed-seating-card ${currentMixed === opt.value ? 'selected' : ''}`}
                                    >
                                        <input
                                            type="radio"
                                            name="mixedSeating"
                                            value={opt.value}
                                            checked={currentMixed === opt.value}
                                            onChange={() => onChangeMixedSeating(opt.value)}
                                            style={{ display: 'none' }}
                                        />
                                        <div className="mixed-seating-card-label">{opt.label}</div>
                                        <div className="mixed-seating-card-desc">{opt.desc}</div>
                                    </label>
                                ))}
                            </div>
                        </div>
                    )}

                    <ToggleChips options={options} selectedValues={selectedDecor} onChange={onChangeDecor} />
                </div>
            </div>
        </div>
    );
}
