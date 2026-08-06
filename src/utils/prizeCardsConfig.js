// ─── Configuración de tarjetas por tier ────────────────────────────────────
// Para cada tier, agrega aquí los imports de las imágenes reales.
// Por ahora se usan las mismas imágenes de placeholder repetidas.

import placeholderEpica      from '../assets/mainPage/premios/desktop/premios-epica.png';
import placeholderLegendaria from '../assets/mainPage/premios/desktop/premios-legendaria.png';
import placeholderMitica     from '../assets/mainPage/premios/desktop/premios-mitica.png';

import mitica1 from '../assets/premiosPage/miticas/Recompensa_Tarjeta_1.png';
import mitica10 from '../assets/premiosPage/miticas/Recompensa_Tarjeta_10.png';
import mitica9 from '../assets/premiosPage/miticas/Recompensa_Tarjeta_9.png';
import mitica8 from '../assets/premiosPage/miticas/Recompensa_Tarjeta_8.png'
import mitica11 from '../assets/premiosPage/miticas/Recompensa_Tarjeta_11.png';
import mitica12 from '../assets/premiosPage/miticas/Recompensa_Tarjeta_12.png';
import mitica13 from '../assets/premiosPage/miticas/Recompensa_Tarjeta_13.png';



export const PRIZE_CARDS = {
  legendarias: [
    placeholderLegendaria,
    placeholderLegendaria,
    placeholderLegendaria,
    placeholderLegendaria,
    placeholderLegendaria,
    placeholderLegendaria,
  ],
  miticas: [
    mitica1,
    mitica8,
    mitica9,
    mitica10,
    mitica11,
    mitica12,
    mitica13,
  ],
  epicas: [
    placeholderEpica,
    placeholderEpica,
    placeholderEpica,
    placeholderEpica,
    placeholderEpica,
    placeholderEpica,
  ],
};
