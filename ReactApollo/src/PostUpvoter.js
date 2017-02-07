import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

// A mutation is made available on a callback called `mutate`
// Other props of the wrapping component are passed through.
function PostUpvoter({ mutate, postId }) {
  return (
    <button onClick={() => mutate({ variables: { postId }})}>
      Upvote
    </button>
  )
}

// You can also use `graphql` for GraphQL mutations
export default graphql(gql`
  mutation upvotePost($postId: Int!) {
    upvotePost(postId: $postId) {
      id
      votes
    }
  }
`)(PostUpvoter);
