import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {UncontrolledDropdown, DropdownItem, DropdownToggle, DropdownMenu} from 'reactstrap';
import {Card, Button} from 'reactstrap';
import styles from './Notifications.style';
import injectStyles from 'react-jss';
import classNames from 'classnames';
import {compose, graphql} from 'react-apollo';
import {respondToFriendRequest} from 'graphql/mutations';
import {current} from 'graphql/queries';


const FriendRequest = props => {
  let {classes, request} = props;

  let onClick = response => {
    props.handleResponse({requestId: request.id, response})
  }

  return  <div className={classNames(
    classes.dropdownItem,
    classes.friendRequest
  )}>
    <div>
      <div className={classes.top}>
        <Link className={classes.name} to={`/profile/${request.sender.id}`}>
          <span>{request.sender.firstName}</span>
          <span>{request.sender.lastName}</span>
        </Link>

        <span className={classes.text}>sent you a friend request</span>
      </div>

      <div className={classes.options}>
        <Button 
        color='primary' 
        onClick={() => onClick('accepted')}
        className={classes.accept}>Accept</Button>
        <Button 
        onClick={() => onClick('declined')} 
        className={classes.decline}>Decline</Button>
      </div>
    </div>
  </div>
}


class Notifications extends Component {
  items = ({user, classes}) => {
    let requests = user.requests.filter(({receiver}) => {
      return receiver.id === user.id
    });

    if(!requests.length) {
      return <DropdownItem className={classes.dropdownItem}>
        <span className={classes.empty}>Nothing new</span>
      </DropdownItem>
    }

    return requests.map(request => {
      return <FriendRequest 
        handleResponse={this.handleResponse}
        request={request} 
        classes={classes} 
        key={request.id}
        user={user} />
    })
  }

  handleResponse = ({requestId, response}) => {
    this.props.respondToFriendRequest({
      variables: {requestId, response},
      refetchQueries: [{query: current}]
    })
  }

  toggle = ({user, classes}) => {
    return (
      <DropdownToggle className={classes.toggle} nav>
        <i className="fa fa-bell-o" aria-hidden="true"></i>
      </DropdownToggle>
    )
  }

  menu = ({user, classes}) => {
    return (
      <DropdownMenu className={classes.menu} right>
        <Card className={classes.card}>
          <div>
            {this.items({user, classes})}
          </div>
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

export default compose(
  graphql(respondToFriendRequest, {name: 'respondToFriendRequest'})
)(injectStyles(styles)(Notifications))
