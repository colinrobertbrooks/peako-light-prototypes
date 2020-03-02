// https://github.com/RobotDynOfficial/RBDDimmer/blob/master/examples/SerialMonitorDim/SerialMonitorDim.ino
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

int outVal = 0;

void setup() {
  Serial.begin(9600);

  dimmerOne.begin(NORMAL_MODE, ON);
  dimmerTwo.begin(NORMAL_MODE, ON);
  dimmerFour.begin(NORMAL_MODE, ON);
  dimmerFive.begin(NORMAL_MODE, ON);

  Serial.println("Dimmer Program is starting...");
  Serial.println("Set value");
}

void printSpace(int val) {
  if ((val / 100) == 0) Serial.print(" ");
  if ((val / 10) == 0) Serial.print(" ");
}

void loop() {
  int preVal = outVal;

  if (Serial.available()) {
    int buf = Serial.parseInt();
    if (buf != 0) outVal = buf;
    delay(200);
  }

  dimmerOne.setPower(outVal);
  dimmerTwo.setPower(outVal);
  dimmerFour.setPower(outVal);
  dimmerFive.setPower(outVal);

  if (preVal != outVal){
    Serial.print("lampValue -> ");
    printSpace(dimmerOne.getPower());
    Serial.print(dimmerOne.getPower());
    Serial.println("%");

  }

  delay(50);
}
