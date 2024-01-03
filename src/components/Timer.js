import React, { useState, useEffect } from 'react';

const Timer = ({ words, wordCorrectness }) => {
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);

  useEffect(() => {
    if (startTime !== null) {
      const intervalId = setInterval(() => {
        const currentTime = new Date();
        const timeDiffInMinutes = (currentTime - startTime) / 60000; // convert ms to minutes
        const correctWordCount = Object.values(wordCorrectness).filter(Boolean).length;
        setWpm(Math.floor(correctWordCount / timeDiffInMinutes));
      }, 1000); // update every second

      return () => clearInterval(intervalId); // cleanup on unmount or when dependencies change
    }
  }, [startTime, wordCorrectness]);

  return (
    <div>
      <p>WPM: {wpm}</p>
    </div>
  );
};

export default Timer;