// https://github.com/RobotDynOfficial/RBDDimmer/blob/master/examples/SerialMonitorDim/SerialMonitorDim.ino
#include <RBDdimmer.h>

// lights (left to right looking at them)
#define redTwo  12
#define greenTwo  13
// blue is hard-wired
#define greenOne  11
#define redOne  10

dimmerLamp dimmerRedTwo(redTwo);
dimmerLamp dimmerGreenTwo(greenTwo);
dimmerLamp dimmerGreenOne(greenOne);
dimmerLamp dimmerRedOne(redOne);

int outVal = 0;

void setup() {
  Serial.begin(9600);

  dimmerRedTwo.begin(NORMAL_MODE, ON);
  dimmerGreenTwo.begin(NORMAL_MODE, ON);
  dimmerGreenOne.begin(NORMAL_MODE, ON);
  dimmerRedOne.begin(NORMAL_MODE, ON);

  Serial.println("Dimmer Program is starting...");
  Serial.println("Set light values");
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

  dimmerRedTwo.setPower(outVal);
  dimmerGreenTwo.setPower(outVal);
  dimmerGreenOne.setPower(outVal);
  dimmerRedOne.setPower(outVal);

  if (preVal != outVal){
    Serial.print("light values -> ");
    printSpace(dimmerRedTwo.getPower());
    Serial.print(dimmerRedTwo.getPower());
    Serial.println("%");

  }

  delay(50);
}
