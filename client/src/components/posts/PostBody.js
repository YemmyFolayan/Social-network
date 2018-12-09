import React, { Component } from 'react';
import {CardBody, CardText} from 'reactstrap';
import moment from 'moment';
import {Input} from 'reactstrap'
import {Link} from 'react-router-dom';


class PostBody extends Component {
  state = {
    isEditable: false,
    isChanged: false,
    body: ""
  }

  componentWillMount = () => {
    this.setState({body: this.props.post.body})
  }

  handleChange = e => {
    this.setState({body: e.target.value, isChanged: true})
  }

  toggleEditable = () => {
    this.setState(({isEditable}) => ({isEditable: !isEditable}))
  }

  body = ({post, classes}) => {
    return <CardBody className={classes.body}>
      {this.bodyContent()}
    </CardBody>
  }

  bodyContent = () => {
    let {isEditable, body} = this.state;

    if(!isEditable) {
      return <CardText>{body}</CardText>
    }

    else {
      return <Input
      rows={4}
      value={body}
      type={'textarea'}
      onChange={this.handleChange} />
    }
  }

  saveUpdate = (id) => {
    let update = {id, body: this.state.body}

    this.setState({
      isChanged: false,
      isEditable: false
    }, () => {
      this.props.updatePost(update)
    })
  }

  controls = ({post, classes, user}) => {
    let {isEditable, isChanged} = this.state;

    return post.author.id === user.id ?
     <span className={classes.controls}>
      <span onClick={() => this.props.removePost(post.id)}>Remove</span>
      <span onClick={() => this.toggleEditable(post)}>{isEditable ? 'Cancel' : 'Update'}</span>
      {isEditable && isChanged && <span onClick={() => this.saveUpdate(post.id)}>Save</span>}
    </span> : null
  }

  header = ({post, classes}) => {
    return <CardBody className={classes.header}>
      <Link to={`/profile/${post.author.id}`} className={classes.author}>
        <span>{post.author.firstName}</span>
        <span>{post.author.lastName}</span>
      </Link>
      <div className={classes.date}>
        <span>{moment(post.date).fromNow()}</span>
      </div>
    </CardBody>
  }

  stats = ({post, classes}) => {
    return <CardBody className={classes.stats}>
      <span className={classes.statsItem}>
        <i onClick={() => this.props.upvotePost(post.id)} 
        className="fa fa-thumbs-o-up" 
        aria-hidden="true"></i>
        <span className={classes.value}>{post.rating.upvotes}</span>
      </span>

      <span className={classes.statsItem}>
        <i onClick={() => this.props.downvotePost(post.id)} 
        className="fa fa-thumbs-o-down" 
        aria-hidden="true"></i>
        <span className={classes.value}>{post.rating.downvotes}</span>
      </span>

      <span className={classes.statsItem}>
        <i className="fa fa-commenting-o" aria-hidden="true"></i>
        <span className={classes.value}>{post.comments.length}</span>
      </span>
    </CardBody>
  }

  render() {
    let {classes, post, user} = this.props;

    return (
      <div>
        {this.header({post, classes})}
        {this.body({post, classes})}
      
        <div className="d-flex align-items-center">
          {this.stats({post, classes})}
          {this.controls({post, classes, user})}
        </div>
      </div>
    );
  }
}

export default PostBody
