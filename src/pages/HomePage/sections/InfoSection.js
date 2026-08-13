import { useEffect, useRef, useState } from "react";
import image1 from "../../../assets/mainPage/info/desktop/info-bckg.png";
import image1M from "../../../assets/mainPage/info/mobil/info-bckg.png";

import image2 from "../../../assets/mainPage/info/desktop/info-titulo.png";
import image3 from "../../../assets/mainPage/info/desktop/info-subtitulo.png";
import image4 from "../../../assets/mainPage/info/desktop/info-heli.png";
import image5 from "../../../assets/mainPage/info/desktop/info-button.png";
import image6 from "../../../assets/mainPage/info/desktop/info-art.png";
import image7 from "../../../assets/mainPage/info/desktop/info-ghost.png";
import popupBg from "../../../assets/mainPage/info/desktop/info-popup.png";
import popupTitle from "../../../assets/mainPage/info/desktop/info-title2.png";
import popupClose from "../../../assets/mainPage/info/desktop/info-close.png";
import popupBullet from "../../../assets/mainPage/info/desktop/info-list.png";

import { useViewport } from "../../../context/ViewportContext";
import "./InfoSection.css";
const popupItems = [
  <>Tu primer inicio de sesión debe suceder antes del <span style={{ color: "#FFFF0D" }}> 28 de agosto 6 PM [UTC-6] </span> . NOTA: Así tendrás tiempo de completar los 10 días antes del <span style={{ color: "#FFFF0D" }}> 6 de septiembre 6 PM [UTC-6].</span></>,
  <>Los inicios de sesión se reinician diariamente a <span style={{ color: "#FFFF0D" }}> las 6 PM [UTC-6].</span></>,
  <>No necesitas iniciar sesión 10 días consecutivos; solo <span style={{ color: "#FFFF0D" }}> acumular 10 de los 14 disponibles.</span></>,
  <><span style={{ color: "#FFFF0D" }}>Los links de CODM y los links de los embajadores </span> de campaña funcionan igual.</>,
  <>Registra siempre tus inicios de sesión entrando desde <span style={{ color: "#FFFF0D" }}> el link de la actividad.</span></>,
  <>Consulta tu progreso en <span style={{ color: "#FFFF0D" }}>el correo dentro del juego.</span></>,
];

const InfoSection = () => {
  const { isMobile } = useViewport();
  const sectionRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);

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

      {!isMobile && (<img
          src={image6}
          className="info-section__sticker3"
          alt="ghost"
          loading="lazy"
        />)}

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
          Antes de continuar,  revisa algunos{" "}
          <span style={{ color: "#FFFF0D" }}>detalles importantes </span>
          que pueden <span style={{ color: "#FFFF0D" }}>afectar tu progreso en el reto. </span>
        </p>
        <img
          src={image5}
          className="info-section__button"
          alt="button"
          loading="lazy"
          onClick={() => setShowPopup(true)}
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

      {showPopup && (
        <div
          className="info-popup-overlay"
          onClick={() => setShowPopup(false)}
        >
          <div
            className="info-popup"
            style={{ backgroundImage: `url(${popupBg})` }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={popupTitle}
              className="info-popup__title"
              alt="Lo que debes saber"
            />
            <ul className="info-popup__list">
              {popupItems.map((item, index) => (
                <li className="info-popup__item" key={index}>
                  <img
                    src={popupBullet}
                    className="info-popup__bullet"
                    alt=""
                  />
                  <span className="info-popup__text">{item}</span>
                </li>
              ))}
            </ul>
            <img
              src={popupClose}
              className="info-popup__close"
              alt="cerrar"
              onClick={() => setShowPopup(false)}
            />
            <img
              src={image7}
              className="info-popup__ghost"
              alt="ghost"
            />
          </div>
        </div>
      )}

    </section>
  );
};

export default InfoSection;
