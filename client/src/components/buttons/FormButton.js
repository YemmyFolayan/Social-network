import React, { Component } from 'react';
import {Button} from 'reactstrap';
import injectStyles from 'react-jss';
import classNames from 'classnames';
import styles from './FormButton.style';

class FormButton extends Component {
  render() {
    let {classes, loading, size, children, className} = this.props;

    let iconClasses = classNames(
      classes.spinner, 
      'fa fa-spinner fa-spin form-spinner', 
      `${loading ? classes.show : classes.hide}`
    )

    return (
      <Button
      type="submit"
      color="primary"
      size={size || ''}
      disabled={loading}
      className={classNames(className, classes.button)}>
      <span className={classes.text}>{children || 'Submit'}</span> 
      <i className={iconClasses}></i>
      </Button>
    );
  }
}

FormButton.defaultProps = {
  margin: {}
}

export default injectStyles(styles)(FormButton)
