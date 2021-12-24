function getRatioFromEqualTemperament(
  count: number,
  base: number = 2,
  index: number = 0
) {
  return Math.pow(base, index / count);
}

function getRatioFromMainFrequency(
  guitarStringIndex: number,
  fretIndex: number,
  mainFrequency: number
) {
  //Kite Tunning
  const fretRatio = getRatioFromEqualTemperament(41, 4, fretIndex);
  const intervalBetweenStrings = getRatioFromEqualTemperament(41, 2, 13);

  //31edo
  // const fretRatio = getRatioFromEqualTemperament(31, 4, fretIndex);
  // const intervalBetweenStrings = getRatioFromEqualTemperament(31, 2, 9);

  //22edo
  // const fretRatio = getRatioFromEqualTemperament(22, 2, fretIndex);
  // const intervalBetweenStrings = getRatioFromEqualTemperament(22, 2, 7);

  //12edo
  // const fretRatio = getRatioFromEqualTemperament(12, 2, fretIndex);
  // const intervalBetweenStrings = getRatioFromEqualTemperament(12, 2, 5);

  const stringRatio = Math.pow(intervalBetweenStrings, guitarStringIndex);
  const ratio = fretRatio * stringRatio;
  return ratio;
}

export default {
  getRatioFromMainFrequency,
};
