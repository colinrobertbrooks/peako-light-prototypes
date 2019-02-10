import React from "react";
import Light from "./Light";
import { RED, GREEN, BLUE } from "../constants";

const App = () => (
  <div className="container">
    <div className="row text-center">
      <div className="col-1" />
      <Light color={RED} />
      <Light color={GREEN} />
      <Light color={BLUE} />
      <Light color={GREEN} />
      <Light color={RED} />
      <div className="col-1" />
    </div>
  </div>
);

export default App;
