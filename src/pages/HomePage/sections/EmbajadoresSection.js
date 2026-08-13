
import React, { useEffect, useRef } from 'react';
import './EmbajadoresSection.css';

import image1 from "../../../assets/mainPage/reto/desktop/reto_bckg.png";
import image1M from "../../../assets/mainPage/reto/mobil/reto-bckg.png";
import image2 from "../../../assets/mainPage/embajadores/desktop/embajadores-title.png";
import image2M from "../../../assets/mainPage/embajadores/mobil/embajadores-title.png";
import image3 from "../../../assets/mainPage/embajadores/desktop/embajadores-footer.png";
import image3M from "../../../assets/mainPage/embajadores/mobil/embajadores-footer.png";

import image4 from "../../../assets/mainPage/embajadores/desktop/embajadores-deco.png";

import image5 from "../../../assets/mainPage/embajadores/desktop/Brand_activision.png";

import control from "../../../assets/mainPage/reto/mobil/premios-flechas.png";
import control1 from "../../../assets/mainPage/reto/mobil/premios_flecha1.png";

import EmbajadorItem from '../../../components/EmbajadorItem/EmbajadorItem';

import { useViewport } from '../../../context/ViewportContext';

const EmbajadoresSection = () => {
  const { isMobile } = useViewport();
  const infoArrays = [{
    image: require("../../../assets/mainPage/embajadores/desktop/embajadores-card.png"),
    link1: "https://www.tiktok.com/@embajador1",
    link2: "https://www.instagram.com/embajador1"
  }, {
    image: require("../../../assets/mainPage/embajadores/desktop/embajadores-card.png"),
    link1: "https://www.tiktok.com/@embajador2",
    link2: "https://www.instagram.com/embajador2"
  }, {
    image: require("../../../assets/mainPage/embajadores/desktop/embajadores-card.png"),
    link1: "https://www.tiktok.com/@embajador1",
    link2: "https://www.instagram.com/embajador1"
  }, {
    image: require("../../../assets/mainPage/embajadores/desktop/embajadores-card.png"),
    link1: "https://www.tiktok.com/@embajador2",
    link2: "https://www.instagram.com/embajador2"
  },
  {
    image: require("../../../assets/mainPage/embajadores/desktop/embajadores-card.png"),
    link1: "https://www.tiktok.com/@embajador1",
    link2: "https://www.instagram.com/embajador1"
  }, {
    image: require("../../../assets/mainPage/embajadores/desktop/embajadores-card.png"),
    link1: "https://www.tiktok.com/@embajador2",
    link2: "https://www.instagram.com/embajador2"
  },
  {
    image: require("../../../assets/mainPage/embajadores/desktop/embajadores-card.png"),
    link1: "https://www.tiktok.com/@embajador1",
    link2: "https://www.instagram.com/embajador1"
  }, {
    image: require("../../../assets/mainPage/embajadores/desktop/embajadores-card.png"),
    link1: "https://www.tiktok.com/@embajador2",
    link2: "https://www.instagram.com/embajador2"
  },

  {
    image: require("../../../assets/mainPage/embajadores/desktop/embajadores-card.png"),
    link1: "https://www.tiktok.com/@embajador1",
    link2: "https://www.instagram.com/embajador1"
  }, {
    image: require("../../../assets/mainPage/embajadores/desktop/embajadores-card.png"),
    link1: "https://www.tiktok.com/@embajador2",
    link2: "https://www.instagram.com/embajador2"
  },
  {
    image: require("../../../assets/mainPage/embajadores/desktop/embajadores-card.png"),
    link1: "https://www.tiktok.com/@embajador1",
    link2: "https://www.instagram.com/embajador1"
  }, {
    image: require("../../../assets/mainPage/embajadores/desktop/embajadores-card.png"),
    link1: "https://www.tiktok.com/@embajador2",
    link2: "https://www.instagram.com/embajador2"
  }


];
  const [currentInfoIndex, setCurrentInfoIndex] = React.useState(0);
  const [slideDir, setSlideDir] = React.useState('left');

  const autoPlayRef = useRef(null);
  const pauseRef = useRef(null);

  const goTo = (nextIndex, dir, manual = false) => {
    setSlideDir(dir);
    setCurrentInfoIndex(nextIndex);
    if (manual) {
      clearTimeout(pauseRef.current);
      clearInterval(autoPlayRef.current);
      pauseRef.current = setTimeout(startAutoPlay, 15000);
    }
  };

  const startAutoPlay = () => {
    clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      setCurrentInfoIndex(prev => (prev + 4) % infoArrays.length);
      setSlideDir('left');
    }, 3000);
  };

  useEffect(() => {
    if (isMobile) startAutoPlay();
    return () => {
      clearInterval(autoPlayRef.current);
      clearTimeout(pauseRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("embajadores-section--visible");
        } else {
          el.classList.remove("embajadores-section--visible");
        }
      },
      { threshold: 0.15 }
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


      <div className="embajadores-section__content">
        <div className='embajadores-text-container'>
          <img src={image5} className='embajadores-section__brand' alt="Embajadores Brand" />
        </div>
        <img src={isMobile ? image2M : image2} className="embajadores-section__title" alt="Reto Title" />
        <><div className="embajadores-section__content-items">
              <EmbajadorItem image={infoArrays[currentInfoIndex].image} link1={infoArrays[currentInfoIndex].link1} link2={infoArrays[currentInfoIndex].link2}></EmbajadorItem>
              <EmbajadorItem image={infoArrays[currentInfoIndex + 1].image} link1={infoArrays[currentInfoIndex + 1].link1} link2={infoArrays[currentInfoIndex + 1].link2}></EmbajadorItem>
              <EmbajadorItem image={infoArrays[currentInfoIndex + 2].image} link1={infoArrays[currentInfoIndex + 2].link1} link2={infoArrays[currentInfoIndex + 2].link2}></EmbajadorItem>
              <EmbajadorItem image={infoArrays[currentInfoIndex + 3].image} link1={infoArrays[currentInfoIndex + 3].link1} link2={infoArrays[currentInfoIndex + 3].link2}></EmbajadorItem>
            </div></>

           <div className="embajadores-section__controls-container">
            <img src={control} onClick={() => goTo((currentInfoIndex - 4 + infoArrays.length) % infoArrays.length, 'right', true)} className="embajadores-section__control" alt="Reto Control" />
            <img src={image4} className='embajadores-section__deco' alt="Embajadores Deco" />
            <div className='embajadores-text-container'>
              <p className='embajadores-text'>{currentInfoIndex / 4 + 1} / {infoArrays.length / 4}</p>
            </div>
            <img src={control1} onClick={() => goTo((currentInfoIndex + 4) % infoArrays.length, 'left', true)} className="embajadores-section__control--right" alt="Reto Control" />
           

           </div>
        <div className="embajadores-section__footer-container">
          <img src={isMobile ? image3M : image3} className="embajadores-section__footer" alt="Reto Footer" />
        </div>
      </div>
    </section>
  );
};

export default EmbajadoresSection;
