import { Routes, Route } from 'react-router-dom';
import AppHeader from './components/AppHeader';
import Home from './components/Home';
import FeedbackPage from './components/FeedbackPage';
import AboutPage from './components/AboutPage';

export default function App() {
  return (
    <div className="app-container">
      <AppHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}
