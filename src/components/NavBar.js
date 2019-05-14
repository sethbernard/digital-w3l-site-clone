import React, { Component } from 'react';
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
  Container,
  Collapse
} from 'reactstrap';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="navbar-fw">
        <Container>
          <Navbar expand="md">
            <NavbarBrand href="/">
              <span className="fa fa-cloud" /> Digital
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle}>
              <span className="fa fa-bars" />
            </NavbarToggler>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav navbar className="ml-auto">
                <NavItem>
                  <NavLink href="#">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#about">About</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Dropdown
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem href="#process">
                      Marketing Process
                    </DropdownItem>
                    <DropdownItem href="#portfolio">Portfolio</DropdownItem>
                    <DropdownItem href="#partners">Partners</DropdownItem>
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
            </Collapse>
          </Navbar>
        </Container>
      </div>
    );
  }
}

export default NavBar;
