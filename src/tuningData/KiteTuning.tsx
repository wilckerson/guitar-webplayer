export default {
  equalTemperament: {
    base: 2,
    count: 41,
    skipFretting: 2,
  },
  stringsTuning: {
    //Kite Guitar - mid-6 down major tuning
    InEdoStepsFromA: [
      1 - 13, //^^F/vGb
      1, //^A
      1 + 13, //C#/^Db
      1 + 13 * 2, //F
      1 + 13 * 3, //vA#/Bb
      1 + 13 * 4, //^^C/vDb
    ],
  },
  noteNamesFromA: [
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
