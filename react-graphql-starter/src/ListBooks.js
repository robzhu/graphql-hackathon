import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router';

const query = gql`
{
  books {
    description
    id
    image
    title
  }
}
`;

function Book({id, image, title}) {
  return (
    <div style={{ flex: '1 0 300px' }}>
      <div style={{
        border: '1px solid rgba(0, 0, 0, 0.12)',
        padding: '24px'
      }}>
        <Link to={`/books/${id}`}>
          <img alt={title} height={250} src={image}/>
        </Link>
          <p>
            {title}
          </p>
      </div>
    </div>);
}

// higher-order fn that will give data from the query to a UI component.
const BooksContainer = graphql(query);

let ListBooks = function ListBooks({ data }) {
  if (data.error) {
    console.log(data.error);
    return (<div>An error occurred.
      <pre>{JSON.stringify(data.error, 0, 1)}</pre>
    </div>);
  }

  return (
    <div
      style={{
        maxWidth: '680px',
        margin: '0 auto'
      }}
    >
      <div
        style={{
          flexWrap: 'wrap',
          display: 'flex'
        }}
      >
        {
          data.loading ? (
            <p>Books will be here soon</p>

          ) : (
            data.books.map((book) => {
              return <Book key={book.id} {...book} />
            })
          )
        }
      </div>
    </div>
  );
};

export default BooksContainer(ListBooks);
