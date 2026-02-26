export default function Header({ activeTab, onTabChange, hasChecklist = false }) {
    return (
        <header style={{ justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <div className="logo-text" style={{ textAlign: 'center', width: '100%' }}>
                <h1 className="app-title">Simulasi Kegiatan &amp; Perlengkapan Acara</h1>
            </div>
            <nav className="header-tabs">
                <button
                    className={`header-tab ${activeTab === 'simulasi' ? 'active' : ''}`}
                    onClick={() => onTabChange('simulasi')}
                >
                    <span className="header-tab-icon">🎯</span>
                    Simulasi Kegiatan
                </button>
                <button
                    className={`header-tab ${activeTab === 'checklist' ? 'active' : ''}`}
                    onClick={() => onTabChange('checklist')}
                    style={{ position: 'relative' }}
                >
                    <span className="header-tab-icon">✅</span>
                    Checklist Persiapan
                    {hasChecklist && activeTab !== 'checklist' && (
                        <span style={{ position: 'absolute', top: '6px', right: '6px', width: '7px', height: '7px', borderRadius: '50%', background: '#22c55e' }} />
                    )}
                </button>
                <button
                    className={`header-tab ${activeTab === 'panduan' ? 'active' : ''}`}
                    onClick={() => onTabChange('panduan')}
                >
                    <span className="header-tab-icon">📖</span>
                    Panduan Kegiatan
                </button>
            </nav>
        </header>
    );
}

