import logoPPDT from '../assets/logo-ppdt.png';
import logoPRP from '../assets/logo-prp.png';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-inner">
                <div className="footer-logo-wrap">
                    <img
                        src={logoPPDT}
                        alt="Logo DITJEN PPDT"
                        className="footer-logo"
                    />
                    <img
                        src={logoPRP}
                        alt="Logo DitPRP"
                        className="footer-logo"
                    />
                </div>
                <div className="footer-text">
                    © 2026 | Aplikasi ini disusun dan dibuat untuk kebutuhan internal Direktorat Penyerasian Rencana dan Program Percepatan Pembangunan Daerah Tertinggal, Direktorat Jenderal Percepatan Pembangunan Daerah Tertinggal, Kementerian Desa dan Pembangunan Daerah Tertinggal Republik Indonesia.
                </div>
            </div>
        </footer>
    );
}
