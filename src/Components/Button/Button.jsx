import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';


export default class Button extends React.Component {
  constructor(props) {
    super(props);
    Button.propTypes = {
      text: PropTypes.string,
      
    };
    Button.defaultProps = {
      text: 'default',
    };
    this.state = {
      text: props.text,
    };
  }

  style = {
    'background-color' : '#f77d3e',
  }

  render() {
    return (
      <div style={this.style}>
        <input type="button" />
      </div>
    );
  }
}