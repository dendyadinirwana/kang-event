import { useState } from 'react';

const WEB3FORMS_KEY = '480a8ae5-b180-4fa9-8f8c-309d9953e082';

const STATUS = { idle: 'idle', loading: 'loading', success: 'success', error: 'error' };

export default function FeedbackPage() {
    const [status, setStatus] = useState(STATUS.idle);
    const [formData, setFormData] = useState({ name: '', subject: '', message: '' });

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus(STATUS.loading);

        try {
            const resp = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({
                    access_key: WEB3FORMS_KEY,
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
                                onClick={() => setStatus(STATUS.idle)}
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
                                />
                            </div>

                            {status === STATUS.error && (
                                <div className="feedback-error-msg">
                                    ⚠️ Gagal mengirim pesan. Coba lagi beberapa saat.
                                </div>
                            )}

                            <button
                                type="submit"
                                className="claude-btn claude-btn-primary feedback-submit-btn"
                                disabled={status === STATUS.loading}
                            >
                                {status === STATUS.loading ? (
                                    <><span className="feedback-spinner" /> Mengirim...</>
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
