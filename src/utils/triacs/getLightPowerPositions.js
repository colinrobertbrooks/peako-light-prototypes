import {
  LOW_POWER_POSITION,
  HIGH_POWER_POSITION,
  FADE_POWER_POSITIONS
} from "../../config/triacs";

const getLightPowerPositions = (lightConfig, tickCount) => {
  const { startFadeIn, startFadeOut, fadeFor } = lightConfig;
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
      powerPositions.push(FADE_POWER_POSITIONS[fadeInPowerIdx]);
    } else if (lightIsFadingOut) {
      const fadeOutPowerIdx = position - startFadeOut;
      powerPositions.push([...FADE_POWER_POSITIONS].reverse()[fadeOutPowerIdx]);
    } else if (lightIsOn) {
      powerPositions.push(HIGH_POWER_POSITION);
    } else {
      powerPositions.push(LOW_POWER_POSITION);
    }

    position++;
  }

  return powerPositions;
};

export default getLightPowerPositions;
