import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
//import { createStore } from 'redux'
import rootReducer from './reducers/index'
import {configureStore} from './store.js'

let store = configureStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
