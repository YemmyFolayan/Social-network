import gql from 'graphql-tag';

const toggleSidebarState = gql`
mutation ToggleSidebar {
  toggleSidebarState @client 
}
`

const addPostState = gql`
mutation AddPostState($post: PostType) {
  addPostState(post: $post) @client
}
`

const removePostState = gql`
mutation RemovePostState($id: ID) {
  removePostState(id: $id) @client
}
`

export {
  toggleSidebarState,
  addPostState,
  removePostState
}