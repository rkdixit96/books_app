import React from 'react';
import PropTypes from 'prop-types';


export default class AuthorContainer extends React.Component {
  constructor(props) {
    super(props);
    AuthorContainer.propTypes = {
      textValue: PropTypes.string,
    };
    AuthorContainer.defaultProps = {
      textValue: 'default',
    };
    this.state = {
      textValue: props.textValue,
    };
  }
  render() {
    return (
      <div>
        <p>{this.state.textValue}</p>
      </div>
    );
  }
}
