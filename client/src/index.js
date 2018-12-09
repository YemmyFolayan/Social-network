import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { withClientState } from 'apollo-link-state';
import { ApolloLink } from 'apollo-link';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'react-jss'
import * as serviceWorker from './serviceWorker';
import resolvers from 'graphql/state/resolvers'
import defaults from 'graphql/state/defaults'


// JSS theme props
import theme from 'assets/jss/theme';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Font awesome
import 'font-awesome/css/font-awesome.min.css'; 

// Custom styles
import 'assets/css/style.css';

const cache = new InMemoryCache({
  dataIdFromObject: object => object.id || null
})

const clientLink = new withClientState({
  resolvers,
  defaults,
  cache
})

const httpLink = new HttpLink({
  uri: "/graphql",
  credentials: 'same-origin'
})

const link = ApolloLink.from([clientLink, httpLink])
const client = new ApolloClient({link, cache});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Router>
  </ApolloProvider>, 
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
