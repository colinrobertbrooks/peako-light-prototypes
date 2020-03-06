import { LOW_POWER, HIGH_POWER, FADE_POWERS } from "../../config/triacs";

const getBrightnessForPower = power => {
  const powerPositions = [LOW_POWER, ...FADE_POWERS, HIGH_POWER];
  const numerator = powerPositions.indexOf(power);
  const denominator = powerPositions.length - 1;
  return numerator / denominator;
};

export default getBrightnessForPower;
