const MAX_VIP = 500;

export default function GuestClass({ guestClass, onChangeClass, guestCounts, onChangeCounts }) {
    const handleSelectClass = (cls) => {
        onChangeClass(cls);
    };

    const handleCountInput = (key, value) => {
        if (value === '') {
            onChangeCounts(key, '');
            return;
        }
        let parsed = parseInt(value, 10);
        if (isNaN(parsed) || parsed < 0) parsed = 0;
        if (parsed > MAX_VIP) parsed = MAX_VIP;
        onChangeCounts(key, parsed);
    };

    const showVipRow = guestClass === 'vip' || guestClass === 'vvip' || guestClass === 'campuran';
    const showVvip = guestClass === 'vvip' || guestClass === 'campuran';
    const showVip = guestClass === 'vip' || guestClass === 'campuran';

    return (
        <div className="card">
            <div className="card-title">
                <span className="icon">👑</span> Kelas Tamu Undangan
            </div>
            <div className="gc-grid">
                <div
                    className={`gc-card ${guestClass === 'reguler' ? 'sel-reguler' : ''}`}
                    onClick={() => handleSelectClass('reguler')}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleSelectClass('reguler'); } }}
                    aria-pressed={guestClass === 'reguler'}
                >
                    <div className="gc-emoji">👤</div>
                    <div className="gc-name">Reguler</div>
                    <div className="gc-desc">Peserta umum</div>
                </div>
                <div
                    className={`gc-card ${guestClass === 'vip' ? 'sel-vip' : ''}`}
                    onClick={() => handleSelectClass('vip')}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleSelectClass('vip'); } }}
                    aria-pressed={guestClass === 'vip'}
                >
                    <div className="gc-emoji">⭐</div>
                    <div className="gc-name">VIP</div>
                    <div className="gc-desc">Tamu kehormatan</div>
                </div>
                <div
                    className={`gc-card ${guestClass === 'vvip' ? 'sel-vvip' : ''}`}
                    onClick={() => handleSelectClass('vvip')}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleSelectClass('vvip'); } }}
                    aria-pressed={guestClass === 'vvip'}
                >
                    <div className="gc-emoji">👑</div>
                    <div className="gc-name">VVIP</div>
                    <div className="gc-desc">Pejabat / protokol ketat</div>
                </div>
                <div
                    className={`gc-card ${guestClass === 'campuran' ? 'sel-campuran' : ''}`}
                    onClick={() => handleSelectClass('campuran')}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleSelectClass('campuran'); } }}
                    aria-pressed={guestClass === 'campuran'}
                >
                    <div className="gc-emoji">🎭</div>
                    <div className="gc-name">Campuran</div>
                    <div className="gc-desc">VVIP + VIP + Reguler</div>
                </div>
            </div>

            {showVipRow && (
                <div className="vip-row show">
                    {showVvip && (
                        <div className="field">
                            <label>👑 Jumlah Tamu VVIP</label>
                            <input
                                type="number"
                                inputMode="numeric"
                                min="0"
                                max={MAX_VIP}
                                placeholder="0"
                                value={guestCounts.vvip === 0 ? '' : guestCounts.vvip}
                                onChange={(e) => handleCountInput('vvip', e.target.value)}
                                autoComplete="off"
                            />
                        </div>
                    )}
                    {showVip && (
                        <div className="field">
                            <label>⭐ Jumlah Tamu VIP</label>
                            <input
                                type="number"
                                inputMode="numeric"
                                min="0"
                                max={MAX_VIP}
                                placeholder="0"
                                value={guestCounts.vip === 0 ? '' : guestCounts.vip}
                                onChange={(e) => handleCountInput('vip', e.target.value)}
                                autoComplete="off"
                            />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
