import { LOW_POWER, HIGH_POWER } from "../../config/triacs";
import { lights, tickCount, tickMs } from "../../config/triacs/300";
import generatePowerPositionsForLight from "./generatePowerPositionsForLight";

const getTicksOnLow = result =>
  result.filter(power => power === LOW_POWER).length;

const getTicksOnHigh = result =>
  result.filter(power => power === HIGH_POWER).length;

const ticksFor7Secs = 7000 / tickMs;
const ticksFor14Secs = 14000 / tickMs;
const ticksFor42Secs = 42000 / tickMs;
const ticksFor49Secs = 49000 / tickMs;
const ticksFor60Secs = 60000 / tickMs;

describe("generatePowerPositionsForLight for a tickCount of 300", () => {
  describe("for red2 light", () => {
    const { red2 } = lights;

    it("should return array of power positions with it on low for 49 seconds and on high for 7 seconds", () => {
      const result = generatePowerPositionsForLight(red2, tickCount);

      expect(result).toMatchSnapshot();
      expect(getTicksOnLow(result)).toBe(ticksFor49Secs);
      expect(getTicksOnHigh(result)).toBe(ticksFor7Secs);
    });
  });

  describe("for green2 light", () => {
    const { green2 } = lights;

    it("should return array of power positions with it on low for 42 seconds and on high for 14 seconds", () => {
      const result = generatePowerPositionsForLight(green2, tickCount);

      expect(result).toMatchSnapshot();
      expect(getTicksOnLow(result)).toBe(ticksFor42Secs);
      expect(getTicksOnHigh(result)).toBe(ticksFor14Secs);
    });
  });

  describe("for blue light", () => {
    const { blue } = lights;

    it("should return array of power positions with it on low for 0 seconds and on high for 60 seconds", () => {
      const result = generatePowerPositionsForLight(blue, tickCount);

      expect(getTicksOnLow(result)).toBe(0);
      expect(getTicksOnHigh(result)).toBe(ticksFor60Secs);
    });
  });

  describe("for green1 light", () => {
    const { green1 } = lights;

    it("should return array of power positions with it on low for 42 seconds and on high for 14 seconds", () => {
      const result = generatePowerPositionsForLight(green1, tickCount);

      expect(result).toMatchSnapshot();
      expect(getTicksOnLow(result)).toBe(ticksFor42Secs);
      expect(getTicksOnHigh(result)).toBe(ticksFor14Secs);
    });
  });

  describe("for red1 light", () => {
    const { red1 } = lights;

    it("should return array of power positions with it on low for 49 seconds and on high for 7 seconds", () => {
      const result = generatePowerPositionsForLight(red1, tickCount);

      expect(result).toMatchSnapshot();
      expect(getTicksOnLow(result)).toBe(ticksFor49Secs);
      expect(getTicksOnHigh(result)).toBe(ticksFor7Secs);
    });
  });
});
