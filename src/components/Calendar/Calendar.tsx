import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.scss';



export default function ReminderCalendar({ onChange, value }:any) {
  return ( 
    <Calendar onChange={onChange} value={value} />
  )
}