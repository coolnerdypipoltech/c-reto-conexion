import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { PRIZE_TIER_ORDER } from '../../../utils/prizeTiers';

import bgImage from "../../../assets/mainPage/premios/desktop/premios-bckg.png";
import bgImageM from "../../../assets/mainPage/premios/mobil/premios-bckg.png";
import epicaImg from "../../../assets/mainPage/premios/desktop/premios-epica.png";

import legendariaImg from "../../../assets/mainPage/premios/desktop/premios-legendaria.png";
import miticaImg from "../../../assets/mainPage/premios/desktop/premios-mitica.png";
import titulos from "../../../assets/mainPage/premios/desktop/premios-titulos.png";
import image9 from "../../../assets/cod-logo.svg";

import stickerKnife from "../../../assets/mainPage/reto/desktop/sticker-knife.png";
import stickerBomb from "../../../assets/mainPage/premios/mobil/sticker-bomb.png";


import './PremiosSection.css';

const TIER_IMAGES = {
  legendarias: legendariaImg,
  miticas: miticaImg,
  epicas: epicaImg,
};

// Same pacing as the PrizeCardShowcase gallery shake: one card takes its
// turn every SHAKE_STEP_MS, cycling sequentially through the cards.
const SHAKE_STEP_MS = 1800;

const PremiosSection = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const [shakeIndex, setShakeIndex] = useState(0);

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

  useEffect(() => {
    const id = setInterval(() => {
      setShakeIndex((i) => (i + 1) % PRIZE_TIER_ORDER.length);
    }, SHAKE_STEP_MS);
    return () => clearInterval(id);
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


<div className="premios-section__stickers">
    <img src={stickerKnife} className="premios-section__sticker--knife" alt="Sticker Knife" />
    <img src={stickerBomb} className="premios-section__sticker--bomb" alt="Sticker Bomb" />

</div>

     
      <div className="premios-section__content container">
        <img className='premios-section__title' src={titulos} alt="Titulo" style={{paddingLeft: "10px", paddingRight: "10px"}} />

        <div className="premios-section__grid">
          {PRIZE_TIER_ORDER.map((slug, index) => (
            <button
              type="button"
              key={slug}
              className="premios-card"
              onClick={() => navigate(`/premios/${slug}`)}
            >
              <div className="premios-card__image-wrapper">
                <span className={`premios-card__shakewrap${index === shakeIndex ? ' is-shaking' : ''}`}>
                  <img
                    src={TIER_IMAGES[slug]}
                    alt={slug}
                    className="premios-card__image"
                  />
                </span>
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
