const graphql = require('graphql');
const User = require('../../models/User');
const Comment = require('../../models/Comment');
const {
  GraphQLObjectType,
  GraphQLScalarType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLID
} = graphql;

const RatingType = new GraphQLObjectType({
  name: 'PostRating',
  fields: () => ({
    upvotes: {
      type: GraphQLInt
    },
    downvotes: {
      type: GraphQLInt
    }
  })
})


const PostType = new GraphQLObjectType({
  name: 'PostType',
  fields: () => ({
    id: {type: GraphQLID},
    body: {type: GraphQLString},
    tags: {type: new GraphQLList(GraphQLString)},
    author: {
      type: UserType,
      resolve: (parent) => {
        return User.findById(parent.author)
      }
    },
    date: {
      type: new GraphQLScalarType({
        name: 'PostDate',
        serialize: value => value
      })
    },
    comments: {
      type: new GraphQLList(CommentType),
      resolve: (parent) => {
        return Comment.find({_id: {$in: parent.comments}})
      }
    },
    rating: {type: RatingType}
  })
})

module.exports = PostType;
const UserType = require('./user');
const CommentType = require('./comment');
