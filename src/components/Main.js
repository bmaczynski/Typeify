import React, { useState, useEffect } from "react";
import { generateRandomWords } from "./WordList";

const Main = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [words, setWords] = useState([]);
  const [wordCorrectness, setWordCorrectness] = useState({});
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);

  // Use function from WordList that scrambles words stored within an array.
  useEffect(() => {
    const fetchWords = async () => {
      const randomWords = await generateRandomWords(20);
      setWords(randomWords);
    };
    fetchWords();
  }, []);
  useEffect(() => {
    if (startTime !== null) {
      const intervalId = setInterval(() => {
        const currentTime = new Date();
        const timeDiffInMinutes = (currentTime - startTime) / 60000; // convert ms to minutes
        const correctWordCount =
          Object.values(wordCorrectness).filter(Boolean).length;
        setWpm(Math.floor(correctWordCount / timeDiffInMinutes));
      }, 1000); // update every second

      return () => clearInterval(intervalId); // cleanup on unmount or when dependencies change
    }
  }, [startTime, wordCorrectness]);
  const handleInputChange = (e) => {
    const input = e.target.value;
    setUserInput(input);
  };

  useEffect(() => {
    if (startTime === null) {
      setStartTime(new Date());
    }
  }, [userInput]);


  const handleKeyUp = (e) => {
    if (e.key === " ") {
      e.preventDefault();
      const isWordCorrect = userInput.trim() === words[currentWordIndex];
      setWordCorrectness((prev) => ({
        ...prev,
        [currentWordIndex]: isWordCorrect,
      }));
      setCurrentWordIndex((prevIndex) => prevIndex + 1);
      setUserInput(""); // Clear the input field
    }
  };

  // Display words with function from WordList
  const renderWord = (word, index) => {
    const isCurrentWord = index === currentWordIndex;
    const isWordCorrect = wordCorrectness[index];
    return (
      <span
        key={index}
        className={`text-3xl font-medium ${
          isWordCorrect === false
            ? "text-red-500"
            : isWordCorrect
            ? "text-black"
            : "text-white text-opacity-50"
        }`}
      >
        {word.split("").map((letter, letterIndex) => {
          let letterClass = "";
          if (isCurrentWord) {
            if (letterIndex <= userInput.length - 1) {
              if (letter.toLowerCase() === userInput[letterIndex]) {
                letterClass = "text-emerald-500 text-opacity-100";
              } else {
                letterClass = "text-red-500 text-opacity-100";
              }
            } else {
              letterClass = "text-white text-opacity-90";
            }
          } else {
            if (wordCorrectness[index]) {
              letterClass = "text-emerald-500 text-opacity-100";
            }
          }
          return (
            <span key={letterIndex} className={letterClass}>
              {letter}
            </span>
          );
        })}
        &nbsp;
      </span>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-900 gap-5">
      <div className="flex flex-wrap p-5 max-w-3xl bg-neutral-800 rounded-lg select-none">
        {words.map((word, index) => renderWord(word, index))}
      </div>

      {/* User input to type out current word. */}
      <input
        type="text"
        value={userInput}
        onChange={handleInputChange}
        onKeyUp={handleKeyUp}
        className="p-2.5 rounded-lg bg-white bg-opacity-20 text-white font-medium text-2xl tracking-wide outline-none"
      />
      <div className="flex flex-col items-center p-5 rounded-lg text-white justify-center aspect-square">
        <div className="font-extrabold text-6xl tracking-tight">{wpm}</div>
        <div className="font-semibold text-sm tracking-wide">WPM</div>
      </div>
    </div>
  );
};

export default Main;
