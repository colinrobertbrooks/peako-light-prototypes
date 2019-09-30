import { BLUE, GREEN, RED } from "../constants";

/*
  config for 60 second loop
*/

export const loopEnd = 60;

export const lights = {
  redTwo: {
    id: "redTwo",
    color: RED,
    start: 32,
    duration: 8 // 39 - 32 + 1
  },
  green2: {
    id: "green2",
    color: GREEN,
    start: 20,
    duration: 17 // 36 - 20 + 1
  },
  blue: {
    id: "blue",
    color: BLUE,
    start: 0,
    duration: 60
  },
  green1: {
    id: "green1",
    color: GREEN,
    start: 5,
    duration: 17 // 21 - 5 + 1
  },
  red1: {
    id: "red1",
    color: RED,
    start: 0,
    duration: 8 // 7 - 0 + 1
  }
};
