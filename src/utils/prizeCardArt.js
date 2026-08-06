const ICONS = [
  // star
  '<polygon points="125,55 146,118 212,118 159,157 179,220 125,181 71,220 91,157 38,118 104,118" />',
  // diamond
  '<polygon points="125,45 195,150 125,265 55,150" />',
  // shield
  '<path d="M125 45 L200 78 L200 165 Q200 235 125 275 Q50 235 50 165 L50 78 Z" />',
  // bolt
  '<polygon points="145,35 78,175 115,175 100,275 192,125 150,125" />',
  // crown
  '<polygon points="55,195 55,115 95,150 125,80 155,150 195,115 195,195" />',
  // hexagon
  '<polygon points="125,35 202,82 202,178 125,225 48,178 48,82" />',
];

export const getPrizeCardImage = (accent, index) => {
  const icon = ICONS[index % ICONS.length];
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 350">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#161616" />
          <stop offset="100%" stop-color="${accent}" stop-opacity="0.55" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="242" height="342" rx="18" fill="url(#bg)" stroke="${accent}" stroke-width="4" />
      <rect x="16" y="16" width="218" height="318" rx="12" fill="none" stroke="${accent}" stroke-opacity="0.35" stroke-width="1.5" />
      <g fill="${accent}" fill-opacity="0.92">${icon}</g>
    </svg>
  `.trim();

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};
