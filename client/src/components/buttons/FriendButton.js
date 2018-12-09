import React, { Component } from 'react';
import {Button} from 'reactstrap';
import injectStyles from 'react-jss';
import styles from './FriendButton.style';
import {compose, graphql} from 'react-apollo';
import {sendFriendRequest} from 'graphql/mutations';
import {current} from 'graphql/queries';
import classNames from 'classnames';


class FriendButton extends Component {
  handleClick = (id) => {
    this.props.sendFriendRequest({
      variables: {id},
      refetchQueries: [{query: current}]
    })
  }

  render() {
    let {color, size, user, person, style, classes} = this.props;

    size = size || 'md'
    color = color || 'primary';
    style = style || {}

    if(!user || !person) {
      return null;
    }

    if(user === person) {
      return null;
    }

    let isFriend = user.friends.some(({id}) => id === person);
    if(isFriend) {
      return null;
    }

    let isRequested = user.requests.some(({sender, receiver}) => {
      return person === sender.id || person === receiver.id
    })

    let icon = isRequested ? 'fa-check' : 'fa-user-plus';
    let text = isRequested ? 'Requested' : 'Add friend';

    let buttonClass = classNames(
      this.props.className,
      classes.button,
      {
        'btn-white': color === 'white'
      }
    )
    
    return <Button 
      style={style}
      onClick={() => this.handleClick(person)} 
      disabled={isRequested} 
      className={buttonClass}
      size={size} 
      color={color}>
      <i className={`fa ${icon}`} aria-hidden="true"></i>
      <span>{text}</span>
    </Button>
  }
}


export default compose(
  graphql(sendFriendRequest, {name: 'sendFriendRequest'})
)(injectStyles(styles)(FriendButton))