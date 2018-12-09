import React from 'react';
import {Redirect, Route} from 'react-router-dom';

// const Auth = {
//   isLoggedIn(ChildComponent, user, url) {
//     return class IsLoggedIn extends Component {
//       componentWillMount() {
//         if(user) this.props.history.push(url)
//       }

//       componentWillUpdate() {
//         if(user) this.props.history.push(url)
//       }

//       render() {
//         return <ChildComponent {...this.props} />
//       }
//     }
//   },
//   checkUser(ChildComponent, user, url) {
//     return class CheckUser extends Component {
//       componentWillMount() {
//         if(!user) this.props.history.push(url)
//       }

//       componentWillUpdate() {
//         if(!user) this.props.history.push(url)
//       }

//       render() {
//         return <ChildComponent user={user} {...this.props} />
//       }
//     }
//   }
// }


function Private({component: Component, user, redirect, ...rest}) {
  return <Route {...rest} render={props => {
    return user ? (
      <Component user={user} {...props} />
    ) : (
      <Redirect to={{
        pathname: redirect, 
        state: {from: props.location}
      }} />
    )
  }} />
}


function PublicOnly({component: Component, user, redirect, ...rest}) {
  return <Route {...rest} render={props => {
    return user ? (
      <Redirect to={{
        pathname: redirect, 
        state: {from: props.location}
      }} />
    ) : (
      <Component {...props} />
    )
  }} />
}

function Public({component: Component, user, ...rest}) {
  return <Route {...rest} render={props => {
    return <Component {...props} user={user} />
  }} />
}


export {
  Private,
  PublicOnly,
  Public
}


// export default Auth;