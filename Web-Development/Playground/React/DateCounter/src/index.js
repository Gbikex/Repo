import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Counter() {
  const [step, setStep] = useState(0);

  function HandleNextStep() {
    setStep((step) => step + 1);
  }
  function HandlePreviousStep() {
    if (step > 0) setStep((step) => step - 1);
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
      <div className="count"></div>
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
