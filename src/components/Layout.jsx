import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, activeTab, onTabChange }) {
    return (
        <>
            <div className="wrapper">
                <Header activeTab={activeTab} onTabChange={onTabChange} />
                {children}
            </div>
            <Footer />
        </>
    );
}
