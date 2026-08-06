import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { HOME_SECTIONS, OTHER_PAGES, useSectionNav } from '../../utils/navigation';
import './Navbar.css';
import image8 from "../../assets/mainPage/inicio/desktop/logo.png";

import box from "../../assets/mainPage/nav/caja.png";
import navBox from "../../assets/mainPage/nav/Header.png";

import facebookIcon from "../../assets/mainPage/nav/facebook.png";
import instagramIcon from "../../assets/mainPage/nav/insta.png";
import tiktokIcon from "../../assets/mainPage/nav/tiktok.png";

import image9 from "../../assets/cod-logo.svg";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);
  const goToSection = useSectionNav();

  console.log(popupRef.current, isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSectionClick = (id) => {
    goToSection(id);
    setIsOpen(false);
  };

  return (
    <header className="navbar" style={{ backgroundImage: `url(${navBox})`, backgroundPosition: 'center', backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }}>
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
              <img src={facebookIcon} onClick={() => {window.open("https://www.facebook.com/LATAMCallOfDutyMobile")}} alt="Facebook" />
              <img src={instagramIcon} onClick={() => {window.open("https://www.instagram.com/callofdutymobilelatam/")}} alt="Instagram" />
              <img src={tiktokIcon} onClick={() => {window.open("https://www.tiktok.com/@callofdutymobile_latam")}} alt="TikTok" />
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
