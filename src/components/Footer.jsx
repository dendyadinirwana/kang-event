export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-inner">
                <div className="footer-logo-wrap">
                    <img
                        src="https://ditjenppd.kemendesa.go.id/storage/2021/08/logo-ditjen-ppdd-768x221.png"
                        alt="Logo DITJEN PPDT"
                        className="footer-logo"
                    />
                </div>
                <div className="footer-divider"></div>
                <div className="footer-text">
                    © {new Date().getFullYear()} | Aplikasi ini disusun dan dibuat untuk kebutuhan internal Direktorat Penyerasian Rencana dan Program<br />
                    Percepatan Pembangunan Daerah Tertinggal, Direktorat Jenderal Percepatan Pembangunan Daerah Tertinggal,
                    Kementerian Desa dan Pembangunan Daerah Tertinggal Republik Indonesia.
                </div>
            </div>
        </footer>
    );
}
