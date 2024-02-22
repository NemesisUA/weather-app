import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import './CountDown.css';
import getDaysLeft from "../../utils/getDaysLeft";

function CountDown() {
  const { tripStart } = useSelector(state => state.trips.activeTrip);
  const [seconds, setSeconds] = useState(
    Math.round((new Date(tripStart).getTime() - new Date().getTime()) / 1000)
  )

  const daysHoursMins = getDaysLeft(seconds);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 1) {
        setSeconds(seconds => seconds - 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [seconds]);



  return (
    <div className='counter'>
      <div className="counter-item">
        <p className="counter-number">{daysHoursMins.days}</p>
        <p className="counter-text">days</p>
      </div>
      <div className="counter-item">
        <p className="counter-number">{daysHoursMins.hours}</p>
        <p className="counter-text">hours</p>
      </div>
      <div className="counter-item">
        <p className="counter-number">{daysHoursMins.minutes}</p>
        <p className="counter-text">minutes</p>
      </div>
      <div className="counter-item">
        <p className="counter-number">{daysHoursMins.seconds}</p>
        <p className="counter-text">seconds</p>
      </div>
    </div>
  )
}

export default CountDown