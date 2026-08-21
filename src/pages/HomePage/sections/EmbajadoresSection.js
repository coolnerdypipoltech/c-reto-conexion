
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './EmbajadoresSection.css';

import image1 from "../../../assets/mainPage/embajadores/desktop/embajadores-bckg.png";
import image1M from "../../../assets/mainPage/embajadores/mobil/embajadores-bckg.png";
import image2 from "../../../assets/mainPage/embajadores/desktop/embajadores-title.png";
import image2M from "../../../assets/mainPage/embajadores/mobil/embajadores-title.png";
import image3 from "../../../assets/mainPage/embajadores/desktop/embajadores-footer.png";
import image3M from "../../../assets/mainPage/embajadores/mobil/embajadores-footer.png";

import image5 from "../../../assets/mainPage/embajadores/desktop/Brand_activision.png";

import image6 from "../../../assets/mainPage/embajadores/desktop/embajadores-poster.png"
import image6M from "../../../assets/mainPage/embajadores/mobil/embajadores-poster.png";

import image7 from "../../../assets/mainPage/embajadores/desktop/embajadores-button.png"
import image7M from "../../../assets/mainPage/embajadores/mobil/embajadores-button.png";

import image8 from "../../../assets/mainPage/embajadores/desktop/embajadores-button2.png";

import sticker1 from "../../../assets/mainPage/embajadores/desktop/embajadores-sticker.png";
import sticker2 from "../../../assets/mainPage/embajadores/desktop/embajadores-sticker2.png";



import { useViewport } from '../../../context/ViewportContext';

const EmbajadoresSection = () => {
  const { isMobile } = useViewport();
  const navigate = useNavigate();


  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log('IntersectionObserver entry:', entry);
        if (entry.isIntersecting) {
          el.classList.add("embajadores-section--visible");
        } else {
          el.classList.remove("embajadores-section--visible");
        }
      },
      { threshold: 0.15, rootMargin: "20% 0px 20% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);


  return (
    <section
      id="embajadores"
      ref={sectionRef}
      className="embajadores-section"
      style={{
        '--bg-desktop': `url(${image1})`,
        '--bg-mobile': `url(${image1M})`,
      }}
    >
      <div className='embajadores-sticker-container'>
        <img src={sticker1} className='embajadores-section__sticker1' alt="Embajadores Sticker" />
      </div>

      {!isMobile && (<div className='embajadores-sticker-container'>
        <img src={sticker2} className='embajadores-section__sticker2' alt="Embajadores Sticker" />
      </div>)}

      <div className="embajadores-section__content">
        <div className='embajadores-text-container'>
          <img src={image5} className='embajadores-section__brand' alt="Embajadores Brand" />
        </div>
        <img src={isMobile ? image2M : image2} className="embajadores-section__title" alt="Reto Title" />
      
        <img src={isMobile ? image6M : image6} className="embajadores-section__poster" alt="Reto Poster" />
        

        {!isMobile && (<div className='embajadores-text-container2'>
          <img
            src={isMobile ? image7M : image7}
            className="embajadores-section__button"
            alt="Embajador Button"
            onClick={() => navigate('/embajadores')}
            style={{ cursor: 'pointer' }}
          />
          <img
            src={image8}
            className="embajadores-section__button2"
            alt="Embajador Button"
            onClick={() => navigate('/embajadores')}
            style={{ cursor: 'pointer' }}
          />
        </div>)}

        {isMobile && (<>
        
          <img
          src={isMobile ? image7M : image7}
          className="embajadores-section__button"
          alt="Embajador Button"
          onClick={() => navigate('/embajadores')}
          style={{ cursor: 'pointer' }}
        />
          <div className='embajadores-text-container2'>

            <img
            src={image8}
            className="embajadores-section__button2"
            alt="Embajador Button"
            onClick={() => navigate('/embajadores')}
            style={{ cursor: 'pointer' }}
          />
          </div>
          
        </>)}

        <div className="embajadores-section__footer-container">
          <img src={isMobile ? image3M : image3} className="embajadores-section__footer" alt="Reto Footer" />
        </div>
      </div>
    </section>
  );
};

export default EmbajadoresSection;
