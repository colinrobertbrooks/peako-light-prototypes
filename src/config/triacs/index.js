/*
  available light powers determined with `rbddimmer_serial_monitor_dim.ino`
  see: https://github.com/RobotDynOfficial/RBDDimmer/issues/4#issuecomment-475065928
*/
export const LOW_POWER = 21;

export const HIGH_POWER = 50;

// ascending order (reverse for descending)
export const FADE_POWERS = [26, 28, 29, 30, 31, 32, 33, 34, 35, 36];

/*
  300 tick loop @ 200 ms per tick (fade)
*/
export * from "./300";
