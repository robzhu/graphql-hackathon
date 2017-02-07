import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const BookDetails = ({ data: { loading, bookByID } }) => {
  if (loading || !bookByID) {
    return <div>Loading</div>;
  } else {
    return (
      <div>
        <h3>{bookByID.title}</h3>
        <p>By {bookByID.author.name}</p>
        <p>{bookByID.description}</p>
        <img src={bookByID.image} role="presentation"/>
      </div>
    );
  }
};

export default graphql(gql`
  query BookDetailsQuery($bookId: String!) {
    bookByID(id: $bookId) {
      id
      title
      image
      description
      author {
        id
        name
      }
    }
  }
`, {
  options: ({ params }) => {
    return { variables: { bookId: params.bookId } }
  },
})(BookDetails);
