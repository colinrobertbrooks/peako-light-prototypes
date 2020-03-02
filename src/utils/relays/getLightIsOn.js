const getLightIsOn = (lightConfig, loopPosition, loopEnd) => {
  const { start: lightStart, duration: lightDuration } = lightConfig;
  const lightEnd = lightStart + lightDuration;
  const lightStaysOnThroughLoopEnd = lightEnd > loopEnd;

  if (
    lightStaysOnThroughLoopEnd &&
    ((loopPosition >= 0 && loopPosition < lightEnd - loopEnd) ||
      loopPosition >= lightStart)
  ) {
    return true;
  } else if (lightStart <= loopPosition && lightEnd > loopPosition) {
    return true;
  }

  return false;
};

export default getLightIsOn;
