import Header from './Header';
import Footer from './Footer';
import BackToTop from './BackToTop';

export default function Layout({ children, activeTab, onTabChange, hasChecklist = false }) {
    return (
        <div className="app-container">
            <div className="wrapper">
                <Header activeTab={activeTab} onTabChange={onTabChange} hasChecklist={hasChecklist} />
                {children}
            </div>
            <Footer />
            <BackToTop />
        </div>
    );
}
