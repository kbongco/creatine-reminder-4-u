import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AccordionProps from '../../interfaces/component-interface';
import './Accordion.scss';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Accordion({ title, content }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(true);

  
  return (
    <>
      <div className={`accordion-container ${isOpen ? 'open' : ''}`}>
        <div className='accordion-title-container' onClick={() => setIsOpen(!isOpen)}>
          <h1 className='accordion-title'>{title}</h1>
        </div>
        <div className='arrow-container'>
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
        {/* <div className='accordion-content'>
          This is a test
        </div> */}
      </div>
    </>
  )
}