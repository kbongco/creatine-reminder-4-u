import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../../components/Card/Card";
import Input from "../../components/Input/Input";
import './Login.scss'
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/Button/Button";
import { ButtonSizes } from "../../enums/component-enums";
import GoogleButton from 'react-google-button'
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const loginHeader = 'Login to your Account';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailOnChange = (e) => {
    setEmail(e.target.value);
  }

  const passWordOnChange = (e) => {
    setPassword(e.target.value);
  }

  const cardBody = (
    <div className='cardbody-login-container'>
      <div className='cardbody-login-input-container'>
        <div className='cardbody-email-container'>
          <Input
            inputStyle="large-and-wide"
            icon={<FontAwesomeIcon icon={faEnvelope} />}
            onChange={emailOnChange}
          />
        </div>
        <div className='cardbody-password-container'>
          <Input
            inputStyle='large-and-wide'
            icon={<FontAwesomeIcon icon={faLock} />}
            type='password'
            onChange={passWordOnChange}
          />
        </div>
        <div className='cardbody-signin-button-container'>
          <Button
            label='Sign in'
            size={ButtonSizes.Default}
          />
        </div>
      </div>
      <p className='signin-forgot-pw'>Forgot Password</p>
    </div>
  )

  const cardFooter = (
    <div className='cardfooter-loginfooter-container'>
      <div className='cardfooter-google-button'>      <GoogleButton
        onClick={() => { console.log('Google button clicked') }}
      />
      </div>
      <p className='footer-no-account'>Don't have an account? </p>
      <Link className='no-account-signup'>
        <p className='footer-no-account sign-up'>Sign up here</p>
      </Link>
    </div>
  )
  return (
    <>
      <div className='login-card-container'>
        <Card
          size='large-card'
          header={loginHeader}
          body={cardBody}
          footer={cardFooter}
        />
      </div>
    </>
  )
}