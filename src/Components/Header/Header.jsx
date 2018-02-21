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

  render() {
    return (
      <div >
        <p className="header" >{this.state.text}</p>
      </div>
    );
  }
}
