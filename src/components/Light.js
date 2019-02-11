import React from "react";
import { RED, GREEN, BLUE } from "../constants";

/*
  utils
*/
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

const getA = isOn => (isOn ? 1 : 0.1);

/*
  component
*/
const Light = ({ color, isOn, bsClassName = "col-2" }) => {
  const r = getR(color);
  const g = getG(color);
  const b = getB(color);
  const a = getA(isOn);

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
