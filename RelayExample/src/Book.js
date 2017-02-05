import React from 'react';
import Relay from 'react-relay';

import './Book.css';

function Book({ book }) {
  console.log(book.image)
  return (
    <div className="book">
      <img src={book.image} />
      <div>{book.title}</div>
    </div>
  );
}

export default Relay.createContainer(Book, {
  fragments: {
    book: () => Relay.QL`
      fragment on Book {
        title
        image
      }
    `,
  },
});

