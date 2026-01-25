import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Counter() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  //Steps handler
  function HandleNextStep() {
    setStep((step) => step + 1);
  }
  function HandlePreviousStep() {
    setStep((step) => step - 1);
  }

  //Count handler
  function HandleNextCount() {
    setCount((count) => count + step);
  }

  function HandlePreviousCount() {
    setCount((count) => count - step);
  }

  const dateToday = function (pCount) {
    const result = new Date();
    result.setDate(result.getDate() + pCount);

    return result;
  };

  return (
    <div>
      <div className="div div_step">
        <button className="btn btn_minus" onClick={HandlePreviousStep}>
          -
        </button>
        <p>Steps: {step}</p>

        <button className="btn btn_add" onClick={HandleNextStep}>
          +
        </button>
      </div>
      <div className="div div_count">
        <button className="btn btn_minus" onClick={HandlePreviousCount}>
          -
        </button>
        <p>Count: {count}</p>
        <button className="btn btn_add" onClick={HandleNextCount}>
          +
        </button>
      </div>
      <div className="div set_date">
        <p>
          {count === 0
            ? "Today is"
            : count > 0
              ? `${count} days from today is `
              : `${count} days ago was`}{" "}
          {dateToday(count).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
