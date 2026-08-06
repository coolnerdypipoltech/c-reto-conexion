import { useState } from 'react';

import './FAQItem.css';
import question1 from "../../assets/faqsPage/desktop/faqs-question1.png";
import question2 from "../../assets/faqsPage/desktop/faqs-question2.png";

import question1Off from "../../assets/faqsPage/desktop/faqs-question1-off.png";
import question2Off from "../../assets/faqsPage/desktop/faqs-question2-off.png";

import question1M from "../../assets/faqsPage/mobil/faqs-question1.png";
import question2M from "../../assets/faqsPage/mobil/faqs-question2.png";

import question1MOff from "../../assets/faqsPage/mobil/faqs-question1-off.png";
import question2MOff from "../../assets/faqsPage/mobil/faqs-question2-off.png";

import { useViewport } from '../../context/ViewportContext';

const FAQItem = ({ question, answer, id }) => {
   const { isMobileSmall } = useViewport();
  const [isOpen, setIsOpen] = useState(false);
  let imageHelper = isMobileSmall ? question2M : question2;
  if(id % 2 === 0) {
    imageHelper = isMobileSmall ? question1M : question1;
  }

  if(isOpen){
    imageHelper = isMobileSmall ? question2MOff : question2Off;
    if(id % 2 === 0) {
      imageHelper = isMobileSmall ? question1MOff : question1Off;
    }
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
        <img src={imageHelper} alt="Pregunta frecuente" className="faq-item__bckg" />
        <span className='faq-item__number'>{idHelper}</span>
        <span className='faq-item__text'>{question}</span>
        
      </button>
      {isOpen && <div className="faq-item__answer-container">
        <p className="faq-item__answer">{answer}</p></div>}
    </div>
  );
};

export default FAQItem;
