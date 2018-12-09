const graphql = require('graphql');
const mongoose = require('mongoose');
const PostType = require('../types/post');
const CommentType = require('../types/comment');
const Post = require('../../controllers/Post')

const {
  GraphQLString,
  GraphQLList,
  GraphQLID
} = graphql;

const postMutations = {
  addPost: {
    type: PostType,
    args: {
      body: {type: GraphQLString},
      tags: {type: new GraphQLList(GraphQLString)},
    },
    resolve: (parent, args, req) => {
      return Post.create({parent, args, req})
    }
  },
  removePost: {
    type: PostType,
    args: {
      id: {type: GraphQLID}
    },
    resolve: (parent, args, req) => {
      return Post.remove({parent, args, req})
    }
  },
  updatePost: {
    type: PostType,
    args: {
      id: {type: GraphQLID},
      body: {type: GraphQLString}
    },
    resolve: (parent, args, req) => {
      return Post.updatePost({parent, args})
    }
  },
  upvotePost: {
    type: PostType,
    args: {
      id: {type: GraphQLID}
    },
    resolve: (parent, args, req) => {
      return Post.upvote({parent, args, req})
    }
  },
  downvotePost: {
    type: PostType,
    args: {
      id: {type: GraphQLID}
    },
    resolve: (parent, args, req) => {
      return Post.downvote({parent, args, req})
    }
  },
  addComment: {
    type: PostType,
    args: {
      postId: {type: GraphQLID},
      body: {type: GraphQLString}
    },
    resolve: (parent, args, req) => {
      return Post.addComment({parent, args, req})
    }
  },
  removeComment: {
    type: PostType,
    args: {
      commentId: {type: GraphQLID}
    },
    resolve: (parent, args, req) => {
      return Post.removeComment({parent, args, req})
    }
  },
  upvoteComment: {
    type: CommentType,
    args: {
      id: {type: GraphQLID}
    },
    resolve: (parent, args, req) => {
      return Post.upvoteComment({parent, args, req})
    }
  },
  downvoteComment: {
    type: CommentType,
    args: {
      id: {type: GraphQLID}
    },
    resolve: (parent, args, req) => {
      return Post.downvoteComment({parent, args, req})
    }
  }
}

module.exports = postMutations;
