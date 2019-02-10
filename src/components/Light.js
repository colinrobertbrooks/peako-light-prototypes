import React from "react";
import { RED, GREEN, BLUE } from "../constants";

const getR = color => {
  switch (color) {
    case RED:
      return 255;
    default:
      return 0;
  }
};
const getG = color => {
  switch (color) {
    case GREEN:
      return 255;
    default:
      return 0;
  }
};
const getB = color => {
  switch (color) {
    case BLUE:
      return 255;
    default:
      return 0;
  }
};

const getA = on => (on ? 1 : 0.1);

const Light = ({ color, on = false, bsClassName = "col-2" }) => {
  const r = getR(color);
  const g = getG(color);
  const b = getB(color);
  const a = getA(on);

  return (
    <div className={bsClassName}>
      <div
        className="light"
        style={{ backgroundColor: `rgba(${r}, ${g}, ${b}, ${a})` }}
      />
    </div>
  );
};

export default Light;
