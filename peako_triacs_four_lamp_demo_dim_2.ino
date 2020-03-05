// https://github.com/austincastro/hydroponics/blob/074846c5ee88568d48e403ae625cd39d4aa94d56/Thesis/Unit%20Testing/Unit_9_Light_Dimmer/Unit_9_Light_Dimmer.ino
// https://github.com/search?p=11&q=%23include+%3CRBDdimmer.h%3E&type=Code
#include <RBDdimmer.h>

// lights (left to right looking at them)
#define redTwo 12
#define greenTwo 13
// blue is hard-wired
#define greenOne 11
#define redOne 10

dimmerLamp dimmerRedTwo(redTwo);
dimmerLamp dimmerGreenTwo(greenTwo);
dimmerLamp dimmerGreenOne(greenOne);
dimmerLamp dimmerRedOne(redOne);

int brightPowerPositions[12] = {20, 26, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37};
int dimPowerPositions[12] = {37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 26, 20};
int countPowerPositions = 12;

int loopIdx = 0;

int getBrightPower(int idx) {
  return brightPowerPositions[idx];
}

int getDimPower(int idx) {
  return dimPowerPositions[idx];
}

void transitionTickDelay() {
  delay(2000 / countPowerPositions);
}

void lightOnDelay() {
  delay(1000);
}

void lightOfffDelay() {
  delay(1000);
}

int setNextLoopIdx() {
  int start = 0;
  int reset = countPowerPositions - 1;

  if(loopIdx < reset) {
    loopIdx = loopIdx + 1;
  } else if(loopIdx == reset) {
    loopIdx = start;
  }
}

void setup() {
  Serial.begin(9600);

  dimmerRedTwo.begin(NORMAL_MODE, ON);
}

void loop() {
  /*
   * dimmerRedTwo
   */
  Serial.println("Brightening light");
  for(int brightIdx = 0; brightIdx < countPowerPositions; brightIdx++) {
    Serial.println(brightIdx);
    // Serial.println(dimmerRedTwo.getPower());
    dimmerRedTwo.setPower(getBrightPower(brightIdx));
    transitionTickDelay();
    setNextLoopIdx();
  }

  lightOnDelay();

  Serial.println("Dimming light");
   for(int dimIdx = 0; dimIdx < countPowerPositions; dimIdx++) {
    Serial.println(dimIdx);
    // Serial.println(dimmerRedTwo.getPower());
    dimmerRedTwo.setPower(getDimPower(dimIdx));
    transitionTickDelay();
    setNextLoopIdx();
  }

  lightOfffDelay();
}
