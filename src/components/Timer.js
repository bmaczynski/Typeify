import React, { useState, useEffect, useRef } from "react";

const Timer = ({ onTimeUp, wordCount, isStarted }) => {
  const [seconds, setSeconds] = useState(30);
  const [wpm, setWpm] = useState(0);
  const timerRef = useRef();

  useEffect(() => {
    if (isStarted) {
      timerRef.current = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isStarted]);

  useEffect(() => {
    if (seconds === 0) {
      onTimeUp();
      clearInterval(timerRef.current);
    }
    setWpm(Math.floor((wordCount / (30 - seconds)) * 60 || 0));
  }, [seconds, wordCount, onTimeUp]);

  return (
    <div className="flex gap-5 p-5 text-white items-center justify-center">
      <div className="flex flex-col items-center">
        <span className="text-emerald-500 font-extrabold text-4xl">
          {seconds}
        </span>
        seconds
      </div>
      <div className="flex flex-col items-center">
        <span className="text-emerald-500 font-extrabold text-4xl">{wpm}</span>
        wpm
      </div>
    </div>
  );
};

export default Timer;
