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
      <div className="div set_date"></div>
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
