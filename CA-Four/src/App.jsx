import React, { useMemo } from "react";
import "./App.css";
import Result from "./Result.jsx";
import { useState, useEffect } from "react";
import questions from "./questions.js";

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleThemeToggle = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  const handleHighlightToggle = () => {
    setIsHighlighted((prevHighlight) => !prevHighlight);
  };

  const handleAnswerClick = (isCorrect) => () => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      if (nextIndex < questions.length) {
        return nextIndex;
      } else {
        setQuizCompleted(true);
        return prevIndex;
      }
    });
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setQuizCompleted(false);
  };

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: isDarkTheme ? "rgb(82, 79, 79)" : "white",
      color: isDarkTheme ? "white" : "black",
    };
  }, [isDarkTheme]);

  const headingStyles = useMemo(() => {
    return { color: isHighlighted ? "blue" : "brown" };
  }, [isHighlighted]);

  useEffect(() => {
    document.title = isDarkTheme ? "Dark Theme" : "Light Theme";
  }, [isDarkTheme]);

  if (quizCompleted) {
    return <Result score={score} length={questions.length} onRestart={handleRestart} />;
  }

  return (
    <div style={themeStyles} className="whole-page">
      <div className="header">
        <h4>Kalvium</h4>
        <button onClick={handleThemeToggle}>
          {isDarkTheme ? "Switch to Light Theme" : "Switch to Dark Theme"}
        </button>
      </div>

      <div className="quiz-page">
        <div className="display-quiz">
          <div className="questions">
            <h3>Question: {currentIndex + 1} out of {questions.length}</h3>
          </div>
          <div style={headingStyles} className="questions">
            <h1>{currentQuestion.text}</h1>
          </div>
          <div className="options">
            {currentQuestion.options.map((option) => (
              <button
                onClick={handleAnswerClick(option.isCorrect)}
                key={option.id}
              >
                {option.text}
              </button>
            ))}
          </div>
          <div className="highlight">
            <button onClick={handleHighlightToggle}>
              {isHighlighted ? "Remove Highlight" : "Highlight"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
