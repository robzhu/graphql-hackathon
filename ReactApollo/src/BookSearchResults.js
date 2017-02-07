import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

// The data prop, which is provided by the wrapper below, contains
// a `loading` key while the query is in flight and posts when it is ready
function BookSearchResults({ data: { loading, bookSearch } }) {
  if (loading) {
    return <div>Loading</div>;
  } else {
    return (
      <ul>
        {bookSearch.map(book =>
          <li key={book.id}>
            {book.title} by {book.author.name}
          </li>
        )}
      </ul>
    );
  }
}

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (BookSearchResults here)
export default graphql(gql`
  query BookSearchQuery($keyword: String!) {
    bookSearch(keyword: $keyword) {
      id
      image
      title
      author {
        id
        name
      }
    }
  }
`, {
  options: ({ keyword }) => ({ variables: { keyword } }),
})(BookSearchResults);
