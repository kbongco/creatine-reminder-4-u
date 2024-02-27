import { useState } from "react";
import Card from "../../components/Card/Card";
import Input from "../../components/Input/Input";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/Button/Button";
import { ButtonSizes } from "../../enums/component-enums";
import './ForgotPassword.scss';
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../config/firebase";

export default function Forgot() {
  const [email, setEmail] = useState('');
  const forgotTitle = 'Forgot Password';

  const emailOnChange = (e) => {
    setEmail(e.target.value);
  }
  
  const findPassword = async (e) => {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch(error){
      console.error(`Unable to reset password ${error}`)
    }
  }
  const forgotBody = (
    <div className='forgot-password-body'>
      <p>Forgot to take you creatine and your password? We got you covered!</p>
      <div className='forgot-password-input-container'>
      <Input
            inputStyle="large-and-wide"
            icon={<FontAwesomeIcon icon={faEnvelope} />}
            onChange={emailOnChange}
          />
        <div className='forgot-password-button'>
        <Button
            label='Sign in'
            size={ButtonSizes.Default}
            onClick={findPassword}
          />
          
          </div>
      </div>
    </div>
  )
  
  return (
    <>
      <div className='forgot-password-container'>
        <div className='forgot-password-card-container'>
          <Card
            size='medium-card'
            header={forgotTitle}
            body={forgotBody}
          />
          </div>
      </div>
    </>
  )
}