import gql from 'graphql-tag';
import {postFields} from '../fragments';

const getSidebar = gql`
query Sidebar {
  sidebar @client {
    isOpen
  }
}
`

const getPosts = gql`
query Posts {
  posts @client {
    ...postFields
  }
}${postFields}
`


export {
  getSidebar,
  getPosts
}