import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';
import App from './App';

import './index.css';

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('http://localhost:5000/graphql')
);

class LibraryRoute extends Relay.Route {
  static queries = {
    viewer: () => Relay.QL`
      query {
        viewer
      }
    `,
  };
  static routeName = 'LibraryRoute';
}

ReactDOM.render(
  <Relay.Renderer Container={App} environment={Relay.Store} queryConfig={new LibraryRoute()}/>,
  document.getElementById('root')
);
