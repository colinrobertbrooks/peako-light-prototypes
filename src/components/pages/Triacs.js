import React from "react";
import { Row, Col } from "reactstrap";
import { TriacsLights, TriacsChart } from "../triacs";
import { useDocumentTitle } from "../../hooks";
import { generatePowerPositionsForLight } from "../../utils/triacs";
import { tickMs, tickCount, lights } from "../../config/triacs";
import {
  APP_NAME,
  LIGHT_RED_2,
  LIGHT_GREEN_2,
  LIGHT_BLUE,
  LIGHT_GREEN_1,
  LIGHT_RED_1
} from "../../constants";

const { red2, green2, blue, green1, red1 } = lights;
const red2PowerPositions = generatePowerPositionsForLight(red2, tickCount);
const green2PowerPositions = generatePowerPositionsForLight(green2, tickCount);
const bluePowerPositions = generatePowerPositionsForLight(blue, tickCount);
const green1PowerPositions = generatePowerPositionsForLight(green1, tickCount);
const red1PowerPositions = generatePowerPositionsForLight(red1, tickCount);
const powerPositions = {
  [LIGHT_RED_2]: red2PowerPositions,
  [LIGHT_GREEN_2]: green2PowerPositions,
  [LIGHT_BLUE]: bluePowerPositions,
  [LIGHT_GREEN_1]: green1PowerPositions,
  [LIGHT_RED_1]: red1PowerPositions
};

const TriacsPage = () => {
  useDocumentTitle(`Triacs | ${APP_NAME}`);

  return (
    <Row>
      <Col xs={12}>
        <h1>Triacs</h1>
        <hr />
      </Col>
      <Col xs={12}>
        <TriacsLights
          tickMs={tickMs}
          tickCount={tickCount}
          lights={lights}
          powerPositions={powerPositions}
        />
      </Col>
      <Col xs={12}>
        <TriacsChart tickCount={tickCount} powerPositions={powerPositions} />
      </Col>
    </Row>
  );
};

export default TriacsPage;
