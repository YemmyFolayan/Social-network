const graphql = require('graphql');
const User = require('../../models/User');
const {
  GraphQLObjectType,
  GraphQLScalarType,
  GraphQLString,
  GraphQLList,
  GraphQLID,
  GraphQLInt
} = graphql;


const RatingType = new GraphQLObjectType({
  name: 'CommentRating',
  fields: () => ({
    upvotes: {
      type: GraphQLInt
    },
    downvotes: {
      type: GraphQLInt
    }
  })
})


const CommentType = new GraphQLObjectType({
  name: 'CommentType',
  fields: () => ({
    id: {type: GraphQLID},
    body: {type: GraphQLString},
    rating: {type: RatingType},
    date: {
      type: new GraphQLScalarType({
        name: 'CommentDate',
        serialize: value => value
      })
    },
    author: {
      type: UserType,
      resolve: (parent) => {
        return User.findById(parent.author)
      }
    }
  })
})

module.exports = CommentType;
const UserType = require('./user');