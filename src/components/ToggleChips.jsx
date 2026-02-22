export default function ToggleChips({ options, selectedValues, onChange }) {
    const toggleChip = (value) => {
        if (selectedValues.includes(value)) {
            onChange(selectedValues.filter(v => v !== value));
        } else {
            onChange([...selectedValues, value]);
        }
    };

    return (
        <div className="toggle-group">
            {options.map((opt) => (
                <button
                    key={opt.value}
                    type="button"
                    className={`toggle-chip ${selectedValues.includes(opt.value) ? 'active' : ''}`}
                    onClick={() => toggleChip(opt.value)}
                >
                    {opt.label}
                </button>
            ))}
        </div>
    );
}
