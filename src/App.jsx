import { Routes, Route } from 'react-router-dom';
import AppHeader from './components/AppHeader';
import Home from './components/Home';
import FeedbackPage from './components/FeedbackPage';
import AboutPage from './components/AboutPage';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  return (
    <div className="app-container">
      <AppHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feedback" element={
          <>
            <div className="wrapper">
              <FeedbackPage />
            </div>
            <Footer />
            <BackToTop />
          </>
        } />
        <Route path="/about" element={
          <>
            <div className="wrapper">
              <AboutPage />
            </div>
            <Footer />
            <BackToTop />
          </>
        } />
      </Routes>
    </div>
  );
}
