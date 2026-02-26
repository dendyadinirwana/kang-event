import { useState, useEffect, useRef } from 'react';
import { buildGuideSections } from '../utils/guideData';

export default function GuidePage({ initialOpenSection, onSectionOpened, inputData, result }) {
    const [openSections, setOpenSections] = useState({});
    const [searchQuery, setSearchQuery] = useState('');
    const sectionRefs = useRef({});

    const guideSections = buildGuideSections(inputData, result);

    // Auto-open and scroll to a section when navigated from checklist
    useEffect(() => {
        if (initialOpenSection) {
            setOpenSections(prev => ({ ...prev, [initialOpenSection]: true }));
            onSectionOpened?.();
            // Scroll to section after render
            setTimeout(() => {
                const el = sectionRefs.current[initialOpenSection];
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 150);
        }
    }, [initialOpenSection, onSectionOpened]);

    const toggleSection = (id) => {
        setOpenSections(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const expandAll = () => {
        const all = {};
        guideSections.forEach(s => { all[s.id] = true; });
        setOpenSections(all);
    };

    const collapseAll = () => setOpenSections({});

    const filteredSections = searchQuery.trim()
        ? guideSections.filter(sec => {
            const q = searchQuery.toLowerCase();
            if (sec.title.toLowerCase().includes(q)) return true;
            if (sec.subtitle.toLowerCase().includes(q)) return true;
            return sec.steps.some(step =>
                step.title.toLowerCase().includes(q) ||
                step.items.some(item => typeof item === 'string' ? item.toLowerCase().includes(q) : false)
            );
        })
        : guideSections;

    return (
        <div className="guide-page">
            <div className="guide-hero">
                <div className="guide-hero-icon">📖</div>
                <h2 className="guide-hero-title">Panduan Lengkap Persiapan Kegiatan</h2>
                <p className="guide-hero-sub">
                    Instruksi langkah-demi-langkah untuk setiap aspek penyelenggaraan acara,
                    mulai dari koordinasi Biro Umum, Biro Humas, hingga master timeline.
                </p>
            </div>

            <div className="guide-toolbar">
                <div className="guide-search">
                    <span className="guide-search-icon">🔍</span>
                    <input
                        type="text"
                        placeholder="Cari panduan... (misal: backdrop, catering, VVIP)"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="guide-toolbar-actions">
                    <button className="claude-btn claude-btn-secondary guide-toolbar-btn" onClick={expandAll}>
                        Buka Semua
                    </button>
                    <button className="claude-btn claude-btn-secondary guide-toolbar-btn" onClick={collapseAll}>
                        Tutup Semua
                    </button>
                </div>
            </div>

            {filteredSections.length === 0 && (
                <div className="guide-empty">
                    <span style={{ fontSize: '32px' }}>🔍</span>
                    <p>Tidak ditemukan panduan untuk "<strong>{searchQuery}</strong>"</p>
                </div>
            )}

            {filteredSections.map(section => (
                <GuideSection
                    key={section.id}
                    section={section}
                    isOpen={!!openSections[section.id]}
                    onToggle={() => toggleSection(section.id)}
                    ref={el => { sectionRefs.current[section.id] = el; }}
                />
            ))}

            <div className="guide-footer-note">
                <span className="icon">💡</span>
                Panduan ini bersifat umum dan dapat disesuaikan dengan kebutuhan spesifik instansi.
                Untuk menghitung estimasi anggaran, gunakan fitur Simulasi Kegiatan.
            </div>
        </div>
    );
}

import { forwardRef } from 'react';

const GuideSection = forwardRef(function GuideSection({ section, isOpen, onToggle }, ref) {
    return (
        <div className="guide-section" data-color={section.color} id={`guide-${section.id}`} ref={ref}>
            <div
                className={`guide-section-header ${isOpen ? 'open' : ''}`}
                onClick={onToggle}
                style={{ '--accent': section.color }}
            >
                <div className="guide-section-header-left">
                    <span className="guide-section-icon">{section.icon}</span>
                    <div>
                        <div className="guide-section-title">{section.title}</div>
                        <div className="guide-section-subtitle">{section.subtitle}</div>
                    </div>
                </div>
                <div className="guide-section-arrow">▼</div>
            </div>

            <div className={`guide-section-body ${isOpen ? 'show' : ''}`}>
                {/* Steps */}
                {section.steps.map((step, idx) => (
                    <div className="guide-step" key={idx}>
                        <div className="guide-step-title">{step.title}</div>
                        <ul className="guide-step-list">
                            {step.items.map((item, iIdx) => (
                                <li key={iIdx} dangerouslySetInnerHTML={{ __html: formatMarkdownBold(item) }} />
                            ))}
                        </ul>
                    </div>
                ))}

                {/* Tips */}
                {section.tips && section.tips.length > 0 && (
                    <div className="guide-tips">
                        <div className="guide-tips-title">💡 Tips & Best Practice</div>
                        <ul>
                            {section.tips.map((tip, idx) => (
                                <li key={idx}>{tip}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Timeline */}
                {section.timeline && section.timeline.length > 0 && (
                    <div className="guide-timeline">
                        <div className="guide-timeline-title">📅 Timeline Koordinasi</div>
                        <div className="guide-timeline-items">
                            {section.timeline.map((t, idx) => (
                                <div className="guide-timeline-item" key={idx} style={{ '--accent': section.color }}>
                                    <div className="guide-timeline-dot"></div>
                                    <div className="guide-timeline-time">{t.time}</div>
                                    <div className="guide-timeline-task">{t.task}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
});

/** Simple helper: convert **bold** markdown to <strong> */
function formatMarkdownBold(text) {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}
