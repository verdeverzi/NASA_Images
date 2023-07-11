import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { NasaProvider } from "./context/nasaContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <NasaProvider>
    <App />
  </NasaProvider>
);
