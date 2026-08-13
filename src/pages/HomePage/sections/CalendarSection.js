

import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import image1 from "../../../assets/mainPage/calendar/desktop/calendar-bckg.png";
import image1M from "../../../assets/mainPage/calendar/mobil/calendar-bckg.png";

import image2 from "../../../assets/mainPage/calendar/desktop/calendar-title.png";
import image2M from "../../../assets/mainPage/calendar/mobil/calendar-title.png";

import image3 from "../../../assets/mainPage/calendar/desktop/calendar-self.png";
import image3M from "../../../assets/mainPage/calendar/mobil/calendar-self.png";
import image4 from "../../../assets/mainPage/calendar/desktop/calendar-button.png";
import image5 from "../../../assets/mainPage/calendar/desktop/calendar-button2.png";

import { useViewport } from '../../../context/ViewportContext';
import './CalendarSection.css';

const CalendarSection = () => {
  const { isMobile } = useViewport();
  const sectionRef = useRef(null);


  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("calendar-section--visible");
        } else {
          el.classList.remove("calendar-section--visible");
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="calendar"
      ref={sectionRef}
      className="calendar-section"
      style={{
        '--bg-desktop': `url(${image1})`,
        '--bg-mobile': `url(${image1M})`,
      }}
    >

      <div className="calendar-section__container">
        <img src={isMobile ? image2M : image2} className="calendar-title" alt="calendar title" loading="lazy" />
        <img src={isMobile ? image3M : image3} className="calendar-self" alt="calendar" loading="lazy" />
        <img src={image4} alt="calendar button" className="calendar-button" loading="lazy" />
        <img src={image5} alt="calendar button 2" className="calendar-button-2" loading="lazy" />
      </div>


    </section>
  );
};

export default CalendarSection;
