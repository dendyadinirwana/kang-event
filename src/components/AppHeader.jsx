import { useState, useEffect, startTransition } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, MessageSquare, Info, SunMoon } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import logoKemendespdt from '../assets/logo-kemendespdt.png';

const navLinks = [
    { name: 'Home', path: '/', icon: <Home size={18} strokeWidth={1.5} /> },
    { name: 'Feedback', path: '/feedback', icon: <MessageSquare size={18} strokeWidth={1.5} /> },
    { name: 'About', path: '/about', icon: <Info size={18} strokeWidth={1.5} /> },
];

export default function AppHeader() {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        startTransition(() => setMenuOpen(false));
    }, [location.pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (link) => location.pathname === link.path;

    return (
        <div className={`app-header-wrapper ${scrolled ? 'scrolled' : ''}`}>
            <header className="app-header">
                {/* Logo */}
                <div className="header-left">
                    <Link to="/" className="header-logo-link">
                        <img src={logoKemendespdt} alt="Kementerian Desa Logo" className="header-logo" />
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className="header-nav">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`header-nav-link ${isActive(link) ? 'active' : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Right Controls */}
                <div className="header-right">
                    <div className="header-theme-toggle">
                        <ThemeToggle />
                    </div>
                    {/* Hamburger (mobile only) - Framer Style 2 Lines */}
                    <button
                        className={`header-hamburger ${menuOpen ? 'open' : ''}`}
                        onClick={() => setMenuOpen((v) => !v)}
                        aria-label="Toggle navigation"
                    >
                        <span />
                        <span />
                    </button>
                </div>
            </header>

            {/* Mobile Drawer Overlay & Content */}
            {menuOpen && (
                <>
                    {/* Backdrop to close when clicking outside */}
                    <div className="mobile-nav-backdrop" onClick={() => setMenuOpen(false)} />

                    <div className="mobile-nav-drawer">

                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`mobile-nav-link ${isActive(link) ? 'active' : ''}`}
                                onClick={() => setMenuOpen(false)}
                            >
                                <span className="mobile-nav-icon">{link.icon}</span>
                                {link.name}
                            </Link>
                        ))}

                        {/* Theme Toggle within Mobile Drawer */}
                        <div className="mobile-nav-theme-toggle">
                            <span className="mobile-nav-icon" style={{ display: 'flex', alignItems: 'center' }}><SunMoon size={18} strokeWidth={1.5} /></span>
                            <div style={{ flex: 1 }}>Mode Tampilan</div>
                            <ThemeToggle />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
