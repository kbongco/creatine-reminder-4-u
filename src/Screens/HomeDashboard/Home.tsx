import NavBar from "../../Layout/NavBar/NavBar";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import { ButtonSizes } from "../../enums/component-enums";
import { useNavigate } from "react-router-dom";
import './Home.scss';

export default function Home() {
  const wantToLearnMore = 'Want to learn More?'
  const history = useNavigate();
  const learnMoreBody = (
    <div className='learn-more-body-text'>
      <p>New to using creatine? Want to learn how a little bit more about it? Click below to learn more!</p>
      <div className='learn-more-button-container'>
        <Button
          label='learn more'
          size={ButtonSizes.Medium}
        />
        </div>
    </div>
  )
  const learnMoreDisclaimer = (
    <div className='learnmore-disclaimer'>
      <p className='learnmore-text'>** This app should not be used to diagnose, treat, etc. Please consult a medical professional before making any decisions</p>
    </div>
  )
  return (
    <>
      <NavBar />
      <div className='home-welcome-header'>
        <h1>Welcome</h1>
        <h2>Start tracking your creatine intake and set reminders!</h2>
      </div>
      <div className='home-add-tub-container'>
        <Button
          label='Add a new tub'
          size={ButtonSizes.Default}
          onClick={() => history('/add-tub') } />
      </div>

      <div className='home-card-container'>
        <Card
          size='medium-card'
          header={wantToLearnMore}
          body={learnMoreBody}
          footer={learnMoreDisclaimer}
        />
      </div>
    </>
  )
}