// https://github.com/austincastro/hydroponics/blob/074846c5ee88568d48e403ae625cd39d4aa94d56/Thesis/Unit%20Testing/Unit_9_Light_Dimmer/Unit_9_Light_Dimmer.ino
// https://github.com/search?p=11&q=%23include+%3CRBDdimmer.h%3E&type=Code
#include <RBDdimmer.h>

// small white lights (left to right looking at them)
#define lightOne  12
#define lightTwo  13
// lightThree is hard-wired
#define lightFour  11
#define lightFive  10

dimmerlight dimmerOne(lightOne);
dimmerlight dimmerTwo(lightTwo);
dimmerlight dimmerFour(lightFour);
dimmerlight dimmerFive(lightFive);

int MIN_POWER = 65;
int MAX_POWER = 70;

int power;

void transitionDelay() {
  delay(1000 / 6);
}

void lightOnDelay() {
  delay(1000);
}

void setup() {
  Serial.begin(9600);

  dimmerOne.begin(NORMAL_MODE, ON);
  dimmerTwo.begin(NORMAL_MODE, ON);
  dimmerFour.begin(NORMAL_MODE, ON);
  dimmerFive.begin(NORMAL_MODE, ON);

  dimmerOne.setPower(MIN_POWER);
  dimmerTwo.setPower(MIN_POWER);
  dimmerFour.setPower(MIN_POWER);
  dimmerFive.setPower(MIN_POWER);
}

void loop() {
  /*
   * light 1
   */
  Serial.println("Brightening light 1");
  for(power = MIN_POWER; power < MAX_POWER + 1; power++) {
    Serial.println(power);
    dimmerOne.setPower(power);
    transitionDelay();
  }

  lightOnDelay();

  Serial.println("Dimming light 1");
  for(power = MAX_POWER; power > MIN_POWER - 1; power--) {
    Serial.println(power);
    dimmerOne.setPower(power);
    transitionDelay();
  }

  /*
   * light 2
   */
  Serial.println("Brightening light 2");
  for(power = MIN_POWER; power < MAX_POWER + 1; power++) {
    Serial.println(power);
    dimmerTwo.setPower(power);
    transitionDelay();
  }

  lightOnDelay();

  Serial.println("Dimming light 2");
  for(power = MAX_POWER; power > MIN_POWER - 1; power--) {
    Serial.println(power);
    dimmerTwo.setPower(power);
    transitionDelay();
  }

  /*
   * light 4
   */
  Serial.println("Brightening light 3");
  for(power = MIN_POWER; power < MAX_POWER + 1; power++) {
    Serial.println(power);
    dimmerFour.setPower(power);
    transitionDelay();
  }

  lightOnDelay();

  Serial.println("Dimming light 3");
  for(power = MAX_POWER; power > MIN_POWER - 1; power--) {
    Serial.println(power);
    dimmerFour.setPower(power);
    transitionDelay();
  }

  /*
   * light 5
   */
  Serial.println("Brightening light 4");
  for(power = MIN_POWER; power < MAX_POWER + 1; power++) {
    Serial.println(power);
    dimmerFive.setPower(power);
    transitionDelay();
  }

  lightOnDelay();

  Serial.println("Dimming light 4");
  for(power = MAX_POWER; power > MIN_POWER - 1; power--) {
    Serial.println(power);
    dimmerFive.setPower(power);
    transitionDelay();
  }
}
