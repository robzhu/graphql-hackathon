import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class ShowBook extends Component {
  render() {
    var {data} = this.props;

    if (data.loading) {
      return (<div>Loading</div>)
    }

    if (data.error) {
      console.log(data.error);
      return (<div>An unexpected error occurred</div>)
    }

    let book = data.bookByID;
    return (
      <div>
        <img height={300} role="presentation" src={book.image}/>
        <h1>{book.title}</h1>
        <p>{book.description}</p>
      </div>
    );
  }
}

const BookQuery = gql`
query BookQuery($id:String){
 bookByID(id: $id) {
    description
    image
    title
 }
}
`;

const ShowBookWithQuery = graphql(BookQuery, {
  options: (ownProps)=> ({
    variables: {
      id: ownProps.params.id
    }
  })
})(ShowBook);

export default ShowBookWithQuery;
