import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AudioService from "./services/AudioService";
import Config from "./Config";
import GuitarWebPlayerService from "./services/GuitarWebPlayerService";

// AudioService.initAudioChannels(
//   Config.guitarStringsCount,
//   Config.audioSamplePath
// );
//TuningService.setTuning(kite)

GuitarWebPlayerService.init();

applyConfigCssVariables();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

function applyConfigCssVariables() {
  const keys = Object.keys(Config.cssVariables);
  const values = Object.values(Config.cssVariables);
  const styleContent = keys
    .map((key, index) => `--${key}: ${values[index]};`)
    .join(" ");

  document.documentElement.setAttribute("style", styleContent);
}
