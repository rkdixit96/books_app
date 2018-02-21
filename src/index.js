import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import './index.css';
import Header from './Components/Header/Header';
import SideBar from './Components/SideBar/SideBar';

import initStore from './redux/store';


ReactDOM.render(
  (
    <div>
      <SideBar test="BS" />
      <Header text="The Book Shelf" />
      <App textValue="Hi" />
    </div>
  ),
  document.getElementById('root'),
);

