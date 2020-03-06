/*
 * libraries
 */
#include <RBDdimmer.h>

/*
 * hardware
 */
#define redTwo 12
#define greenTwo 13
// blue is hard-wired
#define greenOne 11
#define redOne 10

dimmerLamp dimmerRedTwo(redTwo);
dimmerLamp dimmerGreenTwo(greenTwo);
dimmerLamp dimmerGreenOne(greenOne);
dimmerLamp dimmerRedOne(redOne);

int lightCount = 4;

/*
 * configs
 */
int lowPower = 20;
int highPower = 37;
int fadePowersAsc[10] = {26, 28, 29, 30, 31, 32, 33, 34, 35, 36};
int fadePowersDesc[10] = {36,35,34,33,32,31,30,29,28,26};
int fadeIns[4] = {160, 100, 25, 0};
int fadeOuts[4] = {205, 180, 105, 45};
int fadeFor = 10;
int loopEnd = 300;
int delayMs = 200;

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
}

int getLightPower(int lightIdx) {
  int startFadeIn = fadeIns[lightIdx];
  int startFadeOut = fadeOuts[lightIdx];
  bool lightIsFadingIn = loopIdx > startFadeIn && loopIdx <= startFadeIn + fadeFor;
  bool lightIsFadingOut = loopIdx > startFadeOut && loopIdx <= startFadeOut + fadeFor;
  bool lightIsOn = loopIdx > startFadeIn && loopIdx <= startFadeOut;

  if(lightIsFadingIn) {
    int fadeInPowerIdx = loopIdx - startFadeIn - 1;
    return fadePowersAsc[fadeInPowerIdx];
  } else if (lightIsFadingOut) {
    int fadeOutPowerIdx = loopIdx - startFadeOut - 1;
    return fadePowersDesc[fadeOutPowerIdx];
  } else if (lightIsOn) {
    return highPower;
  } else {
    return lowPower;
  }
}

/*
 * main
 */
void setup() {
  // Serial.begin(9600);
  dimmerRedTwo.begin(NORMAL_MODE, ON);
  dimmerGreenTwo.begin(NORMAL_MODE, ON);
  dimmerGreenOne.begin(NORMAL_MODE, ON);
  dimmerRedOne.begin(NORMAL_MODE, ON);
}

void loop() {
  for(int lightIdx = 0; lightIdx < lightCount; lightIdx++){
    switch (lightIdx) {
      case 0:
        dimmerRedTwo.setPower(getLightPower(lightIdx));
        break;
      case 1:
        dimmerGreenTwo.setPower(getLightPower(lightIdx));
        break;
      case 2:
        dimmerGreenOne.setPower(getLightPower(lightIdx));
        break;
      case 3:
        dimmerRedOne.setPower(getLightPower(lightIdx));
        break;
    }
  }

  delay(delayMs);
  // Serial.println(loopIdx);
  setNextLoopIdx();
}