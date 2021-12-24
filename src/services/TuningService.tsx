function getRatioFromMainFrequency(
  guitarStringIndex: number,
  fretIndex: number,
  mainFrequency: number
) {
  const fretRatio = Math.pow(4, fretIndex / 41);
  const stringRatio = Math.pow(Math.pow(2, 13 / 41), guitarStringIndex);
  const ratio = fretRatio * stringRatio;
  return ratio;
}

export default {
  getRatioFromMainFrequency,
};
