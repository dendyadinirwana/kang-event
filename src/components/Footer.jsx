import { logoBase64_0 } from '../assets/logoBase64';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-inner">
                <div className="footer-logo-wrap">
                    <img
                        src={logoBase64_0}
                        alt="Logo DITJEN PPDT"
                        className="footer-logo"
                    />
                </div>
                <div className="footer-text">
                    © 2026 | Aplikasi ini disusun dan dibuat untuk kebutuhan internal Direktorat Penyerasian Rencana dan Program <br />
                    Percepatan Pembangunan Daerah Tertinggal, Direktorat Jenderal Percepatan Pembangunan Daerah Tertinggal, Kementerian Desa dan Pembangunan Daerah Tertinggal Republik Indonesia.
                </div>
            </div>
        </footer>
    );
}
