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

const RequestType = new GraphQLObjectType({
  name: 'RequestType',
  fields: () => ({
    id: {type: GraphQLID},
    date: {
      type: new GraphQLScalarType({
        name: 'RequestDate',
        serialize: value => value
      })
    },
    sender: {
      type: UserType,
      resolve: (parent, args) => {
        return User.findById(parent.sender)
      }
    },
    receiver: {
      type: UserType,
      resolve: (parent, args) => {
        return User.findById(parent.receiver)
      }
    },
    status: {type: GraphQLString}
  })
})

module.exports = RequestType;
const UserType = require('./user');