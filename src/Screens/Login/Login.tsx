import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../../components/Card/Card";
import Input from "../../components/Input/Input";
import './Login.scss'
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/Button/Button";
import { ButtonSizes, CardSizes, InputSizes } from "../../enums/component-enums";
import GoogleButton from 'react-google-button'
import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const loginHeader = 'Login to your Account';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  const emailOnChange = (e) => {
    setEmail(e.target.value);
  }

  const passWordOnChange = (e) => {
    setPassword(e.target.value);
  }

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
      // Need to do further testing for login after settings page is created with the logout functionality
      history('/home');
    } catch (error) {
      console.error(error)
    }
  }

  const cardBody = (
    <div className='cardbody-login-container'>
      <div className='cardbody-login-input-container'>
        <div className='cardbody-email-container'>
          <Input
            inputStyle={InputSizes.LargeWide}
            icon={<FontAwesomeIcon icon={faEnvelope} />}
            onChange={emailOnChange}
          />
        </div>
        <div className='cardbody-password-container'>
          <Input
            inputStyle={InputSizes.LargeWide}
            icon={<FontAwesomeIcon icon={faLock} />}
            type='password'
            onChange={passWordOnChange}
          />
        </div>
        <div className='cardbody-signin-button-container'>
          <Button
            label='Sign in'
            size={ButtonSizes.Default}
            onClick={login}
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
      <Link to='/sign-up' className='no-account-signup'>
        <p className='footer-no-account sign-up'>Sign up here</p>
      </Link>
    </div>
  )
  return (
    <>
      <div className='login-card-container'>
        <Card
          size={CardSizes.Large}
          header={loginHeader}
          body={cardBody}
          footer={cardFooter}
        />
      </div>
    </>
  )
}