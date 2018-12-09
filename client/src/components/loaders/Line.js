import React, { Component } from 'react';
import injectStyles from 'react-jss';
import styles from './Line.style';

class Line extends Component {
  render() {
    let {classes} = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.effect}></div>
      </div>
    );
  }
}

Line.defaultProps = {
  height: 10,
  width: '100px',
  color: '#eeeeee',
  lightColor: '#dddddd',
  margin: {
    bottom: 15
  }
}

export default injectStyles(styles)(Line);
