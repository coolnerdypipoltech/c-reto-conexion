import { useEffect } from 'react';

import './TerminosPage.css';

const sections = [
  {
    title: '1. Aceptación de los términos',
    text: 'Al registrarte y participar en el reto "Back to School", aceptas cumplir con estos Términos y Condiciones en su totalidad. Si no estás de acuerdo, te pedimos abstenerte de participar.',
  },
  {
    title: '2. Elegibilidad',
    text: 'Pueden participar personas mayores de 13 años. Los menores de edad deberán contar con autorización de un padre, madre o tutor legal para el uso de la plataforma.',
  },
  {
    title: '3. Registro y cuenta',
    text: 'Cada participante es responsable de la veracidad de la información proporcionada durante el registro, así como de mantener la confidencialidad de sus credenciales de acceso.',
  },
  {
    title: '4. Dinámica del reto',
    text: 'El reto tiene una duración de cinco semanas. Las misiones y actividades se publicarán semanalmente y estarán sujetas a los plazos indicados en la plataforma.',
  },
  {
    title: '5. Premios',
    text: 'Los premios descritos en la sección de Premios están sujetos a disponibilidad y podrán ser modificados por el organizador sin previo aviso, notificando oportunamente a los participantes.',
  },
  {
    title: '6. Conducta de los participantes',
    text: 'No se permite el uso de trampas, cuentas duplicadas ni ningún comportamiento que vulnere la buena fe de la competencia. El incumplimiento puede resultar en la descalificación inmediata.',
  },
  {
    title: '7. Modificaciones',
    text: 'El organizador se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Los cambios serán publicados en esta misma página.',
  },
  {
    title: '8. Contacto',
    text: 'Para dudas relacionadas con estos términos, puedes escribirnos a través de nuestros canales oficiales listados en el pie de página.',
  },
];

const TerminosPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <div className="legal-page__hero container">
        <p className="legal-page__eyebrow">Legal</p>
        <h1 className="legal-page__title">Términos y Condiciones</h1>
        <p className="legal-page__updated">Última actualización: 27 de julio de 2026</p>
      </div>

      <div className="legal-page__content container">
        {sections.map((section) => (
          <div className="legal-page__section" key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TerminosPage;
