export default {
  rootFrequency: 110, //A2
  equalTemperament: {
    base: 2,
    count: 41,
    skipFretting: 2,
  },
  markers: [
    { fret: 4, count: 1 },
    { fret: 8, count: 2 },
    { fret: 12, count: 3 },
    { fret: 16, count: 1 },
    { fret: 20, count: 2 },
    { fret: 24, count: 3 },
    { fret: 28, count: 1 },
    { fret: 32, count: 2 },
    { fret: 36, count: 3 },
  ],
  stringsTuning: {
    //Kite Guitar - mid-6 down major tuning
    InEdoStepsFromRoot: [
      1 - 13, //^^F/vGb
      1, //^A
      1 + 13, //C#/^Db
      1 + 13 * 2, //F
      1 + 13 * 3, //vA#/Bb
      1 + 13 * 4, //^^C/vDb
    ],
  },
  noteNamesFromRoot: [
    "A",
    "^A",
    "^^A/vBb",
    "vA#/Bb",
    "A#/^Bb",
    "^A#/vvB",
    "vB",
    "B",
    "^B",
    "vC",
    "C",
    "^C",
    "^^C/vDb",
    "vC#/Db",
    "C#/^Db",
    "C#^/vvD",
    "vD",
    "D",
    "^D",
    "^^D/vEb",
    "vD#/Eb",
    "D#/^Eb",
    "^D#/vvE",
    "vE",
    "E",
    "^E",
    "vF",
    "F",
    "^F",
    "^^F/vGb",
    "vF#/Gb",
    "F#/^Gb",
    "^F#/vvG",
    "vG",
    "G",
    "^G",
    "^^G/vAb",
    "vG#/Ab",
    "G#/^Ab",
    "vvA",
    "vA",
  ],
};
