//Import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight,  faTeethOpen } from '@fortawesome/free-solid-svg-icons';

//import calendar data and appoinment details
import { calendarAppointments, appointmentDetails } from '../data/calendarData';

const CalendarView = () => (
  <section className="calendar-view">

    {/* Calendar header with month name and arrow icons */}
    <div className='calendar-data'>
      <div>
    <h2>October 2021</h2>
    </div>

    <div className='arrows'>
      <div>
      <FontAwesomeIcon icon={faArrowLeft}/></div>
      <div><FontAwesomeIcon icon={faArrowRight}/></div>
    </div>
    </div>

    {/* Calendar grid: shows days, dates, and appointment times */}
    <div className="calendar-grid" >
      {calendarAppointments.map((slot, i) => (
        <>
        <div >
        <div key={i} className="day">{slot.day}</div>
        <div key={i} className="date">{slot.date}</div>
        <div key={i} className="time">{slot.time}</div>
        <div key={i} className="time2">{slot.time2}</div>
        <div key={i} className="time3">{slot.time3}</div>
        </div>
       
        </>
      ))}
    </div>
    
     {/* Appointment details section (below the calendar) */}
    <div className='calendar-details'>
  {appointmentDetails.map((item, i) => (
    <div className='calendar-row' key={i}>
      <div className='calendar-details1'>
        <div className='inner-calendar-details1'>
        <p>{item.title}</p>
        <FontAwesomeIcon icon={faTeethOpen}/>
        </div>
        <p>{item.time}</p>
        <p>{item.name}</p>
      </div>

      {/* Second appointment card (e.g., Physiotherapy) */}
      <div className='calendar-details2'>
        <div className='inner-calendar-details2'>
        <p>{item.title2}</p>
        <FontAwesomeIcon icon={faTeethOpen}/>
        </div>
        <p>{item.time2}</p>
        <p>{item.name2}</p>
      </div>
    </div>
  ))}
</div>

  </section>
);

export default CalendarView;