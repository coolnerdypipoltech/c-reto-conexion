import { useEffect, useState } from 'react';

import './Countdown.css';

const DAY = 1000 * 60 * 60 * 24;
const HOUR = 1000 * 60 * 60;
const MINUTE = 1000 * 60;

const getTimeLeft = (targetDate) => {
  const diff = Math.max(0, targetDate.getTime() - Date.now());
  return {
    days: Math.floor(diff / DAY),
    hours: Math.floor((diff % DAY) / HOUR),
    minutes: Math.floor((diff % HOUR) / MINUTE),
    seconds: Math.floor((diff % MINUTE) / 1000),
  };
};

const pad = (value) => String(value).padStart(2, '0');

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const units = [
    { label: 'Días', value: timeLeft.days },
    { label: 'Horas', value: timeLeft.hours },
    { label: 'Min', value: timeLeft.minutes },
    { label: 'Seg', value: timeLeft.seconds },
  ];

  return (
    <div className="countdown">
      {units.map((unit) => (
        <div className="countdown__unit" key={unit.label}>
          <span className="countdown__value">{pad(unit.value)}</span>
          <span className="countdown__label">{unit.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
