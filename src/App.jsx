import { useState, useRef } from 'react';
import Layout from './components/Layout';
import EventDetails from './components/EventDetails';
import GuestClass from './components/GuestClass';
import TeamCounters from './components/TeamCounters';
import SupportTeam from './components/SupportTeam';
import Decorations from './components/Decorations';
import RABResult from './components/RABResult';
import Disclaimer from './components/Disclaimer';
import { buildRAB, buildChecklist } from './utils/rabCalculator';

export default function App() {
  const [eventData, setEventData] = useState({
    eventType: 'seminar',
    eventName: '',
    duration: 8,
    location: 'jakarta',
    roomSize: '',
    decorStyle: 'formal',
    seatingPref: 'auto',
  });

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

  const [result, setResult] = useState(null);
  const [checklist, setChecklist] = useState([]);

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

  const generateRAB = () => {
    if (!eventData.eventType) {
      alert('Pilih jenis acara dulu ya!');
      return;
    }

    if (guestClass === 'vvip' && guestCounts.vvip === 0) {
      alert('Jumlah tamu VVIP harus diisi minimal 1 orang!');
      return;
    }
    if (guestClass === 'vip' && guestCounts.vip === 0) {
      alert('Jumlah tamu VIP harus diisi minimal 1 orang!');
      return;
    }
    if (guestClass === 'campuran' && guestCounts.vvip === 0 && guestCounts.vip === 0) {
      alert('Untuk kelas Campuran, isi minimal jumlah VVIP atau VIP!');
      return;
    }

    const inputData = {
      ...eventData,
      guestClass,
      vvip: guestCounts.vvip,
      vip: guestCounts.vip,
      ...teamCounts,
      team: supportTeam,
      decorChips: decorations
    };

    const calculatedResult = buildRAB(inputData);
    const generatedChecklist = buildChecklist(inputData, calculatedResult.formasi);

    setResult(calculatedResult);
    setChecklist(generatedChecklist);

    // Slight delay to allow render before smooth scrolling
    setTimeout(() => {
      if (resultRef.current) {
        resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
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
    <Layout>
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
      />

      <Disclaimer />

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
        <button className="claude-btn claude-btn-primary" onClick={generateRAB} style={{ padding: '14px 24px', fontSize: '15px' }}>
          <span style={{ fontSize: '18px' }}>✨</span> Generate RAB &amp; Perlengkapan
        </button>
      </div>

      <div style={{ borderBottom: '2px solid var(--border)', margin: '32px 0' }}></div>

      <div ref={resultRef}>
        {result && (
          <RABResult
            result={result}
            checklist={checklist}
            eventName={finalEventName}
            kotaLabel={kotaLabel}
            eventTypeLabel={evLabels[eventData.eventType]}
            guestClassLabel={gcLabels[guestClass]}
          />
        )}
      </div>
    </Layout>
  );
}
