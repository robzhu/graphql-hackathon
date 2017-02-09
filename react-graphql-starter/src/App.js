import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router';

// Apollo Dev tools: https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm/related?hl=en-US
// First GraphQL app: https://medium.com/@abhiaiyer/your-first-graphql-component-ad018e22972c#.vc7fa5hz1
// Redux Dev Tools: https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd/reviews?hl=en
// Docs: http://dev.apollodata.com/react/index.html


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
<br/>
<br/>
<br/>
          <p><Link to="books/list">List Books</Link></p>
          <p><Link to="books/new">New Book</Link></p>
          <p><Link to="books/1">Book 1</Link></p>

      </div>
    );
  }
}

export default App;
