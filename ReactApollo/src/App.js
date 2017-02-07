import React, { Component } from 'react';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import './App.css';

import PostList from './PostList';

class App extends Component {
  constructor(...args) {
    super(...args);

    const networkInterface = createNetworkInterface('http://localhost:8080/graphql');
    this.client = new ApolloClient({
      networkInterface,
      dataIdFromObject: r => r.id,
    });
  }
  render() {
    return (
      <ApolloProvider client={this.client}>
        <PostList />
      </ApolloProvider>
    );
  }
}

export default App;
