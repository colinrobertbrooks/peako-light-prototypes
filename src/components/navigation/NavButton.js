import React from "react";
import { Button } from "reactstrap";
import { NavLink } from "react-router-dom";

const NavButton = ({ children, ...rest }) => (
  <Button {...rest} tag={NavLink}>
    {children}
  </Button>
);

export default NavButton;
