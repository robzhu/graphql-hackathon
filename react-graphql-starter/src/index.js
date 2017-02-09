import ApolloClient, {createNetworkInterface} from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ListBooks from './ListBooks';
import NewBook from './NewBook';
import ShowBook from './ShowBook';
import {Router,Route,browserHistory} from 'react-router';
import './index.css';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: "http://localhost:5000"
  }),
  connectToDevTools: true
});

ReactDOM.render(
  (<ApolloProvider client={client}>
    <Router history={browserHistory}>
      <Route path="/" component={App}/>
      <Route path="books/list" component={ListBooks}/>
      <Route path="books/new" component={NewBook}/>
      <Route path="books/:id" component={ShowBook}/>
    </Router>
  </ApolloProvider>),
  document.getElementById('root')
);
