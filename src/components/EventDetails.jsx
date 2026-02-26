const MAX_ROOM_SIZE = 50000;

export default function EventDetails({ data, onChange }) {
    const handleRoomSizeChange = (value) => {
        let parsed = parseInt(value, 10);
        if (isNaN(parsed) || parsed < 0) parsed = 0;
        if (parsed > MAX_ROOM_SIZE) parsed = MAX_ROOM_SIZE;
        onChange('roomSize', parsed === 0 ? '' : parsed);
    };

    return (
        <>
            <div className="card">
                <div className="card-title">
                    <span className="icon">🎯</span> Jenis &amp; Skala Acara
                </div>

                <div className="grid-2" style={{ marginBottom: '12px' }}>
                    <div className="field">
                        <label>Jenis Acara</label>
                        <select
                            value={data.eventType}
                            onChange={(e) => onChange('eventType', e.target.value)}
                        >
                            <option value="">— Pilih —</option>
                            <option value="seminar">Seminar</option>
                            <option value="workshop">Workshop / Pelatihan</option>
                            <option value="fgd">Focus Group Discussion (FGD)</option>
                            <option value="panel">Panel Discussion</option>
                            <option value="expo">Expo / Pameran</option>
                            <option value="konferensi">Konferensi / Kongres</option>
                            <option value="talkshow">Talkshow</option>
                            <option value="rapat">Rapat Koordinasi</option>
                            <option value="webinar">Webinar / Hybrid Event</option>
                            <option value="gala">Gala Dinner / Award Night</option>
                        </select>
                    </div>
                    <div className="field">
                        <label>Nama / Tema Acara</label>
                        <input
                            type="text"
                            placeholder="Misal: Forum Inovasi 2025"
                            value={data.eventName}
                            onChange={(e) => onChange('eventName', e.target.value)}
                            autoComplete="off"
                            spellCheck={false}
                        />
                    </div>
                </div>

                <div className="grid-3">
                    <div className="field">
                        <label>Durasi</label>
                        <select
                            value={data.duration}
                            onChange={(e) => onChange('duration', Number(e.target.value))}
                        >
                            <option value={2}>Kurang dari 2 jam</option>
                            <option value={4}>Half day (2–4 jam)</option>
                            <option value={8}>Full day (5–8 jam)</option>
                            <option value={16}>Multi-day (2 hari)</option>
                        </select>
                    </div>
                    <div className="field">
                        <label>Kota / Lokasi</label>
                        <select
                            value={data.location}
                            onChange={(e) => onChange('location', e.target.value)}
                        >
                            <option value="jakarta">Jakarta</option>
                            <option value="bandung">Bandung</option>
                            <option value="surabaya">Surabaya</option>
                            <option value="yogyakarta">Yogyakarta</option>
                            <option value="medan">Medan</option>
                            <option value="makassar">Makassar</option>
                            <option value="daerah">Daerah lainnya</option>
                        </select>
                    </div>
                    <div className="field">
                        <label>Luas Ruangan (m²) — opsional</label>
                        <input
                            type="number"
                            inputMode="numeric"
                            placeholder="Misal: 150"
                            min="0"
                            max={MAX_ROOM_SIZE}
                            value={data.roomSize}
                            onChange={(e) => handleRoomSizeChange(e.target.value)}
                            autoComplete="off"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
