// https://github.com/austincastro/hydroponics/blob/074846c5ee88568d48e403ae625cd39d4aa94d56/Thesis/Unit%20Testing/Unit_9_Light_Dimmer/Unit_9_Light_Dimmer.ino
// https://github.com/search?p=11&q=%23include+%3CRBDdimmer.h%3E&type=Code
#include <RBDdimmer.h>

#define lampOne  12
#define lampTwo  13
// lamp three is hard-wired
#define lampFour  11
#define lampFive  10

dimmerLamp dimmerOne(lampOne);
dimmerLamp dimmerTwo(lampTwo);
dimmerLamp dimmerFour(lampFour);
dimmerLamp dimmerFive(lampFive);

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

void lampOnDelay() {
  delay(1000);
}

void lampOffDelay() {
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

  dimmerOne.begin(NORMAL_MODE, ON);
}

void loop() {
  /*
   * lamp 1
   */
  Serial.println("Brightening lamp 1");
  for(int brightIdx = 0; brightIdx < countPowerPositions; brightIdx++) {
    Serial.println(brightIdx);
    // Serial.println(dimmerOne.getPower());
    dimmerOne.setPower(getBrightPower(brightIdx));
    transitionTickDelay();
    setNextLoopIdx();
  }

  lampOnDelay();

  Serial.println("Dimming lamp 1");
   for(int dimIdx = 0; dimIdx < countPowerPositions; dimIdx++) {
    Serial.println(dimIdx);
    // Serial.println(dimmerOne.getPower());
    dimmerOne.setPower(getDimPower(dimIdx));
    transitionTickDelay();
    setNextLoopIdx();
  }

  lampOffDelay();
}