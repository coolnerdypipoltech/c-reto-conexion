import { useEffect, useRef } from 'react';

import './ParallaxStickers.css';

import stickerYellow from "../../assets/mainPage/stickers/M_yellow.png"
import stickerBlue from "../../assets/mainPage/stickers/M_Blue.png"

import stickerGradient from "../../assets/mainPage/stickers/M_gradient.png"
import stickerPink from "../../assets/mainPage/stickers/M_pink.png"

// Decorative sticker layer that sits above the section artwork on the
// homepage and drifts at its own rate on scroll (parallax), so it reads as
// floating in front of the background rather than pinned to the page.
const ParallaxStickers = () => {
  const refs = useRef([]);




  return (
    <div className="parallax-stickers" aria-hidden="true">
      <img src={stickerPink} className='parallax-stickers-1' alt='sticker'/>
      <img src={stickerPink} className='parallax-stickers-2' alt='sticker'/>
      <img src={stickerYellow} className='parallax-stickers-3' alt='sticker'/>
      <img src={stickerGradient} className='parallax-stickers-4' alt='sticker'/>
      <img src={stickerBlue} className='parallax-stickers-4-1' alt='sticker'/>
      <img src={stickerYellow} className='parallax-stickers-5' alt='sticker'/>
      <img src={stickerBlue} className='parallax-stickers-6' alt='sticker'/>
    </div>
  );
};

export default ParallaxStickers;
