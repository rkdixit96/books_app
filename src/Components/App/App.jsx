import React from 'react';
import PropTypes from 'prop-types';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    App.propTypes = {
      textValue: PropTypes.string,
    };
    App.defaultProps = {
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
