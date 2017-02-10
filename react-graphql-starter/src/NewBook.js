import React, { Component } from 'react';
//import { withRouter } from 'react-router'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

// description, image, title
class NewBook extends Component {
  state = {
    authorId: 0, // HARDCODED
    id: new Date().getTime(),
    description: "Mixing traditional heroic fantasy with a diverse and evolving cast of characters, George R.R. Martin's A Song of Ice and Fire centers on the politics and statecraft of the ruling families of Westeros and beyond. With a string of switching point of view narratives from lead and ancillary characters, and an overarching plot with more twists than a Dothraki hair braid, the novels have moved beyond staple fantasy bestsellers and into a cultural event as millions of fans discuss the HBO television series",
    image: 'https://03fcd67fd51850d3ba6b-6cb392df11a341bce8c76b1898d0c030.ssl.cf3.rackcdn.com/large/9780/0074/9780007448036.jpg',
    title: 'A Game of Thrones'
  }

  canSave = () => {
    return this.state.description && this.state.image && this.state.title
  }

  // Calls `this.props.mutate` function.
  handleSave = () => {
    const {authorId, id, description, image, title} = this.state;
    this.props.mutate({variables: {book: {authorId, id, description, image, title}}})
      .then(()=> {
        console.log("Saved book!");
        this.handleCancel()
      })
  }

  handleCancel = () => {
    this.props.router.replace('/books/list')
  }

  render() {
    return (
      <div style={{padding: "20px"}}>
        <input
          autoFocus
          size={75}
          value={this.state.title}
          placeholder='Title'
          onChange={(e) => this.setState({title: e.target.value})}
        />
        <br/>
        <br/>
        <textarea
          cols={73}
          rows={3}
          value={this.state.description}
          placeholder='description'
          type="text"
          onChange={(e) => this.setState({description: e.target.value})}
        />
        <br/>
        <br/>
        <input
          value={this.state.image}
          placeholder='Image URL'
          size={75}
          onChange={(e) => this.setState({image: e.target.value})}
        />
        <br/>
        <br/>
        <div>
          <button onClick={this.handleCancel}>Cancel</button>
          {this.canSave()
            ? <button onClick={this.handleSave}>Save</button>
            : <button disabled>Save</button>
          }
        </div>
      </div>
    );
  }
}

const createBookMutation = gql`
mutation addBook($book:BookInput) {
 addBook(book: $book) {
 id
 }
}
`;

const NewBookWithMutation = graphql(createBookMutation)(NewBook);

export default NewBookWithMutation;
