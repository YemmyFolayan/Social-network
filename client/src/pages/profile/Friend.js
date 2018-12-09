import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';
import injectStyles from 'react-jss';
import styles from './Friends.style';
import Avatar from 'components/avatar';
import {unfriend} from 'graphql/mutations';
import {compose, graphql} from 'react-apollo';

class Friend extends Component {
  unfriend = (id) => {
    this.props.unfriend({
      variables: {id}
    })
  }

  button = () => {
    let {isSelf, classes, friend} = this.props;
    if(!isSelf) return null;
    else {
      return <Button 
        onClick={() => this.unfriend(friend.id)}
        className={classes.button} 
        size="small">Unfriend</Button>
    }
  }

  render() {
    let {friend, classes} = this.props;

    return (
      <div className={classes.friend}>
        <Avatar size="sm" />
        
        <div className={classes.info}>
          <div className={classes.left}>
            <Link to={`/profile/${friend.id}`} className={classes.name}>
              <span>{friend.firstName}</span>
              <span>{friend.lastName}</span>
            </Link>

            <div className={classes.email}>{friend.email}</div>
          </div>

          {this.button()}
        </div>
      </div>
    );
  }
}

export default compose(
  graphql(unfriend, {name: 'unfriend'})
)(injectStyles(styles)(Friend))
