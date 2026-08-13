import { useEffect, useState } from 'react';
import Intro from './sections/Intro';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import InicioSection from './sections/InicioSection';
import RetoSection from './sections/RetoSection';
import sticker from "../../assets/mainPage/dudas/desktop/Gato.png"

import InfoSection from './sections/InfoSection';
import CalendarSection from './sections/CalendarSection';
import PremiosSection from './sections/PremiosSection';
import EmbajadoresSection from './sections/EmbajadoresSection';
import DudasSection from './sections/DudasSection';
import ParallaxStickers from '../../components/ParallaxStickers/ParallaxStickers';

import './HomePage.css';

const HomePage = () => {
  
;

  const location = useLocation();
  const navigate = useNavigate();
    const [introDone, setIntroDone] = useState(false);
  const [show, setShow] = useState(false);



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


if(!introDone){
  return (<Intro onDone={() => {
        setShow(true);
        setIntroDone(true)
      }} />)
}


if(introDone && show){
return (
  <div className="home-page">
    <ParallaxStickers />
    <img src={sticker} className="premios-section__sticker--gato" alt="sticker" loading="lazy"  />
    <InicioSection />
    <RetoSection />
    <PremiosSection />
    <InfoSection />
    <CalendarSection />
    <EmbajadoresSection />
    <DudasSection />
    <Footer />
  </div>
);
}


return (
    <>
    
    <div style={{minWidth: "100vw", minHeight: "100vh", backgroundColor: "red"}}></div>
    
      


    
    </>
  );


};

export default HomePage;
