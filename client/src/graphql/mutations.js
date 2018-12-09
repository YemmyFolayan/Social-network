import gql from 'graphql-tag';
import {
  postFields, 
  userContactFields,
  userAddressFields,
  userProfileFields
} from './fragments';

const signup = gql`
mutation Signup(
$email: String,
$password: String,
$firstName: String,
$lastName: String
) {
  signup(
  email: $email,
  password: $password,
  firstName: $firstName,
  lastName: $lastName
  ) {
    id
    email
  }
}
`

const login = gql`
mutation Login(
$email: String,
$password: String
) {
  login(
  email: $email,
  password: $password
  ) {
    id
    email
  }
}
`

const logout = gql`
mutation Logout {
  logout {
    id
    email
  }
}
`

const addComment = gql`
mutation AddComment(
$postId: ID,
$body: String
) {
  addComment(
  postId: $postId,
  body: $body
  ) {
    ...postFields
  }
}${postFields}`


const upvotePost = gql`
mutation Upvote($id: ID) {
  upvotePost(id: $id) {
    id
    body
    rating {
      upvotes
      downvotes
    }
  }
}`

const downvotePost = gql`
mutation Downvote($id: ID) {
  downvotePost(id: $id) {
    id
    body
    rating {
      upvotes
      downvotes
    }
  }
}`


const removePost = gql`
mutation RemovePost($id: ID) {
  removePost(id: $id) {
    ...postFields
  }
  removePostState(id: $id) @client {
    id
  }
}${postFields}`


const removeComment = gql`
mutation RemoveComment($commentId: ID) {
  removeComment(commentId: $commentId) {
    ...postFields
  }
}${postFields}`


const addPost = gql`
mutation AddPost(
  $body: String,
  $tags: [String]
) {
  addPost(
    tags: $tags,
    body: $body
  ) {
    ...postFields
  }
}${postFields}`


const updatePost = gql`
mutation UpdatePost($id: ID, $body: String) {
  updatePost(id: $id, body: $body) {
    ...postFields
  }
}${postFields}`


const updateContactInfo = gql`
mutation UpdateContactInfo(
  $id: ID,
  $update: ContactFields
) {
  updateContactInfo(
    id: $id,
    update: $update
  ) {
    ...userContactFields
  }
}${userContactFields}
`


const updateProfileInfo = gql`
mutation UpdateProfileInfo(
  $id: ID,
  $update: ProfileFields
) {
  updateProfileInfo(
    id: $id,
    update: $update
  ) {
    ...userProfileFields
  }
}${userProfileFields}
`

const updateAddressInfo = gql`
mutation UpdateAddressInfo(
  $id: ID,
  $update: AddressFields
) {
  updateAddressInfo(
    id: $id,
    update: $update
  ) {
    ...userAddressFields
  }
}${userAddressFields}
`

const respondToFriendRequest = gql`
mutation RespondToFriendRequest(
  $requestId: ID,
  $response: String
) {
  respondToFriendRequest(
    requestId: $requestId,
    response: $response
  ) {
    id
  }
}`


const sendFriendRequest = gql`
mutation SendFriendRequest($id: ID) {
  sendFriendRequest(id: $id) {
    id
    date
    sender {
      firstName
    }
    receiver {
      firstName
    }
    status
  }
}`

const unfriend = gql`
mutation Unfriend($id: ID) {
  unfriend(id: $id) {
    id
    friends {
      id
      email
      profile_picture
      firstName
      lastName
    }
  }
}`


export {
  signup,
  login,
  logout,
  addPost,
  upvotePost,
  updatePost,
  downvotePost,
  removePost,
  addComment,
  removeComment,
  updateAddressInfo,
  updateProfileInfo,
  updateContactInfo,
  respondToFriendRequest,
  sendFriendRequest,
  unfriend
}