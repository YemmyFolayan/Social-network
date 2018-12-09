import React, { Component } from 'react';
import {Card, CardBody} from 'reactstrap';
import injectStyles from 'react-jss';
import styles from './Friends.style';
import Friend from './Friend';



class Friends extends Component {
  friends = ({user}) => {
    return user.friends.map(friend => {
      return <Friend 
      key={friend.id} 
      isSelf={this.props.isSelf} 
      friend={friend} />
    })
  }

  render() {
    let {classes, user} = this.props;

    return (
      <Card className={classes.root}>
        <CardBody>
          <h4 className={classes.title}>Friends</h4>

          <div className={classes.friends}>
            {this.friends({user})}
          </div>
        </CardBody>
      </Card>
    );
  }
}

export default injectStyles(styles)(Friends)
