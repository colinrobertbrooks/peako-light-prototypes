/* peako_triacs.ino v1.0 */

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
int lowPower = 21;
int highPower = 50;
int fadePowersAsc[10] = {26, 28, 29, 30, 31, 32, 33, 34, 35, 36};
int fadePowersDesc[10] = {36, 35, 34, 33, 32, 31, 30, 29, 28, 26};
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
  if(loopIdx < loopEnd - 1) {
    loopIdx = loopIdx + 1;
  } else {
    loopIdx = 0;
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
  // Serial.println(loopIdx);
  for(int lightIdx = 0; lightIdx < lightCount; lightIdx++){
    int power = getLightPower(lightIdx);

    switch (lightIdx) {
      case 0:
        dimmerRedTwo.setPower(power);
        break;
      case 1:
        dimmerGreenTwo.setPower(power);
        break;
      case 2:
        dimmerGreenOne.setPower(power);
        break;
      case 3:
        dimmerRedOne.setPower(power);
        break;
    }
  }

  setNextLoopIdx();
  delay(delayMs);
}