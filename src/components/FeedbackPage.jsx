import { useState, useRef } from 'react';

const STATUS = { idle: 'idle', loading: 'loading', success: 'success', error: 'error', cooldown: 'cooldown' };

const COOLDOWN_SECONDS = 60;

export default function FeedbackPage() {
    const [status, setStatus] = useState(STATUS.idle);
    const [formData, setFormData] = useState({ name: '', subject: '', message: '' });
    const [cooldownLeft, setCooldownLeft] = useState(0);
    const cooldownTimer = useRef(null);

    const startCooldown = () => {
        setCooldownLeft(COOLDOWN_SECONDS);
        setStatus(STATUS.cooldown);
        let remaining = COOLDOWN_SECONDS;
        cooldownTimer.current = setInterval(() => {
            remaining -= 1;
            setCooldownLeft(remaining);
            if (remaining <= 0) {
                clearInterval(cooldownTimer.current);
                setStatus(STATUS.idle);
            }
        }, 1000);
    };

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (status === STATUS.loading || status === STATUS.cooldown) return;
        setStatus(STATUS.loading);

        const apiKey = import.meta.env.VITE_WEB3FORMS_KEY;
        if (!apiKey) {
            console.error('Web3Forms key not configured. Set VITE_WEB3FORMS_KEY in .env');
            setStatus(STATUS.error);
            return;
        }

        try {
            const resp = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({
                    access_key: apiKey,
                    subject: formData.subject || 'Feedback – Aplikasi Simulasi Kegiatan',
                    from_name: formData.name || 'Pengguna Aplikasi',
                    message: formData.message,
                    replyto: 'noreply@simulasi-kegiatan.app',
                }),
            });

            const data = await resp.json();
            if (data.success) {
                setStatus(STATUS.success);
                setFormData({ name: '', subject: '', message: '' });
            } else {
                throw new Error(data.message || 'Gagal mengirim');
            }
        } catch (err) {
            console.error(err);
            setStatus(STATUS.error);
        }
    };

    const handleSendAgain = () => {
        setStatus(STATUS.idle);
        startCooldown();
    };

    return (
        <div className="page-outer">
            {/* Hero */}
            <div className="page-hero">
                <h1 className="app-title">Beri Kami Masukan</h1>
                <p className="page-hero-sub">
                    Kritik, saran, atau laporan bug sangat kami hargai untuk meningkatkan kualitas aplikasi.
                </p>
            </div>

            <div className="feedback-body">
                {/* Info Pills */}
                <div className="feedback-pills">
                    <div className="feedback-pill"><span>🐛</span> Lapor Bug</div>
                    <div className="feedback-pill"><span>💡</span> Saran Fitur</div>
                    <div className="feedback-pill"><span>🙋</span> Tanya Developer</div>
                </div>

                {/* Form Card */}
                <div className="feedback-card">
                    {status === STATUS.success ? (
                        <div className="feedback-success">
                            <div className="feedback-success-icon">✅</div>
                            <h3>Pesan Terkirim!</h3>
                            <p>Terima kasih atas masukanmu. Kami akan meninjau dan merespons sesegera mungkin.</p>
                            <button
                                className="claude-btn claude-btn-secondary"
                                onClick={handleSendAgain}
                                style={{ marginTop: '12px' }}
                            >
                                Kirim Lagi
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="feedback-form">
                            <div className="field">
                                <label htmlFor="name">Nama Anda</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Misal: Budi Santoso"
                                    value={formData.name}
                                    onChange={handleChange}
                                    autoComplete="off"
                                    spellCheck={false}
                                />
                            </div>

                            <div className="field">
                                <label htmlFor="subject">Subjek <span className="required-star">*</span></label>
                                <input
                                    id="subject"
                                    name="subject"
                                    type="text"
                                    placeholder="Misal: Tombol Generate tidak berfungsi"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                    autoComplete="off"
                                    spellCheck={false}
                                />
                            </div>

                            <div className="field">
                                <label htmlFor="message">Detail Pesan <span className="required-star">*</span></label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Ceritakan sedetail mungkin, termasuk langkah-langkah yang sudah dicoba..."
                                    required
                                    style={{ minHeight: '140px' }}
                                    value={formData.message}
                                    onChange={handleChange}
                                    autoComplete="off"
                                />
                            </div>

                            {status === STATUS.error && (
                                <div className="feedback-error-msg">
                                    ⚠️ Gagal mengirim pesan. Coba lagi beberapa saat.
                                </div>
                            )}

                            {status === STATUS.cooldown && (
                                <div className="feedback-error-msg" style={{ background: 'var(--accent-bg)', borderColor: 'var(--accent)', color: 'var(--accent)' }}>
                                    ⏳ Harap tunggu {cooldownLeft} detik sebelum mengirim pesan berikutnya.
                                </div>
                            )}

                            <button
                                type="submit"
                                className="claude-btn claude-btn-primary feedback-submit-btn"
                                disabled={status === STATUS.loading || status === STATUS.cooldown}
                            >
                                {status === STATUS.loading ? (
                                    <><span className="feedback-spinner" /> Mengirim...</>
                                ) : status === STATUS.cooldown ? (
                                    <>⏳ Tunggu {cooldownLeft}s...</>
                                ) : (
                                    <><span>✉️</span> Kirim Pesan</>
                                )}
                            </button>

                            <p className="feedback-note">
                                Pesan akan langsung dikirim ke email pengembang tanpa membuka aplikasi mail.
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
