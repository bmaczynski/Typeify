import React, { useState, useEffect, useRef } from "react";

const Timer = ({ onTimeUp, wordCount, isStarted }) => {
  const [seconds, setSeconds] = useState(30);
  const timerRef = useRef();

  useEffect(() => {
    if (isStarted) {
      timerRef.current = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [isStarted]);

  useEffect(() => {
    if (seconds === 0) {
      clearInterval(timerRef.current);
      onTimeUp();
    }
  }, [seconds, onTimeUp]);

  const wpm = wordCount && !isNaN(wordCount) ? Math.round((wordCount / 30) * 60) : 0;

  return (
    <div className="flex flex-col p-5 text-white items-center justify-center">
      <p>Time left: {seconds} seconds</p>
      <div className="font-bold text-6xl tracking-tight">{wpm}</div>
      <div className="font-semibold text-sm text-teal-500 tracking-wide">
        WPM
      </div>
    </div>
  );
};

export default Timer;
