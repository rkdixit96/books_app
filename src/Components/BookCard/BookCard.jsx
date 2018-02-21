import React from 'react';
import PropTypes from 'prop-types';


export default class BookCard extends React.Component {
  constructor(props) {
    super(props);
    BookCard.propTypes = {
      title: PropTypes.string,
    };
    BookCard.defaultProps = {
      title: 'default',
      rating: 'default',
      author: 'default',
    };
    this.state = {
      title: props.title,
      rating: props.rating,
      author: props.author,
    };
  }
  render() {
    return (
      <div>
        <p>{this.state.title}</p>
      </div>
    );
  }
}
