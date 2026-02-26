import { useState } from 'react';
import ToggleChips from './ToggleChips';

export default function SupportTeam({ selectedSupport, onChangeSupport }) {
    const [isOpen, setIsOpen] = useState(true);
    const options = [
        { value: 'asrot', label: '🎧 Asrot / Operator' },
        { value: 'fotografer', label: '📸 Fotografer' },
        { value: 'videografer', label: '🎥 Videografer' },
        { value: 'live_streaming', label: '📡 Live Streaming' },
        { value: 'interpreter', label: '🌐 Interpreter' },
        { value: 'notulen', label: '📝 Notulen' },
        { value: 'registrasi', label: '🪪 Meja Registrasi' },
        { value: 'konsumsi', label: '☕ Konsumsi' },
        { value: 'keamanan', label: '🛡️ Keamanan / Satpam' },
        { value: 'penerima_tamu', label: '🤝 Penerima Tamu' },
        { value: 'humas', label: '📢 Humas / Publikasi' },
        { value: 'penerjemah_isyarat', label: '🤟 Penerjemah Isyarat' },
        { value: 'medis', label: '🏥 Tim Medis / P3K' },
        { value: 'parkir', label: '🚗 Petugas Parkir' },
        { value: 'it_support', label: '💻 IT Support' },
        { value: 'liaison', label: '🧑‍💼 Liaison Officer (LO)' }
    ];

    const activeCount = selectedSupport.length;

    return (
        <div className="card">
            <div
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', userSelect: 'none' }}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div>
                    <div className="card-title" style={{ marginBottom: '4px' }}>
                        <span className="icon">🎛️</span> Tim Pendukung
                        {activeCount > 0 && (
                            <span style={{ marginLeft: '8px', fontSize: '11px', background: 'var(--accent-bg)', color: 'var(--accent)', padding: '2px 8px', borderRadius: '20px', fontWeight: 600 }}>
                                {activeCount} dipilih
                            </span>
                        )}
                    </div>
                    <p className="card-subtitle">Pilih tim pendukung yang terlibat dalam kegiatan.</p>
                </div>
                <div style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>▼</div>
            </div>

            {isOpen && (
                <div style={{ marginTop: '16px', borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
                    <ToggleChips
                        options={options}
                        selectedValues={selectedSupport}
                        onChange={onChangeSupport}
                    />
                </div>
            )}
        </div>
    );
}
