import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Counter() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  //Count handler
  function HandleNextCount() {
    setCount((count) => count + step);
  }

  function HandlePreviousCount() {
    setCount((count) => count - step);
  }

  //Handle reset

  function handleReset() {
    setStep(0);
    setCount(0);
  }

  const dateToday = function (pCount) {
    const result = new Date();
    result.setDate(result.getDate() + pCount);

    return result;
  };

  return (
    <div>
      <div className="div div_step">
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(+e.target.value)}
        />
        <p>Steps: {step}</p>
      </div>
      <div className="div div_count">
        <button className="btn btn_minus" onClick={HandlePreviousCount}>
          -
        </button>
        <input
          type="text"
          defaultValue="0"
          value={count}
          onChange={(e) => setCount(+e.target.value)}
        />
        <button className="btn btn_add" onClick={HandleNextCount}>
          +
        </button>
      </div>
      <div className="div set_date">
        <p>
          {count === 0
            ? "Today is "
            : count > 0
              ? `${count} days from today is `
              : `${count} days ago was `}
          {dateToday(count).toLocaleDateString()}
        </p>
      </div>
      <button
        style={step > 0 ? { display: "block" } : { display: "none" }}
        onClick={handleReset}
      >
        Reset
      </button>
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
