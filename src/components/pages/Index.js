import React from "react";
import { Jumbotron } from "reactstrap";
import NavButton from "../navigation/NavButton";
import { useDocumentTitle } from "../../hooks";
import { APP_NAME } from "../../constants";

const IndexPage = () => {
  useDocumentTitle(APP_NAME);

  return (
    <Jumbotron>
      <h1>Select Prototype</h1>
      <NavButton to="/relays" className="mr-2">
        Relays
      </NavButton>
      <NavButton to="/triacs">Triacs</NavButton>
    </Jumbotron>
  );
};

export default IndexPage;
