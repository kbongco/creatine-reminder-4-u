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
import { faCaretLeft, faCaretRight, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "../../components/Carousel/Carousel";

export default function Home() {
  const [tubs, setCurrentTubs] = useState([]);
  const tubsTest = ['test']
  const getDate = (date) => {
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };
  const today = new Date();
  const todayDate = getDate(today);

  // Get tomorrow's date
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  const tomorrowDate = getDate(tomorrow);
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

  const cardReminderTitle = (dateString) => (
    <div className='reminder-title'>
      <div className='reminder-settings-container'>
        <FontAwesomeIcon icon={faGear} />
      </div>
      <p>{dateString}</p>
    </div>
  );

  const cardreminderBody = (
    <div className='card-reminder'>
      <div className='card-reminder-text'>
        <p className='card-reminder-dosage-text'>5g of Creatine Monohydrate</p>
      </div>
      <div className='card-reminder-button-container'>
        <p>Remove Reminder</p>
        <Button
          label='Completed'
          size={ButtonSizes.Small}
        />
      </div>
    </div>
  )

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
          color: 'white',
        }
      }
    }
  };

  const carouselItems = ([
    <div className='current-user-navigation'>
                              <DoughnutChart
                                key="doughnut-chart" // Make sure to provide a unique key prop
                                data={data}
                                options={options}
                              />
    </div>
  ])
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
        <>
          <div>
            <div className='current-user-welcome'>
              <h1>Welcome Back</h1>
              <Carousel
                items={carouselItems} />
            </div>
          </div>

          <div className='card-containers-reminders'>
            <Card
              size='small-wide'
              header={cardReminderTitle(todayDate)}
              body={cardreminderBody}
            />
            <Card
              size='small-wide'
              header={cardReminderTitle(tomorrowDate)}
              body={cardreminderBody}
            />
          </div>
        </>
      }
    </>
  )
}