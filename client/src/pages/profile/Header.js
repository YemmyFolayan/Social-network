import React, { Component } from 'react';
import injectStyles from 'react-jss';
import styles from './Header.style';
import {sendFriendRequest} from 'graphql/mutations';
import {current} from 'graphql/queries';
import {compose, graphql} from 'react-apollo';
import FriendButton from 'components/buttons/FriendButton';

class Header extends Component {
  handleClick = (id) => {
    this.props.sendFriendRequest({
      variables: {id},
      refetchQueries: [{query: current}]
    })
  }

  button = () => {
    let {user, classes, match} = this.props;

    if(!match) return null;
    if(!match.params.id) return null;
    if(user.id === match.params.id) return null;
    return <FriendButton 
    className={classes.friendButton}
    color="white" 
    size="md" 
    user={user} 
    person={match.params.id} />
  }

  render() {
    let {classes} = this.props;

    return (
      <div className={classes.header}>
        {this.button()}
      </div>
    );
  }
}

export default compose(
  graphql(sendFriendRequest, {name: 'sendFriendRequest'})
)(injectStyles(styles)(Header))
