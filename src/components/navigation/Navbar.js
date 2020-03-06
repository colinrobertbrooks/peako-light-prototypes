import React, { useState } from "react";
import {
  Collapse,
  Navbar as ReactstrapNavbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";
import NavLink from "./NavLink";
import { APP_NAME } from "../../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => setIsOpen(!isOpen);

  return (
    <ReactstrapNavbar color="light" light expand="md">
      <NavbarBrand>{APP_NAME}</NavbarBrand>
      <NavbarToggler onClick={toggleIsOpen} />
      <Collapse isOpen={isOpen} navbar>
        <Nav navbar className="ml-auto">
          <NavItem>
            <NavLink to="/relays">Relays</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/triacs">Triacs</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </ReactstrapNavbar>
  );
};

export default Navbar;
