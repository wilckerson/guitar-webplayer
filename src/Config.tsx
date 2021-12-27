import audioSamplePath from "./assets/audio-samples/Alesis-Fusion-Clean-Guitar-C3.wav";
// import audioSamplePath from "./assets/audio-samples/homeGuitar.wav";

export default {
  guitarStringsCount: 6,
  fretsPerString: 7, //36
  minimumDrag: 30,
  audioSamplePath,
  audioSampleMainFrequency: 440,
  cssVariables: {
    fretSize: "80px",
    openNoteSize: "60px",
  },
};
