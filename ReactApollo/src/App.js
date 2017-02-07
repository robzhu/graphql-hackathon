import React, { Component } from 'react';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import './App.css';

import BookSearch from './BookSearch';
import BookDetails from './BookDetails';

const Layout = ({ children }) => (
  <div>{ children }</div>
);

class App extends Component {
  constructor(...args) {
    super(...args);

    const networkInterface = createNetworkInterface({
      uri: 'http://localhost:5000/graphql',
      opts: { cors: true },
    });

    this.client = new ApolloClient({
      networkInterface,

      // Our backend has unique IDs, so we should use them for cache consistency
      dataIdFromObject: r => r.id,
    });
  }
  render() {
    return (
      <ApolloProvider client={this.client}>
        <Router history={browserHistory}>
          <Route path="/" component={Layout}>
            <IndexRoute component={BookSearch} />
            <Route path="/details/:bookId" component={BookDetails} />
          </Route>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
