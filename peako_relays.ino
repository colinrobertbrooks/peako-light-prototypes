/* peako_relays.ino v2.0 */

/*
 * hardware
 */
int lights[5] = {2, 3, 4, 5, 6};
int lightCount = 5;

/*
 * configs
 */
int start[5] = {32, 20, 0, 5, 0};
int duration[5] = {8, 17, 60, 17, 8};
int loopEnd = 60;
int delayMs = 1000;

/*
 * runtime
 */
int loopIdx;

/*
 * utils
 */
int setNextLoopIdx() {
  if(loopIdx < loopEnd - 1) {
    loopIdx = loopIdx + 1;
  } else {
    loopIdx = 0;
  }
}

bool getLightState(int lightIdx) {
  int lightStart = start[lightIdx];
  int lightDuration = duration[lightIdx];
  int lightEnd = lightStart + lightDuration;
  bool lightStaysOnThroughLoopEnd = lightEnd > loopEnd;

  if(
    lightStaysOnThroughLoopEnd &&
    ((loopIdx >= 0 && loopIdx < lightEnd - loopEnd) ||
      loopIdx >= lightStart)
  ) {
    return HIGH;
  } else if (lightStart <= loopIdx && lightEnd > loopIdx) {
    return HIGH;
  }
  return LOW;
}

/*
 * main
 */
void setup() {
  // Serial.begin(9600);
  for(int lightIdx = 0; lightIdx < lightCount; lightIdx++){
    pinMode(lights[lightIdx], OUTPUT);
  }
}

void loop() {
  // Serial.println(loopIdx);
  for(int lightIdx = 0; lightIdx < lightCount; lightIdx++){
    digitalWrite(lights[lightIdx], getLightState(lightIdx));
  }

  setNextLoopIdx();
  delay(delayMs);
}
