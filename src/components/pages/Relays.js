import React from "react";
import { Row, Col } from "reactstrap";
import { RelaysLights } from "../relays";
import { useDocumentTitle } from "../../hooks";
import { tickMs, tickCount, lights } from "../../config/relays";

const RelaysPage = () => {
  useDocumentTitle("Relays | Peako Light Prototype");

  return (
    <Row>
      <Col xs={12}>
        <h1>Relays</h1>
        <hr />
      </Col>
      <Col xs={12}>
        <RelaysLights tickMs={tickMs} tickCount={tickCount} lights={lights} />
      </Col>
    </Row>
  );
};

export default RelaysPage;
