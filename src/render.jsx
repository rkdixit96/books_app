import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import './index.css';


import initStore from './redux/store';


ReactDOM.render(
  (
    <Provider store={initStore()}>
      <App textValue="Hi" />
    </Provider>
  ),
  document.getElementById('root'),
);

