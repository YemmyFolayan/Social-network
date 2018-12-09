import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styles from './Comment.style';
import moment from 'moment';
import injectStyles from 'react-jss';

class Comment extends Component {
  header = ({comment, classes}) => {
    return <div>
      <Link to={`/profile/${comment.author.id}`} className={classes.author}>
        <span>{comment.author.firstName}</span>
        <span>{comment.author.lastName}</span>
      </Link>

      <span className={classes.date}>
        <span>{moment(comment.date).fromNow()}</span>
      </span>
    </div>
  }

  remove = (commentId) => {
    this.props.removeComment(commentId)
  }

  body = ({comment, classes}) => {
    return <p className={classes.text}>{comment.body}</p>
  }

  controls = ({comment, classes, user}) => {
    return user.id === comment.author.id && <div className={classes.controls}>
      <span onClick={() => this.remove(comment.id)}>Remove</span>
      <span>Update</span>
    </div>
  }

  render() {
    let {comment, classes, user} = this.props;

    return (
      <div className={classes.comment}>
        {this.header({comment, classes})}
        {this.body({comment, classes})}
        {this.controls({comment, classes, user})}
      </div>
    );
  }
}

export default injectStyles(styles)(Comment)
