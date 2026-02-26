export default function Header({ activeTab, onTabChange }) {
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
