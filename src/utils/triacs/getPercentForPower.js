import {
  LOW_POWER_POSITION,
  HIGH_POWER_POSITION,
  FADE_POWER_POSITIONS
} from "../../config/triacs";

const getPercentForPower = power => {
  const powerPositions = [
    LOW_POWER_POSITION,
    ...FADE_POWER_POSITIONS,
    HIGH_POWER_POSITION
  ];
  const numerator = powerPositions.indexOf(power);
  const denominator = powerPositions.length - 1;
  return numerator / denominator;
};

export default getPercentForPower;
