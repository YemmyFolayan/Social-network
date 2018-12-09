const graphql = require('graphql');
const UserType = require('../types/user');
const RequestType = require('../types/request');

const user = require('../../controllers/user');
const auth = require('../../controllers/auth');

const {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID
} = graphql;

const ContactFields = new GraphQLInputObjectType({
  name: 'ContactFields',
  fields: () => ({
    firstName: {type: GraphQLString},
    lastName: {type: GraphQLString},
    email: {type: GraphQLString}
  })
})

const ProfileFields = new GraphQLInputObjectType({
  name: 'ProfileFields',
  fields: () => ({
    gender: {type: GraphQLString},
    age: {type: GraphQLString},
    phone: {type: GraphQLString},
    about: {type: GraphQLString}
  })
})

const AddressFields = new GraphQLInputObjectType({
  name: 'AddressFields',
  fields: () => ({
    city: {type: GraphQLString},
    street: {type: GraphQLString},
    country: {type: GraphQLString}
  })
})


const userMutation = {
  signup: {
    type: UserType,
    args: {
      email: {type: GraphQLString},
      password: {type: GraphQLString},
      firstName: {type: GraphQLString},
      lastName: {type: GraphQLString}
    },
    resolve: (parent, args, req) => {
      return auth.signup({args, req});
    }
  },
  login: {
    type: UserType,
    args: {
      email: {type: GraphQLString},
      password: {type: GraphQLString},
    },
    resolve: (parent, {email, password}, req) => {
      return auth.login({email, password, req})
    }
  },
  logout: {
    type: UserType,
    resolve: (parent, args, req) => {
      req.logout();
      return req.user;
    }
  },
  updateContactInfo: {
    type: UserType,
    args: {
      id: {type: GraphQLID},
      update: {type: ContactFields}
    },
    resolve: (parent, args, req) => {
      return user.updateContactInfo({parent, args, req});
    }
  },
  updateProfileInfo: {
    type: UserType,
    args: {
      id: {type: GraphQLID},
      update: {type: ProfileFields}
    },
    resolve: (parent, args, req) => {
      return user.updateProfileInfo({parent, args, req});
    }
  },
  updateAddressInfo: {
    type: UserType,
    args: {
      id: {type: GraphQLID},
      update: {type: AddressFields}
    },
    resolve: (parent, args, req) => {
      return user.updateAddressInfo({parent, args, req});
    }
  },
  sendFriendRequest: {
    type: RequestType,
    args: {
      id: {type: GraphQLID}
    },
    resolve: (parent, args, req) => {
      return user.sendFriendRequest({parent, args, req});
    }
  },
  respondToFriendRequest: {
    type: RequestType,
    args: {
      requestId: {type: GraphQLID},
      response: {type: GraphQLString}
    },
    resolve: (parent, args, req) => {
      return user.respondToFriendRequest({parent, args, req});
    }
  },
  cancelFriendRequest: {
    type: RequestType,
    args: {
      id: {type: GraphQLID}
    },
    resolve: (parent, args, req) => {
      return user.cancelFriendRequest({parent, args, req});
    }
  },
  unfriend: {
    type: UserType,
    args: {
      id: {type: GraphQLID}
    },
    resolve: (parent, args, req) => {
      return user.unfriend({parent, args, req});
    }
  }
}

module.exports = userMutation;