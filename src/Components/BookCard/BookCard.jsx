import React from 'react';
import PropTypes from 'prop-types';


export default class BookCard extends React.Component {
  constructor(props) {
    super(props);
    BookCard.propTypes = {
      name: PropTypes.string,
      rating: PropTypes.string,
      author: PropTypes.string,
      id: PropTypes.string,
    };
    BookCard.defaultProps = {
      name: 'default',
      rating: 'default',
      author: 'default',
      id: 'default',
    };
    this.state = {
      name: props.name,
      rating: props.rating,
      author: props.author,
      id: props.id,
    };
  }
  render() {
    return (
      <div>
        <p>{this.state.name}</p>
      </div>
    );
  }
}
