export default function GuestClass({ guestClass, onChangeClass, guestCounts, onChangeCounts }) {
    const handleSelectClass = (cls) => {
        onChangeClass(cls);
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
                >
                    <div className="gc-emoji">👤</div>
                    <div className="gc-name">Reguler</div>
                    <div className="gc-desc">Peserta umum</div>
                </div>
                <div
                    className={`gc-card ${guestClass === 'vip' ? 'sel-vip' : ''}`}
                    onClick={() => handleSelectClass('vip')}
                >
                    <div className="gc-emoji">⭐</div>
                    <div className="gc-name">VIP</div>
                    <div className="gc-desc">Tamu kehormatan</div>
                </div>
                <div
                    className={`gc-card ${guestClass === 'vvip' ? 'sel-vvip' : ''}`}
                    onClick={() => handleSelectClass('vvip')}
                >
                    <div className="gc-emoji">👑</div>
                    <div className="gc-name">VVIP</div>
                    <div className="gc-desc">Pejabat / protokol ketat</div>
                </div>
                <div
                    className={`gc-card ${guestClass === 'campuran' ? 'sel-campuran' : ''}`}
                    onClick={() => handleSelectClass('campuran')}
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
                                min="0"
                                placeholder="Jumlah VVIP"
                                value={guestCounts.vvip}
                                onChange={(e) => onChangeCounts('vvip', parseInt(e.target.value) || 0)}
                            />
                        </div>
                    )}
                    {showVip && (
                        <div className="field">
                            <label>⭐ Jumlah Tamu VIP</label>
                            <input
                                type="number"
                                min="0"
                                placeholder="Jumlah VIP"
                                value={guestCounts.vip}
                                onChange={(e) => onChangeCounts('vip', parseInt(e.target.value) || 0)}
                            />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
