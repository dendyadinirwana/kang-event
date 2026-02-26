import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, activeTab, onTabChange, hasChecklist = false }) {
    return (
        <>
            <div className="wrapper">
                <Header activeTab={activeTab} onTabChange={onTabChange} hasChecklist={hasChecklist} />
                {children}
            </div>
            <Footer />
        </>
    );
}
