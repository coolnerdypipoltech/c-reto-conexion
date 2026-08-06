import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { PRIZE_TIER_ORDER } from '../../../utils/prizeTiers';

import bgImage from "../../../assets/mainPage/premios/desktop/premios-bckg.png";
import bgImageM from "../../../assets/mainPage/premios/mobil/premios-bckg.png";
import epicaImg from "../../../assets/mainPage/premios/desktop/premios-epica.png";
import legendariaImg from "../../../assets/mainPage/premios/desktop/premios-legendaria.png";
import miticaImg from "../../../assets/mainPage/premios/desktop/premios-mitica.png";
import titulos from "../../../assets/mainPage/premios/desktop/premios-titulos.png";
import image9 from "../../../assets/cod-logo.svg";
import './PremiosSection.css';

const TIER_IMAGES = {
  legendarias: legendariaImg,
  miticas: miticaImg,
  epicas: epicaImg,
};

const PremiosSection = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("premios-section--visible");
        } else {
          el.classList.remove("premios-section--visible");
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="premios"
      ref={sectionRef}
      className="premios-section"
      style={{
        '--bg-desktop': `url(${bgImage})`,
        '--bg-mobile': `url(${bgImageM})`,
      }}
    >
     
      <div className="premios-section__content container">
        <img className='premios-section__title' src={titulos} alt="Titulo" style={{paddingLeft: "10px", paddingRight: "10px"}} />

        <div className="premios-section__grid">
          {PRIZE_TIER_ORDER.map((slug) => (
            <button
              type="button"
              key={slug}
              className="premios-card"
              onClick={() => navigate(`/premios/${slug}`)}
            >
              <div className="premios-card__image-wrapper">
                <img
                  src={TIER_IMAGES[slug]}
                  alt={slug}
                  className="premios-card__image"
                />
              </div>
            </button>
          ))}
        </div>
        <img src={image9} style={{ width: '125px', height: 'auto', marginTop : "50px" }} alt="Titulo" />
      </div>
    </section>
  );
};

export default PremiosSection;
