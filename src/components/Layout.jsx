import Header from './Header';
import Footer from './Footer';
import BackToTop from './BackToTop';

export default function Layout({
    children,
    activeTab,
    onTabChange,
    hasChecklist = false,
    title,
    subtitle,
    showTabs = false
}) {
    return (
        <>
            <div className="wrapper">
                <Header
                    activeTab={activeTab}
                    onTabChange={onTabChange}
                    hasChecklist={hasChecklist}
                    title={title}
                    subtitle={subtitle}
                    showTabs={showTabs}
                />
                {children}
            </div>
            <Footer />
            <BackToTop />
        </>
    );
}
