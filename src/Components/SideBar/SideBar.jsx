import React from 'react';
import PropTypes from 'prop-types';
import './SideBar.css';


export default class SideBar extends React.Component {
  constructor(props) {
    super(props);
    SideBar.propTypes = {
      text: PropTypes.string,
    };
    SideBar.defaultProps = {
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
      <div className="sideBar">
          {this.state.text}
        
      </div>
    );
  }
}