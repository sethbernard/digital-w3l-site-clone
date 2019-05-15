import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../LoginForm';
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

    this.state = {
      isOpen: false,
      modal: false
    };
  }
  toggleNav = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  toggleLogin = () => {
    this.setState(prevState => ({
      ...this.state,
      modal: !prevState.modal
    }));
  };

  render() {
    return (
      <div className="navbar-fw">
        <Container>
          <Navbar expand="md">
            <NavbarBrand href="/">
              <span className="fa fa-cloud" /> Digital
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav}>
              <span className="fa fa-bars" />
            </NavbarToggler>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav navbar className="ml-auto">
                <NavItem>
                  <NavLink tag={Link} to="/">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/#about">About</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Dropdown
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem href="/#process">
                      Marketing Process
                    </DropdownItem>
                    <DropdownItem href="/#portfolio">Portfolio</DropdownItem>
                    <DropdownItem href="/#partners">Partners</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink tag={Link} to="/team">
                    Team Page
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/contact">
                    Contact Page
                  </NavLink>
                </NavItem>
                <NavItem>
                  <LoginForm isOpen={this.state.modal} />
                  <NavLink onClick={this.toggleLogin} href="#" id="login">
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
