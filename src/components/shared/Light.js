import React from "react";
import { RED, GREEN, BLUE } from "../../constants";

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

const getA = brightness => (brightness === 0 ? 0.07 : brightness);

/*
  component
*/
const Light = ({ title, color, brightness }) => {
  const r = getR(color);
  const g = getG(color);
  const b = getB(color);
  const a = getA(brightness);

  return (
    <div
      className="light"
      title={title}
      style={{ backgroundColor: `rgba(${r}, ${g}, ${b}, ${a})` }}
    />
  );
};

export default Light;
