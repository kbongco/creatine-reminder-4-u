import NavBar from "../../Layout/NavBar/NavBar";
import './LearnMore.scss';
import Accordion from "../../components/Accordion/Accordion";
import { useState } from "react";
import creatineQuestions from '../../utils/creatineQuestions.json';

export default function LearnMore() {
  const creatineDescription = 'Creatine is a natural compound found in muscles, often used as a supplement by gym-goers to enhance strength, power, and muscle mass during high-intensity workouts.';
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
          {/* <Accordion
            title='What is creatine?'
            content={creatineDescription}
            isOpen={accordionStates.creatine}
            onClick={() => toggleAccordion('creatine')} />
          <Accordion
            title='What are the benefits'
            content='test'
            isOpen={accordionStates.benefits}
            onClick={() => toggleAccordion('benefits')} /> */}
          {/* <Accordion
            title='Is it safe for me?'
            content='test' />
          <Accordion
            title='Does this affect my kidneys?'
            content='test' />
          <Accordion
            title='Im natural, is this a PED?'
            content='test' />
          <Accordion
            title='Help! Im bloating from this!'
            content='test' /> */}
        </div>
      </div>
    </>
  )
}