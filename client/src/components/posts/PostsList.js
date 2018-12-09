import React, { Component } from 'react';
import Post from './Post';
import {Button} from 'reactstrap';


class PostsList extends Component {
  render() {
    let {posts, user} = this.props;

    return (
      <div style={{marginTop: 15}}>
        { posts.map(post => <Post 
          {...this.props} 
          user={user} 
          key={post.id} 
          post={post} />)}

          <Button 
          onClick={this.props.loadMore}
          color="link">Load more</Button>
      </div>
    );
  }
}

export default PostsList
