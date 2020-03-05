import { LOW_POWER, HIGH_POWER, FADE_POWERS } from "../../config/triacs";

const getLightPowerPositions = (lightConfig, tickCount) => {
  const { alwaysOn, startFadeIn, startFadeOut, fadeFor } = lightConfig;

  if (alwaysOn) {
    return new Array(tickCount).fill(HIGH_POWER);
  }

  const powerPositions = [];
  let position = 0;

  while (position < tickCount) {
    const lightIsFadingIn =
      position > startFadeIn && position <= startFadeIn + fadeFor;
    const lightIsFadingOut =
      position >= startFadeOut && position < startFadeOut + fadeFor;
    const lightIsOn =
      position > startFadeIn + fadeFor && position <= startFadeOut;

    if (lightIsFadingIn) {
      const fadeInPowerIdx = position - startFadeIn - 1;
      powerPositions.push(FADE_POWERS[fadeInPowerIdx]);
    } else if (lightIsFadingOut) {
      const fadeOutPowerIdx = position - startFadeOut;
      powerPositions.push([...FADE_POWERS].reverse()[fadeOutPowerIdx]);
    } else if (lightIsOn) {
      powerPositions.push(HIGH_POWER);
    } else {
      powerPositions.push(LOW_POWER);
    }

    position++;
  }

  return powerPositions;
};

export default getLightPowerPositions;
