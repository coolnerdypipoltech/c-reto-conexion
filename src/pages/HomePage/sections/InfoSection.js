import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import image1 from "../../../assets/mainPage/info/desktop/info-bckg.png";
import image1M from "../../../assets/mainPage/info/mobil/info-bckg.png";

import image2 from "../../../assets/mainPage/info/desktop/info-titulo.png";
import image3 from "../../../assets/mainPage/info/desktop/info-subtitulo.png";
import image4 from "../../../assets/mainPage/info/desktop/info-arma.png";
import image5 from "../../../assets/mainPage/info/desktop/info-button.png";
import image6 from "../../../assets/mainPage/inicio/desktop/img_ghost.png";

import { useViewport } from "../../../context/ViewportContext";
import "./InfoSection.css";

const InfoSection = () => {
  const { isMobile } = useViewport();
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("info-section--visible");
        } else {
          el.classList.remove("info-section--visible");
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="info"
      ref={sectionRef}
      className="info-section"
      style={{
        "--bg-desktop": `url(${image1})`,
        "--bg-mobile": `url(${image1M})`,
      }}
    >
      <div className="info-section-container">
        {isMobile && (<img
          src={image6}
          className="info-section__sticker3"
          alt="ghost"
          loading="lazy"
        />)}
        <img
          src={image2}
          className="info-section__title"
          alt="title"
          loading="lazy"
        />
        <img
          src={image3}
          className="info-section__subtitle"
          alt="subtitle"
          loading="lazy"
        />
        <p className="info-section__text">
          COMPLETA EL RETO Y ASEGURA TU PARTICIPACIÓN EN EL SORTEO DE UNA DE LAS{" "}
          <span style={{ color: "#FFFF0D" }}>MÁS DE 1800 RECOMPENSAS.</span>
        </p>
        <img
          src={image5}
          className="info-section__button"
          alt="button"
          loading="lazy"
        />
        {isMobile && (        <div className="info-section__sticker4-container">
          <img
          src={image4}
          className="info-section__sticker4"
          alt="sticker"
          loading="lazy"
        />
        </div>)}
      </div>

      {!isMobile && (<div className="info-section__container-1">
        <img
          src={image4}
          className="info-section__sticker1"
          alt="sticker"
          loading="lazy"
        />
      </div>)}
      {!isMobile && (      <div className="info-section__container-2">
        <img
          src={image6}
          className="info-section__sticker2"
          alt="ghost"
          loading="lazy"
        />
      </div>)}

    </section>
  );
};

export default InfoSection;
