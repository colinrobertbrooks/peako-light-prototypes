import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  const location = useLocation();

  switch (location.pathname) {
    case "/relays":
      return (
        <Element>
          <a
            href="https://github.com/colinrcummings/peako-light-prototypes/blob/master/peako_relays.ino"
            target="_blank"
            rel="noopener noreferrer"
          >
            peako_relays.ino
          </a>
        </Element>
      );

    case "/triacs":
      return (
        <Element>
          <a
            href="https://github.com/colinrcummings/peako-light-prototypes/blob/master/peako_triacs.ino"
            target="_blank"
            rel="noopener noreferrer"
          >
            peako_triacs.ino
          </a>
        </Element>
      );

    default:
      return null;
  }
};

const Element = styled.div.attrs({ className: "mt-auto" })`
  background-color: #f5f5f5;
  margin-top: 30px;
  min-height: 60px;
  padding: 15px 0;
  text-align: center;
`;

export default Footer;
