import { useEffect } from 'react';

import './PrivacidadPage.css';

const sections = [
  {
    title: '1. Información que recopilamos',
    text: 'Recopilamos los datos que proporcionas al registrarte: nombre, correo electrónico, edad y, en su caso, el nombre de tu equipo.',
  },
  {
    title: '2. Uso de la información',
    text: 'Utilizamos tus datos para gestionar tu participación en el reto, comunicarte novedades, validar tu elegibilidad para premios y mejorar la experiencia de la plataforma.',
  },
  {
    title: '3. Compartición de datos',
    text: 'No vendemos ni compartimos tu información personal con terceros, salvo que sea necesario para la entrega de premios o por requerimiento legal.',
  },
  {
    title: '4. Almacenamiento y seguridad',
    text: 'Tus datos se almacenan en servidores con medidas de seguridad razonables para prevenir accesos no autorizados, pérdida o alteración de la información.',
  },
  {
    title: '5. Tus derechos',
    text: 'Puedes solicitar acceso, corrección o eliminación de tus datos personales en cualquier momento escribiéndonos a través de nuestros canales oficiales.',
  },
  {
    title: '6. Cookies',
    text: 'Utilizamos cookies para recordar tus preferencias y mejorar el rendimiento del sitio. Puedes desactivarlas desde la configuración de tu navegador.',
  },
  {
    title: '7. Cambios a esta política',
    text: 'Esta política de privacidad puede actualizarse periódicamente. Te recomendamos revisarla de forma regular.',
  },
];

const PrivacidadPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-page">
      <div className="privacy-page__hero container">
        <p className="privacy-page__eyebrow">Legal</p>
        <h1 className="privacy-page__title">Política de Privacidad</h1>
        <p className="privacy-page__updated">Última actualización: 27 de julio de 2026</p>
      </div>

      <div className="privacy-page__content container">
        {sections.map((section) => (
          <div className="privacy-page__section" key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacidadPage;
