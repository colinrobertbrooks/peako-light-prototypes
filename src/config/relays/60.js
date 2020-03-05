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

export const tickMs = 1000;

export const tickCount = 60;

export const lights = {
  [LIGHT_RED_2]: {
    id: LIGHT_RED_2,
    color: RED,
    start: 32,
    duration: 8 // 39 - 32 + 1
  },
  [LIGHT_GREEN_2]: {
    id: LIGHT_GREEN_2,
    color: GREEN,
    start: 20,
    duration: 17 // 36 - 20 + 1
  },
  [LIGHT_BLUE]: {
    id: LIGHT_BLUE,
    color: BLUE,
    start: 0,
    duration: 60
  },
  [LIGHT_GREEN_1]: {
    id: [LIGHT_GREEN_1],
    color: GREEN,
    start: 5,
    duration: 17 // 21 - 5 + 1
  },
  [LIGHT_RED_1]: {
    id: LIGHT_RED_1,
    color: RED,
    start: 0,
    duration: 8 // 7 - 0 + 1
  }
};
