import React from "react";
import Light from "./Light";
import useOneSecondLoop from "../hooks/useOneSecondLoop";
import getLightIsOn from "../utils/getLightIsOn";
import { loopEnd, lights } from "../config";

const App = () => {
  const { position } = useOneSecondLoop({ end: loopEnd });

  // console.log(`#### Loop: ${position} ####`);
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-12">
          <hr />
        </div>
        <div className="col-1" />
        <Light
          color={lights.redTwo.color}
          isOn={getLightIsOn(lights.redTwo, position, loopEnd)}
        />
        <Light
          color={lights.green2.color}
          isOn={getLightIsOn(lights.green2, position, loopEnd)}
        />
        <Light
          color={lights.blue.color}
          isOn={getLightIsOn(lights.blue, position, loopEnd)}
        />
        <Light
          color={lights.green1.color}
          isOn={getLightIsOn(lights.green1, position, loopEnd)}
        />
        <Light
          color={lights.red1.color}
          isOn={getLightIsOn(lights.red1, position, loopEnd)}
        />
        <div className="col-1" />
        <div className="col-12">
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <p className="small text-muted">Loop: {position}</p>
        </div>
      </div>
    </div>
  );
};
export default App;
