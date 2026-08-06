import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage2 from './pages/HomePage/HomePage2';

import HomePage from './pages/HomePage/HomePage';
import FAQsPage from './pages/FAQsPage/FAQsPage';
import TerminosPage from './pages/TerminosPage/TerminosPage';
import PrivacidadPage from './pages/PrivacidadPage/PrivacidadPage';
import PremiosPage from './pages/PremiosPage/PremiosPage';

import { DEFAULT_PRIZE_TIER } from './utils/prizeTiers';
import { useEffect, useRef } from 'react';
import './App.css';

function App() {

    const firstVisit = useRef(true);

  useEffect(() => {
    if(firstVisit.current) {
      
      firstVisit.current = false;
      console.log(firstVisit.current);
    }
    
  }, []); 

  console.log(firstVisit.current);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage  />} />
            <Route path="/home" element={<HomePage2  />} />
            <Route path="/premios" element={<Navigate to={`/premios/${DEFAULT_PRIZE_TIER}`} replace />} />
            <Route path="/premios/:tier" element={<PremiosPage />} />
            <Route path="/faqs" element={<FAQsPage />} />
            <Route path="/terminos-y-condiciones" element={<TerminosPage />} />
            <Route path="/politica-de-privacidad" element={<PrivacidadPage />} />
            <Route path="*" element={<HomePage  />} />
          </Routes>
        </main>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
