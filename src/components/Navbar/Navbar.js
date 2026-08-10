import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { HOME_SECTIONS, useSectionNav } from '../../utils/navigation';
import './Navbar.css';
import image8 from "../../assets/reto-conexion-logo.svg";
import box from "../../assets/mainPage/nav/caja.png";
import navBox from "../../assets/mainPage/nav/Header.png";

import facebookIcon from "../../assets/mainPage/nav/facebook.png";
import instagramIcon from "../../assets/mainPage/nav/insta.png";
import tiktokIcon from "../../assets/mainPage/nav/tiktok.png";

import facebookIcon2 from "../../assets/mainPage/inicio/mobil/facebook.png";
import instagramIcon2 from "../../assets/mainPage/inicio/mobil/instagram.png";
import tiktokIcon2 from "../../assets/mainPage/inicio/mobil/tiktok.png";

import image9 from "../../assets/cod-logo.svg";

// How much the scroll direction has to change (in px) before the navbar
// toggles visibility, to avoid flicker from tiny scroll deltas.
const SCROLL_HIDE_THRESHOLD = 6;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const popupRef = useRef(null);
  const lastScrollY = useRef(0);
  const goToSection = useSectionNav();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    let ticking = false;

    const applyScroll = () => {
      const y = window.scrollY;

      if (y <= 0) {
        setHidden(false);
      } else if (y > lastScrollY.current + SCROLL_HIDE_THRESHOLD) {
        setHidden(true);
      } else if (y < lastScrollY.current - SCROLL_HIDE_THRESHOLD) {
        setHidden(false);
      }
      lastScrollY.current = y;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(applyScroll);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (isOpen) setHidden(false);
  }, [isOpen]);

  const handleSectionClick = (id) => {
    goToSection(id);
    setIsOpen(false);
  };

  return (
    <header
      className={`navbar ${hidden ? 'navbar--hidden' : ''}`}
      style={{ backgroundImage: `url(${navBox})`, backgroundPosition: 'center', backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }}
    >
      <div className="navbar__inner container">
        <Link to="/" className="navbar__brand" onClick={() => setIsOpen(false)}>
          <img src={image8} alt="Logo" style={{ height: '50px' }} />
        </Link>

        <div className="navbar__menu" ref={popupRef}>
          <button
            type="button"
            className={`navbar__toggle ${isOpen ? 'is-open' : ''}`}
            aria-label="Abrir menú de navegación"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>

          {isOpen && (
            <div className="navbar__popup" style={{ backgroundImage: `url(${box})`, backgroundPosition: 'center', backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }}>
              <div className="navbar__popup-group">

                <ul>
                  {HOME_SECTIONS.map((section) => (
                    <li key={section.id}>
                      <button type="button" onClick={() => handleSectionClick(section.id)}>
                        {section.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="navbar__social-group">
                                <img
                src={hoveredSocial === 'tiktok' ? tiktokIcon2 : tiktokIcon}
                onMouseEnter={() => setHoveredSocial('tiktok')}
                onMouseLeave={() => setHoveredSocial(null)}
                onFocus={() => setHoveredSocial('tiktok')}
                onBlur={() => setHoveredSocial(null)}
                onClick={() => { window.open("https://www.tiktok.com/@callofdutymobile_latam"); }}
                alt="TikTok"
                className="navbar__social-image"
              />
              <img
                src={hoveredSocial === 'instagram' ? instagramIcon2 : instagramIcon}
                onMouseEnter={() => setHoveredSocial('instagram')}
                onMouseLeave={() => setHoveredSocial(null)}
                onFocus={() => setHoveredSocial('instagram')}
                onBlur={() => setHoveredSocial(null)}
                onClick={() => { window.open("https://www.instagram.com/callofdutymobilelatam/"); }}
                alt="Instagram"
                className="navbar__social-image"
              />
                            <img
                src={hoveredSocial === 'facebook' ? facebookIcon2 : facebookIcon}
                onMouseEnter={() => setHoveredSocial('facebook')}
                onMouseLeave={() => setHoveredSocial(null)}
                onFocus={() => setHoveredSocial('facebook')}
                onBlur={() => setHoveredSocial(null)}
                onClick={() => { window.open("https://www.facebook.com/LATAMCallOfDutyMobile"); }}
                alt="Facebook"
                className="navbar__social-image"
              />

              </div>

              <img src={image9} style={{ height: '28px', width: "auto", objectFit: "contain", marginTop: "30px", marginBottom: "10px"}} alt="COD Logo" />

            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
