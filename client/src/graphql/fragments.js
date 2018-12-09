import gql from 'graphql-tag';

const postFields = gql`
fragment postFields on PostType {
  id
  body
  tags
  date
  rating {
    upvotes
    downvotes
  }
  author {
    id
    firstName
    lastName
  }
  comments {
    id
    body
    date
    rating {
      upvotes
      downvotes
    }
    author {
      id
      firstName
      lastName
    }
  }
}
`

const userContactFields = gql`
fragment userContactFields on UserType {
  id
  email
  firstName
  lastName
}
`

const userProfileFields = gql`
fragment userProfileFields on UserType {
  id
  gender
  age
  about
  phone
}
`

const userAddressFields = gql`
fragment userAddressFields on UserType {
  id
  address {
    city
    street
    country
  }
}`


const userAllFields = gql`
fragment userAllFields on UserType {
  id
  email
  firstName
  lastName
  gender
  age
  about
  phone
  address {
    street
    city
    country
  }
  friends {
    id
    firstName
    lastName
    email
    profile_picture
  }
}
`

export {
  postFields,
  userAllFields,
  userContactFields,
  userProfileFields,
  userAddressFields
}