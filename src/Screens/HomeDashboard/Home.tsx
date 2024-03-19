import NavBar from "../../Layout/NavBar/NavBar";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import { ButtonSizes } from "../../enums/component-enums";
import { useNavigate } from "react-router-dom";
import './Home.scss';
import { useCurrentUser } from "../../hooks/userCurrentUser";
import { useEffect, useState } from "react";
import { getCreatineTubs } from "../../config/firebase";
import DoughnutChart from "../../components/Chart/Doughnut";

export default function Home() {
  const [tubs, setCurrentTubs] = useState([]);
  console.log(props);
  const tubsTest = ['test']
  const currentUserId = useCurrentUser();
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

  useEffect(() => {
    const fetchTubs = async () => {
      try {
        const userId = currentUserId
        const userTubs = await getCreatineTubs(userId);
        console.log(userTubs)
        setCurrentTubs(userTubs);
      } catch (error) {
        console.error('Error fetching creatine tubs:', error);
      }
    };

    fetchTubs();
  }, [currentUserId])

  console.log(tubs);

  const data = {
    labels: ['Creatine consumed', 'Creatine Remaining'],
    datasets: [{
      label: 'Creatine Remaining',
      data: [10, 15],
      backgroundColor: ['white', 'green'],
      borderColor: ['white', 'green']
    }]
  }

  const options = {
    plugins: {
      legend: {
        labels: {
          // This sets the color of the labels
          color: 'white',
          // You can also specify other label options here, such as font size, font family, etc.
          // Example:
          // fontSize: 16,
          // fontFamily: 'Arial',
          // fontStyle: 'bold'
        }
      }
    }
  };
  return (
    <>
      <NavBar />
      {tubsTest.length === 0 ?
        <>
          <div className='home-welcome-header'>
            <h1>Welcome</h1>
            <h2>Start tracking your creatine intake and set reminders!</h2>
          </div><div className='home-add-tub-container'>
            <Button
              label='Add a new tub'
              size={ButtonSizes.Default}
              onClick={() => history('/add-tub')} />
          </div><div className='home-card-container'>
            <Card
              size='medium-card'
              header={wantToLearnMore}
              body={learnMoreBody}
              footer={learnMoreDisclaimer} />
          </div></> :
        <div>
          <div className='current-user-welcome'>
            <h1>Welcome Back</h1>
            <div className='current-user-doughnut-container'>
            <DoughnutChart
            data={data}
            options={options} />
            </div>
          </div>
        </div>

      }
    </>
  )
}