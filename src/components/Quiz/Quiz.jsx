import React from "react";
import "./Quiz.css";

const Quiz = () => {
  let [index, setIndex] = useState(0);
  return (
    <div className="container">
      <h1>React Quiz</h1>
      <hr />
      <h2>What's react? </h2>
      <ul>
        <li>React is a library</li>
        <li>React is a framework</li>
        <li>React is a tool</li>
        <li>React is a language</li>
      </ul>
      <button>Next</button>
      <div className="index">1 of 10 questions</div>
    </div>
  );
};

export default Quiz;
