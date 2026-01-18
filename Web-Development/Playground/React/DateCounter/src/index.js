import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Test() {
  return <p>Test</p>;
}

export default function App() {
  return (
    <div>
      <Test />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
