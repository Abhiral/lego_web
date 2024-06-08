/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef, useEffect } from "react";
import "./CountDown.css";

function CountDown() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  let interval = useRef();
  const startTimer = () => {
    const countdownDate = new Date("May 15, 2023 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
      } else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);
  };
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <div className="countdown-container">
      <div className="countdown-values">
        <div className="countdown-value">
          <p className="big-text">{days}</p>
          <span>days</span>
        </div>
        <div className="countdown-value">
          <p className="big-text">{hours}</p>
          <span>hours</span>
        </div>
        <div className="countdown-value">
          <p className="big-text">{minutes}</p>
          <span>mins</span>
        </div>
        <div className="countdown-value">
          <p className="big-text">{seconds}</p>
          <span>seconds</span>
        </div>
      </div>
    </div>
  );
}
export default CountDown;
