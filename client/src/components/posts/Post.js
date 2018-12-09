import React, { Component } from 'react';
import {Card} from 'reactstrap';
import {compose, graphql} from 'react-apollo';
import {Link, withRouter} from 'react-router-dom';
import injectStyles from 'react-jss';
import styles from './Post.style'
import CommentForm from './CommentForm';
import Comment from './Comment';

import {
  addComment,
  upvotePost,
  downvotePost,
  removePost,
  removeComment,
  updatePost
} from 'graphql/mutations';

import PostBody from './PostBody';


class Post extends Component {
  onSubmit = body => {
    let postId = this.props.post.id;
    return this.props.addComment({
      variables: {body, postId}
    })
  }

  removePost = id => {
    this.props.removePost({
      variables: {id}
    })
  }

  removeComment = commentId => {
    this.props.removeComment({
      variables: {commentId}
    })
  }

  upvotePost = id => {
    this.props.upvotePost({
      variables: {id}
    })
  }

  downvotePost = id => {
    this.props.downvotePost({
      variables: {id}
    })
  }

  updatePost = ({id, body}) => {
    this.props.updatePost({
      variables: {id, body}
    })
  }

  comments = ({post, classes, user}) => {
    return post.comments.map(comment => {
      return <Comment 
      removeComment={this.removeComment}
      user={user} key={comment.id} comment={comment} />
    })
  }

  tags = ({post, classes, match: {url}}) => {
    return <div className={classes.tags}>
      {post.tags.map(tag => {
        return <span key={tag}>
        <Link to={`/home/tags/${tag}`}
        className={classes.tag}>#{tag}</Link>
        </span>
      })}</div>
  }

  render() {
    let {classes, post, match, user} = this.props;

    return (
      <Card className={classes.post}>
        <div className={classes.top}>
          <PostBody 
          upvotePost={this.upvotePost}
          downvotePost={this.downvotePost}
          removePost={this.removePost}
          updatePost={this.updatePost}
          classes={classes} 
          user={user} 
          post={post} />

          <CommentForm onSubmit={this.onSubmit} />
        </div>

        <div className={classes.bottom}>
          {this.tags({post, classes, match})}
          {this.comments({post, classes, user})}
        </div>
      </Card>
    );
  }
}

export default compose(
  graphql(addComment, {name: 'addComment'}),
  graphql(upvotePost, {name: 'upvotePost'}),
  graphql(downvotePost, {name: 'downvotePost'}),
  graphql(removePost, {name: 'removePost'}),
  graphql(removeComment, {name: 'removeComment'}),
  graphql(updatePost, {name: 'updatePost'})
)(withRouter(injectStyles(styles)(Post)))
