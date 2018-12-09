const graphql = require('graphql');
const userQueries = require('./queries/user');
const userMutations = require('./mutations/user');
const postMutations = require('./mutations/post');
const postQueries = require('./queries/post');


const {
  GraphQLObjectType,
  GraphQLSchema
} = graphql;

const query = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    ...userQueries,
    ...postQueries
  }
})

const mutation = new GraphQLObjectType({
  name: 'RootMutation',
  fields: {
    ...userMutations,
    ...postMutations
  }
})

module.exports = new GraphQLSchema({query, mutation});