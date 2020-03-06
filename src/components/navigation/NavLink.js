import React from "react";
import { NavLink as ReactstrapNavLink } from "reactstrap";
import { NavLink as ReactRouterNavLink } from "react-router-dom";

const NavLink = ({ to, children, ...rest }) => (
  <ReactstrapNavLink
    to={to}
    activeClassName="active"
    tag={ReactRouterNavLink}
    {...rest}
  >
    {children}
  </ReactstrapNavLink>
);

export default NavLink;
