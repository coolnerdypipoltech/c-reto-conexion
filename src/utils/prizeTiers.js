export const PRIZE_TIERS = {
    miticas: {
    slug: 'miticas',
    label: 'Míticas',
    tagline: 'Recompensas de alto valor para los equipos mejor posicionados en el ranking.',
    accent: '#8b5cf6',
  },
  legendarias: {
    slug: 'legendarias',
    label: 'Legendarias',
    tagline: 'Las cartas más raras del reto. Solo para los equipos que lleguen hasta la Gran Final.',
    accent: '#ffc700',
  },

  epicas: {
    slug: 'epicas',
    label: 'Épicas',
    tagline: 'La primera línea de premios: para los equipos más activos de cada semana.',
    accent: '#ec1f83',
  },
};

export const PRIZE_TIER_ORDER = ['miticas', 'legendarias',  'epicas'];

export const DEFAULT_PRIZE_TIER = PRIZE_TIER_ORDER[0];

export const CARDS_PER_TIER = 6;
