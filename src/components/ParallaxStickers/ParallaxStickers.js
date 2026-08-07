import { useEffect, useRef } from 'react';

import './ParallaxStickers.css';

import sticker1 from '../../assets/mainPage/stickers/sticker-1.png';
import sticker2 from '../../assets/mainPage/stickers/sticker-2.png';
import sticker3 from '../../assets/mainPage/stickers/sticker-3.png';
import sticker4 from '../../assets/mainPage/stickers/sticker-4.png';

const STICKERS = [

];

// Decorative sticker layer that sits above the section artwork on the
// homepage and drifts at its own rate on scroll (parallax), so it reads as
// floating in front of the background rather than pinned to the page.
const ParallaxStickers = () => {
  const refs = useRef([]);

  useEffect(() => {
    let ticking = false;

    const apply = () => {
      const y = window.scrollY;
      refs.current.forEach((el, i) => {
        if (!el) return;
        const { rotate, speed } = STICKERS[i];
        el.style.transform = `translate3d(0, ${(y * speed).toFixed(1)}px, 0) rotate(${rotate}deg)`;
      });
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(apply);
      }
    };

    apply();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="parallax-stickers" aria-hidden="true">
      {STICKERS.map((sticker, i) => (
        <img
          key={i}
          src={sticker.src}
          alt=""
          ref={(el) => { refs.current[i] = el; }}
          className={`parallax-stickers__item ${sticker.className}`}
        />
      ))}
    </div>
  );
};

export default ParallaxStickers;
