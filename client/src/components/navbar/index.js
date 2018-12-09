import React, { Component } from 'react';
import {current} from 'graphql/queries';
import {logout} from 'graphql/mutations';
import {graphql, compose} from 'react-apollo';
import {Link} from 'react-router-dom';
import {Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink} from 'reactstrap';
import Dropdown from './Dropdown';
import Notifications from './Notifications';
import {toggleSidebarState} from 'graphql/state/mutations';

class MyNavbar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleLogout = () => {
    this.props.logout().then(() => window.location.replace('/'))
  }

  toggleSidebar = () => {
    this.props.toggleSidebarState()
  }

  loggedOutLinks = (user) => {
    return <React.Fragment>
      <NavItem>
        <NavLink tag={Link} to={'/login'}>Login</NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={Link} to={'/signup'}>Signup</NavLink>
      </NavItem>
    </React.Fragment>
  }

  sidebarToggle = () => {
    return <NavItem>
      <NavLink onClick={this.toggleSidebar}>
        <i className="fa fa-user-o" aria-hidden="true"></i>
      </NavLink>
   </NavItem>
  }

  loggedInLinks = (user) => {
    return <React.Fragment>
      {this.sidebarToggle()}
      <Notifications user={user} />
      <Dropdown user={user} handleLogout={this.handleLogout} />
    </React.Fragment> 
  }

  navLinks = () => {
    let {loading, user} = this.props.current;
    if(loading) return null;
    if(!user) return this.loggedOutLinks(user);
    else return this.loggedInLinks(user);
  }

  render() {
    return (
      <Navbar fixed={`top`} color="light" light expand="md">
        <NavbarBrand tag={Link} to="/">App</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {this.navLinks()}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default compose(
  graphql(current, {name: 'current'}),
  graphql(logout, {name: 'logout'}),
  graphql(toggleSidebarState, {name: 'toggleSidebarState'})
)(MyNavbar)