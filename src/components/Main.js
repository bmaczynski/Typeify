import React, { useState, useEffect, useRef } from "react";
import { generateRandomWords } from "./WordList";
import Timer from "./Timer";
import { IoMdRefresh } from "react-icons/io";

const Main = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [words, setWords] = useState([]);
  const [wordCorrectness, setWordCorrectness] = useState({});
  const [isStarted, setIsStarted] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [seconds, setSeconds] = useState(10);
  const [startTime, setStartTime] = useState(Date.now());
  const [wpm, setWpm] = useState(0);
  const selectedTime = useRef(10);

  const fetchWords = async () => {
    const randomWords = await generateRandomWords(50);
    setWords(randomWords);
  };

  useEffect(() => {
    fetchWords();
  }, []);

  const handleInputChange = (e) => {
    const input = e.target.value;
    setUserInput(input);
  };

  const handleKeyDown = (e) => {
    if (!isStarted) {
      setIsStarted(true);
      setStartTime(Date.now());
    }
    if (e.key === " ") {
      e.preventDefault();
      const isWordCorrect = userInput.trim() === words[currentWordIndex];
      setWordCorrectness((prev) => ({
        ...prev,
        [currentWordIndex]: isWordCorrect,
      }));
      setCurrentWordIndex((prevIndex) => prevIndex + 1);
      setUserInput("");

      // Calculate WPM
      let timeElapsedInMinutes = (Date.now() - startTime) / 60000;
      setWpm(Math.floor((currentWordIndex + 1) / timeElapsedInMinutes));
    }
    if (wordRefs[currentWordIndex].current) {
      wordRefs[currentWordIndex].current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const onTimeUp = () => {
    setIsTimeUp(true);
    setWordCount(currentWordIndex); // Update wordCount when time is up
  };

  // Display words with function from WordList
  const renderWord = (word, index) => {
    const isCurrentWord = index === currentWordIndex;
    const isWordCorrect = wordCorrectness[index];
    return (
      <span
        key={index}
        className={`text-xl md:text-3xl font-medium ${
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
  const wordRefs = words.map(() => React.createRef());

  return (
    <div className="flex flex-col items-center gap-2.5 container">
      <div className="flex flex-wrap px-10 py-7 overflow-hidden bg-white/5 border border-white/10 rounded-md select-none">
        {words.map((word, index) => renderWord(word, index))}
      </div>

      {/* User input to type out current word. */}
      <div className="flex gap-2.5 w-full">
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          disabled={isTimeUp}
          className="px-5 py-2.5 bg-white/5 border-white/10 rounded-md border focus:border-teal-500 text-lg text-white !outline-none placeholder-neutral-500 w-full"
          placeholder="Start typing..."
        />
        <button
          className="h-[50px] aspect-square items-center justify-center bg-white/5 border border-white/10 rounded-md text-white font-semibold transition hover:bg-white/10 shrink-0"
          onClick={() => {
            setSeconds(10);
            selectedTime.current = 10;
          }}
        >
          10s
        </button>
        <button
          className="h-[50px] aspect-square items-center justify-center bg-white/5 border border-white/10 rounded-md text-white font-semibold transition hover:bg-white/10 shrink-0"
          onClick={() => {
            setSeconds(30);

            selectedTime.current = 30;
          }}
        >
          30s
        </button>
        <button
          onClick={() => {
            setCurrentWordIndex(0);
            setUserInput("");
            setWordCorrectness({});
            setIsStarted(false);
            setWordCount(0);
            setIsTimeUp(false);
            setSeconds(selectedTime.current);
            setWpm(0);
            fetchWords();
          }}
          className="h-[50px] aspect-square flex items-center justify-center bg-white/5 border border-white/10 rounded-md text-lg text-white font-semibold transition hover:bg-white/10 shrink-0"
        >
          <IoMdRefresh />
        </button>
      </div>
      <Timer
        seconds={seconds}
        setSeconds={setSeconds}
        onTimeUp={onTimeUp}
        wordCount={wordCount}
        isStarted={isStarted}
        setWordCount={setWordCount}
        wpm={wpm}
        setWpm={setWpm}
      />
    </div>
  );
};

export default Main;
