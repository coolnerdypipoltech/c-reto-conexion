import { useEffect, useRef } from "react";
import Countdown from "../../../components/Countdown/Countdown";
import { CHALLENGE_START_DATE } from "../../../utils/constants";

import image1 from "../../../assets/mainPage/inicio/desktop/tiktok.png";
import image2 from "../../../assets/mainPage/inicio/desktop/facebook.png";
import image3 from "../../../assets/mainPage/inicio/desktop/instagram.png";

import image1M from "../../../assets/mainPage/inicio/mobil/tiktok.png";
import image2M from "../../../assets/mainPage/inicio/mobil/facebook.png";
import image3M from "../../../assets/mainPage/inicio/mobil/instagram.png";

import image4 from "../../../assets/mainPage/inicio/desktop/home_bckg.png";
import image4M from "../../../assets/mainPage/inicio/mobil/home_bckg.png";
import image5 from "../../../assets/mainPage/inicio/desktop/home_mark.png";
import image5M from "../../../assets/mainPage/inicio/mobil/home_marker.png";
import image6 from "../../../assets/mainPage/inicio/desktop/img_chica.png";
import image7 from "../../../assets/mainPage/inicio/desktop/img_ghost.png";
import image8 from "../../../assets/reto-conexion-logo.svg";
import image9 from "../../../assets/cod-logo.svg";
import image10 from "../../../assets/mainPage/inicio/desktop/home_elreto.png";
import image11 from "../../../assets/mainPage/inicio/desktop/Buton.png";
import "./InicioSection.css";
import { useViewport } from "../../../context/ViewportContext";

const InicioSection = () => {
  const { isMobile } = useViewport();
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("inicio-section--visible");
        } else {
          el.classList.remove("inicio-section--visible");
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const footer = document.querySelector('.footer__container');
    if (!footer) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const icons = document.querySelectorAll(
          '.inicio-section__home-tiktok, .inicio-section__home-facebook, .inicio-section__home-instagram'
        );
        icons.forEach(el => {
          el.classList.toggle('inicio-section__social--hidden', entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="inicio-section"
      style={{
        "--bg-desktop": `url(${image4})`,
        "--bg-mobile": `url(${image4M})`,
      }}
    >
      <img
        src={isMobile ? image5M : image5}
        className="inicio-section__home-mark"
        alt="Home Mark"
        loading="lazy"
      />

            <div className="inicio-section__home-logo-container-2">
              <img
        src={image6}
        className="inicio-section__home-girl"
        alt="Home Girl"
        loading="lazy"
      />
      </div>



      
      <div className="inicio-section__home-logo-container">
        <img
        src={image7}
        className="inicio-section__home-ghost"
        alt="Home Ghost"
        loading="lazy"
      />
      </div>

      <div className="inicio-section__content container">
        <img
          src={image8}
          className="inicio-section__home-logo"
          alt="Home Logo"
          loading="lazy"
        />
        <img
        src={image9}
        className="inicio-section__home-cod-logo"
        alt="Home COD Logo"
        loading="lazy"
      />
        <h1 className="inicio-section__title">
          ¡PARTICIPA POR UNA RECOMPENSA <br></br>{" "}
          <span style={{ color: "#E44968" }}>MÍTICA,</span>{" "}
          <span style={{ color: "#FF9000" }}>LEGENDARIA</span> O{" "}
          <span style={{ color: "#8A09E7" }}>ÉPICA!</span>
        </h1>


        <Countdown targetDate={CHALLENGE_START_DATE} />

        <p className="inicio-section__subtitle">

          Realiza tu primer inicio de sesión antes del {isMobile && <br></br>}
          {!isMobile && <br></br>} 28 de agosto a las 6 PM (UTC-6).
        </p>
      </div>
      {!isMobile ? (
        <>
          <img
          onClick={() => {window.open("https://www.tiktok.com/@callofdutymobile_latam")}}
            src={image1}
            className="inicio-section__home-tiktok"
            alt="Home TikTok"
            loading="lazy"
          />
          <img
            onClick={() => {window.open("https://www.facebook.com/LATAMCallOfDutyMobile")}}
            src={image2}
            className="inicio-section__home-facebook"
            alt="Home Facebook"
            loading="lazy"
          />
          <img
            src={image3}
            onClick={() => {window.open("https://www.instagram.com/callofdutymobilelatam/")}}
            className="inicio-section__home-instagram"
            alt="Home Instagram"
            loading="lazy"
          />
        </>
      ) : (
        <>
          <div className="inicio-tiktok-container" onClick={() => {window.open("https://www.tiktok.com/@callofdutymobile_latam")}}><img
            src={image1M}
            onClick={() => {window.open("https://www.tiktok.com/@callofdutymobile_latam")}}
            className="inicio-section__home-tiktok-mobile"
            style={{ width: "70px", height: "auto" }}
            alt="Home TikTok"
            loading="lazy"
          /></div>
          <div className="inicio-facebook-container" onClick={() => {window.open("https://www.facebook.com/LATAMCallOfDutyMobile")}}>
            <img
              src={image2M}
              onClick={() => {window.open("https://www.facebook.com/LATAMCallOfDutyMobile")}}
              className="inicio-section__home-facebook-mobile"
              style={{ width: "70px", height: "auto" }}
              alt="Home Facebook"
              loading="lazy"
            />
          </div>
          <div className="inicio-instagram-container" onClick={() => {window.open("https://www.instagram.com/callofdutymobilelatam/")}}>
            <img
              src={image3M}
              onClick={() => {window.open("https://www.instagram.com/callofdutymobilelatam/")}}
              className="inicio-section__home-instagram-mobile"
              style={{ width: "70px", height: "auto" }}
              alt="Home Instagram"
              loading="lazy"
            />
          </div>
        </>
      )}
    </section>
  );
};

export default InicioSection;
