import React, { Component } from 'react';
import injectStyles from 'react-jss';
import styles from './style';
import Field from './Field';
import {getProfile} from 'graphql/queries';
import {graphql, compose} from 'react-apollo';

class Fields extends Component {
  fields = ({fields, classes, handleSubmit, user}) => {
    return fields.map(field => {
      return <Field 
        user={user}
        field={field}
        key={field.name} 
        classes={classes}
        handleSubmit={handleSubmit}/>
    })
  }

  render() {
    let {classes, fields, handleSubmit, profile: {getProfile}} = this.props;


    return <div>{this.fields({fields, classes, handleSubmit, user: getProfile})}</div>
  }
}

export default compose(
  graphql(getProfile, {
    name: 'profile',
    options: ({user}) => ({
      variables: {id: user.id}
    })
  })
)(injectStyles(styles)(Fields))
