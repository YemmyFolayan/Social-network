import React, { Component } from 'react';
import {Card, CardBody} from 'reactstrap';
import injectStyles from 'react-jss';
import styles from './Placeholder.style';
import {Line} from 'components/loaders';

class Placeholder extends Component {
  render() {
    let {classes} = this.props;

    return (
      <Card className={classes.placeholder}>
        <CardBody className={classes.top}>
          <Line width={150} />
          <Line width={75} height={7.5} />
        </CardBody>

        <CardBody className={classes.bottom}>
          <Line width={'80%'} />
          <Line width={'80%'} />
          <Line width={'65%'} />
        </CardBody>
      </Card>
    );
  }
}

export default injectStyles(styles)(Placeholder);
