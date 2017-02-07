import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

// The data prop, which is provided by the wrapper below, contains
// a `loading` key while the query is in flight and posts when it is ready
function BookList({ data: { loading, books } }) {
  if (loading) {
    return <div>Loading</div>;
  } else {
    return (
      <ul>
        {books.map(post =>
          <li key={post.id}>
            {post.title} by {' '}
            {post.author.name} {' '}
          </li>
        )}
      </ul>
    );
  }
}

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (BookList here)
export default graphql(gql`
  query AllBooksQuery {
    books {
      id
      image
      title
      author {
        id
        name
      }
    }
  }
`)(BookList);
