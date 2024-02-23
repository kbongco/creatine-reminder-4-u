import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../../components/Card/Card";
import Input from "../../components/Input/Input";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import './Signup.scss';
import Button from "../../components/Button/Button";
import { ButtonSizes } from "../../enums/component-enums";
import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signupTitle = 'Create an Account'

  const nameOnChange = (e) => {
    setName(e.target.value);
  }

  const emailOnChange = (e) => {
    setEmail(e.target.value)
  }

  const passwardOnChange = (e) => {
    setPassword(e.target.value);
  }

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      console.log('this works');
    } catch (error) {
      console.error(error);
    }
  }
  const signupCardBoy = (
    <div className='signup-card-body-container'>
      <div className='sign-up-form-inputs'>
        <Input
          inputStyle="large-and-wide"
          placeholder="Name"
          icon={<FontAwesomeIcon icon={faUser} />}
          onChange={nameOnChange}
        />
        <div className='sign-up-middle-input-container'>
          <Input
            inputStyle="large-and-wide"
            placeholder="Email"
            icon={<FontAwesomeIcon icon={faEnvelope} />}
            onChange={emailOnChange}
          />
        </div>
        <Input
          inputStyle='large-and-wide'
          icon={<FontAwesomeIcon icon={faLock} />}
          placeholder="Password"
          type='password'
          onChange={passwardOnChange}
        />
      </div>
      <div className='signup-button-container'>
        <Button
          label='Sign in'
          size={ButtonSizes.Default}
          onClick={signUp}
        />
      </div>
    </div>
  )

  const signupFooter = (
    <div className='signup-card-footer'>
      <p>Already have an account? </p>
      <Link className='login-links' to='/login'>
        Login Here
      </Link>
    </div>
  )

  return (
    <>
      <div className='signup-page-container'>
        <Card
          header={signupTitle}
          body={signupCardBoy}
          footer={signupFooter}
          size='large-card'
        />
      </div>
    </>
  )
}