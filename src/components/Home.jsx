import { useState, useRef } from 'react';
import Layout from './Layout';
import EventDetails from './EventDetails';
import GuestClass from './GuestClass';
import TeamCounters from './TeamCounters';
import SupportTeam from './SupportTeam';
import Decorations from './Decorations';
import SeminarKit from './SeminarKit';
import RABResult from './RABResult';
import ChecklistPage from './ChecklistPage';
import Disclaimer from './Disclaimer';
import PriceOverrides from './PriceOverrides';
import GuidePage from './GuidePage';
import { buildRAB, buildChecklist } from '../utils/rabCalculator';

const INITIAL_EVENT_DATA = {
    eventType: 'seminar',
    eventName: '',
    duration: 8,
    location: 'jakarta',
    roomSize: '',
    decorStyle: 'formal',
    seatingPref: 'auto',
};

export default function Home() {
    const [eventData, setEventData] = useState(INITIAL_EVENT_DATA);
    const [guestClass, setGuestClass] = useState('reguler');
    const [guestCounts, setGuestCounts] = useState({ vvip: 0, vip: 0 });
    const [teamCounts, setTeamCounts] = useState({
        peserta: 30,
        narasumber: 2,
        moderator: 1,
        mc: 1,
        panitia: 5
    });
    const [supportTeam, setSupportTeam] = useState(['asrot', 'registrasi', 'konsumsi']);
    const [decorations, setDecorations] = useState(['standing_flower', 'backdrop_foto']);
    const [mixedSeating, setMixedSeating] = useState('mixed_roundtable');

    const [result, setResult] = useState(null);
    const [checklist, setChecklist] = useState([]);
    const [overrides, setOverrides] = useState({});
    const [activeTab, setActiveTab] = useState('simulasi');
    const [guideOpenSection, setGuideOpenSection] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [seminarKitData, setSeminarKitData] = useState({ reguler: null, vip: null, vvip: null });
    const [lastInputData, setLastInputData] = useState(null);

    const resultRef = useRef(null);

    const handleEventDataChange = (key, value) => {
        setEventData(prev => ({ ...prev, [key]: value }));
    };

    const handleGuestCountChange = (key, value) => {
        setGuestCounts(prev => ({ ...prev, [key]: value }));
    };

    const handleTeamCountChange = (key, value) => {
        setTeamCounts(prev => ({ ...prev, [key]: value }));
    };

    const setError = (msg) => {
        setErrorMsg(msg);
        setTimeout(() => setErrorMsg(null), 4000);
    };

    const handleOverrideChange = (key, value) => {
        setOverrides(prev => {
            const next = { ...prev };
            if (value === undefined || value === '') {
                delete next[key];
            } else {
                next[key] = Number(value);
            }
            return next;
        });
    };

    const handleReset = () => {
        setEventData(INITIAL_EVENT_DATA);
        setGuestClass('reguler');
        setGuestCounts({ vvip: 0, vip: 0 });
        setTeamCounts({ peserta: 30, narasumber: 2, moderator: 1, mc: 1, panitia: 5 });
        setSupportTeam(['asrot', 'registrasi', 'konsumsi']);
        setDecorations(['standing_flower', 'backdrop_foto']);
        setMixedSeating('mixed_roundtable');
        setResult(null);
        setChecklist([]);
        setOverrides({});
        setSeminarKitData({ reguler: null, vip: null, vvip: null });
        setLastInputData(null);
        setActiveTab('simulasi');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const generateRAB = () => {
        if (!eventData.eventType) {
            setError('Pilih jenis acara dulu ya!');
            return;
        }
        if (guestClass === 'vvip' && (guestCounts.vvip === 0 || guestCounts.vvip === '')) {
            setError('Jumlah tamu VVIP harus diisi minimal 1 orang!');
            return;
        }
        if (guestClass === 'vip' && (guestCounts.vip === 0 || guestCounts.vip === '')) {
            setError('Jumlah tamu VIP harus diisi minimal 1 orang!');
            return;
        }
        if (guestClass === 'campuran' && (guestCounts.vvip === 0 || guestCounts.vvip === '') && (guestCounts.vip === 0 || guestCounts.vip === '')) {
            setError('Untuk kelas Campuran, isi minimal jumlah VVIP atau VIP!');
            return;
        }

        const inputData = {
            ...eventData,
            guestClass,
            vvip: guestCounts.vvip || 0,
            vip: guestCounts.vip || 0,
            ...teamCounts,
            team: supportTeam,
            decorChips: decorations,
            mixedSeating,
        };

        const calculatedResult = buildRAB(inputData, overrides, seminarKitData);
        const generatedChecklist = buildChecklist(inputData, calculatedResult.formasi);

        setResult(calculatedResult);
        setChecklist(generatedChecklist);
        setLastInputData(inputData);

        // Slight delay to allow render before smooth scrolling
        setTimeout(() => {
            if (resultRef.current) {
                resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
    };

    const handleRemoveItem = (itemKey) => {
        if (!result) return;

        let newSections = [];
        let itemFoundAndRemoved = false;

        for (const sec of result.sections) {
            const filteredItems = sec.items.filter(it => it.key !== itemKey);
            if (filteredItems.length < sec.items.length) {
                itemFoundAndRemoved = true;
            }
            if (filteredItems.length > 0) {
                newSections.push({ ...sec, items: filteredItems });
            }
        }

        if (itemFoundAndRemoved) {
            setResult({ ...result, sections: newSections });
        }
    };

    const evLabels = {
        seminar: 'Seminar', workshop: 'Workshop', fgd: 'FGD', panel: 'Panel Discussion',
        expo: 'Expo/Pameran', konferensi: 'Konferensi', talkshow: 'Talkshow', rapat: 'Rapat Koordinasi',
        webinar: 'Webinar/Hybrid', gala: 'Gala Dinner'
    };

    const gcLabels = {
        reguler: 'Tamu Reguler', vip: 'Tamu VIP', vvip: 'Tamu VVIP', campuran: 'Campuran VVIP/VIP/Reguler'
    };

    const kotaLabel = eventData.location.charAt(0).toUpperCase() + eventData.location.slice(1);
    const finalEventName = eventData.eventName || evLabels[eventData.eventType];

    return (
        <Layout
            activeTab={activeTab}
            onTabChange={setActiveTab}
            hasChecklist={checklist.length > 0}
            title="Simulasi Kegiatan &amp; Perlengkapan Acara"
            showTabs={true}
        >
            {activeTab === 'panduan' ? (
                <GuidePage
                    initialOpenSection={guideOpenSection}
                    onSectionOpened={() => setGuideOpenSection(null)}
                    inputData={lastInputData}
                    result={result}
                />
            ) : activeTab === 'checklist' ? (
                <ChecklistPage
                    checklist={checklist}
                    inputData={lastInputData}
                    eventName={finalEventName}
                    kotaLabel={kotaLabel}
                    onSwitchToSimulasi={() => setActiveTab('simulasi')}
                />
            ) : (
                <>
                    <EventDetails
                        data={eventData}
                        onChange={handleEventDataChange}
                    />

                    <GuestClass
                        guestClass={guestClass}
                        onChangeClass={setGuestClass}
                        guestCounts={guestCounts}
                        onChangeCounts={handleGuestCountChange}
                    />

                    <TeamCounters
                        teamCounts={teamCounts}
                        onChangeCount={handleTeamCountChange}
                    />

                    <SupportTeam
                        selectedSupport={supportTeam}
                        onChangeSupport={setSupportTeam}
                    />

                    <Decorations
                        data={eventData}
                        onChangeData={handleEventDataChange}
                        selectedDecor={decorations}
                        onChangeDecor={setDecorations}
                        guestClass={guestClass}
                        mixedSeating={mixedSeating}
                        onChangeMixedSeating={setMixedSeating}
                    />

                    <SeminarKit
                        seminarKitData={seminarKitData}
                        onChange={setSeminarKitData}
                        peserta={teamCounts.peserta}
                        vip={guestCounts.vip}
                        vvip={guestCounts.vvip}
                        guestClass={guestClass}
                        location={eventData.location}
                    />

                    <PriceOverrides
                        overrides={overrides}
                        onChangeOverride={handleOverrideChange}
                        kotaLabel={kotaLabel}
                        seminarKitData={seminarKitData}
                        peserta={teamCounts.peserta}
                        vip={guestCounts.vip}
                        vvip={guestCounts.vvip}
                        guestClass={guestClass}
                    />

                    <Disclaimer />

                    {/* Error toast — full-width above the button */}
                    {errorMsg && (
                        <div className="error-toast" style={{ marginBottom: '12px' }}>
                            ⚠️ {errorMsg}
                            <button
                                onClick={() => setErrorMsg(null)}
                                style={{ marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', fontSize: '16px' }}
                                aria-label="Tutup pesan error"
                            >
                                ×
                            </button>
                        </div>
                    )}

                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
                        <button className="claude-btn claude-btn-primary" onClick={generateRAB} style={{ padding: '14px 24px', fontSize: '15px' }}>
                            <span style={{ fontSize: '18px' }}>✨</span> Simulasikan Kegiatan
                        </button>
                    </div>

                    <div style={{ borderBottom: '2px solid var(--border)', margin: '32px 0' }}></div>

                    <div ref={resultRef}>
                        {result && (
                            <RABResult
                                result={result}
                                eventName={finalEventName}
                                kotaLabel={kotaLabel}
                                eventTypeLabel={evLabels[eventData.eventType]}
                                guestClassLabel={gcLabels[guestClass]}
                                onNavigateToGuide={(sectionId) => {
                                    setGuideOpenSection(sectionId);
                                    setActiveTab('panduan');
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                                onNavigateToChecklist={() => {
                                    setActiveTab('checklist');
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                                onReset={handleReset}
                                onRemoveItem={handleRemoveItem}
                            />
                        )}
                    </div>
                </>
            )}
        </Layout>
    );
}
