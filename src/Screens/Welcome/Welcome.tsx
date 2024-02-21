import { faBottleDroplet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Welcome.scss';
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";

export default function Welcome() {
  const goToLoginPage = () => {
    console.log('This will go to a login page');
  }

  const cardBody = (
    <div className='card-text-welcome-container'>
      <p className='card-text-welcome'>Never forget to take your creatine again</p>
      <div className='cardBody-login-button'>
        <Button
          onClick={goToLoginPage}
          size='large-button'
          label='Sign in' />
      </div>
    </div >
  )
  return (
    <>
      <div className='welcome-screen'>
        <FontAwesomeIcon icon={faBottleDroplet} />
      </div>
      <div className='card-container-welcome'>
        <Card size='default'
          header='Creatine Reminder 4 U'
          body={cardBody}
        />
      </div>
    </>
  )
}