import ToggleChips from './ToggleChips';

export default function SupportTeam({ selectedSupport, onChangeSupport }) {
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

    return (
        <div className="card">
            <div className="card-title">
                <span className="icon">🎛️</span> Tim Pendukung
            </div>
            <ToggleChips
                options={options}
                selectedValues={selectedSupport}
                onChange={onChangeSupport}
            />
        </div>
    );
}
