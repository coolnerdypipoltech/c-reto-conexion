import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";

import { useSectionNav } from "../../utils/navigation";
import { PRIZE_TIERS } from "../../utils/prizeTiers";
import { PRIZE_CARDS } from "../../utils/prizeCardsConfig";
import PrizeCardShowcase from "../../components/PrizeCardShowcase/PrizeCardShowcase";
import "./PremiosPage.css";
import image1 from '../../assets/faqsPage/desktop/faqs-bckg.png';
import image2 from "../../assets/premiosPage/desktop/premios-flechas.png";
import image3 from "../../assets/mainPage/inicio/desktop/img_chica.png";
import image4 from "../../assets/mainPage/inicio/desktop/img_ghost.png";
import tituloEpicas from "../../assets/premiosPage/desktop/premios-epicas.png";
import tituloLegendarias from "../../assets/premiosPage/desktop/premios-legendarias.png";
import tituloMiticas from "../../assets/premiosPage/desktop/premios-miticas.png";
import bgImageM from '../../assets/faqsPage/mobil/faqs-bckg.png';
import tituloEpicasM from "../../assets/premiosPage/mobil/premios-epicas.png";
import tituloLegendariasM from "../../assets/premiosPage/mobil/premios-legendarias.png";
import tituloMiticasM from "../../assets/premiosPage/mobil/premios-miticas.png";


import texture1 from "../../assets/faqsPage/desktop/texture-1.png"
import texture2 from "../../assets/faqsPage/desktop/texture-2.png"
import texture3 from "../../assets/faqsPage/desktop/texure-3.png"
import texture4 from "../../assets/faqsPage/desktop/texture-4.png"


import { useViewport } from '../../context/ViewportContext';
import Footer from '../../components/Footer/Footer';

const PremiosPage = () => {
  const { isMobile } = useViewport();
  const { tier: tierSlug } = useParams();
  const goToSection = useSectionNav();
  const tier = PRIZE_TIERS[tierSlug];
  const TIER_TITLES = {
  legendarias: isMobile ? tituloLegendariasM : tituloLegendarias,
  miticas: isMobile ? tituloMiticasM : tituloMiticas,
  epicas: isMobile ? tituloEpicasM : tituloEpicas,
};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tierSlug]);

  if (!tier) {
    return <Navigate to={`/premios/${Object.keys(PRIZE_TIERS)[0]}`} replace />;
  }

  const cards = PRIZE_CARDS[tierSlug] ?? [];
  

  return (
<>
    <div
      className="premios-page"
      style={{
        "--tier-accent": tier.accent,
        "--bg-desktop": `url(${image1})`,
        "--bg-mobile": `url(${bgImageM})`,
      }}
    >

      <img src={texture1} alt="Texture 1" className="premios-page__texture--1" />
      <img src={texture2} alt="Texture 2" className=" premios-page__texture--2" />
      <img src={texture3} alt="Texture 3" className="premios-page__texture--3" />
      <img src={texture4} alt="Texture 4" className="premios-page__texture--4" />

      <div className="reto-section__stickers" style={{ opacity: 1 }}>

    {isMobile && (<img src={image3} className=" premios-section__sticker--gun" alt="Sticker Gun" />)}

</div>

      <div className="premios-section__home-girl-container">
        <img
        src={image3}
        className="premios-section__home-girl"
        alt="Home Girl"
        loading="lazy"
      />
      </div>
      <img
        src={image4}
        className="premios-section__home-ghost"
        alt="Home Ghost"
        loading="lazy"
      />

      <div style={{ position: "relative", zIndex: 1, overflow: "visible" }}>
              <div className="premios-back-button-container">
        <img
          src={image2}
          alt="Regresar"
          className="premios-back-button"
          onClick={() => goToSection("premios")}
        />
      </div>
      <div className="premios-page__hero">
        <img src={TIER_TITLES[tierSlug]} alt={tier.label} className="premios-page__hero-img" />
      </div>

      <div className="premios-page__grid container">
        <PrizeCardShowcase
          cards={cards.map((src, index) => ({
            src,
            label: `Carta de premio ${tier.label} ${index + 1}`,
            accent: tier.accent,
          }))}
          type={tierSlug}
        />
      </div>
      </div>
      
    </div>
    <Footer />
</>
  );
};

export default PremiosPage;
