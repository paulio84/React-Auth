/* global module */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';

import rootReducer from './store/reducers/rootReducer';
import firebaseConfig from './shared/config/firebaseConfig';

import App from './App';

const store = createStore(rootReducer);

const ReactReduxFirebaseProps = {
  firebase: firebaseConfig,
  config: { userProfile: 'users', useFirestoreForProfile: true },
  dispatch: store.dispatch,
  createFirestoreInstance
};

function renderApp() {
  ReactDOM.render(
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...ReactReduxFirebaseProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>,
    document.querySelector('#root')
  );
}

renderApp();

if (module.hot) {
  module.hot.accept(renderApp);
}