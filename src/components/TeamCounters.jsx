const LIMITS = {
    peserta: { min: 5, max: 5000, step: 5 },
    narasumber: { min: 0, max: 50, step: 1 },
    moderator: { min: 0, max: 50, step: 1 },
    mc: { min: 0, max: 50, step: 1 },
    panitia: { min: 0, max: 200, step: 1 },
};

export default function TeamCounters({ teamCounts, onChangeCount }) {
    const handleCountChange = (role, delta) => {
        const { min, max, step } = LIMITS[role];
        const current = teamCounts[role] || 0;
        const nextValue = Math.min(max, Math.max(min, current + delta * step));
        onChangeCount(role, nextValue);
    };

    const handleInputChange = (role, value) => {
        const { min, max } = LIMITS[role];
        let parsed = parseInt(value, 10);
        if (isNaN(parsed)) parsed = min;
        parsed = Math.min(max, Math.max(min, parsed));
        onChangeCount(role, parsed);
    };

    const counters = [
        { id: 'peserta', label: 'Peserta Umum' },
        { id: 'narasumber', label: 'Narasumber' },
        { id: 'moderator', label: 'Moderator' },
        { id: 'mc', label: 'MC / Host' },
        { id: 'panitia', label: 'Panitia' },
    ];

    return (
        <div className="card">
            <div className="card-title">
                <span className="icon">👥</span> Peserta &amp; Tim
            </div>
            <div className="counters-row">
                {counters.map((c) => {
                    const { min, max } = LIMITS[c.id];
                    const val = teamCounts[c.id] ?? min;
                    const atMin = val <= min;
                    const atMax = val >= max;
                    return (
                        <div className="counter-box" key={c.id}>
                            <div className="lbl-top">{c.label}</div>
                            <div className="counter">
                                <button
                                    className="cbtn"
                                    onClick={() => handleCountChange(c.id, -1)}
                                    disabled={atMin}
                                    aria-label={`Kurangi ${c.label}`}
                                >
                                    −
                                </button>
                                <input
                                    type="number"
                                    inputMode="numeric"
                                    className="cval-input"
                                    value={val}
                                    min={min}
                                    max={max}
                                    autoComplete="off"
                                    onChange={(e) => handleInputChange(c.id, e.target.value)}
                                />
                                <button
                                    className="cbtn"
                                    onClick={() => handleCountChange(c.id, 1)}
                                    disabled={atMax}
                                    aria-label={`Tambah ${c.label}`}
                                >
                                    +
                                </button>
                            </div>
                            <div className="clbl">orang</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
