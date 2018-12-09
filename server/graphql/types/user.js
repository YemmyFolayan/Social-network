const graphql = require('graphql');
const Request = require('../../models/Request');
const User = require('../../models/User');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLID
} = graphql;


const AddressType = new GraphQLObjectType({
  name: 'Address',
  fields: () => ({
    city: {type: GraphQLString},
    country: {type: GraphQLString},
    street: {type: GraphQLString}
  })
})


const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: () => ({
    id: {type: GraphQLID},
    email: {type: GraphQLString},
    firstName: {type: GraphQLString},
    lastName: {type: GraphQLString},
    gender: {type: GraphQLString},
    age: {type: GraphQLString},
    about: {type: GraphQLString},
    phone: {type: GraphQLString},
    address: {type: AddressType},
    profile_picture: {type: GraphQLString},
    friends: {
      type: new GraphQLList(UserType),
      resolve: parent => {
        return User.find({_id: {$in: parent.friends}})
      }
    },
    requests: {
      type: new GraphQLList(RequestType),
      resolve: parent => {
        return Request.find({_id: {$in: parent.requests}})
      }
    }
  })
})


module.exports = UserType;
const RequestType = require('./request');

