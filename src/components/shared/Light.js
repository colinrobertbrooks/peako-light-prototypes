import React from "react";
import styled from "styled-components";
import { RED, GREEN, BLUE, MIN_LIGHT_BRIGHTNESS } from "../../constants";

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

const getA = brightness =>
  brightness === 0 ? MIN_LIGHT_BRIGHTNESS : brightness;

/*
  component
*/
const Light = ({ title, color, brightness }) => {
  const r = getR(color);
  const g = getG(color);
  const b = getB(color);
  const a = getA(brightness);

  return <Element title={title} r={r} g={g} b={b} a={a} />;
};

/*
  styled
*/
const Element = styled.div`
  background-color: ${({ r, g, b, a }) => `rgba(${r}, ${g}, ${b}, ${a})`};
  border: 1px solid black;
  border-radius: 50%;
  display: inline-block;
  height: 50px;
  width: 50px;
`;

export default Light;
