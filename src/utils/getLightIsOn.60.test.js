import getLightIsOn from "./getLightIsOn";
import { loopEnd, lights } from "../config/60";

describe("getLightIsOn during 60 second loop", () => {
  describe("for redTwo light", () => {
    const { redTwo } = lights;

    it("should return false when loopPosition is before 32", () => {
      const bool = getLightIsOn(redTwo, 31, loopEnd);
      expect(bool).toBe(false);
    });

    it("should return true when loopPosition is at 32", () => {
      const bool = getLightIsOn(redTwo, 32, loopEnd);
      expect(bool).toBe(true);
    });

    it("should return true when loopPosition is between 32 and 39", () => {
      const bool = getLightIsOn(redTwo, 35, loopEnd);
      expect(bool).toBe(true);
    });

    it("should return true when loopPosition is at 39", () => {
      const bool = getLightIsOn(redTwo, 39, loopEnd);
      expect(bool).toBe(true);
    });

    it("should return false when loopPosition is after 39", () => {
      const bool = getLightIsOn(redTwo, 40, loopEnd);
      expect(bool).toBe(false);
    });
  });

  describe("for green2 light", () => {
    const { green2 } = lights;

    it("should return false when loopPosition is before 20", () => {
      const bool = getLightIsOn(green2, 19, loopEnd);
      expect(bool).toBe(false);
    });

    it("should return true when loopPosition is at 20", () => {
      const bool = getLightIsOn(green2, 20, loopEnd);
      expect(bool).toBe(true);
    });

    it("should return true when loopPosition is between 20 and 36", () => {
      const bool = getLightIsOn(green2, 30, loopEnd);
      expect(bool).toBe(true);
    });

    it("should return true when loopPosition is at 36", () => {
      const bool = getLightIsOn(green2, 36, loopEnd);
      expect(bool).toBe(true);
    });

    it("should return false when loopPosition is after 36", () => {
      const bool = getLightIsOn(green2, 37, loopEnd);
      expect(bool).toBe(false);
    });
  });

  describe("for blue light", () => {
    const { blue } = lights;

    it("should return true when loopPosition is 0", () => {
      const bool = getLightIsOn(blue, 0, loopEnd);
      expect(bool).toBe(true);
    });

    it("should return true when loopPosition is between 0 and 15", () => {
      const bool = getLightIsOn(blue, 10, loopEnd);
      expect(bool).toBe(true);
    });

    it("should return false when loopPosition is 16", () => {
      const bool = getLightIsOn(blue, 16, loopEnd);
      expect(bool).toBe(false);
    });

    it("should return true when loopPosition is between 16 and 25", () => {
      const bool = getLightIsOn(blue, 20, loopEnd);
      expect(bool).toBe(false);
    });

    it("should return true when loopPosition is 26", () => {
      const bool = getLightIsOn(blue, 26, loopEnd);
      expect(bool).toBe(true);
    });

    it("should return true when loopPosition is 26 and 59", () => {
      const bool = getLightIsOn(blue, 45, loopEnd);
      expect(bool).toBe(true);
    });

    it("should return true when loopPosition is 59", () => {
      const bool = getLightIsOn(blue, 59, loopEnd);
      expect(bool).toBe(true);
    });
  });

  describe("for green1 light", () => {
    const { green1 } = lights;

    it("should return false when loopPosition is before 5", () => {
      const bool = getLightIsOn(green1, 4, loopEnd);
      expect(bool).toBe(false);
    });

    it("should return true when loopPosition is at 5", () => {
      const bool = getLightIsOn(green1, 5, loopEnd);
      expect(bool).toBe(true);
    });

    it("should return true when loopPosition is between 5 and 21", () => {
      const bool = getLightIsOn(green1, 15, loopEnd);
      expect(bool).toBe(true);
    });

    it("should return true when loopPosition is at 21", () => {
      const bool = getLightIsOn(green1, 21, loopEnd);
      expect(bool).toBe(true);
    });

    it("should return false when loopPosition is after 21", () => {
      const bool = getLightIsOn(green1, 22, loopEnd);
      expect(bool).toBe(false);
    });
  });

  describe("for red1 light", () => {
    const { red1 } = lights;

    it("should return false when loopPosition is 59", () => {
      const bool = getLightIsOn(red1, loopEnd - 1, loopEnd);
      expect(bool).toBe(false);
    });

    it("should return true when loopPosition is at 0", () => {
      const bool = getLightIsOn(red1, 0, loopEnd);
      expect(bool).toBe(true);
    });

    it("should return true when loopPosition is between 0 and 7", () => {
      const bool = getLightIsOn(red1, 5, loopEnd);
      expect(bool).toBe(true);
    });

    it("should return true when loopPosition is at 7", () => {
      const bool = getLightIsOn(red1, 7, loopEnd);
      expect(bool).toBe(true);
    });

    it("should return false when loopPosition is after 8", () => {
      const bool = getLightIsOn(red1, 8, loopEnd);
      expect(bool).toBe(false);
    });
  });
});
