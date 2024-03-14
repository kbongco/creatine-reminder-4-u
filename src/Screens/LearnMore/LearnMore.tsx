import NavBar from "../../Layout/NavBar/NavBar";
import './LearnMore.scss';
import Accordion from "../../components/Accordion/Accordion";

export default function LearnMore() {
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
          <Accordion
            title='What is creatine?'
            content='test' />
          <Accordion
            title='What are the benefits'
            content='test' />
          <Accordion
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
            content='test' />
        </div>
      </div>
    </>
  )
}