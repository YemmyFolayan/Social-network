import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {UncontrolledDropdown, DropdownItem, DropdownToggle, DropdownMenu} from 'reactstrap';
import {NavLink, Card} from 'reactstrap';
import styles from './Dropdown.style';
import injectStyles from 'react-jss';
import Avatar from 'components/avatar';


class Dropdown extends Component {
  user = ({user, classes}) => {
    return (
      <DropdownItem className={classes.item}>
        <Avatar size="md" />

        <div className={classes.content}>
          <div className={`${classes.name} ${classes.item}`}>
            <span>{user.firstName}</span>
            <span>{user.lastName}</span>
          </div>

          <div className={classes.email}>
            <span>{user.email}</span>
          </div>
        </div>
      </DropdownItem>
    )
  }

  items = ({user, classes}) => {
    return (
      <React.Fragment>
        <DropdownItem divider />

        <DropdownItem className={classes.dropdownItem}>
          <i className="fa fa-user-o" aria-hidden="true"></i>
          <NavLink tag={Link} to={'/profile'}>Profile page</NavLink>
        </DropdownItem>

        <DropdownItem className={classes.dropdownItem}>
          <i className="fa fa-cog" aria-hidden="true"></i>
          <NavLink tag={Link} to={'/settings'}>Account settings</NavLink>
        </DropdownItem>

        <DropdownItem className={classes.dropdownItem}>
          <i className="fa fa-sign-out" aria-hidden="true"></i>
          <NavLink onClick={this.props.handleLogout}>Logout</NavLink>
        </DropdownItem>
      </React.Fragment>
    )
  }

  toggle = ({user, classes}) => {
    return (
      <DropdownToggle className={classes.toggle} nav caret>
        <span>{user.firstName}</span>
        <span>{user.lastName}</span>
      </DropdownToggle>
    )
  }

  menu = ({user, classes}) => {
    return (
      <DropdownMenu className={classes.menu} right>
        <Card className={classes.card}>
          {this.user({user, classes})}
          {this.items({user, classes})}
        </Card>
      </DropdownMenu>
    )
  }

  render() {
    let {user, classes} = this.props;

    return (
      <UncontrolledDropdown  nav inNavbar>
        {this.toggle({user, classes})}
        {this.menu({user, classes})}
      </UncontrolledDropdown>
    );
  }
}

export default injectStyles(styles)(Dropdown)
