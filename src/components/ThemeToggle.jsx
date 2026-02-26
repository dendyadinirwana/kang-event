import { useState, useEffect } from 'react';

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('theme');
            return saved === 'dark';
        }
        return false;
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    return (
        <button
            className="theme-toggle-pill"
            onClick={() => setIsDark((prev) => !prev)}
            title={isDark ? 'Beralih ke mode terang' : 'Beralih ke mode gelap'}
            aria-label="Toggle theme"
            aria-checked={isDark}
            role="switch"
        >
            <span className="theme-toggle-track">
                <span className="theme-toggle-thumb">
                    {isDark ? '🌙' : '☀️'}
                </span>
            </span>
        </button>
    );
}
