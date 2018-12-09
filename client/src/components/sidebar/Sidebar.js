import React, { Component } from 'react';
import injectStyles from 'react-jss';
import styles from './Sidebar.style';
import {Card, CardBody} from 'reactstrap';
import FriendsList from './FriendsList';
import FilterFriends from './FilterFriends';
import classNames from 'classnames';

class Sidebar extends Component {
  state = {
    friends: [],
    filtered: []
  }

  componentWillReceiveProps(props) {
    let {user} = props;

    if(user.friends) {
      this.setState({
        friends: user.friends,
        filtered: user.friends
      })
    }
  }

  filter = ({text}) => {
    this.setState(({filtered, friends}) => ({
      filtered: friends.filter(({firstName, lastName}) => {
        firstName = firstName.toLowerCase()
        lastName = lastName.toLowerCase();
        return `${firstName} ${lastName}`.includes(text)
      })
    }))
  }

  render() {
    let {classes, isOpen} = this.props;
    let {filtered} = this.state;
    
    return (
      <div className={classNames(classes.root, {hide: !isOpen})}>
        <Card className={classes.card}>
          <CardBody className={classes.body}>
            <FriendsList friends={filtered} />
            <FilterFriends onChange={this.filter} />
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default injectStyles(styles)(Sidebar)
