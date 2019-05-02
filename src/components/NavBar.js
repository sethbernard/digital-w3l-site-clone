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
  DropdownItem
} from 'reactstrap';

const NavBar = () => {
  return (
    <Navbar white expand="md">
      <NavbarBrand href="/" className="mx-auto">
        Digital
      </NavbarBrand>
      <NavbarToggler />
      <Nav className="mx-auto" navbar>
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
          <NavLink href="#">Login</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
