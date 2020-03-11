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
  const handleLinkClick = () => {
    // close collapse on mobile
    if (isOpen && window.innerWidth < 768) toggleIsOpen();
  };

  return (
    <ReactstrapNavbar color="light" light expand="md" fixed="top">
      <NavbarBrand>{APP_NAME}</NavbarBrand>
      <NavbarToggler onClick={toggleIsOpen} />
      <Collapse isOpen={isOpen} navbar>
        <Nav navbar className="ml-auto">
          <NavItem>
            <NavLink to="/relays" onClick={handleLinkClick}>
              Relays
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/triacs" onClick={handleLinkClick}>
              Triacs
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </ReactstrapNavbar>
  );
};

export default Navbar;
