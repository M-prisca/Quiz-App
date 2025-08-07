import React, { useRef } from "react";
import "./Quiz.css";
import { useState } from "react";
import questions from "../../assets/questions.js";

const Quiz = () => {
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(questions[index]);
  let [lock, setLock] = useState(false);

  let options1 = useRef(null);
  let options2 = useRef(null);
  let options3 = useRef(null);
  let options4 = useRef(null);

  let optionArr = [options1, options2, options3, options4];

  const checkAnswer = (e, ans) => {
    if (lock === false) {
      if (question.ans === ans) {
        e.target.classList.add("correct");
        setLock(true);
      } else {
        e.target.classList.add("wrong");
        setLock(true);
        optionArr[question.ans - 1].current.classList.add("correct");
      }
    }
  };
  return (
    <div className="container">
      <h1>React Quiz</h1>
      <hr />
      <h2>
        {index + 1}. {question.question}{" "}
      </h2>
      <ul>
        <li ref={options1} onClick={(e) => checkAnswer(e, 1)}>
          {question.options1}
        </li>
        <li ref={options2} onClick={(e) => checkAnswer(e, 2)}>
          {question.options2}
        </li>
        <li ref={options3} onClick={(e) => checkAnswer(e, 3)}>
          {question.options3}
        </li>
        <li fer={options4} onClick={(e) => checkAnswer(e, 4)}>
          {question.options4}
        </li>
      </ul>
      <button>Next</button>
      <div className="index">1 of 10 questions</div>
    </div>
  );
};

export default Quiz;
