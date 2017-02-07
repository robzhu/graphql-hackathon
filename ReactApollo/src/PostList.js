import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import PostUpvoter from './PostUpvoter';

// The data prop, which is provided by the wrapper below contains,
// a `loading` key while the query is in flight and posts when it is ready
function PostList({ data: { loading, posts } }) {
  if (loading) {
    return <div>Loading</div>;
  } else {
    return (
      <ul>
        {posts.sort((x, y) => y.votes - x.votes).map(post =>
          <li key={post.id}>
            {post.title} by {' '}
            {post.author.firstName} {post.author.lastName} {' '}
            <span>({post.votes} votes)</span>

            <PostUpvoter postId={post.id} />
          </li>
        )}
      </ul>
    );
  }
}

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList here)
export default graphql(gql`
  query allPosts {
    posts {
      id
      title
      votes
      author {
        id
        firstName
        lastName
      }
    }
  }
`)(PostList);
