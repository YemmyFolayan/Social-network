import React, { Component } from 'react';
import {Switch} from 'react-router-dom';
import {compose, graphql} from 'react-apollo';
import {current} from 'graphql/queries';
import {Private, PublicOnly, Public} from 'components/auth/Auth';

// Global styles
import injectStyles from 'react-jss';
import styles from 'assets/jss/global';

import Navbar from './navbar';
import Login from 'pages/auth/Login';
import Signup from 'pages/auth/Signup';
import Home from 'pages/home';
import Landing from 'pages/landing';
import Settings from 'pages/settings';
import Profile from 'pages/profile';
import Sidebar from 'components/sidebar';

class App extends Component {
  render() {
    let {current: {user, loading}} = this.props;
    
    if(loading) {
      return null;
    }
  
    return (
      <div id="app-content">
        <Navbar />

        <Switch>
          <PublicOnly exact path="/" redirect="/home" user={user} component={Landing} />
          <Private path="/home" redirect="/" user={user}  component={Home} />
          <Private path="/settings" redirect="/" user={user}  component={Settings} />
          <Public path="/profile/:id?" user={user}  component={Profile} />
          <PublicOnly path="/login" redirect="/home" user={user} component={Login} />
          <PublicOnly path="/signup" redirect="/home" user={user} component={Signup} />
        </Switch>

        <Sidebar />
      </div>
    );
  }
}

export default compose(
  graphql(current, {name: 'current'})
)(injectStyles(styles)(App))
