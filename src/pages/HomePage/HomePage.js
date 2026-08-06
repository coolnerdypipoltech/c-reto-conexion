import { useEffect, useState } from 'react';
import Intro from './sections/Intro';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import InicioSection from './sections/InicioSection';
import RetoSection from './sections/RetoSection';

import PremiosSection from './sections/PremiosSection';

import DudasSection from './sections/DudasSection';

import './HomePage.css';

const HomePage = () => {
  
  console.log("HomePage rendered");

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
  <>
    <InicioSection />
    <RetoSection />
    <PremiosSection />
    <DudasSection />
    <Footer /> 
  </>
);
}


return (
    <>
    
    <div style={{minWidth: "100vw", minHeight: "100vh", backgroundColor: "red"}}></div>
    
      


    
    </>
  );


};

export default HomePage;
