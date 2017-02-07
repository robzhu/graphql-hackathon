import React, { Component } from 'react';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import './App.css';

import BookSearchResults from './BookSearchResults';

class App extends Component {
  constructor(...args) {
    super(...args);

    const networkInterface = createNetworkInterface('http://localhost:5000/graphql');

    this.client = new ApolloClient({
      networkInterface,
      dataIdFromObject: r => r.id,
    });
  }
  render() {
    return (
      <ApolloProvider client={this.client}>
        <BookSearchResults keyword={'Harry'} />
      </ApolloProvider>
    );
  }
}

export default App;
