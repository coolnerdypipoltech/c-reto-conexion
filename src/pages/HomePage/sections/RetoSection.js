
import React, { useEffect, useRef } from 'react';
import './RetoSection.css';

import image1 from "../../../assets/mainPage/reto/desktop/reto_bckg.png";
import image1M from "../../../assets/mainPage/reto/mobil/reto-bckg.png";
import image2 from "../../../assets/mainPage/reto/desktop/Titulo.png";
import image3 from "../../../assets/mainPage/reto/desktop/reto_footer.png";
import image3M from "../../../assets/mainPage/reto/mobil/reto_footer.png";

import stickerKnife from "../../../assets/mainPage/reto/desktop/sticker-knife.png";
import stickerGun from "../../../assets/mainPage/reto/desktop/sticker-gun.png";
import stcikerCrown from "../../../assets/mainPage/reto/desktop/sticker-crown.png";

import infoImage1 from "../../../assets/mainPage/reto/desktop/reto_info-1.png";
import infoImage2 from "../../../assets/mainPage/reto/desktop/reto_info-2.png";
import infoImage3 from "../../../assets/mainPage/reto/desktop/reto_info-3.png";

import flecha1 from "../../../assets/mainPage/reto/desktop/reto_flecha1.png";
import flecha2 from "../../../assets/mainPage/reto/desktop/reto_flecha2.png";


import control from "../../../assets/mainPage/reto/mobil/premios-flechas.png";
import control1 from "../../../assets/mainPage/reto/mobil/premios_flecha1.png";

import { useViewport } from '../../../context/ViewportContext';

const RetoSection = () => {
  const { isMobile } = useViewport();
  const infoArrays = [infoImage1, infoImage2, infoImage3];
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
      setCurrentInfoIndex(prev => (prev + 1) % infoArrays.length);
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
          el.classList.add("reto-section--visible");
        } else {
          el.classList.remove("reto-section--visible");
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="reto"
      ref={sectionRef}
      className="reto-section"
      style={{
        '--bg-desktop': `url(${image1})`,
        '--bg-mobile': `url(${image1M})`,
      }}
    >

<div className="reto-section__stickers">
    <img src={stickerKnife} className=" reto-section__sticker--knife " alt="Sticker Knife" />
    <img src={stickerGun} className=" reto-section__sticker--gun" alt="Sticker Gun" />
    <img src={stcikerCrown} className="reto-section__sticker--crown" alt="Sticker Crown" />

</div>
      <div className="reto-section__content container">
        <img src={image2} className="reto-section__title" alt="Reto Title" />
        {isMobile ? (
          <><div className="reto-section__info-mobil-container">
            <img src={control} onClick={() => goTo((currentInfoIndex - 1 + infoArrays.length) % infoArrays.length, 'right', true)} className="reto-section__control" alt="Reto Control" />
            <img src={control1} onClick={() => goTo((currentInfoIndex + 1) % infoArrays.length, 'left', true)} className="reto-section__control--right" alt="Reto Control" />
            <img
              key={currentInfoIndex}
              src={infoArrays[currentInfoIndex]}
              className={`reto-section__info-mobil reto-section__info-mobil--${slideDir}-in`}
              alt={`Reto Info ${currentInfoIndex + 1}`}
            />
            </div></>
        ) : (
          <div className="reto-section__info-desktop">
            <img src={infoImage1} className="reto-section__info" alt="Reto Info" />
            <div className="reto-section__info-arrows">
              <img src={flecha1} className="reto-section__info-arrow-1" alt="Flecha Left" />

            </div>
            <img src={infoImage2} className="reto-section__info" alt="Reto Info" />
            <div className="reto-section__info-arrows">

              <img src={flecha2} className="reto-section__info-arrow-2" alt="Flecha Right" />
            </div>
            <img src={infoImage3} className="reto-section__info" alt="Reto Info" />
          </div>
        )}

        <div className="reto-section__footer-container">
          <img src={isMobile ? image3M : image3} className="reto-section__footer" alt="Reto Footer" />
        </div>
      </div>
    </section>
  );
};

export default RetoSection;
