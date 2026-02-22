export default function TeamCounters({ teamCounts, onChangeCount }) {
    const handleCountChange = (role, delta, minIncrement = 1) => {
        let current = teamCounts[role] || 0;
        let nextValue = current + (delta * minIncrement);

        // Peserta minimum is 5, others minimum 0
        let minValue = role === 'peserta' ? 5 : 0;
        if (nextValue < minValue) nextValue = minValue;

        onChangeCount(role, nextValue);
    };

    const handleInputChange = (role, value) => {
        let parsed = parseInt(value) || 0;
        let minValue = role === 'peserta' ? 5 : 0;
        if (parsed < minValue) parsed = minValue;
        onChangeCount(role, parsed);
    };

    const counters = [
        { id: 'peserta', label: 'Peserta Umum', step: 5 },
        { id: 'narasumber', label: 'Narasumber', step: 1 },
        { id: 'moderator', label: 'Moderator', step: 1 },
        { id: 'mc', label: 'MC / Host', step: 1 },
        { id: 'panitia', label: 'Panitia', step: 1 },
    ];

    return (
        <div className="card">
            <div className="card-title">
                <span className="icon">👥</span> Peserta &amp; Tim
            </div>
            <div className="counters-row">
                {counters.map((c) => (
                    <div className="counter-box" key={c.id}>
                        <div className="lbl-top">{c.label}</div>
                        <div className="counter">
                            <button
                                className="cbtn"
                                onClick={() => handleCountChange(c.id, -1, c.step)}
                            >
                                −
                            </button>
                            <input
                                type="number"
                                className="cval-input"
                                value={teamCounts[c.id]}
                                min={c.id === 'peserta' ? 5 : 0}
                                onChange={(e) => handleInputChange(c.id, e.target.value)}
                            />
                            <button
                                className="cbtn"
                                onClick={() => handleCountChange(c.id, 1, c.step)}
                            >
                                +
                            </button>
                        </div>
                        <div className="clbl">orang</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
