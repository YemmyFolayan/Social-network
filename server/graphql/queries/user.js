const graphql = require('graphql');
const UserType = require('../types/user');
const user = require('../../controllers/user');

const {GraphQLID, GraphQLList} = graphql;

const userQueries = {
  user: {
    type: UserType,
    resolve: (parent, args, req) => {
      return req.user
    }
  },
  getProfile: {
    type: UserType,
    args: {
      id: {type: GraphQLID}
    },
    resolve: (parent, args, req) => {
      return user.getProfile({parent, args, req});
    }
  },
  peopleYouMayKnow: {
    type: new GraphQLList(UserType),
    resolve: (parent, args, req) => {
      return user.peopleYouMayKnow({parent, args, req});
    }
  }
}

module.exports = userQueries;