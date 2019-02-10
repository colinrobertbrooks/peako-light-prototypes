import React from "react";
import Light from "./Light";
import useOneSecondLoop from "../hooks/useOneSecondLoop";
import { LOOP_END, RED, GREEN, BLUE } from "../constants";

const App = () => {
  const { position } = useOneSecondLoop({ end: LOOP_END });

  return (
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
      <div className="row">
        <div className="col-12 text-center">
          <hr />
          <p>Loop: {position}</p>
        </div>
      </div>
    </div>
  );
};
export default App;
