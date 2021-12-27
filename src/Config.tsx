import audioSamplePath from "./assets/audio-samples/Alesis-Fusion-Clean-Guitar-C3.wav";
// import audioSamplePath from "./assets/audio-samples/homeGuitar.wav";

const config = {
  audioSamplePath,
  audioSampleMainFrequency: 130.81,
  guitarStringsCount: 6,
  fretsPerString: 36,
  minimumDrag: 30,
  neckScrollEndPadding: 32,
};

export const cssVariablesConfig = {
  fretSize: "80px",
  openNoteSize: "60px",
};

export default config;
