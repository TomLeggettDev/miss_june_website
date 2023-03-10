import './Show.css';
import GetTicketsButton from './GetTicketsButton/GetTicketsButton';

const months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function Show(props) {
  
  const date = new Date(props.show.date)
  const dayNumber = date.getDate();
  const dayName = days[date.getDay()];
  const month = months[date.getMonth()];

  return (
    <div className="show">
      <div className="leftText">
        <p className="date"> {dayName} {dayNumber} {month} </p>
        <p className="location"> {props.show.city} {props.show.country} </p>
      </div>
      <div className="middleText">
        <p className="gigInfo"> {props.show.info} </p>
        <p className="venue"> {props.show.venue} </p> 
        
      </div>
      <GetTicketsButton ticketURL={props.show.ticketURL} />
    </div>
  );
}

export default Show;
