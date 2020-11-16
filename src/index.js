import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import { createStore } from 'redux'
import {App} from './App';
import './styles/index.css';
import reducer from './redux/reducer';

const store = createStore(reducer);

const app = (
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);

render(app, document.getElementById('root'));