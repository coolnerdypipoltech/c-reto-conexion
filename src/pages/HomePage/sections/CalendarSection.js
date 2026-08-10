

import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import image1 from "../../../assets/mainPage/dudas/desktop/faq.png";
import image1M from "../../../assets/mainPage/dudas/mobil/faqs-bckg.png";
import image2 from "../../../assets/mainPage/dudas/desktop/faq_dudas.png";
import image3 from "../../../assets/mainPage/dudas/desktop/faq_reto.png";
import image4 from "../../../assets/mainPage/dudas/desktop/faqs_pregunta.png";
import image5 from "../../../assets/mainPage/dudas/desktop/faqs_ticket.png";
import image6 from "../../../assets/mainPage/dudas/desktop/faqs_ticket2.png";
import image7 from "../../../assets/mainPage/dudas/desktop/faqs_tornado.png";
import image8 from "../../../assets/mainPage/dudas/desktop/faqs_trucha.png";
import image9 from "../../../assets/mainPage/dudas/desktop/faqs-sticker1.png";
import image10 from "../../../assets/mainPage/dudas/desktop/faqs-sticker2.png";
import image11 from "../../../assets/mainPage/dudas/desktop/question.png";


import { useViewport } from '../../../context/ViewportContext';
import './CalendarSection.css';

const CalendarSection = () => {
  const { isMobile } = useViewport();
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("dudas-section--visible");
        } else {
          el.classList.remove("dudas-section--visible");
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="dudas"
      ref={sectionRef}
      className="dudas-section"
      style={{
        '--bg-desktop': `url(${image1})`,
        '--bg-mobile': `url(${image1M})`,
      }}
    >



      <img src={image7} className="dudas-section__tornado" alt="tornado" loading="lazy"  />
      <div className="dudas-section__ticket-container-1">
        <img src={image6} className="dudas-section__ticket1" alt="tornado" loading="lazy"  />
      </div>
      <div className="dudas-section__ticket-container-2">
        <img src={image5} className="dudas-section__ticket2" alt="tornado" loading="lazy"  />
      </div>
      
      

      {!isMobile && <img src={image9} className="dudas-section__sticker1" alt="tornado" loading="lazy"  />}
      {!isMobile && <img src={image10} className="dudas-section__sticker2" alt="tornado" loading="lazy"  />}
      <div className="dudas-section__content" onClick={() => {
        navigate("/faqs");
      }}>
        <img src={image2} className="dudas-section__keyword1" alt="Dudas" loading="lazy" />
        <img src={image11} className="dudas-section__question-text" alt="question" loading="lazy"  />
        <img src={image4} className="dudas-section__question" alt="question" loading="lazy"  />
        
        <img src={image3} className="dudas-section__keyword2" alt="Reto" loading="lazy"  />

      </div>
    </section>
  );
};

export default CalendarSection;
