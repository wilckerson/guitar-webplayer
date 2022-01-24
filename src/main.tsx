import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AudioService from "./services/AudioService";
import Config, { cssVariablesConfig } from "./Config";
import GuitarWebPlayerService from "./services/GuitarWebPlayerService";

GuitarWebPlayerService.init();

applyConfigCssVariables();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

function applyConfigCssVariables() {
  const keys = Object.keys(cssVariablesConfig);
  const values = Object.values(cssVariablesConfig);
  const styleContent = keys
    .map((key, index) => `--${key}: ${values[index]};`)
    .join(" ");

  document.documentElement.setAttribute("style", styleContent);
}
