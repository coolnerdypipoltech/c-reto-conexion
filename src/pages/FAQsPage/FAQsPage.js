import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import FAQItem from "../../components/FAQItem/FAQItem";
import titleImage from "../../assets/faqsPage/desktop/Faqs-title.png";
import titleImageM from "../../assets/faqsPage/mobil/Faqs-title.png";
import { useSectionNav } from "../../utils/navigation";
import bgImage from "../../assets/faqsPage/desktop/faqs-bckg2.png";
import bgImageM from "../../assets/faqsPage/mobil/faqs-bckg2.png";
import "./FAQsPage.css";
import image2 from "../../assets/premiosPage/desktop/premios-flechas.png";

import { useViewport } from "../../context/ViewportContext";

import texture5 from "../../assets/faqsPage/desktop/texture-5.png";
import texture6 from "../../assets/faqsPage/desktop/texture-6.png";
import texture7 from "../../assets/faqsPage/desktop/texture-7.png";
import texture8 from "../../assets/faqsPage/desktop/texture-8.png";
import texture9 from "../../assets/faqsPage/desktop/texture-9.png";

const faqGroups = [
  {
    title: "Reto",
    items: [
      {
        question: "¿Qué es Reto Conexión 10/14?",
        answer: (
          <>
            <span>Es un sorteo para jugadores de Call of Duty®: Mobile. Para
            participar, debes iniciar sesión en el juego al menos{" "}</span>
            <span style={{ color: "#FFFF0D" }}>
              10 de los 14 días del evento
            </span>
            <span>. Si lo logras, tendrás la{" "}</span>
            <span style={{ color: "#FFFF0D" }}>
              oportunidad de ganar una de las más de 1,800 recompensas
            </span>{" "}
            <span>épicas, legendarias o míticas.</span>
          </>
        ),
      },
      {
        question: "¿Cuándo se realiza el evento?",
        answer: (
          <>
            <span>Del </span>
            <span style={{ color: "#FFFF0D" }}>24 de agosto del </span>
            <span> 2026 a las 6PM (UTC-6) al{" "}</span>
            <span style={{ color: "#FFFF0D" }}>6 de septiembre </span>
            <span> del 2026 a las 6PM (UTC-6).</span>
          </>
        ),
      },
      {
        question: "¿Quiénes pueden participar?",
        answer: (
          <>
            <span>Jugadores que residan en los siguientes países: Guatemala,
            Venezuela, Argentina, Perú, Colombia, Chile, Ecuador, El Salvador,
            Bolivia, Nicaragua, Costa Rica, Paraguay, Uruguay, Brasil, Honduras,
            Panamá, Cuba, República Dominicana y México</span>
          </>
        ),
      },
      {
        question: "¿Cómo participo?",
        answer: (
          <>
            <span>Haz clic en el{" "}</span>
            <span style={{ color: "#FFFF0D" }}>enlace oficial</span>
            <span> publicado en las redes sociales de Call of Duty®: Mobile
            LATAM. Espera a que el juego abra y entra{" "}</span>
            <span style={{ color: "#FFFF0D" }}> al lobby </span>
            <span>. Repite este proceso{" "}</span>
            <span style={{ color: "#FFFF0D" }}>
              {" "}
              durante al menos 10 días distintos
            </span>{" "}
            <span>dentro del periodo del reto.{" "}</span>
            <span style={{ color: "#FFFF0D" }}>
              {" "}
              El conteo diario se actualiza a las 6PM{" "}
            </span>{" "}
            <span>(UTC-6). Solo se permite una participación por persona. Las
            participaciones múltiples serán descalificadas.</span>
          </>
        ),
      },
      {
        question: "¿Dónde encuentro los enlaces oficiales del reto?",
        answer: (
          <>
            <span>Los enlaces se publican en las{" "}</span>
            <span style={{ color: "#FFFF0D" }}>redes sociales oficiales</span>{" "}
            <span>de Call of Duty®: Mobile LATAM:</span>
            <ul>
              <li><span>Instagram: @callofdutymobilelatam</span></li>
              <li><span>X (Twitter): @CODMobileLATAM</span></li>
              <li><span>YouTube: LATAMCallOfDutyMobile</span></li>
              <li><span>Facebook: LATAMCallOfDutyMobile</span></li>
              <li><span>TikTok: @callofdutymobile_latam</span></li>
            </ul>
            <span style={{ color: "#FFFF0D" }}>
              También los encuentras en las redes sociales de los creadores de
              contenido aprobados, disponibles en la sección "CREADORES" del
              sitio web
            </span>
            <span>.</span>
          </>
        ),
      },
      {
        question: "¿Debo usar el enlace todos los días?",
        answer: (
          <>
            <span>Sí,{" "}</span>
            <span style={{ color: "#FFFF0D" }}>
              {" "}
              te recomendamos hacer clic en el enlace cada día
            </span>
            <span>, para asegurarte de que tu inicio de sesión quede registrado
            correctamente.</span>
          </>
        ),
      },
      {
        question: "¿Cómo sé que mi participación fue registrada?",
        answer: (
          <>
            <span>Una vez que hagas clic en el enlace, el juego se abrirá y
            deberás llegar al lobby. Después podrás{" "}</span>
            <span style={{ color: "#FFFF0D" }}> verificar el registro </span>
            <span> de tu inicio de sesión{" "}</span>
            <span style={{ color: "#FFFF0D" }}>
              {" "}
              desde tu correo dentro del juego{" "}
            </span>
            <span>.</span>
          </>
        ),
      },
      {
        question: "¿Cómo sé que completé el reto?",
        answer: (
          <>
            <span>Al completar los 10 días,{" "}</span>
            <span style={{ color: "#FFFF0D" }}>
              {" "}
              desbloquearás el Ticket Dorado
            </span>
            <span>: una tarjeta de visita que confirma que completaste el reto
            y que{" "}</span>
            <span style={{ color: "#FFFF0D" }}>
              {" "}
              sirve como tu entrada oficial{" "}
            </span>{" "}
            <span>al sorteo.{" "}</span>
            <span style={{ color: "#FFFF0D" }}>
              Sin el Ticket Dorado, no podrás participar.
            </span>
          </>
        ),
      },
      {
        question: "¿Desde qué hora cuenta mi inicio de sesión diario?",
        answer: (
          <>
            <span>Podrás realizar tu primer inicio de sesión el{" "}</span>
            <span style={{ color: "#FFFF0D" }}>
              24 de agosto a partir de las 6PM (UTC-6)
            </span>
            <span>. Los inicios de sesión diarios serán después de las 6PM
            (UTC-6).</span>
          </>
        ),
      },
      {
        question: "¿Debo iniciar sesión 10 días seguidos?",
        answer: (
          <>
            <span>No.{" "}</span>
            <span style={{ color: "#FFFF0D" }}>
              {" "}
              Puedes hacerlo en días seguidos o salteados,{" "}
            </span>{" "}
            <span>siempre y cuando completes 10 días de conexión dentro del
            periodo del evento.</span>
          </>
        ),
      },
      {
        question: "¿Qué pasa si entro después del 28 de agosto?",
        answer: (
          <>
            <span>El{" "}</span>
            <span style={{ color: "#FFFF0D" }}>
              28 de agosto es el último día para comenzar el reto.{" "}
            </span>{" "}
            <span>Si inicias sesión usando el enlace oficial antes de las 6PM
            (UTC-6) aún puedes completar los 10 días necesarios, conectándote
            diariamente hasta el 6 de septiembre.</span>
          </>
        ),
      },
      {
        question: "¿Qué pasa si me conecto más de 10 días?",
        answer: (
          <>
            {" "}
            <span style={{ color: "#FFFF0D" }}>
              No hay beneficios adicionales{" "}
            </span>{" "}
            <span>por exceder los 10 días. El objetivo es alcanzar al menos 10
            inicios de sesión válidos para participar.</span>
          </>
        ),
      },
      {
        question: "El enlace no me abre. ¿Qué hago?",
        answer: (
          <>
            <span>Prueba estas soluciones:</span>
            <ul>
              <li>
                <span style={{ color: "#FFFF0D" }}>
                  Intenta hacer clic nuevamente
                </span>{" "}
                <span>hasta que se abra la tienda de aplicaciones y aparezca el
                botón de "Jugar".</span>
              </li>
              <li>
                <span>Si ves "Acción no completada",{" "}</span>
                <span style={{ color: "#FFFF0D" }}>
                  copia el enlace y pégalo en tu navegador
                </span>
                <span>.</span>
              </li>
              <li>
                <span>Asegúrate de tener la{" "}</span>
                <span style={{ color: "#FFFF0D" }}>
                  última versión del juego instalada
                </span>{" "}
                <span>desde la tienda de aplicaciones.</span>
              </li>
              <li>
                <span>Prueba con{" "}</span>
                <span style={{ color: "#FFFF0D" }}>
                  cualquiera de los enlaces
                </span>{" "}
                <span>publicados en nuestras redes oficiales.</span>
              </li>
            </ul>
          </>
        ),
      },

      {
        question:
          "¿Cuál es la diferencia entre los enlaces de redes sociales y los de creadores?",
        answer: (
          <>
            <span>Los enlaces compartidos a través de{" "}</span>
            <span style={{ color: "#FFFF0D" }}>
              {" "}
              canales oficiales y de creadores son válidos,
            </span>{" "}
            <span>y no otorgarán a nadie ninguna ventaja adicional. Solo
            necesitas hacer clic en uno por día.</span>
          </>
        ),
      },
      {
        question: "¿Cuáles son las recompensas?",
        answer: (
          <>
            <span>Todos los jugadores que completen los 10 días del reto y
            consigan la Tarjeta de Visita: Ticket Dorado{" "}</span>
            <span style={{ color: "#FFFF0D" }}>
              participarán en un sorteo para ganar una de las 1875 recompensas
            </span>{" "}
            <span>disponibles:{" "}</span>
            <ul>
              <li><span>7 recompensas Míticas</span></li>
              <li><span>368 Recompensas Legendarias</span></li>
              <li><span>1500 Recompensas Épicas</span></li>
            </ul>
          </>
        ),
      },
      {
        question: "¿Cuándo se anuncian los ganadores?",
        answer: (
          <>
            <span>El anuncio oficial se realizará el{" "}</span>
            <span style={{ color: "#FFFF0D" }}>11 de septiembre de 2026</span>
            <span> a través de las redes sociales de Call of Duty®: Mobile
            LATAM.</span>
          </>
        ),
      },
      {
        question: "¿Cuando se otorgan las recompensas?",
        answer: (
          <>
            <span>La entrega se realizará el{" "}</span>
            <span style={{ color: "#FFFF0D" }}>19 de septiembre de 2026</span>
            <span>, a través de la bandeja de entrada del juego.</span>
          </>
        ),
      },
      {
        question: "¿Puedo quedar descalificado del reto?",
        answer: (
          <>
            <span>Es posible, si detectamos:</span>
            <ul>
              <li>
                El uso de <span style={{ color: "#FFFF0D" }}>bots</span> o
                participación{" "}
                <span style={{ color: "#FFFF0D" }}>fraudulenta</span>.
              </li>
              <li>
                <span style={{ color: "#FFFF0D" }}>Múltiples cuentas</span> por
                persona.
              </li>
              <li>
                El <span style={{ color: "#FFFF0D" }}>incumplimiento</span> de
                las reglas o manipulación del reto.
              </li>
            </ul>
          </>
        ),
      },
      {
        question: "¿Qué pasa si ya tenía la recompensa que me gané?",
        answer: (
          <>
            <span>Si ya tenías la recompensa, ésta se convertirá en{" "}</span>
            <span style={{ color: "#FFFF0D" }}>Créditos del juego</span>
            <span>. Pero si lo prefieres,{" "}</span>
            <span style={{ color: "#FFFF0D" }}>
              podrás solicitar un reemplazo de igual valor
            </span>{" "}
            <span>enviando un correo a callofdutymolatam@gmail.com con el
            asunto: "RETO CONEXIÓN 10/14 RECOMPENSA DUPLICADA".{" "}</span>
            <span style={{ color: "#FFFF0D" }}>Deberás proporcionar:</span>
            <ul>
              <li><span>Tu UID (19 dígitos)</span></li>
              <li><span>Nombre de usuario</span></li>
              <li><span>Nombre de la recompensa repetida</span></li>
            </ul>
            <span>Considera que el reemplazo será seleccionado a discreción del
            equipo de Call of Duty®: Mobile.</span>
          </>
        ),
      },

      {
        question: "¿Tienes más preguntas?",
        answer: (
          <>
            <span>Si aún tienes dudas,{" "}</span>
            <span style={{ color: "#FFFF0D" }}>
              contáctanos a través de nuestras redes sociales oficiales{" "}
            </span>
            <span>, ¡haremos lo posible por responderte!</span>
          </>
        ),
      },
    ],
  },
];

const FAQsPage = () => {
  const { isMobile } = useViewport();
  const goToSection = useSectionNav();
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <div
        className="faqs-page"
        style={{
          "--bg-desktop": `url(${bgImage})`,
          "--bg-mobile": `url(${bgImageM})`,
        }}
      >

        <div>
                  <img src={texture5} alt="Texture 3" className="faqs-page__texture--1" />

        <img src={texture7} alt="Texture 1" className="faqs-page__texture--2" />
        <img
          src={texture6}
          alt="Texture 2"
          className=" faqs-page__texture--3"
        />
        <img
          src={texture9}
          alt="Texture 4"
          className="premios-page__texture--3"
        />
        <img
          src={texture8}
          alt="Texture 4"
          className="premios-page__texture--4"
        />
        </div>


        <div className="premios-back-button-container">
          <img
            src={image2}
            alt="Regresar"
            className="premios-back-button"
            onClick={() => goToSection("dudas")}
          />
        </div>

        <div className="faqs-page__hero container">
          <img
            src={isMobile ? titleImageM : titleImage}
            alt="Preguntas Frecuentes"
            className="faqs-page__hero-image"
          />
        </div>
        <div style={{ height: "50px" }}></div>
        <div className="faqs-page__content container">
          {faqGroups.map((group) => (
            <div className="faqs-page__group" key={group.title}>
              <div className="faqs-page__list">
                {group.items.map((item, index) => (
                  <FAQItem
                    key={item.question}
                    question={item.question}
                    answer={item.answer}
                    id={index}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQsPage;
