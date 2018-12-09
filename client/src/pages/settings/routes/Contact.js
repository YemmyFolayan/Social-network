import React, { Component } from 'react';
import injectStyles from 'react-jss';
import styles from '../style';
import Fields from '../Fields';
import {updateContactInfo} from 'graphql/mutations';
import {compose, graphql} from 'react-apollo';


const fields = [{
  name: 'email',
  type: 'email',
  label: 'Email address',
  text: 'What is your email address?'
}, {
  name: 'firstName',
  type: 'text',
  label: 'First name',
  text: 'What is your first name?'
}, {
  name: 'lastName',
  type: 'text',
  label: 'Last name',
  text: 'What is your last name?'
}]

class Contact extends Component {
  handleSubmit = (variables) => {
    return this.props.updateContactInfo({variables})
  }

  render() {
    let {classes, user} = this.props;

    return (
      <div>
        <h1 className={classes.title}>Contact info</h1>
        <Fields user={user} handleSubmit={this.handleSubmit} fields={fields}/>
      </div>
    );
  }
}

export default compose(
  graphql(updateContactInfo, {name: 'updateContactInfo'})
)(injectStyles(styles)(Contact))
