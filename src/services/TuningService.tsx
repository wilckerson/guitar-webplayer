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
  audioSampleMainFrequency: number
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
      tuningData.stringsTuning.InEdoStepsFromRoot[guitarStringIndex];
    const stringRatio = getRatioFromEqualTemperament(
      tuningData.equalTemperament.count,
      tuningData.equalTemperament.base,
      stringSteps
    );

    const mainFrequencyAdjustmentRatio =
      tuningData.rootFrequency / audioSampleMainFrequency;

    const ratio = fretRatio * stringRatio * mainFrequencyAdjustmentRatio;
    return ratio;
  }

  return 1;
}

function getNoteNameFromFret(guitarStringIndex: number, fretIndex: number) {
  const stringSteps =
    tuningData.stringsTuning.InEdoStepsFromRoot[guitarStringIndex];

  const fretStep =
    stringSteps + fretIndex * tuningData.equalTemperament.skipFretting;

  let normalizedIndex = fretStep % tuningData.noteNamesFromRoot.length;
  if (normalizedIndex < 0) {
    normalizedIndex += tuningData.noteNamesFromRoot.length;
  }

  const noteName = tuningData.noteNamesFromRoot[normalizedIndex];
  return noteName;
}

function getMarkers() {
  return tuningData.markers || [];
}

export default {
  getRatioFromFret,
  getNoteNameFromFret,
  getMarkers,
};
