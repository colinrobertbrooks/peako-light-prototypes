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

int MIN_POWER = 65;
int MAX_POWER = 70;

int power;

void transitionDelay() {
  delay(1000 / 6);
}

void lampOnDelay() {
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
   * lamp 1
   */
  Serial.println("Brightening lamp 1");
  for(power = MIN_POWER; power < MAX_POWER + 1; power++) {
    Serial.println(power);
    dimmerOne.setPower(power);
    transitionDelay();
  }

  lampOnDelay();

  Serial.println("Dimming lamp 1");
  for(power = MAX_POWER; power > MIN_POWER - 1; power--) {
    Serial.println(power);
    dimmerOne.setPower(power);
    transitionDelay();
  }

  /*
   * lamp 2
   */
  Serial.println("Brightening lamp 2");
  for(power = MIN_POWER; power < MAX_POWER + 1; power++) {
    Serial.println(power);
    dimmerTwo.setPower(power);
    transitionDelay();
  }

  lampOnDelay();

  Serial.println("Dimming lamp 2");
  for(power = MAX_POWER; power > MIN_POWER - 1; power--) {
    Serial.println(power);
    dimmerTwo.setPower(power);
    transitionDelay();
  }

  /*
   * lamp 4
   */
  Serial.println("Brightening lamp 3");
  for(power = MIN_POWER; power < MAX_POWER + 1; power++) {
    Serial.println(power);
    dimmerFour.setPower(power);
    transitionDelay();
  }

  lampOnDelay();

  Serial.println("Dimming lamp 3");
  for(power = MAX_POWER; power > MIN_POWER - 1; power--) {
    Serial.println(power);
    dimmerFour.setPower(power);
    transitionDelay();
  }

  /*
   * lamp 5
   */
  Serial.println("Brightening lamp 4");
  for(power = MIN_POWER; power < MAX_POWER + 1; power++) {
    Serial.println(power);
    dimmerFive.setPower(power);
    transitionDelay();
  }

  lampOnDelay();

  Serial.println("Dimming lamp 4");
  for(power = MAX_POWER; power > MIN_POWER - 1; power--) {
    Serial.println(power);
    dimmerFive.setPower(power);
    transitionDelay();
  }
}
