import React from "react";
import { Row, Col } from "reactstrap";
import { TriacsLights, TriacsChart } from "../triacs";
import { useDocumentTitle } from "../../hooks";
import { getLightPowerPositions } from "../../utils/triacs";
import { tickMs, tickCount, lights } from "../../config/triacs";
import {
  LIGHT_RED_2,
  LIGHT_GREEN_2,
  LIGHT_GREEN_1,
  LIGHT_RED_1
} from "../../constants";

const { red2, green2, green1, red1 } = lights;
const red2PowerPositions = getLightPowerPositions(red2, tickCount);
const green2PowerPositions = getLightPowerPositions(green2, tickCount);
const green1PowerPositions = getLightPowerPositions(green1, tickCount);
const red1PowerPositions = getLightPowerPositions(red1, tickCount);
const powerPositions = {
  [LIGHT_RED_2]: red2PowerPositions,
  [LIGHT_GREEN_2]: green2PowerPositions,
  [LIGHT_GREEN_1]: green1PowerPositions,
  [LIGHT_RED_1]: red1PowerPositions
};

const TriacsPage = () => {
  useDocumentTitle("Triacs | Peako Light Prototype");

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
