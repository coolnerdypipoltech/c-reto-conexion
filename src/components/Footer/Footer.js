import "./Footer.css";
import image8 from "../../assets/mainPage/inicio/desktop/logo.png";
import footerBox from "../../assets/footer/footer.png";
import crown from "../../assets/footer/crown.png";
import footerM from "../../assets/footer/footerM.png";

import facebookIcon from "../../assets/mainPage/nav/facebook.png";
import instagramIcon from "../../assets/mainPage/nav/insta.png";
import tiktokIcon from "../../assets/mainPage/nav/tiktok.png";

import { useViewport } from "../../context/ViewportContext";
const Footer = () => {
  const { isMobile } = useViewport();
  return (
    <div className="footer__container"       >
      <img
        src={isMobile ? footerM : footerBox}
        className="footer__background"
        alt="Crown"
      />
      <footer className="footer">
        <div className="footer__inner-container">
          <img src={crown} className="footer__crown" alt="Crown" />
          <img src={image8} className="footer__logo" alt="Logo" />
        </div>

        <div className="footer__social-group">
          <img className="footer__socials"  src={facebookIcon} onClick={() => {window.open("https://www.facebook.com/LATAMCallOfDutyMobile")}} alt="Facebook" />
          <img
            className="footer__socials"
            src={instagramIcon}
            onClick={() => {window.open("https://www.instagram.com/callofdutymobilelatam/")}}
            alt="Instagram"
          />
          <img className="footer__socials" src={tiktokIcon} onClick={() => {window.open("https://www.tiktok.com/@callofdutymobile_latam")}} alt="TikTok" />
        </div>

        <div className="footer__inner-buttons">
          <p
            className="footer__inner-button"
            style={{ textAlign: isMobile ? "center" : "left" }}
          >
            Call of Duty®: Mobile
          </p>
          {isMobile ? (
            <>
                            <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                   width: "100%"
                }}
              >
                <p className="footer__inner-button" style={{ width: "160px" }} onClick={() => { window.open("/files/B2S_2026_Términos_y_Condiciones_Español.pdf") }}>
                  Términos y condiciones
                </p>
                <p className="footer__inner-button" style={{ width: "50%" }} onClick={()=>{window.open("https://www.activision.com/mx/es/legal/privacy-policy")}}>
                  Politicas de privacidad
                </p>
              </div>
            </>
          ) : (
            <>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "16px",
                 
                }}
              >
                <p className="footer__inner-button" style={{ minWidth: "180px" }} onClick={() => { window.open("/files/B2S_2026_Términos_y_Condiciones_Español.pdf") }}>
                  Términos y condiciones
                </p>
                <p className="footer__inner-button" style={{ width: "50%" }} onClick={()=>{window.open("https://www.activision.com/mx/es/legal/privacy-policy")}}>
                  Politicas de privacidad
                </p>
              </div>
            </>
          )}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
