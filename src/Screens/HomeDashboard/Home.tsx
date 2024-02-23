import NavBar from "../../Layout/NavBar/NavBar";
import Button from "../../components/Button/Button";
import { ButtonSizes } from "../../enums/component-enums";
import './Home.scss';

export default function Home() {
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
          size={ButtonSizes.Default} />
      </div>
    </>
  )
}