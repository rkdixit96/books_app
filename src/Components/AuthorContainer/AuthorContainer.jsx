import React from 'react';
import PropTypes from 'prop-types';
import BookCard from '../BookCard/BookCard'


export default class AuthorContainer extends React.Component {
  constructor(props) {
    super(props);
    AuthorContainer.propTypes = {
      authorName: PropTypes.string,
    };
    AuthorContainer.defaultProps = {
      authorName: 'default',
    };
    this.state = {
      author: props.author,
      books: props.books,
    };
  }
  populateBooks = books => books.map(value => <BookCard name={value.name} rating={value.rating} id={value.id}  />);
  
  render() {
    return (
      <div>
        <h5>{this.state.author}</h5>
        {this.populateBooks(this.state.books)}
      </div>
    );
  }
}
