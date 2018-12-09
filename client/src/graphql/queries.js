import gql from 'graphql-tag';
import {
  postFields,
  userAllFields,
  userContactFields
} from './fragments';


const current = gql`
query Current {
  user {
    ...userContactFields,
    requests {
      id
      sender {
        id
        firstName
        lastName
      }
      receiver {
        id
        firstName
        lastName
      }
    }
    friends {
      id
      firstName
      lastName
      email
    }
  }
}${userContactFields}`


const getProfile = gql`
query GetProfile($id: ID) {
  getProfile(id: $id) {
    ...userAllFields
  }
}${userAllFields}
`


const posts = gql`
  query Posts($offset: Int, $limit: Int) {
    posts(offset: $offset, limit: $limit) @connection(key: "posts") {
      ...postFields
    }
  }${postFields}
`


const postsByTag = gql`
query PostsByTag($tag: String, $offset: Int, $limit: Int) {
  postsByTag(tag: $tag, offset: $offset, limit: $limit) @connection(key: "posts") {
    ...postFields
  }
}${postFields}`


const postsByAuthor = gql`
query PostsByAuthor($author: ID, $offset: Int, $limit: Int) {
  postsByAuthor(author: $author, offset: $offset, limit: $limit) @connection(key: "posts") {
    ...postFields
  }
}${postFields}`


const peopleYouMayKnow = gql`
query PeopleYouMayKnow {
  peopleYouMayKnow {
    id
    profile_picture
    firstName
    lastName
  }
}`


export {
  posts,
  current,
  postsByTag,
  postsByAuthor,
  getProfile,
  peopleYouMayKnow
}