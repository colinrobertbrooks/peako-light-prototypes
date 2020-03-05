import React from "react";
import { Row, Col } from "reactstrap";
import { LightsWrapper, Light } from "../shared";
import { useLoop } from "../../hooks";
import { getBrightnessForPower } from "../../utils/triacs";

const TriacsLights = ({ tickMs, tickCount, lights, powerPositions }) => {
  const { position } = useLoop({ tickMs, tickCount });
  const { red2, green2, blue, green1, red1 } = lights;

  return (
    <Row>
      <Col sm={2} />
      <Col sm={8}>
        <LightsWrapper>
          <Light
            title={red2.id}
            color={red2.color}
            brightness={getBrightnessForPower(powerPositions.red2[position])}
          />
          <Light
            title={green2.id}
            color={green2.color}
            brightness={getBrightnessForPower(powerPositions.green2[position])}
          />
          <Light
            title={blue.id}
            color={blue.color}
            brightness={getBrightnessForPower(powerPositions.blue[position])}
          />
          <Light
            title={green1.id}
            color={green1.color}
            brightness={getBrightnessForPower(powerPositions.green1[position])}
          />
          <Light
            title={red1.id}
            color={red1.color}
            brightness={getBrightnessForPower(powerPositions.red1[position])}
          />
        </LightsWrapper>
      </Col>
      <Col sm={2} />
      <Col xs={12}>
        <hr />
      </Col>
      <Col xs={12}>
        <p className="small text-muted">Loop Position: {position}</p>
      </Col>
    </Row>
  );
};

export default TriacsLights;
