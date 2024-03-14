import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AccordionProps from '../../interfaces/component-interface';
import './Accordion.scss';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Accordion({ title, content }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const clickAccordion = () => {
    setIsOpen(!isOpen); // Toggle the isOpen state
  };

  return (
    <>
      <div className={`accordion-container ${isOpen ? 'open' : ''}`}>
        <div className='accordion-title-container' onClick={clickAccordion}>
          <div className='accordion-title-and-arrow'>
            <h1 className='accordion-title'>{title}</h1>
            <div className='arrow-container'>
              {isOpen ? <FontAwesomeIcon icon={faCaretUp}/> : <FontAwesomeIcon icon={faCaretDown}/> }
              {/* <FontAwesomeIcon icon={faCaretDown} /> */}
              {/* <FontAwesomeIcon icon={faCaretUp}/> */}
            </div>
          </div>
        </div>
        {isOpen && (
          <div className='accordion-content'>
            <div className='accordion-content-container'>
              <p>{content}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}