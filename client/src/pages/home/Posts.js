import React, { Component } from 'react';
import {compose, graphql} from 'react-apollo';
import {posts, postsByTag} from 'graphql/queries';
import PostList from 'components/posts';


class Posts extends Component {
  render() {
    let {posts} = this.props;
    let {loading, fetchMore} = posts;
    let type = null;
    if(posts.posts) {
      type = 'posts';
      posts = posts.posts
    } else if(posts.postsByTag) {
      type = 'postsByTag';
      posts = posts.postsByTag
    }

    return <PostList 
    posts={posts} 
    loading={loading}
    loadMore={() => fetchMore({
      variables: {
        offset: posts.length
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return Object.assign({}, prev, {
          [type]: [...prev[type], ...fetchMoreResult[type]]
        });
      }
    })} />
  }
}


const All = compose(
  graphql(posts, {
    name: 'posts',
    options: { 
      fetchPolicy: 'cache-and-network',
      variables: {offset: 0, limit: 5}
    },
  })
)(Posts)


const PostsByTag = compose(
  graphql(postsByTag, {
    name: 'posts',
    options: ({match: {params}}) => ({
      fetchPolicy: 'cache-and-network',
      variables: {offset: 0, limit: 5, tag: params.tag}
    })
  })
)(Posts)




class PostsHoc extends Component {
  render() {
    let {match} = this.props;

    if(match.path === '/home') {
      return <All {...this.props} />
    }
    
    if(match.path === "/home/tags/:tag") {
      return <PostsByTag {...this.props} />
    }
  }
}

export default PostsHoc;


