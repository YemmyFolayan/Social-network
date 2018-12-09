import React, { Component } from 'react';
import injectStyles from 'react-jss';
import styles from './FilterFriends.style';
import {FormGroup, Input} from 'reactstrap';

class FilterFriends extends Component {
  state = {
    text: ""
  }

  handleChange = (e) => {
    this.setState({text: e.target.value.toLowerCase()}, () => {
      this.props.onChange(this.state)
    })
  }

  render() {
    let {classes} = this.props;

    return (
      <div className={classes.root}>
        <FormGroup className={classes.group}>
          <Input 
          type="text" 
          name="text"  
          className={classes.input}
          onChange={this.handleChange}
          value={this.state.text}
          placeholder="Search friends..." />
        </FormGroup>
      </div>
    );
  }
}

export default injectStyles(styles)(FilterFriends)
