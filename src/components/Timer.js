import React, { useEffect, useRef } from "react";

const Timer = ({
  isStarted,
  onTimeUp,
  seconds,
  setSeconds,
  setWordCount,
  wpm,
}) => {
  const timerRef = useRef();

  useEffect(() => {
    if (seconds === 0) {
      onTimeUp();
      clearInterval(timerRef.current);
    }
  }, [seconds]);

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
    setWordCount(0);
  }, [seconds]);

  return (
    <>
      <div className="flex gap-2.5 md:gap-5 md:p-5 text-white items-center justify-center">
        <div className="flex flex-col items-center">
          <span className="font-extrabold text-2xl md:text-4xl">{seconds}</span>
          seconds
        </div>
        <div className="flex flex-col items-center">
          <span className="font-extrabold text-2xl md:text-4xl">{wpm}</span>
          wpm
        </div>
      </div>
    </>
  );
};

export default Timer;
