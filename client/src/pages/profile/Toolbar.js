import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Link } from 'react-router-dom';
import injectStyles from 'react-jss';
import styles from './Toolbar.style';
import Avatar from 'components/avatar';

class Toolbar extends Component {
  render() {
    let {classes, user} = this.props;

    return (
      <Navbar color="light" light expand="md">
        <Avatar margin={{right: 10}} size="md" />

        <NavbarBrand className={classes.brand} tag={Link} to="/profile">
          <div className={classes.name}>
            <span>{user.firstName}</span>
            <span>{user.lastName}</span>
          </div>

          <div className={classes.email}>{user.email}</div>
        </NavbarBrand>
      </Navbar>
    );
  }
}

export default injectStyles(styles)(Toolbar)
