import { useState, useRef, useEffect } from 'react';
import './Intro.css';
import videoDesktop from '../../../assets/Loading.mp4';
import videoMobile from '../../../assets/LoadingMobile.mp4';
import { useViewport } from "../../../context/ViewportContext";
function Intro({ onDone }) {
  const [fading, setFading] = useState(false);
  const ended = useRef(false);
  const videoRef = useRef(null);
  const { isMobile } = useViewport();
  const handleEnded = () => {
    ended.current = true;
    setFading(true);
    setTimeout(() => onDone(), 100);
  };

  useEffect(() => {
    setTimeout(() => {
      if(ended.current === false) {
        handleEnded();
      }
      }, 3500);
  }, [] )

  return (
    <div className={`intro${fading ? ' intro--fade' : ''}`}>
      <video
        ref={videoRef}
        className="intro__video"
        src={isMobile ? videoMobile : videoDesktop}
        autoPlay
        muted
        playsInline
        onClick={() => {
          if (videoRef.current) {
            videoRef.current.pause();
            handleEnded();
          }
        }}
        onEnded={handleEnded}
      />
    </div>
  );
}

export default Intro;
