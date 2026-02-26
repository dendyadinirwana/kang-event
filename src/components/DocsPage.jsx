import { useState, useEffect } from 'react';
import { NavLink, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// Documentation structure
const DOC_PAGES = [
    { path: 'home', label: 'Home', file: 'Home.md' },
    { path: 'simulasi-kegiatan', label: '1. Simulasi Kegiatan', file: '1-Simulasi-Kegiatan.md' },
    { path: 'rab-otomatis', label: '2. RAB Otomatis', file: '2-RAB-Otomatis.md' },
    { path: 'seminar-kit', label: '3. Seminar Kit', file: '3-Seminar-Kit.md' },
    { path: 'checklist-persiapan', label: '4. Checklist Persiapan', file: '4-Checklist-Persiapan.md' },
    { path: 'panduan-kegiatan', label: '5. Panduan Kegiatan', file: '5-Panduan-Kegiatan.md' },
];

export default function DocsPage() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    return (
        <div className="docs-container">
            <button
                className="docs-mobile-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                {isMobileMenuOpen ? '✕ Tutup Menu' : '☰ Menu Dokumentasi'}
            </button>

            <aside className={`docs-sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
                <h3 className="docs-sidebar-title">Dokumentasi</h3>
                <nav className="docs-nav">
                    {DOC_PAGES.map((page) => (
                        <NavLink
                            key={page.path}
                            to={`/docs/${page.path}`}
                            className={({ isActive }) => `docs-nav-link ${isActive ? 'active' : ''}`}
                        >
                            {page.label}
                        </NavLink>
                    ))}
                </nav>
            </aside>

            <main className="docs-content">
                <div className="docs-content-inner">
                    <Routes>
                        <Route path="/" element={<Navigate to="home" replace />} />
                        {DOC_PAGES.map((page) => (
                            <Route
                                key={page.path}
                                path={page.path}
                                element={<DocRenderer file={page.file} />}
                            />
                        ))}
                        <Route path="*" element={<div>Halaman tidak ditemukan.</div>} />
                    </Routes>
                </div>
            </main>
        </div>
    );
}

function DocRenderer({ file }) {
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        // In Vite, to dynamically fetch files from a folder outside src (like /docs), 
        // the easiest reliable way without complex import.meta.glob is to fetch it from the dev server URL
        // To make this work in production, the `docs` folder needs to be copied to the `public` folder,
        // or we must import them directly.

        // Dynamic import workaround for Vite
        import(`../../docs/${file}?raw`)
            .then((module) => {
                setContent(module.default);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error loading markdown:", err);
                setError('Gagal memuat dokumen. Pastikan file tersedia.');
                setLoading(false);
            });
    }, [file]);

    if (loading) return <div className="docs-loading">Memuat dokumen...</div>;
    if (error) return <div className="docs-error">{error}</div>;

    return (
        <article className="markdown-body">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {content}
            </ReactMarkdown>
        </article>
    );
}
