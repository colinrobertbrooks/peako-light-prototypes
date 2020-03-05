import { lights, tickCount } from "../../config/relays/60";
import getLightIsOn from "./getLightIsOn";

describe("getLightIsOn during 60 second loop", () => {
  describe("for red2 light", () => {
    const { red2 } = lights;

    it("should return false when loopPosition is before 32", () => {
      const bool = getLightIsOn(red2, 31, tickCount);
      expect(bool).toBe(false);
    });

    it("should return true when loopPosition is at 32", () => {
      const bool = getLightIsOn(red2, 32, tickCount);
      expect(bool).toBe(true);
    });

    it("should return true when loopPosition is between 32 and 39", () => {
      const bool = getLightIsOn(red2, 35, tickCount);
      expect(bool).toBe(true);
    });

    it("should return true when loopPosition is at 39", () => {
      const bool = getLightIsOn(red2, 39, tickCount);
      expect(bool).toBe(true);
    });

    it("should return false when loopPosition is after 39", () => {
      const bool = getLightIsOn(red2, 40, tickCount);
      expect(bool).toBe(false);
    });
  });

  describe("for green2 light", () => {
    const { green2 } = lights;

    it("should return false when loopPosition is before 20", () => {
      const bool = getLightIsOn(green2, 19, tickCount);
      expect(bool).toBe(false);
    });

    it("should return true when loopPosition is at 20", () => {
      const bool = getLightIsOn(green2, 20, tickCount);
      expect(bool).toBe(true);
    });

    it("should return true when loopPosition is between 20 and 36", () => {
      const bool = getLightIsOn(green2, 30, tickCount);
      expect(bool).toBe(true);
    });

    it("should return true when loopPosition is at 36", () => {
      const bool = getLightIsOn(green2, 36, tickCount);
      expect(bool).toBe(true);
    });

    it("should return false when loopPosition is after 36", () => {
      const bool = getLightIsOn(green2, 37, tickCount);
      expect(bool).toBe(false);
    });
  });

  describe("for blue light", () => {
    const { blue } = lights;

    it("should return true for 0 through 59", () => {
      [...Array(tickCount).keys()].forEach(loopPosition =>
        expect(getLightIsOn(blue, loopPosition, tickCount)).toBe(true)
      );
    });
  });

  describe("for green1 light", () => {
    const { green1 } = lights;

    it("should return false when loopPosition is before 5", () => {
      const bool = getLightIsOn(green1, 4, tickCount);
      expect(bool).toBe(false);
    });

    it("should return true when loopPosition is at 5", () => {
      const bool = getLightIsOn(green1, 5, tickCount);
      expect(bool).toBe(true);
    });

    it("should return true when loopPosition is between 5 and 21", () => {
      const bool = getLightIsOn(green1, 15, tickCount);
      expect(bool).toBe(true);
    });

    it("should return true when loopPosition is at 21", () => {
      const bool = getLightIsOn(green1, 21, tickCount);
      expect(bool).toBe(true);
    });

    it("should return false when loopPosition is after 21", () => {
      const bool = getLightIsOn(green1, 22, tickCount);
      expect(bool).toBe(false);
    });
  });

  describe("for red1 light", () => {
    const { red1 } = lights;

    it("should return false when loopPosition is at 59", () => {
      const bool = getLightIsOn(red1, tickCount - 1, tickCount);
      expect(bool).toBe(false);
    });

    it("should return true when loopPosition is at 0", () => {
      const bool = getLightIsOn(red1, 0, tickCount);
      expect(bool).toBe(true);
    });

    it("should return true when loopPosition is between 0 and 7", () => {
      const bool = getLightIsOn(red1, 5, tickCount);
      expect(bool).toBe(true);
    });

    it("should return true when loopPosition is at 7", () => {
      const bool = getLightIsOn(red1, 7, tickCount);
      expect(bool).toBe(true);
    });

    it("should return false when loopPosition is after 7", () => {
      const bool = getLightIsOn(red1, 8, tickCount);
      expect(bool).toBe(false);
    });
  });
});
