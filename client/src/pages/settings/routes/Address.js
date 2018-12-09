import React, { Component } from 'react';
import injectStyles from 'react-jss';
import styles from '../style';
import Fields from '../Fields';
import {updateAddressInfo} from 'graphql/mutations';
import {compose, graphql} from 'react-apollo';

const fields = [{
  name: 'city',
  type: 'text',
  label: 'City name',
  text: 'In what city do you live in?'
}, {
  name: 'street',
  type: 'text',
  label: 'Street name',
  text: 'What is the name of your street?'
}, {
  name: 'country',
  type: 'text',
  label: 'Country name',
  text: 'What is the name of your country?'
}]

class Address extends Component {
  handleSubmit = (variables) => {
    return this.props.updateAddressInfo({variables})
  }

  render() {
    let {classes, user} = this.props;

    return (
      <div>
        <h1 className={classes.title}>Address info</h1>
        <Fields user={user} handleSubmit={this.handleSubmit} fields={fields}/>
      </div>
    );
  }
}

export default compose(
  graphql(updateAddressInfo, {name: 'updateAddressInfo'})
)(injectStyles(styles)(Address))
