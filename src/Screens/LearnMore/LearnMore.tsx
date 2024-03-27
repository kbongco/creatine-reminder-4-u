import NavBar from "../../Layout/NavBar/NavBar";
import './LearnMore.scss';
import Accordion from "../../components/Accordion/Accordion";
import { useState } from "react";
import creatineQuestions from '../../utils/creatineQuestions.json';

export default function LearnMore() {
  const [accordionStates, setAccordionStates] = useState({});

  const toggleAccordion = (accordion) => {
    setAccordionStates({
      ...accordionStates,
      [accordion]: !accordionStates[accordion]
    });
  };

  console.log(creatineQuestions);

  return (
    <>
      <NavBar />
      <div className='container'>
        <div className='title-container'>
          <h1>Learn More</h1>
        </div>
        <div className='disclaimer-container'>
          <div className='disclaimer-text'>
            <p>** This app should not be used to diagnose, treat, etc. Please consult a medical professional before making any decisions</p>
          </div>
        </div>
      </div>

      <div className='information-container'>
        <div className='accordion-information-containers'>
          {creatineQuestions.map((q, idx) =>
            <Accordion
            key={idx}
            title={q.questionTitle}
            content={q.answerDescription}
            isOpen={accordionStates[idx]}
            onClick={() => toggleAccordion(idx)}
            />)}
        </div>
      </div>
    </>
  )
}