import React from 'react';
import Relay from 'react-relay';

import Author from './Author';

function App(props) {
  const authors = props.viewer.authors;

  return (
    <div>
      { authors.map((a) => <Author key={a.id} author={a} />) }
    </div>
  );
}

export default Relay.createContainer(App, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        authors {
          id
          ${Author.getFragment('author')}
        }
      }
    `,
  },
});

