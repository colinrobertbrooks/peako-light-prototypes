import React from "react";
import { Row, Col } from "reactstrap";
import { LightsWrapper, Light } from "../shared";
import { useLoop } from "../../hooks";
import { getLightIsOn } from "../../utils/relays";

/*
  utils
*/
const getBrightness = isOn => (isOn ? 1 : 0);

/*
  component
*/
const RelaysLights = ({ tickMs, tickCount, lights }) => {
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
            brightness={getBrightness(getLightIsOn(red2, position, tickCount))}
          />
          <Light
            title={green2.id}
            color={green2.color}
            brightness={getBrightness(
              getLightIsOn(green2, position, tickCount)
            )}
          />
          <Light
            title={blue.id}
            color={blue.color}
            brightness={getBrightness(getLightIsOn(blue, position, tickCount))}
          />
          <Light
            title={green1.id}
            color={green1.color}
            brightness={getBrightness(
              getLightIsOn(green1, position, tickCount)
            )}
          />
          <Light
            title={red1.id}
            color={red1.color}
            brightness={getBrightness(getLightIsOn(red1, position, tickCount))}
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

export default RelaysLights;
