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

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
