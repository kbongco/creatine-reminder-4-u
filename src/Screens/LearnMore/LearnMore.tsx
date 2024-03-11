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
        {/* <Accordion
          title='test'
          content='test' /> */}
      </div>
    </>
  )
}