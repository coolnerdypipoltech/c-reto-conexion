import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import './PrizeCardShowcase.css';

const GLOW_DELAYS = [0, -1.1, -2.4, -3.3, -0.5, -1.8, -2.9, -3.8];
const SHAKE_STEP_MS = 800;
const PARTICLE_SETS = [
  [{ left: 24, dur: 6.2, delay: -0.4 }, { left: 56, dur: 7.4, delay: -2.9 }, { left: 78, dur: 8.1, delay: -5.1 }, { left: 40, dur: 6.9, delay: -3.5 }, { left: 65, dur: 7.7, delay: -1.2 }, { left: 88, dur: 8.4, delay: -4.8 }], 
  [{ left: 18, dur: 7.1, delay: -1.7 }, { left: 62, dur: 6.4, delay: -3.8 }, { left: 84, dur: 8.6, delay: -6.2 }, { left: 35, dur: 7.3, delay: -0.6 }, { left: 50, dur: 6.8, delay: -4.1 }, { left: 75, dur: 8.0, delay: -2.3 }],
  [{ left: 30, dur: 6.8, delay: -2.1 }, { left: 50, dur: 7.9, delay: -4.6 }, { left: 72, dur: 8.3, delay: -0.9 }, { left: 15, dur: 7.5, delay: -3.3 }, { left: 42, dur: 6.5, delay: -5.8 }, { left: 90, dur: 8.9, delay: -1.6 }],
  [{ left: 22, dur: 7.6, delay: -3.2 }, { left: 58, dur: 6.1, delay: -1.2 }, { left: 80, dur: 8.8, delay: -4.4 }, { left: 38, dur: 7.0, delay: -6.0 }, { left: 68, dur: 6.6, delay: -2.7 }, { left: 85, dur: 8.2, delay: -0.5 }],
  [{ left: 26, dur: 6.6, delay: -1.9 }, { left: 54, dur: 7.2, delay: -5.3 }, { left: 76, dur: 8.4, delay: -2.7 }, { left: 12, dur: 7.8, delay: -4.0 }, { left: 44, dur: 6.3, delay: -0.3 }, { left: 92, dur: 8.6, delay: -3.6 }],
  [{ left: 20, dur: 7.8, delay: -4.9 }, { left: 48, dur: 6.3, delay: -2.4 }, { left: 82, dur: 8.2, delay: -6.8 }, { left: 33, dur: 7.1, delay: -1.1 }, { left: 60, dur: 6.9, delay: -5.5 }, { left: 78, dur: 8.7, delay: -3.0 }],
  [{ left: 28, dur: 6.9, delay: -0.7 }, { left: 60, dur: 7.5, delay: -3.1 }, { left: 74, dur: 8.7, delay: -5.8 }, { left: 16, dur: 6.2, delay: -2.5 }, { left: 46, dur: 7.6, delay: -4.7 }, { left: 87, dur: 8.1, delay: -1.8 }],
  [{ left: 34, dur: 7.3, delay: -2.6 }, { left: 52, dur: 6.7, delay: -5.7 }, { left: 86, dur: 8.5, delay: -1.4 }, { left: 25, dur: 7.4, delay: -3.9 }, { left: 64, dur: 6.1, delay: -0.8 }, { left: 93, dur: 8.3, delay: -6.4 }],
];

const hexToRgba = (hex, alpha) => {
  const clean = (hex || '#7241e8').replace('#', '');
  const full = clean.length === 3 ? clean.split('').map((c) => c + c).join('') : clean;
  const r = parseInt(full.substring(0, 2), 16);
  const g = parseInt(full.substring(2, 4), 16);
  const b = parseInt(full.substring(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
};

// Ported from the "Galeria Tarjetas" Claude Design concept: idle float/foil/glow/particle
// loop on the grid, plus a tap-to-inspect morph into a centered hero card with a canvas
// confetti burst. Adapted here to wrap the project's real prize-card artwork instead of
// hand-drawn card primitives.
const PrizeCardShowcase = ({ cards, type }) => {
  let colorHandler = "white"
  if(type === "miticas"){
    colorHandler = "#E44968";
  }
  if(type === "epicas"){
    colorHandler = "#8A09E7";
  }
  if(type === "legendarias"){
    colorHandler = "#FF9000"
  }

  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const rafRef = useRef(null);
  const timersRef = useRef([]);

  const [open, setOpen] = useState(null); // { src, label, accent, rect: { cx, cy, w } }
  const [phase, setPhase] = useState('closed'); // closed | in | open | out
  const [flash, setFlash] = useState({ on: false, x: 0, y: 0 });
  const [shakeIndex, setShakeIndex] = useState(0);

  useEffect(() => () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    timersRef.current.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (!cards.length) return undefined;
    const id = setInterval(() => {
      setShakeIndex((i) => (i + 1) % cards.length);
    }, SHAKE_STEP_MS);
    return () => clearInterval(id);
  }, [cards.length]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const tick = useCallback(() => {
    const cv = canvasRef.current;
    if (!cv) { rafRef.current = null; return; }
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    if (cv.width !== Math.round(cv.clientWidth * dpr)) {
      cv.width = Math.round(cv.clientWidth * dpr);
      cv.height = Math.round(cv.clientHeight * dpr);
    }
    const ctx = cv.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, cv.clientWidth, cv.clientHeight);
    const alive = [];
    for (const p of particlesRef.current) {
      p.x += p.vx; p.y += p.vy; p.vy += 0.16; p.vx *= 0.985; p.life -= p.dec;
      if (p.life > 0) {
        alive.push(p);
        ctx.globalAlpha = Math.max(0, Math.min(1, p.life));
        ctx.fillStyle = p.c;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * (0.4 + p.life * 0.8), 0, Math.PI * 2);
        ctx.fill();
      }
    }
    particlesRef.current = alive;
    ctx.globalAlpha = 1;
    rafRef.current = alive.length ? requestAnimationFrame(tick) : null;
  }, []);

  const burst = useCallback((x, y, accent) => {
    const colors = ['#ffffff', '#a8f0ff', accent || '#9d5cf5', '#f1ca2f'];
    for (let i = 0; i < 46; i++) {
      const a = Math.random() * Math.PI * 2;
      const sp = 2.2 + Math.random() * 7.5;
      particlesRef.current.push({
        x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 1.4,
        r: 1.2 + Math.random() * 2.8, life: 1, dec: 0.012 + Math.random() * 0.016,
        c: colors[(Math.random() * colors.length) | 0],
      });
    }
    if (!rafRef.current) rafRef.current = requestAnimationFrame(tick);
  }, [tick]);

  const addTimer = (fn, ms) => {
    const id = setTimeout(fn, ms);
    timersRef.current.push(id);
  };

  const handleCardClick = (card, e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    button.style.transition = 'transform .1s ease';
    button.style.transform = 'scale(.94)';
    addTimer(() => {
      button.style.transform = '';
      button.style.transition = 'transform .18s ease';
    }, 130);

    if (navigator.vibrate) { try { navigator.vibrate(12); } catch (err) { /* unsupported */ } }

    setOpen({ ...card, rect: { cx, cy, w: rect.width } });
    setPhase('in');
    setFlash({ on: true, x: cx, y: cy });

    addTimer(() => setPhase('open'), 30);
    addTimer(() => burst(cx, cy, card.accent), 90);
    addTimer(() => setFlash((f) => ({ ...f, on: false })), 620);
  };

  const closeHero = (e) => {
    if (e) e.stopPropagation();
    particlesRef.current = [];
    setPhase('out');
    addTimer(() => { setOpen(null); setPhase('closed'); }, 460);
  };

  const heroTap = () => {
    const cv = canvasRef.current;
    if (!cv) return;
    burst(cv.clientWidth / 2, cv.clientHeight * 0.4, open?.accent);
    if (navigator.vibrate) { try { navigator.vibrate(8); } catch (err) { /* unsupported */ } }
  };

  let heroTransform = 'none';
  let heroOpacity = 1;
  if (open && phase === 'in') {
    const heroW = Math.min(480, window.innerWidth * 0.90);
    const dx = open.rect.cx - window.innerWidth / 2;
    const dy = open.rect.cy - window.innerHeight * 0.5 + heroW * 0.66;
    heroTransform = `translate3d(${dx.toFixed(1)}px, ${dy.toFixed(1)}px, 0) scale(${(open.rect.w / heroW).toFixed(3)})`;
  } else if (open && phase === 'out') {
    heroTransform = 'scale(0.5)';
    heroOpacity = 0;
  }

  return (
    <>
      <div className="prize-showcase">
        {cards.map((card, index) => (
          <button
            key={`${card.label}-${index}`}
            type="button"
            className="prize-showcase__card"
            style={{
              '--card-glow': hexToRgba(card.accent, 0.5),
              animationDelay: `${GLOW_DELAYS[index % GLOW_DELAYS.length]}s`,
            }}
            onClick={(e) => handleCardClick(card, e)}
            aria-label={card.label}
          >
            <span className={`prize-showcase__shakewrap${index === shakeIndex ? ' is-shaking' : ''}`}>
              <img src={card.src} alt={card.label} className="prize-showcase__art" loading="lazy" />
            </span>
            {PARTICLE_SETS[index % PARTICLE_SETS.length].map((p, i) => (
              <span
                key={i}
                className="prize-showcase__spark"
                style={{
                  left: `${p.left}%`,
                  animationDuration: `${p.dur}s`,
                  animationDelay: `${p.delay}s`,
                  background: colorHandler,
                }}
              />
            ))}
          </button>
        ))}
      </div>

      {open && createPortal(
        <div className="prize-hero">
          <div
            className="prize-hero__backdrop"
            onClick={closeHero}
            style={{ opacity: phase === 'open' ? 1 : 0 }}
          />
          <canvas ref={canvasRef} className="prize-hero__canvas" />

          <div className="prize-hero__stage" style={{ transform: heroTransform, opacity: heroOpacity }}>
            <button
              type="button"
              className="prize-hero__card"
              onClick={heroTap}
              style={{ '--card-glow': hexToRgba(open.accent, 0.7) }}
            >
              <img src={open.src} alt={open.label} className="prize-hero__art" />
              <span className="prize-hero__foil" />
            </button>

            <div
              className="prize-hero__info"
              style={
                phase === 'out'
                  ? { opacity: 0, transition: 'none', animation: 'none' }
                  : { opacity: phase === 'open' ? 1 : 0 }
              }
            >
              <button type="button" className="prize-hero__close" onClick={closeHero} style={{ background: colorHandler }}>
                Volver
              </button>
            </div>
          </div>

          {flash.on && (
            <div className="prize-hero__flash" style={{ left: flash.x, top: flash.y }} />
          )}
        </div>,
        document.body
      )}
    </>
  );
};

export default PrizeCardShowcase;
