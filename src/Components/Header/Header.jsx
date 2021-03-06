import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';


export default class Header extends React.Component {
  constructor(props) {
    super(props);
    Header.propTypes = {
      text: PropTypes.string,
    };
    Header.defaultProps = {
      text: 'default',
    };
    this.state = {
      text: props.text,
    };
  }

  style = {
    'background-color' : '#9f4141',
  }

  render() {
    return (
      <div className="header">
        <p >{this.state.text}</p>
      </div>
    );
  }
}
