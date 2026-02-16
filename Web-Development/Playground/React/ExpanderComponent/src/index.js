import React from "react";
import App from "./components/App.js";
import reactDOM, { createRoot } from "react-dom/client";
import "./index.css";

const root = reactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
