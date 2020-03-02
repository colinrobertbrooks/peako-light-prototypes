import React from "react";
import { Row, Col } from "reactstrap";
import Light from "../Light";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import useOneSecondLoop from "../../hooks/useOneSecondLoop";
import getLightIsOn from "../../utils/relays/getLightIsOn";
import { loopEnd, lights } from "../../config";

const { redTwo, green2, blue, green1, red1 } = lights;

const RelaysPage = () => {
  useDocumentTitle("Relays | Peako Light Prototype");
  const { position } = useOneSecondLoop({ end: loopEnd });

  return (
    <Row>
      <Col xs={12}>
        <h1>Relays</h1>
        <hr />
      </Col>
      <Col sm={2} />
      <Col sm={8}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Light
            color={redTwo.color}
            isOn={getLightIsOn(redTwo, position, loopEnd)}
          />
          <Light
            color={green2.color}
            isOn={getLightIsOn(green2, position, loopEnd)}
          />
          <Light
            color={blue.color}
            isOn={getLightIsOn(blue, position, loopEnd)}
          />
          <Light
            color={green1.color}
            isOn={getLightIsOn(green1, position, loopEnd)}
          />
          <Light
            color={red1.color}
            isOn={getLightIsOn(red1, position, loopEnd)}
          />
        </div>
      </Col>
      <Col sm={2} />
      <Col xs={12}>
        <hr />
      </Col>
      <Col xs={12}>
        <p className="small text-muted">Loop: {position}</p>
      </Col>
    </Row>
  );
};

export default RelaysPage;
