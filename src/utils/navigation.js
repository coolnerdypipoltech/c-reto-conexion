import { useNavigate, useLocation } from 'react-router-dom';

import { DEFAULT_PRIZE_TIER } from './prizeTiers';

export const HOME_SECTIONS = [
  { id: 'inicio', label: 'INICIO' },
  { id: 'reto', label: '¿QUÉ ES RETO: CONEXIÓN 10/14?' },
  { id: 'premios', label: 'RECOMPENSAS' },
  { id: 'dudas', label: 'DUDAS FRECUENTES' },
];

export const OTHER_PAGES = [
  { path: `/premios/${DEFAULT_PRIZE_TIER}`, label: 'Ver Premios' },
  { path: '/faqs', label: 'Preguntas Frecuentes' },
  { path: '/terminos-y-condiciones', label: 'Términos y Condiciones' },
  { path: '/politica-de-privacidad', label: 'Política de Privacidad' },
];

export function useSectionNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return function goToSection(id) {
    if (location.pathname === '/' || location.pathname === '/home') {
      const el = document.getElementById(id);
      if (el) {
        const navbarHeight = parseInt(
          getComputedStyle(document.documentElement).getPropertyValue('--navbar-height'),
          10
        );
        const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    } else {
      navigate('/home', { state: { scrollTo: id } });
    }
  };
}
