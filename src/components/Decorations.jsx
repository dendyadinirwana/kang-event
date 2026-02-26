import { useState } from 'react';
import ToggleChips from './ToggleChips';

export default function Decorations({ data, onChangeData, selectedDecor, onChangeDecor }) {
    const [isOpen, setIsOpen] = useState(true);
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

    return (
        <div className="card">
            <div
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', userSelect: 'none' }}
                onClick={() => setIsOpen(!isOpen)}
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

            {isOpen && (
                <div style={{ marginTop: '16px', borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
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
                    <ToggleChips options={options} selectedValues={selectedDecor} onChange={onChangeDecor} />
                </div>
            )}
        </div>
    );
}
