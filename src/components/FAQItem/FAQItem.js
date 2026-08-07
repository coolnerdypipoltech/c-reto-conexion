import { useState } from 'react';

import './FAQItem.css';
import question1 from "../../assets/faqsPage/desktop/faqs-question1.png";
import question2 from "../../assets/faqsPage/desktop/faqs-question2.png";

import buttonOff from "../../assets/faqsPage/desktop/Button-off.png";
import buttonOff2 from "../../assets/faqsPage/desktop/Button-off2.png";

import buttonOn from "../../assets/faqsPage/desktop/Button-on.png";
import buttonOn2 from "../../assets/faqsPage/desktop/Button-on2.png";

import question1M from "../../assets/faqsPage/mobil/faqs-question1.png";
import question2M from "../../assets/faqsPage/mobil/faqs-question2.png";





import { useViewport } from '../../context/ViewportContext';

const FAQItem = ({ question, answer, id }) => {
   const { isMobileSmall } = useViewport();
  const [isOpen, setIsOpen] = useState(false);
  let imageHelper = isMobileSmall ? question2M : question2;
  let buttonHelper = buttonOff2;
  if(id % 2 === 0) {
    imageHelper = isMobileSmall ? question1M : question1;
    buttonHelper = buttonOff;
  }


  let idHelper = id + 1;
  if(idHelper < 10) {
    idHelper = "0" + idHelper;
  }

  return (
    <div className={`faq-item ${isOpen ? 'is-open' : ''}`}>
      
      <button
        type="button"
        className="faq-item__question"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        <img src={imageHelper} alt="Pregunta frecuente" className="faq-item__bckg" loading='preload' />
        <div className="faq-item__button-container">
        <img src={!isOpen ? (id % 2 === 0 ? buttonOn : buttonOn2) : buttonHelper} alt="Botón" className="faq-item__button" loading='preload' />
        
        </div>
        <span className='faq-item__number'>{idHelper}</span>
        <span className='faq-item__text'>{question}</span>
        
      </button>
      {isOpen && <div className="faq-item__answer-container">
        <p className="faq-item__answer">{answer}</p></div>}
    </div>
  );
};

export default FAQItem;
