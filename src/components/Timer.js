import React, { useState, useEffect, useRef } from "react";

const Timer = ({ wordCount, isStarted, onTimeUp }) => {
  const [seconds, setSeconds] = useState(10);
  const [wpm, setWpm] = useState(0);
  const timerRef = useRef();

  useEffect(() => {
    if (seconds === 0) {
      onTimeUp();
      clearInterval(timerRef.current);
    }
    setWpm(Math.floor((wordCount / (10 - seconds)) * 60 || 0));
  }, [seconds, wordCount]);

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
  return (
    <>
      <div className="flex gap-5 p-5 text-white items-center justify-center">
        <div className="flex flex-col items-center">
          <span className="font-extrabold text-4xl">{seconds}</span>
          seconds
        </div>
        <div className="flex flex-col items-center">
          <span className="font-extrabold text-4xl">{wpm}</span>
          wpm
        </div>
      </div>
      <div className="flex">
        <button
          className="text-white p-2.5 bg-neutral-800 rounded-md hover:bg-opacity-80 transition-all duration-200 text-xl"
          onClick={() => window.location.reload()}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default Timer;
