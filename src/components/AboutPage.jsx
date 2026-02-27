const STATS = [
    { value: '10+', label: 'Jenis Acara' },
    { value: '4', label: 'Kelas Tamu' },
    { value: 'PMK 32/2025', label: 'Standar Biaya' },
    { value: 'Auto', label: 'Kalkulasi RAB' },
];

const FEATURES = [
    { icon: '✨', title: 'Simulasi Cerdas', desc: 'Hitung kebutuhan acara secara otomatis berdasarkan skala, kelas tamu, dan jenis kegiatan.' },
    { icon: '💰', title: 'RAB Otomatis', desc: 'Rincian Anggaran Biaya mengacu pada PMK Nomor 32 Tahun 2025 (SBM TA 2026).' },
    { icon: '📋', title: 'Checklist Persiapan', desc: 'Panduan persiapan detail yang disesuaikan secara dinamis dengan hasil simulasi.' },
    { icon: '📖', title: 'Panduan Kegiatan', desc: 'Langkah-langkah operasional acara yang berubah mengikuti konfigurasi peserta dan tim.' },
];

import Layout from './Layout';

export default function AboutPage() {
    return (
        <Layout
            title="Tentang Aplikasi"
            subtitle="Sistem perencanaan dan simulasi acara yang dirancang khusus untuk kebutuhan kegiatan pemerintahan — dari rapat koordinasi hingga seminar nasional."
        >
            {/* Stats Row */}
            <div className="about-stats-row">
                {STATS.map((s) => (
                    <div key={s.label} className="about-stat-card">
                        <div className="about-stat-value">{s.value}</div>
                        <div className="about-stat-label">{s.label}</div>
                    </div>
                ))}
            </div>

            {/* Feature Grid */}
            <div className="about-section">
                <h2 className="about-section-title">🚀 Fitur Utama</h2>
                <div className="about-feature-grid">
                    {FEATURES.map((f) => (
                        <div key={f.title} className="about-feature-card">
                            <div className="about-feature-icon">{f.icon}</div>
                            <h3 className="about-feature-title">{f.title}</h3>
                            <p className="about-feature-desc">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Developer Card */}
            <div className="about-section">
                <h2 className="about-section-title">👨‍💻 Developer</h2>
                <div className="about-dev-card">
                    <div className="about-dev-avatar">🏛️</div>
                    <div className="about-dev-info">
                        <div className="about-dev-name">Direktorat PRP-PPDT</div>
                        <div className="about-dev-role">Direktorat Penyerasian Rencana dan Program Percepatan Pembangunan Daerah Tertinggal</div>
                        <div className="about-dev-meta">
                            <span className="about-dev-badge">v2.0.0 · Dynamic Engine</span>
                            <span className="about-dev-badge">PMK 32/2025 · SBM TA 2026</span>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
