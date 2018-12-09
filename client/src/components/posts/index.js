import React, { Component } from 'react';
import {withApollo} from "react-apollo";
import {current} from 'graphql/queries';
import Placeholder from './Placeholder';
import PostsList from './PostsList';
import injectSheet from 'react-jss';
import styles from './style';

class PostList extends Component {
  posts = () => {
    let {posts, loading, classes, loadMore} = this.props;
    const {user} = this.props.client.readQuery({query: current})

    if(loading && (posts && !posts.length)) return <Placeholder />
    else if(!loading && !posts) return <div className={classes.empty}>No posts found</div>
    else if(!posts.length) return <div className={classes.empty}>No posts found</div>
    else return <PostsList loadMore={loadMore} user={user} posts={posts} />
  }

  render() {
    return (
      <div>{this.posts()}</div>
    );
  }
}

export default withApollo(injectSheet(styles)(PostList))


