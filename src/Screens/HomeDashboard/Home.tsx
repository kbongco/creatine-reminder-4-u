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
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "../../components/Carousel/Carousel";
import ReminderCalendar from "../../components/Calendar/Calendar";

export default function Home() {
  const [tubs, setCurrentTubs] = useState([]);
  const tubsTest = ['test'];
  const getDate = (date) => {
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };
  const today = new Date();
  const todayDate = getDate(today);
  const [value, onChange] = useState(new Date());
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  const tomorrowDate = getDate(tomorrow);
  const currentUserId = useCurrentUser();
  const wantToLearnMore = 'Want to learn More?';
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
  );

  const learnMoreDisclaimer = (
    <div className='learnmore-disclaimer'>
      <p className='learnmore-text'>** This app should not be used to diagnose, treat, etc. Please consult a medical professional before making any decisions</p>
    </div>
  );

  useEffect(() => {
    const fetchTubs = async () => {
      try {
        const userId = currentUserId;
        const userTubs = await getCreatineTubs(userId);
        setCurrentTubs(userTubs);
      } catch (error) {
        console.error('Error fetching creatine tubs:', error);
      }
    };

    fetchTubs();
  }, [currentUserId]);

  const cardReminderTitle = (dateString) => (
    <div className='reminder-title'>
      <div className='reminder-settings-container'>
        <FontAwesomeIcon icon={faGear} />
      </div>
      <p>{dateString}</p>
    </div>
  );


  const data = {
    labels: ['Creatine consumed', 'Creatine Remaining'],
    datasets: [{
      label: 'Creatine Remaining',
      data: [10, 15],
      backgroundColor: ['white', 'green'],
      borderColor: ['white', 'green']
    }]
  };

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
        key="doughnut-chart"
        data={data}
        options={options}
      />
    </div>,
    <div>
      <ReminderCalendar onChange={onChange} value={value} />
    </div>
  ]);



  const removeReminder = (idx) => {
    if (idx >= 0 && idx < reminderCards.length) {
      const updatedCards = [...reminderCards];
      updatedCards.splice(idx, 1);
      setReminderCards(updatedCards);
    }
  };

  const cardReminderBody = (idx) => (
    <div className='card-reminder'>
      <div className='card-reminder-text'>
        <p className='card-reminder-dosage-text'>5g of Creatine Monohydrate</p>
      </div>
      <div className='card-reminder-button-container'>
        <p>Remove Reminder</p>
        <Button
          label='Completed'
          size={ButtonSizes.Small}
          onClick={() => removeReminder(idx)}
        />
      </div>
    </div>
  );

  const [reminderCards, setReminderCards] = useState([
    {
      title: todayDate,
      body: cardReminderBody(0)
    },
    {
      title: tomorrowDate,
      body: cardReminderBody(1)
    }
  ]);

  return (
    <>
      <NavBar />
      {tubsTest.length === 0 ?
        <>
          <div className='home-welcome-header'>
            <h1>Welcome</h1>
            <h2>Start tracking your creatine intake and set reminders!</h2>
          </div>
          <div className='home-add-tub-container'>
            <Button
              label='Add a new tub'
              size={ButtonSizes.Default}
              onClick={() => history('/add-tub')}
            />
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
        :
        <>
          <div>
            <div className='current-user-welcome'>
              <h1>Welcome Back</h1>
              <Carousel items={carouselItems} />
            </div>
          </div>
          <div className='card-containers-reminders'>
          {reminderCards.map((card, index) => (
    <Card
      key={index}
      size='small-wide'
      header={cardReminderTitle(card.title)}
      body={card.body}
    />
  ))}
          </div>
        </>
      }
    </>
  );
}
