import {
  LIGHT_RED_2,
  LIGHT_GREEN_2,
  LIGHT_BLUE,
  LIGHT_GREEN_1,
  LIGHT_RED_1,
  RED,
  GREEN,
  BLUE
} from "../../constants";

const fadeDurationMs = 2000;

export const tickMs = 200; // 2000 ms fade / 10 fade powers

export const tickCount = 300; // 60000 ms / 200 ms tick

const ticksPerSec = 1000 / tickMs;

const fadeFor = fadeDurationMs / tickMs;

export const lights = {
  // Red 2 comes on at 32 increases to full at 34, stays full 34-41, and fades off from 41-43;
  [LIGHT_RED_2]: {
    id: LIGHT_RED_2,
    color: RED,
    startFadeIn: 32 * ticksPerSec,
    startFadeOut: 41 * ticksPerSec,
    fadeFor
  },
  // Green 2 comes on at 20, increases to full at 22, stays full 22-36, and fades off from 36-38;
  [LIGHT_GREEN_2]: {
    id: LIGHT_GREEN_2,
    color: GREEN,
    startFadeIn: 20 * ticksPerSec,
    startFadeOut: 36 * ticksPerSec,
    fadeFor
  },
  // Blue is on continually;
  [LIGHT_BLUE]: {
    id: LIGHT_BLUE,
    color: BLUE,
    alwaysOn: true
  },
  // Green 1 comes on at 5, increases to full at 7, stays full 7-21, and fades off from 21-23;
  [LIGHT_GREEN_1]: {
    id: [LIGHT_GREEN_1],
    color: GREEN,
    startFadeIn: 5 * ticksPerSec,
    startFadeOut: 21 * ticksPerSec,
    fadeFor
  },
  // Red 1 comes on at 0, increases to full at 2, stays full 2-9, and fades off from 9-11;
  [LIGHT_RED_1]: {
    id: LIGHT_RED_1,
    color: RED,
    startFadeIn: 0 * ticksPerSec,
    startFadeOut: 9 * ticksPerSec,
    fadeFor
  }
};
