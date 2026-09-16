import { useEffect } from "react";

import EmbajadorItem from "../../components/EmbajadorItem/EmbajadorItem";
import { EMBAJADORES_DATA } from "../../utils/embajadoresConfig";
import { useSectionNav } from "../../utils/navigation";
import { useViewport } from '../../context/ViewportContext';
import Footer from '../../components/Footer/Footer';

import "./EmbajadoresPage.css";

import bgImage from '../../assets/embajadoresPage/desktopbckg.png';
import bgImageM from '../../assets/embajadoresPage/mobilebckg.png';
import titleImage from '../../assets/mainPage/embajadores/desktop/embajadores-title.png';
import titleImageM from '../../assets/mainPage/embajadores/mobil/embajadores-title.png';
import backArrow from '../../assets/premiosPage/desktop/premios-flechas.png';
import homeGirl from '../../assets/mainPage/inicio/desktop/img_chica.png';
import homeGhost from '../../assets/mainPage/inicio/desktop/img_ghost.png';

import sticker1 from '../../assets/embajadoresPage/sticker1.png';
import sticker2 from '../../assets/embajadoresPage/sticker2.png';
import sticker3 from '../../assets/embajadoresPage/sticker3.png';
import sticker4 from '../../assets/embajadoresPage/sticker4.png';
import sticker5 from '../../assets/embajadoresPage/sticker5.png';
import sticker6 from '../../assets/embajadoresPage/sticker6.png';

const EmbajadoresPage = () => {
  const { isMobile } = useViewport();
  const goToSection = useSectionNav();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div
        className="embajadores-page"
        style={{
          "--bg-desktop": `url(${bgImage})`,
          "--bg-mobile": `url(${bgImageM})`,
        }}
      >


        <img src={sticker2} alt="Texture" className="embajadores-page__sticker-2" />
        <img src={sticker6} alt="Texture" className="embajadores-page__sticker-3" />
        <img src={sticker3} alt="Texture" className="embajadores-page__sticker-4" />
        <img src={sticker5} alt="Texture" className="embajadores-page__sticker-5" />
        <img src={sticker6} alt="Texture" className="embajadores-page__sticker-6" />


        <div className="embajadores-section__home-girl-container">
          <img
            src={homeGirl}
            className="embajadores-section__home-girl"
            alt="Home Girl"
            loading="lazy"
          />
        </div>
        <img
          src={homeGhost}
          className="embajadores-section__home-ghost"
          alt="Home Ghost"
          loading="lazy"
        />

        <div style={{ position: "relative", zIndex: 1, overflow: "visible" }}>
          <div className="embajadores-back-button-container">
            <img
              src={backArrow}
              alt="Regresar"
              className="embajadores-back-button"
              onClick={() => goToSection("embajadores")}
            />
          </div>

          <div className="embajadores-page__hero">
            <img
              src={isMobile ? titleImageM : titleImage}
              alt="Embajadores"
              className="embajadores-page__hero-img"
            />
          </div>

          <div className="embajadores-page__grid container">
            {EMBAJADORES_DATA.map((embajador, index) => (
              <EmbajadorItem
                key={index}
                image={embajador.image}
                link1={embajador.link1}
                link2={embajador.link2}
                slideDir={index % 2 === 0 ? 'left' : 'right'}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EmbajadoresPage;
