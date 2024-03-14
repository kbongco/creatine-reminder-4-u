import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AccordionProps from '../../interfaces/component-interface';
import './Accordion.scss';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

export default function Accordion({ title, content, isOpen, onClick }: AccordionProps) {
  return (
    <>
      <div className={`accordion-container ${isOpen ? 'open' : ''}`}>
        <div className='accordion-title-container' onClick={onClick}>
          <div className='accordion-title-and-arrow'>
            <h1 className='accordion-title'>{title}</h1>
            <div className='arrow-container'>
              {isOpen ? <FontAwesomeIcon icon={faCaretUp}/> : <FontAwesomeIcon icon={faCaretDown}/> }
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
      {isOpen && <div className='spacer' />}
    </>
  );
}