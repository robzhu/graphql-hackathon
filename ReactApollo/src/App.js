import React, { Component } from 'react';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import './App.css';

import BookSearch from './BookSearch';

class App extends Component {
  constructor(...args) {
    super(...args);

    const networkInterface = createNetworkInterface('http://localhost:5000/graphql');

    this.client = new ApolloClient({
      networkInterface,

      // Our backend has unique IDs, so we should use them for cache consistency
      dataIdFromObject: r => r.id,
    });
  }
  render() {
    return (
      <ApolloProvider client={this.client}>
        <BookSearch />
      </ApolloProvider>
    );
  }
}

export default App;
