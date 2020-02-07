/* global module */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './store/reducers/rootReducer';

import App from './App';

const store = createStore(rootReducer);

function renderApp() {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector('#root'));
}

renderApp();

if (module.hot) {
  module.hot.accept(renderApp);
}