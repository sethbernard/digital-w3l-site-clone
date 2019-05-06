import React from 'react';
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container
} from 'reactstrap';

const NavBar = () => {
  return (
    <Container>
      <Navbar expand="md">
        <NavbarBrand href="/">
          <span className="fa fa-cloud" /> Digital
        </NavbarBrand>
        <NavbarToggler />
        <Nav navbar className="ml-auto">
          <NavItem>
            <NavLink href="#">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">About</NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Dropdown
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Marketing Process</DropdownItem>
              <DropdownItem>Portfolio</DropdownItem>
              <DropdownItem>Partners</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem>
            <NavLink href="#">Team Page</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Contact Page</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" id="login">
              Login
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </Container>
  );
};

export default NavBar;
