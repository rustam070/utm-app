import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {rootReducer} from './redux/rootReducer';
import {App} from './App';
import './styles/index.scss';

const store = createStore(rootReducer);

const app = (
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);

render(app, document.getElementById('root'));