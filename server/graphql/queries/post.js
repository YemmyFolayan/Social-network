const graphql = require('graphql');
const Post = require('../../controllers/post');
const PostType = require('../types/post');

const {
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLString
} = graphql;

const postQueries = {
  posts: {
    type: new GraphQLList(PostType),
    args: {
      limit: {type: GraphQLInt},
      offset: {type: GraphQLInt}
    },
    resolve: (parent, args, req) => {
      return Post.getAll({req, args})
    }
  },
  post: {
    type: PostType,
    args: {
      id: {type: GraphQLID}
    },
    resolve: (parent, args, req) => {
      return Post.getOne({req, args})
    }
  },
  postsByTag: {
    type: new GraphQLList(PostType),
    args: {
      tag: {type: GraphQLString},
      limit: {type: GraphQLInt},
      offset: {type: GraphQLInt}
    },
    resolve: (parent, args, req) => {
      return Post.getByTag({args, req})
    }
  },
  postsByAuthor: {
    type: new GraphQLList(PostType),
    args: {
      author: {type: GraphQLID},
      limit: {type: GraphQLInt},
      offset: {type: GraphQLInt}
    },
    resolve: (parent, args, req) => {
      return Post.getByAuthor({args, req})
    }
  }
}

module.exports = postQueries;