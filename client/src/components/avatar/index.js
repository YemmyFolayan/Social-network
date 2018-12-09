import React, { Component } from 'react';
import injectStyles from 'react-jss';
import styles from './style';
import classNames from 'classnames';
import placeholder from 'assets/img/profile_placeholder.png';

class Avatar extends Component {
  render() {
    let {classes} = this.props;
    let className = classNames(
      classes.avatar,
      this.props.className
    )

    return (
      <div className={className}>
        <img 
        alt="avatar_picture"
        className={classes.img} 
        src={this.props.img || placeholder} />
      </div>
    );
  }
}

Avatar.defaultProps = {
  sm: {
    width: 35,
    height: 35
  },
  md: {
    width: 50,
    height: 50
  },
  lg: {
    width: 70,
    height: 70
  },
  margin: {
    
  }
}

export default injectStyles(styles)(Avatar)
