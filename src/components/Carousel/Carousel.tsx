import './Carousel.scss';
import CarouselProps from '../../interfaces/component-interface';
import { useState } from 'react';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Carousel({ items }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const goToSlide = (index) => {
    console.log('this work')
    setCurrentIndex(index);
  };

  return (
    <>
      <div className="carousel">
        <div className='current-user-left-arrow'>
          <button className='icon-button' onClick={() => console.log('button')}>
            <FontAwesomeIcon icon={faCaretLeft} />
          </button>
        </div>
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
            aria-hidden={index !== currentIndex}
          >
            {item}
          </div>
        ))}
        <div className='current-user-left-arrow'>
          <button className='icon-button' onClick={() => console.log('button')}>
            <FontAwesomeIcon icon={faCaretRight} />
          </button>
        </div>
      </div>
      <div className="dots">
        {items.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            role="button"
            tabIndex="0"
          />
        ))}
      </div>
    </>
  );
}