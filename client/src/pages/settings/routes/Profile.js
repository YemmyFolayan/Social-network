import React, { Component } from 'react';
import injectStyles from 'react-jss';
import styles from '../style';
import Fields from '../Fields';
import {updateProfileInfo} from 'graphql/mutations';
import {compose, graphql} from 'react-apollo';

const fields = [{
  name: 'gender',
  type: 'select',
  label: 'Gender',
  text: 'What gender are you?',
  options: [{
    value: 'male',
    label: 'Male'
  }, {
    value: 'female',
    label: 'Female'
  }, {
    value: 'other',
    label: 'Other'
  }]
}, {
  name: 'age',
  type: 'text',
  label: 'Age',
  text: 'How old are you?'
}, {
  name: 'about',
  type: 'text',
  label: 'About',
  text: 'Write something about your self.'
}, {
  name: 'phone',
  type: 'text',
  label: 'Phone number',
  text: 'What is your phone number?'
}]

class Profile extends Component {
  handleSubmit = (variables) => {
    return this.props.updateProfileInfo({variables})
  }

  render() {
    let {classes, user} = this.props;

    return (
      <div>
        <h1 className={classes.title}>Profile info</h1>
        <Fields user={user} handleSubmit={this.handleSubmit} fields={fields}/>
      </div>
    );
  }
}

export default compose(
  graphql(updateProfileInfo, {name: 'updateProfileInfo'})
)(injectStyles(styles)(Profile))