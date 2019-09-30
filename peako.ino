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
  int start = 0;
  int reset = loopEnd - 1;

  if(loopIdx < reset) {
    loopIdx = loopIdx + 1;
  } else if(loopIdx == reset) {
    loopIdx = start;
  }
  // Serial.println(loopIdx);
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
  for(int lightIdx = 0; lightIdx < lightCount; lightIdx++){
    digitalWrite(lights[lightIdx], getLightState(lightIdx));
  }
  delay(delayMs);
  setNextLoopIdx();
}
