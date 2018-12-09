import React, { Component } from 'react';
import {Card, CardBody} from 'reactstrap';
import injectStyles from 'react-jss';
import styles from './Info.style';


class Info extends Component {
  render() {
    let {classes, user} = this.props;
    let address = user.address || {}

    return (
      <Card className={classes.root}>
        <CardBody>
          <h4 className={classes.title}>Personal info</h4>

          <div className={classes.info}>
            <div className={classes.item}>
              <h5>Gender:</h5>
              <p>{user.gender || 'No gender info to show.'}</p>
            </div>

            <div className={classes.item}>
              <h5>Age:</h5>
              <p>{user.age ? `${user.age} years old` : 'No age info to show.'}</p>
            </div>

            <div className={classes.item}>
              <h5>Phone:</h5>
              <p>{user.phone || 'No phone info to show.'}</p>
            </div>

            <div className={classes.item}>
              <h5>Address:</h5>
              <p>{address.street || '- '}, {address.city || '- '}, {address.country || '- '}</p>
            </div>
          </div>
        </CardBody>
      </Card>
    );
  }
}

export default injectStyles(styles)(Info)
