import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

import authReducer from './authReducer';
import messageReducer from './messageReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  message: messageReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

export default rootReducer;