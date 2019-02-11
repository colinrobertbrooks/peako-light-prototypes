import React from "react";
import Light from "./Light";
import useOneSecondLoop from "../hooks/useOneSecondLoop";
import getLightIsOn from "../utils/getLightIsOn";
import { loopEnd, lights } from "../config";

const { redTwo, green2, blue, green1, red1 } = lights;

const App = () => {
  const { position } = useOneSecondLoop({ end: loopEnd });

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-12">
          <hr />
        </div>
        <div className="col-1" />
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
