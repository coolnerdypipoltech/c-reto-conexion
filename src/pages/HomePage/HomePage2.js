import { useEffect, useState } from 'react';
import Intro from './sections/Intro';
import { useLocation, useNavigate } from 'react-router-dom';

import InicioSection from './sections/InicioSection';
import RetoSection from './sections/RetoSection';
import Footer from '../../components/Footer/Footer';
import PremiosSection from './sections/PremiosSection';
import sticker from "../../assets/mainPage/dudas/desktop/Gato.png"

import DudasSection from './sections/DudasSection';
import ParallaxStickers from '../../components/ParallaxStickers/ParallaxStickers';

import './HomePage.css';

const HomePage = () => {
  
  

  const location = useLocation();
  const navigate = useNavigate();


  useEffect(() => {
    const scrollTo = location.state?.scrollTo;
    if (scrollTo) {
      const el = document.getElementById(scrollTo);
      if (el) {
        const navbarHeight = parseInt(
          getComputedStyle(document.documentElement).getPropertyValue('--navbar-height'),
          10
        );
        const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      }
      navigate(location.pathname, { replace: true, state: {} });
    } else {
      window.scrollTo(0, 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



return (
    <>
    <div className="home-page">
      
          <ParallaxStickers />
          <img src={sticker} className="premios-section__sticker--gato" alt="sticker" loading="lazy"  />
          <InicioSection />
          <RetoSection />
          
          <PremiosSection />
          <DudasSection />
          <Footer></Footer>
        </div>

    </>
  );


};

export default HomePage;
