import tuningData from "../tuningData/KiteTuning";

function getRatioFromEqualTemperament(
  count: number,
  base: number = 2,
  index: number = 0,
  skipFreeting: number = 1
) {
  const skipFreetingBase = Math.pow(base, skipFreeting);
  return Math.pow(skipFreetingBase, index / count);
}

function getRatioFromFret(
  guitarStringIndex: number,
  fretIndex: number,
  mainFrequency: number
): number {
  // //Kite Tunning
  // const fretRatio = getRatioFromEqualTemperament(41, 4, fretIndex);
  // const intervalBetweenStrings = getRatioFromEqualTemperament(41, 2, 13);
  // //31edo
  // // const fretRatio = getRatioFromEqualTemperament(31, 4, fretIndex);
  // // const intervalBetweenStrings = getRatioFromEqualTemperament(31, 2, 9);
  // //22edo
  // // const fretRatio = getRatioFromEqualTemperament(22, 2, fretIndex);
  // // const intervalBetweenStrings = getRatioFromEqualTemperament(22, 2, 7);
  // //12edo
  // // const fretRatio = getRatioFromEqualTemperament(12, 2, fretIndex);
  // // const intervalBetweenStrings = getRatioFromEqualTemperament(12, 2, 5);
  // const stringRatio = Math.pow(intervalBetweenStrings, guitarStringIndex);
  // const ratio = fretRatio * stringRatio;
  // return ratio / 1.5;

  if (tuningData.equalTemperament) {
    const fretRatio = getRatioFromEqualTemperament(
      tuningData.equalTemperament.count,
      tuningData.equalTemperament.base,
      fretIndex,
      tuningData.equalTemperament.skipFretting
    );

    const stringSteps =
      tuningData.stringsTuning.InEdoStepsFromA[guitarStringIndex];
    const stringRatio = getRatioFromEqualTemperament(
      tuningData.equalTemperament.count,
      tuningData.equalTemperament.base,
      stringSteps
    );

    const ratio = fretRatio * stringRatio;
    return ratio;
  }

  return 1;
}

function getNoteNameFromFret(guitarStringIndex: number, fretIndex: number) {
  const stringSteps =
    tuningData.stringsTuning.InEdoStepsFromA[guitarStringIndex];

  const fretStep =
    stringSteps + fretIndex * tuningData.equalTemperament.skipFretting;

  let normalizedIndex = fretStep % tuningData.noteNamesFromA.length;
  if (normalizedIndex < 0) {
    normalizedIndex += tuningData.noteNamesFromA.length;
  }

  const noteName = tuningData.noteNamesFromA[normalizedIndex];
  return noteName;
}

export default {
  getRatioFromFret,
  getNoteNameFromFret,
};
