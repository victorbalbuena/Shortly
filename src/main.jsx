import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ShorterProvider from "./hooks/useStateContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ShorterProvider>
    <App />
  </ShorterProvider>
);
