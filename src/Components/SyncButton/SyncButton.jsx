import React from 'react';
import PropTypes from 'prop-types';


export default class SyncButton extends React.Component {
  constructor(props) {
    super(props);
    SyncButton.propTypes = {
      textValue: PropTypes.string,
    };
    SyncButton.defaultProps = {
      textValue: 'default',
    };
    this.state = {
      textValue: props.textValue,
    };
  }

  populateDb = () => {
      fetch('/books', {
          method: 'POST',
    });
  }
  render() {
    return (
      <div>
        <input type="button" value = "Refresh" onClick={this.populateDb} />
      </div>
    );
  }
}
