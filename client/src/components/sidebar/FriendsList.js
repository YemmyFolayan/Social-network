import React, { Component } from 'react';
import injectStyles from 'react-jss';
import styles from './FriendsList.style';
import Avatar from 'components/avatar';

class FriendsList extends Component {
  render() {
    let {friends, classes} = this.props;

    if(!friends.length) {
      return <div className={classes.empty}>
        <span>No friends found</span>
      </div>
    }

    return friends.map(friend => {
      return (
        <div key={friend.id} className={classes.item}>
          <div className={classes.image}>
            <Avatar size="sm" />
          </div>

          <div className={classes.info}>
            <div className={classes.name}>
              <span>{friend.firstName}</span>
              <span>{friend.lastName}</span>
            </div>
          </div>
        </div>
      )
    })
  }
}

export default injectStyles(styles)(FriendsList)
