import React from 'react';
import { withState } from 'recompose';
import BookSearchResults from './BookSearchResults';

// Use recompose to keep the state of the input so that we
// can use functional component syntax
const enhance = withState('keyword', 'setKeyword', '');

const BookSearch = ({ keyword, setKeyword }) => (
  <div>
    <input
      type="text"
      value={ keyword }
      onChange={(e) => setKeyword(e.target.value)}
    />

    {/*
      This component has a GraphQL query attached that uses
      the keyword prop as a variable, so Apollo will fetch
      the new results when the prop changes.
     */}
    <BookSearchResults keyword={keyword} />
  </div>
);

export default enhance(BookSearch);
