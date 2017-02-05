import React from 'react';
import Relay from 'react-relay';

import Book from './Book';

import './Author.css';

function Author({ author }) {
  return (
    <div className="author">
      <img src={author.image} />
      <h2>{author.name}</h2>
      <div className="books">
        { author.books.map((b) => <Book key={b.id} book={b} />)}
      </div>
    </div>
  );
}

export default Relay.createContainer(Author, {
  fragments: {
    author: () => Relay.QL`
      fragment on Author {
        name
        image
        books {
          id
          ${Book.getFragment('book')}
        }
      }
    `,
  },
});
