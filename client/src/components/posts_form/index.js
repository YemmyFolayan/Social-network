import React, { Component } from 'react';
import {compose, graphql} from 'react-apollo';
import {addPost} from 'graphql/mutations';
import {current} from 'graphql/queries';
import Form from './Form';
import {addPostState} from 'graphql/state/mutations';

class AddPost extends Component {
  onSubmit = ({body, tags}) => {
    return this.props.addPost({
      variables: {body, tags},
      update: (store, {data: {addPost: post}}) => {
        this.props.addPostState({
          variables: {post}
        })
      }
    })
  }

  render() {
    let {user} = this.props;

    return (
      <Form 
      user={user}
      onSubmit={this.onSubmit} />
    );
  }
}

export default compose(
  graphql(current, {
    name: 'user',
    options: {fetchPolicy: 'cache-only'}
  }),
  graphql(addPost, {name: 'addPost'}),
  graphql(addPostState, {name: 'addPostState'})
)(AddPost)
