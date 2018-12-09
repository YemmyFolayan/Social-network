import React, { Component } from 'react';
import {graphql, compose} from 'react-apollo';
import {current} from 'graphql/queries';
import {getSidebar} from 'graphql/state/queries';
import Sidebar from './Sidebar';


class index extends Component {
  render() {
    let {sidebar: {sidebar}, user: {user}} = this.props;
    if(!user) return null;
    return <Sidebar isOpen={sidebar.isOpen} user={user} />
  }
}


export default compose(
  graphql(getSidebar, {
    name: 'sidebar'
  }),
  graphql(current, {
    name: 'user', 
    options: { 
      fetchPolicy: 'cache-only' 
    },
  })
)(index)
