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

export const tickCount = 300; // 60000 ms loop duration / 200 ms tick

const ticksPerSec = 1000 / tickMs; // 5 ticks per second

const fadeFor = fadeDurationMs / tickMs; // number of ticks to fade in/out over (equal to number of fade powers)

export const lights = {
  // Red 2 fades in from *32*-34, stays high from 34-41, and fades out from *41*-43.
  // 49 @ low | 7 @ high | 4 in fade
  [LIGHT_RED_2]: {
    id: LIGHT_RED_2,
    color: RED,
    startFadeIn: 32 * ticksPerSec,
    startFadeOut: 41 * ticksPerSec,
    fadeFor
  },
  // Green 2 fades in from *20*-22, stays high from 22-36, and fades out from *36*-38.
  // 42 @ low | 14 @ high | 4 in fade
  [LIGHT_GREEN_2]: {
    id: LIGHT_GREEN_2,
    color: GREEN,
    startFadeIn: 20 * ticksPerSec,
    startFadeOut: 36 * ticksPerSec,
    fadeFor
  },
  // Blue is on continually.
  // 0 @ low | 60 @ high | 4 in fade
  [LIGHT_BLUE]: {
    id: LIGHT_BLUE,
    color: BLUE,
    isAlwaysOn: true
  },
  // Green 1 fades in from *5*-7, stays high from 7-21, and fades out from *21*-23.
  // 42 @ low | 14 @ high | 4 in fade
  [LIGHT_GREEN_1]: {
    id: [LIGHT_GREEN_1],
    color: GREEN,
    startFadeIn: 5 * ticksPerSec,
    startFadeOut: 21 * ticksPerSec,
    fadeFor
  },
  // Red 1 fades in from *0*-2, stays high from 2-9, and fades out from *9*-11.
  // 49 @ low | 7 @ high | 4 in fade
  [LIGHT_RED_1]: {
    id: LIGHT_RED_1,
    color: RED,
    startFadeIn: 0 * ticksPerSec,
    startFadeOut: 9 * ticksPerSec,
    fadeFor
  }
};
