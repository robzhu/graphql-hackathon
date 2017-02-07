import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

// The data prop, which is provided by the wrapper below, contains
// a `loading` key while the query is in flight, and the bookSearch
// results when they are ready
const BookSearchResults = ({ data: { loading, bookSearch } }) => {
  if (loading) {
    return <div>Loading</div>;
  } else {
    return (
      <ul>
        {bookSearch.map(book =>
          <li key={book.id}>
            <Link to={`/details/${book.id}`}>
              {book.title} by {book.author.name}
            </Link>
          </li>
        )}
      </ul>
    );
  }
};

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component.
//
// Note that if you type a search field and then hit backspace, the
// Apollo cache kicks in and no actual data loading is done.
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
