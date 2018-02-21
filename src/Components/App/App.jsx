import React from 'react';
import PropTypes from 'prop-types';
import SyncButton from '../SyncButton/SyncButton';


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
      isDbEmpty: null,
      textValue: props.textValue,
    };
  }

  componentDidMount() {
    fetch('/books/v2')
      .then((response) => {
        response.json().then((data) => {
          if (data.result[0] === undefined) {
            this.setState({
              isDbEmpty: true,
            });
          }
        });
      });
  }
  render() {
    if (this.state.isDbEmpty) {
      return (
        <div>
          <SyncButton />
        </div>
      );
    }
    return (
      <div>
        <p>DB has values</p>
      </div>
    );
  }
}
